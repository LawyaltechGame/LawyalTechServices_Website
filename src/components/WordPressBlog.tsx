import { Link } from 'react-router-dom';
import { WORDPRESS_CONFIG } from '../config/wordpress';
import { useWordPressPosts, type BlogPost } from '../hooks/useWordPressPosts';
import { ENVIRONMENT, getCORSStrategy } from '../utils/environment';

interface WordPressBlogProps {
  wordpressUrl?: string;
  refreshInterval?: number; // in milliseconds
}

const WordPressBlog = ({ 
  wordpressUrl = WORDPRESS_CONFIG.BASE_URL, 
  refreshInterval = WORDPRESS_CONFIG.REFRESH_INTERVAL 
}: WordPressBlogProps) => {
  const {
    posts,
    loading,
    error,
    lastUpdated,
    refresh,
    hasMore,
    loadMore
  } = useWordPressPosts(wordpressUrl, refreshInterval);

  // Enhanced debug logging (only in development)
  if (ENVIRONMENT.isDevelopment()) {
    const corsStrategy = getCORSStrategy();
    console.log('WordPressBlog Component Debug:', {
      environment: ENVIRONMENT.getCurrent(),
      baseUrl: ENVIRONMENT.getBaseUrl(),
      wordpressUrl,
      refreshInterval,
      posts: posts.length,
      loading,
      error,
      lastUpdated,
      corsStrategy
    });
  }



  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getFeaturedImage = (post: BlogPost) => {
    if (post._embedded?.['wp:featuredmedia']?.[0]) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return null;
  };

  if (loading && posts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#B9CEFF] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={refresh}
            className="bg-[#B9CEFF] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#A8C0F0] transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#B9CEFF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Legal Writing Blog
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stay updated with the latest legal insights, industry trends, and expert analysis
            </p>
            <div className="mt-4 text-sm text-gray-600">
              Last updated: {lastUpdated.toLocaleTimeString()}
              <button
                onClick={refresh}
                className="ml-4 text-[#050706] hover:text-[#D2DE26] underline"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && posts.length > 0 && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-[#B9CEFF]">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
              <span>Updating posts...</span>
            </div>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {getFeaturedImage(post) && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={getFeaturedImage(post)!}
                    alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
                             <div className="p-6">
                 <Link
                   to={`/blog/${post.id}`}
                   className="block group"
                 >
                   <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#B9CEFF] transition-colors duration-300">
                     {post.title.rendered}
                   </h2>
                 </Link>
                
                <div className="text-gray-600 mb-4 line-clamp-3">
                  {stripHtml(post.excerpt.rendered)}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{formatDate(post.date)}</span>
                  <span className="text-[#B9CEFF]">Legal Writing</span>
                </div>
                
                                 <div className="flex gap-3">
                   <Link
                     to={`/blog/${post.id}`}
                     className="flex-1 bg-[#B9CEFF] text-gray-900 text-center py-2 px-4 rounded-lg font-medium hover:bg-[#A8C0F0] transition-colors duration-300"
                   >
                     Read More
                   </Link>
                   {/* <button
                     onClick={() => window.open(post.link, '_blank')}
                     className="px-3 py-2 text-gray-600 hover:text-[#B9CEFF] transition-colors duration-300"
                     title="Open in new tab"
                   >
                     ↗
                   </button> */}
                 </div>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No blog posts found</h3>
            <p className="text-gray-500">Check back later for new content!</p>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              disabled={loading}
              className="bg-[#B9CEFF] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#A8C0F0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              {loading ? 'Loading...' : 'Load More Posts'}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Want to contribute or have questions?</p>
          <Link
            to="/contact"
            className="inline-block bg-[#B9CEFF] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#A8C0F0] transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WordPressBlog;
