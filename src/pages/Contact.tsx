import { motion } from "motion/react";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mx-auto max-w-4xl px-4 py-20 lg:py-32"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black tracking-tight text-brand-ink sm:text-5xl mb-4">Contact Us</h1>
        <p className="text-slate-500 text-lg">We'd love to hear from you. Get in touch with our team.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <div className="rounded-3xl bg-white p-8 text-center shadow-lg shadow-slate-100/50 border border-slate-100">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-brand-ink">Email Us</h3>
          <p className="text-sm text-slate-500 mb-4">For general inquiries and support.</p>
          <a href="mailto:support@hreefrecipy.com" className="text-brand-green font-bold hover:underline">
            support@hreefrecipy.com
          </a>
        </div>

        <div className="rounded-3xl bg-white p-8 text-center shadow-lg shadow-slate-100/50 border border-slate-100">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-brand-ink">Feedback</h3>
          <p className="text-sm text-slate-500 mb-4">Have a recipe suggestion?</p>
          <a href="mailto:feedback@hreefrecipy.com" className="text-brand-orange font-bold hover:underline">
             Share Feedback
          </a>
        </div>

        <div className="rounded-3xl bg-white p-8 text-center shadow-lg shadow-slate-100/50 border border-slate-100">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-brand-ink">Office</h3>
          <p className="text-sm text-slate-500">
            123 Healthy Way<br />
            Nutrition City, NC 90210
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto rounded-3xl bg-white shadow-xl shadow-slate-100 border border-slate-100 p-8 md:p-12">
        <h3 className="text-2xl font-bold mb-8 text-center text-brand-ink">Send us a message</h3>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
              <input type="text" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
              <input type="text" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
            <input type="email" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
            <textarea rows={4} className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-green text-white font-bold rounded-xl py-4 shadow-lg shadow-brand-green/20 hover:scale-[1.02] active:scale-95 transition-all">
            Send Message
          </button>
        </form>
      </div>

    </motion.div>
  );
}
