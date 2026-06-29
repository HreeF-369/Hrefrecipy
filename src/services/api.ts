import { Recipe } from "../types";
import { RECIPES_DATA } from "./recipesData";

function mapSpoonacularRecipe(data: any): Recipe {
  const nutrients = data.nutrition?.nutrients || [];
  const findNut = (name: string) => nutrients.find((n: any) => n.name && n.name.toLowerCase() === name.toLowerCase());

  const cal = findNut("Calories")?.amount ?? data.nutrition?.calories ?? 0;
  const prot = findNut("Protein")?.amount ?? 0;
  const carbs = findNut("Carbohydrates")?.amount ?? 0;
  const fat = findNut("Fat")?.amount ?? 0;

  const micros: { [key: string]: number } = {};
  nutrients.forEach((n: any) => {
    if (n.name) {
      const lower = n.name.toLowerCase();
      if (!["calories", "protein", "carbohydrates", "fat", "net carbohydrates", "saturated fat", "trans fat"].includes(lower)) {
        const key = lower.replace(/[^a-zA-Z0-9]+(.)/g, (_: string, c: string) => c.toUpperCase());
        micros[key] = Math.round(n.amount || 0);
      }
    }
  });

  return {
    id: data.id,
    title: data.title || "Delicious Recipe",
    category: data.dishTypes?.[0] || "dinner",
    image: data.image || "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=600",
    readyInMinutes: data.readyInMinutes || 30,
    servings: data.servings || 2,
    sourceUrl: data.sourceUrl,
    summary: data.summary,
    description: data.summary ? data.summary.replace(/<[^>]*>?/gm, '') : "",
    nutrition: data.nutrition,
    analyzedInstructions: data.analyzedInstructions,
    instructions: data.analyzedInstructions?.[0]?.steps?.map((s: any) => s.step) || [],
    extendedIngredients: data.extendedIngredients || [],
    ingredients: data.extendedIngredients?.map((i: any) => ({
      name: i.original || i.name || "",
      image: i.image ? `https://spoonacular.com/cdn/ingredients_100x100/${i.image}` : ""
    })) || [],
    dishTypes: data.dishTypes || ["main course"],
    tags: data.diets || [],
    diets: data.diets || [],
    spoonacularScore: data.spoonacularScore,
    healthScore: data.healthScore || 85,
    calories: Math.round(cal),
    protein: `${Math.round(prot)}g`,
    carbs: `${Math.round(carbs)}g`,
    fat: `${Math.round(fat)}g`,
    micros
  };
}

export async function searchRecipes(query: string = '', category: string = 'all', number: number = 12): Promise<Recipe[]> {
  let filtered = [...RECIPES_DATA];
  
  if (category !== 'all' && category !== '') {
    const lowerCat = category.toLowerCase();
    filtered = filtered.filter(r => 
      r.category.toLowerCase() === lowerCat || 
      r.dishTypes.some(type => type.toLowerCase().includes(lowerCat)) ||
      (r.tags && r.tags.some(tag => tag.toLowerCase().includes(lowerCat)))
    );
  }
  
  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = filtered.filter(r => 
      r.title.toLowerCase().includes(q) || 
      (r.summary || r.description || '').toLowerCase().includes(q) ||
      (r.extendedIngredients && r.extendedIngredients.some(i => i.name.toLowerCase().includes(q))) ||
      (r.ingredients && r.ingredients.some(i => i.name.toLowerCase().includes(q)))
    );
  }
  
  if (filtered.length === 0 && query.trim()) {
    try {
      const res = await fetch(`/api/spoon/search?query=${encodeURIComponent(query)}&number=${number}`);
      if (res.ok) {
        const data = await res.json();
        if (data.results && Array.isArray(data.results)) {
          return data.results.map(mapSpoonacularRecipe);
        }
      }
    } catch (e) {
      // ignore proxy error
    }
  }
  
  return filtered.slice(0, number);
}

export async function getRecipeById(id: string | number): Promise<Recipe | null> {
  const local = RECIPES_DATA.find(r => String(r.id) === String(id));
  if (local) return local;

  try {
    const res = await fetch(`/api/spoon/recipe/${id}`);
    if (res.ok) {
      const data = await res.json();
      return mapSpoonacularRecipe(data);
    }
  } catch (e) {
    // ignore proxy error
  }

  try {
    const clientKey = (import.meta as any).env?.VITE_SPOONACULAR_API_KEY || (import.meta as any).env?.SPOONACULAR_API_KEY;
    if (clientKey) {
      const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${clientKey}`);
      if (res.ok) {
        const data = await res.json();
        return mapSpoonacularRecipe(data);
      }
    }
  } catch (e) {
    // ignore direct fetch error
  }

  return null;
}

