import { motion } from "motion/react";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex min-h-[50vh] flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-3xl font-bold text-brand-ink mb-4">{title}</h1>
      <p className="text-slate-500 max-w-md">
        This is a placeholder page for {title}. Content will be added soon.
      </p>
    </motion.div>
  );
}
