import { useState, useEffect, useCallback, useRef } from 'react';
import { WORDPRESS_CONFIG, getPostsQueryString } from '../config/wordpress';
import { getProxiedUrl } from '../utils/corsProxy';
import { getSimpleProxiedUrl } from '../utils/simpleCorsProxy';

export interface BlogPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface UseWordPressPostsReturn {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  lastUpdated: Date;
  refresh: () => Promise<void>;
  hasMore: boolean;
  loadMore: () => Promise<void>;
}

export const useWordPressPosts = (
  wordpressUrl: string = WORDPRESS_CONFIG.BASE_URL,
  refreshInterval: number = WORDPRESS_CONFIG.REFRESH_INTERVAL
): UseWordPressPostsReturn => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const abortControllerRef = useRef<AbortController | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchPosts = useCallback(async (pageNum: number = 1, append: boolean = false) => {
    try {
      // Cancel previous request if it exists
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      
      // Create new abort controller
      abortControllerRef.current = new AbortController();
      
      setLoading(true);
      setError(null);
      
      const queryString = getPostsQueryString({ 
        page: pageNum,
        per_page: WORDPRESS_CONFIG.POSTS_PER_PAGE 
      });
      
      const originalUrl = `${wordpressUrl}${WORDPRESS_CONFIG.POSTS_ENDPOINT}${queryString}`;
      
      // Get proxied URL using simple proxy system for development
      let fullUrl = originalUrl;
      if (WORDPRESS_CONFIG.USE_CORS_PROXY) {
        try {
          // Try simple proxy first (more reliable for development)
          fullUrl = await getSimpleProxiedUrl(originalUrl);
        } catch (error) {
          try {
            fullUrl = await getProxiedUrl(originalUrl);
          } catch (advancedError) {
            fullUrl = originalUrl;
          }
        }
      }
      
      let response;
      try {
        response = await fetch(fullUrl, {
          method: 'GET',
          mode: 'cors',
          headers: WORDPRESS_CONFIG.HEADERS,
          signal: abortControllerRef.current.signal
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (fetchError) {
        // If CORS proxy failed, try direct request as last resort
        if (fullUrl !== originalUrl) {
          console.log('Proxied request failed, trying direct request...');
          try {
            response = await fetch(originalUrl, {
              method: 'GET',
              mode: 'no-cors', // Try no-cors mode
              headers: WORDPRESS_CONFIG.HEADERS,
              signal: abortControllerRef.current.signal
            });
            
            if (!response.ok) {
              throw new Error(`Direct request failed: ${response.status}`);
            }
          } catch (directError) {
            throw new Error(`Both proxied and direct requests failed: ${directError}`);
          }
        } else {
          throw fetchError;
        }
      }
      
      const data: BlogPost[] = await response.json();
      
      if (append) {
        setPosts(prevPosts => [...prevPosts, ...data]);
      } else {
        setPosts(data);
        setPage(1);
      }
      
      // Check if there are more posts
      setHasMore(data.length === WORDPRESS_CONFIG.POSTS_PER_PAGE);
      
      setLastUpdated(new Date());
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        // Request was cancelled, don't show error
        return;
      }
      
      console.error('Error fetching WordPress posts:', err);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [wordpressUrl]);

  const refresh = useCallback(async () => {
    await fetchPosts(1, false);
  }, [fetchPosts]);

  const loadMore = useCallback(async () => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      await fetchPosts(nextPage, true);
      setPage(nextPage);
    }
  }, [loading, hasMore, page, fetchPosts]);

  useEffect(() => {
    fetchPosts(1, false);
    
    // Set up polling for real-time updates if enabled
    if (WORDPRESS_CONFIG.ENABLE_REAL_TIME_UPDATES) {
      intervalRef.current = setInterval(() => {
        fetchPosts(1, false);
      }, refreshInterval);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchPosts, refreshInterval]);

  return {
    posts,
    loading,
    error,
    lastUpdated,
    refresh,
    hasMore,
    loadMore
  };
};
