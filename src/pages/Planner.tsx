import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Utensils, Moon, Plus, Trash2, ShoppingCart, ChevronLeft, ChevronRight, X, Heart, Search, Apple, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { getRecipeById, searchRecipes } from "../services/api";
import { Recipe } from "../types";

export default function Planner() {
  const { plan, removeFromPlan, addToPlan, favorites, addRecipeIngredientsToGroceryList } = useApp();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [selectingSlot, setSelectingSlot] = useState<{ day: string; type: string } | null>(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'favorites' | 'search'>('favorites');

  const getInitialDayIndex = () => {
    const today = new Date().getDay(); // 0 is Sunday, 1 is Monday...
    const index = today === 0 ? 6 : today - 1;
    return index;
  };
  const [selectedDayIndex, setSelectedDayIndex] = useState(getInitialDayIndex());

  // Date Logic
  const weekDates = useMemo(() => {
    const dates = [];
    const first = currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1); // Monday
    const startOfWeek = new Date(currentDate.setDate(first));
    
    for (let i = 0; i < 7; i++) {
       const date = new Date(startOfWeek);
       date.setDate(startOfWeek.getDate() + i);
       dates.push(date);
    }
    return dates;
  }, [currentDate]);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  React.useEffect(() => {
    document.title = "Weekly Meal Planner | Hreefrecipy";
  }, []);

  const formatDateRange = () => {
    const start = weekDates[0];
    const end = weekDates[6];
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
  };

  const mealTypes = [
    { id: "breakfast", name: "Breakfast", icon: Coffee, color: "text-orange-500" },
    { id: "lunch", name: "Lunch", icon: Utensils, color: "text-blue-500" },
    { id: "dinner", name: "Dinner", icon: Moon, color: "text-indigo-500" },
    { id: "snack", name: "Snacks", icon: Apple, color: "text-red-500" },
    { id: "workout", name: "Pre/Post Workout", icon: Dumbbell, color: "text-purple-500" },
  ];

  const handleOpenSelector = async (day: string, type: string) => {
    setSelectingSlot({ day, type });
    setIsSelectorOpen(true);
    setSearchQuery("");
    setSearchResults([]);
    
    if (favorites.length > 0 && favoriteRecipes.length === 0) {
      setLoading(true);
      const recipes = await Promise.all(favorites.map(id => getRecipeById(id).catch(() => null)));
      setFavoriteRecipes(recipes.filter((r): r is Recipe => r !== null));
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);
    const results = await searchRecipes(searchQuery, 'all', 10);
    setSearchResults(results);
    setLoading(false);
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    if (selectingSlot) {
      addToPlan(selectingSlot.day, selectingSlot.type, recipe);
      setIsSelectorOpen(false);
      setSelectingSlot(null);
    }
  };

  const changeWeek = (offset: number) => {
    const next = new Date(currentDate);
    next.setDate(next.getDate() + (offset * 7));
    setCurrentDate(next);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <Helmet>
        <title>Weekly Meal Plan for Weight Loss & Easy Prep Recipes</title>
        <meta name="description" content="Use our meal planner for healthy eating. Organize your high protein recipes, snacks, and meal prep visually week by week." />
        <meta name="keywords" content="weekly meal plan for weight loss, easy meal prep recipes for beginners, meal planner for healthy eating, high protein planner" />
      </Helmet>

      <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-brand-ink">Weekly Planner</h1>
          <p className="text-slate-400 font-medium tracking-wide text-xs uppercase">Your personal kitchen coordinator</p>
        </div>
        <div className="flex items-center gap-4 bg-slate-100 rounded-2xl p-1.5 border border-slate-200">
          <button onClick={() => changeWeek(-1)} className="p-2 hover:bg-white rounded-xl transition-colors"><ChevronLeft size={18} /></button>
          <span className="font-bold text-xs uppercase tracking-widest text-slate-500">{formatDateRange()}</span>
          <button onClick={() => changeWeek(1)} className="p-2 hover:bg-white rounded-xl transition-colors"><ChevronRight size={18} /></button>
        </div>
      </header>

      <div className="grid gap-8 w-full box-border px-0 md:px-0">
        {/* Weekly View Content */}
        <div className="pb-4 w-full box-border overflow-hidden">
          {/* Mobile Calendar Layout */}
          <div className="block md:hidden space-y-6 w-full box-border text-center md:text-left px-0">
            <div className="flex flex-row overflow-x-auto justify-start space-x-2 w-[calc(100vw-32px)] md:w-full pb-3 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ WebkitOverflowScrolling: 'touch' }}>
              {weekDates.map((date, idx) => {
                const day = days[idx];
                const isSelected = selectedDayIndex === idx;
                const isToday = date.toDateString() === new Date().toDateString();
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDayIndex(idx)}
                    className={`flex flex-col items-center justify-center py-2.5 px-4 rounded-2xl min-w-[64px] transition-all border shrink-0 ${
                      isSelected 
                        ? "bg-brand-green text-white border-brand-green shadow-lg shadow-brand-green/20" 
                        : "bg-white text-slate-800 border-slate-100 hover:bg-slate-50"
                    }`}
                  >
                    <span className={`text-[10px] font-black uppercase tracking-wider ${isSelected ? "text-white/80" : "text-slate-400"}`}>{day}</span>
                    <span className={`text-base font-black mt-0.5 ${isToday && !isSelected ? "text-brand-green" : ""}`}>{date.getDate()}</span>
                  </button>
                );
              })}
            </div>

            {/* Compact Meals Section for Selected Day */}
            <div className="bg-white border border-slate-100 rounded-[2rem] p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Meals for {days[selectedDayIndex]}</p>
                <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full">{weekDates[selectedDayIndex].toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
              <div className="space-y-3">
                {mealTypes.map(type => {
                  const day = days[selectedDayIndex];
                  const key = `${day}-${type.id}`;
                  const meal = plan[key];
                  return (
                    <div 
                      key={type.id}
                      onClick={() => !meal && handleOpenSelector(day, type.id)}
                      className={`group relative flex items-center justify-between gap-4 rounded-2xl p-3 border border-slate-100 cursor-pointer transition-all ${
                        meal 
                          ? "bg-white shadow-sm border-l-4 border-brand-green" 
                          : "bg-slate-50/70 hover:bg-white border-dashed border-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 w-[115px] shrink-0">
                        <type.icon className={`w-4 h-4 ${type.color}`} />
                        <span className="text-xs font-bold text-slate-700 capitalize">{type.name}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        {meal ? (
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <img src={meal.image} alt={meal.title} className="w-10 h-10 object-cover rounded-xl shrink-0" />
                              <p className="text-xs font-bold text-slate-800 truncate leading-tight">{meal.title}</p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFromPlan(day, type.id);
                              }}
                              className="h-7 w-7 bg-red-50 text-red-500 hover:bg-red-100 rounded-full flex items-center justify-center transition-colors shrink-0"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        ) : (
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 py-1 justify-end">
                            <Plus size={14} className="text-slate-300" /> Plan Meal
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Calendar Grid */}
          <div className="hidden md:grid md:grid-cols-8 gap-4 w-full">
            <div className="pt-[3.25rem] space-y-4 text-right pr-4">
              {mealTypes.map(type => (
                <div key={type.id} className="flex items-center justify-end gap-2 h-20">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{type.name}</span>
                </div>
              ))}
            </div>

            {weekDates.map((date, idx) => {
              const day = days[idx];
              return (
                <div key={day} className="space-y-4">
                  <div className="text-center pb-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{day}</p>
                    <p className={`text-lg font-black ${date.toDateString() === new Date().toDateString() ? "text-brand-green" : "text-slate-800"}`}>
                      {date.getDate()}
                    </p>
                  </div>

                  {mealTypes.map(type => {
                    const key = `${day}-${type.id}`;
                    const meal = plan[key];

                    return (
                      <div 
                        key={type.id}
                        onClick={() => !meal && handleOpenSelector(day, type.id)}
                        className={`group relative h-20 rounded-2xl p-2 flex flex-col items-center justify-center border border-slate-100 transition-all cursor-pointer ${
                          meal 
                            ? "bg-white shadow-sm border-l-4 border-brand-green" 
                            : "bg-slate-50 hover:bg-white border-dashed border-slate-200"
                        }`}
                      >
                      {meal ? (
                        <>
                          <img src={meal.image} alt={meal.title} className="w-full h-full object-cover rounded-2xl" />
                          <div className="absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 bg-black/60 rounded-b-2xl backdrop-blur-sm transition-opacity">
                            <p className="text-[10px] text-white line-clamp-2 font-bold leading-tight">{meal.title}</p>
                          </div>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromPlan(day, type.id);
                            }}
                            className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 size={12} />
                          </button>
                        </>
                      ) : (
                        <div className="flex flex-col items-center gap-1 text-gray-300 group-hover:text-brand-light-green transition-colors">
                          <Plus size={20} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Add</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        </div>

        {/* Floating Shopping List CTA */}
        <section className="bg-brand-orange rounded-3xl p-8 text-white relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl font-bold font-display">Generate Shopping List</h2>
              <p className="text-brand-cream/80 max-w-sm">
                We'll automatically group all required ingredients for your planned meals by category.
              </p>
            </div>
            <Link 
              to="/grocery" 
              className="flex items-center gap-3 bg-white text-brand-orange px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-orange/20"
            >
              <ShoppingCart size={20} />
              View Grocery List
            </Link>
          </div>
          <ShoppingCart size={120} className="absolute -bottom-4 -right-4 opacity-5 group-hover:rotate-12 transition-transform duration-500" />
        </section>
      </div>

      {/* Recipe Selection Modal */}
      <AnimatePresence>
        {isSelectorOpen && (
          <motion.div 
            key="recipe-selector-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4">
             <div 
               onClick={() => setIsSelectorOpen(false)}
               className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
             />
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
             >
                <header className="p-8 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Select Recipe</h2>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">
                      For {selectingSlot?.day} {selectingSlot?.type}
                    </p>
                  </div>
                  <button onClick={() => setIsSelectorOpen(false)} className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
                    <X size={24} />
                  </button>
                </header>

                <div className="flex-1 overflow-y-auto p-8">
                  <div className="flex gap-4 mb-8">
                    <button 
                      onClick={() => setActiveTab('favorites')}
                      className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all ${
                        activeTab === 'favorites' 
                          ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" 
                          : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                      }`}
                    >
                      My Favorites
                    </button>
                    <button 
                      onClick={() => setActiveTab('search')}
                      className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all ${
                        activeTab === 'search' 
                          ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" 
                          : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                      }`}
                    >
                      Search All
                    </button>
                  </div>

                  {activeTab === 'search' && (
                    <form onSubmit={handleSearch} className="mb-8 relative">
                      <input 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for any recipe..."
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-green outline-none font-medium"
                      />
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    </form>
                  )}

                  {loading ? (
                    <div className="flex flex-col items-center py-20 text-slate-400 gap-4">
                      <div className="w-10 h-10 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div>
                      <p className="font-bold text-sm uppercase tracking-widest">Finding the perfect match...</p>
                    </div>
                  ) : activeTab === 'favorites' ? (
                    favoriteRecipes.length > 0 ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {favoriteRecipes.map((recipe, index) => (
                          <div 
                            key={`${recipe.id}-${index}`}
                            onClick={() => handleSelectRecipe(recipe)}
                            className="group flex gap-4 p-3 rounded-2xl border border-slate-100 hover:border-brand-green transition-all cursor-pointer"
                          >
                            <div className="h-20 w-20 flex-shrink-0 rounded-xl overflow-hidden">
                              <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex-1 space-y-1 py-1">
                              <h4 className="font-bold text-slate-800 text-sm line-clamp-2">{recipe.title}</h4>
                              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest text-red-500">
                                <Heart size={10} className="fill-current" /> Favorite
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-20 text-center space-y-4">
                        <div className="h-20 w-20 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                          <Heart size={32} />
                        </div>
                        <div>
                          <h3 className="font-black text-slate-900">No favorites yet</h3>
                          <p className="text-sm text-slate-500 font-medium max-w-xs mx-auto">Go explore recipes and heart them to see them here for quick planning!</p>
                        </div>
                      </div>
                    )
                  ) : (
                    searchResults.length > 0 ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {searchResults.map((recipe, index) => (
                          <div 
                            key={`${recipe.id}-${index}`}
                            onClick={() => handleSelectRecipe(recipe)}
                            className="group flex gap-4 p-3 rounded-2xl border border-slate-100 hover:border-brand-green transition-all cursor-pointer"
                          >
                            <div className="h-20 w-20 flex-shrink-0 rounded-xl overflow-hidden">
                              <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex-1 space-y-1 py-1">
                              <h4 className="font-bold text-slate-800 text-sm line-clamp-2">{recipe.title}</h4>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{recipe.readyInMinutes} mins</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-20 text-center space-y-4 text-slate-300">
                        <Search size={48} />
                        <p className="font-bold text-sm uppercase tracking-widest">Search for recipes to add to your plan</p>
                      </div>
                    )
                  )}
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
