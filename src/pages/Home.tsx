import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, Utensils, Calendar, ShoppingBag, ArrowRight, Sparkles, Coffee, Moon, Flame, Clock, ChevronRight, ChevronLeft, GlassWater, IceCream, ChefHat, Search, CheckCircle2, Heart } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Recipe } from "../types";
import { searchRecipes, getRecipeById } from "../services/api";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { RecipeModal } from "../components/RecipeModal";
import { FanReviews } from "../components/FanReviews";
import { useApp } from "../context/AppContext";

import { RecipeCard } from "../components/RecipeCard";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catQuery = searchParams.get("cat");
  
  const [activeCategory, setActiveCategory] = useState("ALL RECIPES");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const { favorites, toggleFavorite, allRecipes, setAllRecipes } = useApp();
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const popularCategoriesRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeftCards, setCanScrollLeftCards] = useState(false);
  const [canScrollRightCards, setCanScrollRightCards] = useState(true);
  const [canScrollPopularLeft, setCanScrollPopularLeft] = useState(false);
  const [canScrollPopularRight, setCanScrollPopularRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
    }
  };

  const checkScrollCards = () => {
    if (cardsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = cardsContainerRef.current;
      setCanScrollLeftCards(scrollLeft > 0);
      setCanScrollRightCards(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
    }
  };

  const checkPopularScroll = () => {
    if (popularCategoriesRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = popularCategoriesRef.current;
      setCanScrollPopularLeft(scrollLeft > 2);
      setCanScrollPopularRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    checkScrollCards();
    checkPopularScroll();
    
    const handleResize = () => {
      checkScroll();
      checkScrollCards();
      checkPopularScroll();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    if (catQuery && categoriesMapping[catQuery]) {
      setActiveCategory(categoriesMapping[catQuery]);
      // Scroll to discovery section if a category is selected via URL
      const el = document.getElementById('discovery');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [catQuery]);

  useEffect(() => {
    document.title = "Hreefrecipy - Premium World-Class Recipes";
  }, []);

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

  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchFavorites() {
       try {
         if (favorites.length === 0) {
           setFavoriteRecipes([]);
           return;
         }
         const favoriteResults = await Promise.all(
           favorites.map(id => getRecipeById(id).catch(() => null))
         );
         setFavoriteRecipes(favoriteResults.filter((r): r is Recipe => r !== null));
       } catch (error) {
         console.error("Error fetching favorites:", error);
       }
    }
    fetchFavorites();
  }, [favorites]);

  const filteredRecipes = useMemo(() => {
    let result = allRecipes;
    
    if (activeCategory === "FAVORITES") {
      result = favoriteRecipes;
    } else if (activeCategory !== "ALL RECIPES") {
      result = result.filter(recipe => 
        recipe.category.toUpperCase() === activeCategory || 
        (recipe.tags && recipe.tags.some(t => t.toUpperCase() === activeCategory))
      );
    }

    if (searchQuery) {
      result = result.filter(recipe => recipe.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    return result;
  }, [allRecipes, activeCategory, searchQuery, favoriteRecipes]);

  const handleOpenRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const categories = [
    "ALL RECIPES", "FAVORITES", "BREAKFAST", "LUNCH", "DINNER", "MAIN DISHES", "DESSERTS", "DRINKS", "FITNESS MEALS"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-16"
    >
      {/* Large Zesty Hero Section */}
      <section className="relative -mx-4 -mt-6 mb-10 overflow-hidden md:-mx-8 md:-mt-8 lg:-mx-12 lg:-mt-12">
        <div className="relative h-[400px] w-full md:h-[500px] lg:h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=2000" 
            className="h-full w-full object-cover"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/90 via-brand-ink/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 lg:p-20">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl space-y-6 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/20 px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-green backdrop-blur-md">
                <Sparkles size={14} />
                <span>Premium Quality Recipes</span>
              </div>
              <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-white md:text-3xl md:text-4xl lg:text-5xl lg:text-5xl md:text-6xl lg:text-7xl">
                Fuel Your Body, <br />
                <span className="text-brand-green">Master Your Health</span>
              </h1>
              <p className="text-base md:text-lg font-medium leading-relaxed text-slate-100 opacity-90 max-w-xl line-clamp-3 md:line-clamp-none">
                Discover over 70+ hand-picked fitness meals and nutrition plans designed by professional chefs and nutritionists.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('discovery');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto rounded-full bg-brand-green px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-white shadow-xl shadow-brand-green/30 transition-all hover:scale-105 active:scale-95"
                >
                  Explore Recipes
                </button>
                <Link
                  to="/planner"
                  className="w-full sm:w-auto text-center rounded-full bg-white/10 px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
                >
                  Meal Planner
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="space-y-8 relative">
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl font-black text-brand-ink">Popular Categories</h2>
          <p className="mt-2 font-bold text-slate-400 uppercase tracking-widest text-[10px] md:text-xs">Choose your performance goal</p>
        </div>
        
        <div className="relative w-full group">
          {/* Scroll Navigation Controls for Popular Categories */}
          {canScrollPopularLeft && (
            <button 
              onClick={() => {
                popularCategoriesRef.current?.scrollBy({ left: -160, behavior: 'smooth' });
              }}
              className="absolute left-1 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex lg:hidden flex-col items-center justify-center text-gray-500 hover:text-gray-800 transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-gray-500 hover:text-gray-800" />
            </button>
          )}

          <div 
            ref={popularCategoriesRef}
            onScroll={checkPopularScroll}
            className="flex flex-row overflow-x-auto lg:overflow-visible lg:flex-wrap lg:justify-center justify-start gap-3 w-full scrollbar-none pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" 
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {[
              { id: "breakfast", name: "Breakfast", icon: Coffee, color: "bg-orange-50 text-orange-600" },
              { id: "lunch", name: "Lunch", icon: Utensils, color: "bg-green-50 text-green-600" },
              { id: "dinner", name: "Dinner", icon: Moon, color: "bg-blue-50 text-blue-600" },
              { id: "main-dishes", name: "Main Dishes", icon: ChefHat, color: "bg-indigo-50 text-indigo-600" },
              { id: "desserts", name: "Desserts", icon: IceCream, color: "bg-pink-50 text-pink-600" },
              { id: "drinks", name: "Drinks", icon: GlassWater, color: "bg-cyan-50 text-cyan-600" },
              { id: "fitness", name: "Fitness", icon: Flame, color: "bg-red-50 text-red-600" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  const targetCat = cat.name === "Fitness" ? "FITNESS MEALS" : cat.name.toUpperCase();
                  setActiveCategory(targetCat);
                  const el = document.getElementById('discovery');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={cn(
                  "group flex flex-row items-center gap-3 rounded-full border border-slate-100 bg-white px-5 py-3 text-sm font-semibold text-brand-ink transition-all hover:border-brand-green hover:shadow-sm shrink-0 lg:flex-1 lg:flex-col lg:items-center lg:justify-center lg:gap-4 lg:rounded-3xl lg:p-6 lg:min-w-[120px]",
                  activeCategory === (cat.name === "Fitness" ? "FITNESS MEALS" : cat.name.toUpperCase()) && "border-brand-green bg-green-50/20 shadow-md lg:shadow-lg"
                )}
              >
                <div className={`flex h-9 w-9 lg:h-14 lg:w-14 items-center justify-center rounded-full lg:rounded-2xl ${cat.color} group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-5 h-5 lg:w-7 lg:h-7" />
                </div>
                <span className="text-sm lg:text-sm font-semibold lg:font-bold text-brand-ink whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>

          {canScrollPopularRight && (
            <button 
              onClick={() => {
                popularCategoriesRef.current?.scrollBy({ left: 160, behavior: 'smooth' });
              }}
              className="absolute right-1 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex lg:hidden items-center justify-center text-gray-500 hover:text-gray-800 transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-gray-500 hover:text-gray-800" />
            </button>
          )}
        </div>
      </section>

      {/* Weekly Planner & Tips Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-stretch">
        <section className="bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative overflow-hidden shadow-sm lg:col-span-2">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green to-blue-500"></div>
          <div className="flex-1 text-center md:text-left z-10 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">Weekly Planner</h2>
            <p className="text-sm md:text-lg text-slate-500 font-medium leading-relaxed max-w-md">
              Organize your meals, save time, and eat healthier with our smart planner.
            </p>
            <Link
              to="/planner"
              className="rounded-xl bg-brand-ink px-8 md:px-10 py-3.5 font-bold text-white transition-all hover:bg-slate-800 active:scale-95 shadow-xl shadow-brand-ink/20 transform hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Open Planner
            </Link>
          </div>
          <div className="hidden md:flex flex-shrink-0 h-32 w-32 md:h-40 md:w-40 bg-green-50 rounded-full items-center justify-center text-green-200">
            <Calendar size={48} className="md:w-16 md:h-16" />
          </div>
        </section>

        <section className="font-sans bg-[#FFF8F0] p-6 md:p-8 rounded-[2.5rem] border border-orange-100 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-200 rounded-full opacity-20 group-hover:scale-150 transition duration-1000 blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-orange-600 font-bold text-[10px] md:text-xs uppercase tracking-wider mb-3 md:mb-4">
              <TrendingUp size={16} />
              <span>Daily Tip</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-brand-ink leading-snug mb-2">
              Prep veggies on Sunday!
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Cutting your vegetables in advance saves up to 40 minutes during busy weeknights.
            </p>
          </div>
        </section>
      </div>

      {/* Discovery Section */}
      <section id="discovery" className="space-y-8 scroll-mt-24 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink">Discovery</h2>
            <p className="text-gray-500 mt-1 text-xs md:text-sm font-medium">Explore world-class recipes</p>
          </div>
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-green transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 transition shadow-sm text-sm font-medium"
            />
          </div>
        </div>

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
                  setActiveCategory(cat);
                  e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }}
                className={cn(
                  "whitespace-nowrap rounded-full px-6 md:px-8 py-3 md:py-3.5 text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all shrink-0",
                  cat === activeCategory 
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
          <motion.div 
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {loading ? (
              Array(8).fill(0).map((_, i) => (
                <div key={i} className="h-72 animate-pulse rounded-[2.5rem] bg-slate-50" />
              ))
            ) : filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe, index) => (
                <RecipeCard 
                  key={`${recipe.id}-${index}`}
                  recipe={recipe}
                  index={index}
                  onClick={handleOpenRecipe}
                />
              ))
            ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">No recipes added yet. Stay tuned!</h3>
              <p className="text-slate-500 mt-2">Check back soon for new gourmet creations</p>
            </div>
          )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Fan Reviews Section */}
      <FanReviews />

      {/* Recipe Modal */}
      <RecipeModal 
        recipe={selectedRecipe} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </motion.div>
  );
}
