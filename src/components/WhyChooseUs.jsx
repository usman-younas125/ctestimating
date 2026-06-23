import { motion } from 'framer-motion';
import { Target, Clock, Award, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Unmatched Accuracy',
      description: 'We utilize advanced software and rigorous cross-checking protocols to ensure 98%+ accuracy on all takeoffs.',
      icon: <Target className="w-10 h-10 text-white" />,
      color: 'bg-brand-blue'
    },
    {
      title: 'Fast Turnaround',
      description: 'Meet your tight deadlines with our standard 24-48 hour turnaround times without compromising quality.',
      icon: <Clock className="w-10 h-10 text-white" />,
      color: 'bg-brand-dark'
    },
    {
      title: 'Experienced Team',
      description: 'Our estimators have deep backgrounds in commercial and residential construction project management.',
      icon: <Award className="w-10 h-10 text-white" />,
      color: 'bg-brand-light'
    },
    {
      title: 'Competitive Pricing',
      description: 'Transparent, flat-rate pricing models that provide excellent ROI by winning you more profitable jobs.',
      icon: <DollarSign className="w-10 h-10 text-brand-dark" />,
      color: 'bg-white border-2 border-brand-gray'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 leading-tight">
              The CT Estimating Advantage
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              We don't just count materials; we provide strategic insights. Partnering with us means you're adding a dedicated, highly skilled estimating department to your company for a fraction of the cost.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-md text-white bg-brand-dark hover:bg-gray-800 transition-colors duration-300"
            >
              Partner With Us
            </a>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${feature.color} rounded-2xl p-8 shadow-lg`}
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h4 className={`text-xl font-bold mb-3 ${feature.color.includes('bg-white') ? 'text-brand-dark' : 'text-white'}`}>
                  {feature.title}
                </h4>
                <p className={`${feature.color.includes('bg-white') ? 'text-gray-600' : 'text-gray-200'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
