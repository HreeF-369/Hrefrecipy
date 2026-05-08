import { useState, useRef, useEffect } from "react";
import { X, Send, User, Bot, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import { FALLBACK_RECIPES } from "../services/fallbackData";

interface Message {
  role: "user" | "bot";
  content: string;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const STATIC_RESPONSES: Record<string, string> = {
  "hello": "Hello there! I'm your Kitchen Assistant. How can I help you cook something delicious today?",
  "hi": "Hi! Ready to cook? Ask me about specific ingredients or for a meal suggestion!",
  "who are you": "I'm the Hreef Recipy Smart Assistant. I can help you find recipes from our curated collection based on what you're craving or the ingredients you have.",
  "suggest a healthy meal": "I highly recommend our **Quinoa & Roasted Vegetable Bowl** or the **Lemon Herb Grilled Salmon**. Both are packed with nutrients and very popular!",
  "help": "You can ask me things like:\n- 'Show me some breakfast ideas'\n- 'Do you have recipes with avocado?'\n- 'I want a fitness meal'\n- 'Suggest a drink'"
};

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm your Smart Kitchen Assistant. I can help you find recipes and suggest healthy meals from our collection. What would you like to cook?" }
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

  const findLocalResponse = (query: string): string => {
    const q = query.toLowerCase().trim();

    // 1. Check static responses
    for (const [key, value] of Object.entries(STATIC_RESPONSES)) {
      if (q.includes(key)) return value;
    }

    // 2. Search recipes
    const matches = FALLBACK_RECIPES.filter(recipe => {
      const inTitle = recipe.title.toLowerCase().includes(q);
      const inCategory = recipe.category.toLowerCase().includes(q);
      const inIngredients = recipe.extendedIngredients?.some(ing => 
        ing.name.toLowerCase().includes(q)
      );
      return inTitle || inCategory || inIngredients;
    });

    if (matches.length > 0) {
      const topMatches = matches.slice(0, 3);
      let response = `I found **${matches.length}** recipes that might interest you! Here are the best matches:\n\n`;
      
      topMatches.forEach(recipe => {
        response += `- **${recipe.title}** (${recipe.category})\n  *Ready in ${recipe.readyInMinutes}m | ${recipe.calories} kcal*\n`;
      });

      if (matches.length > 3) {
        response += `\n...and ${matches.length - 3} more! You can find them in the search bar above.`;
      }
      
      return response;
    }

    // 3. Fallback suggestions
    if (q.includes("drink") || q.includes("beverage")) {
      return "I couldn't find that specific drink, but our **Healthy Drinks** section has some amazing options like the *Dragon Fruit Lemonade* or *Matcha Green Tea Latte*!";
    }

    if (q.includes("breakfast")) {
      return "Looking for breakfast? Some of our favorites include the **Avocado & Poached Egg Sourdough** and **Berry Blast Smoothie Bowl**.";
    }

    return "I couldn't find a specific recipe for that, but I'm constantly learning! Try searching for categories like 'Breakfast', 'Fitness', or specific ingredients like 'Salmon' or 'Avocado'.";
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    const newMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    // Simulate a brief "thinking" state for a better UX
    setTimeout(() => {
      const botResponse = findLocalResponse(userMessage);
      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed bottom-6 right-6 z-[100] flex h-[600px] w-[90vw] max-w-[440px] flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-gray-100 lg:bottom-10 lg:right-10"
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
                <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
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
