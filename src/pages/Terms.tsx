import { motion } from "motion/react";

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mx-auto max-w-3xl px-4 py-20 lg:py-32"
    >
      <h1 className="text-4xl font-black tracking-tight text-brand-ink sm:text-5xl mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
         <p className="text-sm font-bold text-slate-400 mb-8 border-b border-slate-100 pb-8">Last updated: {new Date().toLocaleDateString()}</p>
         
         <h2 className="text-2xl font-bold text-brand-ink mt-8">1. Acceptance of Terms</h2>
         <p>By accessing and using Hreefrecipy, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>

         <h2 className="text-2xl font-bold text-brand-ink mt-8">2. Description of Service</h2>
         <p>Hreefrecipy provides users with access to recipe curations, meal planning tools, and grocery list generators. We reserve the right to modify or discontinue any feature at any time without notice.</p>

         <h2 className="text-2xl font-bold text-brand-ink mt-8">3. User Accounts</h2>
         <p>When you create an account using Google OAuth, you agree to maintain the security of your password and accept all risks of unauthorized access to your account and the information you provide.</p>

         <h2 className="text-2xl font-bold text-brand-ink mt-8">4. Acceptable Use</h2>
         <p>You agree not to use the platform in any way that causes damage to the website or impairment of the availability or accessibility of Hreefrecipy. The recipes and content are for personal, non-commercial use only.</p>

         <h2 className="text-2xl font-bold text-brand-ink mt-8">5. Limitation of Liability</h2>
         <p>In no event shall Hreefrecipy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
      </div>
    </motion.div>
  );
}
