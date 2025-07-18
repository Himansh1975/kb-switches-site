// Google Analytics utility functions
export const GA_MEASUREMENT_ID = 'G-DLS84RDKLX';

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track business events
export const trackBusinessEvent = {
  // Track when user clicks phone number
  phoneCall: () => {
    trackEvent('phone_call', {
      event_category: 'contact',
      event_label: 'header_phone_click',
    });
  },

  // Track catalog download
  catalogDownload: () => {
    trackEvent('file_download', {
      event_category: 'engagement',
      event_label: 'catalog_pdf',
      file_name: 'KB-Switches-Catalog.pdf',
    });
  },

  // Track quote request
  quoteRequest: () => {
    trackEvent('lead_generation', {
      event_category: 'conversion',
      event_label: 'quote_request',
    });
  },

  // Track contact form submission
  contactFormSubmit: (formData) => {
    trackEvent('form_submit', {
      event_category: 'lead_generation',
      event_label: 'contact_form',
      form_location: 'contact_section',
    });
  },

  // Track product interest
  productInterest: (productName, category) => {
    trackEvent('product_interest', {
      event_category: 'engagement',
      event_label: productName,
      product_category: category,
    });
  },

  // Track video play
  videoPlay: (videoName) => {
    trackEvent('video_play', {
      event_category: 'engagement',
      event_label: videoName,
    });
  },

  // Track scroll depth
  scrollDepth: (percentage) => {
    trackEvent('scroll_depth', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
    });
  },
};