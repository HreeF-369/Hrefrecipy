export interface Recipe {
  id: number;
  title: string;
  category: string;
  image: string;
  imageType?: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl?: string;
  youtubeUrl?: string;
  summary?: string;
  nutrition?: {
    nutrients: Nutrient[];
  };
  analyzedInstructions: InstructionStep[];
  extendedIngredients: Ingredient[];
  dishTypes: string[];
  diets?: string[];
  spoonacularScore?: number;
  healthScore?: number;
  calories: number;
  protein?: string;
  fat?: string;
  carbs?: string;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  user: string;
  text: string;
  date: string;
  avatar?: string;
}

export interface Nutrient {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds?: number;
}

export interface InstructionStep {
  name: string;
  steps: {
    number: number;
    step: string;
    ingredients?: any[];
    equipment?: any[];
    length?: {
      number: number;
      unit: string;
    };
  }[];
}

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  original: string;
  aisle?: string;
  originalName?: string;
  measures?: {
    us: { amount: number; unitShort: string };
    metric: { amount: number; unitShort: string };
  };
}

export interface MealPlanDay {
  date: string;
  meals: {
    breakfast?: Recipe;
    lunch?: Recipe;
    dinner?: Recipe;
  };
}

export interface GroceryItem {
  id: string;
  name: string;
  category: string;
  amount?: string;
  checked: boolean;
}
