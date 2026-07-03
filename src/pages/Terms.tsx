import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mx-auto max-w-3xl px-4 py-20 lg:py-32"
    >
      <Helmet>
        <title>Terms of Service | DishFit</title>
        <meta name="description" content="Review the Terms of Service and Terms of Use for accessing and using the DishFit application." />
        <link rel="canonical" href="https://dishfit.net/terms" />
      </Helmet>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-brand-ink sm:text-3xl md:text-4xl lg:text-5xl mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
         <p className="text-sm font-bold text-slate-400 mb-8 border-b border-slate-100 pb-8">Last updated: {new Date().toLocaleDateString()}</p>
         
         <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">1. Acceptance of Terms</h2>
          <p>By accessing and using DishFit, you accept and agree to be bound by the terms and provision of this agreement. Use of our services constitutes acceptance of these terms in full.</p>
         </section>

         <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">2. Intellectual Property</h2>
          <p>The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws. You may not reproduce, download, transmit, or distribute any part of this website without prior written consent, except for personal, non-commercial use.</p>
         </section>

         <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">3. User Conduct</h2>
          <p>Users agree to use DishFit only for lawful purposes. You are prohibited from posting or transmitting any material that is defamatory, offensive, or otherwise violates the rights of others.</p>
         </section>

         <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">4. Disclaimer of Warranties</h2>
          <p>The recipes and nutritional information are provided for informational purposes only. DishFit does not warrant the accuracy or completeness of this information. Users should consult with health professionals before starting any new diet.</p>
         </section>

         <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">5. Limitation of Liability</h2>
          <p>DishFit shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or for the cost of procurement of substitute goods and services.</p>
         </section>

         <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">6. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which DishFit operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
         </section>
      </div>
    </motion.div>
  );
}
