import React from 'react';
import { ChevronDown, AlertCircle, CheckCircle } from 'lucide-react';

const FormSelect = ({
  label,
  placeholder = 'Select an option',
  required = false,
  value,
  onChange,
  onBlur,
  error,
  isValid,
  options = [],
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 border rounded-lg text-gray-900 focus:outline-none transition-all duration-200 appearance-none bg-no-repeat bg-right cursor-pointer';
  
  const getSelectClasses = () => {
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
        <select
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={getSelectClasses()}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          {error ? (
            <AlertCircle className="w-5 h-5 text-red-500" />
          ) : isValid ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
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

export default FormSelect;