import express from "express";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
import { RECIPES_DATA } from "./src/services/recipesData.js";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(express.json());

// Initialize Gemini
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

const slugify = (str: string) => String(str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

async function getRecipe(slugOrId: string) {
  if (!slugOrId) return null;
  const targetSlug = slugify(slugOrId);

  // 1. Try local RECIPES_DATA first as it's near-instant and extremely reliable!
  let recipe = RECIPES_DATA.find(r => String(r.id).toLowerCase() === slugOrId.toLowerCase());
  if (!recipe) recipe = RECIPES_DATA.find(r => slugify(String(r.id)) === targetSlug);
  if (!recipe) recipe = RECIPES_DATA.find(r => slugify(r.title) === targetSlug);
  if (!recipe && targetSlug.length >= 3) {
    recipe = RECIPES_DATA.find(r => 
      slugify(String(r.id)).includes(targetSlug) || 
      targetSlug.includes(slugify(String(r.id))) || 
      slugify(r.title).includes(targetSlug) || 
      targetSlug.includes(slugify(r.title))
    );
  }
  if (recipe) return recipe;

  // 2. Query Firestore with a strict 3-second timeout to prevent hanging the server
  try {
    const firestorePromise = (async () => {
      const { db } = await import("./src/lib/firebase.js");
      const { doc, getDoc, collection, query, where, getDocs } = await import("firebase/firestore");

      // 1. Try to fetch directly by document ID (case-insensitive and exact)
      const recipeDocRef = doc(db, "recipes", slugOrId);
      const recipeDoc = await getDoc(recipeDocRef);
      if (recipeDoc.exists()) {
        return { id: recipeDoc.id, ...recipeDoc.data() };
      }

      if (slugOrId !== slugOrId.toLowerCase()) {
        const lowerDocRef = doc(db, "recipes", slugOrId.toLowerCase());
        const lowerDoc = await getDoc(lowerDocRef);
        if (lowerDoc.exists()) {
          return { id: lowerDoc.id, ...lowerDoc.data() };
        }
      }

      // 2. Query by slug field
      const recipesRef = collection(db, "recipes");
      const q = query(recipesRef, where("slug", "==", targetSlug));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const d = querySnapshot.docs[0];
        return { id: d.id, ...d.data() };
      }

      // 3. Scan the collection in Firestore to support ANY custom slug/title combination
      const allSnapshot = await getDocs(recipesRef);
      for (const d of allSnapshot.docs) {
        const data = d.data();
        const docId = d.id;
        const title = data.title || "";
        const slugField = data.slug || "";
        
        if (
          slugify(docId) === targetSlug ||
          slugify(title) === targetSlug ||
          slugify(slugField) === targetSlug
        ) {
          return { id: docId, ...data };
        }
      }
      return null;
    })();

    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
    const result = await Promise.race([firestorePromise, timeoutPromise]);
    if (result) return result;
  } catch (e) {
    console.error("Firestore error in getRecipe server-side:", e);
  }
  
  return null;
}

// Cache the raw template index.html in production to avoid synchronous disk reads on every single request
let cachedIndexHtml: string | null = null;
let indexHtmlExists = false;
let resolvedIndexHtmlPath: string | null = null;

// Search in common directories to locate index.html on Vercel or local container environments
function findResilientIndexHtmlPath(initialPath: string): string {
  if (resolvedIndexHtmlPath && fs.existsSync(resolvedIndexHtmlPath)) {
    return resolvedIndexHtmlPath;
  }

  const safeDirname = typeof __dirname !== 'undefined' ? __dirname : process.cwd();

  const searchPaths = [
    initialPath,
    path.join(process.cwd(), "dist", "index.html"),
    path.join(process.cwd(), "api", "dist", "index.html"),
    path.join(safeDirname, "dist", "index.html"),
    path.join(safeDirname, "..", "dist", "index.html"),
    path.join(safeDirname, "..", "..", "dist", "index.html"),
    path.join(safeDirname, "index.html"),
    path.join(safeDirname, "..", "index.html"),
    path.join(process.cwd(), "index.html")
  ];

  for (const p of searchPaths) {
    if (p && fs.existsSync(p)) {
      console.log(`[Resilient SSR] Found index.html at: ${p}`);
      resolvedIndexHtmlPath = p;
      return p;
    }
  }

  // Fallback scan of directories
  try {
    const scanDirs = [process.cwd(), safeDirname, path.join(process.cwd(), "..")];
    for (const dir of scanDirs) {
      if (!fs.existsSync(dir)) continue;
      const distCheck = path.join(dir, "dist", "index.html");
      if (fs.existsSync(distCheck)) {
        console.log(`[Resilient SSR] Found index.html via scan at: ${distCheck}`);
        resolvedIndexHtmlPath = distCheck;
        return distCheck;
      }
    }
  } catch (err) {
    console.error("[Resilient SSR] Error during directory scan:", err);
  }

  console.error(`[Resilient SSR] index.html not found in any of the attempted locations:`, searchPaths);
  return initialPath;
}

