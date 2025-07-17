import React from 'react';
import { Lightbulb, Sparkles, ArrowUp, MessageSquare } from 'lucide-react';
import { certifications } from '../data/certifications';
import { renderIcon } from '../utils/iconRenderer';

const Footer = ({ showScrollTop, scrollToTop }) => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Lightbulb className="w-8 h-8 text-blue-400" />
                  <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
                </div>
                <div>
                  <span className="text-xl font-bold">KB Switches™</span>
                  <div className="text-xs text-blue-400">SMART HOME AUTOMATION</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">A Light With New Shine..</p>
              <p className="text-gray-400 text-sm mt-2">Making Indian homes smarter since 2019</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#products" className="hover:text-blue-400 transition-colors">Products</a></li>
                <li><a href="/catalogs/Catlog - PDF.pdf" download="KB-Switches-Catalog.pdf" className="hover:text-blue-400 transition-colors">Download Catalog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Installation Guide</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Warranty</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Customer Care</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Dealer Locator</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Service Centers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-1 text-sm text-gray-400">
                    <div className="text-blue-400">{renderIcon(cert.icon, "w-4 h-4")}</div>
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; 2024 B.R. ENTERPRISE. All rights reserved. | KB Switches is a registered trademark.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 electric-glow"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917990414919"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </>
  );
};

export default Footer;