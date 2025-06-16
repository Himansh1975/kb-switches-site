import React from 'react';
import { Menu, X, CircuitBoard } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b-2 border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <CircuitBoard className="w-8 h-8 text-blue-600" />
              <div className="absolute inset-0 bg-blue-600/20 rounded-lg blur-md"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">KB Switches</h1>
              <p className="text-xs text-blue-600 font-medium">Smart Home Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Features</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Reviews</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">+91 98765 43210</p>
              <p className="text-xs text-blue-600">24/7 Support</p>
            </div>
            <a 
              href="tel:+919876543210"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Products</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Reviews</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <div className="px-3 py-2 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900">+91 98765 43210</p>
                <a 
                  href="tel:+919876543210"
                  className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;