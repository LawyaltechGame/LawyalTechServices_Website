import { useRef, useEffect, useState } from 'react';

const ContactUsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col md:flex-row relative overflow-hidden"
    >
      {/* Left Section - Text and CTA */}
      <div className="flex-1 order-1 md:order-none bg-[#f8faf5] flex flex-col justify-center px-4 md:px-[4vw] py-12 md:py-20 relative">
        <div className={`max-w-2xl transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 md:translate-y-20 opacity-0'}`}>
          <h2 className="text-[2.5rem] md:text-[4.5rem] font-normal text-[#050706] leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-tight">
            Book a <span className="text-[#D2DE26]">Strategy</span><br />
            Call Today
          </h2>
          
          <p className={`text-base md:text-lg text-[#050706] leading-relaxed mb-8 md:mb-12 max-w-lg transition-all duration-1000 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 md:translate-y-16 opacity-0'}`}>
            Tell us your goals. We’ll outline a clear plan to grow qualified leads and revenue.
          </p>
          
          <a href="https://calendar.app.google/kjahD1qZzZR1aTbW7" target="_blank" rel="noopener noreferrer" className={`inline-block bg-[#050706] text-[#D2DE26] text-lg md:text-xl font-medium rounded-full px-8 md:px-12 py-3 md:py-4 transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 hover:shadow-xl delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 md:translate-y-16 opacity-0'}`}>
            Book a Strategy Call
          </a>
        </div>
      </div>
      
      {/* Right Section - Image with Curved Boundary */}
      <div className="flex-[2.1] w-full md:w-auto h-[40vh] md:h-screen overflow-hidden relative order-2">
          <div className="w-full h-full p-4 md:p-8 relative">
            {/* Main frame container */}
            <div className="w-full md:ml-5 h-full bg-gradient-to-br from.white via-slate-50 to-white rounded-[24px] md:rounded-[40px] p-2 md:p-4 shadow-2xl relative overflow-hidden">
              {/* Image container with enhanced styling */}
              <div className="w-full h-full relative">
                <img 
                  src="https://imageio.forbes.com/specials-images/imageserve/62727b19dc1908dc2c021596/Business-people-shaking-hands-in-the-office--Group-of-business-persons-in-business/960x0.jpg?format=jpg&width=960"
                  alt="Digital Marketing Analytics and Legal Tech" 
                  className="w-full h-full object-cover rounded-[18px] md:rounded-[30px] shadow-xl transition-transform duration-700 md:hover:scale-105" 
                  loading="lazy"
                  decoding="async"
                  width={960}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ContactUsSection;