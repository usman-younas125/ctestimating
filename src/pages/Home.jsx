import React from 'react';
import Hero from '../components/Hero';
import SoftwareSlider from '../components/SoftwareSlider';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <SoftwareSlider />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
