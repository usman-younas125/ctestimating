import { motion } from 'framer-motion';
import { Calculator, Box, Users, FileSignature, Home, Building2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Quantity Takeoff',
      description: 'Comprehensive and precise measurement of materials required for your project from digital blueprints.',
      icon: <Calculator className="w-8 h-8 text-brand-light" />,
    },
    {
      title: 'Material Estimation',
      description: 'Detailed breakdown of material costs based on current, localized market pricing databases.',
      icon: <Box className="w-8 h-8 text-brand-light" />,
    },
    {
      title: 'Labor Cost Estimation',
      description: 'Accurate projections of labor hours and costs tailored to regional wage rates and project complexity.',
      icon: <Users className="w-8 h-8 text-brand-light" />,
    },
    {
      title: 'Bid Preparation',
      description: 'Complete, professional bid packages ready for submission, increasing your chances of winning.',
      icon: <FileSignature className="w-8 h-8 text-brand-light" />,
    },
    {
      title: 'Residential Estimating',
      description: 'Specialized estimation for single-family homes, multi-family units, and custom residential builds.',
      icon: <Home className="w-8 h-8 text-brand-light" />,
    },
    {
      title: 'Commercial Estimating',
      description: 'In-depth cost analysis for commercial, industrial, retail, and institutional construction projects.',
      icon: <Building2 className="w-8 h-8 text-brand-light" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Comprehensive Estimating Solutions</h3>
            <p className="text-gray-600 text-lg">
              We provide a full spectrum of estimation services designed to streamline your bidding process and protect your profit margins.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-brand-gray rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors duration-300">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
