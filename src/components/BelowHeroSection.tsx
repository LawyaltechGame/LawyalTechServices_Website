import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const BelowHeroSection = () => {
  return (
    <section className="flex items-center justify-center w-full bg-white py-20 px-8">
      {/* Left Side: Image with large rounded corners */}
      <div className="flex-1 flex items-center justify-center">
        <ScrollAnimationWrapper animationType="slideLeft" delay={0.2}>
          <div>
            <img
              src="https://www.shutterstock.com/image-photo/whiteboard-woman-brainstorm-boardroom-idea-600nw-2463472225.jpg"
              alt="Below Hero Section"
              className="w-[620px] h-[620px] object-cover rounded-[48px] shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              style={{ maxWidth: '90vw', maxHeight: '90vw' }}
            />
          </div>
        </ScrollAnimationWrapper>
      </div>
      
      {/* Right Side: Text content */}
      <div className="flex-1 flex flex-col justify-center pl-16 max-w-2xl">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <h2 className="text-[3rem] font-medium leading-tight text-[#050706] mb-8">
          Amplify Your<br />Legal Tech<br />Brand with Words<br />That Work
          </h2>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <p className="text-lg text-[#666] mb-8 leading-relaxed">
          Transform your legal tech story with us! We bring expertise in contract management, document automation, and AI in law to life through clear, persuasive writing. Our trusted partnerships and industry recognition help us craft content that drives results - from thought leadership to business growth.
          </p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="slideUp" delay={0.8}>
          <button className="px-8 py-4 w-auto h-auto text-xl font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer self-start transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 hover:shadow-xl transform">
            LEARN MORE
          </button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default BelowHeroSection;