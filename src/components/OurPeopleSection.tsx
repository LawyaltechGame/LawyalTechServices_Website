import ScrollAnimationWrapper from './ScrollAnimationWrapper';

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
  return (
    <section className="w-full bg-white flex flex-col lg:flex-row items-stretch justify-center py-[20vh] px-[4vw] gap-8">
      {/* Left Side */}
      <ScrollAnimationWrapper 
        animationType="slideLeft" 
        delay={0.2}
        className="flex-1 -mt-[75vh] flex flex-col justify-center items-start max-w-xl mx-auto lg:mx-0 lg:items-start"
      >
        <h2 className="text-[4rem] font-normal text-[#050706] leading-[1.1] mb-12 text-left" style={{wordBreak: 'break-word', letterSpacing: '-0.02em'}}>
          Meet the<br />people<br />behind our<br />success
        </h2>
        <button className="bg-[#050706] text-[#D2DE26] text-xl font-medium rounded-[2.5rem] px-14 py-6 mt-2 shadow-md transition-all duration-200 hover:bg-[#0a0d0a] focus:outline-none">
          LEARN MORE
        </button>
      </ScrollAnimationWrapper>
      
      {/* Right Side */}
      <div className="flex-[1.7] flex flex-row gap-8 items-stretch justify-center">
        {people.map((person, idx) => (
          <ScrollAnimationWrapper 
            key={idx}
            animationType="slideUp" 
            delay={0.4 + idx * 0.2}
            className="flex flex-col items-center w-full max-w-[500px]"
          >
            <img
              src={person.src}
              alt={person.alt}
              className="w-full max-w-[500px] h-[900px] object-cover rounded-[2.5rem] shadow-md bg-gray-100"
            />
            <div className="mt-8 text-center">
              <div className="text-[2rem] font-semibold text-[#050706] leading-tight">{person.name}</div>
              <div className="text-lg text-[#666] font-medium mt-2 tracking-wide">{person.title}</div>
            </div>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </section>
  );
};

export default OurPeopleSection;