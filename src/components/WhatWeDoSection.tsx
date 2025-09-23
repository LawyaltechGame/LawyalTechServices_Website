import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const cardData = [
  {
    title: 'Law Firm Websites',
    bullets: [
      'Conversion-focused design',
      'SEO-ready structure',
      'Fast, secure, mobile-first'
    ]
  },
  {
    title: 'Content That Ranks',
    bullets: [
      'Practice-area blogs',
      'Thought leadership',
      'Case pages that convert'
    ]
  },
  {
    title: 'Lead Gen & Funnels',
    bullets: [
      'Landing pages + CTAs',
      'Email nurture sequences',
      'Analytics + optimization'
    ]
  }
];

const WhatWeDoSection = () => {
  return (
    <section className="w-full bg-white pt-24 pb-24 px-4 flex flex-col items-center relative">
      <div className="relative w-full max-w-7xl">
        <div className="text-center mb-12">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050706] mb-4">
              What We Do
            </h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationType="slideUp" delay={0.35}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Three core services to grow qualified leads and revenue.
            </p>
          </ScrollAnimationWrapper>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, idx) => (
            <ScrollAnimationWrapper 
              key={card.title}
              animationType="slideUp" 
              delay={0.2 + idx * 0.1}
            >
              <div className="bg-[#f8faf5] border border-gray-100 rounded-2xl p-8 hover:border-[#D2DE26] transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-[#050706] mb-4">{card.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#B9CEFF]"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;