// SSR Pre-rendering Helper
async function servePreRenderedHtml(req: any, res: any, indexHtmlPath: string) {
  const resolvedPath = findResilientIndexHtmlPath(indexHtmlPath);
  try {
    let html = cachedIndexHtml;
    
    if (!html || process.env.NODE_ENV !== "production") {
      if (!fs.existsSync(resolvedPath)) {
        return res.status(500).send("DishFit Server Error: index.html not found. Please ensure the project build is complete.");
      }
      
      html = fs.readFileSync(resolvedPath, 'utf-8');
      if (process.env.NODE_ENV === "production") {
        cachedIndexHtml = html;
      }
    }
    
    let title = "DishFit | Healthy & Low-Calorie Fitness Recipes for Weight Loss";
    let description = "Discover high-protein, low-calorie fitness meals and healthy recipes under 500 kcal. Perfect for clean eating, weight loss, and meal prepping.";
    let imageUrl = "/logo-og.png";
    let url = `https://dishfit.net${req.path}`;
    let ogType = "website";
    let preRenderedContent = "";
    let schemaScript = "";
    
    // Check if it's a recipe page
    const recipeMatch = req.path.match(/^\/recipe\/([^\/]+)/);
    if (recipeMatch) {
      const slug = recipeMatch[1];
      const recipe: any = await getRecipe(slug);
      
      if (recipe) {
        ogType = "recipe";
        title = `${recipe.title} Recipe - Low Calorie Healthy Meal | DishFit`;
        description = recipe.description || `Learn how to make this healthy ${String(recipe.category || '').toLowerCase()} recipe with only ${recipe.calories || 'under 500'} and high protein. Perfect for fitness goals.`;
        imageUrl = recipe.image || imageUrl;
        
        let caloriesVal = 350;
        if (recipe.calories) {
          caloriesVal = parseInt(String(recipe.calories)) || 350;
        } else if (recipe.nutrition?.nutrients) {
          const calNut = recipe.nutrition.nutrients.find((n: any) => n.name && n.name.toLowerCase() === 'calories');
          if (calNut && calNut.amount) caloriesVal = parseInt(String(calNut.amount)) || 350;
        }
        
        // Map ingredients defensively
        const mappedIngredients: string[] = [];
        const rawIngredients = recipe.ingredients || recipe.extendedIngredients || [];
        if (Array.isArray(rawIngredients)) {
          rawIngredients.forEach((i: any) => {
            if (typeof i === 'string') {
              mappedIngredients.push(i);
            } else if (i && typeof i === 'object') {
              const name = i.name || i.original || '';
              if (name) mappedIngredients.push(name);
            }
          });
        }

        // Map instructions defensively
        const mappedInstructions: any[] = [];
        const rawInstructions = recipe.instructions;
        if (Array.isArray(rawInstructions)) {
          rawInstructions.forEach((step: any) => {
            if (typeof step === 'string') {
              mappedInstructions.push({
                "@type": "HowToStep",
                "text": step
              });
            } else if (step && typeof step === 'object') {
              const text = step.text || step.step || '';
              if (text) {
                mappedInstructions.push({
                  "@type": "HowToStep",
                  "text": text
                });
              }
            }
          });
        } else if (rawInstructions && typeof rawInstructions === 'string') {
          mappedInstructions.push({
            "@type": "HowToStep",
            "text": rawInstructions
          });
        }
        
        // Build Recipe Schema
        const recipeSchema = {
          "@context": "https://schema.org/",
          "@type": "Recipe",
          "name": recipe.title,
          "image": [imageUrl],
          "author": {
            "@type": "Organization",
            "name": "DishFit"
          },
          "datePublished": "2026-07-02",
          "description": description,
          "recipeYield": `${recipe.servings || 2} servings`,
          "recipeCategory": recipe.category || "General Healthy",
          "url": `https://dishfit.net/recipe/${recipe.id}`,
          "prepTime": recipe.prepTime ? `PT${parseInt(String(recipe.prepTime))}M` : "PT15M",
          "recipeIngredient": mappedIngredients,
          "recipeInstructions": mappedInstructions,
          "nutrition": {
            "@type": "NutritionInformation",
            "calories": `${caloriesVal} kcal`,
            "proteinContent": recipe.protein || "20g"
          }
        };
        schemaScript = `<script type="application/ld+json">${JSON.stringify(recipeSchema)}</script>`;
 
        // Build Related Recipes inside SSR for internal linking crawler support
        const related = RECIPES_DATA
          .filter(r => r.id !== recipe.id && r.category === recipe.category)
          .slice(0, 3);
        const relatedHtml = related.length > 0 
          ? `
            <h2>Related Healthy Recipes</h2>
            <ul>
              ${related.map(r => `<li><a href="/recipe/${r.id}">${r.title}</a> - High protein, healthy ${String(r.category || '').toLowerCase()} meal under 500 calories.</li>`).join('')}
            </ul>
          ` 
          : '';
 
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>${recipe.title}</h1>
            <p>Category: <strong>Healthy ${recipe.category || ''}</strong> | Calories: <strong>${recipe.calories || ''}</strong> | Protein: <strong>${recipe.protein || ''}</strong></p>
            <img src="${imageUrl}" alt="High protein low calorie ${recipe.title} recipe" style="max-width: 100%; height: auto; border-radius: 12px;"/>
            <p style="font-size: 1.1em; line-height: 1.6;">${description}</p>
            <h2>Ingredients for ${recipe.title}</h2>
            <ul>
              ${mappedIngredients.map((ing: string) => `<li>${ing}</li>`).join('')}
            </ul>
            <h2>Step-by-Step Cooking Instructions</h2>
            <ol>
              ${mappedInstructions.map((step: any) => `<li>${step.text}</li>`).join('')}
            </ol>
            ${relatedHtml}
          </div>
        `;
      } else {
        title = "Recipe Not Found | DishFit";
        preRenderedContent = `<div style="padding: 20px; text-align: center;"><h1>Recipe Not Found</h1><p>Sorry, the healthy recipe you are looking for is not in our database.</p><p><a href="/recipes">Browse All Recipes</a></p></div>`;
      }
    } else if (req.path === "/" || req.path === "") {
        // Pre-render home page content for indexing
        const featured = RECIPES_DATA.slice(0, 5);
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>DishFit - High Protein & Low Calorie Fitness Meals</h1>
            <p>${description}</p>
            <h2>Popular Healthy Recipes & Meal Prep Ideas</h2>
            <ul>
              ${featured.map(r => `<li><a href="/recipe/${r.id}">${r.title}</a> - ${r.description} (${r.calories})</li>`).join('')}
            </ul>
            <h2>Browse Recipes by Category</h2>
            <p>
              <a href="/recipes?cat=breakfast">Healthy Breakfast Recipes</a> | 
              <a href="/recipes?cat=lunch">High Protein Lunch Ideas</a> | 
              <a href="/recipes?cat=dinner">Low Calorie Dinner Recipes</a> |
              <a href="/recipes?cat=fitness">Fitness Meals & Protein Packs</a>
            </p>
          </div>
        `;
    } else if (req.path === "/recipes") {
        title = "Healthy & Low-Calorie Recipes Library | DishFit";
        description = "Browse our full library of delicious fitness-oriented healthy meals under 500 calories. Perfect for clean eating, protein packs, and easy meal prep.";
        const list = RECIPES_DATA.slice(0, 10);
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>Healthy & Low-Calorie Fitness Recipes</h1>
            <p>${description}</p>
            <h2>Explore our meal collection:</h2>
            <ul>
              ${list.map(r => `<li><a href="/recipe/${r.id}">${r.title}</a> - ${r.category} | ${r.calories}</li>`).join('')}
            </ul>
          </div>
        `;
    } else if (req.path === "/lunch" || req.path === "/recipes/lunch") {
        title = "Healthy & Low-Calorie Lunch Recipes for Weight Loss | DishFit";
        description = "Explore our collection of delicious, high-protein, and low-calorie lunch recipes under 500 kcal. Perfect for fitness goals, work meals, and healthy meal prepping.";
        const lunchRecipes = RECIPES_DATA.filter(r => String(r.category || '').toUpperCase() === 'LUNCH').slice(0, 8);
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>Healthy & Low-Calorie Lunch Recipes</h1>
            <p>${description}</p>
            <h2>High-Protein Lunch Ideas under 500 kcal:</h2>
            <ul>
              ${lunchRecipes.map(r => `<li><a href="/recipe/${r.id}">${r.title}</a> - ${r.calories} | ${r.protein} Protein</li>`).join('')}
            </ul>
          </div>
        `;
    } else if (req.path === "/breakfast" || req.path === "/recipes/breakfast") {
        title = "Healthy & Low-Calorie Breakfast Recipes - High Protein | DishFit";
        description = "Start your day with high-protein, low-calorie breakfast recipes under 500 kcal. Discover easy weight loss breakfast ideas and meal preps.";
        const breakfastRecipes = RECIPES_DATA.filter(r => String(r.category || '').toUpperCase() === 'BREAKFAST').slice(0, 8);
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>Healthy & Low-Calorie Breakfast Recipes</h1>
            <p>${description}</p>
            <h2>High-Protein Breakfast Ideas:</h2>
            <ul>
              ${breakfastRecipes.map(r => `<li><a href="/recipe/${r.id}">${r.title}</a> - ${r.calories} | ${r.protein} Protein</li>`).join('')}
            </ul>
          </div>
        `;
    } else if (req.path === "/dinner" || req.path === "/recipes/dinner") {
        title = "Healthy & Low-Calorie Dinner Recipes - Fitness Meals | DishFit";
        description = "End your day with delicious, low-calorie dinner recipes under 500 kcal. Discover high-protein fitness meals perfect for weight loss and clean eating.";
        const dinnerRecipes = RECIPES_DATA.filter(r => String(r.category || '').toUpperCase() === 'DINNER').slice(0, 8);
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>Healthy & Low-Calorie Dinner Recipes</h1>
            <p>${description}</p>
            <h2>Low-Calorie Dinner Ideas under 500 kcal:</h2>
            <ul>
              ${dinnerRecipes.map(r => `<li><a href="/recipe/${r.id}">${r.title}</a> - ${r.calories} | ${r.protein} Protein</li>`).join('')}
            </ul>
          </div>
        `;
    } else if (req.path === "/favorites") {
        title = "My Favorite Healthy Recipes - Saved Meal Planner | DishFit";
        description = "Access your saved fitness meals and favorite low-calorie recipes in one convenient place. Plan your weekly weight loss diet easily.";
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>My Favorite Healthy Recipes</h1>
            <p>${description}</p>
            <p><a href="/recipes">Explore more healthy recipes</a></p>
          </div>
        `;
    } else if (req.path === "/planner") {
        title = "Interactive Healthy Meal Planner & Diet Tracker | DishFit";
        description = "Plan your weekly high-protein, low-calorie fitness meals under 500 kcal. Tailor your weight loss diet and save time with smart planners.";
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>Healthy Weekly Meal Planner</h1>
            <p>${description}</p>
            <p><a href="/recipes">Choose recipes to add to your plan</a></p>
          </div>
        `;
    } else if (req.path === "/grocery") {
        title = "Automated Healthy Grocery List Planner | DishFit";
        description = "Automatically generate your grocery shopping list from your chosen high-protein, low-calorie fitness recipes. Eat clean and save time.";
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>Automated Grocery Shopping List</h1>
            <p>${description}</p>
            <p><a href="/planner">Plan your meals to generate lists</a></p>
          </div>
        `;
    } else if (req.path === "/blog") {
        title = "Culinary & Fitness Journal - Healthy Eating Tips | DishFit";
        description = "Discover weight loss meal plans, clean eating recipes, protein-rich diets, and professional cooking techniques on DishFit.";
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>DishFit Culinary & Fitness Journal</h1>
            <p>${description}</p>
            <h2>Latest Nutrition & Cooking Articles</h2>
            <ul>
              <li><a href="/blog/meal-prep-101">Healthy Meal Prep for Beginners</a></li>
              <li><a href="/blog/macro-tracking">How to Count Macros for Weight Loss</a></li>
              <li><a href="/blog/low-calorie-hacks">Delicious Low-Calorie Cooking Hacks</a></li>
            </ul>
          </div>
        `;
    } else if (req.path === "/about") {
        title = "About Our Healthy Recipe Mission | DishFit";
        description = "Learn more about DishFit's mission to make professional-grade fitness meal prep, low calorie recipes, and portion-controlled plans accessible to everyone.";
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>About DishFit</h1>
            <p>${description}</p>
            <p>Our team selects and crafts the finest high-protein meals under 500 kcal, so you don't have to compromise on taste to achieve your weight loss or fitness goals.</p>
            <p><a href="/">Back to Home</a> | <a href="/recipes">View Recipes</a></p>
          </div>
        `;
    } else if (req.path === "/guides") {
        title = "Fitness Cooking & Nutrition Guides | DishFit";
        description = "Step-by-step guides for clean eating, macro tracking, grocery list planning, and low-calorie culinary techniques.";
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>Healthy Cooking & Culinary Guides</h1>
            <p>${description}</p>
            <p>Learn tips and tricks on how to plan your weekly meals, prepare list of groceries, and build delicious protein boxes.</p>
            <p><a href="/recipes">Explore Recipes</a></p>
          </div>
        `;
    } else if (req.path === "/contact") {
        title = "Contact Us & Support | DishFit";
        description = "Have questions about our fitness meals or need support with your meal planner? Reach out to the DishFit culinary support team.";
        preRenderedContent = `
          <div style="padding: 20px; max-width: 800px; margin: 0 auto;">
            <h1>Contact DishFit</h1>
            <p>${description}</p>
            <p>Managed by the AIT OUALHYANE family. You can reach out to us at support@dishfit.net.</p>
          </div>
        `;
    }
 
    // Replace title tag
    html = html.replace(/<title>.*?<\/title>/gi, `<title>${title}</title>`);
    
    // Resilient helper to replace or inject meta tags safely without breaking on slash variations
    const setMetaTag = (nameOrProperty: string, value: string, isProperty: boolean = false) => {
      const attr = isProperty ? 'property' : 'name';
      const escapedName = nameOrProperty.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`<meta\\s+${attr}="${escapedName}"\\s+content="[^"]*"\\s*\\/?>`, 'i');
      if (regex.test(html)) {
        html = html.replace(regex, `<meta ${attr}="${nameOrProperty}" content="${value}" />`);
      } else {
        html = html.replace('</head>', `<meta ${attr}="${nameOrProperty}" content="${value}" />\n</head>`);
      }
    };

    setMetaTag('description', description);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', imageUrl, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('twitter:title', title, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', imageUrl, true);
    setMetaTag('twitter:url', url, true);
    setMetaTag('twitter:card', 'summary_large_image', true);
 
    // Inject Schema JSON-LD if present
    if (schemaScript) {
      html = html.replace('</head>', `${schemaScript}</head>`);
    }
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    // Inject Pre-rendered content for crawlers
    if (preRenderedContent) {
      html = html.replace('<div id="root" class="w-full overflow-x-hidden"></div>', `<div id="root" class="w-full overflow-x-hidden">${preRenderedContent}</div>`);
    }
 
    res.send(html);
  } catch (error) {
    console.error("SSR Error:", error);
    try {
      if (fs.existsSync(resolvedPath)) {
        res.sendFile(resolvedPath);
      } else {
        res.status(500).send("DishFit Server Error: index.html not found.");
      }
    } catch (err) {
      res.status(500).send("DishFit Server Error: " + (err instanceof Error ? err.message : String(err)));
    }
  }
}

