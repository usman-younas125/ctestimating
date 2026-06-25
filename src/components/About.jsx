import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How Long do Estimates Take?',
      a: 'Because of our continuous workload and the need to obtain the most recent costs for your project, we strive to have estimates ready in three to five working days.',
    },
    {
      q: 'Why should I choose CT Estimating?',
      a: 'In order to deliver a personalized cost estimation service, CT Estimating collaborates with you to identify your priorities. It makes it possible for us to deliver you a customized report that will make it easier to evaluate return tenders and provide you a deeper understanding of the whole building process, ultimately resulting in more seamless projects.',
    },
    {
      q: 'Why is CT Estimator Different from other Services?',
      a: 'CT estimator provides a distinct project estimating service, which we are able to provide thanks to our solid working connections with regional vendors and professionals. It implies that the estimate you get will be more accurate because local labor and material rates were used instead of depending on national averages.',
    },
    {
      q: 'What do You Need to do a Takeoff or Electrical Estimate?',
      a: 'Regarding an estimated price that includes costs and turnaround time, could you kindly email us the project drawings/plans and your takeoff / electrical estimate requirements? We will email you an invoice that you may pay online once the proposal has been approved.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Info Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-8 leading-tight">
              Frequently Asked <span className="text-brand-blue">Questions</span>
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white/40 bg-white/40 backdrop-blur-md rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left bg-transparent hover:bg-white/50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-brand-dark text-sm pr-4">{faq.q}</span>
                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-brand-blue text-white rotate-180' : 'bg-orange-100 text-orange-500'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 pt-1 text-gray-700 text-sm leading-relaxed bg-transparent">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 leading-tight">
              CT Estimating <span className="text-brand-blue">LLC</span>
            </h3>
            <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-4">Registered in Georgia</p>
            <p className="text-gray-600 mb-5 text-base leading-relaxed">
              At CT Estimating, LLC, we believe that high-performance design is good design. Our range of in-house expertise enables us to work in a way that is holistic, integrative, and data-driven.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              Beginning in the earliest stages of a project, we use software tools to help us understand how our design decisions are impacting energy use, the quality of the indoor environment, and carbon emissions, to name a few. Throughout the design, we use iterative modeling to optimize both passive strategies and active systems, enabling a design process that often results in a higher-performing building without compromising project schedules and budgets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {["Precise Material Quantity Takeoffs","Accurate Labor Cost Estimation","Detailed Bid Preparation","Expert Value Engineering","Comprehensive Feasibility Studies","Dedicated Project Support"].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-light h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-gray flex items-center justify-center border-2 border-brand-blue">
                <span className="text-brand-dark font-bold text-xl">15+</span>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark">Years of Experience</h4>
                <p className="text-sm text-gray-500">Trusted by industry leaders</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

