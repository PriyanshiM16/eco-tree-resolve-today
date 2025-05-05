
import React from 'react';
import { TreeDeciduous } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-sagegreen text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TreeDeciduous className="h-6 w-6" />
          <span className="text-xl font-bold">EcoTree</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#challenges" className="hover:text-babypink transition-colors">Challenges</a>
          <a href="#solutions" className="hover:text-babypink transition-colors">Solutions</a>
          <a href="#discovery" className="hover:text-babypink transition-colors">Our Discovery</a>
          <a href="#about" className="hover:text-babypink transition-colors">About Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
