import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { Link } from 'react-router-dom';

const WhitepapersGuides = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Whitepapers & Guides</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Educational assets that position your firm as a thought leader and generate qualified leads.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Demonstrate Expertise With Deep-Dive Resources</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              From compliance guides to market explainers, we craft resources that build authority, earn backlinks, and generate qualified leads through downloads.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Why It Matters Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why It Matters for Law Firms</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">📚</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Depth</h4><p className="text-gray-700">Showcase real subject-matter expertise</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">🔗</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Backlinks</h4><p className="text-gray-700">Earn links and improve SEO</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">🎯</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Lead Gen</h4><p className="text-gray-700">Capture qualified prospects via downloads</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">🤝</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Trust</h4><p className="text-gray-700">Build credibility with value-driven content</p></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process (Outline → Draft → Design)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center"><div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold text-gray-900">1</span></div><h4 className="text-xl font-semibold text-gray-900 mb-3">Outline</h4><p className="text-gray-700">Define topic, audience, and structure</p></div>
              <div className="text-center"><div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold text-gray-900">2</span></div><h4 className="text-xl font-semibold text-gray-900 mb-3">Draft</h4><p className="text-gray-700">Write and edit for clarity and accuracy</p></div>
              <div className="text-center"><div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><span className="text-2xl font-bold text-gray-900">3</span></div><h4 className="text-xl font-semibold text-gray-900 mb-3">Design</h4><p className="text-gray-700">Lay out with visuals and lead capture</p></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Deliverables</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">📄</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Lead Magnets</h4><p className="text-gray-700">Downloadable PDFs or web guides</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">🔍</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Research</h4><p className="text-gray-700">Source-backed, accurate content</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">🎨</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Design</h4><p className="text-gray-700">Branded layouts with graphics</p></div>
              <div className="bg-gray-50 p-6 rounded-lg"><div className="text-3xl mb-3">🔗</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Distribution</h4><p className="text-gray-700">Landing page + email capture</p></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Turn knowledge into leads.</h3>
            <p className="text-lg text-gray-700 mb-6">We’ll craft premium resources that build trust and drive action.</p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 inline-block">Get Started Today</Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default WhitepapersGuides;


