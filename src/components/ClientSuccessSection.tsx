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

        {/* Unified Success Box */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Combined Figures (single block) */}
            <div className="mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  {successStories.map((story, index) => (
                    <span key={index} className="inline-flex items-baseline">
                      <span className={`${story.color}`}>{story.metric}</span>
                      <span className="text-gray-700 ml-2 mr-2">{story.metricLabel}</span>
                      {index < successStories.length - 1 && (
                        <span className="mx-2 text-gray-300">•</span>
                      )}
                    </span>
                  ))}
                </div>
                <div className="text-sm md:text-base text-gray-600 mt-2">Across multiple practice areas and firm sizes</div>
              </div>
            </div>

            <div className="h-px bg-gray-100 mb-8" />

            {/* Compact Story Snapshots */}
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              {successStories.map((story, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="text-base font-bold text-gray-900 mb-3">{story.clientType}</h3>
                  <ul className="space-y-2 text-sm">
                    <li><span className="font-semibold text-gray-900">Challenge:</span> {story.challenge}</li>
                    <li><span className="font-semibold text-gray-900">Approach:</span> {story.approach}</li>
                    <li><span className="font-semibold text-gray-900">Result:</span> {story.result}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
