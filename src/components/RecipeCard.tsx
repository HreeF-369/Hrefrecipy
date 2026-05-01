import React from "react";
import { motion } from "motion/react";
import { Flame, Clock, Heart, ChevronRight } from "lucide-react";
import { Recipe } from "../types";
import { useApp } from "../context/AppContext";

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
  onClick: (recipe: Recipe) => void;
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, index, onClick }) => {
  const { favorites, toggleFavorite } = useApp();

  const handlePinterestSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    const recipeUrl = encodeURIComponent(`${window.location.origin}/recipe/${recipe.id}`);
    const mediaUrl = encodeURIComponent(recipe.image);
    const description = encodeURIComponent(`Check out this healthy recipe: ${recipe.title} on Hreefrecipy!`);
    const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${recipeUrl}&media=${mediaUrl}&description=${description}`;
    window.open(pinterestUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 6) * 0.05 }}
      onClick={() => onClick(recipe)}
      className="cursor-pointer"
    >
      <div className="group flex flex-col p-0 rounded-[20px] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 h-full">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Pinterest Save Button - Top Left */}
          <button
            onClick={handlePinterestSave}
            title="Save to Pinterest"
            className="absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.12 1.1.34 2.269.521 3.483.521 6.621 0 11.988-5.366 11.988-11.987S18.638 0 12.017 0z"/>
            </svg>
          </button>
          
          {/* Nutritional Badge - Top Right (Moved slightly to avoid overlap if needed, but original was Top Left) */}
          {/* I'll keep badges similar to original but adjusted for Pinterest button */}
          <div className="absolute top-4 right-16">
            <div className="flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-sm">
              <Flame size={12} className="text-orange-500 fill-orange-500/10" />
              <span className="text-[11px] font-bold text-slate-900">
                {recipe.calories}kcal
              </span>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-md px-3 py-1.5 text-white border border-white/10">
              <Clock size={12} className="text-white/80" />
              <span className="text-[10px] font-bold">{recipe.readyInMinutes}m</span>
            </div>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(recipe.id);
            }}
            className={cn(
              "absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md shadow-lg transition-all z-10",
              favorites.includes(recipe.id) ? "bg-red-500 text-white" : "bg-white/90 text-slate-400 hover:text-red-500"
            )}
          >
            <Heart size={16} fill={favorites.includes(recipe.id) ? "currentColor" : "none"} />
          </button>
        </div>
        
        <div className="p-5 flex flex-1 flex-col">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-black uppercase tracking-[0.1em] text-brand-green">
              {recipe.category.toUpperCase()}
            </span>
            <div className="h-1 w-1 rounded-full bg-slate-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-400">
              {recipe.servings} Servings
            </span>
          </div>
          
          <h3 className="line-clamp-2 text-base font-bold text-slate-900 group-hover:text-brand-green transition-colors leading-tight mb-4">
            {recipe.title}
          </h3>
          
          <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + (index % 50)}`} alt="user" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-1 text-brand-green font-bold text-xs uppercase tracking-widest">
              View Recipe
              <ChevronRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
