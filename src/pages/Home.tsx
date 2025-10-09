import HeroSection from '../components/HeroSection';
import { lazy, Suspense } from 'react';

const LawFirmWebsiteDesignSection = lazy(() => import('../components/LawFirmWebsiteDesignSection'));
const BelowHeroSection = lazy(() => import('../components/BelowHeroSection'));
const WhatWeDoSection = lazy(() => import('../components/WhatWeDoSection'));
const HowItWorksSection = lazy(() => import('../components/HowItWorksSection'));
const OurPeopleSection = lazy(() => import('../components/OurPeopleSection'));
const ClientSuccessSection = lazy(() => import('../components/ClientSuccessSection'));
const BenefitsSection = lazy(() => import('../components/BenefitsSection'));
// const TheyBelieveInUsSection = lazy(() => import('../components/TheyBelieveInUsSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const ContactUsSection = lazy(() => import('../components/ContactUsSection'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8faf5]" style={{overflow: 'visible'}}>
      <HeroSection />
      <Suspense fallback={<div style={{height: 1}} />}> 
        <LawFirmWebsiteDesignSection />
        <BelowHeroSection />
        <WhatWeDoSection />
        <HowItWorksSection />
        <OurPeopleSection />
        <ClientSuccessSection />
        <BenefitsSection />
        {/* <TheyBelieveInUsSection /> */}
        <TestimonialsSection />
        <ContactUsSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home; 