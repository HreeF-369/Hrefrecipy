import { Recipe } from "../types";
import { RECIPES_DATA } from "./recipesData";

export function enrichRecipe(recipe: Recipe): Recipe {
  if (!recipe) return recipe;

  // Extract calorie number
  let calNum = 420;
  if (recipe.calories) {
    const parsed = parseFloat(String(recipe.calories));
    if (!isNaN(parsed) && parsed > 0) calNum = parsed;
  } else if (recipe.nutrition?.nutrients) {
    const calNut = recipe.nutrition.nutrients.find(n => n.name && n.name.toLowerCase() === 'calories');
    if (calNut && calNut.amount) calNum = calNut.amount;
  }

  // Extract or estimate protein
  let protNum = Math.round((calNum * 0.25) / 4);
  if (recipe.protein) {
    const parsed = parseFloat(String(recipe.protein));
    if (!isNaN(parsed) && parsed > 0) protNum = parsed;
  } else if (recipe.nutrition?.nutrients) {
    const pNut = recipe.nutrition.nutrients.find(n => n.name && n.name.toLowerCase() === 'protein');
    if (pNut && pNut.amount) protNum = pNut.amount;
  }

  // Extract or estimate carbs
  let carbsNum = Math.round((calNum * 0.45) / 4);
  if (recipe.carbs !== undefined && recipe.carbs !== null && recipe.carbs !== "") {
    const parsed = parseFloat(String(recipe.carbs));
    if (!isNaN(parsed) && parsed > 0) carbsNum = parsed;
  } else if (recipe.nutrition?.nutrients) {
    const cNut = recipe.nutrition.nutrients.find(n => n.name && (n.name.toLowerCase() === 'carbohydrates' || n.name.toLowerCase() === 'carbs'));
    if (cNut && cNut.amount) carbsNum = cNut.amount;
  }

  // Extract or estimate fat
  let fatNum = Math.round((calNum * 0.30) / 9);
  if (recipe.fat !== undefined && recipe.fat !== null && recipe.fat !== "") {
    const parsed = parseFloat(String(recipe.fat));
    if (!isNaN(parsed) && parsed > 0) fatNum = parsed;
  } else if (recipe.nutrition?.nutrients) {
    const fNut = recipe.nutrition.nutrients.find(n => n.name && n.name.toLowerCase() === 'fat');
    if (fNut && fNut.amount) fatNum = fNut.amount;
  }

  // Micro-nutrients
  let micros = recipe.micros;
  if (!micros || Object.keys(micros).length < 4) {
    micros = {
      fiber: Math.max(3, Math.round(carbsNum * 0.18)),
      sugar: Math.max(2, Math.round(carbsNum * 0.22)),
      sodium: Math.round(calNum * 1.4),
      potassium: Math.round(calNum * 1.1),
      calcium: Math.round(calNum * 0.3),
      iron: Math.max(2, Math.round(calNum * 0.01)),
      vitaminA: Math.round(calNum * 1.8),
      vitaminC: Math.max(5, Math.round(calNum * 0.08))
    };
  }

  // Ensure nutrition structure exists
  const mainNutrientNames = ['calories', 'protein', 'carbohydrates', 'fat'];
  const existingNutrients = recipe.nutrition?.nutrients || [];
  const otherNutrients = existingNutrients.filter(n => n.name && !mainNutrientNames.includes(n.name.toLowerCase()));

  const microsAsNutrients = Object.entries(micros).map(([k, v]) => {
    const numVal = typeof v === 'number' ? v : (parseFloat(String(v)) || 0);
    return {
      name: k.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()).trim(),
      amount: Math.round(numVal),
      unit: k.toLowerCase() === 'sodium' || k.toLowerCase() === 'potassium' || k.toLowerCase() === 'calcium' ? 'mg' : (k.toLowerCase().includes('vitamin') || k.toLowerCase() === 'iron' ? '% DV' : 'g'),
      percentOfDailyNeeds: typeof v === 'number' ? Math.min(100, Math.round(v)) : 50
    };
  });

  const nutrients = [
    { name: 'Calories', amount: Math.round(calNum), unit: 'kcal', percentOfDailyNeeds: Math.min(100, Math.round((calNum / 2000) * 100)) },
    { name: 'Protein', amount: Math.round(protNum), unit: 'g', percentOfDailyNeeds: Math.min(100, Math.round((protNum / 50) * 100)) },
    { name: 'Carbohydrates', amount: Math.round(carbsNum), unit: 'g', percentOfDailyNeeds: Math.min(100, Math.round((carbsNum / 300) * 100)) },
    { name: 'Fat', amount: Math.round(fatNum), unit: 'g', percentOfDailyNeeds: Math.min(100, Math.round((fatNum / 65) * 100)) },
    ...(otherNutrients.length > 0 ? otherNutrients : microsAsNutrients)
  ];

  return {
    ...recipe,
    calories: `${Math.round(calNum)}kcal`,
    protein: `${Math.round(protNum)}g`,
    carbs: `${Math.round(carbsNum)}g`,
    fat: `${Math.round(fatNum)}g`,
    micros,
    nutrition: {
      ...recipe.nutrition,
      nutrients
    }
  };
}

