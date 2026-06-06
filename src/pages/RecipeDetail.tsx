import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Flame, 
  Heart, 
  Share2, 
  Plus, 
  Play, 
  CheckCircle2,
  ChevronRight,
  Info,
  Calendar,
  MessageSquare,
  Send,
  Volume2,
  Printer,
  Egg, 
  Beef, 
  Fish, 
  Wheat, 
  Cookie, 
  Apple, 
  Droplets, 
  Salad, 
  Coffee, 
  Soup, 
  Sparkles, 
  Sprout
} from "lucide-react";
import { Recipe } from "../types";
import { getRecipeById } from "../services/api";
import { useApp } from "../context/AppContext";
import { speakText } from "../services/speechService";

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

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToPlan, addRecipeIngredientsToGroceryList, favorites, toggleFavorite, comments, addComment } = useApp();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSegment, setActiveSegment] = useState("ingredients");
  const [checkedIngredients, setCheckedIngredients] = useState<(number | string)[]>([]);
  const [showPlanMenu, setShowPlanMenu] = useState(false);
  const [commentText, setCommentText] = useState("");

  const recipeComments = recipe ? (comments[recipe.id] || []) : [];

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim() && recipe) {
      addComment(recipe.id, commentText, "Guest Gourmet");
      setCommentText("");
    }
  };

  const isFavorite = recipe ? favorites.includes(recipe.id) : false;

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        setRecipe(null);
        if (id) {
          const result = await getRecipeById(id);
          if (result) {
            setRecipe(result);
            document.title = `${result.title} | Hreefrecipy`;
          }
        }
      } catch (error) {
        console.error("Error retrieving recipe details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleAddToList = () => {
    if (recipe) {
      addRecipeIngredientsToGroceryList(recipe);
      alert("All ingredients added to your Grocery List!");
    }
  };

  const handleToggleFavorite = () => {
    if (recipe) {
      toggleFavorite(recipe.id);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: `Hreef Recipes: ${recipe?.title}`,
      text: `Check out this amazing recipe for ${recipe?.title}!`,
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
        alert("Recipe link copied to clipboard!");
      } catch (err) {
        console.error("Clipboard error:", err);
      }
    }
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

  const handlePlanMeal = (day: string) => {
    if (recipe) {
      const mealType = recipe.category === "breakfast" ? "breakfast" : 
                       recipe.category === "lunch" ? "lunch" : "dinner";
      addToPlan(day, mealType, recipe);
      setShowPlanMenu(false);
      alert(`Successfully added to ${day}'s ${mealType}!`);
    }
  };

  const toggleIngredient = (id: number | string) => {
    setCheckedIngredients(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (activeSegment !== "instructions") {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    }
  }, [activeSegment]);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-green border-t-transparent" />
      </div>
    );
  }

  if (!recipe) return <div className="p-20 text-center">Recipe not found</div>;

  let caloriesVal = 420;
  if (recipe.nutrition) {
    caloriesVal = recipe.nutrition.nutrients.find(n => n.name === "Calories")?.amount || 420;
  } else if (typeof recipe.calories === 'string') {
    caloriesVal = parseInt(recipe.calories) || 420;
  } else if (typeof recipe.calories === 'number') {
    caloriesVal = recipe.calories;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative pb-32 lg:pb-10"
    >
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-green no-print"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
        {/* Left Col: Image and Basic Info */}
        <section className="space-y-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 !left-4 flex gap-2 z-10">
              <button 
                onClick={handleToggleFavorite}
                className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-black/30 backdrop-blur-sm transition-all active:scale-90 ${
                  isFavorite ? "bg-red-500 text-white" : "bg-white/90 text-brand-green"
                }`}
              >
                <Heart size={20} fill={isFavorite ? "white" : "none"} />
              </button>
              <button 
                onClick={handleShare}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg shadow-black/30 backdrop-blur-sm transition-transform active:scale-90 no-print"
                title="Share Recipe"
              >
                <Share2 size={20} />
              </button>
              <button 
                onClick={handlePrint}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg shadow-black/30 backdrop-blur-sm transition-transform active:scale-90 no-print cursor-pointer"
                title="Print Recipe | انبريمي"
              >
                <Printer size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              {recipe.title}
            </h1>
            
            <div className="flex gap-4 relative py-4">
              <Link 
                to={`/cook/${recipe.id}`}
                className="flex flex-1 items-center justify-center gap-3 rounded-3xl bg-brand-green py-5 font-display text-xl font-bold text-white shadow-xl shadow-brand-green/20 transition-all hover:scale-[1.02] active:scale-98"
              >
                <Play size={24} fill="white" />
                Start Cooking
              </Link>
              <div className="relative">
                <button 
                  onClick={() => setShowPlanMenu(!showPlanMenu)}
                  className={`flex h-16 w-16 items-center justify-center rounded-3xl shadow-md ring-1 ring-gray-100 transition-all active:scale-90 ${
                    showPlanMenu ? "bg-brand-green text-white" : "bg-white text-brand-green"
                  }`}
                  title="Add to Plan"
                >
                  <Calendar size={28} />
                </button>
                
                <AnimatePresence>
                  {showPlanMenu && (
                    <motion.div 
                      key="plan-menu-dropdown"
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute bottom-20 right-0 z-50 w-48 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/5"
                    >
                      <p className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-gray-400">Select Day</p>
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <button
                          key={day}
                          onClick={() => handlePlanMeal(day)}
                          className="w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-gray-700 hover:bg-brand-cream hover:text-brand-green transition-colors"
                        >
                          {day}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="bg-white p-4 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-gray-100 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="flex flex-col items-center justify-center py-4 px-2 rounded-2xl md:rounded-[2rem] bg-brand-green/5 border border-brand-green/10 transition-transform hover:scale-105">
                  <Clock size={20} strokeWidth={1.5} className="text-brand-green mb-1.5 md:mb-2 md:h-8 md:w-8" />
                  <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest md:tracking-[0.2em]">Time</span>
                  <p className="text-xs md:text-xl font-display font-bold text-gray-900 mt-0.5">{recipe.prepTime || `${recipe.readyInMinutes}m`}</p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 px-2 rounded-2xl md:rounded-[2rem] bg-brand-orange/5 border border-brand-orange/10 transition-transform hover:scale-105">
                  <Flame size={20} strokeWidth={1.5} className="text-brand-orange mb-1.5 md:mb-2 md:h-8 md:w-8" />
                  <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest md:tracking-[0.2em]">Energy</span>
                  <p className="text-xs md:text-xl font-display font-bold text-gray-900 mt-0.5">{Math.round(caloriesVal)}kcal</p>
                </div>
                <div className="flex flex-col items-center justify-center py-4 px-2 rounded-2xl md:rounded-[2rem] bg-blue-50 border border-blue-100 transition-transform hover:scale-105">
                  <Users size={20} strokeWidth={1.5} className="text-blue-500 mb-1.5 md:mb-2 md:h-8 md:w-8" />
                  <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest md:tracking-[0.2em]">Servings</span>
                  <p className="text-xs md:text-xl font-display font-bold text-gray-900 mt-0.5">{recipe.servings}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {parseInt(recipe.protein || '0') >= 25 && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 shadow-sm transition-all hover:bg-emerald-100">
                    <span className="text-xs">💪</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">High Protein</span>
                  </div>
                )}
                {recipe.tags?.map((tag, idx) => (
                   <div key={`${tag}-${idx}`} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-100 shadow-sm transition-all hover:bg-blue-100">
                    <span className="text-[10px] font-black uppercase tracking-widest">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Right Col: Details Tabs */}
        <section className="space-y-8">
          <div className="flex gap-2 rounded-2xl bg-gray-100 p-1.5">
            {["ingredients", "instructions", "nutrition", "comments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSegment(tab)}
                className={`flex-1 rounded-xl py-3 text-sm font-bold capitalize transition-all ${
                  activeSegment === tab 
                    ? "bg-white text-brand-green shadow-sm" 
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className={activeSegment === "ingredients" ? "block" : "hidden print:block"}>
              <motion.div
                key="ingredients"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#FAF6F0] border-2 border-[#D4AF37]/30 rounded-3xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
                  <h3 className="text-2xl font-bold font-serif text-[#2C1A04] tracking-tight">Ingredients</h3>
                  <button 
                    onClick={handleAddToList}
                    className="text-sm font-serif font-semibold text-[#D4AF37] hover:underline no-print"
                  >
                    Add all to list
                  </button>
                </div>
                <div className="flex flex-col mt-4">
                  {recipe.ingredients ? (
                    recipe.ingredients.map((ing, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => toggleIngredient(`ing-${idx}`)}
                        className={`flex items-center gap-3 py-2.5 px-6 rounded-full border border-[#D4AF37]/40 mb-3 transition-all cursor-pointer group relative overflow-hidden min-w-0 ${
                          checkedIngredients.includes(`ing-${idx}`) 
                            ? "bg-transparent opacity-50" 
                            : "bg-[#FAF6F0] hover:bg-slate-50/50"
                        } print:bg-white print:ring-0 print:opacity-100`}
                      >
                        {checkedIngredients.includes(`ing-${idx}`) ? (
                          <div className="w-7 h-7 rounded-full bg-green-100 border border-green-400 text-green-700 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                            ✓
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-transparent border border-[#D4AF37]/40 text-[#2C1A04] flex items-center justify-center text-xs font-serif shrink-0 transition-colors">
                            {idx + 1}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm sm:text-base font-serif font-medium transition-all break-words leading-tight ${
                            checkedIngredients.includes(`ing-${idx}`) ? "line-through text-gray-400/70 transition-all" : "text-[#2C1A04]"
                          }`}>
                            {ing.name}
                          </p>
                        </div>
                        <div className="ml-auto flex items-center gap-1">
                          {getIngredientIcon(ing.name)}
                        </div>
                      </div>
                    ))
                  ) : (recipe.extendedIngredients || []).map((ing, idx) => (
                    <div 
                      key={`${ing.id || idx}-${idx}`} 
                      onClick={() => toggleIngredient(ing.id)}
                      className={`flex items-center gap-3 py-2.5 px-6 rounded-full border border-[#D4AF37]/40 mb-3 transition-all cursor-pointer group relative overflow-hidden min-w-0 ${
                        checkedIngredients.includes(ing.id) 
                          ? "bg-transparent opacity-50" 
                          : "bg-[#FAF6F0] hover:bg-slate-50/50"
                      } print:bg-white print:ring-0 print:opacity-100`}
                    >
                      {checkedIngredients.includes(ing.id) ? (
                        <div className="w-7 h-7 rounded-full bg-green-100 border border-green-400 text-green-700 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                          ✓
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-transparent border border-[#D4AF37]/40 text-[#2C1A04] flex items-center justify-center text-xs font-serif shrink-0 transition-colors">
                          {idx + 1}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm sm:text-base font-serif font-medium transition-all break-words leading-tight ${
                          checkedIngredients.includes(ing.id) ? "line-through text-gray-400/70 transition-all" : "text-[#2C1A04]"
                        }`}>
                          {ing.name}
                        </p>
                        {ing.original && (
                          <p className={`text-xs font-serif mt-0.5 ${
                            checkedIngredients.includes(ing.id) ? "text-gray-400/50" : "text-[#2C1A04]/60"
                          }`}>
                            {ing.original}
                          </p>
                        )}
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        {getIngredientIcon(ing.name)}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className={activeSegment === "instructions" ? "block" : "hidden print:block print:mt-10"}>
              <motion.div
                key="instructions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#FAF6F0] border-2 border-[#D4AF37]/30 rounded-3xl p-6 space-y-6 print:animate-none print:border-none print:p-0"
              >
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-[#2C1A04] tracking-tight">Preparation</h3>
                    <p className="text-sm font-serif text-[#2C1A04]/70 mt-1">Follow along for a perfect meal</p>
                  </div>
                  <button 
                    onClick={handleSpeakInstructions}
                    className="group flex items-center gap-2 px-4 py-2 bg-[#FAF6F0] text-[#2C1A04] border border-[#D4AF37]/40 rounded-xl font-serif text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-all shadow-sm cursor-pointer no-print"
                  >
                    <Volume2 size={16} /> Listen to Steps
                  </button>
                </div>
                <div className="space-y-4">
                  {recipe.instructions ? (
                    recipe.instructions.map((step, idx) => (
                      <div key={idx} className="bg-[#FFFDF9] rounded-2xl border border-[#D4AF37]/40 p-4 mb-4 flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#D4AF37]/40 text-[#2C1A04] bg-transparent flex items-center justify-center text-sm font-serif font-bold shadow-sm transition-transform">
                          {idx + 1}
                        </div>
                        <div className="space-y-2 flex-1 min-w-0">
                          <p className="text-base text-[#2C1A04] leading-relaxed font-serif break-words">{step}</p>
                        </div>
                      </div>
                    ))
                  ) : recipe.analyzedInstructions?.[0]?.steps && recipe.analyzedInstructions[0].steps.length > 0 ? (
                    recipe.analyzedInstructions[0].steps.map((step, idx) => (
                      <div key={`${step.number}-${idx}`} className="bg-[#FFFDF9] rounded-2xl border border-[#D4AF37]/40 p-4 mb-4 flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#D4AF37]/40 text-[#2C1A04] bg-transparent flex items-center justify-center text-sm font-serif font-bold shadow-sm transition-transform">
                          {step.number}
                        </div>
                        <div className="space-y-2 flex-1 min-w-0 pt-0.5">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 flex-wrap">
                            <p className="text-base text-[#2C1A04] leading-relaxed font-serif break-words">{step.step}</p>
                            {step.length && (
                              <div className="flex items-center gap-1.5 bg-[#FAF6F0] border border-[#D4AF37]/20 px-2 py-1 rounded-full text-xs font-serif text-[#2C1A04]/80 shrink-0 h-fit">
                                <Clock size={12} className="text-[#D4AF37]" /> {step.length.number} {step.length.unit}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-20 bg-[#FFFDF9] rounded-[2.5rem] border border-[#D4AF37]/20 border-dashed">
                      <Clock className="mx-auto text-[#D4AF37] mb-3" size={40} />
                      <p className="text-[#2C1A04] font-bold uppercase tracking-widest text-xs font-serif">No step-by-step instructions available</p>
                      <p className="text-[#2C1A04]/70 mt-1 max-w-sm mx-auto text-sm font-serif">Please check the recipe summary or external link for details.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            <div className={activeSegment === "nutrition" ? "block" : "hidden print:block print:mt-10"}>
              <motion.div
                key="nutrition"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recipe.nutrition ? (
                    recipe.nutrition.nutrients.slice(0, 6).map((n, idx) => (
                      <div key={`${n.name}-${idx}`} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 print:ring-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{n.name}</p>
                        <p className="mt-1 text-2xl font-bold text-gray-800">
                          {Math.round(n.amount)}
                          <span className="ml-1 text-sm font-medium text-gray-500">{n.unit}</span>
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 p-10 text-center bg-slate-50 rounded-3xl border border-slate-100">
                       <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Nutritional data unavailable for this local recipe.</p>
                       <p className="text-slate-500 mt-2">Estimated Calories: {recipe.calories}</p>
                       <p className="text-slate-500">Estimated Protein: {recipe.protein}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            <div className={activeSegment === "comments" ? "block no-print" : "hidden"}>
              <motion.div
                key="comments"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Community Thoughts</h3>
                  <span className="text-sm font-medium text-slate-400">{recipeComments.length} Comments</span>
                </div>

                <form onSubmit={handleAddComment} className="relative">
                  <input 
                    type="text" 
                    placeholder="Share your experience..." 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full rounded-2xl border-none bg-slate-100 py-4 pl-6 pr-14 text-sm focus:ring-2 focus:ring-brand-green transition-all"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-brand-green p-2 text-white shadow-lg active:scale-95 transition-transform"
                  >
                    <Send size={18} />
                  </button>
                </form>

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                  {recipeComments.length > 0 ? (
                    recipeComments.map((comment, idx) => (
                      <div key={`${comment.id}-${idx}`} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                        <img src={comment.avatar} alt={comment.user} className="h-10 w-10 rounded-full bg-slate-100" />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-slate-800">{comment.user}</h4>
                            <span className="text-[10px] font-medium text-slate-400">{comment.date}</span>
                          </div>
                          <p className="text-sm leading-relaxed text-slate-600">{comment.text}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-10 text-center space-y-2">
                      <MessageSquare className="mx-auto text-slate-200" size={40} />
                      <p className="text-sm font-medium text-slate-400">Be the first to comment on this masterpiece!</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
