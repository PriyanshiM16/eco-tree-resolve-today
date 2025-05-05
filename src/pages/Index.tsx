
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import Solutions from '@/components/Solutions';
import Discovery from '@/components/Discovery';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Challenges />
      <Solutions />
      <Discovery />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
