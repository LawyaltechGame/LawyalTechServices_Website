import heroImg from '../Images/Image for Lawyaltechservice hero section.jpg';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const HeroSection = () => {
  return (
    <section className="flex h-screen bg-[#f8faf5]">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center px-[4vw] relative h-screen">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
          <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[1.05] m-0 text-[#050706] tracking-tight mt-16">
            Your digital<br />presence is<br />about to sky<br />rocket.
          </h1>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="mt-12 bg-[#D2DE26] p-6 rounded-2xl w-[50vw] shadow-lg">
            <span className="text-[#050706] text-lg font-normal leading-relaxed">
              Use this section to describe your company and the products or services you offer. The goal is to create a connection with the visitor and give them confidence to build a relationship with you.
            </span>
          </div>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <button className="mt-8 px-8 py-4 w-auto h-auto text-xl font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer self-start transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 hover:shadow-xl transform">
            ABOUT US
          </button>
        </ScrollAnimationWrapper>
      </div>
      
      {/* Right Side */}
      <ScrollAnimationWrapper animationType="slideRight" delay={0.8}>
        <div className="flex-[2.1] h-screen overflow-hidden relative rounded-tl-[80px]">
          <img 
            src={heroImg} 
            alt="Hero" 
            className="w-full h-full object-cover rounded-tl-[80px]" 
          />
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default HeroSection;