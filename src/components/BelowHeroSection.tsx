import { useState, useEffect, useRef } from 'react';
import belowHeroImg from '../Images/Below hero section image.avif';

const BelowHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      className="flex items-center justify-center w-full bg-white py-20 px-8"
    >
      {/* Left Side: Image with large rounded corners */}
      <div className="flex-1 flex items-center justify-center">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-16 opacity-0 scale-95'}`}>
          <img
            src={belowHeroImg}
            alt="Below Hero Section"
            className="w-[620px] h-[620px] object-cover rounded-[48px] shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            style={{ maxWidth: '90vw', maxHeight: '90vw' }}
          />
        </div>
      </div>
      
      {/* Right Side: Text content */}
      <div className="flex-1 flex flex-col justify-center pl-16 max-w-2xl">
        <h2 className={`text-[3rem] font-medium leading-tight text-[#111] mb-8 transition-all duration-1000 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          Creating unique<br />campaigns that<br />help your business<br />grow
        </h2>
        
        <p className={`text-lg text-[#666] mb-8 leading-relaxed transition-all duration-1000 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          Use this section to describe your company and the products you offer. You could share your company's story and details about why you are in business.
        </p>
        
        <button className={`px-8 py-4 w-auto h-auto text-xl font-medium rounded-full bg-[#111] text-white border-none cursor-pointer self-start transition-all duration-300 hover:bg-[#222] hover:scale-105 hover:shadow-xl transform delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default BelowHeroSection