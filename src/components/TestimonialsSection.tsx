import ScrollAnimationWrapper from './ScrollAnimationWrapper';

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
  return (
    <section className="w-full bg-white flex flex-col lg:flex-row items-stretch justify-between py-[10vh] px-[4vw] gap-8" style={{ minHeight: '80vh' }}>
      {/* Left Side: Testimonials */}
      <div className="flex-1 flex flex-col gap-20 max-w-2xl justify-center">
        {testimonials.map((testimonial, idx) => (
          <ScrollAnimationWrapper 
            key={idx}
            animationType="slideLeft" 
            delay={0.2 + idx * 0.1}
          >
            <div className="flex flex-row items-start gap-8">
              {/* Company Icon */}
              <ScrollAnimationWrapper animationType="scale" delay={0.4 + idx * 0.1}>
                <div className="flex-shrink-0 w-[140px] h-[140px] bg-[#050706] rounded-[2.5rem] flex items-center justify-center shadow-xl transition-all duration-800 hover:scale-105 hover:shadow-2xl hover:bg-[#0a0d0a]">
                  <span className="text-[#D2DE26] text-[1.8rem] font-normal text-center leading-tight tracking-tight select-none px-2">
                    {testimonial.company}
                  </span>
                </div>
              </ScrollAnimationWrapper>
              
              {/* Testimonial Content */}
              <div className="flex-1 flex flex-col justify-center">
                <ScrollAnimationWrapper animationType="slideUp" delay={0.5 + idx * 0.1}>
                  <p className="text-[1.65rem] text-[#050706] leading-snug mb-8 font-normal">
                    {testimonial.text}
                  </p>
                </ScrollAnimationWrapper>
                
                <ScrollAnimationWrapper animationType="slideUp" delay={0.6 + idx * 0.1}>
                  <div>
                    <div className="text-[1.5rem] font-bold text-[#050706] mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-[1rem] text-[#666] font-normal uppercase tracking-wide">
                      {testimonial.title}
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </ScrollAnimationWrapper>
        ))}
      </div>
      
      {/* Right Side: Heading */}
      <ScrollAnimationWrapper animationType="slideRight" delay={0.2}>
        <div className="flex-1 flex flex-col justify-start items-end pt-0">
          <h2 className="text-[6.5rem] font-normal text-[#050706] leading-[1.05] text-right pr-8" 
            style={{
              wordBreak: 'normal', 
              letterSpacing: '-0.02em', 
              lineHeight: 1.05
            }}
          >
            What our<br />clients<br />have to say
          </h2>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default TestimonialsSection;