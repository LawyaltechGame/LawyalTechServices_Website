import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const BelowHeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full bg.white py-12 md:py-20 px-4 md:px-8 gap-8 md:gap-0">
      {/* Left Side: Image with large rounded corners */}
      <div className="w-full md:flex-1 flex items-center justify-center">
        <ScrollAnimationWrapper animationType="slideLeft" delay={0.2}>
          <div className="w-full max-w-[620px]">
            <picture>
              <source srcSet="https://www.shutterstock.com/image-photo/whiteboard-woman-brainstorm-boardroom-idea-600nw-2463472225.jpg" type="image/avif" />
              <source srcSet="https://www.shutterstock.com/image-photo/whiteboard-woman-brainstorm-boardroom-idea-600nw-2463472225.jpg" type="image/webp" />
              <img
                src="https://www.shutterstock.com/image-photo/whiteboard-woman-brainstorm-boardroom-idea-600nw-2463472225.jpg"
                alt="Below Hero Section"
                className="w-full h-auto object-cover rounded-[32px] md:rounded-[48px] shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                loading="lazy"
                decoding="async"
                width={620}
                height={620}
              />
            </picture>
          </div>
        </ScrollAnimationWrapper>
      </div>
      
      {/* Right Side: Text content */}
      <div className="w-full md:flex-1 flex flex-col justify-center max-w-2xl md:pl-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight text-[#050706] mb-4 md:mb-6">
            Clear messaging for complex legal work
          </h2>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <p className="text-base md:text-lg text-[#666] mb-0 leading-relaxed">
            We turn complex services into simple benefits clients understand—so they inquire sooner.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default BelowHeroSection;