// Form validation utilities
export const validators = {
  required: (value) => {
    if (!value || value.trim() === '') {
      return 'This field is required';
    }
    return '';
  },

  email: (value) => {
    if (!value) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  },

  phone: (value) => {
    if (!value) return '';
    // Indian phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = value.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return 'Please enter a valid 10-digit phone number';
    }
    return '';
  },

  minLength: (min) => (value) => {
    if (!value) return '';
    if (value.length < min) {
      return `Must be at least ${min} characters`;
    }
    return '';
  },

  maxLength: (max) => (value) => {
    if (!value) return '';
    if (value.length > max) {
      return `Must not exceed ${max} characters`;
    }
    return '';
  },

  name: (value) => {
    if (!value) return '';
    if (value.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      return 'Name can only contain letters and spaces';
    }
    return '';
  },

  message: (value) => {
    if (!value) return '';
    if (value.trim().length < 10) {
      return 'Message must be at least 10 characters';
    }
    if (value.trim().length > 1000) {
      return 'Message must not exceed 1000 characters';
    }
    return '';
  }
};

// Validation rules for contact form
export const contactFormRules = {
  name: [validators.required, validators.name],
  phone: [validators.required, validators.phone],
  email: [validators.email], // Optional but must be valid if provided
  productInterest: [], // Optional
  message: [validators.required, validators.message]
};

// Validate a single field
export const validateField = (fieldName, value, rules) => {
  const fieldRules = rules[fieldName] || [];
  
  for (const rule of fieldRules) {
    const error = rule(value);
    if (error) {
      return error;
    }
  }
  
  return '';
};

// Validate entire form
export const validateForm = (formData, rules) => {
  const errors = {};
  let isValid = true;
  
  Object.keys(rules).forEach(fieldName => {
    const error = validateField(fieldName, formData[fieldName], rules);
    if (error) {
      errors[fieldName] = error;
      isValid = false;
    }
  });
  
  return { isValid, errors };
};

// Format phone number for display
export const formatPhoneNumber = (value) => {
  if (!value) return '';
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return cleaned;
};

// Sanitize form data
export const sanitizeFormData = (formData) => {
  const sanitized = {};
  
  Object.keys(formData).forEach(key => {
    let value = formData[key];
    
    if (typeof value === 'string') {
      // Trim whitespace
      value = value.trim();
      
      // Remove potentially harmful characters
      value = value.replace(/[<>]/g, '');
      
      // Special handling for phone numbers
      if (key === 'phone') {
        value = value.replace(/\D/g, '');
      }
    }
    
    sanitized[key] = value;
  });
  
  return sanitized;
};