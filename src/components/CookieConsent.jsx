import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      // Show after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 p-4 z-[100] pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-brand-dark/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 pointer-events-auto border border-gray-700/50 flex flex-col md:flex-row items-center gap-6">
            
            <div className="flex-shrink-0 bg-brand-blue/20 p-3 rounded-full">
              <Cookie className="w-8 h-8 text-brand-light" />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h4 className="text-white font-bold text-lg mb-2">We value your privacy</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            
            <div className="flex flex-shrink-0 gap-3 w-full md:w-auto">
              <button 
                onClick={() => setIsVisible(false)}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-sm font-semibold"
              >
                Decline
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-light text-white transition-colors text-sm font-semibold shadow-lg shadow-brand-blue/30"
              >
                Accept All
              </button>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors hidden md:block"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
