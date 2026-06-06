import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Users, Flame, Heart, Share2, Play, Calendar, CheckCircle2, Volume2, Loader2, Youtube, Dumbbell, Wheat, Droplets, Zap, Sparkles, Award, Info, Printer, ChevronRight, ChevronLeft, Egg, Beef, Fish, Cookie, Apple, Salad, Coffee, Soup, Sprout } from 'lucide-react';
import { Recipe } from '../types';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { speakText } from '../services/speechService';
import { getRecipeById } from '../services/api';

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'ingredients' | 'instructions' | 'nutrition' | 'comments';

const getIngredientIcon = (nameKey: string) => {
  const name = nameKey.toLowerCase();
  if (name.includes('egg')) return <Egg className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
  if (name.includes('beef') || name.includes('meat') || name.includes('pork') || name.includes('chicken') || name.includes('lamb') || name.includes('steak') || name.includes('fish') || name.includes('salmon') || name.includes('tuna') || name.includes('shrimp') || name.includes('seafood')) {
    if (name.includes('fish') || name.includes('salmon') || name.includes('tuna') || name.includes('shrimp') || name.includes('seafood')) {
      return <Fish className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
    }
    return <Beef className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
  }
  if (name.includes('flour') || name.includes('bread') || name.includes('wheat') || name.includes('pasta') || name.includes('spaghetti') || name.includes('rice') || name.includes('dough')) {
    return <Wheat className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
  }
  if (name.includes('sugar') || name.includes('chocolate') || name.includes('sweet') || name.includes('cookie') || name.includes('honey')) {
    return <Cookie className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
  }
  if (name.includes('oil') || name.includes('water') || name.includes('milk') || name.includes('cream') || name.includes('vinegar') || name.includes('sauce') || name.includes('juice')) {
    return <Droplets className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
  }
  if (name.includes('onion') || name.includes('garlic') || name.includes('pepper') || name.includes('salt') || name.includes('spice')) {
    return <Sprout className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
  }
  if (name.includes('lettuce') || name.includes('spinach') || name.includes('tomato') || name.includes('carrot') || name.includes('cucumber') || name.includes('salad') || name.includes('greens') || name.includes('herb') || name.includes('parsley') || name.includes('cilantro')) {
    return <Salad className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
  }
  if (name.includes('apple') || name.includes('orange') || name.includes('banana') || name.includes('lemon') || name.includes('lime') || name.includes('fruit') || name.includes('berry') || name.includes('strawberry')) {
    return <Apple className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
  }
  if (name.includes('coffee') || name.includes('tea') || name.includes('bean')) {
    return <Coffee className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
  }
  if (name.includes('soup') || name.includes('broth')) {
    return <Soup className="w-4 h-4 text-[#D4AF37]/40 shrink-0" />;
  }
  return <Sparkles className="w-4 h-4 text-[#D4AF37]/30 shrink-0" />;
};

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe: initialRecipe, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('ingredients');
  const [recipe, setRecipe] = useState<Recipe | null>(initialRecipe);
  const [fullLoading, setFullLoading] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const { favorites, toggleFavorite, addRecipeIngredientsToGroceryList, addToPlan, comments, addComment, deleteComment } = useApp();
  const navigate = useNavigate();
  const [showPlanMenu, setShowPlanMenu] = useState(false);
  const [addedToGrocery, setAddedToGrocery] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isPlanning, setIsPlanning] = useState(false);
  const [planSuccess, setPlanSuccess] = useState('');
  const [planError, setPlanError] = useState('');
  const [showDetailedNutrition, setShowDetailedNutrition] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isMealPlannerOpen, setIsMealPlannerOpen] = useState(false);
  const [scheduleDate, setScheduleDate] = useState(new Date().toISOString().split('T')[0]);
  const [scheduleMealType, setScheduleMealType] = useState('lunch');

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollTabsLeft, setCanScrollTabsLeft] = useState(false);
  const [canScrollTabsRight, setCanScrollTabsRight] = useState(true);

  const checkTabsScroll = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      setCanScrollTabsLeft(scrollLeft > 2);
      setCanScrollTabsRight(Math.round(scrollLeft) < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    checkTabsScroll();
    const handleResize = () => checkTabsScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [recipe, isOpen]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(checkTabsScroll, 120);
      return () => clearTimeout(timer);
    }
  }, [isOpen, recipe]);

  const getDayAbbreviation = (dateStr: string) => {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const dateObj = new Date(year, month, day);
      const daysAbbrev = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return daysAbbrev[dateObj.getDay()];
    }
    return "Mon"; // default fallback
  };

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen]);

  // Stop background reading instantly when switching away from instructions tab
  useEffect(() => {
    if (activeTab !== 'instructions') {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    }
  }, [activeTab]);

  const generateNutrition = (name: string, category: string) => {
    let baseCalories = category === 'drinks' ? 150 : 500;
    let baseProtein = category === 'drinks' ? 1 : 25;
    let baseCarbs = category === 'drinks' ? 20 : 45;
    let baseFat = category === 'drinks' ? 0 : 15;

    const cat = category.toLowerCase();
    const n = name.toLowerCase();

    if (cat.includes("beef") || n.includes("beef") || cat.includes("lamb") || cat.includes("steak")) {
      baseProtein += 15;
      baseCalories += 200;
      baseFat += 10;
    } else if (cat.includes("chicken") || n.includes("chicken")) {
      baseProtein += 10;
      baseCalories += 100;
      baseFat += 5;
    } else if (cat.includes("pasta") || cat.includes("rice") || cat.includes("dessert") || n.includes("sugar")) {
      baseCarbs += 40;
      baseCalories += 250;
    } else if (cat.includes("vege") || cat.includes("vegan") || cat.includes("salad") || n.includes("salad")) {
      baseProtein -= 5;
      baseCarbs -= 15;
      baseFat -= 8;
      baseCalories -= 200;
    }

    const protein = Math.max(5, baseProtein + (Math.floor(Math.random() * 10)));
    const carbs = Math.max(10, baseCarbs + (Math.floor(Math.random() * 20)));
    const fat = Math.max(2, baseFat + (Math.floor(Math.random() * 10)));
    const calories = Math.max(100, baseCalories + (Math.floor(Math.random() * 100)));

    return {
      calories,
      protein: `${protein}g`,
      carbs: `${carbs}g`,
      fat: `${fat}g`,
      nutrition: {
        nutrients: [
          { name: "Calories", amount: calories, unit: "kcal", percentOfDailyNeeds: Math.round((calories / 2000) * 100) },
          { name: "Protein", amount: protein, unit: "g", percentOfDailyNeeds: Math.round((protein / 50) * 100) },
          { name: "Carbohydrates", amount: carbs, unit: "g", percentOfDailyNeeds: Math.round((carbs / 300) * 100) },
          { name: "Fat", amount: fat, unit: "g", percentOfDailyNeeds: Math.round((fat / 65) * 100) },
          { name: "Fiber", amount: Math.floor(Math.random() * 10) + 5, unit: "g", percentOfDailyNeeds: 25 },
          { name: "Sugar", amount: Math.floor(Math.random() * 15) + 5, unit: "g", percentOfDailyNeeds: 15 },
          { name: "Sodium", amount: Math.floor(Math.random() * 500) + 200, unit: "mg", percentOfDailyNeeds: 18 },
          { name: "Vitamin C", amount: Math.floor(Math.random() * 30) + 10, unit: "mg", percentOfDailyNeeds: 45 },
          { name: "Calcium", amount: Math.floor(Math.random() * 200) + 50, unit: "mg", percentOfDailyNeeds: 15 },
          { name: "Vitamin D", amount: Math.floor(Math.random() * 10), unit: "µg", percentOfDailyNeeds: 12 }
        ]
      }
    };
  };

  useEffect(() => {
    if (initialRecipe && isOpen) {
      // Enrich immediately if missing or zero
      if (!initialRecipe.nutrition || initialRecipe.calories === 0) {
        const enrichment = generateNutrition(initialRecipe.title, initialRecipe.category || 'all');
        setRecipe({ ...initialRecipe, ...enrichment });
      } else {
        setRecipe(initialRecipe);
      }

      // MealDB recipes need details to get instructions/ingredients
      const hasInstructions = (initialRecipe.analyzedInstructions && initialRecipe.analyzedInstructions.length > 0 && initialRecipe.analyzedInstructions[0].steps.length > 0) || (initialRecipe.instructions && initialRecipe.instructions.length > 0);
      const hasIngredients = (initialRecipe.extendedIngredients && initialRecipe.extendedIngredients.length > 0) || (initialRecipe.ingredients && initialRecipe.ingredients.length > 0);
      
      if (!hasInstructions || !hasIngredients) {
        const fetchFull = async () => {
          setFullLoading(true);
          const full = await getRecipeById(initialRecipe.id);
          if (full) {
            const enrichment = generateNutrition(full.title, full.category || 'all');
            setRecipe({ ...full, ...enrichment });
          }
          setFullLoading(false);
        };
        fetchFull();
      }
    }
  }, [initialRecipe, isOpen]);

  if (!recipe) return null;

  const createMealTask = async (day: string) => {
    setSelectedDate(day);
    setIsPlanning(true);
    setPlanError('');
    setPlanSuccess('');

    try {
      // 1. Get or request Google Auth Token
      let token = localStorage.getItem('google_tasks_token');
      
      if (!token) {
        // Fetch Auth URL
        const authUrlRes = await fetch('/api/auth/url');
        if (!authUrlRes.ok) throw new Error('Could not connect to auth service');
        const { url } = await authUrlRes.json();
        
        const popup = window.open(url, 'oauth_popup', 'width=600,height=700');
        if (!popup) {
           throw new Error('Popup blocked. Please allow popups to connect Google Tasks.');
        }

        // Wait for OAuth success via postMessage
        token = await new Promise<string>((resolve, reject) => {
           const timer = setTimeout(() => {
             window.removeEventListener('message', listener);
             reject(new Error('Authentication timeout.'));
           }, 60000); // 1-minute timeout
           
           const listener = (event: MessageEvent) => {
             // Only listen to valid messages
             if (event.data?.type === 'OAUTH_AUTH_SUCCESS' && event.data.token) {
               clearTimeout(timer);
               window.removeEventListener('message', listener);
               localStorage.setItem('google_tasks_token', event.data.token);
               resolve(event.data.token);
             }
           };
           window.addEventListener('message', listener);
        });
      }

      if (!token) throw new Error('Authentication failed: No token received.');

      // 2. Call the generic_reminders API endpoint
      const response = await fetch('/api/generic_reminders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Cook ${recipe.title}`,
          startDate: day,
          description: `You planned to cook this! Source: ${recipe.sourceUrl || "No URL provided"}`,
          token
        })
      });

      if (!response.ok) {
        if (response.status === 401) {
           localStorage.removeItem('google_tasks_token');
           throw new Error('Auth session expired. Please click again to login.');
        }
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to sync with Google Tasks');
      }

      // 3. UI Update on Success
      addToPlan(day, recipe.category || 'Lunch', recipe);
      setShowPlanMenu(false);
      setPlanSuccess(`Task added to Google Tasks for ${day}!`);
      setTimeout(() => setPlanSuccess(''), 4000);
      
    } catch (err: any) {
      setPlanError(`Error: ${err.message}`);
      setTimeout(() => setPlanError(''), 4000);
    } finally {
      setIsPlanning(false);
    }
  };

  const handleWatchVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (recipe.youtubeUrl) {
      window.open(recipe.youtubeUrl, '_blank');
    }
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const isFavorite = favorites.includes(recipe.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.print();
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/recipe/${recipe.id}`;
    const shareData = {
      title: `Hreef Recipes: ${recipe.title}`,
      text: `Check out this amazing ${recipe.category} recipe: ${recipe.title}`,
      url: url,
    };

    if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard! Share it with your friends.");
      } catch (err) {
        console.error("Clipboard error:", err);
      }
    }
  };

  const handleStartCooking = () => {
    navigate(`/cook/${recipe.id}`);
    onClose();
  };

  const handleAddAllToGrocery = () => {
    addRecipeIngredientsToGroceryList(recipe);
    setAddedToGrocery(true);
    setTimeout(() => {
      setAddedToGrocery(false);
    }, 2000);
  };

  const handleSpeakInstructions = () => {
    if (!recipe) return;
    let textToSpeak = "";
    
    if (recipe.instructions) {
      textToSpeak = recipe.instructions.map((step, idx) => `Step ${idx + 1}: ${step}`).join(". ");
    } else {
      const steps = recipe.analyzedInstructions?.[0]?.steps || [];
      if (steps.length === 0) return;
      textToSpeak = steps.map(s => `Step ${s.number}: ${s.step}`).join(". ");
    }
    
    speakText(textToSpeak);
  };

  const tabs: { id: TabType; label: string }[] = [
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'instructions', label: 'Instructions' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'comments', label: 'Comments' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="recipe-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm overflow-hidden no-print"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full h-[100dvh] sm:w-[95%] sm:h-auto max-w-7xl sm:max-h-[90vh] bg-white sm:rounded-[40px] sm:shadow-2xl flex flex-col overflow-x-hidden overflow-y-auto sm:overflow-hidden recipe-modal-container pt-16 sm:pt-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-20 sm:top-6 right-5 z-[70] p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg shadow-black/30 hover:bg-white transition-colors"
            >
              <X className="w-8 h-8 md:w-6 md:h-6 text-gray-800" />
            </button>

            <div className="flex flex-col md:flex-row h-auto sm:h-full sm:overflow-y-auto pb-4 sm:pb-0">
              {fullLoading && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-30 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 className="w-10 h-10 text-brand-green animate-spin" />
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Hydrating details...</p>
                  </div>
                </div>
              )}
              {/* Left Column: Image & Basic Info */}
              <div className="w-full md:w-[40%] p-0 border-r border-gray-100 flex flex-col">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-72 overflow-hidden shadow-inner">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 !left-4 flex gap-2 z-[70]">
                    <button 
                      onClick={handleToggleFavorite}
                      className={`p-3 backdrop-blur-sm rounded-full shadow-lg shadow-black/30 transition-all no-print ${
                        isFavorite ? "bg-red-500 text-white" : "bg-white/90 hover:bg-white text-brand-green hover:text-red-500"
                      }`}
                    >
                      <Heart className="w-5 h-5" fill={isFavorite ? "white" : "none"} />
                    </button>
                    <button 
                      onClick={handleShare}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg shadow-black/30 hover:bg-white text-gray-700 transition-all no-print"
                      title="Share Recipe"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handlePrint}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg shadow-black/30 hover:bg-white text-gray-700 transition-all no-print cursor-pointer"
                      title="Print Recipe | انبريمي"
                    >
                      <Printer className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-8 right-8">
                    <span className="inline-block px-3 py-1 bg-brand-green text-white text-[10px] font-black uppercase tracking-widest rounded-lg mb-2 shadow-md">
                      {recipe.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white leading-tight drop-shadow-sm">
                      {recipe.title}
                    </h2>
                  </div>
                </div>

                <div className="p-10 flex-1 flex flex-col space-y-8 overflow-y-auto">
                  {/* Action Row */}
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleStartCooking}
                      className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-brand-green text-white rounded-2xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg shadow-brand-green/20 transform active:scale-95"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      Start Cooking
                    </button>

                    <div className="relative">
                      <button 
                        onClick={() => setIsMealPlannerOpen(true)}
                        className="w-14 h-14 flex items-center justify-center bg-white text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-md ring-1 ring-slate-100 active:scale-95 cursor-pointer"
                        title="Plan for later"
                      >
                        <Calendar className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {planSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-green-50 text-brand-green text-sm font-bold text-center rounded-2xl border border-green-100 shadow-sm"
                    >
                      <span className="flex items-center justify-center gap-2"><CheckCircle2 size={16} /> {planSuccess}</span>
                    </motion.div>
                  )}
                  {planError && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-red-50 text-red-700 border border-red-100 text-sm font-bold text-center rounded-2xl shadow-sm"
                    >
                      {planError}
                    </motion.div>
                  )}

                  {/* Information Card (Middle) */}
                  <div className="bg-white p-2 rounded-[24px] shadow-soft border border-slate-50 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="grid grid-cols-3 gap-1.5 md:gap-2">
                      <div className="flex flex-col items-center justify-center py-4 md:py-6 px-1 md:px-2 rounded-2xl bg-green-50/70 border border-green-100/50">
                        <Clock size={18} strokeWidth={2} className="text-brand-green mb-1 md:mb-2 md:w-6 md:h-6" />
                        <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Time</span>
                        <p className="text-xs md:text-base font-bold text-slate-900">{recipe.readyInMinutes}m</p>
                      </div>
                      <div className="flex flex-col items-center justify-center py-4 md:py-6 px-1 md:px-2 rounded-2xl bg-orange-50/70 border border-orange-100/50">
                        <Flame size={18} strokeWidth={2} className="text-brand-orange mb-1 md:mb-2 md:w-6 md:h-6" />
                        <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Energy</span>
                        <p className="text-xs md:text-base font-bold text-slate-900">{recipe.calories}kcal</p>
                      </div>
                      <div className="flex flex-col items-center justify-center py-4 md:py-6 px-1 md:px-2 rounded-2xl bg-blue-50/70 border border-blue-100/50">
                        <Users size={18} strokeWidth={2} className="text-blue-500 mb-1 md:mb-2 md:w-6 md:h-6" />
                        <span className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Servings</span>
                        <p className="text-xs md:text-base font-bold text-slate-900">{recipe.servings}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tags Section (Bottom) */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {parseInt(recipe.protein || '0') >= 25 && (
                        <div className="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 shadow-sm transition-all hover:bg-emerald-100">
                          <span className="text-[10px] font-black uppercase tracking-widest">💪 High Protein</span>
                        </div>
                      )}
                      <div className="px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full border border-purple-100 shadow-sm transition-all hover:bg-purple-100">
                        <span className="text-[10px] font-black uppercase tracking-widest">✨ #1 Trendy</span>
                      </div>
                      <div className="px-4 py-1.5 bg-pink-50 text-pink-700 rounded-full border border-pink-100 shadow-sm transition-all hover:bg-pink-100">
                        <span className="text-[10px] font-black uppercase tracking-widest">📌 PinterestFav</span>
                      </div>
                    </div>
                    
                    <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Cook with premium interactive mode
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Content Tabs */}
              <div className="w-full md:w-[60%] flex flex-col bg-slate-50/50 relative">
                {/* Tabs Header Wrapper */}
                <div className="relative w-full shrink-0 no-print bg-white border-b border-slate-100 flex items-center">
                  {/* Left Tab Navigation Control */}
                  {canScrollTabsLeft && (
                    <button 
                      onClick={() => {
                        tabsContainerRef.current?.scrollBy({ left: -120, behavior: 'smooth' });
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-all active:scale-95 cursor-pointer md:hidden"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-500" />
                    </button>
                  )}

                  {/* Tabs Header - Fully responsive and touch-scrollable on mobile */}
                  <div 
                    ref={tabsContainerRef}
                    onScroll={checkTabsScroll}
                    className="flex w-full flex-row items-center gap-4 sm:gap-6 md:gap-[2.5rem] justify-start bg-transparent px-10 pt-4 pb-3 relative z-10 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                  >
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-3 px-2 text-xs sm:text-sm font-black uppercase tracking-widest transition-all relative whitespace-nowrap ${
                          activeTab === tab.id ? 'text-brand-green' : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        {tab.label}
                        {activeTab === tab.id && (
                          <motion.div
                            layoutId="activeTabPlan"
                            className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-green rounded-full"
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Right Tab Navigation Control */}
                  {canScrollTabsRight && (
                    <button 
                      onClick={() => {
                        tabsContainerRef.current?.scrollBy({ left: 120, behavior: 'smooth' });
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-all active:scale-95 cursor-pointer md:hidden"
                      aria-label="Scroll right"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-500" />
                    </button>
                  )}
                </div>

                {/* Tab Content */}
                <div className="p-4 sm:p-6 flex-1 overflow-y-auto pb-32 sm:pb-6">
                  <div className={activeTab === 'ingredients' ? 'block' : 'hidden print:block'}>
                    <div className="bg-[#FAF6F0] border-2 border-[#D4AF37]/30 rounded-3xl p-6 space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 print:animate-none">
                      <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
                        <div>
                          <h3 className="text-2xl font-bold font-serif text-[#2C1A04] tracking-tight">Ingredients</h3>
                          <p className="text-sm font-serif text-[#2C1A04]/70 mt-1">Check off items as you gather them</p>
                        </div>
                        <button 
                          onClick={handleAddAllToGrocery}
                          className={`group flex items-center gap-2 px-4 py-2 ${addedToGrocery ? 'bg-[#D4AF37] text-white' : 'bg-[#FAF6F0] text-[#2C1A04]'} border border-[#D4AF37]/40 rounded-xl font-serif text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all shadow-sm cursor-pointer no-print`}
                          disabled={addedToGrocery}
                        >
                          {addedToGrocery ? (
                            <>
                              <CheckCircle2 size={14} />
                              Added!
                            </>
                          ) : (
                            <>
                              <CheckCircle2 size={14} className="group-hover:scale-110 transition-transform" />
                              Add all to grocery
                            </>
                          )}
                        </button>
                      </div>
                      <div className="flex flex-col mt-4">
                        {recipe.ingredients ? (
                          recipe.ingredients.map((ing, idx) => (
                            <motion.div 
                              key={idx} 
                              onClick={() => setCheckedIngredients(p => ({ ...p, [idx]: !p[idx] }))}
                              className={`flex items-center gap-3 py-2.5 px-6 rounded-full border border-[#D4AF37]/40 mb-3 transition-all cursor-pointer group relative overflow-hidden min-w-0 ${
                                checkedIngredients[idx] 
                                  ? "bg-transparent opacity-50" 
                                  : "bg-[#FAF6F0] hover:bg-slate-50/50"
                              }`}
                            >
                              {checkedIngredients[idx] ? (
                                <div className="w-7 h-7 rounded-full bg-green-100 border border-green-400 text-green-700 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                                  ✓
                                </div>
                              ) : (
                                <div className="w-7 h-7 rounded-full bg-transparent border border-[#D4AF37]/40 text-[#2C1A04] flex items-center justify-center text-xs font-serif shrink-0 transition-colors">
                                  {idx + 1}
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <span className={`text-sm sm:text-base font-serif font-medium transition-all break-words leading-tight ${
                                  checkedIngredients[idx] ? "line-through text-gray-400/70 transition-all" : "text-[#2C1A04]"
                                }`}>
                                  {ing.name}
                                </span>
                              </div>
                              <div className="ml-auto flex items-center gap-1">
                                {getIngredientIcon(ing.name)}
                              </div>
                            </motion.div>
                          ))
                        ) : recipe.extendedIngredients?.length > 0 ? (
                          recipe.extendedIngredients.map((ing, idx) => (
                            <motion.div 
                              key={idx} 
                              onClick={() => setCheckedIngredients(p => ({ ...p, [idx]: !p[idx] }))}
                              className={`flex items-center gap-3 py-2.5 px-6 rounded-full border border-[#D4AF37]/40 mb-3 transition-all cursor-pointer group relative overflow-hidden min-w-0 ${
                                checkedIngredients[idx] 
                                  ? "bg-transparent opacity-50" 
                                  : "bg-[#FAF6F0] hover:bg-slate-50/50"
                              }`}
                            >
                              {checkedIngredients[idx] ? (
                                <div className="w-7 h-7 rounded-full bg-green-100 border border-green-400 text-green-700 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                                  ✓
                                </div>
                              ) : (
                                <div className="w-7 h-7 rounded-full bg-transparent border border-[#D4AF37]/40 text-[#2C1A04] flex items-center justify-center text-xs font-serif shrink-0 transition-colors">
                                  {idx + 1}
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <span className={`text-sm sm:text-base font-serif font-medium transition-all break-words leading-tight ${
                                  checkedIngredients[idx] ? "line-through text-gray-400/70 transition-all" : "text-[#2C1A04]"
                                }`}>
                                  {ing.name.charAt(0).toUpperCase() + ing.name.slice(1)}
                                </span>
                                <span className={`block text-[10px] sm:text-[11px] font-serif font-black uppercase tracking-widest mt-0.5 ${
                                  checkedIngredients[idx] ? "text-gray-400/50" : "text-[#2C1A04]/60"
                                }`}>
                                  {ing.amount} {ing.unit}
                                </span>
                              </div>
                              <div className="ml-auto flex items-center gap-1">
                                {getIngredientIcon(ing.name)}
                              </div>
                              {/* Selection overlay animation */}
                              {checkedIngredients[idx] && (
                                <motion.div 
                                  layoutId={`ing-check-${idx}`}
                                  className="absolute inset-0 bg-slate-100/10 pointer-events-none"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                />
                              )}
                            </motion.div>
                          ))
                        ) : (
                          <div className="col-span-full py-12 text-center bg-white rounded-[32px] border border-dashed border-slate-200">
                             <p className="text-slate-400 font-medium italic">No ingredients found for this recipe.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={activeTab === 'instructions' ? 'block' : 'hidden print:block print:mt-10'}>
                    <div className="bg-[#FAF6F0] border-2 border-[#D4AF37]/30 rounded-3xl p-6 space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 print:animate-none">
                      <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
                        <div>
                          <h3 className="text-2xl font-bold font-serif text-[#2C1A04] tracking-tight">Cook steps</h3>
                          <p className="text-sm font-serif text-[#2C1A04]/70 mt-1">Follow along for a perfect meal</p>
                        </div>
                        <button 
                          onClick={handleSpeakInstructions}
                          className="group flex items-center gap-2 px-4 py-2 bg-[#FAF6F0] text-[#2C1A04] border border-[#D4AF37]/40 rounded-xl font-serif text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all shadow-sm cursor-pointer no-print"
                        >
                          <Volume2 size={14} /> Listen
                        </button>
                      </div>
                      <div className="space-y-4">
                        {recipe.instructions ? (
                          recipe.instructions.map((step, idx) => (
                            <div key={idx} className="bg-[#FFFDF9] rounded-2xl border border-[#D4AF37]/40 p-4 mb-4 flex items-start gap-3 sm:gap-4 group">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#D4AF37]/40 text-[#2C1A04] bg-transparent flex items-center justify-center text-sm font-serif font-bold shadow-sm transition-transform">
                                {idx + 1}
                              </div>
                              <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
                                <p className="text-sm sm:text-base text-[#2C1A04] leading-relaxed font-serif break-words">
                                  {step}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : recipe.analyzedInstructions?.[0]?.steps && recipe.analyzedInstructions[0].steps.length > 0 ? (
                          recipe.analyzedInstructions[0].steps.map((step, idx) => (
                          <div key={`${step.number}-${idx}`} className="bg-[#FFFDF9] rounded-2xl border border-[#D4AF37]/40 p-4 mb-4 flex items-start gap-3 sm:gap-4 group">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#D4AF37]/40 text-[#2C1A04] bg-transparent flex items-center justify-center text-sm font-serif font-bold shadow-sm transition-transform">
                              {step.number}
                            </div>
                            <div className="space-y-1 sm:space-y-2 flex-1 min-w-0 pt-0.5">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 flex-wrap">
                                <p className="text-sm sm:text-base text-[#2C1A04] leading-relaxed font-serif break-words">
                                  {step.step}
                                </p>
                                {step.length && (
                                  <div className="flex items-center gap-1 bg-[#FAF6F0] border border-[#D4AF37]/20 px-2 py-0.5 rounded-full text-xs font-serif text-[#2C1A04]/80 shrink-0 h-fit w-fit">
                                    <Clock size={12} className="text-[#D4AF37]" /> {step.length.number} {step.length.unit}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          ))
                        ) : (
                          <p className="text-gray-500 italic">No instructions available for this recipe.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={activeTab === 'nutrition' ? 'block' : 'hidden print:block print:mt-10'}>
                    {!recipe.nutrition ? (
                      <div className="flex flex-col items-center justify-center py-20">
                         <Loader2 className="w-10 h-10 text-brand-green animate-spin mb-4" />
                         <p className="text-sm font-bold text-slate-400">Analyzing Nutritional Composition...</p>
                       </div>
                    ) : (
                     <div className="space-y-8 md:space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                      {/* Dashboard Header & Health Score */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
                        <div className="space-y-1 md:space-y-2">
                          <h3 className="text-2xl md:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">Nutrition Analysis</h3>
                          <p className="text-xs sm:text-sm md:text-base font-medium text-slate-400">Scientifically estimated macros and healthy score per serving</p>
                        </div>
                        
                        <motion.div 
                          animate={{ 
                            boxShadow: ["0px 0px 0px rgba(16, 185, 129, 0)", "0px 0px 30px rgba(16, 185, 129, 0.4)", "0px 0px 0px rgba(16, 185, 129, 0)"],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="flex items-center gap-3 sm:gap-4 md:gap-5 bg-white p-3 pr-4 sm:pr-6 md:p-4 md:pr-10 rounded-2xl md:rounded-[40px] border border-brand-green/20 shadow-xl shadow-brand-green/5 relative group cursor-help w-full md:w-auto overflow-hidden sm:overflow-visible"
                        >
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0 bg-gradient-to-br from-brand-green to-emerald-600 rounded-xl sm:rounded-[20px] md:rounded-[28px] flex items-center justify-center text-white shadow-lg shadow-brand-green/30 relative overflow-hidden">
                            <motion.div 
                              animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              <Award className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[9px] sm:text-[10px] md:text-[12px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-0.5 md:mb-1 truncate">Wellness Rating</span>
                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                              <span className="text-2xl sm:text-3xl md:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-none shrink-0 border-b-2 border-brand-green pb-0.5">A+</span>
                              <span className="h-4 w-px sm:h-6 md:h-8 md:w-full max-w-sm bg-slate-100 shrink-0" />
                              <div className="flex flex-col min-w-0">
                                <span className="text-base sm:text-lg md:text-xl font-black text-brand-green leading-none">9.2</span>
                                <span className="text-[7px] sm:text-[8px] md:text-[10px] font-bold text-slate-300 uppercase tracking-widest truncate mt-0.5">Score / 10</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Primary Macro Cards Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                         {(() => {
                            const nutrients = recipe.nutrition?.nutrients || [];
                            const getCard = (name: string, icon: React.ReactNode, color: string, bgLight: string) => {
                              const nut = nutrients.find(n => n.name === name) || nutrients.find(n => n.name.toLowerCase().includes(name.toLowerCase()));
                              return (
                                <motion.div 
                                  key={name}
                                  whileHover={{ scale: 1.05 }}
                                  className={`${bgLight} flex flex-col justify-between p-4 sm:p-6 rounded-[20px] sm:rounded-3xl border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 min-w-0 h-28 sm:h-auto aspect-auto sm:aspect-square md:aspect-[4/5] gap-3`}
                                >
                                  <div className="flex items-start justify-between">
                                    <div className={`p-2 sm:p-3 rounded-lg sm:rounded-2xl bg-white shadow-sm flex items-center justify-center ${color}`}>
                                      {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" })}
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-[9px] sm:text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-0.5 sm:mb-1 truncate">{name}</span>
                                    <span className="text-lg sm:text-2xl md:text-3xl font-black text-slate-900 leading-none flex items-baseline gap-0.5 sm:gap-1 truncate">
                                      {Math.round(nut?.amount || 0)}
                                      <span className="text-[10px] sm:text-xs md:text-sm font-bold opacity-50">{nut?.unit || 'g'}</span>
                                    </span>
                                  </div>
                                </motion.div>
                              );
                            };

                            return (
                              <>
                                {getCard('Calories', <Flame />, 'text-orange-500', 'bg-orange-50')}
                                {getCard('Protein', <Dumbbell />, 'text-emerald-500', 'bg-emerald-50')}
                                {getCard('Carbohydrates', <Wheat />, 'text-amber-500', 'bg-amber-50')}
                                {getCard('Fat', <Droplets />, 'text-blue-500', 'bg-blue-50')}
                              </>
                            );
                         })()}
                      </div>

                      {/* Detailed Breakdown Section */}
                      <div className="bg-white rounded-2xl md:rounded-[56px] p-4 sm:p-6 md:p-12 border border-slate-100 shadow-sm space-y-6 md:space-y-12">
                        <button 
                          onClick={() => setShowDetailedNutrition(!showDetailedNutrition)}
                          className="w-full flex items-center justify-between group text-left"
                        >
                          <h4 className="text-base sm:text-lg md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2 sm:gap-4">
                             <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shadow-inner shrink-0">
                               <Zap size={20} className="md:w-7 md:h-7" />
                             </div>
                             Detailed Composition
                          </h4>
                          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                            <span className="hidden sm:block text-[10px] md:text-xs font-black text-slate-400 bg-slate-50 px-3 md:px-5 py-1.5 md:py-2 rounded-full uppercase tracking-[0.2em]">Micro-nutrients</span>
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 transition-transform duration-300 ${showDetailedNutrition ? 'rotate-180' : ''}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {(showDetailedNutrition || window.innerWidth >= 768) && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden md:!h-auto md:!opacity-100"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-6 md:gap-y-12 pt-4 md:pt-0">
                                 {recipe.nutrition?.nutrients.slice(4).map((nut, i) => (
                                   <div key={`${nut.name}-${i}`} className="space-y-2 md:space-y-4 group">
                                     <div className="flex justify-between items-end">
                                       <div className="flex flex-col min-w-0">
                                         <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-0.5 truncate">{nut.name}</span>
                                         <span className="text-[10px] sm:text-xs font-bold text-slate-500 opacity-60">Estimated content</span>
                                       </div>
                                       <span className="text-base sm:text-lg md:text-2xl font-black text-slate-900 tracking-tight shrink-0">{Math.round(nut.amount)}<span className="text-[9px] sm:text-[10px] md:text-xs ml-1 opacity-40 font-bold">{nut.unit}</span></span>
                                     </div>
                                     <div className="h-1.5 sm:h-2 md:h-3 bg-slate-100 rounded-full overflow-hidden relative">
                                       <motion.div 
                                         initial={{ width: 0 }}
                                         animate={{ width: `${Math.min(100, nut.percentOfDailyNeeds || 0)}%` }}
                                         transition={{ delay: 0.1 + (i * 0.05), duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
                                         className="h-full bg-brand-green rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)] relative"
                                       >
                                         <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer" />
                                       </motion.div>
                                     </div>
                                     <div className="flex justify-between">
                                       <span className="text-[8px] sm:text-[9px] md:text-[11px] font-black text-slate-300 uppercase tracking-[0.15em]">{nut.percentOfDailyNeeds}% OF YOUR DAILY GOAL</span>
                                     </div>
                                   </div>
                                 ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Pro Tip Callout */}
                      <div className="bg-slate-900 p-5 sm:p-8 md:p-12 rounded-2xl md:rounded-[56px] text-white flex flex-col lg:flex-row items-center gap-6 md:gap-12 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:scale-125 group-hover:rotate-45 transition-transform duration-1000">
                          <CheckCircle2 size={240} />
                        </div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-green/20 backdrop-blur-2xl rounded-xl sm:rounded-[32px] flex items-center justify-center shrink-0 border border-brand-green/30 relative z-10 transform group-hover:-rotate-3 transition-transform duration-500">
                          <Info className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-brand-green" />
                        </div>
                        <div className="space-y-2 sm:space-y-4 relative z-10 text-center lg:text-left min-w-0">
                          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-1">
                             <div className="flex gap-1">
                                {[1,2,3].map(i => <span key={i} className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-brand-green animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                             </div>
                             <p className="text-[9px] sm:text-[12px] font-black uppercase tracking-[0.4em] text-brand-green">Professional Intake Opinion</p>
                          </div>
                          <p className="text-base sm:text-xl lg:text-2xl font-medium text-slate-100 leading-relaxed max-w-2xl break-words">
                            This {recipe.category} selection is {parseInt(recipe.protein || '0') > 25 ? 'an excellent source of bioactive protein' : 'strategically balanced for sustained metabolic efficiency'}. 
                            <span className="text-slate-400 block mt-2 sm:mt-4 text-xs sm:text-base font-normal">Expert insight: Consuming this meal within 45 minutes of preparation preserves heat-sensitive micronutrients.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  </div>

                  <div className={activeTab === 'comments' ? 'block no-print' : 'hidden'}>
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                      <h3 className="text-xl font-bold text-gray-900 p-1">Community Feedback</h3>
                      <div className="space-y-4 w-full">
                        {(comments[recipe.id] || []).length === 0 ? (
                          <div className="text-center py-8 text-slate-400 text-sm font-medium">
                            No comments yet. Be the first to share your experience!
                          </div>
                        ) : (
                          (comments[recipe.id] || []).map((comm, idx) => (
                            <div key={`${comm.id}-${idx}`} className="p-4 md:p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3 relative group w-full">
                              <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                  <img src={comm.avatar} alt={comm.user} className="w-8 h-8 rounded-full bg-slate-100 shrink-0" />
                                  <div className="min-w-0">
                                    <span className="text-sm font-bold text-slate-900 block truncate">{comm.user}</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{comm.date}</span>
                                  </div>
                                </div>
                                <button 
                                  onClick={() => deleteComment(recipe.id, comm.id)}
                                  className="text-slate-300 hover:text-red-500 transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100 p-1 shrink-0"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-sm text-slate-600 pl-0 sm:pl-11 break-words">{comm.text}</p>
                            </div>
                          ))
                        )}
                      </div>
                      <div className="pt-6 mt-8 border-t border-slate-100 p-4 md:p-6 bg-slate-50 rounded-3xl space-y-4 w-full">
                        <textarea
                          placeholder="Share your experience..."
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          className="w-full p-4 bg-white rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-sm resize-none"
                          rows={3}
                        />
                        <button 
                          onClick={() => {
                            if (!commentText.trim()) return;
                            addComment(recipe.id, commentText, "Guest User"); // simple guest for now
                            setCommentText('');
                          }}
                          disabled={!commentText.trim()}
                          className="w-full py-3 bg-brand-ink text-white rounded-xl text-sm font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
                        >
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Meal Planner Modal */}
      <AnimatePresence>
        {isMealPlannerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMealPlannerOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8 space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight">Schedule this Meal</h3>
                    <p className="text-xs font-semibold text-slate-400">Add to your weekly planning slate</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMealPlannerOpen(false)}
                  className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="space-y-4">
                {/* Date Picker */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Choose Day / Date</label>
                  <input
                    type="date"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green text-sm font-semibold text-slate-800"
                  />
                </div>

                {/* Meal Type Select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Meal Session</label>
                  <div className="relative">
                    <select
                      value={scheduleMealType}
                      onChange={(e) => setScheduleMealType(e.target.value)}
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green text-sm font-semibold text-slate-800 appearance-none cursor-pointer"
                    >
                      <option value="breakfast">Breakfast 🍳</option>
                      <option value="lunch">Lunch 🥗</option>
                      <option value="dinner">Dinner 🌙</option>
                      <option value="snack">Snack 🍎</option>
                      <option value="workout">Pre/Post Workout 💪</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <button
                onClick={() => {
                  if (!scheduleDate) return;
                  const dayAbbrev = getDayAbbreviation(scheduleDate);
                  
                  // Save to App State (automatically synchronizes with our Local Storage and Planner page!)
                  addToPlan(dayAbbrev, scheduleMealType, recipe);
                  
                  // Formatted name for notification feedback
                  const formattedDay = new Date(scheduleDate).toLocaleDateString('en-US', { weekday: 'long' });
                  setPlanSuccess(`Successfully added to your Meal Plan for ${formattedDay}!`);
                  
                  setIsMealPlannerOpen(false);
                  setTimeout(() => setPlanSuccess(''), 5000);
                }}
                className="w-full py-4 bg-brand-green text-white rounded-2xl text-sm font-bold hover:bg-green-600 transition-all shadow-lg shadow-brand-green/20 cursor-pointer text-center"
              >
                Confirm Schedule
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
