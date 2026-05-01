import { Recipe } from "../types";
import { FALLBACK_RECIPES } from "./fallbackData";

// TheMealDB free API key
const API_KEY = '1'; 

const CACHE_PREFIX = 'hreef_mealdb_cache_v2_';
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

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
const COCKTAIL_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

const CATEGORY_MAP: Record<string, string> = {
  "breakfast": "Breakfast",
  "lunch": "Chicken",
  "dinner": "Beef",
  "main-dishes": "Seafood",
  "desserts": "Dessert",
  "drinks": "Cocktail", // Will use CocktailDB
  "fitness": "Vegan"
};

export async function searchRecipes(query: string = '', category: string = 'all', number: number = 12): Promise<Recipe[]> {
  const cacheKey = `search_${query}_${category}_${number}`;
  const cached = getCachedData<Recipe[]>(cacheKey);
  if (cached) return cached;

  try {
    let url: string;
    let isCocktail = false;
    
    if (category === 'drinks') {
      isCocktail = true;
      url = query 
        ? `${COCKTAIL_URL}/search.php?s=${encodeURIComponent(query)}`
        : `${COCKTAIL_URL}/filter.php?c=Cocktail`;
    } else if (category !== 'all' && !query) {
      const dbCat = CATEGORY_MAP[category] || category;
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
      // If it's a filter result or missing instructions, fetch details
      if (!item.strInstructions) {
        return getRecipeById(id, isCocktail);
      }
      return mapToRecipe(item, isCocktail);
    }));

    // Combine with fallbacks to ensure high quality content is always present
    const fallbacks = getFallbackRecipes(query, category, 6);
    const combined = [...results.filter((r): r is Recipe => r !== null), ...fallbacks];
    
    // Remove duplicates by ID
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
  // First check if we have it in fallback recipes
  const fallback = FALLBACK_RECIPES.find(r => r.id === Number(id));
  if (fallback) return fallback;

  if (typeof isCocktail === 'boolean') {
    return fetchByIdAndType(id, isCocktail);
  }

  // Not defined, try MealDB first
  let recipe = await fetchByIdAndType(id, false);
  if (recipe) return recipe;
  
  // Try CocktailDB if MealDB failed
  recipe = await fetchByIdAndType(id, true);
  if (recipe) return recipe;
  
  return null;
}

async function fetchByIdAndType(id: string | number, isCocktail: boolean): Promise<Recipe | null> {
  const cacheKey = `${isCocktail ? 'drink' : 'recipe'}_${id}`;
  const cached = getCachedData<Recipe>(cacheKey);
  if (cached) return cached;

  try {
    const baseUrl = isCocktail ? COCKTAIL_URL : BASE_URL;
    const response = await fetch(`${baseUrl}/lookup.php?i=${id}`);
    if (!response.ok) return null;
    
    const data = await response.json();
    const items = isCocktail ? data.drinks : data.meals;
    if (!items || items.length === 0) return null;
    
    const recipe = mapToRecipe(items[0], isCocktail);
    if (recipe) setCachedData(cacheKey, recipe);
    return recipe;
  } catch (error) {
    console.error(`Error fetching details for type ${isCocktail ? 'drink' : 'meal'}:`, error);
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
        aisle: getIngredientCategory(name)
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
          equipment: [],
          length: {
            number: 5,
            unit: 'minutes'
          }
        }))
    : [];

  // Refined category-based nutrition estimation
  let baseCalories = isCocktail ? 150 : 500;
  let baseProtein = isCocktail ? 1 : 25;
  let baseCarbs = isCocktail ? 20 : 45;
  let baseFat = isCocktail ? 0 : 15;

  const cat = m.strCategory?.toLowerCase() || "";
  if (cat.includes("beef") || cat.includes("lamb") || cat.includes("pork") || cat.includes("chicken")) {
    baseProtein += 15;
    baseCalories += 100;
    baseFat += 5;
  } else if (cat.includes("pasta") || cat.includes("rice") || cat.includes("dessert")) {
    baseCarbs += 30;
    baseCalories += 150;
  } else if (cat.includes("vege") || cat.includes("vegan") || cat.includes("salad")) {
    baseProtein -= 10;
    baseCarbs -= 10;
    baseFat -= 5;
    baseCalories -= 150;
  }

  const calories = Math.floor(Math.random() * 100) + baseCalories;
  const protein = Math.floor(Math.random() * 10) + baseProtein;
  const carbs = Math.floor(Math.random() * 15) + baseCarbs;
  const fat = Math.floor(Math.random() * 10) + baseFat;

  return {
    id: Number(id),
    title: title,
    category: isCocktail ? 'drinks' : (m.strCategory?.toLowerCase() || 'all'),
    image: thumb,
    readyInMinutes: Math.max(15, instructionSteps.length * 5),
    servings: 4,
    summary: isCocktail 
      ? `A refreshing ${m.strAlcoholic} ${m.strCategory} drink served in a ${m.strGlass}.`
      : `A delicious ${m.strArea || ''} ${m.strCategory || 'dish'}.`,
    youtubeUrl: m.strYoutube || undefined,
    calories: calories,
    protein: `${protein}g`,
    carbs: `${carbs}g`,
    fat: `${fat}g`,
    nutrition: {
      nutrients: [
        { name: "Calories", amount: calories, unit: "kcal", percentOfDailyNeeds: Math.round((calories / 2000) * 100) },
        { name: "Protein", amount: protein, unit: "g", percentOfDailyNeeds: Math.round((protein / 50) * 100) },
        { name: "Carbohydrates", amount: carbs, unit: "g", percentOfDailyNeeds: Math.round((carbs / 300) * 100) },
        { name: "Fat", amount: fat, unit: "g", percentOfDailyNeeds: Math.round((fat / 65) * 100) },
        { name: "Fiber", amount: Math.floor(Math.random() * 12) + (cat.includes("veg") ? 8 : 2), unit: "g", percentOfDailyNeeds: Math.floor(Math.random() * 30) },
        { name: "Sugar", amount: Math.floor(Math.random() * 15) + (cat.includes("dessert") ? 20 : 2), unit: "g", percentOfDailyNeeds: Math.floor(Math.random() * 20) },
        { name: "Sodium", amount: Math.floor(Math.random() * 800) + 200, unit: "mg", percentOfDailyNeeds: Math.floor(Math.random() * 20) },
        { name: "Vitamin D", amount: Math.floor(Math.random() * 5), unit: "µg", percentOfDailyNeeds: Math.floor(Math.random() * 25) }
      ]
    },
    analyzedInstructions: [{ name: "", steps: instructionSteps }],
    extendedIngredients: ingredients,
    dishTypes: [m.strCategory]
  };
}

function mapToRecipeOld(m: any): Recipe {
  // Keeping fallback logic signature if needed, but renamed to mapToRecipe
  return mapToRecipe(m, false);
}

function mapMealDBToRecipe(m: any): Recipe {
  return mapToRecipe(m, false);
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
