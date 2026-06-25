import { motion } from 'framer-motion';
import { UploadCloud, Search, PenTool, Send } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: 'Submit Plans',
      description: 'Upload your digital blueprints and project specifications through our secure portal.',
      icon: <UploadCloud className="w-8 h-8 text-blue-500" />,
      stepNum: '01'
    },
    {
      title: 'Review & Scope',
      description: 'Our team reviews the documents and provides a formal quote and turnaround time.',
      icon: <Search className="w-8 h-8 text-blue-500" />,
      stepNum: '02'
    },
    {
      title: 'Estimation',
      description: 'We perform a detailed takeoff and cost analysis using the latest market data.',
      icon: <PenTool className="w-8 h-8 text-blue-500" />,
      stepNum: '03'
    },
    {
      title: 'Delivery',
      description: 'Receive your comprehensive, Excel-formatted estimate ready for bid submission.',
      icon: <Send className="w-8 h-8 text-blue-500" />,
      stepNum: '04'
    }
  ];

  return (
    <section id="process" className="py-20 bg-brand-dark relative overflow-hidden">

      {/* === GIF Background === */}
      <div className="absolute inset-0 z-0">
        <img
          src="/estimation.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-brand-dark/85"></div>
      </div>
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-light/10 blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-light font-bold tracking-wider uppercase text-sm mb-2">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Streamlined Process</h3>
            <p className="text-gray-400 text-lg">
              We've designed our workflow to be as simple and efficient as possible, saving you time and hassle.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connection line for desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-gray-800 -z-10">
                  <div className="h-full bg-brand-blue w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              )}

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#1e293b] border-4 border-[#0f172a] flex items-center justify-center mb-6 relative group-hover:bg-[#334155] transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                  {step.icon}
                  <div className="absolute -top-1 -right-2 w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-[#0f172a] shadow-lg">
                    {step.stepNum}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

