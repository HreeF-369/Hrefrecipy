import { motion } from "motion/react";
import { Utensils, Heart } from "lucide-react";

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
        <h1 className="text-4xl font-black tracking-tight text-brand-ink sm:text-5xl">About Hreefrecipy</h1>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl">
          Fuel your body, master your health. We believe cooking should be intuitive, joyful, and deeply personal.
        </p>
      </div>

      <div className="space-y-6 text-slate-600 text-lg leading-relaxed mx-auto">
        <h2 className="text-2xl font-bold text-brand-ink mt-8 border-b pb-2 border-slate-100">Our Story</h2>
        <p>
          Hreefrecipy started with a simple idea: healthy eating shouldn't be complicated. We noticed that many recipe sites were cluttered with life stories, popup ads, and confusing measurements. We wanted a clean, fast, and intelligent platform that helps you plan meals, track groceries, and cook with confidence.
        </p>
        
        <h2 className="text-2xl font-bold text-brand-ink mt-8 border-b pb-2 border-slate-100">Our Mission</h2>
        <p>
          Our mission is to empower everyone to cook delicious, nutritious meals regardless of their culinary background or lifestyle constraints. Whether you're a fitness enthusiast looking for high-protein meals or a busy parent needing a quick dinner, we have you covered.
        </p>

        <div className="py-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
             <Utensils className="h-8 w-8 text-brand-green mb-4" />
             <h3 className="text-xl font-bold mt-0 text-brand-ink mb-2">Curated Recipes</h3>
             <p className="text-sm m-0 leading-normal">We handpick and organize meals so you don't have to guess what's healthy or easy to make.</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
             <Heart className="h-8 w-8 text-brand-orange mb-4" />
             <h3 className="text-xl font-bold mt-0 text-brand-ink mb-2">Health-Focused</h3>
             <p className="text-sm m-0 leading-normal">Nutrition facts and categorizations that align with your dietary goals and fitness lifestyle.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
