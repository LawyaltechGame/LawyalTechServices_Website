import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { useEffect, useState, useRef } from 'react';

const HowItWorksSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const triggerPoint = windowHeight * 0.8; // Start animation when section is 80% visible
      
      if (sectionTop < triggerPoint && sectionTop + sectionHeight > 0) {
        // Calculate progress (0 to 1)
        const visibleHeight = Math.min(triggerPoint - sectionTop, sectionHeight);
        const progress = Math.max(0, Math.min(1, visibleHeight / (sectionHeight * 0.8)));
        setScrollProgress(progress);
      } else if (sectionTop >= triggerPoint) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We start with a comprehensive discussion about your goals, target audience, and vision for your digital presence."
    },
    {
      number: "02", 
      title: "Tailored Proposal",
      description: "Based on our discovery, we create a customized strategy and proposal that aligns with your specific needs and budget."
    },
    {
      number: "03",
      title: "Kickoff & Planning",
      description: "We establish timelines, milestones, and begin the detailed planning phase to ensure smooth execution."
    },
    {
      number: "04",
      title: "Content/Website Creation/Digital Marketing",
      description: "Our team brings your vision to life with professional content creation, website development, and strategic marketing implementation."
    },
    {
      number: "05",
      title: "Review & Optimization",
      description: "We conduct thorough reviews, gather feedback, and optimize every element for maximum performance and impact."
    },
    {
      number: "06",
      title: "Growth & Results",
      description: "Monitor your success metrics and continue to scale your digital presence for sustained growth and results."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#f8faf5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#050706] mb-6 leading-tight">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our proven 6-step process ensures your success from initial concept to measurable results
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="relative">
          {/* Animated vertical timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block z-0" ref={timelineRef}>
            {/* Background timeline */}
            <div className="w-1 bg-gray-300 rounded-full" style={{ height: `${(steps.length - 1) * 256}px` }}></div>
            
            {/* Animated progress line */}
            <div 
              className="absolute top-0 left-0 w-1 bg-gradient-to-b from-[#D2DE26] to-[#a8b821] rounded-full transition-all duration-500 ease-out"
              style={{ 
                height: `${scrollProgress * (steps.length - 1) * 256}px`,
                boxShadow: '0 0 20px rgba(210, 222, 38, 0.5)'
              }}
            ></div>
            
            {/* Arrow tip */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out"
              style={{ 
                top: `${scrollProgress * (steps.length - 1) * 256}px`,
                opacity: scrollProgress > 0.05 ? 1 : 0
              }}
            >
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-[#D2DE26] drop-shadow-lg"></div>
            </div>
          </div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <ScrollAnimationWrapper 
                  animationType="slideUp" 
                  delay={0.3 + (index * 0.1)}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                    {/* Step Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-20 h-20 bg-[#D2DE26] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <span className="text-[#050706] font-bold text-xl">{step.number}</span>
                      </div>
                    </div>

                    {/* Content Card - Smaller width */}
                    <div className={`flex-1 max-w-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                      <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#D2DE26] transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-[#050706] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for mobile */}
                    <div className="md:hidden w-full h-8"></div>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.9} className="text-center mt-16">
          <button className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
            Start Your Journey
          </button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default HowItWorksSection;