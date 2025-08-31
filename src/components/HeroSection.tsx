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
                  src="https://thinkshaw.com/wp-content/uploads/2022/10/Proposal-image-scaled-1.jpg"
                  alt="Hero Section" 
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
          <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.05] m-0 text-[#050706] tracking-tight p-5 mt-16">
          Translating Legal<br />Insight into<br />Digital Impact.<br />
          </h1>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="mt-12 bg-[#D2DE26] p-6 rounded-2xl w-[50vw] shadow-lg">
            <span className="text-[#050706] text-lg font-normal leading-relaxed">
            Unleash the power of your legal tech story! We help innovative companies share their vision in a way that resonates. Our goal is to make complex ideas simple and accessible. We craft compelling content that drives real results and sparks meaningful connections.
            </span>
          </div>
        </ScrollAnimationWrapper>
        
        {/* Split CTA Section - Replacing About Us button */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6} className='px-2 py-5'>
          <div className="mt-8 flex gap-4 w-full max-w-xl">
            {/* For Law Firms CTA */}
            <button className="flex-1 px-6 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
              <div className="flex flex-col items-center text-center">
                <span className="font-bold text-base mb-1">For Law Firms</span>
                <span className="text-xs opacity-90 leading-tight">Build a client-attracting website & content strategy</span>
              </div>
            </button>

            {/* For Legal Tech CTA */}
            <button className="flex-1 px-6 py-4 text-lg font-medium rounded-full bg-[#D2DE26] text-[#050706] border-none cursor-pointer transition-all duration-300 hover:bg-[#b8c422] hover:scale-105 transform shadow-lg">
              <div className="flex flex-col items-center text-center">
                <span className="font-bold text-base mb-1">For Legal Tech</span>
                <span className="text-xs opacity-90 leading-tight">Translate innovation into thought leadership & growth</span>
              </div>
            </button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default HeroSection;