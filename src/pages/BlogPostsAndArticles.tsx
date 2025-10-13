import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, formatDate, getFeaturedImage, WP_BASE } from "../lib/wp";
import type { WpPost } from "../lib/wp";
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';

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
      <SEO
        title="Blog Posts & Articles"
        description="SEO-driven legal blogs and articles for law firms: strategy, writing, visuals, and publishing to build authority and attract clients."
        canonical="https://www.lawyaltech.org/blog-posts"
        keywords={[
          'legal blogs',
          'law firm articles',
          'SEO for law firms',
          'legal content strategy'
        ]}
        openGraph={{
          url: 'https://www.lawyaltech.org/blog-posts',
          title: 'Blog Posts & Articles — Lawyal Tech',
          description: 'SEO-driven blogging for law firms: plan, write, and publish with confidence.'
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lawyaltech.org/"},
          {"@type": "ListItem", "position": 2, "name": "Blog Posts & Articles", "item": "https://www.lawyaltech.org/blog-posts"}
        ]
      }} />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.25}>
          <div className="rounded-2xl">
            <div className="inline-flex items-center gap-2 bg-white/70 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
              <span>Blogs & Articles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Blog Posts for Law Firms</h2>
            <p className="text-lg text-gray-800">Turn your expertise into <span className="text-[#0b0f0b] bg-[#D2DE26]/60 px-1 rounded">authority</span>.</p>
            <p className="text-gray-800 leading-relaxed max-w-3xl mx-auto mt-2">
              We create SEO-driven blog posts that help you rank higher, earn trust, and attract qualified clients—without risking compliance or credibility.
            </p>
          </div>
        </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Added: Intro for Blog Posts for Law Firms */}
        

        {/* Who This Is For + What You Get */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Who This Is For</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Boutique to mid-sized law firms seeking consistent, high-quality content</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Legal tech brands aiming to build authority and visibility</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Teams who want content that reliably converts readers into inquiries</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What You Get</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">SEO-Optimized Articles</span> – Research-backed topics, buyer-intent keywords, topical clusters, and smart internal linking.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Thought Leadership</span> – Practice-aware insights that showcase your team’s expertise and point of view.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Editorial QA</span> – A multi-step review for accuracy, clarity, tone, and compliance before anything goes live.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">On-Brand Visuals</span> – Cover images and social carousels to boost engagement.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">End-to-End Publishing</span> – WordPress or CMS formatting, meta data, alt text, and distribution support for LinkedIn/Instagram/newsletter.</span></li>
              </ul>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Consistent, Client-Focused Blogging That Builds Your Reputation
            </h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Why It Matters for Law Firms
            </h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
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
                <div className="text-4xl mb-4">🎪</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Content Repurposing</h4>
                <p className="text-gray-700">Ready-made content for social media</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Our Process (Audit → Strategy → Design)
            </h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Deliverables</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
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

        {/* Added: Detailed Process List */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.62}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">How we help</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Strategy & Calendar</span> – Map content pillars (explainers, trends, how-tos, use cases and interviews).</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Research & Outline</span> – Competitive review, keyword selection, and outlines; SME interviews if needed.</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Writing & Editing</span> – Clear, credible articles in your brand voice with practical takeaways.</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">SEO Polish</span> – Titles, meta descriptions, headings, internal links, and schema-friendly structure.</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Visuals & Publishing</span> – On-brand graphics, alt text, and WordPress formatting.</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Distribution</span> – Snippets/carousels for LinkedIn and Instagram, plus a newsletter blurb.</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Added: Proof & Performance */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.64}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Proof & Performance</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-4xl mx-auto text-center">
              Topics are mapped to buyer-intent keywords and clustered to build topical authority. Interlinking posts with service pages lifts rankings and conversions over time.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Added: Plans */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.66}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plans</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Essentials</h4>
                  <p className="text-gray-700">3 posts/month, keyword research, on-page SEO, 1 social caption per post.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#D2DE26] bg-white shadow-md hover:shadow-xl ring-2 ring-[#D2DE26]/40 transition-shadow">
                <div className="h-1.5 w-full bg-[#D2DE26] rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Growth</h4>
                  <p className="text-gray-700">4 posts/month, cluster planning, 2 carousels/month, quarterly content review.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Authority+</h4>
                  <p className="text-gray-700">8 posts/month, executive ghostwriting, newsletter roundup, monthly reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Added: FAQs */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.68}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs</h3>
            <ul className="pl-1 space-y-4 text-gray-700 max-w-3xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition">
                <span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span>
                <div>
                  <h4 className="font-semibold text-gray-900">How often do you publish?</h4>
                  <p className="text-gray-700">Most clients start with 2–4 posts/month; we scale to your goals and capacity.</p>
                </div>
              </li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition">
                <span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span>
                <div>
                  <h4 className="font-semibold text-gray-900">What’s included in SEO?</h4>
                  <p className="text-gray-700">Keyword research, on-page optimization, internal linking, and meta data for each article.</p>
                </div>
              </li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition">
                <span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Do you need input from our attorneys?</h4>
                  <p className="text-gray-700">Optional. We can interview SMEs for 15–20 minutes per article or work from approved briefs.</p>
                </div>
              </li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition">
                <span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span>
                <div>
                  <h4 className="font-semibold text-gray-900">How many revisions do we get?</h4>
                  <p className="text-gray-700">Up to three rounds per article to lock tone, facts, and positioning.</p>
                </div>
              </li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to turn expertise into authority?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Book a free blog strategy session and get a tailored 60-day editorial plan.
            </p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
              Book a Free Strategy Session
            </Link>
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
                          loading="lazy"
                          decoding="async"
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
