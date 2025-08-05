import  { useState, useEffect, useRef } from 'react';

const cardData = [
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 24L16 8L24 24H8Z" fill="white"/>
        </svg>
      </div>
    ),
    title: 'Social Media',
    desc: 'Transform your social presence with data-driven strategies that engage your audience and drive meaningful conversations across all platforms.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" fill="white"/>
          <circle cx="16" cy="16" r="6" fill="currentColor"/>
        </svg>
      </div>
    ),
    title: 'PPC Advertising',
    desc: 'Maximize your ROI with precision-targeted campaigns that reach the right audience at the perfect moment with compelling ad experiences.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 16L16 8L8 16L16 24L24 16Z" fill="white"/>
        </svg>
      </div>
    ),
    title: 'SEO Optimization',
    desc: 'Dominate search results with comprehensive SEO strategies that boost visibility, drive organic traffic, and establish authority.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    icon: (
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="8" height="20" rx="2" fill="white"/>
          <rect x="18" y="6" width="8" height="20" rx="2" fill="white"/>
        </svg>
      </div>
    ),
    title: 'Strategic Planning',
    desc: 'Build winning digital strategies with comprehensive planning that aligns with your business goals and market opportunities.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
];

const WhatWeDoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-32 px-4 flex flex-col items-center min-h-screen relative overflow-hidden"
    >
      
      
      <div className="relative z-10 w-full max-w-7xl">
        <div className="text-center mb-20">
          <h2 className={`text-7xl font-medium bg-black bg-clip-text text-transparent mb-6 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            What We Do
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            We create digital experiences that transform businesses and connect brands with their audiences in meaningful ways.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, idx) => (
            <div
              key={card.title}
              className={`group relative bg-white border border-gray-100 rounded-3xl p-8 transition-all duration-700 ease-out hover:border-gray-200 hover:scale-105 hover:-translate-y-4 cursor-pointer shadow-sm hover:shadow-xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ 
                transitionDelay: `${200 + idx * 150}ms`,
              }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 ${card.bgColor} opacity-0 group-hover:opacity-30 rounded-3xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`} style={{ transitionDelay: `${400 + idx * 150}ms` }}>
                  {card.icon}
                </div>
                
                <h3 className={`text-2xl font-bold text-gray-900 mb-4 transition-all duration-500  group-hover:bg-gradient-to-r group-hover:${card.color} group-hover:bg-clip-text ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${500 + idx * 150}ms` }}>
                  {card.title}
                </h3>
                
                <p className={`text-gray-600 mb-8 leading-relaxed transition-all duration-500 group-hover:text-gray-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${600 + idx * 150}ms` }}>
                  {card.desc}
                </p>
                
                <button 
                  className={`group/btn inline-flex items-center gap-3 px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 rounded-xl text-gray-700 font-medium transition-all duration-500 hover:scale-105 cursor-pointer whitespace-nowrap ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${700 + idx * 150}ms` }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(`${card.title} - Learn More clicked`);
                  }}
                >
                  <span>Explore More</span>
                  <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:bg-gray-400">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${card.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;