import { motion } from "motion/react";
import { Search, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mx-auto max-w-3xl px-4 py-20 lg:py-32 flex flex-col items-center text-center h-[70vh] justify-center"
    >
      <div className="w-24 h-24 bg-red-50 rounded-[2rem] flex items-center justify-center text-red-400 mb-8 transform rotate-12">
        <Search size={40} className="-rotate-12" />
      </div>
      
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-brand-ink sm:text-4xl md:text-5xl lg:text-6xl mb-6">404</h1>
      <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl mb-4">Page Not Found</h2>
      
      <p className="text-slate-500 text-lg leading-relaxed max-w-lg mb-10">
        Oops! We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
         <Link 
           to="/"
           className="flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-brand-green/20"
         >
           <Home size={20} />
           Back to Home
         </Link>
         <Link 
           to="/recipes"
           className="flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 border border-slate-200 transition-colors"
         >
           Browse Recipes
           <ArrowRight size={20} />
         </Link>
      </div>
    </motion.div>
  );
}