// Chat API Route
app.post("/api/chat", async (req, res) => {
  if (!ai) {
    return res.status(500).json({ error: "Gemini API key is not configured" });
  }

  try {
    const { message, history = [] } = req.body;
    
    // Create a summarized version of recipes to pass as context
    const recipeContext = RECIPES_DATA.map(r => 
      `ID: ${r.id} | Title: ${r.title} | Category: ${r.category} | Calories: ${r.calories} | Desc: ${r.description}`
    ).join("\n");

    const systemPrompt = `You are Chef DishFit, a professional, helpful, warm, and friendly AI kitchen assistant for the DishFit app.
Your goal is to help users find healthy, fitness-aligned, and delicious recipes from the DishFit database, as well as answer culinary questions and keep them motivated!

CONVERSATIONAL BEHAVIOR GUIDELINES:
- You love chatting with users! If the user greets you (e.g. "Hello", "Hi", "Hey"), asks how you are doing (e.g. "How are you?", "How r u"), or says general things (e.g. "What's up", "What's your name?"), respond in a warm, welcoming, conversational, and chef-like friendly manner! Do NOT force a recipe search or suggest unrelated recipes for simple greetings or casual chat.
- If the user asks general conversational follow-up questions, responds with exclamation, confusion, or casual text (e.g., "What?", "Wow", "Interesting"), reply conversationally and helpfully, asking how you can assist them with their culinary goals.
- Be enthusiastic, positive, and provide encouraging and excellent culinary advice.

RECIPE SEARCH GUIDELINES:
- When the user asks for recipes, ingredients, meal ideas, or dishes: find the best match from the DishFit recipe database below.
- When recommending a recipe from the database, you MUST include its exact ID at the end of your message in the format [RECIPE_ID: id-here] so the app can render it as a clickable recipe card. Do NOT hallucinate IDs; only use the exact IDs provided in the database below.
- If they ask for a recipe, dish, or ingredient that does not exist in our database, politely and dynamically explain that we don't have that exact dish in our database yet, but offer the closest healthy match from our database or suggest exploring one of our food categories (Breakfast, Lunch, Dinner, Main Dishes, Desserts, Drinks, Fitness).

Here is the full DishFit Recipe Database:
${recipeContext}

Answer culinary queries based on these database recipes. Remind users that you are their personal kitchen assistant, here for chat, advice, and custom meal navigation.`;

    // Convert history format if needed
    const contents = [];
    if (history.length > 0) {
       for (const msg of history) {
          contents.push({ role: msg.role === 'user' ? 'user' : 'model', parts: [{ text: msg.content }] });
       }
    }
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    res.json({ content: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to process chat message" });
  }
});

// OAuth routes for Google Tasks
app.get('/api/auth/url', (req, res) => {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID || '',
    redirect_uri: `${req.protocol}://${req.get('host')}/auth/callback`,
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/tasks',
    access_type: 'offline',
    prompt: 'consent',
  });
  
  res.json({ url: `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}` });
});

