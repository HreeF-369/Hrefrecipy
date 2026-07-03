import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
import { RECIPES_DATA } from "./src/services/recipesData";
import { GoogleGenAI } from "@google/genai";
import { db } from "./src/lib/firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

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

  try {
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
  } catch (e) {
    console.error("Firestore error in getRecipe server-side:", e);
  }
  
  // 4. Fallback to local hardcoded recipes
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
  return recipe;
}

// SSR Pre-rendering Helper
async function servePreRenderedHtml(req: any, res: any, indexHtmlPath: string) {
  try {
    if (!fs.existsSync(indexHtmlPath)) {
      return res.status(500).send("DishFit Server Error: index.html not found. Please ensure the project build is complete.");
    }
    
    let html = fs.readFileSync(indexHtmlPath, 'utf-8');
    
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
 
    // Inject Schema JSON-LD if present
    if (schemaScript) {
      html = html.replace('</head>', `${schemaScript}</head>`);
    }
 
    // Inject Pre-rendered content for crawlers
    if (preRenderedContent) {
      html = html.replace('<div id="root" class="w-full overflow-x-hidden"></div>', `<div id="root" class="w-full overflow-x-hidden">${preRenderedContent}</div>`);
    }
 
    res.send(html);
  } catch (error) {
    console.error("SSR Error:", error);
    try {
      if (fs.existsSync(indexHtmlPath)) {
        res.sendFile(indexHtmlPath);
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

    const systemPrompt = `You are Chef DishFit, a professional, helpful, and friendly AI kitchen assistant for the DishFit app.
Your goal is to help users find healthy, low-calorie (under 500 kcal) recipes from the DishFit database.
Be conversational, enthusiastic, and provide excellent culinary advice.
When suggesting recipes, MUST include their exact ID so the system can link them. Format suggested recipe IDs as [RECIPE_ID: id-here].

Here is the full DishFit Recipe Database:
${recipeContext}

Answer the user's query based ONLY on these recipes. If they ask for something not in the database, politely offer the closest alternative or suggest they try a different healthy category.`;

    // Convert history format if needed
    const contents = [];
    if (history.length > 0) {
       for (const msg of history) {
          contents.push({ role: msg.role === 'user' ? 'user' : 'model', parts: [{ text: msg.content }] });
       }
    }
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
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

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, { index: false }));
    app.get("*", (req, res) => {
      servePreRenderedHtml(req, res, path.join(distPath, "index.html"));
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
  app.use(express.static(distPath, { index: false }));
  app.get("*", (req, res) => {
    servePreRenderedHtml(req, res, path.join(distPath, "index.html"));
  });
}

export { app };
export default app;
