import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, formatDate, getFeaturedImage, WP_BASE } from "../lib/wp";
import type { WpPost } from "../lib/wp";
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const BlogPostsAndArticles = () => {
  const [activeTab, setActiveTab] = useState("blogs");
  const [posts, setPosts] = useState<WpPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage] = useState(1);
  const [, setTotalPages] = useState(1);
  const [, setTotalPosts] = useState(0);
  const postsPerPage = 9; // 3x3 grid

  useEffect(() => {
    if (activeTab === "blogs") {
      setLoading(true);
      
      // Test the API URL directly
      const testUrl = `${WP_BASE}/wp-json/wp/v2/posts?per_page=100&page=1&_embed=1`;
      console.log('Testing WordPress API URL:', testUrl);
      
      // Fetch all posts to see what's available
      fetchPosts(100, 1) // Fetch up to 100 posts per page, page 1
        .then(({ posts, totalPages, totalPosts }) => {
          console.log('WordPress API Response:', { 
            postsCount: posts.length, 
            totalPages, 
            totalPosts, 
            currentPage,
            posts: posts.map((p: WpPost) => ({ 
              id: p.id, 
              title: p.title.rendered, 
              date: p.date
            }))
          });
          
          // Show all posts for now to debug
          setPosts(posts);
          setTotalPages(Math.ceil(posts.length / postsPerPage));
          setTotalPosts(posts.length);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);
        })
        .finally(() => setLoading(false));
    }
  }, [activeTab]);

  const contentTypes = [
    { id: "blogs", name: "Legal Blogs", icon: "📝" },
    { id: "articles", name: "Articles", icon: "📄" },
    { id: "social", name: "Social Media Content", icon: "📱" },
    { id: "emails", name: "Persuasive Cold Emails", icon: "📧" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#B9CEFF] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog posts and articles</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional legal content creation across multiple platforms and formats
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Consistent, Client-Focused Blogging That Builds Your Reputation
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Most clients search online before they ever pick up the phone. If your firm isn't publishing fresh, 
              approachable content, you're missing out on visibility and trust. Regular blogs and articles turn 
              your expertise into a marketing engine — answering client questions, showing up in search, and 
              keeping your firm top of mind.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Why It Matters Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why It Matters for Law Firms
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Builds Trust</h4>
                <p className="text-gray-700">By simplifying complex legal topics</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Improves SEO</h4>
                <p className="text-gray-700">For practice-area keywords</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">👑</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Positions Authority</h4>
                <p className="text-gray-700">As the go-to expert in your field</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Content Repurposing</h4>
                <p className="text-gray-700">Ready-made content for social media</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Process (Audit → Strategy → Design)
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Audit</h4>
                <p className="text-gray-700">Review your current content, competitors, and target audience.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h4>
                <p className="text-gray-700">Define keywords, tone, and topics tailored to your practice.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Design (Execution)</h4>
                <p className="text-gray-700">Write clear, client-friendly blogs and publish consistently.</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Deliverables</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📝</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">High-Quality Content</h4>
                <p className="text-gray-700">Blog posts or articles per month (long-form, SEO-ready)</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📅</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Topic Calendar</h4>
                <p className="text-gray-700">Mapped to client questions and trends</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Repurposing Suggestions</h4>
                <p className="text-gray-700">Turn articles into carousels and other formats</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Build a content library that works as hard as you do.
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's create compelling blog content that builds your reputation and attracts new clients.
            </p>
            <button className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
              Get Started Today
            </button>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contentTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium ${
                activeTab === type.id
                  ? "bg-[#B9CEFF] text-gray-900 shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{type.icon}</span>
              {type.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {activeTab === "blogs" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Blogs</h2>
              {loading && <p>Loading...</p>}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => {
                  const f = getFeaturedImage(p);
                  return (
                    <div key={p.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md">
                      {f.src && (
                        <img
                          src={f.src}
                          alt={f.alt}
                          className="rounded mb-4 h-40 w-full object-cover"
                        />
                      )}
                      <h3
                        className="text-lg font-semibold text-gray-900 mb-2"
                        dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                      />
                      <p
                        className="text-gray-600 mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: p.excerpt.rendered }}
                      />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{formatDate(p.date)}</span>
                      </div>
                      <Link
                        to={`/blog/${p.slug}`}
                        className="mt-3 inline-block text-sm text-cyan-600 font-semibold"
                      >
                        Read More →
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Keep your "articles", "social", "emails" tabs with sampleContent as-is for now */}
        </div>
      </div>
    </div>
  );
};

export default BlogPostsAndArticles;