app.get(['/auth/callback', '/auth/callback/'], async (req, res) => {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).send('No code provided');
  }

  try {
    const redirectUri = `${req.protocol}://${req.get('host')}/auth/callback`;
    const response = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    });

    const tokens = response.data;

    // Send success message with token to parent window
    res.send(`
      <html>
        <body>
          <script>
            if (window.opener) {
              window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS', token: '${tokens.access_token}' }, '*');
              window.close();
            } else {
              window.location.href = '/';
            }
          </script>
          <p>Authentication successful. This window should close automatically.</p>
        </body>
      </html>
    `);
  } catch (error: any) {
    console.error('OAuth callback error:', error.response?.data || error.message);
    res.status(500).send('Authentication failed');
  }
});

// generic_reminders:create logic
app.post("/api/generic_reminders/create", async (req, res) => {
  const { title, startDate, description, token } = req.body;
  
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Missing Google OAuth token" });
  }

  try {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dueDateString;

    if (startDate) {
      if (startDate.toLowerCase() === 'tomorrow') {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        d.setHours(0, 0, 0, 0);
        dueDateString = d.toISOString();
      } else if (startDate.toLowerCase() === 'today') {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        dueDateString = d.toISOString();
      } else {
        const targetDay = days.findIndex(d => d.toLowerCase() === startDate.toLowerCase());
        if (targetDay !== -1) {
          const d = new Date();
          d.setHours(0, 0, 0, 0);
          const day = d.getDay();
          const diff = targetDay - day;
          const daysToAdd = diff <= 0 ? diff + 7 : diff;
          d.setDate(d.getDate() + daysToAdd);
          dueDateString = d.toISOString();
        }
      }
    }

    const taskPayload: any = {
      title: title,
      notes: description,
    };

    if (dueDateString) {
      taskPayload.due = dueDateString;
    }
    
    // We send request to Google Tasks API
    const response = await axios.post(
      'https://tasks.googleapis.com/tasks/v1/lists/@default/tasks',
      taskPayload,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    res.json(response.data);
  } catch (error: any) {
    console.error('Error creating Google Task:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ error: 'Failed to create task in Google Tasks' });
  }
});

app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");
  const baseUrl = "https://dishfit.net";
  
  // List all static routes
  const staticRoutes = [
    "",
    "/recipes",
    "/blog",
    "/favorites",
    "/planner",
    "/grocery",
    "/about",
    "/guides",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/data-preference"
  ];
  
  // Dynamic routes could be appended here if we imported RECIPES_DATA
  // Since we don't import it in server right now to keep it lightweight, 
  // we'll just serve the static ones as the primary map.
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  staticRoutes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route}</loc>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    if (route === "") {
        xml += '    <priority>1.0</priority>\n';
    } else {
        xml += '    <priority>0.8</priority>\n';
    }
    xml += '  </url>\n';
  });
  
  // Dynamic Recipe Routes
  RECIPES_DATA.forEach(recipe => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/recipe/${recipe.id}</loc>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.6</priority>\n';
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  res.send(xml);
});

