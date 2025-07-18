import React, { useState, useEffect } from 'react';
import { SkeletonImage } from './SkeletonLoader';

// Check if browser supports WebP
const supportsWebP = () => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

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
  const [webpSrc, setWebpSrc] = useState(null);
  const [hasWebPSupport, setHasWebPSupport] = useState(false);

  // Generate WebP version of the image path
  const generateWebPSrc = (imageSrc) => {
    if (!imageSrc) return null;
    
    // Replace file extension with .webp
    const webpPath = imageSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    return webpPath !== imageSrc ? webpPath : null;
  };

  useEffect(() => {
    // Check WebP support on client side
    setHasWebPSupport(supportsWebP());
    
    // Generate WebP source
    const webpPath = generateWebPSrc(src);
    setWebpSrc(webpPath);
    
    // Set initial source based on WebP support
    if (supportsWebP() && webpPath) {
      setCurrentSrc(webpPath);
    } else {
      setCurrentSrc(src);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    
    // Try fallback sequence: WebP -> Original -> Custom fallback
    if (currentSrc === webpSrc && src !== webpSrc) {
      // WebP failed, try original format
      setCurrentSrc(src);
      return;
    }
    
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      // Original failed, try custom fallback
      setCurrentSrc(fallbackSrc);
      return;
    }
    
    // All options failed
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
        <picture>
          {/* WebP source for supported browsers */}
          {hasWebPSupport && webpSrc && (
            <source srcSet={webpSrc} type="image/webp" />
          )}
          
          {/* Fallback for all browsers */}
          <img
            src={currentSrc}
            alt={alt}
            className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default LazyImage;