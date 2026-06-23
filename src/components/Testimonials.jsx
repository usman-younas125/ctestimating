import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'James Wilson',
      company: 'Wilson General Contractors',
      content: "CT Estimating has been a game-changer for our bidding process. Their takeoffs are incredibly detailed and accurate, allowing us to bid on larger commercial projects with absolute confidence. We've won 3 major bids since partnering with them.",
      rating: 5
    },
    {
      name: 'Sarah Jenkins',
      company: 'Jenkins Custom Homes',
      content: "The turnaround time is fantastic. I often need estimates turned around in 48 hours for demanding clients, and they always deliver without missing a single detail. It's like having an in-house estimating department.",
      rating: 5
    },
    {
      name: 'Michael Torres',
      company: 'Torres & Sons Builders',
      content: "Their material cost breakdowns are spot on with local pricing. It saves me hours of calling suppliers and trying to piece together a budget. Highly professional and very responsive team.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">What Our Clients Say</h3>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Here's how we've helped other contractors grow their business.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-md relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-gray" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "{review.content}"
              </p>
              <div>
                <h4 className="font-bold text-brand-dark">{review.name}</h4>
                <p className="text-sm text-brand-blue font-medium">{review.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
