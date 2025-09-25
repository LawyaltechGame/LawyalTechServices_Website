import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import heroImage from '../Images/Image for Lawyaltechservice hero section.jpg';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-[#f8faf5] lg:items-stretch lg:gap-6 min-h-screen lg:min-h-[80vh] xl:min-h-[85vh] 2xl:min-h-[90vh]">
      {/* Text Content - Ordered first on mobile, responsive on all devices */}
      <div className="order-1 flex-1 lg:flex-[1] flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-[3vw] xl:px-[4vw] py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 relative">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
          <h1 className="text-[clamp(2.5rem,4.5vw,2.5rem)] sm:text-[clamp(2rem,5vw,3rem)] md:text-[clamp(2.25rem,5.5vw,3.5rem)] lg:text-[clamp(2.5rem,4.5vw,3.75rem)] xl:text-[clamp(3rem,4.8vw,4.25rem)] 2xl:text-[clamp(3.25rem,5vw,4.75rem)] leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] m-0 text-[#050706] tracking-tight font-medium lg:px-5 mt-2 sm:mt-3 md:mt-4 lg:mt-6">
            Legal Marketing That Drives <span className="text-[#D2DE26]">Measurable</span> Growth
          </h1>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-[#050706] max-w-none sm:max-w-2xl lg:px-5 leading-relaxed font-normal">
            We build high-converting websites and content for law firms and legal tech companies.
          </p>
        </ScrollAnimationWrapper>
        
        {/* CTA Button - Fully responsive */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6} className='px-0 lg:px-5 py-4 sm:py-5 md:py-6 lg:py-8'>
          <a 
            href="https://calendar.app.google/kjahD1qZzZR1aTbW7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block w-full sm:w-auto px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-3.5 md:py-4 lg:py-4 xl:py-5 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-[1.02] sm:hover:scale-105 transform shadow-lg hover:shadow-xl text-center min-w-[200px] sm:min-w-[220px] md:min-w-[250px] lg:min-w-[280px]"
          >
            Book a Strategy Call
          </a>
        </ScrollAnimationWrapper>
      </div>

      {/* Image Section - Enhanced responsive design */}
      <ScrollAnimationWrapper animationType="slideLeft" delay={0.8}>
        <div className="order-2 lg:order-none lg:flex-[1.2] xl:flex-[1.3] 2xl:flex-[1.4] overflow-hidden relative mt-2 sm:mt-3 md:mt-4 lg:mt-0">
          <div className="w-full h-full p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 relative">
            {/* Main frame container with responsive styling */}
            <div className="w-full h-full bg-gradient-to-br from-white via-slate-50 to-white rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] xl:rounded-[40px] p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-xl lg:shadow-2xl relative overflow-hidden">
              
              {/* Image container with responsive heights */}
              <div className="w-full h-auto mx-auto relative min-h-[280px] sm:min-h-[350px] md:min-h-[420px] lg:min-h-[480px] xl:min-h-[540px] 2xl:min-h-[600px]">
                <picture>
                  <source srcSet={heroImage} type="image/avif" />
                  <source srcSet={heroImage} type="image/webp" />
                  <img 
                    src={heroImage}
                    alt="Lawyal Tech marketing collaboration"
                    className="w-full h-auto md:h-full max-h-[75vh] object-cover rounded-[18px] md:rounded-[30px] shadow-xl transition-transform duration-700 md:hover:scale-105" 
                    loading="eager"
                    decoding="async"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    width={1200}
                    height={1600}
                    srcSet={`${heroImage} 800w, ${heroImage} 1200w`}
                  />
                </picture>
                
                {/* Corner accents - Responsive sizing and visibility */}
                <div className="hidden sm:block absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-gradient-to-br from-[#D2DE26] to-[#D2DE26] rounded-full shadow-md lg:shadow-lg"></div>
                <div className="hidden sm:block absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 bg-gradient-to-br from-black to-black rounded-full shadow-md lg:shadow-lg"></div>
                <div className="hidden sm:block absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 w-3 sm:w-4 md:w-4 h-3 sm:h-4 md:h-4 bg-gradient-to-br from-black to-black rounded-full shadow-md lg:shadow-lg"></div>
                <div className="hidden sm:block absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-gradient-to-br from-[#D2DE26] to-[#D2DE26] rounded-full shadow-md lg:shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default HeroSection; 