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
      <div className="flex-1 bg-[#B9CEFF] flex flex-col justify-center px-[4vw] py-20 relative">
        <div className={`max-w-2xl transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-[4.5rem] font-normal text-[#111] leading-[1.05] mb-8 tracking-tight">
            Do you want to<br />
            boost your<br />
            business today?
          </h2>
          
          <p className={`text-lg text-[#111] leading-relaxed mb-12 max-w-lg transition-all duration-1000 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            This is your chance to invite visitors to contact you. Tell them you'll be happy to answer all their questions as soon as possible.
          </p>
          
          <button className={`bg-[#111] text-white text-xl font-medium rounded-full px-12 py-4 transition-all duration-300 hover:bg-[#222] hover:scale-105 hover:shadow-xl delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            CONTACT US
          </button>
        </div>
      </div>
      
      {/* Right Section - Image with Curved Boundary */}
      <div className={`flex-[1.3] bg-[#B9CEFF] relative transition-all duration-1200 ease-out delay-300 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'}`}>
        {/* Image */}
        <div className="w-full h-full relative overflow-hidden rounded-bl-[80px]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="People working on laptops in office"
            className={`w-full h-full object-cover rounded-bl-[80px] transition-all duration-1000 delay-500 ${isVisible ? 'scale-100' : 'scale-110'}`}
          />
          
          {/* Overlay gradient for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5 rounded-bl-[80px]"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;