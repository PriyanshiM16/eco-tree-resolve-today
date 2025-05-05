
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-babypink/30 to-sagegreen/30 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sagegreen mb-6">
          Make the World a Better Place
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 mb-8">
          Together, we can address environmental challenges and create a sustainable future for generations to come.
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="#challenges" 
            className="bg-sagegreen hover:bg-sagegreen/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Learn More
          </a>
          <a 
            href="#solutions" 
            className="bg-white border border-sagegreen text-sagegreen hover:bg-sagegreen/10 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Take Action
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
