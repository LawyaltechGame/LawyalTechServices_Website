import { useRef, useEffect, useState } from 'react';

const testimonials = [
  {
    company: 'Digitools.',
    text: '"A testimonial from a client who benefited from your product or service. Testimonials are a great way of establishing credibility and promoting your company\'s brand."',
    name: 'Dwan Clark',
    title: 'CEO DIGITOOLS',
  },
  {
    company: 'A/RAMIS',
    text: '"A testimonial from a client who benefited from your product or service. Testimonials are a great way of establishing credibility and promoting your company\'s brand."',
    name: 'Dwan Clark',
    title: 'CEO A/RAMIS',
  },
  {
    company: 'Taycoon',
    text: '"A testimonial from a client who benefited from your product or service. Testimonials are a great way of establishing credibility and promoting your company\'s brand."',
    name: 'Dwan Clark',
    title: 'CEO Taycoon',
  },
  {
    company: 'SHARK',
    text: '"A testimonial from a client who benefited from your product or service. Testimonials are a great way of establishing credibility and promoting your company\'s brand."',
    name: 'Dwan Clark',
    title: 'CEO SHARK',
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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
      className="w-full bg-white flex flex-col lg:flex-row items-stretch justify-between py-[10vh] px-[4vw] gap-8"
      style={{ minHeight: '80vh' }}
    >
      {/* Left Side: Testimonials */}
      <div className="flex-1 flex flex-col gap-20 max-w-2xl justify-center">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`flex flex-row items-start gap-8 transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
            style={{ transitionDelay: `${300 + idx * 200}ms` }}
          >
            {/* Company Icon */}
            <div className={`flex-shrink-0 w-[140px] h-[140px] bg-[#111] rounded-[2.5rem] flex items-center justify-center shadow-xl transition-all duration-800 hover:scale-105 hover:shadow-2xl hover:bg-[#222] ${isVisible ? 'scale-100 rotate-0' : 'scale-75 -rotate-12'}`}
              style={{ transitionDelay: `${400 + idx * 200}ms` }}
            >
              <span className="text-white text-[1.8rem] font-normal text-center leading-tight tracking-tight select-none px-2">
                {testimonial.company}
              </span>
            </div>
            
            {/* Testimonial Content */}
            <div className="flex-1 flex flex-col justify-center">
              <p className={`text-[1.65rem] text-[#111] leading-snug mb-8 font-normal transition-all duration-800 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${500 + idx * 200}ms` }}
              >
                {testimonial.text}
              </p>
              
              <div className={`transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${600 + idx * 200}ms` }}
              >
                <div className="text-[1.5rem] font-bold text-[#111] mb-1">
                  {testimonial.name}
                </div>
                <div className="text-[1rem] text-[#666] font-normal uppercase tracking-wide">
                  {testimonial.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Right Side: Heading */}
      <div className={`flex-1 flex flex-col justify-start items-end transition-all duration-1200 ease-out pt-0 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'}`}
        style={{ transitionDelay: '200ms' }}
      >
        <h2 className="text-[6.5rem] font-normal text-[#111] leading-[1.05] text-right pr-8 transition-all duration-1000" 
          style={{
            wordBreak: 'normal', 
            letterSpacing: '-0.02em', 
            lineHeight: 1.05,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '400ms'
          }}
        >
          What our<br />clients<br />have to say
        </h2>
      </div>
    </section>
  );
};

export default TestimonialsSection;