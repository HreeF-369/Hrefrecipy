/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, Link, useNavigate } from "react-router-dom";
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
  Dumbbell,
  Sparkles,
  Heart,
  BookOpen
} from "lucide-react";
import { useState, useEffect, lazy, Suspense } from "react";
import { AppProvider } from "./context/AppContext.js";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Eagerly loaded entry page for maximum initial speed
import Home from "./pages/Home.js";

// Lazy-loaded pages to code-split Javascript and reduce bundle size
const Recipes = lazy(() => import("./pages/Recipes.js"));
const RecipeDetail = lazy(() => import("./pages/RecipeDetail.js"));
const CookMode = lazy(() => import("./pages/CookMode.js"));
const Planner = lazy(() => import("./pages/Planner.js"));
const GroceryList = lazy(() => import("./pages/GroceryList.js"));
const Favorites = lazy(() => import("./pages/Favorites.js"));
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage.js"));
const About = lazy(() => import("./pages/About.js"));
const HelpFAQ = lazy(() => import("./pages/HelpFAQ.js"));
const Privacy = lazy(() => import("./pages/Privacy.js"));
const Terms = lazy(() => import("./pages/Terms.js"));
const Disclaimer = lazy(() => import("./pages/Disclaimer.js"));
const Contact = lazy(() => import("./pages/Contact.js"));
const DataPreference = lazy(() => import("./pages/DataPreference.js"));
const Blog = lazy(() => import("./pages/Blog.js"));
const BlogPost = lazy(() => import("./pages/BlogPost.js"));
const NotFound = lazy(() => import("./pages/NotFound.js"));
const AIChat = lazy(() => import("./components/AIChat.js"));

import CookieBanner from "./components/CookieBanner.js";
import { ErrorBoundary } from "./components/ErrorBoundary.js";


// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navigation = ({ onOpenAI }: { onOpenAI: (open: boolean) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // reset any layout scrolling containers as well
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
    const layoutContainers = document.querySelectorAll('.overflow-y-auto');
    layoutContainers.forEach(container => {
      container.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Recipes", path: "/recipes", icon: Search },
    { name: "Journal", path: "/blog", icon: BookOpen },
    { name: "Favorites", path: "/favorites", icon: Heart },
    { name: "Grocery List", path: "/grocery", icon: ShoppingCart },
    { name: "Breakfast", path: "/?cat=breakfast", icon: Coffee },
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
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between bg-white/80 border-b border-slate-100 p-4 backdrop-blur-xl lg:hidden print:hidden">
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green text-white font-black text-lg">
            D
          </div>
          <span className="font-display text-sm font-bold tracking-tight text-slate-900 uppercase">
            DISHFIT
          </span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
          aria-label={isMobileMenuOpen ? "Close main navigation menu" : "Open main navigation menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Hamburger Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-nav-menu"
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
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    navigate(item.path);
                  }}
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
      <nav className="sticky top-0 hidden h-screen w-[260px] flex-col border-r border-slate-100 bg-white p-6 lg:flex shrink-0 print:hidden">
        <Link to="/" onClick={handleLogoClick} className="mb-12 flex items-center gap-4 hover:opacity-95 transition-opacity">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green text-white font-black text-2xl shadow-lg shadow-brand-green/20">
            D
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-slate-900 uppercase">
            DISHFIT
          </span>
        </Link>

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
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex w-[90%] items-center justify-around rounded-[2.5rem] border border-white/20 bg-white/80 backdrop-blur-2xl p-3 shadow-2xl lg:hidden print:hidden">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            aria-label={item.name}
            className={({ isActive }) =>
              cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300",
                isActive ? "text-brand-green bg-brand-green-light border border-brand-green/10" : "text-slate-400"
              )
            }
          >
            <item.icon size={20} />
            <span className="sr-only">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, search]);

  return null;
}

