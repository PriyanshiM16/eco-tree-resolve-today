
import React from 'react';
import { TreeDeciduous } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sagegreen text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <TreeDeciduous className="h-8 w-8" />
            <span className="text-2xl font-bold">EcoTree</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div>
              <h3 className="font-bold mb-3 text-babypink">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#challenges" className="hover:text-babypink transition-colors">Challenges</a></li>
                <li><a href="#solutions" className="hover:text-babypink transition-colors">Solutions</a></li>
                <li><a href="#discovery" className="hover:text-babypink transition-colors">Our Discovery</a></li>
                <li><a href="#about" className="hover:text-babypink transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-babypink">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-babypink transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-babypink transition-colors">Environmental Data</a></li>
                <li><a href="#" className="hover:text-babypink transition-colors">Sustainability Tips</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center text-sm">
          <p className="mb-2">
            <span className="text-babypink font-bold">EcoTree:</span> Make the world a better place
          </p>
          <p className="text-white/70">
            © 2025 EcoTree. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
