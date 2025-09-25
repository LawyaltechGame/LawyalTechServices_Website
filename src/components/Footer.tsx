import { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa6';
import logoImage from '../Images/lawyaltech logo with name.png';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [email, setEmail] = useState('');
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

  // const handleSubmit = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   console.log('Email submitted:', email);
  //   setEmail('');
  // };

  return (
    <footer 
      ref={footerRef}
      className="bg-[#f8faf5] px-4 md:px-[4vw] py-12 md:py-16"
    >
      <div className="max-w-8xl mx-auto">
        {/* Top Section - Newsletter and Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 md:mb-16 gap-8 md:gap-12">
          {/* Left Side - Brand and Newsletter */}
          <div className="flex-1 w-full max-w-2xl">
            <div className={`mb-6 md:mb-8 transition-all duration-800 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <img 
                src={logoImage} 
                alt="Lawyal Tech" 
                className="h-14 md:h-20 w-auto object-contain"
              />
            </div>
            {/* <form onSubmit={handleSubmit} className={`w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-800 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to join our mailing list :)"
                  className="w-full bg-transparent border-b-2 border-[#050706] border-opacity-30 pb-2 text-[#050706] placeholder-[#050706] placeholder-opacity-60 text-base md:text-lg focus:outline-none focus:border-opacity-60 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 h-12 rounded-full bg-[#050706] text-[#D2DE26] text-base md:text-lg font-semibold tracking-wide hover:bg-[#0a0d0a] active:scale-[.98] transition-all duration-200 shadow-md self-start"
              >
                YES PLEASE
                <span className="text-xl ml-2">→</span>
              </button>
            </form> */}
          </div>
        </div>

        {/* Bottom Section - Nav and Social */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 md:gap-8 pt-6 md:pt-8 border-t border-[#050706] border-opacity-20">
          {/* Copyright */}
          <div className={`transition-all duration-800 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>            
            <span className="text-[#050706] text-sm md:text-base">© 2025 All Rights Reserved.</span>
          </div>

          {/* Links and Social */}
          <div className={`w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 items-start transition-all duration-800 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Main Links */}
            <div className="flex flex-col gap-2">
              <a href="#" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">HOME</a>
              <a href="#" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">ABOUT</a>
              <a href="#" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">SERVICES</a>
              <a href="#" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">NEWS FLASH</a>
              <a href="#" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">CONTACT</a>
            </div>

            {/* Service Links */}
            <div className="flex flex-col gap-2">
              <a href="#" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">Social Media</a>
              <a href="#" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">PPC</a>
              <a href="#" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">Content Marketing</a>
              <a href="#" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">Strategy</a>
            </div>

            {/* Social Icons - react-icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <a href="https://www.facebook.com/nandtlegaltech?mibextid=LQQJ4d&rdid=jFrNT9zSIVxehDeE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F9kiPgpor7k7Xemvf%2F%3Fmibextid%3DLQQJ4d#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1877F2] hover:bg-[#D2DE26] transition-all duration-200">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/lawyaltech" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                 className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-[#D2DE26] transition-all duration-200">
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/lawyaltech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0A66C2] hover:bg-[#D2DE26] transition-all duration-200">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/lawyal_tech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#E4405F] hover:bg-[#D2DE26] transition-all duration-200">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@LawyalTech-o1v" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                 className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#FF0000] hover:bg-[#D2DE26] transition-all duration-200">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@lawyal.tech?_t=8opmdDpObzs&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                 className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:bg-[#D2DE26] transition-all duration-200">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;