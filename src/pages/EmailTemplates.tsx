import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';

const EmailTemplates = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Email Campaigns & Newsletters"
        description="Professional email campaigns and newsletters for law firms: templates, sequences, and on-brand content."
        canonical="https://www.lawyaltech.org/email-templates"
        keywords={["law firm email marketing", "legal newsletters", "email templates for lawyers"]}
        pageType="email-templates"
        serviceName="Email Marketing"
        openGraph={{
          url: 'https://www.lawyaltech.org/email-templates',
          title: 'Email Campaigns & Newsletters — Lawyal Tech',
          description: 'Stay top of mind with consistent, persuasive emails.'
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lawyaltech.org/"},
          {"@type": "ListItem", "position": 2, "name": "Email Campaigns", "item": "https://www.lawyaltech.org/email-templates"}
        ]
      }} />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-white/70 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
              <span>Email Marketing</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Email Campaigns & Newsletters</h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">Stay top of mind. Nurture prospects. <span className="text-[#0b0f0b] bg-[#D2DE26]/60 px-1 rounded">Turn contacts into consultations</span>.</p>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto mt-2">We plan, write, design, and automate email that builds authority, drives engagement, and converts—without risking compliance or credibility.</p>
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
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Boutique to mid-sized law firms that want consistent, professional client communications</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Legal tech brands that need lifecycle email and product-led nurture</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Marketing/BD teams that want strategy + execution with measurable results</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What You Get</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Lifecycle Strategy</span> — Audience segmentation, ICPs, offers, cadence, and a quarterly calendar</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Campaign Types</span> — Lead nurture, intake/consultation flows, reactivation/win-back, referral and cross-sell, event/webinar, onboarding and adoption (for legal tech)</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Newsletter Program</span> — Editorial pillars, sections, CTAs, and a repeatable publishing rhythm</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Copy & Design</span> — On-brand, mobile-first templates with strong CTAs and accessible formatting</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Automation Setup</span> — Workflow builds in your ESP/CRM (HubSpot, Mailchimp, Campaign Monitor, ActiveCampaign, etc.)</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Data & Reporting</span> — UTM tagging, dashboards, and KPI tracking tied to bookings and pipeline</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Compliance-Safe Defaults</span> — Clear consent handling, unsubscribe and footer language, jurisdictional disclaimers where required</span></li>
              </ul>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Signature Sequences */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.35}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Signature Sequences</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Intake Nurture (first consult to signed client)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Consultation No-Show Rescue (reminders + rebooking path)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Dormant Lead Reactivation (21–30 day win-back)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Referral Flywheel (client and partner referrals)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Event/Webinar Funnel (registration → reminders → replay → CTA)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Product Onboarding & Adoption (for legal tech trials and demos)</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Our Process</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Discovery & List Audit</span> — Goals, audience, current performance, data integrity</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Segmentation & Offer Strategy</span> — Map content to buyer stages and practice areas</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Content & Calendar</span> — Subject lines, hooks, CTAs, and a 90-day plan</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Template Design & Build</span> — Responsive, dark-mode aware, accessible templates</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Automation & QA</span> — ESP setup, rendering tests, link checks, preference handling</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Launch & Optimize</span> — A/B tests (subject, CTA, length, send time) and quick wins</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Measure & Iterate</span> — Monthly insights and roadmap updates</span></li>
            </ul>
              </div>
        </ScrollAnimationWrapper>

        {/* Deliverables (per campaign/program) */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.45}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Deliverables (per campaign/program)</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Lifecycle map and flowchart</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>4–8 email templates or sequence steps</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>10–15 subject line variants and preview text</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>2 CTA options per email</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Newsletter master template with modular sections</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Implementation notes for your ESP/CRM</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Reporting baseline + monthly performance summary</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Outcomes */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Outcomes You Can Expect</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>More consultations, demos, and retained clients</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Higher reactivation of dormant leads</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Greater referral volume and cross-sell opportunities</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Clearer pipeline visibility and forecasting for BD/marketing</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Plans */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.55}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plans</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Essentials</h4>
                  <p className="text-gray-700">Monthly newsletter + one 4–6-email nurture sequence</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#D2DE26] bg-white shadow-md hover:shadow-xl ring-2 ring-[#D2DE26]/40 transition-shadow">
                <div className="h-1.5 w-full bg-[#D2DE26] rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Growth</h4>
                  <p className="text-gray-700">Biweekly newsletter + two nurture sequences + webinar/email kit</p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Authority+</h4>
                  <p className="text-gray-700">Weekly newsletter + three lifecycle programs + quarterly deliverability audit and list hygiene</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Optional Add-Ons */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Optional Add-Ons</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Lead magnet creation and landing pages</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Preference center and list growth setup</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>CRM integrations and form routing</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Deliverability review (SPF/DKIM/DMARC guidance)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Multilingual versions and localization</span></li>
            </ul>
              </div>
        </ScrollAnimationWrapper>

        {/* FAQs */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.65}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs</h3>
            <ul className="pl-1 space-y-4 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How do you measure success?</h4><p className="text-gray-700">We prioritize reply rate, click-through, consultations/demos booked, and influenced revenue. (Open rates are de-emphasized due to tracking changes.)</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Can you write for regulated practice areas?</h4><p className="text-gray-700">Yes. We include compliance review and required disclaimers where appropriate.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Which platforms do you support?</h4><p className="text-gray-700">HubSpot, Mailchimp, Campaign Monitor, ActiveCampaign, Klaviyo, SendGrid—or your existing ESP/CRM.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Do you provide design as well as copy?</h4><p className="text-gray-700">Yes. We deliver mobile-first, accessible templates and can align with your design system.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How many revisions are included?</h4><p className="text-gray-700">Two rounds per campaign or template set to finalize tone, accuracy, and positioning.</p></div></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to turn your mailing list into booked consultations and demos?</h3>
            <p className="text-lg text-gray-700 mb-6">Book an Email Strategy Session or request an audit of your current program.</p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
              Get Started Today
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default EmailTemplates;
