import React from 'react';
import { Menu, X, Lightbulb } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['Home', 'Products', 'Locks', 'Sensors', 'Gallery', 'Videos', 'Contact'];

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-8 h-8 text-blue-400" aria-hidden="true" />
            <span className="text-xl font-bold text-white">KB Switches™</span>
          </div>

          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800" role="navigation" aria-label="Mobile navigation">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
