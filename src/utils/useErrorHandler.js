import { useCallback } from 'react';

// Custom hook for handling async errors in functional components
export const useErrorHandler = () => {
  const handleError = useCallback((error, context = '') => {
    console.error(`Error${context ? ` in ${context}` : ''}:`, error);
    
    // You can extend this to send errors to a logging service
    // trackError(error, { context });
    
    // For now, we'll just log to console
    if (process.env.NODE_ENV === 'development') {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        context
      });
    }
  }, []);

  const handleAsyncError = useCallback((asyncFunction, context = '') => {
    return async (...args) => {
      try {
        return await asyncFunction(...args);
      } catch (error) {
        handleError(error, context);
        throw error; // Re-throw to allow component to handle it
      }
    };
  }, [handleError]);

  return { handleError, handleAsyncError };
};

// Utility function to safely execute async operations
export const safeAsync = async (asyncFunction, fallback = null) => {
  try {
    return await asyncFunction();
  } catch (error) {
    console.error('Async operation failed:', error);
    return fallback;
  }
};

// Utility function to safely access nested object properties
export const safeGet = (obj, path, fallback = null) => {
  try {
    return path.split('.').reduce((current, key) => current?.[key], obj) ?? fallback;
  } catch {
    return fallback;
  }
};