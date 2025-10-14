import HeroSection from '../components/HeroSection';
import { lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';

const LawFirmWebsiteDesignSection = lazy(() => import('../components/LawFirmWebsiteDesignSection'));
const BelowHeroSection = lazy(() => import('../components/BelowHeroSection'));
const WhatWeDoSection = lazy(() => import('../components/WhatWeDoSection'));
const HowItWorksSection = lazy(() => import('../components/HowItWorksSection'));
// const OurPeopleSection = lazy(() => import('../components/OurPeopleSection'));
const ClientSuccessSection = lazy(() => import('../components/ClientSuccessSection'));
const BenefitsSection = lazy(() => import('../components/BenefitsSection'));
// const TheyBelieveInUsSection = lazy(() => import('../components/TheyBelieveInUsSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const ContactUsSection = lazy(() => import('../components/ContactUsSection'));
const Footer = lazy(() => import('../components/Footer'));

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8faf5]" style={{overflow: 'visible'}}>
      <SEO 
        title="Law Firm Content Marketing — Lawyal Tech"
        description="Law firm content marketing by Lawyal Tech: thought leadership, case studies, website copy, and email campaigns that build trust and generate qualified leads."
        canonical="https://www.lawyaltech.org/"
        keywords={[
          'law firm content marketing',
          'legal thought leadership',
          'case studies for law firms',
          'website copy for lawyers',
          'legal email campaigns'
        ]}
        pageType="home"
        openGraph={{
          url: 'https://www.lawyaltech.org/',
          title: 'Law Firm Content Marketing — Lawyal Tech',
          description: 'Strategic, compliant digital content for law firms.',
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Lawyal Tech",
        "url": "https://www.lawyaltech.org/",
        "logo": "https://www.lawyaltech.org/COLOR%20LOGO.png",
        "sameAs": []
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Lawyal Tech",
        "url": "https://www.lawyaltech.org/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.lawyaltech.org/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }} />
      <HeroSection />
      <Suspense fallback={<div style={{height: 1}} />}> 
        <LawFirmWebsiteDesignSection />
        <BelowHeroSection />
        <WhatWeDoSection />
        <HowItWorksSection />
        {/* <OurPeopleSection /> */}
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