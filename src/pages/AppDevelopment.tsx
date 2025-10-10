import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="App Development"
        description="Custom app and tool development for legal brands: lead capture, client intake, and operational tools."
        canonical="https://www.lawyaltech.org/app-development"
        keywords={["legal app development", "law firm tools", "legal tech apps"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/app-development',
          title: 'App Development — Lawyal Tech',
          description: 'Build tools that streamline operations and win clients.'
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lawyaltech.org/"},
          {"@type": "ListItem", "position": 2, "name": "App Development", "item": "https://www.lawyaltech.org/app-development"}
        ]
      }} />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">App Development</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Conversion-focused apps and tools tailored for legal brands to streamline operations and win more clients.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Build Tools That Grow Your Firm</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We design and develop custom software for legal teams—from lead capture apps to internal tools—that improve client experience and operational efficiency.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Why It Matters Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why It Matters for Law Firms</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">⚙️</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Efficiency</h4><p className="text-gray-700">Automate workflows and save time</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">📈</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Growth</h4><p className="text-gray-700">Capture and convert more leads</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">🔒</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Compliance</h4><p className="text-gray-700">Secure, privacy-first builds</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">🧩</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Integration</h4><p className="text-gray-700">Connect with CRMs and case tools</p></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process (Discovery → Build → Launch)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center"><div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold text-gray-900">1</span></div><h4 className="text-xl font-semibold text-gray-900 mb-3">Discovery</h4><p className="text-gray-700">Define goals, users, and success metrics</p></div>
              <div className="text-center"><div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold text-gray-900">2</span></div><h4 className="text-xl font-semibold text-gray-900 mb-3">Build</h4><p className="text-gray-700">Design, develop, and iterate quickly</p></div>
              <div className="text-center"><div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold text-gray-900">3</span></div><h4 className="text-xl font-semibold text-gray-900 mb-3">Launch</h4><p className="text-gray-700">Deploy, integrate, and measure results</p></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Deliverables</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">🧭</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Roadmap</h4><p className="text-gray-700">Feature plan and milestones</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">🧪</div><h4 className="text-lg font-semibold text-gray-900 mb-2">MVP</h4><p className="text-gray-700">Working prototype to validate</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">🔌</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Integrations</h4><p className="text-gray-700">CRM, email, calendar, case tools</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">📊</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h4><p className="text-gray-700">Basic usage and conversion metrics</p></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Let’s build the right tool for your firm.</h3>
            <p className="text-lg text-gray-700 mb-6">From idea to launch—fast, secure, and client-focused.</p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 inline-block">Get Started Today</Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default AppDevelopment;


