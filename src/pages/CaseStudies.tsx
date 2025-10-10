import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Case Studies & Client Success Stories"
        description="Case studies and client success stories for law firms that demonstrate results and build trust."
        canonical="https://www.lawyaltech.org/case-studies"
        keywords={["law firm case studies", "client success stories", "legal whitepapers"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/case-studies',
          title: 'Case Studies & Client Success — Lawyal Tech',
          description: 'Prove credibility with stories that matter.'
        }}
      />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies & client success stories </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Compelling case studies and whitepapers that showcase your expertise and results
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Build Authority with Stories and Insights That Matter
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Case studies show prospects how you solve problems. Whitepapers dive deep into legal topics, 
              providing thought leadership and trust. Together, they prove your credibility in the legal market.
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
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Demonstrates Results</h4>
                <p className="text-gray-700">Demonstrates results to potential clients</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Lead Generation</h4>
                <p className="text-gray-700">Provides valuable content for lead generation campaigns</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">👑</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Builds Authority</h4>
                <p className="text-gray-700">Builds authority and positions you as a trusted expert</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Evergreen ROI</h4>
                <p className="text-gray-700">Creates evergreen marketing materials that continue delivering ROI</p>
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
                <p className="text-gray-700">Identify stories and topics that resonate with your audience.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h4>
                <p className="text-gray-700">Outline structure and key messages.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Design (Execution)</h4>
                <p className="text-gray-700">Write professional, engaging content with polished layouts.</p>
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
                <div className="text-3xl mb-3">📋</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h4>
                <p className="text-gray-700">Challenge → solution → result format</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📄</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Whitepapers</h4>
                <p className="text-gray-700">On legal trends or practice-specific insights</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📎</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional PDFs</h4>
                <p className="text-gray-700">Formatted for download and sharing</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Repurposing</h4>
                <p className="text-gray-700">Into blogs, presentations, and social posts</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Show your expertise with case studies and whitepapers that win trust.
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's create compelling content that builds authority and demonstrates your expertise.
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

export default CaseStudies;
