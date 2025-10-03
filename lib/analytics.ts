// Google Analytics Event Tracking Utilities
// Use these functions to track custom events in your portfolio

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

/**
 * Track page views
 * Automatically called by Next.js, but can be used manually if needed
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-4JRF3PNM19', {
      page_path: url,
    });
  }
};

/**
 * Track contact form submission
 */
export const trackContactFormSubmit = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_form_submit', {
      event_category: 'engagement',
      event_label: 'Contact Form Submission',
      value: 1,
    });
  }
};

/**
 * Track CV download
 */
export const trackCVDownload = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cv_download', {
      event_category: 'engagement',
      event_label: 'CV Download',
      value: 1,
    });
  }
};

/**
 * Track WhatsApp contact click
 */
export const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'WhatsApp Contact Button',
      value: 1,
    });
  }
};

/**
 * Track email contact click
 */
export const trackEmailClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'email_click', {
      event_category: 'engagement',
      event_label: 'Email Contact Button',
      value: 1,
    });
  }
};

/**
 * Track social media clicks
 */
export const trackSocialMediaClick = (platform: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'social_media_click', {
      event_category: 'engagement',
      event_label: `${platform} Link Click`,
      social_network: platform,
      value: 1,
    });
  }
};

/**
 * Track project view/click
 */
export const trackProjectView = (projectName: string, action: 'view' | 'demo' | 'source') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_interaction', {
      event_category: 'portfolio',
      event_label: `${projectName} - ${action}`,
      project_name: projectName,
      interaction_type: action,
      value: 1,
    });
  }
};

/**
 * Track skill tab view
 */
export const trackSkillTabView = (tabName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'skill_tab_view', {
      event_category: 'engagement',
      event_label: `Skill Tab: ${tabName}`,
      tab_name: tabName,
    });
  }
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'engagement',
      event_label: `Scroll ${percentage}%`,
      scroll_percentage: percentage,
    });
  }
};

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, linkText?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'external_link_click', {
      event_category: 'engagement',
      event_label: linkText || url,
      link_url: url,
      value: 1,
    });
  }
};

/**
 * Track time spent on page
 */
export const trackTimeOnPage = (seconds: number, pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'time_on_page', {
      event_category: 'engagement',
      event_label: pageName,
      value: seconds,
    });
  }
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: buttonName,
      button_location: location,
      value: 1,
    });
  }
};

/**
 * Track search queries (if you add search feature)
 */
export const trackSearch = (searchTerm: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
    });
  }
};

/**
 * Track errors
 */
export const trackError = (errorMessage: string, errorLocation?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: errorMessage,
      fatal: false,
      error_location: errorLocation,
    });
  }
};

// Export all tracking functions
export const analytics = {
  trackPageView,
  trackContactFormSubmit,
  trackCVDownload,
  trackWhatsAppClick,
  trackEmailClick,
  trackSocialMediaClick,
  trackProjectView,
  trackSkillTabView,
  trackScrollDepth,
  trackExternalLink,
  trackTimeOnPage,
  trackButtonClick,
  trackSearch,
  trackError,
};

export default analytics;
