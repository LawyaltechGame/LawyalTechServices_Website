import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { Link } from 'react-router-dom';

const LeadMagnets = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Lead Magnets</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              High-value content offers that capture leads and nurture prospects
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Create Irresistible Offers That Turn Clicks into Consultations
            </h2>
            <div className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed space-y-6">
              <p>
                Most firms just ask people to 'Subscribe to our newsletter.' That's not enough to grab attention. 
                A true lead magnet makes your ideal client stop scrolling and say, 'I need this.' Once they're 
                in your pipeline, that's when your newsletter shines — nurturing the relationship and building 
                trust over time.
              </p>
              <p>
                At Lawyal Tech, we don't just create PDFs. We design high-value resources that solve a real 
                problem for your audience in advance, proving your expertise and making it natural for them 
                to book a consultation.
              </p>
            </div>
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
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Builds a pipeline of qualified leads</h4>
                  <p className="text-gray-700">instead of cold traffic</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-2xl font-bold">✓</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Positions your firm as helpful and trustworthy</h4>
                  <p className="text-gray-700">before the first call</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-2xl font-bold">✓</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Works 24/7</h4>
                  <p className="text-gray-700">— your best "digital salesperson" never sleeps</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-2xl font-bold">✓</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Turns passive website visitors</h4>
                  <p className="text-gray-700">into active prospects</p>
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
                <p className="text-gray-700">Identify your audience's pain points (e.g., divorce, injury, contracts, compliance).</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h4>
                <p className="text-gray-700">Craft a compelling "free offer" they actually want — not generic fluff.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Design (Execution)</h4>
                <p className="text-gray-700">Build, brand, and launch lead magnets with clear calls-to-action.</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Deliverables (examples of irresistible offers)
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <div>
                  <span className="text-gray-900 font-semibold">Guides:</span>
                  <span className="text-gray-700"> "5 Costly Mistakes to Avoid Before Filing for Divorce"</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <div>
                  <span className="text-gray-900 font-semibold">Checklists:</span>
                  <span className="text-gray-700"> "Personal Injury Claim Checklist: What to Do After an Accident"</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <div>
                  <span className="text-gray-900 font-semibold">Templates:</span>
                  <span className="text-gray-700"> "Free Contract Review Template for Startups"</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <div>
                  <span className="text-gray-900 font-semibold">Mini-Courses / Videos:</span>
                  <span className="text-gray-700"> Quick explainer sessions that build trust</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <div>
                  <span className="text-gray-900 font-semibold">Calculators & Tools:</span>
                  <span className="text-gray-700"> e.g., "Child Support Estimator" or "Case Value Calculator"</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* How We Amplify Results Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How We Amplify Results
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <span className="text-gray-700">Pair each lead magnet with a high-converting landing page</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <span className="text-gray-700">Run Google Ads & LinkedIn Ads to drive traffic</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <span className="text-gray-700">Repurpose into social posts and carousels for visibility</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D2DE26] text-xl">•</span>
                <span className="text-gray-700">Automate delivery + email follow-up to nurture leads into booked calls</span>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.8} className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's build lead magnets your future clients can't resist.
            </h3>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg inline-block">
              Get Started Today
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default LeadMagnets;
