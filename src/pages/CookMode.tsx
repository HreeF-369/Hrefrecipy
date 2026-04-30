import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Timer, 
  Volume2, 
  VolumeX, 
  CheckCircle2,
  ListRestart,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";
import { getRecipeById } from "../services/api";
import { Recipe } from "../types";
import { speakText, getBestVoice } from "../services/speechService";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CookMode() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Timer State
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        if (id) {
          const result = await getRecipeById(id);
          if (result) {
            setRecipe(result);
          } else {
            console.error(`Recipe with ID ${id} not found.`);
            setRecipe(null);
          }
        }
      } catch (error) {
        console.error("Error retrieving recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  const steps = recipe?.analyzedInstructions?.[0]?.steps || [];
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0;

  // Timer logic
  useEffect(() => {
    const step = steps[currentStep];
    if (step?.length) {
      // Spoonacular length is usually in minutes
      setTimeLeft(step.length.number * 60);
      setIsTimerRunning(false);
    } else {
      setTimeLeft(null);
      setIsTimerRunning(false);
    }
  }, [currentStep, recipe]);

  useEffect(() => {
    if (isTimerRunning && timeLeft !== null && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => (prev !== null && prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, timeLeft]);

  // Voice logic
  const speak = useCallback((text: string) => {
    if (isMuted) return;
    speakText(text);
  }, [isMuted]);

  useEffect(() => {
    // Ensure voices are loaded
    const onVoicesChanged = () => {
      getBestVoice();
    };
    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
    onVoicesChanged();
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
    };
  }, []);

  useEffect(() => {
    if (!loading && recipe && steps[currentStep] && !isCompleted && !isMuted) {
      const stepText = `Step ${currentStep + 1}. ${steps[currentStep].step}`;
      // Small delay to ensure clean state transitions
      const timer = setTimeout(() => {
        speak(stepText);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, loading, recipe, isCompleted, isMuted, speak]);

  const handleManualTimer = () => {
    if (timeLeft === null) {
      // Default to 5 minutes if no time is provided
      setTimeLeft(300);
      setIsTimerRunning(true);
    } else {
      setIsTimerRunning(!isTimerRunning);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div>
        <p className="font-bold text-slate-500 animate-pulse">Entering kitchen...</p>
      </div>
    </div>
  );

  if (!id || !recipe) return <div className="p-10 text-center">Select a recipe to start cooking</div>;

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-hidden flex flex-col w-screen h-[100dvh]">
      {/* Header */}
      <header className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-white shrink-0 mt-safe">
        <button onClick={() => navigate(-1)} className="rounded-full bg-slate-50 p-4 sm:p-3 hover:bg-slate-100 transition-colors" aria-label="Close Cook Mode">
          <X size={28} className="text-slate-600 sm:w-6 sm:h-6" />
        </button>
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-brand-green mb-1">Step {currentStep + 1} of {steps.length}</p>
          <h2 className="text-sm font-bold text-slate-800 line-clamp-1 max-w-[200px]">{recipe.title}</h2>
        </div>
        <button 
          onClick={() => {
            setIsMuted(!isMuted);
            if (!isMuted) window.speechSynthesis.cancel();
          }} 
          className={cn(
            "rounded-full p-3 transition-all",
            isMuted ? "bg-red-50 text-red-500" : "bg-brand-green-light text-brand-green"
          )}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </header>

      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-slate-50">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-brand-green shadow-[0_0_10px_rgba(34,197,94,0.3)]"
        />
      </div>

      {/* Main Instruction Area */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-8 sm:py-12 lg:px-20 lg:py-20 bg-slate-50/30 pb-32 sm:pb-32 lg:pb-32 w-full">
        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto w-full"
            >
              <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 shadow-xl shadow-slate-200/50 border border-white">
                <div className="flex flex-col gap-10">
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                       <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-green text-white font-black text-xl shadow-lg shadow-brand-green/20">
                         {currentStep + 1}
                       </span>
                       <div className="h-px flex-1 bg-slate-100"></div>
                       <button 
                         onClick={() => speak(steps[currentStep].step)}
                         className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-green bg-brand-green-light px-4 py-2 rounded-xl"
                       >
                         <Volume2 size={14} /> Replay
                       </button>
                    </div>
                    
                    <h2 className="text-xl sm:text-3xl font-bold leading-relaxed md:leading-tight md:text-5xl text-slate-900 tracking-tight">
                      {steps[currentStep]?.step}
                    </h2>
                  </div>

                  {/* Timer Display */}
                  {timeLeft !== null && (
                    <div className="bg-slate-900 rounded-[2.5rem] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between text-white shadow-2xl gap-6 flex-wrap">
                      <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto justify-center sm:justify-start">
                        <div className="p-3 md:p-4 bg-white/10 rounded-2xl shrink-0">
                          <Timer size={32} className="text-brand-green w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Step Timer</p>
                          <p className="text-3xl md:text-4xl font-black font-mono tracking-tighter">{formatTime(timeLeft)}</p>
                        </div>
                      </div>
                      <div className="flex gap-3 w-full sm:w-auto justify-center sm:justify-start">
                        <button 
                          onClick={() => setIsTimerRunning(!isTimerRunning)}
                          className="p-3 md:p-4 bg-brand-green rounded-2xl hover:scale-105 active:scale-95 transition-transform flex-1 sm:flex-none flex justify-center"
                        >
                          {isTimerRunning ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
                        </button>
                        <button 
                          onClick={() => {
                            const step = steps[currentStep];
                            if (step?.length) setTimeLeft(step.length.number * 60);
                            setIsTimerRunning(false);
                          }}
                          className="p-3 md:p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-colors flex justify-center"
                        >
                          <RotateCcw size={24} />
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Ingredients needed for this step */}
                  {steps[currentStep]?.ingredients && steps[currentStep].ingredients.length > 0 && (
                    <div className="space-y-4">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Ingredients needed</p>
                      <div className="flex flex-wrap gap-3">
                        {steps[currentStep].ingredients.map((ing: any, idx: number) => (
                          <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-5 py-3 rounded-2xl group hover:border-brand-green transition-colors">
                            <span className="text-sm font-bold text-slate-700 capitalize">{ing.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step Equipment */}
                  {steps[currentStep]?.equipment && steps[currentStep].equipment.length > 0 && (
                    <div className="space-y-4">
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">Equipment</p>
                      <div className="flex flex-wrap gap-4">
                        {steps[currentStep].equipment.map((eq: any) => (
                          <div key={eq.id} className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                            {eq.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center space-y-10 py-20"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-brand-green rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative h-32 w-32 rounded-full bg-brand-green flex items-center justify-center text-white shadow-2xl">
                  <CheckCircle2 size={64} />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-6xl font-black tracking-tighter text-slate-900">Bon Appétit!</h2>
                <p className="text-xl text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
                  You've successfully mastered <span className="text-brand-green font-bold">{recipe.title}</span>. Time to enjoy your masterpiece!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => navigate("/")}
                  className="rounded-[2rem] bg-brand-ink px-12 py-5 font-bold text-white shadow-2xl shadow-brand-ink/30 hover:scale-105 transition-all active:scale-95"
                >
                  Back to Dashboard
                </button>
                <button 
                  onClick={() => {setCurrentStep(0); setIsCompleted(false);}}
                  className="rounded-[2rem] bg-white border border-slate-200 px-12 py-5 font-bold text-slate-700 hover:bg-slate-50 transition-all"
                >
                  Cook Again
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Navigation */}
      {!isCompleted && (
        <footer className="p-4 sm:p-8 border-t border-slate-100 bg-white shrink-0 mb-safe">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
            <button 
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-black text-slate-400 hover:text-brand-ink transition-colors disabled:opacity-0"
              aria-label="Previous step"
            >
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" /> <span className="hidden sm:inline">Previous</span>
            </button>
            
            <div className="hidden lg:flex items-center gap-6">
               <button 
                 onClick={handleManualTimer}
                 className={cn(
                   "flex items-center gap-2 text-sm font-bold rounded-full px-5 py-2.5 shadow-sm transition-all active:scale-95",
                   isTimerRunning ? "bg-slate-900 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                 )}
               >
                 <Timer size={18} className={isTimerRunning ? "animate-pulse" : ""} />
                 {timeLeft === null ? "Add Timer" : isTimerRunning ? "Stop Timer" : "Resume Timer"}
               </button>

               <div className="flex items-center gap-3">
                 <div className="h-2 w-48 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-green" style={{ width: `${progress}%` }}></div>
                 </div>
                 <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{Math.round(progress)}%</span>
               </div>
            </div>

            <button 
              onClick={() => {
                if (currentStep < steps.length - 1) {
                  setCurrentStep(prev => prev + 1);
                } else {
                  setIsCompleted(true);
                }
              }}
              className="group flex items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-3xl bg-brand-green h-14 sm:h-16 pl-6 sm:pl-10 pr-4 sm:pr-6 font-black text-white shadow-2xl shadow-brand-green/30 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              <span className="text-center">{currentStep === steps.length - 1 ? "Mastered" : "Next Step"}</span>
              <div className="bg-white/20 p-1 sm:p-2 rounded-full group-hover:translate-x-1 transition-transform shrink-0">
                <ChevronRight size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
