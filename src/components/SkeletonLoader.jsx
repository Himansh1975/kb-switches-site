import React from 'react';

// Base skeleton component
const SkeletonLoader = ({ className = '', children }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  );
};

// Skeleton for text lines
export const SkeletonText = ({ lines = 1, className = '' }) => {
  return (
    <SkeletonLoader className={className}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </SkeletonLoader>
  );
};

// Skeleton for images
export const SkeletonImage = ({ className = '', aspectRatio = 'aspect-square' }) => {
  return (
    <SkeletonLoader className={className}>
      <div className={`bg-gray-200 rounded ${aspectRatio} w-full`} />
    </SkeletonLoader>
  );
};

// Skeleton for buttons
export const SkeletonButton = ({ className = '', width = 'w-32' }) => {
  return (
    <SkeletonLoader className={className}>
      <div className={`h-10 bg-gray-200 rounded-lg ${width}`} />
    </SkeletonLoader>
  );
};

// Skeleton for cards
export const SkeletonCard = ({ className = '' }) => {
  return (
    <SkeletonLoader className={className}>
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="h-48 bg-gray-200 rounded-lg mb-4" />
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
        <div className="mt-4 flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="h-8 bg-gray-200 rounded w-20" />
        </div>
      </div>
    </SkeletonLoader>
  );
};

// Skeleton for testimonial cards
export const SkeletonTestimonial = ({ className = '' }) => {
  return (
    <SkeletonLoader className={className}>
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full" />
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-32" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/5" />
        </div>
        <div className="flex mt-4 space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    </SkeletonLoader>
  );
};

// Skeleton for hero section
export const SkeletonHero = ({ className = '' }) => {
  return (
    <SkeletonLoader className={className}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-6 bg-gray-200 rounded w-48 mb-6" />
              <div className="space-y-4 mb-8">
                <div className="h-12 bg-gray-200 rounded w-full" />
                <div className="h-12 bg-gray-200 rounded w-3/4" />
              </div>
              <div className="space-y-2 mb-8">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
              </div>
              <div className="flex space-x-4">
                <div className="h-12 bg-gray-200 rounded w-32" />
                <div className="h-12 bg-gray-200 rounded w-40" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full">
                <div className="aspect-square bg-gray-200 rounded-xl mb-6" />
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-full mb-4" />
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="w-2 h-2 bg-gray-200 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonLoader>
  );
};

// Skeleton for stats section
export const SkeletonStats = ({ className = '' }) => {
  return (
    <SkeletonLoader className={className}>
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="h-12 bg-gray-200 rounded w-20 mx-auto mb-2" />
                <div className="h-4 bg-gray-200 rounded w-24 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SkeletonLoader>
  );
};

// Skeleton for products grid
export const SkeletonProducts = ({ className = '' }) => {
  return (
    <SkeletonLoader className={className}>
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4" />
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </SkeletonLoader>
  );
};

export default SkeletonLoader;