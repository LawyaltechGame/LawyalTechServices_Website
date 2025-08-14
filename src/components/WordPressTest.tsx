import { useState } from 'react';
import { WORDPRESS_CONFIG } from '../config/wordpress';
import { CORSProxyManager } from '../utils/corsProxy';
import { ENVIRONMENT } from '../utils/environment';

const WordPressTest = () => {
  const [testResults, setTestResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testDirectConnection = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${WORDPRESS_CONFIG.BASE_URL}/wp-json/wp/v2/posts?per_page=1`);
      const data = await response.json();
      
      setTestResults({
        type: 'Direct Connection',
        success: response.ok,
        status: response.status,
        data: data,
        headers: Object.fromEntries(response.headers.entries())
      });
    } catch (err) {
      setError(`Direct connection failed: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const testCORSProxies = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const proxyManager = CORSProxyManager.getInstance();
      const workingProxy = await proxyManager.testProxies();
      const results = proxyManager.getProxyTestResults();
      
      setTestResults({
        type: 'CORS Proxy Test',
        workingProxy,
        results
      });
    } catch (err) {
      setError(`CORS proxy test failed: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const testProxiedConnection = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const proxyManager = CORSProxyManager.getInstance();
      const workingProxy = await proxyManager.getWorkingProxy();
      
      if (!workingProxy) {
        setError('No working CORS proxy found');
        return;
      }
      
      const response = await fetch(`${workingProxy}${WORDPRESS_CONFIG.BASE_URL}/wp-json/wp/v2/posts?per_page=1`);
      const data = await response.json();
      
      setTestResults({
        type: 'Proxied Connection',
        success: response.ok,
        status: response.status,
        data: data,
        proxyUsed: workingProxy
      });
    } catch (err) {
      setError(`Proxied connection failed: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">WordPress Integration Test</h2>
      
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Environment Info:</h3>
        <p><strong>Current Environment:</strong> {ENVIRONMENT.getCurrent()}</p>
        <p><strong>Base URL:</strong> {ENVIRONMENT.getBaseUrl()}</p>
        <p><strong>WordPress URL:</strong> {WORDPRESS_CONFIG.BASE_URL}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          onClick={testDirectConnection}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Test Direct Connection
        </button>
        
        <button
          onClick={testCORSProxies}
          disabled={loading}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          Test CORS Proxies
        </button>
        
        <button
          onClick={testProxiedConnection}
          disabled={loading}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
        >
          Test Proxied Connection
        </button>
      </div>

      {loading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p>Testing...</p>
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}

      {testResults && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">{testResults.type}</h3>
          <pre className="text-sm overflow-auto bg-white p-3 rounded border">
            {JSON.stringify(testResults, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default WordPressTest;