export async function searchRecipes(query: string = '', category: string = 'all', number: number = 12): Promise<Recipe[]> {
  let filtered = RECIPES_DATA.map(enrichRecipe);
  
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
  
  return filtered.slice(0, number);
}

export async function getRecipeById(id: string | number): Promise<Recipe | null> {
  if (!id) return null;
  const rawId = decodeURIComponent(String(id)).trim();
  const slugify = (str: string) => String(str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const targetSlug = slugify(rawId);

  // 1. Try local RECIPES_DATA first as it's near-instant and extremely reliable!
  let recipe = RECIPES_DATA.find(r => String(r.id).toLowerCase() === rawId.toLowerCase());

  // 2. Exact Slug ID match
  if (!recipe) {
    recipe = RECIPES_DATA.find(r => slugify(String(r.id)) === targetSlug);
  }

  // 3. Exact Slug Title match
  if (!recipe) {
    recipe = RECIPES_DATA.find(r => slugify(r.title) === targetSlug);
  }

  // 4. Partial match
  if (!recipe && targetSlug.length >= 3) {
    recipe = RECIPES_DATA.find(r => slugify(String(r.id)).includes(targetSlug) || targetSlug.includes(slugify(String(r.id))) || slugify(r.title).includes(targetSlug) || targetSlug.includes(slugify(r.title)));
  }

  if (recipe) {
    return enrichRecipe(recipe);
  }

  // 5. Fallback to Firestore if not found locally, with a strict 3-second timeout to prevent hanging the UI infinitely
  try {
    const { db } = await import('../lib/firebase');
    const { doc, getDoc, collection, query, where, getDocs } = await import('firebase/firestore');

    const firestorePromise = (async () => {
      // 1. Try to fetch directly by document ID
      const recipeDocRef = doc(db, "recipes", rawId);
      const recipeDoc = await getDoc(recipeDocRef);
      if (recipeDoc.exists()) {
        return enrichRecipe({ id: recipeDoc.id, ...recipeDoc.data() } as Recipe);
      }
      
      // 2. Try to query by slug field if it exists
      const recipesRef = collection(db, "recipes");
      const q = query(recipesRef, where("slug", "==", targetSlug));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docSnapshot = querySnapshot.docs[0];
        return enrichRecipe({ id: docSnapshot.id, ...docSnapshot.data() } as Recipe);
      }
      return null;
    })();

    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
    const result = await Promise.race([firestorePromise, timeoutPromise]);
    if (result) return result;
  } catch (error) {
    console.error("Error fetching recipe from Firestore:", error);
  }

  return null;
}

