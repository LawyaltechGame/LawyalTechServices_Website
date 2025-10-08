import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { Link } from 'react-router-dom';

const ThoughtLeadership = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thought Leadership Articles</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              LinkedIn posts, blogs, and op-eds that turn expertise into influence and attract the right clients.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Build Authority With Consistent, High-Quality Publishing
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We translate your legal expertise into content that clients understand and search engines reward—published on your blog and LinkedIn to grow visibility and credibility.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Why It Matters Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why It Matters for Law Firms</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">👀</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Visibility</h4>
                <p className="text-gray-700">Appear in front of your ideal clients regularly</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">👑</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Authority</h4>
                <p className="text-gray-700">Position your firm as the trusted expert</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">SEO</h4>
                <p className="text-gray-700">Earn search traffic with consistent publishing</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Trust</h4>
                <p className="text-gray-700">Showcase real expertise with practical insights</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process (Topics → Draft → Publish)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold text-gray-900">1</span></div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Plan</h4>
                <p className="text-gray-700">Define topics, cadence, and distribution</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold text-gray-900">2</span></div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Draft</h4>
                <p className="text-gray-700">Write clear, compliant, and client-friendly content</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold text-gray-900">3</span></div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Publish</h4>
                <p className="text-gray-700">Publish on site + LinkedIn with visuals and CTAs</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Deliverables</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">📝</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Articles & Posts</h4><p className="text-gray-700">Long- and short-form content</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">📅</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Content Calendar</h4><p className="text-gray-700">Monthly topics and schedule</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">🎯</div><h4 className="text-lg font-semibold text-gray-900 mb-2">CTAs</h4><p className="text-gray-700">Conversion-focused calls to action</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">📊</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Performance</h4><p className="text-gray-700">Basic analytics snapshot</p></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Publish with consistency. Grow with authority.</h3>
            <p className="text-lg text-gray-700 mb-6">Let’s build your content engine for long-term results.</p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 inline-block">Get Started Today</Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ThoughtLeadership;


