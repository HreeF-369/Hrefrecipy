import React, { createContext, useContext, useState, useEffect } from "react";
import { Recipe, Comment } from "../types/index.js";
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase.js";

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
  favorites: (string | number)[];
  toggleFavorite: (recipeId: string | number) => void;
  comments: Record<string | number, Comment[]>;
  addComment: (recipeId: string | number, text: string, user: string) => void;
  deleteComment: (recipeId: string | number, commentId: string) => void;
  preferences: UserPreferences;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  clearAllData: () => void;
  allRecipes: Recipe[];
  setAllRecipes: (recipes: Recipe[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Record<string, Recipe>>({});
  const [favorites, setFavorites] = useState<(string | number)[]>([]);
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([]);
  const [comments, setComments] = useState<Record<string | number, Comment[]>>({});
  const [preferences, setPreferences] = useState<UserPreferences>({
    googleSync: false,
    marketingEmails: false,
    darkMode: false
  });
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

  // Local Storage persistence
  useEffect(() => {
    const loadFromStorage = (key: string, setter: (val: any) => void) => {
      try {
        const item = localStorage.getItem(key);
        if (item) {
          const parsed = JSON.parse(item);
          setter(parsed);
        }
      } catch (e) {
        console.error(`Error loading ${key} from storage:`, e);
      }
    };

    loadFromStorage("hreefrecipy_favorites", setFavorites);
    loadFromStorage("hreefrecipy_plan", setPlan);
    loadFromStorage("hreefrecipy_grocery", setGroceryItems);
    loadFromStorage("hreefrecipy_preferences", setPreferences);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("hreefrecipy_favorites", JSON.stringify(favorites));
    } catch (e) {
      console.warn("Failed to save favorites to localStorage", e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem("hreefrecipy_plan", JSON.stringify(plan));
    } catch (e) {
      console.warn("Failed to save plan to localStorage", e);
    }
  }, [plan]);

  useEffect(() => {
    try {
      localStorage.setItem("hreefrecipy_grocery", JSON.stringify(groceryItems));
    } catch (e) {
      console.warn("Failed to save grocery items to localStorage", e);
    }
  }, [groceryItems]);

  useEffect(() => {
    try {
      localStorage.setItem("hreefrecipy_preferences", JSON.stringify(preferences));
    } catch (e) {
      console.warn("Failed to save preferences to localStorage", e);
    }
  }, [preferences]);

  // Real-time Firestore Comments
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsByRecipe: Record<string | number, Comment[]> = {};
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const recipeId = data.recipeId;
        
        if (!commentsByRecipe[recipeId]) {
          commentsByRecipe[recipeId] = [];
        }
        
        commentsByRecipe[recipeId].push({
          id: doc.id,
          user: data.user,
          text: data.text,
          date: data.date,
          avatar: data.avatar
        });
      });
      
      setComments(commentsByRecipe);
    }, (error) => {
      console.error("Error fetching comments from Firestore: ", error);
    });

    return () => unsubscribe();
  }, []);

  const updatePreferences = (newPrefs: Partial<UserPreferences>) => {
    setPreferences(prev => ({ ...prev, ...newPrefs }));
  };

  const clearAllData = () => {
    setPlan({});
    setFavorites([]);
    setGroceryItems([]);
    setPreferences({
      googleSync: false,
      marketingEmails: false,
      darkMode: false
    });
    localStorage.removeItem("hreefrecipy_plan");
    localStorage.removeItem("hreefrecipy_favorites");
    localStorage.removeItem("hreefrecipy_grocery");
    localStorage.removeItem("hreefrecipy_preferences");
  };

  const addComment = async (recipeId: string | number, text: string, user: string) => {
    const commentData = {
      recipeId: String(recipeId),
      text,
      user,
      userId: "guest",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user}`,
      date: new Date().toLocaleDateString(),
      createdAt: serverTimestamp()
    };
    try {
      await addDoc(collection(db, "comments"), commentData);
    } catch (e) {
      console.error("Error adding comment to Firestore: ", e);
      // Fallback for UI responsiveness in case of error
      const fallbackId = Date.now().toString();
      setComments(prev => ({
        ...prev,
        [recipeId]: [{ id: fallbackId, ...commentData, createdAt: new Date() } as any, ...(prev[recipeId] || [])]
      }));
    }
  };

  const deleteComment = async (recipeId: string | number, commentId: string) => {
    try {
      await deleteDoc(doc(db, "comments", commentId));
    } catch (e) {
      console.error("Error deleting comment from Firestore: ", e);
      // Fallback
      setComments(prev => ({
        ...prev,
        [recipeId]: (prev[recipeId] || []).filter(c => c.id !== commentId)
      }));
    }
  };

  const toggleFavorite = (recipeId: string | number) => {
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
    let newItems: GroceryItem[] = [];

    if (recipe.ingredients) {
      // New structure
      newItems = recipe.ingredients.map((ing, idx) => ({
        id: `recipe-${recipe.id}-${idx}-${Date.now()}`,
        name: ing.name,
        category: getIngredientCategory(ing.name),
        checked: false,
        amount: "1 unit",
        image: ing.image
      }));
    } else if (recipe.extendedIngredients) {
      // Old structure
      newItems = recipe.extendedIngredients.map(ing => {
        let category = "Other";
        if (ing.aisle) {
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
    }

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
      preferences, updatePreferences, clearAllData,
      allRecipes, setAllRecipes
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
