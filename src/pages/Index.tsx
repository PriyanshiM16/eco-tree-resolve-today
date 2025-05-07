
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import Solutions from '@/components/Solutions';
import PhotoGallery from '@/components/PhotoGallery';
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
      <PhotoGallery />
      <Discovery />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
