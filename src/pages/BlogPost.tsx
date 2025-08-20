import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { WORDPRESS_CONFIG } from '../config/wordpress';
import { getSimpleProxiedUrl } from '../utils/simpleCorsProxy';

interface BlogPostData {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified?: string;
  link: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);

        const originalUrl = `${WORDPRESS_CONFIG.BASE_URL}/wp-json/wp/v2/posts/${id}?_embed`;
        
        // Try to get proxied URL
        let fullUrl = originalUrl;
        try {
          fullUrl = await getSimpleProxiedUrl(originalUrl);
        } catch (error) {
          console.warn('Proxy failed, using direct request');
        }

        const response = await fetch(fullUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: BlogPostData = await response.json();
        setPost(data);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPublishOrUpdated = () => {
    if (!post) return '';
    const published = new Date(post.date).getTime();
    const modified = post.modified ? new Date(post.modified).getTime() : published;
    const isUpdated = modified > published + 60 * 1000; // consider updated if more than 1 minute newer
    const useDate = isUpdated ? (post.modified as string) : post.date;
    return `${isUpdated ? 'Updated' : 'Published'} ${formatDate(useDate)}`;
  };

  const getFeaturedImage = () => {
    if (post?._embedded?.['wp:featuredmedia']?.[0]) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#B9CEFF] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error || 'Blog post not found'}</p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="bg-[#B9CEFF] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#A8C0F0] transition-colors duration-300 mr-3"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/legal-writing')}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300"
            >
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#B9CEFF] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <Link
                to="/legal-writing"
                className="inline-flex items-center text-[#050706] hover:text-[#D2DE26] transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
            
            <h1 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>{getPublishOrUpdated()}</span>
              <span className="text-[#050706]">Legal Writing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Image */}
        {getFeaturedImage() && (
          <div className="mb-8">
            <img
              src={getFeaturedImage()!}
              alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        )}

        {/* Post Content */}
        <article className="bg-white rounded-xl shadow-lg p-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/legal-writing"
              className="bg-[#B9CEFF] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#A8C0F0] transition-colors duration-300"
            >
              Back to Blog
            </Link>
            
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
            >
              View on WordPress
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
