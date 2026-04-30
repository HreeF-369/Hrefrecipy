import React, { createContext, useContext, useState, useEffect } from "react";
import { Recipe, Comment } from "../types";

interface GroceryItem {
  id: string;
  name: string;
  category: string;
  checked: boolean;
  amount: string;
}

interface UserPreferences {
  googleSync: boolean;
  marketingEmails: boolean;
  darkMode: boolean;
}

interface AppContextType {
  plan: Record<string, Recipe>;
  addToPlan: (day: string, mealType: string, recipe: Recipe) => void;
  removeFromPlan: (day: string, mealType: string) => void;
  groceryItems: GroceryItem[];
  addGroceryItem: (name: string, category: string, amount: string) => void;
  addRecipeIngredientsToGroceryList: (recipe: Recipe) => void;
  toggleGroceryItem: (id: string) => void;
  deleteGroceryItem: (id: string) => void;
  clearGroceryList: () => void;
  updateGroceryItemAmount: (id: string, amount: string) => void;
  favorites: number[];
  toggleFavorite: (recipeId: number) => void;
  comments: Record<number, Comment[]>;
  addComment: (recipeId: number, text: string, user: string) => void;
  deleteComment: (recipeId: number, commentId: string) => void;
  preferences: UserPreferences;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  clearAllData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Record<string, Recipe>>({});
  const [favorites, setFavorites] = useState<number[]>([]);
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([]);
  const [comments, setComments] = useState<Record<number, Comment[]>>({});
  const [preferences, setPreferences] = useState<UserPreferences>({
    googleSync: false,
    marketingEmails: false,
    darkMode: false
  });

  // Local Storage persistence (optional but good for "functional" feel)
  useEffect(() => {
    const savedFavs = localStorage.getItem("hreefrecipy_favorites");
    if (savedFavs) setFavorites(JSON.parse(savedFavs));

    const savedPlan = localStorage.getItem("hreefrecipy_plan");
    if (savedPlan) setPlan(JSON.parse(savedPlan));

    const savedGrocery = localStorage.getItem("hreefrecipy_grocery");
    if (savedGrocery) setGroceryItems(JSON.parse(savedGrocery));

    const savedComments = localStorage.getItem("hreefrecipy_comments");
    if (savedComments) setComments(JSON.parse(savedComments));

    const savedPrefs = localStorage.getItem("hreefrecipy_preferences");
    if (savedPrefs) setPreferences(JSON.parse(savedPrefs));
  }, []);

