import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';

const LeadMagnets = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Lead Magnets for Law Firms — Lawyal Tech"
        description="Lead magnets for law firms by Lawyal Tech: guides, checklists, templates, calculators, and follow-up sequences that convert."
        canonical="https://www.lawyaltech.org/lead-magnets"
        keywords={["law firm lead magnets", "legal guides", "checklists for lawyers"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/lead-magnets',
          title: 'Lead Magnets for Law Firms — Lawyal Tech',
          description: 'Strategic legal resources that attract qualified prospects.'
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lawyaltech.org/"},
          {"@type": "ListItem", "position": 2, "name": "Lead Magnets", "item": "https://www.lawyaltech.org/lead-magnets"}
        ]
      }} />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-white/70 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
              <span>Acquisition Assets</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Lead Magnets</h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">Turn expertise into qualified pipeline.</p>
            <p className="text-gray-800 max-w-3xl mx-auto mt-2">
              We plan, create, and launch lead magnets that attract the right prospects, grow your list, and move contacts toward consultations and demos.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Who This Is For</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Boutique to mid-sized law firms looking for higher-quality inbound leads</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Legal tech brands running demand gen and product-led growth</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>BD/marketing teams that want a repeatable, measurable acquisition engine</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What You Get</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Offer Strategy</span> — Audience, problem-to-solution mapping, and clear value exchange</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Asset Creation</span> — Professionally written and designed resources tailored to your practice or product</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Landing & Thank-You Pages</span> — High-converting copy, layout notes, and form best practices</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Nurture Alignment</span> — Follow-up email copy and CTAs that advance the next step</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Distribution Plan</span> — Organic (website, social, newsletter) and paid (search/social) promotion kits</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Compliance & Privacy</span> — Consent language, disclaimers, and data-handling guidance</span></li>
              </ul>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Signature Lead Magnet Types */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.36}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Signature Lead Magnet Types</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Practical guides and checklists</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Templates and sample clauses</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Mini playbooks and toolkits</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Calculators (cost/time savings) and quizzes</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Case study bundles and “results roundups”</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Webinar/workshop registrations and replays</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition md:col-span-2"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Buyer’s guides and RFP checklists (for legal tech)</span></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Our Process</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Discovery</span> — Goals, ICPs, channels, and KPIs</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Offer & Outline</span> — Pick the strongest hook and structure the asset</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Draft & Design</span> — Clear, credible content with brand-aligned layout</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Landing & Follow-Up</span> — Page copy, thank-you page, and 3–5 follow-up touchpoints</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Launch</span> — Promotion kit for LinkedIn/Instagram/email; ad variants if running paid</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Measure & Improve</span> — Track downloads, MQLs, cost per lead, and iterate</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.56}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Deliverables (per asset)</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Final PDF or interactive asset (as appropriate)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Landing page copy + thank-you page copy</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>2 email promos + 3 social captions</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Follow-up sequence outline (3–5 steps)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Creative thumbnails/cover image options</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Tracking checklist (UTMs/events) and performance baseline</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Outcomes */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Outcomes You Can Expect</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow"><div className="text-4xl mb-3">🎯</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Qualified Inquiries</h4><p className="text-gray-700">More qualified inquiries and demos from the right audience</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow"><div className="text-4xl mb-3">💸</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Lower CPL</h4><p className="text-gray-700">Lower cost per lead and clearer attribution</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow"><div className="text-4xl mb-3">🏆</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Authority</h4><p className="text-gray-700">Stronger authority and easier sales conversations</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow"><div className="text-4xl mb-3">♻️</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Evergreen</h4><p className="text-gray-700">Evergreen assets repurposed across campaigns</p></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Plans */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.64}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Essentials</h4>
                  <p className="text-gray-700">1 lead magnet, landing + thank-you pages, promo kit, and a 3-email follow-up outline</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#D2DE26] bg-white shadow-md hover:shadow-xl ring-2 ring-[#D2DE26]/40 transition-shadow">
                <div className="h-1.5 w-full bg-[#D2DE26] rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Growth</h4>
                  <p className="text-gray-700">2 lead magnets/quarter, A/B test plan, ad variants, and quarterly performance review</p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Authority+</h4>
                  <p className="text-gray-700">Monthly lead magnets, multi-step funnels, paid/organic rollout, and monthly reporting</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* FAQs */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.68}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs</h2>
            <ul className="pl-1 space-y-4 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Which formats perform best?</h4><p className="text-gray-700">It depends on the audience and intent. Checklists, calculators, and short practical guides tend to convert fastest; deeper guides and webinar replays are great for higher-intent leads.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Do you also build the pages?</h4><p className="text-gray-700">Yes. We can deliver copy/design only or implement in your CMS/LP tool (WordPress, Webflow, HubSpot, Unbounce, etc.).</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How do you ensure legal and privacy compliance?</h4><p className="text-gray-700">We use clear, accurate language, include required disclaimers, and recommend consent and preference settings aligned with your jurisdiction.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Can you integrate with our CRM/ESP?</h4><p className="text-gray-700">Yes. We can route form submissions to HubSpot, Salesforce, or your system and align tagging/UTMs for reporting.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How many revisions are included?</h4><p className="text-gray-700">Two rounds per asset to finalize tone, accuracy, and positioning.</p></div></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.72}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to turn expertise into a steady flow of qualified leads?</h3>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 inline-block">Book a Lead Magnet Strategy Session</Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default LeadMagnets;
