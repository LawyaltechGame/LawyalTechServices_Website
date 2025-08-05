import HeroSection from '../components/HeroSection';
import BelowHeroSection from '../components/BelowHeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import OurPeopleSection from '../components/OurPeopleSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TheyBelieveInUsSection from '../components/TheyBelieveInUsSection';
import ContactUsSection from '../components/ContactUsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#c3d0ff]">
      <HeroSection />
      <BelowHeroSection />
      <WhatWeDoSection />
      <OurPeopleSection />
      <TestimonialsSection />
      <TheyBelieveInUsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default Home; 