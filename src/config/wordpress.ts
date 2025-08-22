// WordPress Configuration
export const WORDPRESS_CONFIG = {
  // Replace this with your actual WordPress site URL
  BASE_URL: 'https://legal-tech-writing.lawyaltech.org',
  
  // API endpoints
  POSTS_ENDPOINT: '/wp-json/wp/v2/posts',
  COMMENTS_ENDPOINT: '/wp-json/wp/v2/comments',
  
  // Refresh interval for real-time updates (in milliseconds)
  // 30000 = 30 seconds, 60000 = 1 minute
  // In development, we'll use a longer interval to reduce console noise
  REFRESH_INTERVAL: 60000, // 1 minute instead of 30 seconds
  
  // Number of posts to fetch per page
  POSTS_PER_PAGE: 6,
  
  // Enable/disable real-time updates
  ENABLE_REAL_TIME_UPDATES: true,
  
  // CORS proxy options for different environments
  USE_CORS_PROXY: true,
  CORS_PROXY_URL: 'https://api.allorigins.win/raw?url=',
  
  // Alternative CORS proxies (fallbacks)
  CORS_PROXY_FALLBACKS: [
    'https://corsproxy.io/?',
    'https://api.allorigins.win/raw?url=',
    'https://thingproxy.freeboard.io/fetch/',
    'https://cors-anywhere.herokuapp.com/'
  ],
  
  // Custom headers if needed (for authentication, etc.)
  HEADERS: {
    'Content-Type': 'application/json',
    // Add any custom headers here if needed
    // 'Authorization': 'Bearer your-token-here',
  },

  // Helpful URLs for auth on the WordPress site
  get LOGIN_URL() {
    return `${this.BASE_URL}/wp-login.php`;
  },
  get REGISTER_URL() {
    return `${this.BASE_URL}/wp-login.php?action=register`;
  }
};

// Helper function to get full API URL
export const getWordPressApiUrl = (endpoint: string = '') => {
  return `${WORDPRESS_CONFIG.BASE_URL}${WORDPRESS_CONFIG.POSTS_ENDPOINT}${endpoint}`;
};

// Helper function to get posts with query parameters
export const getPostsQueryString = (params: Record<string, string | number> = {}) => {
  const defaultParams = {
    _embed: '',
    per_page: WORDPRESS_CONFIG.POSTS_PER_PAGE,
    orderby: 'date',
    order: 'desc',
    ...params
  };
  
  const queryString = Object.entries(defaultParams)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
    
  return `?${queryString}`;
};
