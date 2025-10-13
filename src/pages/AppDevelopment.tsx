import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="App Development"
        description="Custom app and tool development for legal brands: lead capture, client intake, and operational tools."
        canonical="https://www.lawyaltech.org/app-development"
        keywords={["legal app development", "law firm tools", "legal tech apps"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/app-development',
          title: 'App Development — Lawyal Tech',
          description: 'Build tools that streamline operations and win clients.'
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lawyaltech.org/"},
          {"@type": "ListItem", "position": 2, "name": "App Development", "item": "https://www.lawyaltech.org/app-development"}
        ]
      }} />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="inline-flex items-center gap-2 bg.white/70 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
              <span>App Development</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">App Development</h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">Build tools your clients and teams <span className="text-[#0b0f0b] bg-[#D2DE26]/60 px-1 rounded">actually use</span>.</p>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto mt-2">We design and develop secure, compliant web apps and portals that streamline intake, automate workflows, and create a smoother client experience—from prototype to launch and ongoing improvements.</p>
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
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Boutique to mid-sized law firms that want to reduce manual work and improve client service</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Legal tech founders and product teams validating or expanding a product</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Ops/BD leaders who need internal tools, dashboards, or portals that “just work”</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What You Get</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Product Strategy</span> — ICPs, user stories, success metrics, and a practical roadmap</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">UX & UI Design</span> — Wireframes, clickable prototypes, and a clean, accessible interface</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Frontend & Backend Development</span> — Modern, scalable stacks aligned to your environment</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Integrations</span> — Practice management, e-sign, payments, calendars, storage, CRM, and analytics</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Workflow Automation</span> — Intake, triage, document routing, reminders, and status updates</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Security & Compliance</span> — Role-based access, audit logs, encryption in transit/at rest, SSO/MFA options, privacy-by-design</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Accessibility & Performance</span> — WCAG-aligned patterns, responsive layouts, fast page loads</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">DevOps & Hosting</span> — CI/CD, staging/production environments, monitoring, backups</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">QA & UAT</span> — Functional, cross-browser, accessibility, and performance testing</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Documentation & Training</span> — Admin handbook, user guides, and rollout support</span></li>
              </ul>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Signature Solutions */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.35}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Signature Solutions</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Client Intake & Conflict Check apps</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Client Portals with case status, messaging, and document exchange</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Document Assembly & E-Signature workflows</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Consultation Scheduling & Payments (with reminders and no-show rescue)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Compliance Trackers (deadlines, KYC/AML, matter milestones)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Knowledge Bases & Self-Service tools for FAQs and triage</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Reporting Dashboards for partners, ops, and BD</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Data Connectors between practice tools, CRM, and storage</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Our Process</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Discovery</span> — Goals, risks, systems, and success metrics</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Scope & Spec</span> — User stories, acceptance criteria, and integration plan</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">UX & Prototype</span> — Wireframes and clickable prototype to validate flows early</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Build</span> — Iterative development in sprints with frequent demos</span></li>
              <li className="group flex items.start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Integrations & Data</span> — Connect practice tools/CRMs and migrate required data</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">QA</span> — Functional, security, accessibility, and performance checks</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Launch</span> — Deployment, monitoring, and go-live checklist</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Improve</span> — Usage analytics and a prioritized backlog for ongoing enhancements</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables (per build) */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.45}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Deliverables (per build)</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Product requirements document (PRD) and user story backlog</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Wireframes, prototype, and UI components</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Technical architecture and integration specs</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Staging & production environments with CI/CD</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Admin panel and permissions model</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Test plan, test results, and release notes</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Documentation, training session, and handover package</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Outcomes */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Outcomes You Can Expect</h3>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Fewer manual steps and faster intake/throughput</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Better client experience and higher satisfaction</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Clear visibility into pipeline, matters, and performance</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Lower error rates and stronger compliance posture</span></li>
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
                  <p className="text-gray-700">MVP focused on one core workflow and one key integration, with launch support</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#D2DE26] bg-white shadow-md hover:shadow-xl ring-2 ring-[#D2DE26]/40 transition-shadow">
                <div className="h-1.5 w-full bg-[#D2DE26] rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Growth</h4>
                  <p className="text-gray-700">Full v1 with multiple workflows, dashboards, and 2–3 integrations, plus ongoing iteration</p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Scale</h4>
                  <p className="text-gray-700">Multi-team roles/permissions, SSO/MFA, audit logs, advanced analytics, and a quarterly roadmap</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* FAQs */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs</h3>
            <ul className="pl-1 space-y-4 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Which integrations do you support?</h4><p className="text-gray-700">Common connections include practice management (e.g., Clio, Filevine, PracticePanther), CRM/marketing (HubSpot, Salesforce), e-signature (DocuSign, Adobe Sign), storage (SharePoint, Google Drive), scheduling (Calendly), payments, and analytics. We can evaluate others on request.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Who owns the IP?</h4><p className="text-gray-700">You do. We assign code and deliverables to your organization upon final payment, with repository access from day one.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Where is it hosted?</h4><p className="text-gray-700">Your cloud (AWS, Azure, GCP) or ours—set up with environments, monitoring, and backups. We align with your data-residency requirements.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How do you handle security and privacy?</h4><p className="text-gray-700">Encryption in transit/at rest, least-privilege access, role-based permissions, audit logs, and secure secrets management. We follow privacy-by-design and align with your policies.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Can you match our brand and design system?</h4><p className="text-gray-700">Yes. We extend or create a lightweight design system for consistency and speed.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Do you provide maintenance?</h4><p className="text-gray-700">Yes. We offer retainers for enhancements, bug fixes, and roadmap delivery—plus optional SLA coverage.</p></div></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to turn your workflow into a product your team and clients love?</h3>
            <p className="text-lg text-gray-700 mb-6">Book an App Strategy Session or request a quick technical assessment.</p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 inline-block">Get Started Today</Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default AppDevelopment;


