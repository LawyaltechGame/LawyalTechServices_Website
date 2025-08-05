import { useState, useEffect, useRef } from 'react';

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
      className="bg-[#A4BDF8] px-[4vw] py-16"
    >
      <div className="max-w-8xl mx-auto">
        {/* Top Section - Newsletter and Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
          
          {/* Left Side - Brand and Newsletter */}
          <div className="flex-1 max-w-xl">
            <div className={`mb-8 transition-all duration-800 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <h2 className="text-[28px] font-medium tracking-wide text-[#111] mb-8">
                Lawyal Tech<sup>®</sup>
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className={`flex items-center gap-4 transition-all duration-800 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter you Email address to join our mailing list :)"
                  className="w-full bg-transparent border-b-2 border-[#111] border-opacity-30 pb-2 text-[#111] placeholder-[#111] placeholder-opacity-60 text-lg focus:outline-none focus:border-opacity-60 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-[#111] text-lg font-medium uppercase tracking-wide flex items-center gap-2 hover:opacity-70 transition-opacity duration-300"
              >
                YES PLEASE
                <span className="text-xl">→</span>
              </button>
            </form>
          </div>

          {/* Right Side - Navigation */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Main Navigation */}
            <div className={`transition-all duration-800 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-[#111] text-lg font-medium hover:opacity-70 transition-opacity duration-300">
                  HOME
                </a>
                <a href="#" className="text-[#111] text-lg font-medium hover:opacity-70 transition-opacity duration-300">
                  ABOUT
                </a>
                <div className="relative group">
                  <a href="#" className="text-[#111] text-lg font-medium hover:opacity-70 transition-opacity duration-300 flex items-center gap-1">
                    SERVICES
                    <span className="text-sm">▼</span>
                  </a>
                </div>
                <a href="#" className="text-[#111] text-lg font-medium hover:opacity-70 transition-opacity duration-300">
                  NEWS FLASH
                </a>
                <a href="#" className="text-[#111] text-lg font-medium hover:opacity-70 transition-opacity duration-300">
                  CONTACT
                </a>
              </nav>
            </div>

            {/* Services Submenu */}
            <div className={`transition-all duration-800 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div className="mb-4">
                <span className="text-[#111] text-lg font-medium">SERVICES</span>
              </div>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-[#111] text-base underline hover:opacity-70 transition-opacity duration-300">
                  Social Media
                </a>
                <a href="#" className="text-[#111] text-base underline hover:opacity-70 transition-opacity duration-300">
                  PPC
                </a>
                <a href="#" className="text-[#111] text-base underline hover:opacity-70 transition-opacity duration-300">
                  Content Marketing
                </a>
                <a href="#" className="text-[#111] text-base underline hover:opacity-70 transition-opacity duration-300">
                  Strategy
                </a>
              </nav>
            </div>

            {/* Social Media */}
            <div className={`transition-all duration-800 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div className="mb-4">
                <span className="text-[#111] text-lg font-medium">FOLLOW US:</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-[#111] text-xl hover:opacity-70 transition-opacity duration-300">
                  f
                </a>
                <a href="#" className="text-[#111] text-xl hover:opacity-70 transition-opacity duration-300">
                  @
                </a>
                <a href="#" className="text-[#111] text-xl hover:opacity-70 transition-opacity duration-300">
                  t
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Icons */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          
          {/* Copyright */}
          <div className={`flex items-center gap-4 transition-all duration-800 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>            
            <span className="text-[#111] text-base">© 2025 All Rights Reserved.</span>
          </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;