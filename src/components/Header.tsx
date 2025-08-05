import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'HOME', href: '/', underline: false },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services', hasDropdown: true },
  { label: 'NEWS FLASH', href: '/news-flash' },
  { label: 'CONTACT', href: '/contact' },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    }, 200); // 200ms delay
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // 200ms delay
  };

  return (
    <header className={`bg-[#B9CEFF] px-10 h-20 flex items-center justify-between font-poppins transition-all duration-700 relative z-[50] ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <Link to="/" className={`font-medium text-[28px] tracking-wide transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
        Lawyal Tech<sup>®</sup>
      </Link>
      <nav>
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
                className={`text-[18px] font-medium text-[#111] pb-0.5 transition-all duration-300 hover:text-[#333] hover:scale-105 ${link.underline ? 'underline underline-offset-4 decoration-2' : 'hover:underline hover:underline-offset-4'} ${location.pathname === link.href ? 'text-[#333] underline underline-offset-4' : ''}`}
                onClick={link.hasDropdown ? (e) => e.preventDefault() : undefined}
              >
                {link.label}
              </Link>
              {/* Dropdown for Legal Writing */}
              {link.hasDropdown && dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] border border-gray-200 z-[1000]"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                  style={{zIndex: 1000}}
                >
                  <Link
                    to="/legal-writing"
                    className="block px-4 py-2 text-[16px] font-medium text-[#111] hover:bg-[#B9CEFF] hover:text-[#333] transition-all duration-200"
                  >
                    Legal Writing
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;