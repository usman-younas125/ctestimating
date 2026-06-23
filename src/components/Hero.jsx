import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ctestimating.png"
          alt="CT Estimating Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply"></div>
        {/* Additional gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-light font-bold tracking-wider uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-light block"></span>
              CT Estimating
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Turn Your Bids Into <span className="text-brand-light">High-Value Deals</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Premium clients don't look for the cheapest option — they choose bids that reflect quality, confidence, and professionalism. Winning bids start with accurate estimates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-white bg-brand-blue hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-brand-blue/30 group"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-md text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                <FileText className="ml-0 mr-2 h-5 w-5" />
                Our Services
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/20 pt-8"
          >
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-gray-400 font-medium">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24-48h</div>
              <div className="text-sm text-gray-400 font-medium">Turnaround Time</div>
            </div>
            <div className="hidden md:block">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-400 font-medium">Projects Estimated</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
