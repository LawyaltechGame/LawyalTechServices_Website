import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../Images/lawyaltech logo with name.png';

const navLinks = [
  { label: 'HOME', href: '/', underline: false },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services', hasDropdown: true },
  // { label: 'NEWS FLASH', href: '/news-flash' },
  { label: 'CONTACT', href: '/contact' },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleServicesMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const toggleMobile = () => setMobileOpen((v) => !v);

  const services = [
    { name: 'Blog posts & articles', path: '/blog-posts', icon: '📝' },
    { name: 'Website copy', path: '/website-copy', icon: '🌐' },
    { name: 'Email templates & newsletters', path: '/email-templates', icon: '📧' },
    { name: 'Landing pages', path: '/landing-pages', icon: '🎯' },
    { name: 'Custom Legal Apps', path: '/custom-legal-apps', icon: '⚖️' },
    { name: 'Create AI Agents', path: '/create-ai-agents', icon: '🤖' },
    { name: 'PPC ad copy', path: '/ppc-ad-copy', icon: '💰' },
    { name: 'Case studies & whitepapers', path: '/case-studies', icon: '📊' },
    { name: 'Display ads', path: '/display-ads', icon: '🖼️' },
    { name: 'Lead magnets', path: '/lead-magnets', icon: '🧲' },
    { name: 'Legal Tech Events & Conferences', path: '/legal-tech-events', icon: '🎪' },
  ];

  return (
    <header className={`bg-white px-4 md:px-10 h-16 md:h-20 flex items-center justify-between font-poppins transition-all duration-700 relative z-[50] shadow-sm ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <Link to="/" className={`transition-all duration-700 delay-200 flex items-center ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
        <img 
          src={logoImage} 
          alt="Lawyal Tech" 
          className="h-auto w-auto max-h-12 md:max-h-18 object-contain"
          width={200}
          height={50}
          decoding="async"
        />
      </Link>

      {/* Mobile hamburger - compact */}
      <button
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        onClick={toggleMobile}
        className={`md:hidden p-2 rounded-md border border-gray-200 text-[#D2DE26] transition-colors hover:bg-gray-50 absolute -right-4 top-1/2 -translate-y-1/2`}
        style={{ backgroundColor: 'transparent' }}
      >
        <span className={`block w-6 h-0.5 bg-current mb-1 transition-transform duration-300 ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-current mb-1 transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 list-none m-0 p-0 items-center">
          {navLinks.map((link, index) => (
            <li 
              key={link.label}
              className={`transition-all duration-500 relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={link.hasDropdown ? handleServicesMouseEnter : undefined}
              onMouseLeave={link.hasDropdown ? handleServicesMouseLeave : undefined}
            >
              <Link
                to={link.hasDropdown ? '#' : link.href}
                className={`text-[16px] lg:text-[18px] font-medium text-[#050706] pb-0.5 transition-all duration-300 hover:text-[#D2DE26] hover:scale-105 ${link.underline ? 'underline underline-offset-4 decoration-2' : 'hover:underline hover:underline-offset-4'} ${location.pathname === link.href ? 'text-[#D2DE26] underline underline-offset-4' : ''}`}
                onClick={link.hasDropdown ? (e) => e.preventDefault() : undefined}
              >
                {link.label}
              </Link>
              {/* Dropdown for Services */}
              {link.hasDropdown && dropdownOpen && (
                <div
                  className="absolute top-full -right-[9vw] mt-2 bg-white shadow-lg rounded-lg py-4 px-4 min-w-[600px] border border-gray-200 z-[1000]"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                  style={{zIndex: 1000}}
                >
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="flex items-center gap-3 px-3 py-2 text-[14px] font-medium text-[#050706] hover:bg-[#D2DE26] hover:text-[#050706] transition-all duration-200 rounded-md"
                      >
                        <span className="text-lg">{service.icon}</span>
                        <span className="truncate">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.label} className="px-4">
                {link.hasDropdown ? (
                  <details>
                    <summary className="py-3 text-base font-medium text-[#050706] cursor-pointer select-none">{link.label}</summary>
                    <div className="pl-4 pb-2">
                      {services.map((s) => (
                        <Link key={s.path} to={s.path} className="block py-2 text-sm text-[#050706]" onClick={() => setMobileOpen(false)}>
                          {s.icon} <span className="ml-2">{s.name}</span>
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link to={link.href} className={`block py-3 text-base font-medium ${location.pathname === link.href ? 'text-[#D2DE26]' : 'text-[#050706]'}`} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;