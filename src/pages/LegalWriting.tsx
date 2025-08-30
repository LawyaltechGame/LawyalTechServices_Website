import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPosts, formatDate, getFeaturedImage } from "../lib/wp";
import type { WpPost } from "../lib/wp";

const LegalWriting = () => {
  const [activeTab, setActiveTab] = useState("blogs");
  const [posts, setPosts] = useState<WpPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activeTab === "blogs") {
      fetchPosts()
        .then(({ posts }) => setPosts(posts))
        .catch(console.error)
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Writing Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional legal content creation across multiple platforms and formats
          </p>
        </div>
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

export default LegalWriting;
