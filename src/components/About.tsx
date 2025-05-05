
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-babypink/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sagegreen mb-4">
          About the Authors
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 mb-4">
          By Priyanshi, Saima, and Tenzin
        </p>
        <div className="border-b-2 border-babypink w-24 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-b from-babypink/30 to-transparent">
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                  alt="Landscape with sun rays through mountains" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sagegreen mb-2">Climate Change Impact</h3>
                <p className="text-gray-600">The growing evidence of climate shifts affecting ecosystems worldwide requires immediate attention and action.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-b from-babypink/30 to-transparent">
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86" 
                  alt="Low angle photography of trees" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sagegreen mb-2">Forest Conservation</h3>
                <p className="text-gray-600">Preserving our forests is crucial for biodiversity, carbon sequestration, and maintaining ecological balance.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-b from-babypink/30 to-transparent">
            <CardContent className="p-0">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                  alt="Body of water surrounded by trees" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-sagegreen mb-2">Water Resource Protection</h3>
                <p className="text-gray-600">Clean water sources are essential for all life forms and require protection from pollution and overconsumption.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center bg-babypink/20 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-sagegreen mb-4">Our Mission</h3>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We are committed to raising awareness about pressing environmental challenges and empowering individuals and communities with the knowledge and tools to make a positive impact. Through research, education, and advocacy, we strive to create a more sustainable and equitable world for all.
          </p>
          <div className="mt-6">
            <a 
              href="#challenges" 
              className="bg-babypink hover:bg-babypink/80 text-sagegreen px-6 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Learn About the Challenges
            </a>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-babypink leading-tight">
            <span className="text-sagegreen">PRIYANSHI</span> · <span className="text-babypink">SAIMA</span> · <span className="text-sagegreen">TENZIN</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
