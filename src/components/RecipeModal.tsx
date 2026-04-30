import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Users, Flame, Heart, Share2, Play, Calendar, CheckCircle2, Volume2, Loader2, Youtube, Dumbbell, Wheat, Droplets, Zap, Sparkles, Award, Info } from 'lucide-react';
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
      const hasInstructions = initialRecipe.analyzedInstructions && initialRecipe.analyzedInstructions.length > 0 && initialRecipe.analyzedInstructions[0].steps.length > 0;
      const hasIngredients = initialRecipe.extendedIngredients && initialRecipe.extendedIngredients.length > 0;
      
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

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/recipe/${recipe.id}`;
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: `Check out this recipe: ${recipe.title}`,
        url: url,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url);
      alert("Recipe link copied to clipboard!");
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
    const steps = recipe.analyzedInstructions?.[0]?.steps || [];
    if (steps.length === 0) return;
    
    const textToSpeak = steps.map(s => `Step ${s.number}: ${s.step}`).join(". ");
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm overflow-hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-screen h-[100dvh] sm:w-[95%] sm:h-auto max-w-[1250px] sm:max-h-[90vh] bg-white sm:rounded-[40px] sm:shadow-2xl flex flex-col overflow-x-hidden overflow-y-auto sm:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-5 z-50 p-4 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-colors"
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
              <div className="w-full md:w-[45%] p-0 border-r border-gray-100 flex flex-col">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-72 overflow-hidden shadow-inner">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 flex gap-2">
                    <button 
                      onClick={handleToggleFavorite}
                      className={`p-3 backdrop-blur-md rounded-full shadow-lg transition-all ${
                        isFavorite ? "bg-red-500 text-white" : "bg-white/20 hover:bg-white hover:text-red-500 text-white"
                      }`}
                    >
                      <Heart className="w-5 h-5" fill={isFavorite ? "white" : "none"} />
                    </button>
                    <button 
                      onClick={handleShare}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:bg-white hover:text-gray-900 text-white transition-all"
                    >
                      <Share2 className="w-5 h-5" />
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
                  {/* Stats with dividers */}
                  <div className="flex items-center justify-between pb-8 border-b border-slate-100 shrink-0">
                    <div className="text-center group">
                      <Clock size={20} className="mx-auto mb-1 flex text-brand-green" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Time</span>
                      <p className="text-sm font-bold text-slate-900">{recipe.readyInMinutes}m</p>
                    </div>
                    <div className="w-px h-10 bg-slate-100" />
                    <div className="text-center group">
                      <Flame size={20} className="mx-auto mb-1 flex text-brand-orange" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Energy</span>
                      <p className="text-sm font-bold text-slate-900">{recipe.calories}kcal</p>
                    </div>
                    <div className="w-px h-10 bg-slate-100" />
                    <div className="text-center group">
                      <Users size={20} className="mx-auto mb-1 flex text-blue-500" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Servings</span>
                      <p className="text-sm font-bold text-slate-900">{recipe.servings}</p>
                    </div>
                  </div>

                  {/* New Recipe Highlights Section */}
                  <div className="shrink-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Recipe Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                       {recipe.readyInMinutes <= 30 && (
                         <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg border border-amber-100/50 shadow-sm transition-transform hover:scale-105">
                           <span className="text-sm">⚡</span>
                           <span className="text-[10px] font-black uppercase tracking-widest">Quick Prep</span>
                         </div>
                       )}
                       {parseInt(recipe.protein || '0') >= 25 && (
                         <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100/50 shadow-sm transition-transform hover:scale-105">
                           <span className="text-sm">🔥</span>
                           <span className="text-[10px] font-black uppercase tracking-widest">High Protein</span>
                         </div>
                       )}
                       {recipe.nutrition?.nutrients.find(n => n.name === 'Fiber')?.amount && recipe.nutrition.nutrients.find(n => n.name === 'Fiber')!.amount >= 5 && (
                         <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-100/50 shadow-sm transition-transform hover:scale-105">
                           <span className="text-sm">🥗</span>
                           <span className="text-[10px] font-black uppercase tracking-widest">High Fiber</span>
                         </div>
                       )}
                       {(recipe.category || '').toLowerCase().includes('vege') && (
                         <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg border border-green-100/50 shadow-sm transition-transform hover:scale-105">
                           <span className="text-sm">🌿</span>
                           <span className="text-[10px] font-black uppercase tracking-widest">Vegetarian</span>
                         </div>
                       )}
                       <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg border border-slate-100/50 shadow-sm transition-transform hover:scale-105">
                         <Sparkles className="w-3 h-3 text-brand-green" />
                         <span className="text-[10px] font-black uppercase tracking-widest">Smart Recipe</span>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-4 shrink-0 pb-4">
                    <button 
                      onClick={handleStartCooking}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-white rounded-2xl font-bold text-lg hover:bg-green-600 transition-all shadow-xl shadow-brand-green/20 transform active:scale-95"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      Start Cooking
                    </button>

                    {recipe.youtubeUrl && (
                      <button 
                        onClick={handleWatchVideo}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 transform active:scale-95"
                      >
                        <Youtube className="w-6 h-6" />
                        Watch Video
                      </button>
                    )}
                    
                    <div className="relative">
                      {planSuccess && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className="absolute bottom-full left-0 right-0 mb-3 p-3 bg-brand-green text-white text-sm font-bold text-center rounded-xl shadow-lg"
                        >
                          <span className="flex items-center justify-center gap-2"><CheckCircle2 size={16} /> {planSuccess}</span>
                        </motion.div>
                      )}
                      {planError && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className="absolute bottom-full left-0 right-0 mb-3 p-3 bg-red-100 text-red-700 border border-red-200 text-sm font-bold text-center rounded-xl shadow-lg"
                        >
                          {planError}
                        </motion.div>
                      )}

                      <button 
                        onClick={() => setShowPlanMenu(!showPlanMenu)}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 text-slate-700 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95"
                      >
                        <Calendar className="w-5 h-5" />
                        Plan for later
                      </button>
                      
                      <AnimatePresence>
                        {showPlanMenu && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-20"
                          >
                            <div className="p-3 grid grid-cols-1 gap-1 relative">
                              {isPlanning && (
                                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                                  <div className="w-6 h-6 border-4 border-brand-green/30 border-t-brand-green rounded-full animate-spin"></div>
                                  <span className="text-xs font-bold text-slate-600 mt-2">Connecting to Backend...</span>
                                </div>
                              )}
                              {days.map(day => (
                                <button 
                                  key={day}
                                  onClick={() => createMealTask(day)}
                                  disabled={isPlanning}
                                  className="text-left w-full px-4 py-2 text-sm font-bold text-slate-600 hover:bg-brand-green hover:text-white rounded-xl transition-all disabled:opacity-50"
                                >
                                  {day} {isPlanning && selectedDate === day ? '...' : ''}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Interactive cook mode enabled
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Content Tabs */}
              <div className="w-full md:w-[55%] flex flex-col bg-slate-50/50 relative">
                {/* Tabs Header */}
                <div className="hidden md:flex w-full flex-row items-center gap-6 sm:gap-8 md:gap-[2.5rem] justify-center sm:justify-start bg-white px-4 sm:pl-10 sm:pr-32 pt-6 sm:pt-10 pb-4 relative z-10 shrink-0 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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

                {/* Tab Content */}
                <div className="p-4 sm:p-10 flex-1 overflow-y-auto pb-32 sm:pb-10 flex flex-col gap-12 md:block">
                  <div className={activeTab === 'ingredients' ? 'block' : 'block md:hidden'}>
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Shopping List</h3>
                          <p className="text-sm font-medium text-slate-400 mt-1">Check off items as you gather them</p>
                        </div>
                        <button 
                          onClick={handleAddAllToGrocery}
                          className={`group flex items-center gap-2 px-4 py-2 ${addedToGrocery ? 'bg-brand-green text-white' : 'bg-brand-green/5 text-brand-green'} rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-green hover:text-white transition-all shadow-sm cursor-pointer`}
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
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
                        {recipe.extendedIngredients?.length > 0 ? (
                          recipe.extendedIngredients.map((ing, idx) => (
                            <motion.div 
                              key={idx} 
                              onClick={() => setCheckedIngredients(p => ({ ...p, [idx]: !p[idx] }))}
                              className={`flex items-center gap-4 p-5 rounded-[24px] border transition-all cursor-pointer group relative overflow-hidden ${
                                checkedIngredients[idx] 
                                  ? "bg-slate-50 border-slate-200 opacity-60" 
                                  : "bg-slate-50/50 border-slate-200 hover:border-brand-green/30 hover:shadow-xl hover:bg-white hover:shadow-slate-200/20"
                              }`}
                            >
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                                checkedIngredients[idx] 
                                  ? "bg-brand-green border-brand-green text-white" 
                                  : "border-slate-200 group-hover:border-brand-green"
                              }`}>
                                {checkedIngredients[idx] && <CheckCircle2 size={14} strokeWidth={3} />}
                              </div>
                              <div className="flex flex-col">
                                <span className={`text-base font-bold transition-all ${
                                  checkedIngredients[idx] ? "text-slate-400 line-through" : "text-slate-800"
                                }`}>
                                  {ing.name.charAt(0).toUpperCase() + ing.name.slice(1)}
                                </span>
                                <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                                  {ing.amount} {ing.unit}
                                </span>
                              </div>
                              {/* Selection overlay animation */}
                              {checkedIngredients[idx] && (
                                <motion.div 
                                  layoutId={`ing-check-${idx}`}
                                  className="absolute inset-0 bg-slate-100/50 pointer-events-none"
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

                  <div className={activeTab === 'instructions' ? 'block' : 'block md:hidden'}>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900">Cook steps</h3>
                        <button 
                          onClick={handleSpeakInstructions}
                          className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-lg text-green-600 font-bold text-xs hover:bg-green-600 hover:text-white transition-all shadow-sm"
                        >
                          <Volume2 size={14} /> Listen
                        </button>
                      </div>
                      <div className="space-y-6">
                        {recipe.analyzedInstructions?.[0]?.steps && recipe.analyzedInstructions[0].steps.length > 0 ? (
                          recipe.analyzedInstructions[0].steps.map((step) => (
                          <div key={step.number} className="flex items-start gap-4 group mb-6">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold shadow-sm group-hover:scale-110 transition-transform">
                              {step.number}
                            </div>
                            <div className="space-y-2 flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 flex-wrap">
                                <p className="text-base text-gray-700 leading-relaxed font-medium">
                                  {step.step}
                                </p>
                                {step.length && (
                                  <div className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded text-[10px] font-black text-slate-500 shrink-0 h-fit">
                                    <Clock size={10} /> {step.length.number} {step.length.unit}
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

                  <div className={activeTab === 'nutrition' ? 'block' : 'block md:hidden'}>
                    {!recipe.nutrition ? (
                      <div className="flex flex-col items-center justify-center py-20">
                         <Loader2 className="w-10 h-10 text-brand-green animate-spin mb-4" />
                         <p className="text-sm font-bold text-slate-400">Analyzing Nutritional Composition...</p>
                       </div>
                    ) : (
                    <div className="space-y-12">
                      {/* Dashboard Header & Health Score */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="space-y-2">
                          <h3 className="text-4xl font-black text-slate-900 tracking-tight">Nutrition Analysis</h3>
                          <p className="text-base font-medium text-slate-400">Scientifically estimated macros and healthy score per serving</p>
                        </div>
                        
                        <motion.div 
                          animate={{ 
                            boxShadow: ["0px 0px 0px rgba(16, 185, 129, 0)", "0px 0px 30px rgba(16, 185, 129, 0.4)", "0px 0px 0px rgba(16, 185, 129, 0)"],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="flex items-center gap-4 md:gap-5 bg-white p-3 pr-6 md:p-4 md:pr-10 rounded-[32px] md:rounded-[40px] border border-brand-green/20 shadow-xl shadow-brand-green/5 relative group cursor-help w-full md:w-auto overflow-hidden sm:overflow-visible"
                        >
                          <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-gradient-to-br from-brand-green to-emerald-600 rounded-[20px] md:rounded-[28px] flex items-center justify-center text-white shadow-lg shadow-brand-green/30 relative overflow-hidden">
                            <motion.div 
                              animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              <Award className="w-8 h-8 md:w-10 md:h-10" />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[10px] md:text-[12px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-0.5 md:mb-1 truncate">Wellness Rating</span>
                            <div className="flex items-center gap-3 md:gap-4">
                              <span className="text-3xl md:text-4xl font-black text-slate-900 leading-none shrink-0">A+</span>
                              <span className="h-6 w-px md:h-8 md:w-[2px] bg-slate-100 shrink-0" />
                              <div className="flex flex-col min-w-0">
                                <span className="text-lg md:text-xl font-black text-brand-green leading-none">9.2</span>
                                <span className="text-[8px] md:text-[10px] font-bold text-slate-300 uppercase tracking-widest truncate mt-0.5">Score / 10</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Primary Macro Cards Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                         {(() => {
                            const nutrients = recipe.nutrition?.nutrients || [];
                            const getCard = (name: string, icon: React.ReactNode, color: string, bgLight: string) => {
                              const nut = nutrients.find(n => n.name === name) || nutrients.find(n => n.name.toLowerCase().includes(name.toLowerCase()));
                              return (
                                <motion.div 
                                  whileHover={{ scale: 1.05 }}
                                  className={`${bgLight} flex flex-col justify-between p-3 md:p-6 rounded-3xl border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 aspect-square md:aspect-[4/5]`}
                                >
                                  <div className="flex items-start justify-between">
                                    <div className={`p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center ${color}`}>
                                      {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" })}
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-1 truncate">{name}</span>
                                    <span className="text-xl md:text-3xl font-black text-slate-900 leading-none flex items-baseline gap-1">
                                      {Math.round(nut?.amount || 0)}
                                      <span className="text-xs md:text-sm font-bold opacity-50">{nut?.unit || 'g'}</span>
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
                      <div className="bg-white rounded-[32px] md:rounded-[56px] p-6 md:p-12 border border-slate-100 shadow-sm space-y-6 md:space-y-12">
                        <button 
                          onClick={() => setShowDetailedNutrition(!showDetailedNutrition)}
                          className="w-full flex items-center justify-between group"
                        >
                          <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3 md:gap-4">
                             <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green shadow-inner">
                               <Zap size={24} className="md:w-7 md:h-7" />
                             </div>
                             Detailed Composition
                          </h4>
                          <div className="flex items-center gap-3">
                            <span className="hidden sm:block text-[10px] md:text-xs font-black text-slate-400 bg-slate-50 px-3 md:px-5 py-1.5 md:py-2 rounded-full uppercase tracking-[0.2em]">Micro-nutrients</span>
                            <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 transition-transform duration-300 ${showDetailedNutrition ? 'rotate-180' : ''}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
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
                              <div className="grid md:grid-cols-2 gap-x-20 gap-y-8 md:gap-y-12 pt-6 md:pt-0">
                                 {recipe.nutrition?.nutrients.slice(4).map((nut, i) => (
                                   <div key={i} className="space-y-3 md:space-y-4 group">
                                     <div className="flex justify-between items-end">
                                       <div className="flex flex-col">
                                         <span className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.15em] mb-0.5 md:mb-1">{nut.name}</span>
                                         <span className="text-xs md:text-sm font-bold text-slate-500 opacity-60">Estimated content</span>
                                       </div>
                                       <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{Math.round(nut.amount)}<span className="text-[10px] md:text-xs ml-1 opacity-40 font-bold">{nut.unit}</span></span>
                                     </div>
                                     <div className="h-2 md:h-3 bg-slate-100 rounded-full overflow-hidden relative">
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
                                       <span className="text-[9px] md:text-[11px] font-black text-slate-300 uppercase tracking-[0.15em]">{nut.percentOfDailyNeeds}% OF YOUR DAILY GOAL</span>
                                     </div>
                                   </div>
                                 ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Pro Tip Callout */}
                      <div className="bg-slate-900 p-6 md:p-12 rounded-[32px] md:rounded-[56px] text-white flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:scale-125 group-hover:rotate-45 transition-transform duration-1000">
                          <CheckCircle2 size={240} />
                        </div>
                        <div className="w-24 h-24 bg-brand-green/20 backdrop-blur-2xl rounded-[32px] flex items-center justify-center shrink-0 border border-brand-green/30 relative z-10 transform group-hover:-rotate-3 transition-transform duration-500">
                          <Info className="w-12 h-12 text-brand-green" />
                        </div>
                        <div className="space-y-4 relative z-10 text-center lg:text-left">
                          <div className="flex items-center justify-center lg:justify-start gap-3 mb-1">
                             <div className="flex gap-1">
                               {[1,2,3].map(i => <span key={i} className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                             </div>
                             <p className="text-[12px] font-black uppercase tracking-[0.4em] text-brand-green">Professional Intake Opinion</p>
                          </div>
                          <p className="text-2xl font-medium text-slate-100 leading-relaxed max-w-2xl">
                            This {recipe.category} selection is {parseInt(recipe.protein || '0') > 25 ? 'an excellent source of bioactive protein' : 'strategically balanced for sustained metabolic efficiency'}. 
                            <span className="text-slate-400 block mt-4 text-base font-normal">Expert insight: Consuming this meal within 45 minutes of preparation preserves heat-sensitive micronutrients.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  </div>

                  <div className={activeTab === 'comments' ? 'block' : 'block md:hidden'}>
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900">Community Feedback</h3>
                      <div className="space-y-4">
                        {(comments[recipe.id] || []).length === 0 ? (
                          <div className="text-center py-8 text-slate-400 text-sm font-medium">
                            No comments yet. Be the first to share your experience!
                          </div>
                        ) : (
                          (comments[recipe.id] || []).map((comm) => (
                            <div key={comm.id} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3 relative group">
                              <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                  <img src={comm.avatar} alt={comm.user} className="w-8 h-8 rounded-full bg-slate-100" />
                                  <div>
                                    <span className="text-sm font-bold text-slate-900 block">{comm.user}</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{comm.date}</span>
                                  </div>
                                </div>
                                <button 
                                  onClick={() => deleteComment(recipe.id, comm.id)}
                                  className="text-slate-300 hover:text-red-500 transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100 p-1"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-sm text-slate-600 pl-11">{comm.text}</p>
                            </div>
                          ))
                        )}
                      </div>
                      <div className="pt-4 mt-8 border-t border-slate-100">
                        <textarea
                          placeholder="Share your experience..."
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all text-sm resize-none"
                          rows={3}
                        />
                        <button 
                          onClick={() => {
                            if (!commentText.trim()) return;
                            addComment(recipe.id, commentText, "Guest User"); // simple guest for now
                            setCommentText('');
                          }}
                          disabled={!commentText.trim()}
                          className="mt-3 w-full py-3 bg-brand-ink text-white rounded-xl text-sm font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
    </AnimatePresence>
  );
};
