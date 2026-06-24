import { useState } from 'react';
import { Menu, X, HardHat, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Process', href: '/#process' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Work Samples', href: '/work-samples' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img src="/ctestimating.png" alt="CT Estimating Logo" className="h-14 w-auto object-contain" />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={
                  link.name === 'Work Samples'
                    ? "text-brand-blue font-bold flex items-center gap-1.5 bg-blue-50 px-4 py-2 rounded-full transition-all duration-300 hover:bg-brand-blue hover:text-white shadow-sm hover:shadow-md"
                    : "relative text-gray-600 hover:text-brand-blue font-medium transition-colors duration-300 group"
                }
              >
                {link.name === 'Work Samples' && <FolderOpen className="w-4 h-4" />}
                {link.name !== 'Work Samples' ? (
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
                  </span>
                ) : (
                  link.name
                )}
              </a>
            ))}
            <a
              href="/#contact"
              className="bg-brand-blue hover:bg-brand-dark text-white px-6 py-2.5 rounded-md font-semibold transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    link.name === 'Work Samples'
                      ? "flex items-center gap-2 px-3 py-2 rounded-md text-base font-bold text-brand-blue bg-blue-50 hover:bg-brand-blue hover:text-white transition-all duration-300"
                      : "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50 transition-colors duration-300"
                  }
                >
                  {link.name === 'Work Samples' && <FolderOpen className="w-5 h-5" />}
                  {link.name}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-brand-blue hover:bg-brand-dark text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
