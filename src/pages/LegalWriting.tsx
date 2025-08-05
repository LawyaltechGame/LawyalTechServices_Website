import { useState } from 'react';
import { Link } from 'react-router-dom';

const LegalWriting = () => {
  const [activeTab, setActiveTab] = useState('blogs');

  const contentTypes = [
    { id: 'blogs', name: 'WordPress Blogs', icon: '📝' },
    { id: 'articles', name: 'Articles', icon: '📄' },
    { id: 'social', name: 'Social Media Content', icon: '📱' },
    { id: 'emails', name: 'Persuasive Cold Emails', icon: '📧' },
  ];

  const sampleContent = {
    blogs: [
      {
        title: "Understanding Contract Law: A Comprehensive Guide",
        excerpt: "Dive deep into the fundamentals of contract law and learn how to draft legally binding agreements...",
        date: "2024-01-15",
        readTime: "8 min read"
      },
      {
        title: "Intellectual Property Rights in the Digital Age",
        excerpt: "Explore the evolving landscape of IP protection in today's technology-driven world...",
        date: "2024-01-10",
        readTime: "12 min read"
      },
      {
        title: "Employment Law Updates for 2024",
        excerpt: "Stay informed about the latest changes in employment legislation and their impact on businesses...",
        date: "2024-01-05",
        readTime: "10 min read"
      }
    ],
    articles: [
      {
        title: "The Future of Legal Technology",
        excerpt: "How AI and automation are transforming the legal industry and what it means for practitioners...",
        publication: "Legal Tech Journal",
        date: "2024-01-20"
      },
      {
        title: "Corporate Compliance in a Global Economy",
        excerpt: "Navigating the complex web of international regulations and compliance requirements...",
        publication: "Business Law Review",
        date: "2024-01-18"
      },
      {
        title: "Environmental Law and Sustainability",
        excerpt: "The intersection of environmental protection and business operations in modern legal frameworks...",
        publication: "Environmental Law Quarterly",
        date: "2024-01-12"
      }
    ],
    social: [
      {
        platform: "LinkedIn",
        content: "🚀 Exciting news! Our legal tech solutions are helping firms increase efficiency by 40%. Want to learn how? #LegalTech #Innovation",
        engagement: "2.5K views, 156 likes"
      },
      {
        platform: "Twitter",
        content: "💡 Pro tip: Always review your contracts quarterly. Small updates can prevent major legal headaches later. #LegalAdvice #ContractLaw",
        engagement: "1.2K retweets, 89 likes"
      },
      {
        platform: "Instagram",
        content: "📋 Did you know? 73% of businesses face legal issues due to poor documentation. Let's fix that together! #LegalServices #Business",
        engagement: "856 likes, 23 comments"
      }
    ],
    emails: [
      {
        subject: "Transform Your Legal Practice with AI-Powered Solutions",
        preview: "Dear [Name], I noticed your firm is handling complex cases manually. Our AI solution can reduce research time by 60%...",
        openRate: "34%",
        clickRate: "12%"
      },
      {
        subject: "Free Legal Tech Assessment - Save 20 Hours Weekly",
        preview: "Hi [Name], Your competitors are already saving 20+ hours weekly with our legal automation tools...",
        openRate: "42%",
        clickRate: "18%"
      },
      {
        subject: "Exclusive: Early Access to Our New Contract Analysis Tool",
        preview: "Hello [Name], You're invited to beta test our revolutionary contract analysis platform before public launch...",
        openRate: "28%",
        clickRate: "15%"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#B9CEFF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Legal Writing Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional legal content creation across multiple platforms and formats
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {contentTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === type.id
                  ? 'bg-[#B9CEFF] text-gray-900 shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{type.icon}</span>
              {type.name}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* WordPress Blogs */}
          {activeTab === 'blogs' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">WordPress Blogs</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sampleContent.blogs.map((blog, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Articles</h2>
              <div className="space-y-4">
                {sampleContent.articles.map((article, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-3">{article.excerpt}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{article.publication}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Social Media Content */}
          {activeTab === 'social' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Social Media Content</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sampleContent.social.map((post, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">{post.platform === 'LinkedIn' ? '💼' : post.platform === 'Twitter' ? '🐦' : '📷'}</span>
                      <span className="font-semibold text-gray-900">{post.platform}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{post.content}</p>
                    <p className="text-sm text-gray-500">{post.engagement}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Persuasive Cold Emails */}
          {activeTab === 'emails' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Persuasive Cold Emails</h2>
              <div className="space-y-4">
                {sampleContent.emails.map((email, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{email.subject}</h3>
                    <p className="text-gray-600 mb-3">{email.preview}</p>
                    <div className="flex gap-4 text-sm">
                      <span className="text-green-600">Open Rate: {email.openRate}</span>
                      <span className="text-blue-600">Click Rate: {email.clickRate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to get started with our legal writing services?</p>
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

export default LegalWriting; 