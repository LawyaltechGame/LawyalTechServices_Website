import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { Link } from 'react-router-dom';

const PPCAdCopy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#B9CEFF] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">PPC Ad Copy</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Compelling pay-per-click ad copy that drives clicks and conversions
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Make Every Click Count with Persuasive PPC Ads
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Running Google Ads or LinkedIn Ads without strong copy is like pouring water into a leaky bucket. 
              We write PPC ads that cut through the noise, attract qualified leads, and connect directly to 
              the services your firm offers.
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
                <div className="text-4xl mb-4">⚔️</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Fierce Competition</h4>
                <p className="text-gray-700">Competition for clicks in legal services is fierce</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Reduce Waste</h4>
                <p className="text-gray-700">Well-crafted ads reduce wasted spend on irrelevant clicks</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Improve Conversions</h4>
                <p className="text-gray-700">Pairing ads with matching landing pages improves conversions</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">📞</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Increase Bookings</h4>
                <p className="text-gray-700">Messaging tailored to your audience increases consultation bookings</p>
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
                <p className="text-gray-700">Review your target keywords, practice focus, and audience.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h4>
                <p className="text-gray-700">Draft variations of headlines and descriptions for testing.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Design (Execution)</h4>
                <p className="text-gray-700">Deliver ad copy tailored for Google and LinkedIn campaigns.</p>
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
                <div className="text-3xl mb-3">🔍</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Google Ads</h4>
                <p className="text-gray-700">Google Ads text (headlines + descriptions)</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h4>
                <p className="text-gray-700">LinkedIn and social media ad copy variations</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🧪</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">A/B Testing</h4>
                <p className="text-gray-700">Multiple options for A/B testing</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Aligned Messaging</h4>
                <p className="text-gray-700">Messaging aligned with landing pages and CTAs</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stop wasting ad spend — start getting clicks that convert into clients.
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's create compelling PPC ad copy that maximizes your ROI and generates qualified leads.
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

export default PPCAdCopy;
