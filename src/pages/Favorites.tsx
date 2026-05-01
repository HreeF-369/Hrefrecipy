import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Heart, Utensils, ChevronRight, Clock, Flame, Search } from "lucide-react";
import { useApp } from "../context/AppContext";
import { Recipe } from "../types";
import { getRecipeById } from "../services/api";
import { RecipeModal } from "../components/RecipeModal";
import { Link } from "react-router-dom";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { RecipeCard } from "../components/RecipeCard";

export default function Favorites() {
  const { favorites, toggleFavorite } = useApp();
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "My Favorites | Hreefrecipy";
  }, []);

  useEffect(() => {
    async function fetchFavorites() {
      setLoading(true);
      const results: Recipe[] = [];
      // Fetch only missing favorites from API
      for (const id of favorites) {
        const recipe = await getRecipeById(id);
        if (recipe) results.push(recipe);
      }
      setFavoriteRecipes(results);
      setLoading(false);
    }

    fetchFavorites();
  }, [favorites]);

  const filteredRecipes = favoriteRecipes.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12 pb-12"
    >
      <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Your Favorites</h1>
          <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mt-1">Saved for your next meal</p>
        </div>
        
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-green transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search favorites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-3xl border-none bg-white shadow-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-brand-green focus:outline-none transition-all text-sm font-medium"
          />
        </div>
      </header>

      {loading ? (
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-80 animate-pulse rounded-[2.5rem] bg-slate-50 border border-slate-100" />
          ))}
        </div>
      ) : filteredRecipes.length > 0 ? (
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard 
              key={recipe.id}
              recipe={recipe}
              index={index}
              onClick={handleOpenRecipe}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
          <div className="mb-6 rounded-full bg-white p-8 text-slate-200 shadow-sm">
            <Heart size={48} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Your favorite list is empty</h2>
          <p className="text-slate-500 mt-2 max-w-sm font-medium">Save recipes you love to find them here later and plan your meals easier.</p>
          <Link to="/recipes" className="mt-8 rounded-2xl bg-brand-green px-10 py-4 font-bold text-white shadow-xl shadow-brand-green/20 hover:scale-105 transition-all active:scale-95">
            Discover Recipes
          </Link>
        </div>
      )}

      <RecipeModal 
        recipe={selectedRecipe} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.div>
  );
}
