import { useState, useEffect, useMemo, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "motion/react";
import { Search, Utensils, Clock, Flame, ChevronRight, ChevronLeft, X, Sparkles, CheckCircle2, Heart } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Recipe } from "../types";
import { searchRecipes } from "../services/api";
import { RecipeModal } from "../components/RecipeModal";
import { FanReviews } from "../components/FanReviews";
import { useApp } from "../context/AppContext";

import { RecipeCard } from "../components/RecipeCard";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Recipes() {
  const [searchParams] = useSearchParams();
  const rawCat = searchParams.get("cat");
  
  const categoriesMapping: Record<string, string> = {
    "breakfast": "BREAKFAST",
    "lunch": "LUNCH",
    "dinner": "DINNER",
    "main-dishes": "MAIN DISHES",
    "desserts": "DESSERTS",
    "drinks": "DRINKS",
    "fitness": "FITNESS MEALS"
  };

  const urlCat = rawCat && categoriesMapping[rawCat] ? categoriesMapping[rawCat] : "ALL RECIPES";

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(urlCat);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { favorites, toggleFavorite, allRecipes, setAllRecipes } = useApp();

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

  useEffect(() => {
    setActiveTab(urlCat);
  }, [urlCat]);

  useEffect(() => {
    async function fetchInitial() {
      try {
        setLoading(true);
        // Just fetch all recipes since it's local now
        const results = await searchRecipes("", "all", 100);
        setAllRecipes(results);
      } catch (error) {
        console.error("Initial fetch failed:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchInitial();
  }, []);

  const filteredRecipes = useMemo(() => {
    let result = allRecipes;
    
    if (activeTab !== "ALL RECIPES") {
      result = result.filter(recipe => 
        recipe.category.toUpperCase() === activeTab || 
        (recipe.tags && recipe.tags.some(t => t.toUpperCase() === activeTab))
      );
    }

    if (query) {
      result = result.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()));
    }
    
    return result;
  }, [allRecipes, activeTab, query]);

  const categories = [
    { id: "ALL RECIPES", name: "ALL RECIPES" },
    { id: "BREAKFAST", name: "BREAKFAST" },
    { id: "LUNCH", name: "LUNCH" },
    { id: "DINNER", name: "DINNER" },
    { id: "MAIN DISHES", name: "MAIN DISHES" },
    { id: "DESSERTS", name: "DESSERTS" },
    { id: "DRINKS", name: "DRINKS" },
    { id: "FITNESS MEALS", name: "FITNESS MEALS" },
  ];

  useEffect(() => {
    document.title = "Browse Recipes | Hreefrecipy";
  }, []);

  const handleOpenRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8 pb-12"
    >
      <Helmet>
        <title>{activeTab === "ALL RECIPES" ? "High Protein Healthy Recipes & Meal Planner" : `${activeTab.charAt(0) + activeTab.slice(1).toLowerCase()} | High Protein Healthy Recipes`} | Hreefrecipy</title>
        <meta name="description" content={`Find the best ${activeTab.toLowerCase()} for weight loss, muscle gain, and healthy living. High protein meals developed by chefs.`} />
        <meta name="keywords" content={`high protein ${activeTab.toLowerCase()} recipes, ${activeTab.toLowerCase()} meal prep, healthy ${activeTab.toLowerCase()} ideas, fitness meals`} />
      </Helmet>

      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl md:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-1">Discovery</h1>
          <p className="text-slate-400 font-bold text-[10px] md:text-sm uppercase tracking-widest">Explore live world-class recipes</p>
        </div>
        
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-green transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search by ingredients..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-2xl border-none bg-white py-4 md:py-5 pl-14 pr-6 text-sm font-medium shadow-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-brand-green transition-all outline-none"
          />
        </div>
      </header>

      {/* Category Pills */}
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
              key={cat.id}
              onClick={(e) => {
                setActiveTab(cat.id);
                e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
              }}
              className={`whitespace-nowrap shrink-0 rounded-full px-6 md:px-8 py-2.5 md:py-3 text-[10px] md:text-sm font-black tracking-widest uppercase transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-brand-green text-white shadow-lg shadow-brand-green/30 scale-105"
                  : "bg-white text-slate-400 hover:bg-slate-50 border border-slate-100"
              }`}
            >
              {cat.name}
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
        <motion.div 
          key={activeTab + query}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {loading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-[28rem] animate-pulse rounded-[2.5rem] bg-slate-50 border border-slate-100" />
            ))
          ) : (
            filteredRecipes.map((recipe, index) => (
              <RecipeCard 
                key={`${recipe.id}-${index}`}
                recipe={recipe}
                index={index}
                onClick={handleOpenRecipe}
              />
            ))
          )}
        </motion.div>
      </AnimatePresence>

      {!loading && filteredRecipes.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 rounded-full bg-brand-green/10 p-6 text-brand-green">
            <Utensils size={48} />
          </div>
          <h3 className="text-xl font-bold">No recipes added yet. Stay tuned!</h3>
          <p className="text-gray-500">Check back soon for new gourmet creations</p>
          <button 
            onClick={() => {setQuery(""); setActiveTab("ALL RECIPES");}}
            className="mt-6 text-brand-green font-semibold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Fan Reviews Section */}
      <div className="mt-12 bg-white/50 py-8 rounded-[40px]">
        <FanReviews />
      </div>

      <RecipeModal 
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
}
