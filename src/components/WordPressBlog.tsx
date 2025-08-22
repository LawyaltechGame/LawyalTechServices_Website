import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { WORDPRESS_CONFIG } from '../config/wordpress';
import { useWordPressPosts, type BlogPost } from '../hooks/useWordPressPosts';
import { ENVIRONMENT, getCORSStrategy } from '../utils/environment';

// Legal-themed fallback images for posts without a featured image
const FALLBACK_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555375771-14b2f1dfb276?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1600&auto=format&fit=crop'
];

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

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const postsPerPage = 6;

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

  // Category helpers
  const getPostCategories = (post: BlogPost): string[] => {
    const termsGroups = post._embedded?.['wp:term'] || [];
    const categoryTerms = termsGroups.flat().filter(term => (term as any).taxonomy === 'category');
    const names = categoryTerms.map(term => (term as any).name).filter(Boolean) as string[];
    return Array.from(new Set(names));
  };

  const allCategoriesSet = new Set<string>(['All']);
  posts.forEach(p => getPostCategories(p).forEach(name => allCategoriesSet.add(name)));
  // Ensure 'News' exists as a selectable category
  allCategoriesSet.add('News');
  const availableCategories = Array.from(allCategoriesSet);

  // Filter and sort posts
  const filteredPosts = posts
    .filter(post => {
      const matchesSearch = post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stripHtml(post.excerpt.rendered).toLowerCase().includes(searchTerm.toLowerCase());
      if (!matchesSearch) return false;
      if (selectedCategory === 'All') return true;
      const categories = getPostCategories(post).map(n => n.toLowerCase());
      return categories.includes(selectedCategory.toLowerCase());
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset current page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy, selectedCategory]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getPublishOrUpdated = (dateString: string, modified?: string) => {
    const published = new Date(dateString).getTime();
    const modifiedTs = modified ? new Date(modified).getTime() : published;
    const isUpdated = modifiedTs > published + 60 * 1000; // more than 1 minute newer
    const useDate = isUpdated ? modified! : dateString;
    return {
      label: isUpdated ? 'Updated' : 'Published',
      date: formatDate(useDate),
      time: formatTime(useDate)
    };
  };

  const formatLastUpdated = (date: Date) => {
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    return `${formattedDate} at ${formattedTime}`;
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const extractFirstImageFromHtml = (html: string): { src: string; alt?: string } | null => {
    if (!html) return null;
    const container = document.createElement('div');
    container.innerHTML = html;
    const img = container.querySelector('img');
    if (img && img.getAttribute('src')) {
      return { src: img.getAttribute('src') as string, alt: img.getAttribute('alt') || undefined };
    }
    return null;
  };

  const getBestImageForPost = (post: BlogPost): { src: string; alt: string } => {
    // 1) Featured media set in WordPress
    const media = post._embedded?.['wp:featuredmedia']?.[0];
    if (media?.source_url) {
      return { src: media.source_url, alt: media.alt_text || stripHtml(post.title.rendered) };
    }

    // 2) First image found in the post content or excerpt
    const fromContent = extractFirstImageFromHtml(post.content?.rendered || '')
      || extractFirstImageFromHtml(post.excerpt?.rendered || '');
    if (fromContent?.src) {
      return { src: fromContent.src, alt: fromContent.alt || stripHtml(post.title.rendered) };
    }

    // 3) Deterministic fallback image
    const fallback = FALLBACK_IMAGES[Math.abs(post.id) % FALLBACK_IMAGES.length];
    return { src: fallback, alt: `${stripHtml(post.title.rendered)} – legal insights` };
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (loading && posts.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D2DE26] mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Loading legal Blogs...</p>
        </div>
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={refresh}
            className="bg-[#D2DE26] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#C5D118] transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Legal <span className="text-[#D2DE26]">Writing</span> Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              Stay informed with the latest legal developments, expert analysis, and practical guidance 
              from our team of experienced legal professionals.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {formatLastUpdated(lastUpdated)}
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-gray-900 py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D2DE26] focus:outline-none focus:ring-1 focus:ring-[#D2DE26]"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D2DE26] focus:outline-none focus:ring-1 focus:ring-[#D2DE26]"
              >
                {availableCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D2DE26] focus:outline-none focus:ring-1 focus:ring-[#D2DE26]"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-gray-400">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </div>
        </div>
      </div>

      {/* Loading indicator for existing posts */}
        {loading && posts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[#D2DE26]">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
              <span>Updating posts...</span>
            </div>
            </div>
          </div>
        )}

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">No articles found</h3>
            <p className="text-gray-500">
              {searchTerm ? 'Try adjusting your search terms' : 'Check back later for new content!'}
            </p>
                </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => {
              const { src: featuredImageSrc, alt: featuredImageAlt } = getBestImageForPost(post);
              
              return (
                <article
                  key={post.id}
                  className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#D2DE26]/20 transition-all duration-500 hover:scale-105 group"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={featuredImageSrc}
                      alt={featuredImageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                </div>
                
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      {(() => {
                        const meta = getPublishOrUpdated(post.date, (post as any).modified);
                        return (
                          <>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>
                                <span className="text-gray-400 mr-1">{meta.label}</span>
                                {meta.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{meta.time}</span>
                            </div>
                          </>
                        );
                      })()}
                </div>

                    <a
                      href={`/blog/${post.id}`}
                      className="block group/title mb-3"
                    >
                      <h2 
                        className="text-xl font-bold text-white line-clamp-2 group-hover/title:text-[#D2DE26] transition-colors duration-300"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </a>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                
                                 <div className="flex gap-3">
                      <a
                        href={`/blog/${post.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D2DE26] text-black py-2 px-4 rounded-lg font-semibold hover:bg-[#C5D118] transition-all duration-300 group/link"
                   >
                     Read More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </a>
                 </div>
              </div>
            </article>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16">
            <div className="flex flex-col items-center gap-6">
              {/* Page Info */}
              <div className="text-gray-400 text-sm">
                Page {currentPage} of {totalPages} ({filteredPosts.length} total articles)
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === 1
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-800 text-white hover:bg-[#D2DE26] hover:text-black'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {currentPage > 3 && (
                    <>
                      <button
                        onClick={() => handlePageChange(1)}
                        className="w-10 h-10 rounded-lg bg-gray-800 text-white hover:bg-[#D2DE26] hover:text-black transition-all duration-300"
                      >
                        1
                      </button>
                      {currentPage > 4 && (
                        <span className="text-gray-500 px-2">...</span>
                      )}
                    </>
                  )}

                  {getPageNumbers().map(page => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                        page === currentPage
                          ? 'bg-[#D2DE26] text-black'
                          : 'bg-gray-800 text-white hover:bg-[#D2DE26] hover:text-black'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  {currentPage < totalPages - 2 && (
                    <>
                      {currentPage < totalPages - 3 && (
                        <span className="text-gray-500 px-2">...</span>
                      )}
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className="w-10 h-10 rounded-lg bg-gray-800 text-white hover:bg-[#D2DE26] hover:text-black transition-all duration-300"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentPage === totalPages
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-800 text-white hover:bg-[#D2DE26] hover:text-black'
                  }`}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
        </div>

              {/* Quick Jump */}
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-400">Jump to page:</span>
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => {
                    const page = parseInt(e.target.value);
                    if (page >= 1 && page <= totalPages) {
                      handlePageChange(page);
                    }
                  }}
                  className="w-16 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-white text-center focus:border-[#D2DE26] focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Load More for Additional Posts (if hasMore from API) */}
        {hasMore && currentPage === totalPages && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              disabled={loading}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#D2DE26] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 border border-gray-700 hover:border-[#D2DE26]"
            >
              {loading ? 'Loading...' : 'Load More Posts'}
            </button>
          </div>
        )}

      </div>

      {/* Footer with Call to Action */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Call to Action Section */}
          <div className="py-16 text-center border-b border-gray-800">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with <span className="text-[#D2DE26]">Legal Insights</span>
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Want to contribute or have questions about our legal writing? Get in touch with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#D2DE26] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#C5D118] transition-colors duration-300"
          >
            Contact Us Today
              </a>
              <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 border border-gray-700 hover:border-[#D2DE26]">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WordPressBlog;