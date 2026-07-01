import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Disclaimer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mx-auto max-w-3xl px-4 py-20 lg:py-32"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-brand-ink sm:text-3xl md:text-4xl lg:text-5xl mb-8">Disclaimer</h1>
      
      <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
         <p className="text-sm font-bold text-slate-400 mb-8 border-b border-slate-100 pb-8">Last updated: {new Date().toLocaleDateString()}</p>
         
         <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">1. General Information</h2>
          <p>The information provided by DishFit ("we," "us," or "our") on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
         </section>

         <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">2. Health and Nutrition Disclaimer</h2>
          <p>The site offers health, fitness, and nutritional information and is designed for educational purposes only. You should not rely on this information as a substitute for, nor does it replace, professional medical advice, diagnosis, or treatment. If you have any concerns or questions about your health, you should always consult with a physician or other health-care professional.</p>
          <p className="mt-4">The use or reliance of any information contained on the site is solely at your own risk. We are not a medical organization and our staff cannot give you medical advice or diagnosis. Nothing contained as part of this website should be construed as such advice or diagnosis.</p>
         </section>

         <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">3. Affiliates Disclaimer</h2>
          <p>The site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include but may not be limited to Google AdSense.</p>
         </section>

         <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">4. External Links Disclaimer</h2>
          <p>The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
         </section>

         <div className="mt-12 p-6 bg-slate-50 border border-slate-100 rounded-2xl text-sm">
           <p>For more details on how we handle your data, please visit our <Link to="/privacy" className="text-brand-green font-bold hover:underline">Privacy Policy</Link> and <Link to="/terms" className="text-brand-green font-bold hover:underline">Terms of Service</Link>.</p>
         </div>
      </div>
    </motion.div>
  );
}
