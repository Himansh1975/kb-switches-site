import React, { useMemo } from 'react';
import { Phone, CircuitBoard, Cpu } from 'lucide-react';
import { certifications } from '../data/certifications';
import { productCategories } from '../data/productCategories';
import { renderIcon } from '../utils/iconRenderer';
import { trackBusinessEvent } from '../utils/analytics';
import { useLoadingState } from '../utils/useLoadingState';
import { SkeletonHero } from './SkeletonLoader';
import LazyImage from './LazyImage';

const Hero = React.memo(({ activeProduct, setActiveProduct }) => {
  const products = useMemo(() => productCategories[0].products, []);
  const [isLoading] = useLoadingState(true, 800);

  const getColorClasses = (colorClass) => {
    const colors = {
      blue: { icon: 'text-blue-600' },
      purple: { icon: 'text-purple-600' },
      red: { icon: 'text-red-600' },
      green: { icon: 'text-green-600' },
      cyan: { icon: 'text-cyan-600' },
      orange: { icon: 'text-orange-600' },
      yellow: { icon: 'text-yellow-600' }
    };
    return colors[colorClass] || colors.blue;
  };

  if (isLoading) {
    return <SkeletonHero />;
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full power-line"></div>
        <div className="absolute top-2/4 left-0 w-full power-line" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-0 w-full power-line" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Cpu className="w-4 h-4" />
              <span>Established Since 2019</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="text-blue-600 block">KB SWITCHES</span>
              SMART LIVING
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              A Light With New Shine.. KB Switches brings you India's most reliable WiFi smart switches and home automation solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg electric-glow flex items-center justify-center space-x-2"
                onClick={() => trackBusinessEvent.quoteRequest()}
              >
                <Phone className="w-5 h-5" />
                <span>Get Free Quote</span>
              </button>
              <a 
                href="/catalogs/Catlog - PDF.pdf" 
                download="KB-Switches-Catalog.pdf"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => trackBusinessEvent.catalogDownload()}
              >
                <CircuitBoard className="w-5 h-5" />
                <span>Download Catalog</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <div className="text-blue-600">{renderIcon(cert.icon, "w-4 h-4")}</div>
                  <span className="text-xs font-medium text-gray-700">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-8 electric-glow max-w-sm w-full">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 diagonal-lines opacity-10"></div>
                {products[activeProduct].image ? (
                  <LazyImage 
                    src={`/images/${products[activeProduct].image}`}
                    alt={products[activeProduct].name}
                    className="w-full h-full object-contain p-6"
                    aspectRatio="aspect-square"
                  />
                ) : (
                  <div className={getColorClasses(products[activeProduct].colorClass).icon}>
                    {renderIcon(products[activeProduct].icon, "w-20 h-20")}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{products[activeProduct].name}</h3>
              <p className="text-gray-600 mb-4">{products[activeProduct].shortDesc}</p>
              <div className="flex justify-center space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProduct(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeProduct ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;