import HeroSection from '../components/HeroSection';
import LawFirmWebsiteDesignSection from '../components/LawFirmWebsiteDesignSection';
import BelowHeroSection from '../components/BelowHeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import HowItWorksSection from '../components/HowItWorksSection';
import OurPeopleSection from '../components/OurPeopleSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TheyBelieveInUsSection from '../components/TheyBelieveInUsSection';
import BenefitsSection from '../components/BenefitsSection';
import ClientSuccessSection from '../components/ClientSuccessSection';
import ContactUsSection from '../components/ContactUsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8faf5]" style={{overflow: 'visible'}}>
      <HeroSection />
      <LawFirmWebsiteDesignSection />
      <BelowHeroSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <OurPeopleSection />
      <TestimonialsSection />
      <TheyBelieveInUsSection />
      <BenefitsSection />
      <ClientSuccessSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default Home; 