  useEffect(() => {
    localStorage.setItem("hreefrecipy_favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("hreefrecipy_plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("hreefrecipy_grocery", JSON.stringify(groceryItems));
  }, [groceryItems]);

  useEffect(() => {
    localStorage.setItem("hreefrecipy_comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    localStorage.setItem("hreefrecipy_preferences", JSON.stringify(preferences));
  }, [preferences]);

  const updatePreferences = (newPrefs: Partial<UserPreferences>) => {
    setPreferences(prev => ({ ...prev, ...newPrefs }));
  };

  const clearAllData = () => {
    setPlan({});
    setFavorites([]);
    setGroceryItems([]);
    setComments({});
    setPreferences({
      googleSync: false,
      marketingEmails: false,
      darkMode: false
    });
    localStorage.clear();
  };

  const addComment = (recipeId: number, text: string, user: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      user,
      text,
      date: new Date().toLocaleDateString(),
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user}`
    };
    setComments(prev => ({
      ...prev,
      [recipeId]: [newComment, ...(prev[recipeId] || [])]
    }));
  };

  const deleteComment = (recipeId: number, commentId: string) => {
    setComments(prev => ({
      ...prev,
      [recipeId]: (prev[recipeId] || []).filter(c => c.id !== commentId)
    }));
  };

  const toggleFavorite = (recipeId: number) => {
    setFavorites(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId) 
        : [...prev, recipeId]
    );
  };

  const addToPlan = (day: string, mealType: string, recipe: Recipe) => {
    setPlan(prev => ({ ...prev, [`${day}-${mealType}`]: recipe }));
    addRecipeIngredientsToGroceryList(recipe);
  };

  const removeFromPlan = (day: string, mealType: string) => {
    setPlan(prev => {
      const newPlan = { ...prev };
      delete newPlan[`${day}-${mealType}`];
      return newPlan;
    });
  };

  const addGroceryItem = (name: string, category: string, amount: string) => {
    setGroceryItems(prev => [
      ...prev,
      { id: Date.now().toString() + Math.random().toString(36).substr(2, 9), name, category, checked: false, amount }
    ]);
  };

  const addRecipeIngredientsToGroceryList = (recipe: Recipe) => {
    const newItems: GroceryItem[] = (recipe.extendedIngredients || []).map(ing => {
      // Use aisle from Spoonacular if available, otherwise try to guess
      let category = "Other";
      if (ing.aisle) {
        // Spoonacular aisles are often like "Produce;Spices and Seasonings"
        category = ing.aisle.split(';')[0];
      } else {
        category = getIngredientCategory(ing.name);
      }

      return {
        id: `recipe-${recipe.id}-${ing.id}-${Date.now()}-${Math.random()}`,
        name: ing.name,
        category: category,
        checked: false,
        amount: `${ing.amount} ${ing.unit || ""}`.trim() || "1 unit"
      };
    });
    setGroceryItems(prev => [...prev, ...newItems]);
  };

  const toggleGroceryItem = (id: string) => {
    setGroceryItems(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const deleteGroceryItem = (id: string) => {
    setGroceryItems(prev => prev.filter(item => item.id !== id));
  };

  const clearGroceryList = () => {
    setGroceryItems([]);
  };

  const updateGroceryItemAmount = (id: string, amount: string) => {
    setGroceryItems(prev => prev.map(item => 
      item.id === id ? { ...item, amount } : item
    ));
  };

  return (
    <AppContext.Provider value={{ 
      plan, addToPlan, removeFromPlan, 
      groceryItems, addGroceryItem, addRecipeIngredientsToGroceryList, toggleGroceryItem, deleteGroceryItem, updateGroceryItemAmount, clearGroceryList,
      favorites, toggleFavorite,
      comments, addComment, deleteComment,
      preferences, updatePreferences, clearAllData
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

function getIngredientCategory(name: string): string {
  const n = name.toLowerCase();
  
  if (n.includes("milk") || n.includes("cheese") || n.includes("yogurt") || n.includes("butter") || n.includes("feta") || n.includes("cream")) return "Dairy";
  if (n.includes("chicken") || n.includes("beef") || n.includes("turkey") || n.includes("pork") || n.includes("lamb") || n.includes("steak") || n.includes("cod") || n.includes("fish") || n.includes("bacon") || n.includes("ham") || n.includes("meat")) return "Meat";
  if (n.includes("bread") || n.includes("bun") || n.includes("wrap") || n.includes("flour") || n.includes("yeast") || n.includes("tortilla") || n.includes("bagel") || n.includes("crust")) return "Bakery";
  if (n.includes("kale") || n.includes("spinach") || n.includes("avocado") || n.includes("tomato") || n.includes("onion") || n.includes("garlic") || n.includes("broccoli") || n.includes("carrot") || n.includes("lettuce") || n.includes("lemon") || n.includes("lime") || n.includes("apple") || n.includes("berry") || n.includes("banana") || n.includes("mango") || n.includes("cucumber") || n.includes("herbs") || n.includes("parsley") || n.includes("cilantro") || n.includes("ginger") || n.includes("pepper") || n.includes("potato") || n.includes("mushroom") || n.includes("cabbage")) return "Produce";
  if (n.includes("rice") || n.includes("pasta") || n.includes("noodle") || n.includes("quinoa") || n.includes("oats") || n.includes("cereal")) return "Grains";
  if (n.includes("oil") || n.includes("sauce") || n.includes("vinegar") || n.includes("mustard") || n.includes("soy") || n.includes("honey") || n.includes("syrup") || n.includes("broth") || n.includes("stock")) return "Condiments";
  if (n.includes("spice") || n.includes("salt") || n.includes("powder") || n.includes("pepper") || n.includes("cinnamon") || n.includes("cumin") || n.includes("paprika")) return "Spices";
  
  return "Pantry";
}
