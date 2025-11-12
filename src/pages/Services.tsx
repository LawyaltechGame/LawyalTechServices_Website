import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Services for Law Firms — Lawyal Tech"
        description="Services for law firms at Lawyal Tech: thought leadership, case studies, website copy, email campaigns, whitepapers, and blogs that build authority and drive leads."
        canonical="https://www.lawyaltech.org/services"
        keywords={[
          'law firm services', 'legal content services', 'law firm marketing'
        ]}
        pageType="services"
        openGraph={{
          url: 'https://www.lawyaltech.org/services',
          title: 'Services for Law Firms — Lawyal Tech',
          description: 'Law firm content marketing services: strategic, compliant digital content programs.'
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lawyaltech.org/"},
          {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.lawyaltech.org/services"}
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you ensure accuracy and compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We collaborate with your attorneys for approvals, use jurisdiction-appropriate disclaimers, and avoid misleading claims or guarantees."
            }
          },
          {
            "@type": "Question",
            "name": "Can you work in our CMS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes—WordPress, Webflow, HubSpot, or your preferred platform. We provide paste-ready copy and formatting notes."
            }
          },
          {
            "@type": "Question",
            "name": "Do you interview attorneys and subject-matter experts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We run focused interviews or work from briefs and past materials."
            }
          },
          {
            "@type": "Question",
            "name": "What about keyword research?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every page includes a keyword map, search intent, and on-page optimization recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "How many revisions are included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Two rounds per page to finalize tone, substance, and positioning."
            }
          }
        ]
      }} />
      {/* Header Section – minimal, left-aligned to differ from detail pages */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.12}>
            <p className="text-xs tracking-wider text-gray-600 uppercase mb-2">Services Overview</p>
            <h1 className="text-[32px] md:text-[40px] leading-tight font-extrabold text-[#0A0D0A]">Build Authority. Rank Higher. Win More Clients.</h1>
            <div className="h-1.5 w-24 bg-[#D2DE26] rounded-md mt-4 mb-4 mx-auto" />
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              We help law firms turn their expertise into persuasive, compliant digital content that builds trust and brings in clients.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-800">Thought leadership</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-800">Case studies</span>
              <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-800">Website copy</span>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Brief intro (plain, no card) */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.25}>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-10">
            Most lawyers know they should build an online presence—but lack the time or compliant strategy. This page is a quick directory of what we offer. Pick a service to see full details.
          </p>
        </ScrollAnimationWrapper>

        {/* Services directory (link cards) */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.35}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Services for Law Firms</h2>
          <p className="text-base md:text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
            At Lawyal Tech, we help law firms attract high-value clients and build authority online through strategic, compliant digital content.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[ 
              { title: 'Thought Leadership Articles', desc: 'LinkedIn, blogs, op-eds to build authority.', to: '/thought-leadership', icon: '🧠' },
              { title: 'Case Studies & Client Success', desc: 'Show outcomes (confidentiality-safe).', to: '/case-studies', icon: '📊' },
              { title: 'Website & Practice Copy', desc: 'SEO copy that turns visits into calls.', to: '/website-copy', icon: '🌐' },
              { title: 'Email Campaigns & Newsletters', desc: 'Stay top of mind with compliant nurture.', to: '/email-templates', icon: '📧' },
              { title: 'Whitepapers & Guides', desc: 'Premium resources that generate leads.', to: '/whitepapers-guides', icon: '📑' },
              { title: 'Blogs & Content Strategy', desc: 'Consistent publishing for rankings.', to: '/blog-posts', icon: '📝' },
              { title: 'Social Media Content', desc: 'Professional posts that drive traffic.', to: '/contact', icon: '📣' },
              { title: 'Lead Magnet Creation', desc: 'Guides, checklists, reports with automated follow-up sequences.', to: '/lead-magnets', icon: '🧲' },
            ].map((item) => (
              <Link key={item.title} to={item.to} className="group block rounded-xl border border-gray-200 bg-white p-5 hover:border-[#D2DE26] hover:shadow-md transition-all">
                <div className="flex items-start">
                  <div className="w-9 h-9 rounded-full bg-[#F2F6FF] flex items-center justify-center mr-3 text-lg">{item.icon}</div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#050706]">{item.title}</h3>
                    <p className="text-sm md:text-[15px] text-gray-700 mt-1">{item.desc}</p>
                  </div>
                </div>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#050706] group-hover:underline underline-offset-4">Explore <span className="ml-1">→</span></span>
              </Link>
            ))}
          </div>
        </ScrollAnimationWrapper>

        {/* Advanced Add-Ons */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="rounded-2xl p-8 shadow-xl mt-12 bg-gradient-to-r from-white via-[#F6F9FF] to-white border border-[#E8EEF9]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Advanced Add-Ons (Growth Accelerators)</h3>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">Once you grow traction, you can add:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-[#E8EEF9] text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Landing Page Copywriting</h4>
                <p className="text-gray-700">For campaign conversions</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#E8EEF9] text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Google Business Profile Optimization</h4>
                <p className="text-gray-700">Improve local visibility</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-[#E8EEF9] text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Video Scripts & LinkedIn Ghostwriting</h4>
                <p className="text-gray-700">Accelerate thought leadership</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Proof & Process */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.55}>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E8EEF9]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proof & Process</h3>
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                “Lawyal Tech consistently helps me generate leads and never misses an opportunity to connect me with the right people. The team stays proactive, works closely with me, and is fully committed to driving real results.”
              </p>
              <p className="text-gray-900 font-semibold mb-2">— Marcus Eriksson, Lawyer, Sweden</p>
              <p className="text-gray-700 leading-relaxed">
                Our clients don’t just get content — they gain a measurable system for growth, visibility, and authority.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E8EEF9]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What makes us different</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Proven framework built specifically for law firms</li>
                <li>• SEO & compliance expertise (no generic marketing fluff)</li>
                <li>• Full-service delivery (strategy → writing → publishing → tracking)</li>
              </ul>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl mt-12 border border-[#E8EEF9]">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Book a Free Strategy Call</h3>
            <p className="text-lg text-gray-700 mb-6">We’ll show you how to turn your firm’s expertise into online authority.</p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 inline-block">Contact Us</Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Services;