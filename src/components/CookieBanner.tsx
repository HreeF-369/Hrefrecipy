import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Add a small delay so it doesn't pop up immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    if (typeof (window as any).loadGTM === "function") {
      try {
        (window as any).loadGTM();
      } catch (err) {
        console.error("Error triggering GTM load:", err);
      }
    }
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 md:px-8 md:pb-8 pointer-events-none print:hidden"
        >
          <div className="mx-auto max-w-4xl bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 sm:p-6 pointer-events-auto flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Cookie size={20} />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-800">We value your privacy</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/privacy" className="text-brand-green hover:underline">Privacy Policy</Link> for more information.
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-auto items-center gap-3 shrink-0">
              <button
                onClick={declineCookies}
                className="flex-1 md:flex-none px-4 py-2 text-sm font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 md:flex-none px-4 py-2 text-sm font-bold text-white bg-brand-ink rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
