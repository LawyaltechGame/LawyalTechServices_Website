import { useRef, useEffect, useState } from 'react';

const people = [
  {
    src: 'https://images.pexels.com/photos/5322204/pexels-photo-5322204.jpeg?auto=compress&w=600&h=800&fit=crop',
    alt: 'Person 1',
    name: 'Rebeca Swanstone',
    title: 'SOCIAL & PPC EXPERT',
  },
  {
    src: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=600&h=800&fit=crop',
    alt: 'Person 2',
    name: 'Dean Mayster',
    title: 'SOCIAL & PPC EXPERT',
  },
];

const OurPeopleSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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
      className="w-full bg-white flex flex-col lg:flex-row items-stretch justify-center py-[20vh] px-[4vw] gap-8"
    >
      {/* Left Side */}
      <div className={`flex-1 -mt-[75vh] flex flex-col justify-center items-start max-w-xl mx-auto lg:mx-0 lg:items-start transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
        style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
      >
        <h2 className="text-[4rem] font-normal text-[#111] leading-[1.1] mb-12 text-left" style={{wordBreak: 'break-word', letterSpacing: '-0.02em'}}>
          Meet the<br />people<br />behind our<br />success
        </h2>
        <button className="bg-[#111] text-white text-xl font-medium rounded-[2.5rem] px-14 py-6 mt-2 shadow-md transition-all duration-200 hover:bg-[#222] focus:outline-none">
          LEARN MORE
        </button>
      </div>
      {/* Right Side */}
      <div className="flex-[1.7] flex flex-row gap-8 items-stretch justify-center">
        {people.map((person, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center w-full max-w-[500px] transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            style={{ transitionDelay: isVisible ? `${400 + idx * 200}ms` : '0ms' }}
          >
            <img
              src={person.src}
              alt={person.alt}
              className="w-full max-w-[500px] h-[900px] object-cover rounded-[2.5rem] shadow-md bg-gray-100"
            />
            <div className="mt-8 text-center">
              <div className="text-[2rem] font-semibold text-[#111] leading-tight">{person.name}</div>
              <div className="text-lg text-[#444] font-medium mt-2 tracking-wide">{person.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPeopleSection;