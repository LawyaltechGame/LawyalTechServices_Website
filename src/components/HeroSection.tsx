import { useState, useEffect } from 'react';
import heroImg from '../Images/Image for Lawyaltechservice hero section.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex h-screen bg-[#B9CEFF]">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center px-[4vw] relative h-screen">
        <h1 className={`text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[1.05] m-0 text-[#111] tracking-tight mt-16 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          Your digital<br />presence is<br />about to sky<br />rocket.
        </h1>
        
        <div className={`mt-12 bg-[#A4BDF8] p-6 rounded-2xl w-[50vw] shadow-lg transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}>
          <span className="text-[#111] text-lg font-normal leading-relaxed">
            Use this section to describe your company and the products or services you offer. The goal is to create a connection with the visitor and give them confidence to build a relationship with you.
          </span>
        </div>
        
        <button className={`mt-8 px-8 py-4 w-auto h-auto text-xl font-medium rounded-full bg-[#111] text-white border-none cursor-pointer self-start transition-all duration-300 hover:bg-[#222] hover:scale-105 hover:shadow-xl transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} delay-600`}>
          ABOUT US
        </button>
      </div>
      
      {/* Right Side */}
      <div className={`flex-[2.1] h-screen overflow-hidden relative rounded-tl-[80px] transition-all duration-1200 ease-out delay-400 ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'}`}>
        <img 
          src={heroImg} 
          alt="Hero" 
          className={`w-full h-full object-cover rounded-tl-[80px] transition-all duration-1000 delay-800 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} 
        />
      </div>
    </section>
  );
};

export default HeroSection;