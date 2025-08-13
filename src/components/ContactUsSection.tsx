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
      className="w-full min-h-screen flex relative overflow-hidden"
    >
      {/* Left Section - Text and CTA */}
      <div className="flex-1 bg-[#f8faf5] flex flex-col justify-center px-[4vw] py-20 relative">
        <div className={`max-w-2xl transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-[4.5rem] font-normal text-[#050706] leading-[1.05] mb-8 tracking-tight">
            Do you want to<br />
            boost your<br />
            business today?
          </h2>
          
          <p className={`text-lg text-[#050706] leading-relaxed mb-12 max-w-lg transition-all duration-1000 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            This is your chance to invite visitors to contact you. Tell them you'll be happy to answer all their questions as soon as possible.
          </p>
          
          <button className={`bg-[#050706] text-[#D2DE26] text-xl font-medium rounded-full px-12 py-4 transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 hover:shadow-xl delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            CONTACT US
          </button>
        </div>
      </div>
      
      {/* Right Section - Image with Curved Boundary */}
      <div className="flex-[2.1] h-screen overflow-hidden relative">
          <div className="w-full h-full b-gradient-to-br from-slate-800 via-gray-900 to-gray-900 p-8 relative">
            {/* Main frame container */}
            <div className="w-full ml-5 h-full bg-gradient-to-br from-white via-slate-50 to-white rounded-[40px] p-4 shadow-2xl relative overflow-hidden">
              {/* Image container with enhanced styling */}
              <div className="w-full h-full relative">
                <img 
                  src="https://imageio.forbes.com/specials-images/imageserve/62727b19dc1908dc2c021596/Business-people-shaking-hands-in-the-office--Group-of-business-persons-in-business/960x0.jpg?format=jpg&width=960"
                  alt="Digital Marketing Analytics and Legal Tech" 
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
    </section>
  );
};

export default ContactUsSection;