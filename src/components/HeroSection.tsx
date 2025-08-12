import heroImg from '../Images/Image for Lawyaltechservice hero section.jpg';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const HeroSection = () => {
  return (
    <section className="flex h-screen bg-[#f8faf5]">
      {/* Left Side - Image */}
      <ScrollAnimationWrapper animationType="slideLeft" delay={0.8}>
        <div className="flex-[2.1] h-screen overflow-hidden relative">
          <div className="w-full h-full b-gradient-to-br from-slate-800 via-gray-900 to-gray-900 p-8 relative">
            {/* Main frame container */}
            <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-white rounded-[40px] p-4 shadow-2xl relative overflow-hidden">
              {/* Image container with enhanced styling */}
              <div className="w-full h-full relative">
                <img 
                  src={heroImg} 
                  alt="Hero" 
                  className="w-full h-full object-cover rounded-[30px] shadow-xl transition-transform duration-700 hover:scale-105" 
                />
                
                {/* Corner accent elements with better colors */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-br from-[#D2DE26] to-[#D2DE26] rounded-full shadow-lg"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-black to-black rounded-full shadow-lg"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-black to-black rounded-full shadow-lg"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-br from-[#D2DE26] to-[#D2DE26] rounded-full shadow-lg"></div>
              </div>
            </div>
            
            {/* Floating elements with better colors */}
            <div className="absolute top-20 right-20 w-3 h-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-20 w-2 h-2 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full animate-ping"></div>
          </div>
        </div>
      </ScrollAnimationWrapper>
      
      {/* Right Side - Text */}
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
    </section>
  );
};

export default HeroSection;