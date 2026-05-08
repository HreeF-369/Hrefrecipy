import { useState, useRef, useEffect } from "react";
import { X, Send, User, Bot, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "bot";
  content: string;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm your AI cooking assistant. I can help with recipe substitutions, cooking techniques, or meal ideas. What's on your mind?" }
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

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    const newMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("API_KEY_MISSING");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const responseArr = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.slice(1).map(m => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }]
          })),
          {
            role: "user",
            parts: [{ text: userMessage }]
          }
        ],
        config: {
          systemInstruction: "You are a world-class professional chef assistant for 'Hreef Recipy'. You are friendly, helpful, and concise. You provide expert cooking advice, recipe tips, and substitution suggestions. Format your response using clean Markdown.",
          safetySettings: [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH }
          ]
        }
      });

      const botResponse = responseArr.text || "I'm sorry, I couldn't generate a response. Try rephrasing your question.";
      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
    } catch (error: any) {
      console.error("Kitchen AI Full Error Object:", error);
      
      let friendlyError = "Oops! My neural kitchen is a bit messy right now. Please try again.";
      
      if (error.message === "API_KEY_MISSING") {
        friendlyError = "AI Assistant is offline (API Key Missing). Please check deployment settings.";
      } else if (error.message?.includes("API key not valid")) {
        friendlyError = "AI Assistant is offline (Invalid API Key). Please verify your credentials.";
      } else if (error.message?.includes("quota")) {
        friendlyError = "I'm a bit overwhelmed with orders! (Quota Exceeded). Please try again in a few minutes.";
      }
        
      setMessages(prev => [...prev, { role: "bot", content: friendlyError }]);
    } finally {
      setIsLoading(false);
    }
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
