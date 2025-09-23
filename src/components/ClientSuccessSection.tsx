import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const ClientSuccessSection = () => {
  const successStories = [
    {
      metric: "250%",
      metricLabel: "lead increase in 6 months",
      clientType: "Personal Injury Law Firm",
      challenge: "Low search visibility; mobile UX issues",
      approach: "SEO + content plan; mobile-first redesign",
      result: "Qualified leads up 250% in 6 months",
      color: "text-green-600"
    },
    {
      metric: "180%",
      metricLabel: "organic traffic growth",
      clientType: "Family Law Practice",
      challenge: "Limited local reach; few consultations",
      approach: "Local SEO; practice-area pages; GMB optimization",
      result: "+180% organic traffic; +40% bookings",
      color: "text-blue-600"
    },
    {
      metric: "300%",
      metricLabel: "ROI improvement",
      clientType: "Corporate Law Firm",
      challenge: "Need thought leadership",
      approach: "Whitepapers, case studies, insights cadence",
      result: "3× ROI; recognized as industry leaders",
      color: "text-purple-600"
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
              Proven outcomes from firms who partnered with us
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
                  <div className={`text-6xl font-extrabold ${story.color} mb-2`}>
                    {story.metric}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {story.metricLabel}
                  </div>
                </div>

                {/* Client Type */}
                <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                  {story.clientType}
                </h3>

                {/* Compact details */}
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold text-gray-900">Challenge:</span> {story.challenge}</p>
                  <p><span className="font-semibold text-gray-900">Approach:</span> {story.approach}</p>
                  <p><span className="font-semibold text-gray-900">Result:</span> {story.result}</p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
