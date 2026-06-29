export interface Recipe {
  id: string | number;
  title: string;
  titleArabic?: string;
  category: string;
  image: string;
  imageType?: string;
  readyInMinutes: number;
  prepTime?: string; // New field from user
  servings: number;
  sourceUrl?: string;
  youtubeUrl?: string;
  summary?: string;
  description?: string; // New field from user
  nutrition?: {
    nutrients: Nutrient[];
  };
  analyzedInstructions?: InstructionStep[];
  instructions?: string[]; // New field from user (simple array)
  extendedIngredients?: Ingredient[];
  ingredients?: { name: string; image: string }[]; // New field from user
  dishTypes: string[];
  tags?: string[]; // New field from user
  diets?: string[];
  spoonacularScore?: number;
  healthScore?: number;
  calories: string | number;
  protein?: string;
  fat?: string;
  carbs?: string;
  micros?: {
    fiber?: number;
    sugar?: number;
    sodium?: number;
    vitaminC?: number;
    [key: string]: number | undefined;
  };
  comments?: Comment[];
  pinterestImage?: string;
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
  image?: string;
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
  image?: string; // Added image for ingredients icons
}
