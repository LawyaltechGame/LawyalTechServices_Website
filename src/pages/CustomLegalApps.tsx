import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CustomLegalApps = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Custom Legal Apps"
        description="Custom legal apps for law firms: intake, calculators, and tools that improve client experience and operations."
        canonical="https://www.lawyaltech.org/custom-legal-apps"
        keywords={["custom legal apps", "law firm calculators", "legal tools"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/custom-legal-apps',
          title: 'Custom Legal Apps — Lawyal Tech',
          description: 'Build tools tailored to your legal workflows.'
        }}
      />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Custom Legal Apps</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Bespoke tools that streamline client intake, case workflows, and lead capture
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Legal Apps That Streamline Your Firm and Impress Clients
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Law firms are adopting technology faster than ever. From client portals to document 
              automation tools, custom apps give your firm a competitive edge while improving client service.
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
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Digital Convenience</h4>
                <p className="text-gray-700">Clients expect digital convenience and accessibility</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Simplify Processes</h4>
                <p className="text-gray-700">Apps simplify case tracking, intake, and communication</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">⏰</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Save Time</h4>
                <p className="text-gray-700">Streamlines your team's workflow and saves time</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Reputation</h4>
                <p className="text-gray-700">Enhances your reputation as a modern, tech-forward firm</p>
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
                <p className="text-gray-700">Review your firm's processes and identify opportunities for automation.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h4>
                <p className="text-gray-700">Define the app's core functions and user experience.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Design (Execution)</h4>
                <p className="text-gray-700">Build a secure, intuitive app tailored to your needs.</p>
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
                <div className="text-3xl mb-3">🔐</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Portals</h4>
                <p className="text-gray-700">Secure client portals for communication and document sharing</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Case Tracking</h4>
                <p className="text-gray-700">Case tracking and workflow automation apps</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📅</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Intake Solutions</h4>
                <p className="text-gray-700">Intake and scheduling solutions</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Apps</h4>
                <p className="text-gray-700">Custom-built mobile or web apps, fully branded</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Bring innovation into your practice with a custom legal app.
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's create tailored software solutions that streamline your firm and impress your clients.
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

export default CustomLegalApps;
