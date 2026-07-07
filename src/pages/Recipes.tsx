import { useState, useEffect, useMemo, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "motion/react";
import { Search, Utensils, ChevronRight, ChevronLeft } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Recipe } from "../types/index.js";
import { RecipeModal } from "../components/RecipeModal.js";
import { FanReviews } from "../components/FanReviews.js";
import { useApp } from "../context/AppContext.js";
import { RecipeCard } from "../components/RecipeCard.js";
import { Breadcrumbs } from "../components/Breadcrumbs.js";
import { RECIPES_DATA } from "../services/recipesData.js";

const localRecipes = RECIPES_DATA;

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Recipes() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState("ALL RECIPES");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const { setAllRecipes, favorites } = useApp();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const categoriesMapping: Record<string, string> = {
    "breakfast": "BREAKFAST",
    "lunch": "LUNCH",
    "dinner": "DINNER",
    "main-dishes": "MAIN DISHES",
    "desserts": "DESSERTS",
    "drinks": "DRINKS",
    "fitness": "FITNESS MEALS",
    "favorites": "FAVORITES"
  };

  useEffect(() => {
    const rawCat = searchParams.get("cat");
    if (rawCat && categoriesMapping[rawCat]) {
      setActiveTab(categoriesMapping[rawCat]);
    } else if (rawCat) {
      setActiveTab(rawCat.toUpperCase().replace(/-/g, " "));
    } else {
      setActiveTab("ALL RECIPES");
    }
  }, [searchParams]);

  useEffect(() => {
    setAllRecipes(localRecipes as Recipe[]);
  }, [setAllRecipes]);

  const filteredRecipes = useMemo(() => {
    let result = localRecipes as Recipe[];
    
    if (activeTab === "FAVORITES") {
      result = result.filter(recipe => favorites.includes(recipe.id));
    } else if (activeTab !== "ALL RECIPES") {
      result = result.filter(recipe => {
        const recipeCat = recipe.category.toUpperCase();
        const target = activeTab;

        return recipeCat === target ||
               recipeCat.includes(target) ||
               target.includes(recipeCat) ||
               (recipe.tags && recipe.tags.some(t => t.toUpperCase().includes(activeTab)));
      });
    }

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(recipe => 
        recipe.title.toLowerCase().includes(q) ||
        recipe.description?.toLowerCase().includes(q) ||
        recipe.ingredients?.some(ing => ing.name.toLowerCase().includes(q))
      );
    }
    
    return result;
  }, [activeTab, query]);

  useEffect(() => {
    setVisibleCount(12);
  }, [activeTab, query]);

  const visibleRecipes = useMemo(() => {
    return filteredRecipes.slice(0, visibleCount);
  }, [filteredRecipes, visibleCount]);

  const categories = [
    "ALL RECIPES", "FAVORITES", "BREAKFAST", "LUNCH", "DINNER", "MAIN DISHES", "DESSERTS", "DRINKS", "FITNESS MEALS"
  ];

  return (
    <motion.div className="space-y-8 pb-12">
      <Helmet>
        <title>Discovery | DishFit</title>
      </Helmet>

      <div className="relative -mx-4 md:mx-0">
        {canScrollLeft && (
          <button
            className="absolute left-1 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-all active:scale-95 cursor-pointer"
            onClick={() => {
              scrollContainerRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
            }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-gray-500 hover:text-gray-800" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto whitespace-nowrap gap-3 px-4 py-2 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={(e) => {
                setActiveTab(cat);
                e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
              }}
              className={cn(
                "whitespace-nowrap rounded-full px-6 md:px-8 py-3 md:py-3.5 text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all shrink-0",
                cat === activeTab
                  ? "bg-brand-green text-white shadow-lg shadow-brand-green/20"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {canScrollRight && (
          <button
            className="absolute right-1 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-all active:scale-95 cursor-pointer"
            onClick={() => {
              scrollContainerRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
            }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-gray-500 hover:text-gray-800" />
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab + query} className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRecipes.map((recipe, index) => (
            <RecipeCard key={`${recipe.id}-${index}`} recipe={recipe} index={index} onClick={(r) => navigate(`/recipe/${r.id}`)} />
          ))}
        </motion.div>
      </AnimatePresence>

      {!loading && visibleCount < filteredRecipes.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 12)}
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-green/25 hover:shadow-xl hover:shadow-brand-green/30 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Load More Recipes
          </button>
        </div>
      )}

      <RecipeModal recipe={selectedRecipe} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.div>
  );
}
