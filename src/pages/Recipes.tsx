import { useState, useEffect, useMemo, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "motion/react";
import { Search, Utensils, ChevronRight, ChevronLeft } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Recipe } from "../types/index.js";
import { RecipeModal } from "../components/RecipeModal.js";
import { FanReviews } from "../components/FanReviews.js";
import { useApp } from "../context/AppContext.js";
import { RecipeCard } from "../components/RecipeCard.js";
import { Breadcrumbs } from "../components/Breadcrumbs.js";
import localRecipes from "../data/recipes.json";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Recipes() {
  const [searchParams] = useSearchParams();
  
  const [activeTab, setActiveTab] = useState("ALL RECIPES");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const { setAllRecipes } = useApp();

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
    const rawCat = searchParams.get("cat");
    if (rawCat) {
      setActiveTab(rawCat.toUpperCase().replace("-", " "));
    } else {
      setActiveTab("ALL RECIPES");
    }
  }, [searchParams]);

  useEffect(() => {
    setAllRecipes(localRecipes as Recipe[]);
  }, [setAllRecipes]);

  const filteredRecipes = useMemo(() => {
    let result = localRecipes as Recipe[];
    
    if (activeTab !== "ALL RECIPES") {
      result = result.filter(recipe => {
        const recipeCat = recipe.category.toLowerCase();
        const activeTabLower = activeTab.toLowerCase().replace(" ", "-");
        
        return recipeCat.includes(activeTabLower) || 
               activeTabLower.includes(recipeCat) ||
               (recipe.tags && recipe.tags.some(t => t.toLowerCase().includes(activeTabLower)));
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

  const visibleRecipes = useMemo(() => {
    return filteredRecipes.slice(0, visibleCount);
  }, [filteredRecipes, visibleCount]);

  const categories = [
    { id: "ALL RECIPES", name: "ALL RECIPES" },
    { id: "BREAKFAST", name: "BREAKFAST" },
    { id: "LUNCH", name: "LUNCH" },
    { id: "DINNER", name: "DINNER" },
    { id: "MAIN DISHES", name: "MAIN DISHES" },
    { id: "DESSERTS", name: "DESSERTS" },
    { id: "DRINKS", name: "DRINKS" },
    { id: "FITNESS", name: "FITNESS" }
  ];

  return (
    <motion.div className="space-y-8 pb-12">
      <Helmet>
        <title>Discovery | DishFit</title>
      </Helmet>

      <div className="relative -mx-4 md:mx-0">
        <div ref={scrollContainerRef} onScroll={checkScroll} className="flex overflow-x-auto gap-3 px-4 py-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn("px-6 py-2.5 text-[10px] md:text-sm font-black uppercase rounded-full",
                activeTab === cat.id ? "bg-brand-green text-white" : "bg-white text-slate-400 border border-slate-100"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab + query} className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRecipes.map((recipe, index) => (
            <RecipeCard key={`${recipe.id}-${index}`} recipe={recipe} index={index} onClick={(r) => { setSelectedRecipe(r); setIsModalOpen(true); }} />
          ))}
        </motion.div>
      </AnimatePresence>

      <RecipeModal recipe={selectedRecipe} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.div>
  );
}
