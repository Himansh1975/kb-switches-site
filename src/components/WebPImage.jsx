import React, { useState, useEffect } from 'react';

// Check if browser supports WebP
const supportsWebP = () => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

const WebPImage = ({ 
  src, 
  webpSrc, 
  alt, 
  className = '', 
  onLoad = () => {},
  onError = () => {},
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasWebPSupport, setHasWebPSupport] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Check WebP support on client side
    setHasWebPSupport(supportsWebP());
  }, []);

  useEffect(() => {
    if (hasWebPSupport && webpSrc) {
      setImageSrc(webpSrc);
    } else {
      setImageSrc(src);
    }
  }, [hasWebPSupport, webpSrc, src]);

  const handleError = (e) => {
    setImageError(true);
    // Fallback to original format if WebP fails
    if (imageSrc === webpSrc && src !== webpSrc) {
      setImageSrc(src);
    }
    onError(e);
  };

  const handleLoad = (e) => {
    setImageError(false);
    onLoad(e);
  };

  return (
    <picture>
      {/* WebP source for supported browsers */}
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      
      {/* Fallback for all browsers */}
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};

export default WebPImage;