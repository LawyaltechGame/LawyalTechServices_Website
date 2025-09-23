import HeroSection from '../components/HeroSection';
import LawFirmWebsiteDesignSection from '../components/LawFirmWebsiteDesignSection';
import BelowHeroSection from '../components/BelowHeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import HowItWorksSection from '../components/HowItWorksSection';
import OurPeopleSection from '../components/OurPeopleSection';
import ClientSuccessSection from '../components/ClientSuccessSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
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
      <ClientSuccessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default Home; 