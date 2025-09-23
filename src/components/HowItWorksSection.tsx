import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { useEffect, useState, useRef } from 'react';

const HowItWorksSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [timelineOffsetTop, setTimelineOffsetTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);

  // Measure timeline height and offset between first and last steps
  const measureTimeline = () => {
    if (!timelineRef.current || stepRefs.current.length < 2) return;

    const first = stepRefs.current[0];
    const last = stepRefs.current[stepRefs.current.length - 1];
    if (!first || !last) return;

    const firstRect = first.getBoundingClientRect();
    const lastRect = last.getBoundingClientRect();
    const timelineRect = timelineRef.current.getBoundingClientRect();

    // Use centers of the step cards for cleaner alignment
    const firstCenter = firstRect.top + firstRect.height / 2 + window.scrollY;
    const lastCenter = lastRect.top + lastRect.height / 2 + window.scrollY;
    const timelineTop = timelineRect.top + window.scrollY;

    const height = Math.max(0, lastCenter - firstCenter);
    const offset = Math.max(0, firstCenter - timelineTop);

    setTimelineHeight(height);
    setTimelineOffsetTop(offset);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const triggerPoint = windowHeight * 0.8;

      if (sectionTop < triggerPoint && sectionTop + sectionHeight > 0) {
        const visibleHeight = Math.min(triggerPoint - sectionTop, sectionHeight);
        const progress = Math.max(0, Math.min(1, visibleHeight / (sectionHeight * 0.8)));
        setScrollProgress(progress);
      } else if (sectionTop >= triggerPoint) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    const handleResize = () => {
      measureTimeline();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    // Initial compute
    setTimeout(() => {
      measureTimeline();
      handleScroll();
    }, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const steps = [
    { number: '01', title: 'Discovery Call', description: 'Goals, audience, and priorities.' },
    { number: '02', title: 'Strategy & Proposal', description: 'Plan, timeline, and scope.' },
    { number: '03', title: 'Build & Launch', description: 'Site/content built, reviewed, and shipped.' },
    { number: '04', title: 'Measure & Optimize', description: 'Track results and improve each month.' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#f8faf5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#050706] mb-4 leading-tight">
              How It Works
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A simple process to go live fast—and grow steadily.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="relative">
          {/* Timeline column */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 hidden md:block z-0 top-0 bottom-0"
            ref={timelineRef}
          >
            {/* Background timeline (dynamic height) */}
            <div
              className="absolute left-0 w-1 bg-gray-300 rounded-full"
              style={{ top: `${timelineOffsetTop}px`, height: `${timelineHeight}px` }}
            ></div>

            {/* Animated progress line */}
            <div
              className="absolute left-0 w-1 bg-gradient-to-b from-[#D2DE26] to-[#a8b821] rounded-full transition-all duration-300 ease-out"
              style={{ top: `${timelineOffsetTop}px`, height: `${scrollProgress * timelineHeight}px`, boxShadow: '0 0 20px rgba(210, 222, 38, 0.5)' }}
            ></div>

            {/* Arrow tip */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out"
              style={{ top: `${timelineOffsetTop + scrollProgress * timelineHeight}px`, opacity: timelineHeight > 0 ? 1 : 0 }}
            >
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-[#D2DE26] drop-shadow-lg"></div>
            </div>
          </div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative" ref={(el) => { if (el) stepRefs.current[index] = el; }}>
                <ScrollAnimationWrapper 
                  animationType="slideUp" 
                  delay={0.3 + (index * 0.1)}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-20 h-20 bg-[#D2DE26] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <span className="text-[#050706] font-bold text-xl">{step.number}</span>
                      </div>
                    </div>
                    <div className={`flex-1 max-w-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                      <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#D2DE26] transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-[#050706] mb-2">{step.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
                      </div>
                    </div>
                    <div className="md:hidden w-full h-6"></div>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.9} className="text-center mt-12">
          <button className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
            Book a Strategy Call
          </button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default HowItWorksSection;