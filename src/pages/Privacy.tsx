import { motion } from "motion/react";

export default function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mx-auto max-w-3xl px-4 py-20 lg:py-32"
    >
      <h1 className="text-4xl font-black tracking-tight text-brand-ink sm:text-5xl mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
        <p className="text-sm font-bold text-slate-400 mb-8 border-b border-slate-100 pb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold text-brand-ink mt-8">1. Introduction</h2>
        <p>
          Welcome to Hreefrecipy ("we", "our", or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
        </p>

        <h2 className="text-2xl font-bold text-brand-ink mt-8">2. Data We Collect</h2>
        <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Identity Data:</strong> First name, last name, username (when using Google OAuth).</li>
          <li><strong>Contact Data:</strong> Email address.</li>
          <li><strong>Usage Data:</strong> Information about how you use our recipe planner, saved favorites, and grocery lists.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-ink mt-8">3. How We Use Your Data</h2>
        <p>We will only use your personal data for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To register you as a new user via Google Authentication.</li>
          <li>To manage your personalized recipe collections and weekly planners.</li>
          <li>To generate and sync your grocery lists securely.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-ink mt-8">4. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. Your grocery lists and meal plans are private to your account.
        </p>

        <h2 className="text-2xl font-bold text-brand-ink mt-8">5. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws concerning your personal data, including the right to request access, correction, or erasure of your personal data.
        </p>
      </div>
    </motion.div>
  );
}
