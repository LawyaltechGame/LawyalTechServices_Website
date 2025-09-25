import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import Nabhiha from '../Images/Nabhiha Profile pic for Website.png';

const OurPeopleSection = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-16 px-8 gap-16">
      {/* Text Section - Above */}
      <ScrollAnimationWrapper 
        animationType="slideUp" 
        delay={0.2}
        className="flex flex-col justify-center items-center max-w-3xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#050706] leading-tight mb-12" style={{wordBreak: 'break-word', letterSpacing: '-0.02em'}}>
          Meet the <span className="text-[#D2DE26]">person</span><br />
          behind our success
        </h2>
        <a 
          href="https://www.linkedin.com/in/nabiha-k-a14b5192/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#050706] text-[#D2DE26] text-lg md:text-xl font-medium rounded-full px-10 py-5 mb-10 shadow-xl transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#D2DE26] focus:ring-offset-4 transform cursor-pointer inline-block text-center"
        >
          LEARN MORE
        </a>
      </ScrollAnimationWrapper>
      
      {/* Image Section - Below */}
      <ScrollAnimationWrapper 
        animationType="slideUp" 
        delay={0.4}
        className="flex flex-col items-center w-full max-w-md"
      >
        <img
          src={Nabhiha}
          alt="Nabhiha Profile"
          className="w-80 h-96 object-cover rounded-3xl shadow-xl bg-gray-100"
          loading="lazy"
          decoding="async"
          width={320}
          height={384}
        />
        <div className="mt-6 text-center">
          <div className="text-2xl font-semibold text-[#050706] leading-tight">Nabiha</div>
          <div className="text-lg text-[#666] font-medium mt-2 tracking-wide">Founder</div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default OurPeopleSection;