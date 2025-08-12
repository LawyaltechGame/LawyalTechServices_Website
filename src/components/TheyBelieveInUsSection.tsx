import { useRef, useEffect } from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const companies = [
  { name: 'Taycoon', bold: false, font: 'Playfair Display' },
  { name: 'A/RAMIS', bold: false, font: 'Montserrat' },
  { name: 'SHARK', bold: true, font: 'Raleway' },
  { name: 'Digitools.', bold: true, font: 'Roboto' },
  { name: 'Taycoon', bold: false, font: 'Playfair Display' },
  { name: 'A/RAMIS', bold: false, font: 'Montserrat' },
  { name: 'SHARK', bold: true, font: 'Raleway' },
  { name: 'Digitools.', bold: true, font: 'Roboto' },
  { name: 'Taycoon', bold: false, font: 'Playfair Display' },
  { name: 'A/RAMIS', bold: false, font: 'Montserrat' },
  { name: 'SHARK', bold: true, font: 'Raleway' },
  { name: 'Digitools.', bold: true, font: 'Roboto' },
  { name: 'Taycoon', bold: false, font: 'Playfair Display' },
  { name: 'A/RAMIS', bold: false, font: 'Montserrat' },
  { name: 'SHARK', bold: true, font: 'Raleway' },
  { name: 'Digitools.', bold: true, font: 'Roboto' },
  { name: 'Taycoon', bold: false, font: 'Playfair Display' },
  { name: 'A/RAMIS', bold: false, font: 'Montserrat' },
  { name: 'SHARK', bold: true, font: 'Raleway' },
  { name: 'Digitools.', bold: true, font: 'Roboto' },
];

const TheyBelieveInUsSection = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // Duplicate the companies for seamless infinite scroll
  const marqueeCompanies = [...companies, ...companies];

  // Optional: Pause on hover
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const handleMouseEnter = () => marquee.style.animationPlayState = 'paused';
    const handleMouseLeave = () => marquee.style.animationPlayState = 'running';
    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full h-[70vh] bg-white py-24 px-4 flex flex-col items-center">
      <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
        <h2 className="text-[4rem] font-normal text-[#050706] mb-20 text-center leading-tight">
          They believe in us
        </h2>
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper animationType="fade" delay={0.4}>
        <div className="w-full max-w-8xl flex flex-col items-center">
          <div className="w-full border-t border-[#D2DE26] mb-12" style={{height: 0, borderWidth: '1px', opacity: 0.7}} />
          <div className="w-full overflow-hidden relative">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div
              ref={marqueeRef}
              className="flex flex-row items-center gap-12 select-none"
              style={{
                width: 'max-content',
                animation: 'marquee 18s linear infinite',
              }}
            >
              {marqueeCompanies.map((company, idx) => (
                <span
                  key={idx}
                  className={`text-[2.2rem] ${company.bold ? 'font-bold' : 'font-normal'} text-[#050706] flex items-center`}
                  style={{ 
                    fontFamily: `${company.font}, sans-serif`, 
                    letterSpacing: company.bold ? '-0.01em' : '0', 
                    minWidth: '170px', 
                    justifyContent: 'center' 
                  }}
                >
                  {company.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimationWrapper>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TheyBelieveInUsSection;