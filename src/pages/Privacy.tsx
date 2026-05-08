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
      
      <div className="space-y-8 text-slate-600 text-lg leading-relaxed">
        <p className="text-sm font-bold text-slate-400 mb-8 border-b border-slate-100 pb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-2xl font-bold text-brand-ink">1. Information Collection and Use</h2>
          <p>
            At Hreef Recipy, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Hreef Recipy and how we use it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">2. Log Files</h2>
          <p>
            Hreef Recipy follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">3. Cookies and Web Beacons</h2>
          <p>
            Like any other website, Hreef Recipy uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>
        </section>

        <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <h2 className="text-xl font-bold text-brand-ink">4. Google DoubleClick DART Cookie</h2>
          <p className="text-sm mt-4">
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. We use Google AdSense to serve ads on our website. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
          </p>
          <p className="text-sm mt-2">
            Users may opt-out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-brand-green underline">Ads Settings</a>. Alternatively, you can opt-out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info" className="text-brand-green underline">www.aboutads.info</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">5. Our Advertising Partners</h2>
          <p>
            Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li>Google: <a href="https://policies.google.com/technologies/ads" className="text-brand-green underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">6. Privacy Policies</h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the advertising partners of Hreef Recipy. Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Hreef Recipy, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">7. Third Party Privacy Policies</h2>
          <p>
            Hreef Recipy's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">8. Children's Information</h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Hreef Recipy does not knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-ink mt-8">9. Online Privacy Policy Only</h2>
          <p>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Hreef Recipy. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
