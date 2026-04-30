import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const SPOONACULAR_BASE_URL = "https://api.spoonacular.com";

if (!SPOONACULAR_API_KEY) {
  console.warn("WARNING: SPOONACULAR_API_KEY is not set in environment variables.");
}

app.use(express.json());

// Proxy routes for Spoonacular
app.post("/api/spoon/find-by-ingredients", async (req, res) => {
  if (!SPOONACULAR_API_KEY) {
    return res.status(503).json({ error: "Spoonacular API key not configured" });
  }
  try {
    const { ingredients, number = 10, ranking = 1 } = req.body;
    const response = await axios.get(`${SPOONACULAR_BASE_URL}/recipes/findByIngredients`, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        ingredients: ingredients.join(","),
        number,
        ranking,
      },
    });
    res.json(response.data);
  } catch (error: any) {
    console.error("Error finding recipes by ingredients:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ 
      error: "Failed to fetch recipes by ingredients",
      details: error.response?.data || error.message
    });
  }
});

app.get("/api/spoon/recipe/:id", async (req, res) => {
  if (!SPOONACULAR_API_KEY) {
    return res.status(503).json({ error: "Spoonacular API key not configured" });
  }
  try {
    const { id } = req.params;
    const response = await axios.get(`${SPOONACULAR_BASE_URL}/recipes/${id}/information`, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        includeNutrition: true,
      },
    });
    res.json(response.data);
  } catch (error: any) {
    console.error(`Error fetching recipe ${req.params.id}:`, error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ 
      error: "Failed to fetch recipe details",
      details: error.response?.data || error.message
    });
  }
});

app.post("/api/spoon/find-by-nutrients", async (req, res) => {
  if (!SPOONACULAR_API_KEY) {
    return res.status(503).json({ error: "Spoonacular API key not configured" });
  }
  try {
    const { minCarbs, maxCarbs, minProtein, maxProtein, minCalories, maxCalories, number = 10 } = req.body;
    const response = await axios.get(`${SPOONACULAR_BASE_URL}/recipes/findByNutrients`, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        minCarbs, maxCarbs, minProtein, maxProtein, minCalories, maxCalories,
        number,
      },
    });
    res.json(response.data);
  } catch (error: any) {
    console.error("Error finding recipes by nutrients:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ 
      error: "Failed to fetch recipes by nutrients",
      details: error.response?.data || error.message
    });
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

// Search recipes by query (additional helpful endpoint)
app.get("/api/spoon/search", async (req, res) => {
  if (!SPOONACULAR_API_KEY) {
    return res.status(503).json({ error: "Spoonacular API key not configured" });
  }
  try {
    const { query, diet, intolerances, type, number = 10 } = req.query;
    const response = await axios.get(`${SPOONACULAR_BASE_URL}/recipes/complexSearch`, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        query,
        diet,
        intolerances,
        type,
        number,
        addRecipeInformation: true,
      },
    });
    res.json(response.data);
  } catch (error: any) {
    console.error("Error searching recipes:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({ 
      error: "Failed to search recipes",
      details: error.response?.data || error.message
    });
  }
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
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
