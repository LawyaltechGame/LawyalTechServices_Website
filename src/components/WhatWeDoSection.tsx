import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const cardData = [
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-[#D2DE26] to-[#b8c922] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 24L16 8L24 24H8Z" fill="white"/>
        </svg>
      </div>
    ),
    title: 'Social Media',
    desc: 'Transform your social presence with data-driven strategies that engage your audience and drive meaningful conversations across all platforms.',
    color: 'from-[#D2DE26] to-[#b8c922]',
    bgColor: 'bg-[#f8faf5]',
    borderColor: 'border-[#D2DE26]'
  },
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-[#D2DE26] to-[#b8c922] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" fill="white"/>
          <circle cx="16" cy="16" r="6" fill="currentColor"/>
        </svg>
      </div>
    ),
    title: 'PPC Advertising',
    desc: 'Maximize your ROI with precision-targeted campaigns that reach the right audience at the perfect moment with compelling ad experiences.',
    color: 'from-[#D2DE26] to-[#b8c922]',
    bgColor: 'bg-[#f8faf5]',
    borderColor: 'border-[#D2DE26]'
  },
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-[#D2DE26] to-[#b8c922] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 16L16 8L8 16L16 24L24 16Z" fill="white"/>
        </svg>
      </div>
    ),
    title: 'SEO Optimization',
    desc: 'Dominate search results with comprehensive SEO strategies that boost visibility, drive organic traffic, and establish authority.',
    color: 'from-[#D2DE26] to-[#b8c922]',
    bgColor: 'bg-[#f8faf5]',
    borderColor: 'border-[#D2DE26]'
  },
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-[#D2DE26] to-[#b8c922] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="8" height="20" rx="2" fill="white"/>
          <rect x="18" y="6" width="8" height="20" rx="2" fill="white"/>
        </svg>
      </div>
    ),
    title: 'Strategic Planning',
    desc: 'Build winning digital strategies with comprehensive planning that aligns with your business goals and market opportunities.',
    color: 'from-[#D2DE26] to-[#b8c922]',
    bgColor: 'bg-[#f8faf5]',
    borderColor: 'border-[#D2DE26]'
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="w-full bg-white pt-32 pb-32 px-4 flex flex-col items-center min-h-screen relative">
      <div className="relative w-full max-w-7xl">
        <div className="text-center mb-20">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <h2 className="text-7xl font-medium bg-[#050706] bg-clip-text text-transparent mb-6">
              What We Do
            </h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We create digital experiences that transform businesses and connect brands with their audiences in meaningful ways.
            </p>
          </ScrollAnimationWrapper>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, idx) => (
            <ScrollAnimationWrapper 
              key={card.title}
              animationType="slideUp" 
              delay={0.2 + idx * 0.1}
            >
              <div className="group relative bg-white border border-gray-100 rounded-3xl p-8 mt-6 mb-6 transition-all duration-700 ease-out hover:border-[#D2DE26] hover:scale-105 hover:-translate-y-4 cursor-pointer shadow-sm hover:shadow-xl">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 ${card.bgColor} opacity-0 group-hover:opacity-30 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    {card.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-[#050706] mb-4 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:${card.color} group-hover:bg-clip-text`}>
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed transition-all duration-500 group-hover:text-gray-700">
                    {card.desc}
                  </p>
                  
                  <button 
                    className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-[#f8faf5] hover:bg-[#D2DE26] border border-gray-200 hover:border-[#D2DE26] rounded-xl text-[#050706] font-medium transition-all duration-500 hover:scale-105 cursor-pointer whitespace-nowrap"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log(`${card.title} - Learn More clicked`);
                    }}
                  >
                    <span>Explore More</span>
                    <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-[#050706]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${card.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;