import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';

const EmailTemplates = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Email Campaigns & Newsletters"
        description="Professional email campaigns and newsletters for law firms: templates, sequences, and on-brand content."
        canonical="https://www.lawyaltech.org/email-templates"
        keywords={["law firm email marketing", "legal newsletters", "email templates for lawyers"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/email-templates',
          title: 'Email Campaigns & Newsletters — Lawyal Tech',
          description: 'Stay top of mind with consistent, persuasive emails.'
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lawyaltech.org/"},
          {"@type": "ListItem", "position": 2, "name": "Email Campaigns", "item": "https://www.lawyaltech.org/email-templates"}
        ]
      }} />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Email Campaigns & Newsletters</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Engaging email content that nurtures relationships and drives conversions
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stay Top of Mind with Professional Email Marketing
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Law firms that keep in touch with clients and prospects see stronger relationships and more referrals. 
              Email newsletters and templates make it easy to stay connected — without writing from scratch every time.
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
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Build Credibility</h4>
                <p className="text-gray-700">Regular newsletters build credibility and client loyalty</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">High ROI</h4>
                <p className="text-gray-700">Email is one of the highest-ROI marketing channels</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">⏰</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Save Time</h4>
                <p className="text-gray-700">Automated templates save time and ensure consistency</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">👁️</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Stay Visible</h4>
                <p className="text-gray-700">Keeps your firm visible even between cases</p>
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
                <p className="text-gray-700">Review your current client communications and email strategy.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h4>
                <p className="text-gray-700">Define email cadence, topics, and tone aligned with your brand.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Design (Execution)</h4>
                <p className="text-gray-700">Create polished templates and engaging newsletters.</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Deliverables</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📧</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Templates</h4>
                <p className="text-gray-700">Custom-designed, reusable email templates</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📰</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Newsletters</h4>
                <p className="text-gray-700">Monthly or quarterly newsletters tailored to your audience</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Automated Sequences</h4>
                <p className="text-gray-700">Welcome emails, intake confirmations, updates</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Optimized Copy</h4>
                <p className="text-gray-700">Copy optimized for clicks and client engagement</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Turn emails into a simple, powerful tool for client retention and growth.
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's create professional email marketing that keeps you top of mind and drives client relationships.
            </p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
              Get Started Today
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default EmailTemplates;
