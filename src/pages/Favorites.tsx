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

export default function Favorites() {
  const { favorites, toggleFavorite } = useApp();
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
            <div
              key={recipe.id}
              onClick={() => handleOpenRecipe(recipe)}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(recipe.id);
                  }}
                  className="absolute top-6 right-6 p-3 bg-red-500 text-white rounded-full shadow-lg transform transition-transform hover:scale-110 active:scale-95 z-10"
                >
                  <Heart size={18} fill="currentColor" />
                </button>

                <div className="absolute bottom-6 left-6 flex gap-2">
                  <div className="flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-sm">
                    <Flame size={12} className="text-orange-500 fill-orange-500/10" />
                    <span className="text-[11px] font-bold text-slate-900">{recipe.calories}kcal</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md px-3 py-1.5 text-white border border-white/10">
                    <Clock size={12} className="text-white/80" />
                    <span className="text-[10px] font-bold">{recipe.readyInMinutes}m</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-brand-green">
                    {recipe.category.toUpperCase()}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-slate-200" />
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    {recipe.servings} Servings
                  </span>
                </div>
                <h3 className="line-clamp-2 text-xl font-bold text-slate-900 group-hover:text-brand-green transition-colors leading-tight mb-6">
                  {recipe.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + (index % 50)}`} alt="user" className="h-full w-full object-cover" />
                        </div>
                      ))}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-black text-brand-green uppercase tracking-widest">
                    Cook Now <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            </div>
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
