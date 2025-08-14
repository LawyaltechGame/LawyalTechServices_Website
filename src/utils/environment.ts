// Environment Detection Utility
export const ENVIRONMENT = {
  // Detect if running in development
  isDevelopment: () => {
    return import.meta.env.DEV || 
           window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1' ||
           window.location.port === '5173';
  },
  
  // Detect if running in production (Vercel)
  isProduction: () => {
    return import.meta.env.PROD || 
           window.location.hostname.includes('vercel.app') ||
           window.location.hostname.includes('lawyaltechservices.vercel.app');
  },
  
  // Get current environment name
  getCurrent: () => {
    if (ENVIRONMENT.isDevelopment()) return 'development';
    if (ENVIRONMENT.isProduction()) return 'production';
    return 'unknown';
  },
  
  // Get base URL for current environment
  getBaseUrl: () => {
    return window.location.origin;
  }
};

// CORS Strategy based on environment
export const getCORSStrategy = () => {
  if (ENVIRONMENT.isDevelopment()) {
    return {
      useProxy: true,
      fallbackToDirect: true,
      logLevel: 'debug'
    };
  }
  
  if (ENVIRONMENT.isProduction()) {
    return {
      useProxy: true,
      fallbackToDirect: false,
      logLevel: 'error'
    };
  }
  
  return {
    useProxy: true,
    fallbackToDirect: true,
    logLevel: 'warn'
  };
};
