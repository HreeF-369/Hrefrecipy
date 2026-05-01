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
  Volume2
} from "lucide-react";
import { Recipe } from "../types";
import { getRecipeById } from "../services/api";
import { useApp } from "../context/AppContext";
import { speakText } from "../services/speechService";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToPlan, addRecipeIngredientsToGroceryList, favorites, toggleFavorite, comments, addComment } = useApp();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSegment, setActiveSegment] = useState("ingredients");
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
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
          const result = await getRecipeById(parseInt(id));
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

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: recipe?.title,
        text: `Check out this recipe for ${recipe?.title}!`,
        url: url,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url);
      alert("Recipe link copied to clipboard!");
    }
  };

  const handleSpeakInstructions = () => {
    if (!recipe) return;
    const steps = recipe.analyzedInstructions?.[0]?.steps || [];
    if (steps.length === 0) return;
    
    const textToSpeak = steps.map(s => `Step ${s.number}: ${s.step}`).join(". ");
    speakText(textToSpeak);
  };

  const handlePlanMeal = (day: string) => {
    if (recipe) {
      const mealType = recipe.dishTypes?.includes("breakfast") ? "breakfast" : 
                       recipe.dishTypes?.includes("lunch") ? "lunch" : "dinner";
      addToPlan(day, mealType, recipe);
      setShowPlanMenu(false);
      alert(`Successfully added to ${day}'s ${mealType}!`);
    }
  };

  const toggleIngredient = (id: number) => {
    setCheckedIngredients(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-green border-t-transparent" />
      </div>
    );
  }

  if (!recipe) return <div className="p-20 text-center">Recipe not found</div>;

  const calories = recipe.nutrition?.nutrients.find(n => n.name === "Calories")?.amount || 420;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative pb-32 lg:pb-10"
    >
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-green"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left Col: Image and Basic Info */}
        <section className="space-y-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="h-full w-full object-cover"
            />
            <div className="absolute top-6 right-6 flex gap-2">
              <button 
                onClick={handleToggleFavorite}
                className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition-all active:scale-90 ${
                  isFavorite ? "bg-red-500 text-white" : "bg-white/90 text-brand-green"
                }`}
              >
                <Heart size={20} fill={isFavorite ? "white" : "none"} />
              </button>
              <button 
                onClick={handleShare}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg backdrop-blur-md transition-transform active:scale-90"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold leading-tight text-gray-900">
              {recipe.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl ring-1 ring-gray-100 shadow-sm">
                <Clock size={18} className="text-brand-light-green" />
                <span>{recipe.readyInMinutes} mins</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl ring-1 ring-gray-100 shadow-sm">
                <Users size={18} className="text-brand-light-green" />
                <span>{recipe.servings} Servings</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl ring-1 ring-gray-100 shadow-sm">
                <Flame size={18} className="text-brand-light-green" />
                <span>~{Math.round(calories)} Cal</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 relative">
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

          <AnimatePresence mode="wait">
            {activeSegment === "ingredients" && (
              <motion.div
                key="ingredients"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">What you'll need</h3>
                  <button 
                    onClick={handleAddToList}
                    className="text-sm font-semibold text-brand-green hover:underline"
                  >
                    Add all to list
                  </button>
                </div>
                <div className="grid gap-3">
                  {(recipe.extendedIngredients || []).map((ing) => (
                    <div 
                      key={ing.id} 
                      onClick={() => toggleIngredient(ing.id)}
                      className={`flex items-center gap-4 rounded-3xl p-4 shadow-sm ring-1 transition-all cursor-pointer ${
                        checkedIngredients.includes(ing.id) 
                          ? "bg-brand-green/5 ring-brand-green/20 opacity-60" 
                          : "bg-white ring-gray-100 hover:ring-brand-light-green/30"
                      }`}
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                        checkedIngredients.includes(ing.id) 
                          ? "bg-brand-green text-white" 
                          : "bg-brand-cream text-brand-green ring-1 ring-brand-green/10"
                      }`}>
                        {checkedIngredients.includes(ing.id) ? <CheckCircle2 size={18} /> : <span className="font-bold text-xs">{Math.round(ing.amount)}</span>}
                      </div>
                      <div className="flex-1">
                        <p className={`font-bold transition-all ${checkedIngredients.includes(ing.id) ? "text-gray-400 line-through" : "text-gray-800"}`}>
                          {ing.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {ing.original}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSegment === "instructions" && (
              <motion.div
                key="instructions"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Preparation</h3>
                  <button 
                    onClick={handleSpeakInstructions}
                    className="flex items-center gap-2 bg-brand-green-light px-4 py-2 rounded-xl text-brand-green font-bold text-xs hover:bg-brand-green hover:text-white transition-all shadow-sm"
                  >
                    <Volume2 size={16} /> Listen to Steps
                  </button>
                </div>
                {recipe.analyzedInstructions?.[0]?.steps && recipe.analyzedInstructions[0].steps.length > 0 ? (
                  recipe.analyzedInstructions[0].steps.map((step) => (
                    <div key={step.number} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-bold text-white shadow-lg shadow-brand-green/20 group-hover:scale-110 transition-transform">
                          {step.number}
                        </div>
                        <div className="mt-2 h-full w-px bg-gray-200 group-last:hidden" />
                      </div>
                      <div className="pb-8 flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 flex-wrap">
                          <p className="text-base leading-relaxed text-gray-700 font-medium">{step.step}</p>
                          {step.length && (
                            <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-lg text-[10px] font-black text-slate-500 shrink-0 h-fit">
                              <Clock size={10} /> {step.length.number} {step.length.unit}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-slate-100 border-dashed">
                    <Clock className="mx-auto text-slate-300 mb-3" size={40} />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">No step-by-step instructions available</p>
                    <p className="text-slate-500 mt-1 max-w-[200px] mx-auto text-sm">Please check the recipe summary or external link for details.</p>
                  </div>
                )}
              </motion.div>
            )}

            {activeSegment === "nutrition" && (
              <motion.div
                key="nutrition"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(recipe.nutrition?.nutrients || []).slice(0, 6).map((n) => (
                    <div key={n.name} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{n.name}</p>
                      <p className="mt-1 text-2xl font-bold text-gray-800">
                        {Math.round(n.amount)}
                        <span className="ml-1 text-sm font-medium text-gray-500">{n.unit}</span>
                      </p>
                      <div className="mt-3 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                        <div 
                          className="h-full bg-brand-light-green transition-all" 
                          style={{ width: `${Math.min(n.percentOfDailyNeeds || 0, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-blue-50 p-4 flex gap-3 text-sm text-blue-700">
                  <span className="shrink-0"><Info size={20} /></span>
                  <p>Nutrition values are estimated based on ingredients and standard portion sizes.</p>
                </div>
              </motion.div>
            )}

            {activeSegment === "comments" && (
              <motion.div
                key="comments"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
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
                    recipeComments.map((comment) => (
                      <div key={comment.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
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
            )}
          </AnimatePresence>
        </section>
      </div>
    </motion.div>
  );
}
