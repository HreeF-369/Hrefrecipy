import { Recipe } from "../types";
import { RECIPES_DATA } from "./recipesData";

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
  
  return filtered.slice(0, number);
}

export async function getRecipeById(id: string | number): Promise<Recipe | null> {
  const recipe = RECIPES_DATA.find(r => String(r.id) === String(id));
  return recipe || null;
}

