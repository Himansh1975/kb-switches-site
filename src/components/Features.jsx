import React from 'react';
import { features } from '../data/features';
import { renderIcon } from '../utils/iconRenderer';

const Features = React.memo(() => {
  return (
    <section id="features" className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-blue-600">KB Switches</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of home automation with our cutting-edge smart switch technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className={`absolute inset-0 ${feature.bgPattern} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative">
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(feature.icon, "w-8 h-8")}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Features;