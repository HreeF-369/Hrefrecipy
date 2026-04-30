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

  const { favorites, toggleFavorite } = useApp();
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeftCards, setCanScrollLeftCards] = useState(false);
  const [canScrollRightCards, setCanScrollRightCards] = useState(true);

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

  useEffect(() => {
    checkScroll();
    checkScrollCards();
    
    const handleResize = () => {
      checkScroll();
      checkScrollCards();
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

  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchInitial() {
      setLoading(true);
      const categoriesToFetch = [
        { cat: "breakfast", label: "BREAKFAST" },
        { cat: "lunch", label: "LUNCH" },
        { cat: "dinner", label: "DINNER" },
        { cat: "main-dishes", label: "MAIN DISHES" },
        { cat: "desserts", label: "DESSERTS" },
        { cat: "drinks", label: "DRINKS" },
        { cat: "fitness", label: "FITNESS MEALS" }
      ];
      
      const batchResults = await Promise.all(
        categoriesToFetch.map(async ({cat, label}) => {
          const results = await searchRecipes("", cat, 8);
          // Set the category on the recipe to the exact label so filtering is simple
          return results.map(r => ({ ...r, category: label }));
        })
      );
      
      const combined = batchResults.flat().sort(() => Math.random() - 0.5);
      setAllRecipes(combined);
      setLoading(false);
    }
    
    fetchInitial();
  }, []);

  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchFavorites() {
       if (favorites.length === 0) {
         setFavoriteRecipes([]);
         return;
       }
       const favoriteResults = await Promise.all(
         favorites.map(id => getRecipeById(id).catch(() => null))
       );
       setFavoriteRecipes(favoriteResults.filter((r): r is Recipe => r !== null));
    }
    fetchFavorites();
  }, [favorites]);

  const filteredRecipes = useMemo(() => {
    let result = allRecipes;
    
    if (activeCategory === "FAVORITES") {
      result = favoriteRecipes;
    } else if (activeCategory !== "ALL RECIPES") {
      result = result.filter(recipe => recipe.category === activeCategory);
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
      <section className="relative -mx-4 -mt-6 mb-10 overflow-hidden lg:-mx-10 lg:-mt-10">
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
              <h1 className="font-display text-4xl font-black leading-tight text-white md:text-5xl lg:text-7xl">
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
        
        <div className="relative -mx-4 md:mx-0">
          {canScrollLeftCards && (
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 flex items-center justify-start pointer-events-none">
              <button 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-400 pointer-events-auto hover:text-slate-600 hover:scale-110 active:scale-95 transition-all ml-2 md:ml-4"
                onClick={() => {
                   cardsContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
                }}
                aria-label="Scroll cards left"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          )}

          <div 
            ref={cardsContainerRef}
            onScroll={checkScrollCards}
            className="flex overflow-x-auto pb-4 pt-2 -mt-2 px-4 md:px-2 gap-4 scrollbar-hide snap-x snap-mandatory whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                  "snap-center shrink-0 min-w-[70%] sm:min-w-[150px] md:min-w-[180px] group flex flex-col items-center justify-center gap-4 rounded-3xl border border-slate-100 bg-white p-6 md:p-8 transition-all hover:border-brand-green hover:shadow-xl hover:-translate-y-1",
                  activeCategory === (cat.name === "Fitness" ? "FITNESS MEALS" : cat.name.toUpperCase()) && "border-brand-green bg-green-50/20 shadow-lg"
                )}
              >
                <div className={`flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl ${cat.color} group-hover:scale-110 transition-transform`}>
                  <cat.icon size={24} className="md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm font-bold text-brand-ink">{cat.name}</span>
              </button>
            ))}
          </div>

          {canScrollRightCards && (
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 flex items-center justify-end pointer-events-none">
              <button 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-400 pointer-events-auto hover:text-slate-600 hover:scale-110 active:scale-95 transition-all mr-2 md:mr-4"
                onClick={() => {
                   cardsContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
                }}
                aria-label="Scroll cards right"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
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
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-16 bg-gradient-to-r from-white to-transparent z-10 flex items-center justify-start pointer-events-none">
              <button 
                className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-slate-400 pointer-events-auto hover:text-slate-600 hover:bg-white transition-all ml-2"
                onClick={() => {
                   scrollContainerRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
                }}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
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
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-16 bg-gradient-to-l from-white to-transparent z-10 flex items-center justify-end pointer-events-none">
              <button 
                className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-slate-400 pointer-events-auto hover:text-slate-600 hover:bg-white transition-all mr-2"
                onClick={() => {
                   scrollContainerRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
                }}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
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
                <div
                  key={recipe.id}
                  onClick={() => handleOpenRecipe(recipe)}
                className="group flex flex-col overflow-hidden rounded-[20px] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4">
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
                <div className="flex flex-1 flex-col p-5">
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
                    <span className="flex items-center gap-1 text-[10px] font-black text-brand-green uppercase tracking-widest">
                      View Recipe <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">No recipes found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search or filters</p>
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