const staticOptions = {
  index: false,
  setHeaders: (res: any, filePath: string) => {
    // Check for cached file formats
    if (filePath.includes('/assets/') || filePath.match(/\.(js|css|woff2?|eot|ttf|otf|svg|png|jpe?g|gif|webp|avif|json)$/i)) {
      if (filePath.includes('/assets/') || filePath.match(/\.(woff2?)$/i)) {
        // Cache-busted files (Vite output and fonts) are cached for 1 year
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else {
        // Unhashed images, manifests, and icons are cached for 1 day
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
    }
  }
};

let viteInstance: any = null;

async function startServer() {
  const distPath = path.join(process.cwd(), "dist");

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    viteInstance = vite;
    app.use(vite.middlewares);

    // Dynamic development SPA fallback route for deep-linked paths
    app.get("*", async (req, res, next) => {
      if (req.path.startsWith("/api/") || req.path.startsWith("/auth/") || req.path === "/sitemap.xml") {
        return next();
      }

      const lastSegment = req.path.split("/").pop() || "";
      if (lastSegment.includes(".") && !req.path.startsWith("/recipe/") && !lastSegment.startsWith("recipe")) {
        return next();
      }

      try {
        const url = req.originalUrl || req.url;
        const templatePath = path.resolve(process.cwd(), "index.html");
        if (fs.existsSync(templatePath)) {
          let template = fs.readFileSync(templatePath, "utf-8");
          template = await vite.transformIndexHtml(url, template);
          res.status(200).set({ "Content-Type": "text/html" }).send(template);
        } else {
          next();
        }
      } catch (e) {
        if (vite) {
          vite.ssrFixStacktrace(e);
        }
        next(e);
      }
    });
  } else {
    app.use(express.static(distPath, staticOptions));
    app.get("*", (req, res, next) => {
      if (req.path.startsWith("/api/") || req.path.startsWith("/auth/") || req.path === "/sitemap.xml") {
        return next();
      }

      const lastSegment = req.path.split("/").pop() || "";
      if (lastSegment.includes(".") && !req.path.startsWith("/recipe/") && !lastSegment.startsWith("recipe")) {
        return next();
      }

      servePreRenderedHtml(req, res, path.join(distPath, "index.html")).catch(next);
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startServer();
} else {
  const distPath = path.join(process.cwd(), "dist");
  app.use(express.static(distPath, staticOptions));
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api/") || req.path.startsWith("/auth/") || req.path === "/sitemap.xml") {
      return next();
    }

    const lastSegment = req.path.split("/").pop() || "";
    if (lastSegment.includes(".") && !req.path.startsWith("/recipe/") && !lastSegment.startsWith("recipe")) {
      return next();
    }

    servePreRenderedHtml(req, res, path.join(distPath, "index.html")).catch(next);
  });
}

export { app };
export default app;
