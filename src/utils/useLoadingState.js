import { useState, useEffect } from 'react';

// Hook for managing loading states
export const useLoadingState = (initialState = true, delay = 1000) => {
  const [isLoading, setIsLoading] = useState(initialState);

  useEffect(() => {
    if (initialState) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [initialState, delay]);

  return [isLoading, setIsLoading];
};

// Hook for simulating content loading
export const useContentLoading = (dependencies = [], minLoadingTime = 500) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    
    const checkLoading = () => {
      const elapsed = Date.now() - startTime;
      const shouldFinish = dependencies.every(dep => dep !== null && dep !== undefined);
      
      if (shouldFinish && elapsed >= minLoadingTime) {
        setIsLoading(false);
      } else if (shouldFinish) {
        setTimeout(() => setIsLoading(false), minLoadingTime - elapsed);
      }
    };

    checkLoading();
  }, dependencies);

  return isLoading;
};

// Hook for image loading
export const useImageLoading = (src) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.onload = () => {
      setIsLoading(false);
      setHasError(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoading, hasError };
};