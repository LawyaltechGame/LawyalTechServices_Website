// CORS Proxy Utility for WordPress Integration
import { WORDPRESS_CONFIG } from '../config/wordpress';

export interface ProxyTestResult {
  proxyUrl: string;
  working: boolean;
  responseTime: number;
}

export class CORSProxyManager {
  private static instance: CORSProxyManager;
  private workingProxy: string | null = null;
  private proxyTestResults: ProxyTestResult[] = [];

  static getInstance(): CORSProxyManager {
    if (!CORSProxyManager.instance) {
      CORSProxyManager.instance = new CORSProxyManager();
    }
    return CORSProxyManager.instance;
  }

  // Test all proxy services to find working ones
  async testProxies(): Promise<string | null> {
    if (this.workingProxy) {
      return this.workingProxy;
    }

    const testUrl = `${WORDPRESS_CONFIG.BASE_URL}/wp-json/wp/v2/posts?per_page=1`;
    
    for (const proxyUrl of WORDPRESS_CONFIG.CORS_PROXY_FALLBACKS) {
      try {
        const startTime = Date.now();
        const response = await fetch(`${proxyUrl}${testUrl}`, {
          method: 'GET',
          headers: WORDPRESS_CONFIG.HEADERS,
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });
        
        const responseTime = Date.now() - startTime;
        
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            this.workingProxy = proxyUrl;
            this.proxyTestResults.push({
              proxyUrl,
              working: true,
              responseTime
            });
            console.log(`✅ CORS Proxy working: ${proxyUrl} (${responseTime}ms)`);
            return proxyUrl;
          }
        }
        
        this.proxyTestResults.push({
          proxyUrl,
          working: false,
          responseTime
        });
        
      } catch (error) {
        console.log(`❌ CORS Proxy failed: ${proxyUrl}`, error);
        this.proxyTestResults.push({
          proxyUrl,
          working: false,
          responseTime: -1
        });
      }
    }

    console.error('❌ No working CORS proxies found');
    return null;
  }

  // Get working proxy URL
  async getWorkingProxy(): Promise<string | null> {
    if (!this.workingProxy) {
      await this.testProxies();
    }
    return this.workingProxy;
  }

  // Get proxy test results
  getProxyTestResults(): ProxyTestResult[] {
    return this.proxyTestResults;
  }

  // Reset proxy cache (useful for retesting)
  resetProxyCache(): void {
    this.workingProxy = null;
    this.proxyTestResults = [];
  }
}

// Helper function to get proxied URL
export const getProxiedUrl = async (originalUrl: string): Promise<string> => {
  const proxyManager = CORSProxyManager.getInstance();
  const workingProxy = await proxyManager.getWorkingProxy();
  
  if (workingProxy) {
    return `${workingProxy}${originalUrl}`;
  }
  
  // Fallback to original URL if no proxy works
  console.warn('No CORS proxy available, trying direct request');
  return originalUrl;
};
