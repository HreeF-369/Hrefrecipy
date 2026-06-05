import { motion } from "motion/react";
import { BookOpen, Clock, ChevronRight, Sparkles, Flame, Brain } from "lucide-react";
import { Link } from "react-router-dom";

import { BLOG_POSTS } from "../services/blogData";

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto max-w-6xl px-4 py-20 lg:py-32"
    >
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-brand-green mb-6">
          <BookOpen size={16} />
          <span className="text-xs font-black uppercase tracking-widest">Hreef Editorial</span>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-brand-ink sm:text-4xl md:text-5xl lg:text-6xl mb-6">Culinary Journal</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Deep dives into nutrition, cooking techniques, and the science behind professional healthy meals.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <Link to={`/blog/${post.id}`} className="absolute inset-0 z-10" />
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 p-8 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-100">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <Clock size={12} />
                  {post.readTime}
                </div>
              </div>
              <h2 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-green transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
                <div className="flex items-center gap-1 text-xs font-black text-brand-green group-hover:gap-2 transition-all">
                  Read Article
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-20 rounded-[3rem] bg-brand-ink p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-green rounded-full opacity-10 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-4">Join Our Premium Newsletter</h2>
          <p className="text-slate-400 max-w-sm mx-auto mb-8">
            Get exclusive chef tips and nutrition plans delivered straight to your inbox every Sunday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your professional email"
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
            <button className="px-8 py-4 bg-brand-green text-white rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-brand-green/20">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
