import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    const formData = new FormData(event.target);

    // TODO: Yahan par aap apni Web3Forms ki Access Key dalein
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    
    // Custom subject line
    formData.append("subject", "New Estimate Request from CT Estimating");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-10 md:p-16 bg-brand-dark text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-5 mix-blend-overlay"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to Win More Bids?</h3>
                <p className="text-gray-400 mb-10 leading-relaxed">
                  Fill out the form with your project details, and our team will get back to you with a quote and estimated turnaround time within 2 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-light" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="font-semibold">+1 (678) 261-9352</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-light" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email Us</p>
                      <p className="font-semibold">Info.ctestimating@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-brand-light" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-semibold">Lilburn, GA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:p-16 bg-white">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Request a Free Quote</h3>
              
              {result === "Form Submitted Successfully!" ? (
                <div className="flex flex-col items-center justify-center h-full py-10 text-center animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-2xl font-bold text-brand-dark mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your request has been received. We will get back to you with a quote within 2 hours.</p>
                  <button 
                    onClick={() => setResult("")}
                    className="mt-6 text-brand-blue font-semibold hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors" placeholder="john@company.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                      <select id="service" name="service" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors bg-white">
                        <option value="">Select a service</option>
                        <option value="commercial">Commercial Estimating</option>
                        <option value="residential">Residential Estimating</option>
                        <option value="takeoff">Quantity Takeoff</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                    <textarea id="message" name="message" required rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors" placeholder="Tell us about your project..."></textarea>
                  </div>
                  
                  {/* Web3Forms Honeypot for spam prevention */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue hover:bg-brand-dark disabled:bg-gray-400 text-white font-bold py-4 rounded-lg transition-colors duration-300 shadow-md flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Sending...
                      </span>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                  
                  {result && result !== "Form Submitted Successfully!" && (
                    <p className="text-red-500 text-sm text-center mt-2">{result}</p>
                  )}
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
