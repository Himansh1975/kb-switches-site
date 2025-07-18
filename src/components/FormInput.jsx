import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const FormInput = ({
  label,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  onBlur,
  error,
  isValid,
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none transition-all duration-200';
  
  const getInputClasses = () => {
    let classes = baseClasses;
    
    if (error) {
      classes += ' border-red-300 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500';
    } else if (isValid) {
      classes += ' border-green-300 bg-green-50 focus:ring-2 focus:ring-green-500 focus:border-green-500';
    } else {
      classes += ' border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
    }
    
    return classes;
  };

  return (
    <div className={className}>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={getInputClasses()}
          {...props}
        />
        {/* Validation Icons */}
        {error && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <AlertCircle className="w-5 h-5 text-red-500" />
          </div>
        )}
        {isValid && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default FormInput;