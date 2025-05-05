
import React from 'react';

const Discovery = () => {
  return (
    <section id="discovery" className="py-16 bg-sagegreen text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          How We Discovered This Problem
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-xl backdrop-blur-sm">
          <p className="text-lg mb-6">
            Through extensive research and collaboration with environmental scientists, we identified that the core of many environmental issues stems from resource allocation and waste management challenges.
          </p>
          
          <p className="text-lg mb-6">
            <strong className="text-babypink">Our key finding:</strong> "There are limited resources available to reduce litter which causes pollution and high risk factors."
          </p>
          
          <p className="text-lg mb-6">
            This insight led us to analyze existing systems and identify critical gaps in sustainability practices worldwide. Our research revealed that while awareness of environmental issues has grown significantly, there remains a substantial disconnect between knowledge and action.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/20 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 text-babypink">Research</h3>
              <p>Analyzed 200+ scientific papers and environmental reports from leading global institutions.</p>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 text-babypink">Collaboration</h3>
              <p>Worked with environmental scientists, policy makers, and community leaders to understand the full scope of challenges.</p>
            </div>
            
            <div className="bg-white/20 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 text-babypink">Solutions</h3>
              <p>Developed evidence-based recommendations that can be implemented at individual, community, and policy levels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery;
