import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

// Replace with your real Formspree ID from https://formspree.io
const FORMSPREE_ID = "xojrnkoo"; 

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        // Reset success state after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mx-auto max-w-4xl px-4 py-20 lg:py-32"
    >
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-brand-ink sm:text-3xl md:text-4xl lg:text-5xl mb-4">Contact Us</h1>
        <p className="text-slate-500 text-lg">We'd love to hear from you. Get in touch with our team.</p>
      </div>

      <div className="flex flex-row overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory space-x-4 w-full px-4 md:px-0 md:space-x-0 md:grid md:grid-cols-3 md:gap-8 mb-16">
        <div className="w-[85%] sm:w-[300px] shrink-0 snap-center md:w-full rounded-3xl bg-white p-8 text-center shadow-lg shadow-slate-100/50 border border-slate-100">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-brand-ink">Email Us</h3>
          <p className="text-sm text-slate-500 mb-4">For general inquiries and support.</p>
          <a href="mailto:support@dishfit.net" className="text-brand-green font-bold hover:underline">
            support@dishfit.net
          </a>
        </div>

        <div className="w-[85%] sm:w-[300px] shrink-0 snap-center md:w-full rounded-3xl bg-white p-8 text-center shadow-lg shadow-slate-100/50 border border-slate-100">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-brand-ink">Feedback</h3>
          <p className="text-sm text-slate-500 mb-4">Have a recipe suggestion?</p>
          <a href="mailto:feedback@dishfit.net" className="text-brand-orange font-bold hover:underline">
             Share Feedback
          </a>
        </div>

        <div className="w-[85%] sm:w-[300px] shrink-0 snap-center md:w-full rounded-3xl bg-white p-8 text-center shadow-lg shadow-slate-100/50 border border-slate-100">
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

      <div className="max-w-2xl mx-auto rounded-3xl bg-white shadow-xl shadow-slate-100 border border-slate-100 p-8 md:p-12 relative overflow-hidden">
        <h3 className="text-2xl font-bold mb-8 text-center text-brand-ink">Send us a message</h3>
        
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key="success"
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <div className="h-20 w-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h4 className="text-2xl font-bold text-brand-ink mb-2">Message Sent!</h4>
              <p className="text-slate-500 max-w-xs mx-auto">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-brand-green font-bold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6" 
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100">
                  <AlertCircle size={18} />
                  <span>Something went wrong. Please try again or email us directly.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "loading"}
                className={`w-full text-white font-bold rounded-xl py-4 shadow-lg transition-all flex items-center justify-center gap-2 ${
                  status === "loading" 
                    ? "bg-slate-400 cursor-not-allowed" 
                    : "bg-brand-green shadow-brand-green/20 hover:scale-[1.02] active:scale-95"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
