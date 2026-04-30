import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I add a meal to my weekly planner?",
    answer: "Simply browse our recipe catalog, click on any recipe you like, and use the 'Add to Planner' button inside the recipe description. You can select which day of the week to slot it into."
  },
  {
    question: "How do I print a grocery list?",
    answer: "Go to the 'Grocery' tab from the main navigation. Once your list is populated (either manually or from your meal planner), click the 'Print List' button in the top right corner. It will format the page neatly for your printer."
  },
  {
    question: "Are the nutritional facts accurate?",
    answer: "Our nutritional information is estimated based on standard ingredients and serving portions. It serves as a helpful guide for your dietary goals, but if you have strict medical dietary requirements, we recommend calculating the exact macros using your specific brand of ingredients."
  },
  {
    question: "Can I use Hreefrecipy on my phone?",
    answer: "Yes! Our platform is fully responsive. You can view your recipes, check off items on your grocery list, and manage your planner seamlessly on any mobile device."
  }
];

export default function HelpFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mx-auto max-w-3xl px-4 py-20 lg:py-32"
    >
      <h1 className="text-4xl font-black tracking-tight text-brand-ink sm:text-5xl mb-4 text-center">Help & FAQ</h1>
      <p className="text-center text-slate-500 mb-12 text-lg">Cooking Guides and answers to common questions.</p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="rounded-2xl border border-slate-100 bg-white overflow-hidden transition-all duration-200 shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
              <h3 className="font-bold text-brand-ink text-lg">{faq.question}</h3>
              <ChevronDown 
                className={`h-5 w-5 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
