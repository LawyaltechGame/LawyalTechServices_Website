import { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
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
            {/* Newsletter form commented out */}
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
              <Link to="/" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">Home</Link>
              <Link to="/about" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">About</Link>
              <Link to="/services" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">Services</Link>
              <Link to="/blog-posts" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">Blog</Link>
              <Link to="/legal-tech-events" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">Legal Tech Events</Link>
              <Link to="/contact" className="text-[#050706] text-sm md:text-base font-medium hover:text-[#D2DE26] transition-colors duration-300">Contact</Link>
            </div>

            {/* Service Links */}
            <div className="flex flex-col gap-2">
              <Link to="/blog-posts" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">Blog posts & articles</Link>
              <Link to="/website-copy" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">Website copy</Link>
              <Link to="/landing-pages" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">Landing pages</Link>
              <Link to="/custom-legal-apps" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">Custom Legal Apps</Link>
              <Link to="/ppc-ad-copy" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">PPC ad copy</Link>
              <Link to="/case-studies" className="text-[#050706] text-sm hover:text-[#D2DE26] transition-colors duration-300">Case studies</Link>
            </div>

            {/* Social Icons - react-icons */}
            <div className="col-span-2 sm:col-span-1 flex flex-wrap items-center justify-center sm:justify-start gap-3 md:gap-4 w-full">
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