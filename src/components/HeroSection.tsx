import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import heroImage from '../Images/Image for Lawyaltechservice hero section.jpg';

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
              <div className="w-[40vw] h-full relative">
                <picture>
                  <source srcSet={heroImage} type="image/avif" />
                  <source srcSet={heroImage} type="image/webp" />
                  <img 
                    src={heroImage}
                    alt="Lawyal Tech marketing collaboration"
                    className="w-full h-full object-cover rounded-[30px] shadow-xl transition-transform duration-700 hover:scale-105" 
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    width={1200}
                    height={1600}
                    srcSet={`${heroImage} 800w, ${heroImage} 1200w`}
                  />
                </picture>
                
                {/* Corner accent elements with better colors */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-br from-[#D2DE26] to-[#D2DE26] rounded-full shadow-lg"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from.black to-black rounded-full shadow-lg"></div>
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
          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.05] m-0 text-[#050706] tracking-tight p-5 mt-16">
            Legal Marketing That Drives Measurable Growth
          </h1>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <p className="mt-6 text-xl text-[#050706] max-w-2xl px-5">
            We build high-converting websites and content for law firms and legal tech companies.
          </p>
        </ScrollAnimationWrapper>
        
        {/* Single CTA */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6} className='px-5 py-8'>
          <a href="https://calendar.app.google/kjahD1qZzZR1aTbW7" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg inline-block">
            Book a Strategy Call
          </a>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default HeroSection;