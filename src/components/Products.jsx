import React from 'react';
import { Zap, CheckCircle, ChevronRight } from 'lucide-react';
import { productCategories } from '../data/productCategories';
import { renderIcon } from '../utils/iconRenderer';

const Products = ({ activeCategory, setActiveCategory, expandedProduct, setExpandedProduct }) => {
  const getColorClasses = (colorClass) => {
    const colors = {
      blue: { bg: 'bg-blue-50', icon: 'text-blue-600', text: 'text-blue-600' },
      purple: { bg: 'bg-purple-50', icon: 'text-purple-600', text: 'text-purple-600' },
      red: { bg: 'bg-red-50', icon: 'text-red-600', text: 'text-red-600' },
      green: { bg: 'bg-green-50', icon: 'text-green-600', text: 'text-green-600' },
      cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-600', text: 'text-cyan-600' },
      orange: { bg: 'bg-orange-50', icon: 'text-orange-600', text: 'text-orange-600' },
      yellow: { bg: 'bg-yellow-50', icon: 'text-yellow-600', text: 'text-yellow-600' }
    };
    return colors[colorClass] || colors.blue;
  };

  const renderSwitchProducts = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategories.find(cat => cat.id === 'switches')?.products.map((product, index) => {
          const colors = getColorClasses(product.colorClass);
          const isExpanded = expandedProduct === product.modelNumber;

          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100">
              {/* Product Header */}
              <div className={`h-64 ${colors.bg} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 circuit-pattern opacity-10"></div>
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {product.image ? (
                    <img 
                      src={`/images/${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                      loading="lazy"
                    />
                  ) : (
                    <div className={colors.icon}>
                      {renderIcon(product.icon, "w-16 h-16")}
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`bg-white ${colors.text} text-sm font-bold px-3 py-1 rounded-full shadow-sm`}>
                    {product.modelNumber}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                    {product.bestFor}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.shortDesc}</p>

                {/* Key Benefits */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {product.benefits?.slice(0, 4).map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable Technical Details */}
                <div className="border-t border-gray-100 pt-4">
                  <button
                    onClick={() => setExpandedProduct(isExpanded ? null : product.modelNumber)}
                    className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <span>Technical Specifications</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Voltage:</span>
                        <span className="font-medium">{product.voltage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Load:</span>
                        <span className="font-medium">{product.load}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Controls:</span>
                        <span className="font-medium">{product.loadControls}</span>
                      </div>
                      {product.features && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Features:</span>
                          <span className="font-medium">{product.features}</span>
                        </div>
                      )}
                      <div className="mt-3">
                        <span className="text-gray-500 text-xs">Applications:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {product.applications?.map((app, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className={`w-full ${colors.bg} ${colors.text} py-2 rounded-lg font-medium hover:bg-opacity-80 transition-colors`}>
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderOtherProducts = () => {
    const currentCategory = productCategories.find(cat => cat.id === activeCategory);
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCategory?.products.map((product, index) => {
          const colors = getColorClasses(product.colorClass);
          
          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100">
              <div className={`h-40 ${colors.bg} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 diagonal-lines opacity-10"></div>
                <div className={`${colors.icon} transform group-hover:scale-110 transition-transform duration-300`}>
                  {renderIcon(product.icon, "w-16 h-16")}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                    {product.bestFor}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.shortDesc}</p>

                {product.variants && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Variants:</p>
                    <div className="space-y-1">
                      {product.variants.map((variant, i) => (
                        <span key={i} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1">
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Benefits:</p>
                  <div className="space-y-1">
                    {product.benefits?.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-gray-500 text-xs">Applications:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {product.applications?.slice(0, 3).map((app, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className={`w-full ${colors.bg} ${colors.text} py-2 rounded-lg font-medium hover:bg-opacity-80 transition-colors`}>
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            <span>PRODUCT RANGE</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Solutions for Every Need</h2>
          <p className="text-xl text-gray-600">Discover the perfect switch for every room and application</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col sm:flex-row bg-gray-100 rounded-lg p-1 shadow-lg w-full sm:w-auto max-w-2xl gap-1 sm:gap-0">
            {productCategories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all text-sm sm:text-base flex-1 sm:flex-none ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {renderIcon(category.icon, "w-4 h-4 sm:w-5 sm:h-5")}
                <span className="whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">
            {productCategories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          {activeCategory === 'switches' ? renderSwitchProducts() : renderOtherProducts()}
        </div>
      </div>
    </section>
  );
};

export default Products;