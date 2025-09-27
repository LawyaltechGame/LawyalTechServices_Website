import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { Link } from 'react-router-dom';

const DisplayAds = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#B9CEFF] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Display Ads</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Eye-catching display ads that convert across platforms
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Eye-Catching Display Ads That Keep You Visible Everywhere
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Display ads combine visuals and copy to make your law firm recognizable across the web. 
              Whether it's banner ads, retargeting, or social display, these ads keep your firm top-of-mind.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Why It Matters Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why It Matters for Law Firms
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-2xl font-bold">✓</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Boosts brand awareness</h4>
                  <p className="text-gray-700">across search and social platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-2xl font-bold">✓</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Retargets people</h4>
                  <p className="text-gray-700">who already visited your website</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-2xl font-bold">✓</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Pairs with PPC ads</h4>
                  <p className="text-gray-700">and landing pages for higher conversions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-2xl font-bold">✓</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Builds consistent visibility</h4>
                  <p className="text-gray-700">in a crowded market</p>
                </div>
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
                <div className="bg-[#B9CEFF] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Audit</h4>
                <p className="text-gray-700">Review your goals and identify best ad networks/placements.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h4>
                <p className="text-gray-700">Develop messaging and visuals for brand alignment.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Design (Execution)</h4>
                <p className="text-gray-700">Create attention-grabbing ads with clear CTAs.</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Deliverables
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <span className="text-gray-700">Copy for banner and display ads</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <span className="text-gray-700">Branded visual design for all formats</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <span className="text-gray-700">Retargeting campaign messaging</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <span className="text-gray-700">Multi-format creatives for desktop and mobile</span>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7} className="text-center">
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Launch high-performing display campaigns.
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              We design, test, and optimize ads to maximize CTR and conversions.
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

export default DisplayAds;
