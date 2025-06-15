import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={`${product.name} - ${product.description}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {product.modelNumber}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Voltage:</span>
            <span className="font-medium">{product.voltage}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Load:</span>
            <span className="font-medium">{product.load}</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Applications:</p>
          <div className="flex flex-wrap gap-1">
            {product.applications.map((app, i) => (
              <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                {app}
              </span>
            ))}
          </div>
        </div>
        <button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          aria-label={`Get quote for ${product.name}`}
        >
          Get Quote
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
