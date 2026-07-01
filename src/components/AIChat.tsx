import { useState, useRef, useEffect } from "react";
import { X, Send, User, Bot, Sparkles, Loader2, ChefHat, Utensils, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { Recipe } from "../types";
import { FALLBACK_RECIPES } from "../services/fallbackData";

interface Message {
  role: "user" | "bot";
  content: string;
  isRecipeSuggestion?: boolean;
  suggestedRecipes?: any[];
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const CHEF_GREETINGS = [
  "Buongiorno! I am Chef DishFit. Ready to create a masterpiece?",
  "Greetings! Your kitchen assistant is at your service. What's on the menu today?",
  "Hello! I've been reviewing our recipes. Looking for something specific or shall I surprise you?",
  "Welcome to the digital kitchen! I can help you find the perfect meal for any craving."
];

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  const { allRecipes } = useApp();
  
  const searchDataSource = allRecipes.length > 0 ? allRecipes : FALLBACK_RECIPES;

  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "bot", 
      content: CHEF_GREETINGS[Math.floor(Math.random() * CHEF_GREETINGS.length)] + "\n\nI can suggest healthy meals, find recipes by ingredient, or guide you through our collections. Try asking: **'Show me some healthy chicken dishes'**" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findSmartResponse = (query: string): { content: string, suggestedRecipes?: any[] } => {
    const q = query.toLowerCase().trim();
    
    // 1. Basic Personality / Identity & Conversation
    if (q.includes("who are you") || q.includes("your name")) {
      return { content: "I am the **DishFit Smart Assistant**, but most people call me **Chef DishFit**. I'm here to help you navigate our local recipe database and find the perfect meal for your goals!" };
    }

    const greetings = ["hello", "hi", "hey", "heey", "good morning", "good afternoon", "good evening", "what's up", "whats up"];
    const isGreeting = greetings.includes(q) || greetings.some(g => q.startsWith(g + " "));
    
    if (isGreeting) {
      return { content: "Hello! I am doing great, thank you. What are we cooking today? I can help you find recipes, substitute ingredients, or plan your meals!" };
    }

    const smallTalk = ["how are you", "how r u", "how do you do", "what are you doing", "what are u doing", "what u doing", "thanks", "thank you"];
    if (smallTalk.some(s => q.includes(s))) {
      if (q.includes("what are you doing") || q.includes("what are u doing") || q.includes("what u doing")) {
        return { content: "I am chatting with you and ready to help you plan your meals! What would you like to cook today?" };
      }
      return { content: "I am doing great, thank you! I'm here and ready to help you find your next delicious meal. What are you in the mood for?" };
    }

    const foodKeywords = ["recipe", "food", "cook", "make", "eat", "hungry", "breakfast", "lunch", "dinner", "snack", "chicken", "beef", "fish", "veg", "salad", "drink", "healthy", "diet", "meal", "ingredient", "substitute", "bake", "fry", "roast", "soup", "dessert", "sweet", "pasta", "rice", "idea", "show me", "craving"];
    const hasFoodIntent = foodKeywords.some(keyword => q.includes(keyword)) || q.split(" ").length <= 3;

    if (!hasFoodIntent) {
      return { content: "I am just a chef assistant, so I'm best at talking about food! 👨‍🍳\n\nI am chatting with you and ready to help you plan your meals! Just tell me an ingredient or a type of dish you want to cook." };
    }

    // 2. Advanced Search Logic
    let searchResults = searchDataSource;
    let contextPhrase = "I found these recipes for you:";

    // Smart Keyword Overrides
    const isHealthyRequest = q.includes("healthy") || q.includes("low cal") || q.includes("diet") || q.includes("fitness");
    const isDrinkRequest = q.includes("drink") || q.includes("beverage") || q.includes("smoothie") || q.includes("juice");
    const isBreakfastRequest = q.includes("breakfast") || q.includes("morning");

    if (isHealthyRequest) {
      searchResults = searchDataSource.filter(r => 
        r.category.toLowerCase() === "fitness" || 
        r.category.toLowerCase() === "fitness meals" ||
        r.category.toLowerCase() === "salad" ||
        (r.calories && (typeof r.calories === 'number' ? r.calories < 400 : parseInt(r.calories) < 400))
      );
      contextPhrase = "Health is wealth! Based on your request for something healthy, these are our top nutrient-dense options:";
    } else if (isDrinkRequest) {
      searchResults = searchDataSource.filter(r => r.category.toLowerCase() === "drinks");
      contextPhrase = "Refreshing choice! Here are some of our most beautiful and refreshing drinks:";
    } else if (isBreakfastRequest) {
      searchResults = searchDataSource.filter(r => r.category.toLowerCase() === "breakfast");
      contextPhrase = "Morning! Start your day right with these breakfast favorites:";
    } else {
      // General Keyword/Ingredient Search
      const keywords = q.split(" ").filter(k => k.length > 2);
      searchResults = searchDataSource.filter(recipe => {
        const inTitle = recipe.title.toLowerCase().includes(q);
        const inCat = recipe.category.toLowerCase().includes(q);
        const inIngredients = recipe.extendedIngredients?.some(ing => ing.name.toLowerCase().includes(q));
        
        // Also check if any individual word matches
        const wordMatch = keywords.some(k => 
          recipe.title.toLowerCase().includes(k) || 
          recipe.category.toLowerCase().includes(k)
        );

        return inTitle || inCat || inIngredients || wordMatch;
      });
      contextPhrase = `I've searched our kitchen! For "${query}", these are the best matches:`;
    }

    if (searchResults.length > 0) {
      const top3 = searchResults.slice(0, 3);
      let text = `${contextPhrase}\n\n`;
      
      top3.forEach(r => {
        text += `- **${r.title}**: A delicious ${r.category} dish. Ready in ${r.readyInMinutes}m.\n`;
      });

      if (searchResults.length > 3) {
        text += `\n...and **${searchResults.length - 3}** more options available in our full catalog!`;
      } else {
        text += `\nWould you like to see the full details for one of these?`;
      }

      return { 
        content: text, 
        suggestedRecipes: top3 
      };
    }

    // 3. True Fallback
    return { 
      content: "I couldn't find an exact match in our current recipes, but a true chef is always adaptable! \n\nHow about a **Fitness Bowl** or one of our **Healthy Smoothies**? They are crowd favorites that fit most requests!" 
    };
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate Chef processing with internal safety
    setTimeout(() => {
      try {
        const response = findSmartResponse(userMessage);
        setMessages(prev => [...prev, { 
          role: "bot", 
          content: response.content || "I'm processing that request. Could you try rephrasing? I want to make sure I get the chef-quality recommendation right!",
          suggestedRecipes: response.suggestedRecipes,
          isRecipeSuggestion: !!response.suggestedRecipes 
        }]);
      } catch (error) {
        console.error("AIChat Error:", error);
        setMessages(prev => [...prev, { 
          role: "bot", 
          content: "I apologize, but my culinary database is experiencing a minor hiccup. Let me try that again, or feel free to ask about one of our main collections like **fitness meals** or **breakfast**!" 
        }]);
      } finally {
        setIsLoading(false);
      }
    }, 700);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="ai-chat-window"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed bottom-4 right-4 left-4 lg:left-auto sm:right-6 sm:bottom-6 z-[100] flex h-[85vh] sm:h-[600px] w-auto lg:w-[440px] max-w-md flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-gray-100 lg:bottom-10 lg:right-10"
        >
          {/* Header */}
          <header className="flex items-center justify-between bg-brand-green p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold">Kitchen AI</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/60">Professional Chef</p>
              </div>
            </div>
            <button onClick={onClose} className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
              <X size={20} />
            </button>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-brand-cream/30">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  msg.role === "user" ? "bg-brand-orange text-white" : "bg-brand-green text-white"
                }`}>
                  {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[80%] space-y-3`}>
                  <div className={`rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-brand-green text-white rounded-tr-none" 
                      : "bg-white text-gray-800 shadow-sm ring-1 ring-gray-100 rounded-tl-none"
                  }`}>
                    {msg.role === "user" ? (
                      msg.content
                    ) : (
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    )}
                  </div>

                  {msg.role === "bot" && msg.suggestedRecipes && (
                    <div className="grid gap-2">
                      {msg.suggestedRecipes.map((recipe, index) => (
                        <Link
                          key={`${recipe.id}-${index}`}
                          to={`/recipe/${recipe.id}`}
                          onClick={onClose}
                          className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-100 hover:ring-brand-green transition-all group"
                        >
                          <img 
                            src={recipe.image} 
                            alt={recipe.title} 
                            className="h-12 w-12 rounded-lg object-cover"
                          />
                          <div className="flex-1 overflow-hidden">
                            <p className="text-xs font-bold text-gray-900 truncate group-hover:text-brand-green transition-colors">
                              {recipe.title}
                            </p>
                            <p className="text-[10px] text-gray-500">
                              {recipe.readyInMinutes} min • {recipe.calories} kcal
                            </p>
                          </div>
                          <ChefHat size={14} className="text-brand-green opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white">
                  <Bot size={16} />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm ring-1 ring-gray-100 italic text-gray-400 text-sm flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin" />
                  Chef is thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <footer className="border-t border-gray-100 p-6 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask recipes, substitutions..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 rounded-2xl bg-gray-50 border-none px-4 py-3 text-sm focus:ring-2 focus:ring-brand-green transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green text-white shadow-lg shadow-brand-green/20 transition-transform active:scale-95 disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
