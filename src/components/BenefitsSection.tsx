import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Increased Client Acquisition",
      description: "Search Engine Optimization (SEO), Geographic Targeting (GEO), Artificial Intelligence Optimization (AIO), and strategic content designed to attract and convert.",
      icon: "🎯"
    },
    {
      title: "Precise Targeting by Practice Area",
      description: "Content tailored to family law, personal injury, corporate law, etc.",
      icon: "⚖️"
    },
    {
      title: "Reputation & Authority",
      description: "Position your firm as a thought leader.",
      icon: "🏆"
    },
    {
      title: "Actionable Insights",
      description: "Analytics and reporting that guide smarter decisions.",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#050706] mb-6 leading-tight">
              Why Law Firms Choose Lawyal Tech
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the strategic advantages that set us apart in legal digital marketing
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimationWrapper 
              key={index} 
              animationType="slideUp" 
              delay={0.3 + (index * 0.1)}
            >
              <div className="bg-[#f8faf5] rounded-2xl p-8 border border-gray-100 hover:border-[#D2DE26] transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#050706] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7} className="text-center mt-16">
          <button className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
            Book a Strategy Call
          </button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default BenefitsSection;
