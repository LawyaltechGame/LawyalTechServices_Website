import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const testimonials = [
  {
    company: 'Hartwell & Co.',
    text: '“They rebuilt our site and content strategy. Consultations doubled in three months.”',
    name: 'Rachel Hartwell',
    title: 'Managing Partner',
  },
  {
    company: 'Lexify Labs',
    text: '“Clear messaging for a complex product. Demos up 140% and shorter sales cycles.”',
    name: 'Ajay Prakash',
    title: 'Founder & CEO',
  },
  {
    company: 'Northside Family Law',
    text: '“Local SEO + landing pages = steady qualified leads. Exactly what we needed.”',
    name: 'Elena Ross',
    title: 'Partner',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-16 px-8 gap-16" style={{ minHeight: '60vh' }}>
      {/* Text Section - Above */}
      <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050706] leading-tight mb-8">
            What our clients say
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
              delay={0.4 + idx * 0.15}
              className="flex"
            >
              <div className="flex flex-col items-start text-left bg-[#f8faf5] rounded-2xl p-8 border border-gray-100 hover:border-[#D2DE26] transition-all duration-300 hover:shadow-xl w-full">
                <div className="text-[#050706] text-lg leading-relaxed mb-6">
                  {testimonial.text}
                </div>
                <div className="mt-auto">
                  <div className="text-base font-semibold text-[#050706]">{testimonial.name}</div>
                  <div className="text-sm text-[#666]">{testimonial.title} • {testimonial.company}</div>
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