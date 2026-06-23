import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const benefits = [
    "Precise Material Quantity Takeoffs",
    "Accurate Labor Cost Estimation",
    "Detailed Bid Preparation",
    "Expert Value Engineering",
    "Comprehensive Feasibility Studies",
    "Dedicated Project Support"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Architectural Blueprint" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-blue rounded-lg -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 border-4 border-brand-light rounded-lg -z-10 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 leading-tight">
              Building Success Through <span className="text-brand-blue">Accurate Estimation</span>
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At CT Estimating, we specialize in delivering highly accurate, comprehensive construction cost estimates and quantity takeoffs. Our expert team empowers contractors, builders, and developers to bid with confidence and win more high-value projects.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With years of industry experience, we understand that precision is the foundation of profitability. We utilize advanced tools and methodologies to ensure every detail of your project is accounted for.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-light h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-gray flex items-center justify-center border-2 border-brand-blue">
                  <span className="text-brand-dark font-bold text-xl">15+</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Years of Experience</h4>
                  <p className="text-sm text-gray-500">Trusted by industry leaders</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
