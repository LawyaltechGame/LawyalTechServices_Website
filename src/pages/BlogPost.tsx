import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchPostBySlug, formatDate, getFeaturedImage } from "../lib/wp";
import type { WpPost } from "../lib/wp";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<WpPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Ensure page opens at top when navigating to a post
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [slug]);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPostBySlug(slug);
        if (!data) throw new Error("Blog post not found");
        setPost(data);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPost();
  }, [slug]);

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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">{error || "Blog post not found"}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => window.location.reload()}
              className="bg-[#B9CEFF] text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-[#A8C0F0] transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate("/blog-posts")}
              className="bg-gray-500 text.white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  const featured = getFeaturedImage(post);
  const embeddedAuthor: any = (post as any)?._embedded?.author?.[0] || null;
  const authorName = embeddedAuthor?.name || "Lawyal Tech";
  const authorAvatar = embeddedAuthor?.avatar_urls?.[96] || embeddedAuthor?.avatar_urls?.[48] || null;
  const authorBio = embeddedAuthor?.description || "We publish practical, client-friendly legal content to help firms build trust and grow.";

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={post.title.rendered.replace(/<[^>]+>/g, '')}
        description={post.excerpt?.rendered ? post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 155) : `Article by ${authorName} — published ${formatDate(post.date)}.`}
        canonical={`https://www.lawyaltech.org/blog/${slug}`}
        keywords={["legal blog", "law firm articles", "legal insights"]}
        openGraph={{
          url: `https://www.lawyaltech.org/blog/${slug}`,
          title: post.title.rendered.replace(/<[^>]+>/g, ''),
          description: post.excerpt?.rendered ? post.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 160) : undefined
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.lawyaltech.org/blog/${slug}`
        },
        "headline": post.title.rendered.replace(/<[^>]+>/g, ''),
        "datePublished": post.date,
        "dateModified": post.modified || post.date,
        "author": [{ "@type": "Person", "name": authorName }],
        "publisher": {
          "@type": "Organization",
          "name": "Lawyal Tech",
          "logo": { "@type": "ImageObject", "url": "https://www.lawyaltech.org/COLOR%20LOGO.png" }
        },
        ...(featured.src ? { "image": featured.src } : {})
      }} />
      {/* Header */}
      <div className="bg-[#B9CEFF] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <Link
              to="/blog-posts"
              className="inline-flex items-center text-[#050706] hover:text-[#D2DE26] transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm text-gray-700">
            <span>Published {formatDate(post.date)}</span>
            <span className="hidden sm:inline">•</span>
            <span>by {authorName}</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-medium">Blog posts & articles</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {featured.src && (
          <div className="mb-8">
            <img
              src={featured.src}
              alt={featured.alt}
              className="w-full h-auto rounded-xl shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        <article className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <div
            className="prose prose-lg max-w-none
                       prose-headings:font-bold prose-headings:text-gray-900
                       prose-p:text-gray-700 prose-p:leading-relaxed
                       prose-a:text-[#2563eb] hover:prose-a:text-[#1e40af] prose-a:underline
                       prose-strong:text-gray-900 prose-em:text-gray-800
                       prose-li:marker:text-gray-500 prose-img:rounded-lg prose-img:shadow-md
                       prose-blockquote:border-l-4 prose-blockquote:border-[#B9CEFF] prose-blockquote:pl-4 prose-blockquote:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>

        {/* Author Bio - visually distinct */}
        <div className="mt-12 relative overflow-hidden rounded-2xl border border-[#E5EAF5] bg-[#F7FAFF]">
          <div className="absolute left-0 top-0 h.full w-1 bg-[#B9CEFF]"></div>
          <div className="p-6 md:p-8 flex gap-5 items-start">
            {authorAvatar && (
              <img
                src={authorAvatar}
                alt={authorName}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-[#B9CEFF]"
                loading="lazy"
                decoding="async"
              />
            )}
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">About the author</div>
              <div className="text-gray-900 font-semibold text-lg">{authorName}</div>
              <p className="text-gray-700 mt-2 leading-relaxed italic">
                {authorBio}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 text-center flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/blog-posts"
            className="bg-[#B9CEFF] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#A8C0F0] transition-colors"
          >
            Back to Blog
          </Link>
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
