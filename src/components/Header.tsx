import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../Images/lawyaltech logo with name.png';

const navLinks = [
  { label: 'HOME', href: '/', underline: false },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services', hasDropdown: true },
  { label: 'PRODUCTS', href: '/products', hasDropdown: true },
  // { label: 'NEWS FLASH', href: '/news-flash' },
  { label: 'CONTACT', href: '/contact' },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productsDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleServicesMouseEnter = () => {
    if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesDropdownTimeout.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const handleServicesDropdownMouseEnter = () => {
    if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesDropdownMouseLeave = () => {
    servicesDropdownTimeout.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const handleProductsMouseEnter = () => {
    if (productsDropdownTimeout.current) clearTimeout(productsDropdownTimeout.current);
    setProductsDropdownOpen(true);
  };

  const handleProductsMouseLeave = () => {
    productsDropdownTimeout.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 200);
  };

  const handleProductsDropdownMouseEnter = () => {
    if (productsDropdownTimeout.current) clearTimeout(productsDropdownTimeout.current);
    setProductsDropdownOpen(true);
  };

  const handleProductsDropdownMouseLeave = () => {
    productsDropdownTimeout.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 200);
  };

  const toggleMobile = () => setMobileOpen((v) => !v);

  const services = [
    { name: 'Thought Leadership Articles', path: '/thought-leadership', icon: '🧠' },
    { name: 'Case Studies & Client Success Stories', path: '/case-studies', icon: '📊' },
    { name: 'Website & Practice Area Copywriting', path: '/website-copy', icon: '🌐' },
    { name: 'Email Campaigns & Newsletters', path: '/email-templates', icon: '📧' },
    { name: 'Whitepapers & Guides', path: '/whitepapers-guides', icon: '📑' },
    { name: 'App Development', path: '/app-development', icon: '🛠️' },
    // Existing services
    { name: 'Blog Posts & Articles', path: '/blog-posts', icon: '📝' },
    { name: 'Landing Pages', path: '/landing-pages', icon: '🎯' },
    { name: 'Custom Legal Apps', path: '/custom-legal-apps', icon: '⚖️' },
    { name: 'Lead Magnets', path: '/lead-magnets', icon: '🧲' },
  ];

  const products = [
    { name: 'Contract Coder', path: 'https://services.lawyaltech.org/contract-coder/', icon: '💼', isExternal: true },
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
          {navLinks.map((link, index) => {
            const isServices = link.label === 'SERVICES';
            const isProducts = link.label === 'PRODUCTS';
            const dropdownOpen = isServices ? servicesDropdownOpen : isProducts ? productsDropdownOpen : false;
            const handleMouseEnter = isServices ? handleServicesMouseEnter : isProducts ? handleProductsMouseEnter : undefined;
            const handleMouseLeave = isServices ? handleServicesMouseLeave : isProducts ? handleProductsMouseLeave : undefined;
            const handleDropdownMouseEnter = isServices ? handleServicesDropdownMouseEnter : isProducts ? handleProductsDropdownMouseEnter : undefined;
            const handleDropdownMouseLeave = isServices ? handleServicesDropdownMouseLeave : isProducts ? handleProductsDropdownMouseLeave : undefined;
            const dropdownItems = isServices ? services : isProducts ? products : [];

            return (
              <li 
                key={link.label}
                className={`transition-all duration-500 relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
              >
                <Link
                  to={link.href}
                  className={`text-[16px] lg:text-[18px] font-medium text-[#050706] pb-0.5 transition-all duration-300 hover:text-[#D2DE26] hover:scale-105 ${link.underline ? 'underline underline-offset-4 decoration-2' : 'hover:underline hover:underline-offset-4'} ${location.pathname === link.href ? 'text-[#D2DE26] underline underline-offset-4' : ''}`}
                >
                  {link.label}
                </Link>
                {/* Dropdown for Services or Products */}
                {link.hasDropdown && dropdownOpen && (
                  <div
                    className={`absolute top-full mt-2 bg-white shadow-lg rounded-lg py-4 px-4 border border-gray-200 z-[1000] ${isProducts ? 'min-w-[300px] -right-[2vw]' : '-right-[9vw] min-w-[600px]'}`}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                    style={{zIndex: 1000}}
                  >
                    <div className={isProducts ? 'flex flex-col gap-2' : 'grid grid-cols-2 gap-2'}>
                      {dropdownItems.map((item, itemIndex) => {
                        const linkContent = (
                          <>
                            <span className="text-lg">{item.icon}</span>
                            <span className="truncate">{item.name}</span>
                          </>
                        );
                        
                        return item.isExternal ? (
                          <a
                            key={itemIndex}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-3 py-2 text-[14px] font-medium text-[#050706] hover:bg-[#D2DE26] hover:text-[#050706] transition-all duration-200 rounded-md"
                          >
                            {linkContent}
                          </a>
                        ) : (
                          <Link
                            key={itemIndex}
                            to={item.path}
                            className="flex items-center gap-3 px-3 py-2 text-[14px] font-medium text-[#050706] hover:bg-[#D2DE26] hover:text-[#050706] transition-all duration-200 rounded-md"
                          >
                            {linkContent}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => {
              const isServices = link.label === 'SERVICES';
              const isProducts = link.label === 'PRODUCTS';
              const dropdownItems = isServices ? services : isProducts ? products : [];

              return (
                <li key={link.label} className="px-4">
                  {link.hasDropdown ? (
                    <details>
                      <summary className="py-3 text-base font-medium text-[#050706] cursor-pointer select-none">{link.label}</summary>
                      <div className="pl-4 pb-2">
                        {dropdownItems.map((item) => {
                          const linkContent = (
                            <>
                              {item.icon} <span className="ml-2">{item.name}</span>
                            </>
                          );
                          
                          return item.isExternal ? (
                            <a
                              key={item.path}
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-2 text-sm text-[#050706]"
                              onClick={() => setMobileOpen(false)}
                            >
                              {linkContent}
                            </a>
                          ) : (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block py-2 text-sm text-[#050706]"
                              onClick={() => setMobileOpen(false)}
                            >
                              {linkContent}
                            </Link>
                          );
                        })}
                      </div>
                    </details>
                  ) : (
                    <Link to={link.href} className={`block py-3 text-base font-medium ${location.pathname === link.href ? 'text-[#D2DE26]' : 'text-[#050706]'}`} onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;