import React, { useState } from 'react';
import { SkeletonImage } from './SkeletonLoader';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  skeletonClassName = '',
  aspectRatio = 'aspect-square',
  fallbackSrc = null,
  onLoad = () => {},
  onError = () => {},
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      return;
    }
    setHasError(true);
    onError();
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <SkeletonImage 
            className={skeletonClassName} 
            aspectRatio={aspectRatio}
          />
        </div>
      )}
      
      {hasError ? (
        <div className={`${aspectRatio} bg-gray-100 flex items-center justify-center text-gray-400 ${className}`}>
          <div className="text-center">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-xs">Image not available</p>
          </div>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;