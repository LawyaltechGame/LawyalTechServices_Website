import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const LandingPages = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Landing Pages"
        description="High-converting landing pages for legal campaigns: clear messaging, focused CTAs, and SEO-friendly structure."
        canonical="https://www.lawyaltech.org/landing-pages"
        keywords={["law firm landing pages", "legal PPC landing page", "conversion pages for lawyers"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/landing-pages',
          title: 'Landing Pages — Lawyal Tech',
          description: 'Campaign-specific pages designed to convert.'
        }}
      />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-white/70 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
              <span>Conversion Pages</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Landing Pages</h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">Convert targeted traffic into booked consultations and demos.</p>
            <p className="text-gray-800 max-w-3xl mx-auto mt-2">
              We plan, write, design, and (optionally) build high-converting landing pages aligned to your campaigns, audiences, and offers—so every click has a clear path to action.
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
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Boutique to mid-sized law firms running PPC/local campaigns or promotions</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Legal tech brands driving demos, trials, and webinar registrations</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>BD/marketing teams that want measurable, conversion-focused pages</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What You Get</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Conversion Strategy</span> — Audience, offer, and CTA mapping; message–market fit.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Page Architecture</span> — Wireframed sections that reduce friction and highlight proof.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Conversion Copy</span> — Headlines, subheads, benefit bullets, FAQs, objection handling, and strong CTAs.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Social Proof Modules</span> — Testimonials, logos, case outcomes/impact stats (with appropriate disclaimers).</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Design & Build (Optional)</span> — Brand-aligned page design and implementation in your CMS/LP tool.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Tracking & QA</span> — UTM schema, analytics events, pixel checks (Google/LinkedIn), and link testing.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Test Plan</span> — A/B hypotheses for headline, offer, proofs, layout, and form length.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Compliance-Safe Defaults</span> — Clear, accurate language and required disclosures.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">SEO or PPC Mode</span> — Indexable “resource” landing pages for organic, or noindex/canonicalized PPC pages.</span></li>
              </ul>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Signature Landing Page Types */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.36}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Signature Landing Page Types</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Consultation/Intake (practice area or location)</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Lead Magnet/Guide download (with thank-you page and follow-ups)</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Webinar/Event registration and replay</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Product Demo/Free Trial (for legal tech)</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Case Study download and sales follow-up</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Emergency/After-Hours intake (click-to-call emphasis)</span></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Our Process</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Discovery</span> — Goals, audience, channel, offer, and success metrics</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Strategy</span> — Page objective, angle, and proof assets; field requirements for forms</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Wireframe</span> — Section order (hero → benefits → proof → FAQs → CTA) and UX notes</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Copy</span> — Conversion-first messaging tailored to your practice/product and ICP</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Design & Build</span> — Visual design and CMS/LP implementation (WordPress, Webflow, HubSpot, Unbounce, etc.)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Tracking & QA</span> — Event mapping, pixels, performance/accessibility checks</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Launch</span> — Final pass, go-live checklist, and data validation</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Optimize</span> — Run the test plan and iterate to improve conversion rate and CPA</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.56}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Deliverables (per page)</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Complete landing page copy (hero, sections, CTAs, form microcopy)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Annotated wireframe (structure, hierarchy, and UX notes)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Thank-you page copy and follow-up recommendations</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Test plan with 3–5 prioritized hypotheses</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Tracking checklist (UTMs, events, pixels)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Optional: design files and built page in your CMS/LP tool</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Outcomes */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Outcomes You Can Expect</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">📈</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Higher Conversion</h4>
                <p className="text-gray-700">Higher conversion rates and lower cost per acquisition</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualified Leads</h4>
                <p className="text-gray-700">More qualified consultations, demos, and event sign-ups</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🧭</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Clear Attribution</h4>
                <p className="text-gray-700">Clear attribution for BD/marketing decisions</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Faster Learnings</h4>
                <p className="text-gray-700">Faster learnings from structured A/B testing</p>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Plans */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.64}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plans</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Essentials</h4>
                  <p className="text-gray-700">1 landing page + thank-you page, tracking checklist, and a basic A/B test.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#D2DE26] bg-white shadow-md hover:shadow-xl ring-2 ring-[#D2DE26]/40 transition-shadow">
                <div className="h-1.5 w-full bg-[#D2DE26] rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Growth</h4>
                  <p className="text-gray-700">3 landing pages for one campaign, monthly test cycles.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Authority+</h4>
                  <p className="text-gray-700">6+ landing pages, ongoing CRO program with heatmaps/session insights and monthly reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* FAQs */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.68}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs</h3>
            <ul className="pl-1 space-y-4 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Do you also build the pages?</h4><p className="text-gray-700">Yes. We can deliver copy/wireframes only or handle design and implementation in WordPress, Webflow, HubSpot, or a landing-page platform like Unbounce.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Should landing pages be indexed for SEO?</h4><p className="text-gray-700">It depends on purpose. PPC pages usually run noindex/canonical to avoid dilution; evergreen “resource” pages can be optimized and indexed.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Can you integrate forms with our CRM?</h4><p className="text-gray-700">Yes. We can route submissions to HubSpot, Salesforce, or your CRM/Intake tool and set up notifications.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How do you ensure compliance?</h4><p className="text-gray-700">We avoid misleading claims, include appropriate disclaimers, and route sensitive language for your legal review.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">What do you test first?</h4><p className="text-gray-700">Headline clarity, primary CTA/offer, proof placement, form length/fields, and layout hierarchy—then refine based on data.</p></div></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.72}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to turn clicks into consultations and demos?</h3>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg inline-block">
              Book a Landing Page Strategy Session
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default LandingPages;
