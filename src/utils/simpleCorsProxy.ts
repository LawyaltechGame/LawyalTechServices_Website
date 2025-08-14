// Simple CORS Proxy for Development
export const SIMPLE_CORS_PROXIES = [
  'https://corsproxy.io/?',
  'https://api.allorigins.win/raw?url=',
  'https://thingproxy.freeboard.io/fetch/'
];

export const testSimpleProxy = async (url: string): Promise<string | null> => {
  for (const proxy of SIMPLE_CORS_PROXIES) {
    try {
      const testUrl = `${proxy}${url}`;
      
      const response = await fetch(testUrl, {
        method: 'GET',
        signal: AbortSignal.timeout(5000) // 5 second timeout
      });
      
      if (response.ok) {
        const data = await response.text();
        if (data && data.length > 0) {
          console.log(`✅ CORS Proxy working: ${proxy}`);
          return proxy;
        }
      }
    } catch (error) {
      // Silent fail for individual proxies
    }
  }
  
  console.log('❌ No working CORS proxies found');
  return null;
};

export const getSimpleProxiedUrl = async (url: string): Promise<string> => {
  const workingProxy = await testSimpleProxy(url);
  if (workingProxy) {
    return `${workingProxy}${url}`;
  }
  return url; // Fallback to original URL
};
