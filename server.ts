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
const PORT = 3000;

app.use(express.json());

// Initialize Gemini
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }) : null;

const slugify = (str: string) => String(str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

async function getRecipe(slugOrId: string) {
  try {
    const recipeDocRef = doc(db, "recipes", slugOrId);
    const recipeDoc = await getDoc(recipeDocRef);
    if (recipeDoc.exists()) {
      return { id: recipeDoc.id, ...recipeDoc.data() };
    }
    const recipesRef = collection(db, "recipes");
    const q = query(recipesRef, where("slug", "==", slugify(slugOrId)));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const d = querySnapshot.docs[0];
      return { id: d.id, ...d.data() };
    }
  } catch (e) {
    console.error("Firestore error:", e);
  }
  
  const targetSlug = slugify(slugOrId);
  let recipe = RECIPES_DATA.find(r => String(r.id).toLowerCase() === slugOrId.toLowerCase());
  if (!recipe) recipe = RECIPES_DATA.find(r => slugify(String(r.id)) === targetSlug);
  if (!recipe) recipe = RECIPES_DATA.find(r => slugify(r.title) === targetSlug);
  if (!recipe && targetSlug.length >= 3) recipe = RECIPES_DATA.find(r => slugify(String(r.id)).includes(targetSlug) || targetSlug.includes(slugify(String(r.id))) || slugify(r.title).includes(targetSlug) || targetSlug.includes(slugify(r.title)));
  return recipe;
}

// SSR Pre-rendering Helper
async function servePreRenderedHtml(req: any, res: any, indexHtmlPath: string) {
  try {
    let html = fs.readFileSync(indexHtmlPath, 'utf-8');
    
    let title = "DishFit | Healthy & Low-Calorie Fitness Recipes";
    let description = "Discover delicious, fitness-oriented meals under 500 calories to support your health goals.";
    let imageUrl = "/logo-og.png";
    let url = `https://dishfit.net${req.originalUrl}`;
    let preRenderedContent = "";
    
    // Check if it's a recipe page
    const recipeMatch = req.originalUrl.match(/^\/recipe\/([^\/]+)/);
    if (recipeMatch) {
      const slug = recipeMatch[1];
      const recipe: any = await getRecipe(slug);
      
      if (recipe) {
        title = `${recipe.title} | DishFit`;
        description = recipe.description || `Healthy ${recipe.category} recipe with ${recipe.calories} calories.`;
        imageUrl = recipe.image || imageUrl;
        
        preRenderedContent = `
          <div style="padding: 20px;">
            <h1>${recipe.title}</h1>
            <img src="${imageUrl}" alt="${recipe.title}" style="max-width: 100%; height: auto;"/>
            <p>${description}</p>
            <h2>Ingredients</h2>
            <ul>
              ${(recipe.ingredients || recipe.extendedIngredients || []).map((i: any) => `<li>${i.name || i.original}</li>`).join('')}
            </ul>
            <h2>Instructions</h2>
            <ol>
              ${(recipe.instructions || []).map((step: string) => `<li>${step}</li>`).join('')}
            </ol>
          </div>
        `;
      } else {
        title = "Recipe Not Found | DishFit";
        preRenderedContent = `<div><h1>Recipe Not Found</h1></div>`;
      }
    } else if (req.originalUrl === "/" || req.originalUrl === "") {
        preRenderedContent = `
          <div style="padding: 20px;">
            <h1>Welcome to DishFit</h1>
            <p>${description}</p>
          </div>
        `;
    }

    // Replace meta tags
    html = html.replace(/<title>.*<\/title>/, `<title>${title}</title>`);
    html = html.replace(/<meta property="og:title" content="[^"]*" \/>/g, `<meta property="og:title" content="${title}" />`);
    html = html.replace(/<meta property="twitter:title" content="[^"]*" \/>/g, `<meta property="twitter:title" content="${title}" />`);
    html = html.replace(/<meta name="description" content="[^"]*" \/>/g, `<meta name="description" content="${description}" />`);
    html = html.replace(/<meta property="og:description" content="[^"]*" \/>/g, `<meta property="og:description" content="${description}" />`);
    html = html.replace(/<meta property="twitter:description" content="[^"]*" \/>/g, `<meta property="twitter:description" content="${description}" />`);
    html = html.replace(/<meta property="og:image" content="[^"]*" \/>/g, `<meta property="og:image" content="${imageUrl}" />`);
    html = html.replace(/<meta property="twitter:image" content="[^"]*" \/>/g, `<meta property="twitter:image" content="${imageUrl}" />`);
    html = html.replace(/<meta property="og:url" content="[^"]*" \/>/g, `<meta property="og:url" content="${url}" />`);
    html = html.replace(/<meta property="twitter:url" content="[^"]*" \/>/g, `<meta property="twitter:url" content="${url}" />`);

    // Inject Pre-rendered content for crawlers
    if (preRenderedContent) {
      html = html.replace('<div id="root" class="w-full overflow-x-hidden"></div>', `<div id="root" class="w-full overflow-x-hidden">${preRenderedContent}</div>`);
    }

    res.send(html);
  } catch (error) {
    console.error("SSR Error:", error);
    res.sendFile(indexHtmlPath);
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
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  
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

startServer();
