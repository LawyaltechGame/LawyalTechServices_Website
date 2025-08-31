import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const ClientSuccessSection = () => {
  const successStories = [
    {
      metric: "250%",
      metricLabel: "LEAD INCREASE",
      clientType: "Personal Injury Law Firm",
      challenge: "Outdated website with poor mobile experience and low search rankings",
      approach: "Complete website redesign with SEO optimization and targeted content strategy",
      result: "250% increase in qualified leads within 6 months",
      color: "text-green-500"
    },
    {
      metric: "180%",
      metricLabel: "TRAFFIC GROWTH",
      clientType: "Family Law Practice",
      challenge: "Limited online visibility and difficulty attracting local clients",
      approach: "Local SEO strategy with practice area-specific content and Google My Business optimization",
      result: "180% increase in organic traffic and 40% more consultation bookings",
      color: "text-blue-500"
    },
    {
      metric: "300%",
      metricLabel: "ROI IMPROVEMENT",
      clientType: "Corporate Law Firm",
      challenge: "Needed to establish thought leadership and attract high-value corporate clients",
      approach: "Comprehensive content marketing strategy with whitepapers, case studies, and industry insights",
      result: "300% ROI improvement and recognition as industry thought leaders",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from law firms who transformed their digital presence with our services
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <ScrollAnimationWrapper 
              key={index} 
              animationType="slideUp" 
              delay={0.3 + (index * 0.1)}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Key Metric */}
                <div className="text-center mb-6">
                  <div className={`text-4xl font-bold ${story.color} mb-2`}>
                    {story.metric}
                  </div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {story.metricLabel}
                  </div>
                </div>

                {/* Client Type */}
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {story.clientType}
                </h3>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {story.challenge}
                  </p>
                </div>

                {/* Our Approach */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Our Approach:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {story.approach}
                  </p>
                </div>

                {/* Result */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Result:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {story.result}
                  </p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6} className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to join our success stories?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's create your own success story with our proven strategies.
            </p>
            <button className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
              Start Your Success Story
            </button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
