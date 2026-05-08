import { motion } from "motion/react";
import { Utensils, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mx-auto max-w-4xl px-4 py-20 lg:py-32"
    >
      <div className="mb-12 text-center flex flex-col items-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-green text-white font-bold text-4xl shadow-lg shadow-brand-green/20">
          H
        </div>
        <h1 className="text-4xl font-black tracking-tight text-brand-ink sm:text-5xl">About Hreef Recipy</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl font-medium">
          Your premier destination for high-performance nutrition and culinary excellence.
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-lg leading-relaxed mx-auto">
        <section>
          <h2 className="text-2xl font-bold text-brand-ink mb-4 border-b pb-2 border-slate-100 flex items-center gap-2">
            <Sparkles className="text-brand-green" size={24} />
            The Hreef Legacy
          </h2>
          <p>
            Hreef Recipes is a passionate culinary project managed by the <strong>AIT OUALHYANE</strong> family. Our heritage is rooted in the belief that modern, healthy cooking should be accessible to everyone without sacrificing the professional quality found in the world's best kitchens.
          </p>
          <p className="mt-4">
            Our mission is to provide high-quality culinary inspiration that combines traditional wisdom with modern nutritional science. Whether you are a professional athlete or a home cook looking to improve your lifestyle, our hand-picked collection is designed to help you succeed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-ink mb-4 border-b pb-2 border-slate-100">The Hreef Standard</h2>
          <p>
            Every recipe on our platform undergoes a rigorous selection process. We focus on nutrient density, preparation efficiency, and, above all, exceptional flavor. Our "Professional Chef" approach means we don't just give you measurements; we give you the confidence to master your kitchen.
          </p>
        </section>
        
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
             <Utensils className="h-8 w-8 text-brand-green mb-4" />
             <h3 className="text-xl font-bold mt-0 text-brand-ink mb-2">Expert Curation</h3>
             <p className="text-sm m-0 leading-normal text-slate-500">Our collection is curated by culinary experts who prioritize whole foods and sustainable eating habits.</p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
             <Heart className="h-8 w-8 text-brand-orange mb-4" />
             <h3 className="text-xl font-bold mt-0 text-brand-ink mb-2">Data-Driven Health</h3>
             <p className="text-sm m-0 leading-normal text-slate-500">Every dish includes precise caloric and macronutrient data to help you stay on track with your fitness goals.</p>
          </div>
        </div>

        <section className="bg-slate-50 rounded-[2.5rem] p-10 text-center">
          <h2 className="text-2xl font-bold text-brand-ink mb-4">Connect With Us</h2>
          <p className="mb-6">Have questions or want to collaborate? We're always open to hearing from our community.</p>
          <div className="flex justify-center gap-4">
             <Link to="/contact" className="px-8 py-3 bg-brand-green text-white rounded-2xl font-bold hover:bg-green-600 transition-all">
               Get in Touch
             </Link>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
