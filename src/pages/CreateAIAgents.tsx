import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const CreateAIAgents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#B9CEFF] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Create AI Agents</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Automate intake, FAQs, scheduling, and workflows with custom AI agents for law firms
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AI Assistants Trained on Your Firm's Knowledge
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              From lead qualification and appointment scheduling to document intake and FAQs, we build AI agents that work 24/7,
              trained on your practice areas, processes, and tone of voice.
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
                <div className="text-4xl mb-4">⏱️</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Faster Response</h4>
                <p className="text-gray-700">Respond to new leads instantly across web and chat</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualified Leads</h4>
                <p className="text-gray-700">Screen prospects and route only qualified cases to your team</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">🤖</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Automated Intake</h4>
                <p className="text-gray-700">Collect case details and documents before the first call</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">📅</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Seamless Scheduling</h4>
                <p className="text-gray-700">Auto-book consultations via your calendar tools</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Process (Audit → Strategy → Deploy)
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">1</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Audit</h4>
                <p className="text-gray-700">Map your intake, FAQs, tone, and compliance requirements.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h4>
                <p className="text-gray-700">Design conversation flows, guardrails, and knowledge sources.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#B9CEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Deploy</h4>
                <p className="text-gray-700">Launch on your website, chat, or CRM with analytics.</p>
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
                <div className="text-3xl mb-3">💬</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Website Chatbot</h4>
                <p className="text-gray-700">24/7 assistant trained on your content and policies</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📄</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Intake Automation</h4>
                <p className="text-gray-700">Forms and document collection with structured outputs</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🔗</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Integrations</h4>
                <p className="text-gray-700">Calendars, CRMs, email, and knowledge bases</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h4>
                <p className="text-gray-700">Conversation insights and performance reporting</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Put AI to work for your firm—securely and responsibly.
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Book a discovery call to identify the highest-impact AI agent for your firm.
            </p>
            <button className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
              Get Started Today
            </button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default CreateAIAgents;
