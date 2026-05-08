import { Recipe } from "../types";
import { FALLBACK_RECIPES } from "./fallbackData";
import { getRecipeImage } from "./imageService";

// TheMealDB free API
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
const COCKTAIL_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

const CACHE_PREFIX = 'hreef_mealdb_cache_v4_';
const CACHE_EXPIRY = 1000 * 60 * 60 * 24; // 24 hours

function getCachedData<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(CACHE_PREFIX + key);
    if (!item) return null;
    const { data, timestamp } = JSON.parse(item);
    if (Date.now() - timestamp > CACHE_EXPIRY) {
      localStorage.removeItem(CACHE_PREFIX + key);
      return null;
    }
    return data;
  } catch (e) {
    return null;
  }
}

function setCachedData<T>(key: string, data: T): void {
  try {
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (e) {
    console.warn('Failed to cache to localStorage:', e);
  }
}

const CATEGORY_MAP: Record<string, string> = {
  "breakfast": "Breakfast",
  "lunch": "Chicken",
  "dinner": "Beef",
  "main-dishes": "Seafood",
  "desserts": "Dessert",
  "drinks": "Cocktail",
  "fitness": "Vegetarian"
};

export async function searchRecipes(query: string = '', category: string = 'all', number: number = 12): Promise<Recipe[]> {
  const cacheKey = `search_${query}_${category}_${number}`;
  const cached = getCachedData<Recipe[]>(cacheKey);
  if (cached) return cached;

  try {
    let url: string;
    let isCocktail = false;
    
    const lowerCat = category.toLowerCase();
    if (lowerCat === 'drinks') {
      isCocktail = true;
      url = query 
        ? `${COCKTAIL_URL}/search.php?s=${encodeURIComponent(query)}`
        : `${COCKTAIL_URL}/filter.php?c=Cocktail`;
    } else if (lowerCat !== 'all' && lowerCat !== '' && !query) {
      const dbCat = CATEGORY_MAP[lowerCat] || category;
      url = `${BASE_URL}/filter.php?c=${encodeURIComponent(dbCat)}`;
    } else {
      url = `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`;
    }

    const response = await fetch(url);
    if (!response.ok) return getFallbackRecipes(query, category);
    
    const data = await response.json();
    const items = isCocktail ? (data.drinks || []) : (data.meals || []);
    
    // Hydrate results that don't have instructions
    const results = await Promise.all(items.slice(0, number).map(async (item: any) => {
      const id = isCocktail ? item.idDrink : item.idMeal;
      if (!item.strInstructions) {
        return getRecipeById(id, isCocktail);
      }
      return mapToRecipe(item, isCocktail);
    }));

    const validResults = results.filter((r): r is Recipe => r !== null);
    const fallbacks = getFallbackRecipes(query, category, 6);
    const combined = [...validResults, ...fallbacks];
    
    const uniqueResults = Array.from(new Map(combined.map(r => [r.id, r])).values());
    const finalResults = uniqueResults.slice(0, number);
    
    if (finalResults.length > 0) setCachedData(cacheKey, finalResults);
    return finalResults;
  } catch (error) {
    console.error('API Search failed:', error);
    return getFallbackRecipes(query, category);
  }
}

export async function getRecipeById(id: string | number, isCocktail?: boolean): Promise<Recipe | null> {
  const numId = Number(id);
  const fallback = FALLBACK_RECIPES.find(r => r.id === numId);
  if (fallback) return fallback;

  const cacheKey = `recipe_detail_${id}`;
  const cached = getCachedData<Recipe>(cacheKey);
  if (cached) return cached;

  try {
    const isActuallyCocktail = isCocktail ?? (numId > 9000);
    const baseUrl = isActuallyCocktail ? COCKTAIL_URL : BASE_URL;
    const response = await fetch(`${baseUrl}/lookup.php?i=${id}`);
    if (!response.ok) return null;
    
    const data = await response.json();
    const items = isActuallyCocktail ? data.drinks : data.meals;
    if (!items || items.length === 0) return null;
    
    const recipe = mapToRecipe(items[0], isActuallyCocktail);
    
    if (recipe) setCachedData(cacheKey, recipe);
    return recipe;
  } catch (error) {
    console.error(`Error fetching detail:`, error);
    return null;
  }
}

function mapToRecipe(m: any, isCocktail: boolean): Recipe {
  const ingredients: any[] = [];
  const id = isCocktail ? m.idDrink : m.idMeal;
  const title = isCocktail ? m.strDrink : m.strMeal;
  const thumb = isCocktail ? m.strDrinkThumb : m.strMealThumb;
  
  for (let i = 1; i <= 20; i++) {
    const name = m[`strIngredient${i}`];
    const measure = m[`strMeasure${i}`];
    
    if (name && name.trim()) {
      ingredients.push({
        id: i,
        name: name.trim(),
        amount: 1,
        unit: measure?.trim() || '',
        original: `${measure || ''} ${name}`.trim(),
        aisle: getIngredientCategory(name),
        image: name.trim() // Pass exact name for image construction
      });
    }
  }

  const instructionsRaw = m.strInstructions || "";
  const instructionSteps = instructionsRaw
    ? instructionsRaw
        .split(/\r?\n|\. /)
        .filter((s: string) => s.trim().length > 5)
        .map((step: string, index: number) => ({
          number: index + 1,
          step: step.trim().replace(/^\d+\.\s*/, ''),
          ingredients: [],
          equipment: []
        }))
    : [];

  const calories = 250 + Math.floor(Math.random() * 400);
  const protein = 5 + Math.floor(Math.random() * 30);
  const carbs = 15 + Math.floor(Math.random() * 60);
  const fat = 5 + Math.floor(Math.random() * 20);

  return {
    id: Number(id),
    title: title,
    category: isCocktail ? 'drinks' : (m.strCategory?.toLowerCase() || 'all'),
    image: thumb,
    readyInMinutes: Math.max(15, instructionSteps.length * 5),
    servings: 4,
    summary: instructionsRaw.slice(0, 150) + '...',
    calories: calories,
    protein: `${protein}g`,
    fat: `${fat}g`,
    carbs: `${carbs}g`,
    extendedIngredients: ingredients,
    analyzedInstructions: [{ name: "", steps: instructionSteps }],
    dishTypes: [m.strCategory]
  };
}

function getIngredientCategory(name: string): string {
  const n = name.toLowerCase();
  if (n.includes('milk') || n.includes('cheese') || n.includes('cream') || n.includes('yogurt') || n.includes('butter')) return 'Dairy';
  if (n.includes('apple') || n.includes('banana') || n.includes('tomato') || n.includes('onion') || n.includes('garlic') || n.includes('pepper') || n.includes('herb') || n.includes('cilantro') || n.includes('parsley')) return 'Produce';
  if (n.includes('chicken') || n.includes('beef') || n.includes('pork') || n.includes('meat') || n.includes('steak') || n.includes('lamb') || n.includes('fish') || n.includes('shrimp')) return 'Meat';
  if (n.includes('flour') || n.includes('sugar') || n.includes('salt') || n.includes('oil') || n.includes('vinegar') || n.includes('sauce') || n.includes('spice') || n.includes('powder')) return 'Pantry';
  if (n.includes('bread') || n.includes('bun') || n.includes('wrap') || n.includes('flour')) return 'Bakery';
  return 'Other';
}

export function getFallbackRecipes(query: string = '', category: string = 'all', limit: number = 20): Recipe[] {
  let filtered = [...FALLBACK_RECIPES];
  
  if (category !== 'all' && category !== '') {
    // Check both original and lowercase comparison for robustness
    const lowerCat = category.toLowerCase();
    filtered = filtered.filter(r => 
      r.category.toLowerCase() === lowerCat || 
      (CATEGORY_MAP[lowerCat] && r.category.toLowerCase() === CATEGORY_MAP[lowerCat].toLowerCase())
    );
  }
  
  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = filtered.filter(r => 
      r.title.toLowerCase().includes(q) || 
      r.summary?.toLowerCase().includes(q) ||
      r.extendedIngredients.some(i => i.name.toLowerCase().includes(q))
    );
  }
  
  return filtered.slice(0, limit);
}
