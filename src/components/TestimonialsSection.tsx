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
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-16 px-8 gap-16" style={{ minHeight: '80vh' }}>
      {/* Text Section - Above */}
      <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#050706] leading-tight mb-8" 
            style={{
              wordBreak: 'normal', 
              letterSpacing: '-0.02em', 
              lineHeight: 1.05
            }}
          >
            What our clients<br />have to say
          </h2>
        </div>
      </ScrollAnimationWrapper>
      
      {/* Testimonials Section - Below */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <ScrollAnimationWrapper 
              key={idx}
              animationType="slideUp" 
              delay={0.4 + idx * 0.2}
              className="flex flex-col items-center text-center"
            >
              {/* Company Icon */}
              <ScrollAnimationWrapper animationType="scale" delay={0.6 + idx * 0.2}>
                <div className="w-32 h-32 bg-[#050706] rounded-3xl flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-[#0a0d0a] mb-6">
                  <span className="text-[#D2DE26] text-xl font-normal text-center leading-tight tracking-tight select-none px-2">
                    {testimonial.company}
                  </span>
                </div>
              </ScrollAnimationWrapper>
              
              {/* Testimonial Content */}
              <div className="flex flex-col items-center">
                <p className="text-lg text-[#050706] leading-relaxed mb-6 font-normal">
                  {testimonial.text}
                </p>
                
                <div>
                  <div className="text-xl font-bold text-[#050706] mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#666] font-normal uppercase tracking-wide">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;