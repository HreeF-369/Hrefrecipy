/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, Link } from "react-router-dom";
import { 
  GlassWater,
  IceCream,
  Home as HomeIcon, 
  Search, 
  Calendar, 
  ShoppingCart, 
  ChefHat, 
  UtensilsCrossed, 
  MessageSquare,
  Menu,
  X,
  Coffee,
  Moon,
  Flame,
  ShoppingBag,
  Utensils,
  ChevronRight,
  Instagram,
  MessageCircle,
  Dumbbell,
  Sparkles,
  Heart
} from "lucide-react";
import { useState, useEffect } from "react";
import { AppProvider } from "./context/AppContext";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Pages (will create these next)
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import CookMode from "./pages/CookMode";
import Planner from "./pages/Planner";
import GroceryList from "./pages/GroceryList";
import AIChat from "./components/AIChat";
import Favorites from "./pages/Favorites";
import PlaceholderPage from "./pages/PlaceholderPage";
import About from "./pages/About";
import HelpFAQ from "./pages/HelpFAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import DataPreference from "./pages/DataPreference";

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navigation = ({ onOpenAI }: { onOpenAI: (open: boolean) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Recipes", path: "/recipes", icon: Search },
    { name: "Breakfast", path: "/?cat=breakfast", icon: Coffee },
    { name: "Favorites", path: "/favorites", icon: Heart },
    { name: "Lunch", path: "/?cat=lunch", icon: Utensils },
    { name: "Dinner", path: "/?cat=dinner", icon: Moon },
    { name: "Main Dishes", path: "/?cat=main-dishes", icon: ChefHat },
    { name: "Desserts", path: "/?cat=desserts", icon: IceCream },
    { name: "Drinks", path: "/?cat=drinks", icon: GlassWater },
    { name: "Fitness", path: "/?cat=fitness", icon: Dumbbell },
  ];

  return (
    <>
      {/* Mobile Top Header */}
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between bg-white/80 border-b border-slate-100 p-4 backdrop-blur-xl lg:hidden">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green text-white font-black text-lg">
            H
          </div>
          <span className="font-display text-sm font-bold tracking-tight text-slate-900 uppercase">
            HREEFRECIPY
          </span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Hamburger Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-white pt-24 pb-8 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2 h-full overflow-y-auto pb-20">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-4 rounded-2xl px-6 py-4 transition-all duration-300",
                      isActive 
                        ? "bg-brand-green-light text-brand-green font-bold" 
                        : "text-slate-600 hover:bg-slate-50"
                    )
                  }
                >
                  <item.icon size={20} />
                  <span className="text-lg font-semibold">{item.name}</span>
                </NavLink>
              ))}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <button 
                  onClick={() => {
                    onOpenAI(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full rounded-2xl bg-brand-ink py-4 font-bold text-white shadow-xl shadow-brand-ink/20 transform active:scale-95 transition-all"
                >
                  Ask AI Assistant
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <nav className="fixed left-0 top-0 hidden h-full w-[280px] flex-col border-r border-slate-100 bg-white p-8 lg:flex">
        <div className="mb-12 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green text-white font-black text-2xl shadow-lg shadow-brand-green/20">
            H
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-slate-900 uppercase">
            HREEFRECIPY
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-1 overflow-y-auto pr-2 scrollbar-hide">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300 group",
                  isActive 
                    ? "bg-[#f0fdf4] text-brand-green font-bold shadow-sm" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-brand-green"
                )
              }
            >
              <item.icon size={18} className={cn("transition-colors", "group-hover:text-brand-green")} />
              <span className="text-sm font-semibold">{item.name}</span>
            </NavLink>
          ))}
        </div>

        <div className="mt-8">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 p-6 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
            <div className="relative z-10">
              <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1">Pro Assistant</p>
              <p className="text-sm font-medium text-slate-600 mb-4 leading-snug">
                Stuck on a recipe? Ask AI for substitutes.
              </p>
              <button 
                onClick={() => onOpenAI(true)}
                className="w-full rounded-xl bg-white border border-orange-200 py-2.5 text-xs font-bold text-orange-600 shadow-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all active:scale-95"
              >
                Ask AI Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex w-[90%] items-center justify-around rounded-[2.5rem] border border-white/20 bg-white/80 backdrop-blur-2xl p-3 shadow-2xl lg:hidden">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300",
                isActive ? "text-brand-green bg-brand-green-light border border-brand-green/10" : "text-slate-400"
              )
            }
          >
            <item.icon size={20} />
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col max-w-[100vw] overflow-x-hidden">
          <Navigation onOpenAI={setIsAIChatOpen} />
          
          <main className="pt-20 pb-24 lg:pt-0 lg:pb-0 lg:pl-72 flex-1 items-stretch w-full max-w-[100vw] overflow-x-hidden">
          <div className="mx-auto w-full p-4 lg:p-12">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/cook" element={<CookMode />} />
                <Route path="/cook/:id" element={<CookMode />} />
                <Route path="/planner" element={<Planner />} />
                <Route path="/grocery" element={<GroceryList />} />
                <Route path="/about" element={<About />} />
                <Route path="/guides" element={<HelpFAQ />} />
                <Route path="/help" element={<HelpFAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/data-preference" element={<DataPreference />} />
              </Routes>
            </AnimatePresence>
          </div>
        </main>

        {/* Professional Footer */}
        <footer className="border-t border-slate-100 bg-white py-16 lg:pl-72">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-12 grid-cols-1 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white font-bold text-xl shadow-lg shadow-brand-green/20">
                    H
                  </div>
                  <span className="font-display text-xl font-bold tracking-tight text-brand-ink">Hreefrecipy</span>
                </Link>
                <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-xs mx-auto sm:mx-0">
                  Fuel your body, master your health. Personalised nutrition and delicious, healthy recipes for every lifestyle.
                </p>
              </div>
              
              <div>
                <h4 className="mb-6 text-xs font-black uppercase tracking-widest text-brand-ink">Cooking</h4>
                <ul className="space-y-3 text-sm font-bold text-slate-500">
                  <li><Link to="/recipes?cat=breakfast" className="hover:text-brand-green transition-colors">Breakfast</Link></li>
                  <li><Link to="/recipes?cat=lunch" className="hover:text-brand-green transition-colors">Lunch</Link></li>
                  <li><Link to="/recipes?cat=dinner" className="hover:text-brand-green transition-colors">Dinner</Link></li>
                  <li><Link to="/recipes?cat=main-dishes" className="hover:text-brand-green transition-colors">Main Dishes</Link></li>
                  <li><Link to="/recipes?cat=desserts" className="hover:text-brand-green transition-colors">Desserts</Link></li>
                  <li><Link to="/recipes?cat=drinks" className="hover:text-brand-green transition-colors">Drinks</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-6 text-xs font-black uppercase tracking-widest text-brand-ink">Support</h4>
                <ul className="space-y-3 text-sm font-bold text-slate-500">
                  <li><Link to="/about" className="hover:text-brand-green transition-colors">About Hreefrecipy</Link></li>
                  <li><Link to="/guides" className="hover:text-brand-green transition-colors">Cooking Guides</Link></li>
                  <li><Link to="/help" className="hover:text-brand-green transition-colors">Help & FAQ</Link></li>
                  <li><Link to="/contact" className="hover:text-brand-green transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-6 text-xs font-black uppercase tracking-widest text-brand-ink">Legal</h4>
                <ul className="space-y-3 text-sm font-bold text-slate-500">
                  <li><Link to="/privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-brand-green transition-colors">Terms of Service</Link></li>
                  <li><Link to="/data-preference" className="hover:text-brand-green transition-colors">Data Preference</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 border-t border-slate-50 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
                © 2026 Hreefrecipy. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a 
                  href="https://www.pinterest.com/hreefrecipy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-green transition-colors"
                  aria-label="Pinterest"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.12 1.1.34 2.269.521 3.483.521 6.621 0 11.988-5.366 11.988-11.987S18.638 0 12.017 0z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-green transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent("Check out Hreefrecipy for amazing healthy recipes!")}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-green transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* AI Assistant FAB */}
        <button
          onClick={() => setIsAIChatOpen(true)}
          className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-xl shadow-brand-green/30 transition-transform hover:scale-105 active:scale-95 lg:bottom-10 lg:right-10"
        >
          <MessageSquare size={24} />
        </button>

        <AIChat isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
        </div>
      </Router>
    </AppProvider>
  );
}
