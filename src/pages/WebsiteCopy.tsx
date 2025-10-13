import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';

const WebsiteCopy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Website & Practice Area Copywriting"
        description="Compelling, SEO-optimized website and practice area copy for law firms that converts visitors into clients."
        canonical="https://www.lawyaltech.org/website-copy"
        keywords={["law firm website copy", "practice area copywriting", "legal copywriting"]}
        pageType="website-copy"
        serviceName="Website Copy"
        openGraph={{
          url: 'https://www.lawyaltech.org/website-copy',
          title: 'Website & Practice Area Copywriting — Lawyal Tech',
          description: 'SEO-focused copy that builds credibility and drives inquiries.'
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lawyaltech.org/"},
          {"@type": "ListItem", "position": 2, "name": "Website Copy", "item": "https://www.lawyaltech.org/website-copy"}
        ]
      }} />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-white/70 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
              <span>Website Copy</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Website & Practice Area Copywriting</h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">Turn site visits into <span className="text-[#0b0f0b] bg-[#D2DE26]/60 px-1 rounded">consultations</span>.</p>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto mt-2">We write high-converting website and practice area copy that clarifies your value, builds trust, improves SEO, and drives inquiries.</p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Who + What */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Who This Is For</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Boutique to mid-sized law firms that need clear, credible messaging</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Multi-office firms seeking consistency across practice areas and locations</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Legal tech brands that want conversion-focused site copy for product-led growth</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What You Get</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Messaging & Positioning</span> — Value proposition, differentiators, proof points, tone of voice</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Page-Level Strategy</span> — Information architecture suggestions and section-by-section outlines</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Conversion Copy</span> — Home, About, Practice Area pages (and sub-practices), Attorney Bios, Locations, Resources, Contact</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">SEO Foundations</span> — Keyword mapping, titles/meta, headings, internal linking recommendations</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Compliance-Safe Language</span> — Clear, accurate copy with appropriate disclaimers where required</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">UX Microcopy</span> — Buttons, forms, error states, chat prompts, and FAQ modules</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Schema Recommendations</span> — Organization, LegalService, FAQ, Article, and Breadcrumb</span></li>
              </ul>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Signature Sections We Write */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.35}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Signature Sections We Write</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Homepage hero + benefit grid + social proof</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Practice area overviews + sub-service pages</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Geo/location pages (city/state)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Attorney and team bios that showcase credibility</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>About, Careers, and Contact pages</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Landing pages for campaigns and webinars</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Resource hub and pillar/cluster pages</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Our Process</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Discovery</span> — Intake, competitor review, analytics/SEO scan, and goals alignment</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Messaging Workshop</span> — ICPs, proof assets, tone, and positioning</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">UX & SEO Plan</span> — IA notes, keyword map, and internal link strategy</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Wireframe Outlines</span> — Section-by-section blueprint with CTAs and proof modules</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Drafting</span> — Conversion-first copy tailored to your brand and practice nuances</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">SEO Polish</span> — Titles, meta descriptions, H1/H2s, internal links, schema suggestions</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Review & Revisions</span> — Two rounds to lock accuracy, tone, and compliance</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Handoff & Launch Support</span> — Paste-ready docs, CMS formatting notes, and pre-launch QA checklist</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables (per page) */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.45}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Deliverables (per page)</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Final copy (doc or CMS-ready)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Target keyword(s) + search intent</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Title tag, meta description, and recommended H1/H2s</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>CTA options and anchor text suggestions</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Internal linking list</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Optional: wireframe annotations and FAQ set</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Optional Add-Ons */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Optional Add-Ons</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Attorney bio interviews and writing</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Multi-location page rollouts and local SEO plan</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Design collaboration (wireframes/prototypes)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Accessibility language review</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Multilingual versions</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Outcomes */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.55}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Outcomes You Can Expect</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Clear differentiation and stronger authority signals</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Higher engagement and conversion on key pages</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Better visibility for priority practice areas and locations</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Shorter path from first visit to consultation</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Plans */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plans</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Essentials</h4>
                  <p className="text-gray-700">5-page core pack (Home, About, 2 Practice Areas, Contact) with SEO basics</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#D2DE26] bg-white shadow-md hover:shadow-xl ring-2 ring-[#D2DE26]/40 transition-shadow">
                <div className="h-1.5 w-full bg-[#D2DE26] rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Growth</h4>
                  <p className="text-gray-700">12-page practice cluster (3 primary areas + 6 subpages + Locations + About + Contact) with FAQs and schema recommendations</p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Authority+</h4>
                  <p className="text-gray-700">25+ page site build/relaunch, including practice taxonomy, bios, locations, resource hub, and launch QA</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* FAQs */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.65}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs</h3>
            <ul className="pl-1 space-y-4 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How do you ensure accuracy and compliance?</h4><p className="text-gray-700">We collaborate with your attorneys for approvals, use jurisdiction-appropriate disclaimers, and avoid misleading claims or guarantees.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Can you work in our CMS?</h4><p className="text-gray-700">Yes—WordPress, Webflow, HubSpot, or your preferred platform. We provide paste-ready copy and formatting notes.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Do you interview attorneys and subject-matter experts?</h4><p className="text-gray-700">Yes. We run focused interviews or work from briefs and past materials.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">What about keyword research?</h4><p className="text-gray-700">Every page includes a keyword map, search intent, and on-page optimization recommendations.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How many revisions are included?</h4><p className="text-gray-700">Two rounds per page to finalize tone, substance, and positioning.</p></div></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to turn your website into a client-winning asset?</h3>
            <p className="text-lg text-gray-700 mb-6">Book a Website Copy Audit now!</p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
              Get Started Today
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default WebsiteCopy;