export default function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen w-full bg-white flex flex-col lg:grid lg:grid-cols-[260px_1fr] relative print:block print:w-full">
          <Navigation onOpenAI={setIsAIChatOpen} />
          
          <main className="pt-20 pb-24 lg:pt-0 lg:pb-0 flex-1 flex flex-col w-full overflow-x-hidden min-w-0 print:pt-0 print:overflow-visible">
            <div className="w-full px-4 py-6 md:px-8 lg:py-12 lg:px-12 flex-1">
                <AnimatePresence mode="wait">
                  <Suspense fallback={
                    <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-4">
                      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-100 border-t-brand-green"></div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Loading Page...</p>
                    </div>
                  }>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/recipes" element={<Recipes />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:id" element={<BlogPost />} />
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
                      <Route path="/disclaimer" element={<Disclaimer />} />
                      <Route path="/data-preference" element={<DataPreference />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </AnimatePresence>
              </div>

              {/* Cookie Consent Banner */}
              <CookieBanner />

              {/* Professional Footer */}
              <footer className="border-t border-slate-100 bg-white pt-16 pb-28 md:pb-32 lg:py-16 mt-auto print:hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                  <div className="grid gap-12 grid-cols-1 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
                      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white font-bold text-xl shadow-lg shadow-brand-green/20">
                          D
                        </div>
                        <span className="font-display text-xl font-bold tracking-tight text-brand-ink">DishFit</span>
                      </Link>
                      <p className="text-sm text-slate-500 leading-relaxed font-semibold max-w-xs mx-auto sm:mx-0">
                        Managed by the AIT OUALHYANE family. Fuel your body, master your health. Personalised nutrition and delicious, healthy recipes for every lifestyle.
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
                        <li><Link to="/recipes?cat=fitness" className="hover:text-brand-green transition-colors">Fitness Meals</Link></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-6 text-xs font-black uppercase tracking-widest text-brand-ink">Support</h4>
                      <ul className="space-y-3 text-sm font-bold text-slate-500">
                        <li><Link to="/about" className="hover:text-brand-green transition-colors">About Us</Link></li>
                        <li><Link to="/blog" className="hover:text-brand-green transition-colors">Culinary Journal</Link></li>
                        <li><Link to="/guides" className="hover:text-brand-green transition-colors">Cooking Guides</Link></li>
                        <li><Link to="/contact" className="hover:text-brand-green transition-colors">Contact Us</Link></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-6 text-xs font-black uppercase tracking-widest text-brand-ink">Legal</h4>
                      <ul className="space-y-3 text-sm font-bold text-slate-500">
                        <li><Link to="/privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-brand-green transition-colors">Terms of Service</Link></li>
                        <li><Link to="/disclaimer" className="hover:text-brand-green transition-colors">Disclaimer</Link></li>
                        <li><Link to="/data-preference" className="hover:text-brand-green transition-colors">Data Preference</Link></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-16 border-t border-slate-50 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      © 2026 DishFit. All rights reserved.
                    </div>
                    <div className="flex gap-4 md:gap-5 justify-center items-center">
                      <a 
                        href="https://www.pinterest.com/aalhyane72/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full text-white bg-[#E60023] shadow-md shadow-red-200 transition-all duration-300 hover:scale-110 hover:bg-[#ad081b] cursor-pointer"
                        aria-label="Pinterest"
                        title="Follow us on Pinterest"
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
                    </div>
                  </div>
                </div>
              </footer>
            </main>
          </div>

        {/* AI Assistant FAB */}
        <button
          onClick={() => setIsAIChatOpen(true)}
          className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-xl shadow-brand-green/30 transition-transform hover:scale-105 active:scale-95 lg:bottom-10 lg:right-10 no-print"
          aria-label="Open AI Chef Assistant Chat"
        >
          <MessageSquare size={24} />
        </button>

        {isAIChatOpen && (
          <Suspense fallback={null}>
            <AIChat isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
          </Suspense>
        )}
      </Router>
    </AppProvider>
  );
}
