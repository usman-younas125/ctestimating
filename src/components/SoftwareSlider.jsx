import React from 'react';

const SoftwareSlider = () => {
  const softwareLogos = [
    { name: 'Bluebeam', src: '/Bluebeam-Logo1.png' },
    { name: 'CallidusCloud', src: '/CallidusCloud-removebg-preview.png' },
    { name: 'PlanSwift', src: '/PlanSwift_by_ConstructConnect.png' },
    { name: 'RSMeans', src: '/rsmeans-data-from-gordian-hd-png-download (1).png' },
  ];

  // Duplicating the array a few times to ensure smooth infinite scrolling
  const scrollItems = [...softwareLogos, ...softwareLogos, ...softwareLogos, ...softwareLogos];

  return (
    <section className="py-16 bg-white overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-3xl font-bold text-center text-brand-dark mb-2">Software We Use</h2>
        <p className="text-center text-gray-500">Industry-leading tools for accurate estimating</p>
      </div>
      
      {/* Marquee container */}
      <div className="relative w-full flex items-center h-24 group">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] space-x-16 items-center">
          {scrollItems.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-48 flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={logo.src} 
                alt={logo.name} 
                loading="lazy"
                decoding="async"
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSlider;
