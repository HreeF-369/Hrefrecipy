import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
  Sprout,
  Dumbbell,
  Zap,
  Loader2,
  Award
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
  const [showDetailedNutrition, setShowDetailedNutrition] = useState(false);

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
            document.title = `${result.title} | DishFit`;
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
      title: `DishFit: ${recipe?.title}`,
      text: `Check out this ${recipe?.title} - High Protein Fitness Meal on DishFit!`,
      url: url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.text}\n\n${url}`);
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
      <Helmet>
        <title>{recipe.title} Recipe | DishFit</title>
        <meta name="description" content={`Make this delicious ${recipe.title} recipe at home. High protein, healthy meals under ${Math.ceil(caloriesVal/100)*100} calories.`} />
        <meta name="keywords" content={`${recipe.title.toLowerCase()} recipe, high protein ${recipe.title.toLowerCase()}, healthy meals under 30 minutes, healthy ${recipe.title.toLowerCase()} under 500 calories`} />
        
        {/* Open Graph / Pinterest Rich Pin Meta Tags */}
        <meta property="og:title" content={`${recipe.title} Recipe | DishFit`} />
        <meta property="og:description" content={`Make this delicious ${recipe.title} recipe at home. High protein, healthy meals under ${Math.ceil(caloriesVal/100)*100} calories.`} />
        <meta property="og:image" content={recipe.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://dishfit.net/recipe/${recipe.id}`} />
        <meta property="og:site_name" content="DishFit" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${recipe.title} Recipe | DishFit`} />
        <meta name="twitter:description" content={`Make this delicious ${recipe.title} recipe at home. High protein, healthy meals under ${Math.ceil(caloriesVal/100)*100} calories.`} />
        <meta name="twitter:image" content={recipe.image} />

        {/* Structured Data / JSON-LD for Recipe Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Recipe",
            "name": recipe.title,
            "image": [recipe.image],
            "author": {
              "@type": "Organization",
              "name": "DishFit"
            },
            "datePublished": "2026-07-02",
            "description": recipe.description,
            "recipeYield": `${recipe.servings} servings`,
            "recipeCategory": recipe.category,
            "recipeIngredient": recipe.ingredients.map(i => i.name),
            "recipeInstructions": recipe.instructions.map((inst) => ({
              "@type": "HowToStep",
              "text": inst
            })),
            "nutrition": {
              "@type": "NutritionInformation",
              "calories": `${caloriesVal} kcal`,
              "proteinContent": recipe.protein
            }
          })}
        </script>
      </Helmet>

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
              alt={`High protein low calorie ${recipe.title} recipe for healthy meal planning`} 
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 !left-4 flex gap-2 z-10">
              <button 
                onClick={handleToggleFavorite}
                className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg shadow-black/30 backdrop-blur-sm transition-all active:scale-90 no-print ${
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
            
            <div className="flex gap-4 relative py-4 no-print">
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
          <div className="flex flex-row items-center justify-start gap-6 border-b border-gray-200 mb-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden no-print">
            {["ingredients", "instructions", "nutrition", "comments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSegment(tab)}
                className={`pb-3 relative text-xs sm:text-sm font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeSegment === tab 
                    ? "text-green-600" 
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
                {activeSegment === tab && (
                  <motion.div
                    layoutId="activeSegment"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-green-500 rounded-t-full"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className={activeSegment === "ingredients" ? "block" : "hidden print:block"}>
              <motion.div
                key="ingredients"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#FAF8F5] border-none rounded-3xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-2xl font-bold font-display text-slate-800 tracking-tight">Ingredients</h3>
                  <button 
                    onClick={handleAddToList}
                    className="text-sm font-semibold text-brand-green hover:underline no-print"
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
                        className={`flex items-center gap-3 py-3 px-5 rounded-xl border border-slate-100 mb-3 transition-all cursor-pointer group relative overflow-hidden min-w-0 ${
                          checkedIngredients.includes(`ing-${idx}`) 
                            ? "bg-slate-50 opacity-60" 
                            : "bg-white hover:shadow-md"
                        } print:bg-white print:ring-0 print:opacity-100`}
                      >
                        {checkedIngredients.includes(`ing-${idx}`) ? (
                          <div className="w-7 h-7 rounded-full bg-green-50 border border-green-500 text-green-500 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                            ✓
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0 transition-colors group-hover:bg-slate-100">
                            {idx + 1}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm sm:text-base font-medium transition-all break-words leading-tight ${
                            checkedIngredients.includes(`ing-${idx}`) ? "line-through text-slate-400" : "text-slate-700"
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
                      className={`flex items-center gap-3 py-3 px-5 rounded-xl border border-slate-100 mb-3 transition-all cursor-pointer group relative overflow-hidden min-w-0 ${
                        checkedIngredients.includes(ing.id) 
                          ? "bg-slate-50 opacity-60" 
                          : "bg-white hover:shadow-md"
                      } print:bg-white print:ring-0 print:opacity-100`}
                    >
                      {checkedIngredients.includes(ing.id) ? (
                        <div className="w-7 h-7 rounded-full bg-green-50 border border-green-500 text-green-500 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                          ✓
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center text-xs font-bold shrink-0 transition-colors group-hover:bg-slate-100">
                          {idx + 1}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm sm:text-base font-medium transition-all break-words leading-tight ${
                          checkedIngredients.includes(ing.id) ? "line-through text-slate-400" : "text-slate-700"
                        }`}>
                          {ing.name}
                        </p>
                        {ing.original && (
                          <p className={`text-xs mt-0.5 ${
                            checkedIngredients.includes(ing.id) ? "text-slate-400" : "text-slate-500"
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
                className="bg-[#FAF8F5] border-none rounded-3xl p-6 space-y-6 print:animate-none print:border-none print:p-0"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-slate-800 tracking-tight">Preparation</h3>
                    <p className="text-sm text-slate-500 mt-1">Follow along for a perfect meal</p>
                  </div>
                  <button 
                    onClick={handleSpeakInstructions}
                    className="group flex items-center gap-2 px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-xl font-display text-xs font-bold uppercase tracking-widest hover:border-slate-300 transition-all shadow-sm cursor-pointer no-print"
                  >
                    <Volume2 size={16} /> Listen to Steps
                  </button>
                </div>
                <div className="space-y-4">
                  {recipe.instructions ? (
                    recipe.instructions.map((step, idx) => (
                      <div key={idx} className="bg-white rounded-2xl border border-slate-100 py-4 px-5 mb-4 flex items-start gap-4 group shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm transition-transform">
                          {idx + 1}
                        </div>
                        <div className="space-y-2 flex-1 min-w-0 pt-0.5">
                          <p className="text-base text-slate-800 leading-relaxed font-sans break-words">{step}</p>
                        </div>
                      </div>
                    ))
                  ) : recipe.analyzedInstructions?.[0]?.steps && recipe.analyzedInstructions[0].steps.length > 0 ? (
                    recipe.analyzedInstructions[0].steps.map((step, idx) => (
                      <div key={`${step.number}-${idx}`} className="bg-white rounded-2xl border border-slate-100 py-4 px-5 mb-4 flex items-start gap-4 group shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 text-green-600 flex items-center justify-center text-sm font-bold shadow-sm transition-transform">
                          {step.number}
                        </div>
                        <div className="space-y-2 flex-1 min-w-0 pt-0.5">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 flex-wrap">
                            <p className="text-base text-slate-800 leading-relaxed font-sans break-words">{step.step}</p>
                            {step.length && (
                              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-2 py-1 rounded-full text-xs font-bold text-slate-600 shrink-0 h-fit">
                                <Clock size={12} className="text-brand-green" /> {step.length.number} {step.length.unit}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-20 bg-white rounded-[2.5rem] border border-slate-200 border-dashed">
                      <Clock className="mx-auto text-slate-400 mb-3" size={40} />
                      <p className="text-slate-700 font-bold uppercase tracking-widest text-xs">No step-by-step instructions available</p>
                      <p className="text-slate-500 mt-1 max-w-sm mx-auto text-sm">Please check the recipe summary or external link for details.</p>
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
                className="space-y-8 md:space-y-12"
              >
                {!recipe.nutrition && !recipe.calories && !recipe.protein && !recipe.carbs && !recipe.fat ? (
                  <div className="flex flex-col items-center justify-center py-20">
                     <Loader2 className="w-10 h-10 text-brand-green animate-spin mb-4" />
                     <p className="text-sm font-bold text-slate-400">Analyzing Nutritional Composition...</p>
                   </div>
                ) : (
                  <>
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
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Macro Grid Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                       {(() => {
                          const nutrients = recipe.nutrition?.nutrients || [];
                          const getCard = (label: string, exactName: string, icon: React.ReactNode, color: string, bgLight: string, fallbackValue?: string | number) => {
                            const nut = nutrients.find(n => n.name && n.name.toLowerCase() === exactName.toLowerCase());
                            
                            let amount: string | number = 0;
                            let unit = exactName === 'Calories' ? 'kcal' : 'g';
                            
                            if (nut && nut.amount !== undefined) {
                              amount = Math.round(nut.amount);
                              unit = nut.unit || unit;
                            } else if (fallbackValue !== undefined && fallbackValue !== null) {
                              amount = fallbackValue;
                            }
                            
                            return (
                              <motion.div 
                                key={label}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`bg-white rounded-2xl md:rounded-[32px] p-4 sm:p-5 md:p-6 border border-slate-100 shadow-sm relative overflow-hidden group flex flex-col justify-between min-h-[110px] sm:min-h-[140px] md:min-h-[160px]`}
                              >
                                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl ${bgLight} ${color} flex items-center justify-center shrink-0 mb-3 sm:mb-4 md:mb-0 md:absolute md:top-6 md:right-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                  {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' })}
                                </div>
                                <div>
                                  <span className="text-[9px] sm:text-[11px] font-black text-slate-500 uppercase tracking-widest block mb-0.5 sm:mb-1 truncate">{label}</span>
                                  <span className="text-lg sm:text-2xl md:text-3xl font-black text-slate-900 leading-none flex items-baseline gap-0.5 sm:gap-1 truncate">
                                    {typeof amount === 'string' ? parseFloat(amount) || amount : amount}
                                    <span className="text-[10px] sm:text-xs md:text-sm font-bold opacity-50">{unit}</span>
                                  </span>
                                </div>
                              </motion.div>
                            );
                          };

                          return (
                            <>
                              {getCard('Calories', 'Calories', <Flame />, 'text-orange-500', 'bg-orange-50', recipe.calories)}
                              {getCard('Protein', 'Protein', <Dumbbell />, 'text-emerald-500', 'bg-emerald-50', recipe.protein)}
                              {getCard('Carbohydrates', 'Carbohydrates', <Wheat />, 'text-amber-500', 'bg-amber-50', recipe.carbs)}
                              {getCard('Fat', 'Fat', <Droplets />, 'text-blue-500', 'bg-blue-50', recipe.fat)}
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
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
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
                               {(() => {
                                 const nutrients = recipe.nutrition?.nutrients || [];
                                 const mainMacros = ['calories', 'protein', 'carbohydrates', 'fat', 'net carbohydrates', 'saturated fat', 'trans fat'];
                                 
                                 let microsData: { name: string; amount: number; unit: string; percentOfDailyNeeds: number }[] = [];
                                 
                                 if (nutrients.length > 0) {
                                   const remaining = nutrients.filter(n => n.name && !mainMacros.includes(n.name.toLowerCase()));
                                   if (remaining.length > 0) {
                                     microsData = remaining.map(n => ({
                                       name: n.name,
                                       amount: Math.round(n.amount || 0),
                                       unit: n.unit || '',
                                       percentOfDailyNeeds: Math.min(100, Math.round(n.percentOfDailyNeeds || ((n.amount || 0) > 0 ? Math.min(100, Math.round(n.amount)) : 0)))
                                     }));
                                   }
                                 }
                                 
                                 if (microsData.length === 0 && recipe.micros) {
                                   microsData = Object.entries(recipe.micros).map(([key, val]) => {
                                     const numVal = typeof val === 'number' ? val : (parseFloat(String(val)) || 0);
                                     return {
                                       name: key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()).trim(),
                                       amount: Math.round(numVal),
                                       unit: key.toLowerCase() === 'sodium' ? 'mg' : 'g',
                                       percentOfDailyNeeds: Math.min(100, Math.round((numVal / (key.toLowerCase() === 'sodium' ? 2300 : 50)) * 100)) || Math.min(100, Math.round(numVal))
                                     };
                                   });
                                 }
                                 
                                 return microsData.map((nut, i) => (
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
                                       <span className="text-[8px] sm:text-[9px] md:text-[11px] font-black text-slate-300 uppercase tracking-[0.15em]">{nut.percentOfDailyNeeds || 0}% OF YOUR DAILY GOAL</span>
                                     </div>
                                   </div>
                                 ));
                               })()}
                               
                               {(!recipe.micros && (!recipe.nutrition || !recipe.nutrition.nutrients || recipe.nutrition.nutrients.length <= 4)) && (
                                  <div className="col-span-1 md:col-span-2 py-8 text-center bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
                                    <Info className="mx-auto text-slate-400 mb-2" size={24} />
                                    <p className="text-slate-500 text-sm font-medium">Detailed micronutrient breakdown is currently unavailable for this recipe.</p>
                                  </div>
                               )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </>
                )}
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
