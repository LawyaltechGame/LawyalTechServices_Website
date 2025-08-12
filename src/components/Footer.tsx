import { useState, useEffect, useRef } from 'react';
import logoImage from '../Images/lawyaltech logo with name.png';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-[#f8faf5] px-[4vw] py-16"
    >
      <div className="max-w-8xl mx-auto">
        {/* Top Section - Newsletter and Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
          
          {/* Left Side - Brand and Newsletter */}
          <div className="flex-1 max-w-xl">
            <div className={`mb-8 transition-all duration-800 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <img 
                src={logoImage} 
                alt="Lawyal Tech" 
                className="h-20 w-auto object-contain"
              />
            </div>
            
            <form onSubmit={handleSubmit} className={`flex items-center gap-4 transition-all duration-800 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter you Email address to join our mailing list :)"
                  className="w-full bg-transparent border-b-2 border-[#050706] border-opacity-30 pb-2 text-[#050706] placeholder-[#050706] placeholder-opacity-60 text-lg focus:outline-none focus:border-opacity-60 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-[#050706] text-lg font-medium uppercase tracking-wide flex items-center gap-2 hover:opacity-70 transition-opacity duration-300"
              >
                YES PLEASE
                <span className="text-xl">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section - Creative Navigation and Social */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pt-8 border-t border-[#050706] border-opacity-20">
          
          {/* Copyright */}
          <div className={`flex items-center gap-4 transition-all duration-800 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>            
            <span className="text-[#050706] text-base">© 2025 All Rights Reserved.</span>
          </div>

          {/* Creative Navigation and Social Row */}
          <div className={`flex flex-wrap items-center gap-8 transition-all duration-800 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Main Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#050706] text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">
                HOME
              </a>
              <a href="#" className="text-[#050706] text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">
                ABOUT
              </a>
              <a href="#" className="text-[#050706] text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">
                SERVICES
              </a>
              <a href="#" className="text-[#050706] text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">
                NEWS FLASH
              </a>
              <a href="#" className="text-[#050706] text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">
                CONTACT
              </a>
            </div>

            {/* Smart Divider */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#050706] to-transparent opacity-30"></div>

            {/* Service Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">
                Social Media
              </a>
              <a href="#" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">
                PPC
              </a>
              <a href="#" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">
                Content Marketing
              </a>
              <a href="#" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">
                Strategy
              </a>
            </div>

            {/* Smart Divider */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#050706] to-transparent opacity-30"></div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 bg-[#050706] rounded-full flex items-center justify-center text-white hover:bg-[#D2DE26] hover:text-[#050706] transition-all duration-300 text-sm group">
                <span className="group-hover:scale-110 transition-transform duration-300">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-[#050706] rounded-full flex items-center justify-center text-white hover:bg-[#D2DE26] hover:text-[#050706] transition-all duration-300 text-sm group">
                <span className="group-hover:scale-110 transition-transform duration-300">@</span>
              </a>
              <a href="#" className="w-8 h-8 bg-[#050706] rounded-full flex items-center justify-center text-white hover:bg-[#D2DE26] hover:text-[#050706] transition-all duration-300 text-sm group">
                <span className="group-hover:scale-110 transition-transform duration-300">t</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;