import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CustomLegalApps = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Custom Legal Apps for Law Firms — Lawyal Tech"
        description="Custom legal apps for law firms by Lawyal Tech: intake automation, workflows, calculators, and tools that improve client experience and operations."
        canonical="https://www.lawyaltech.org/custom-legal-apps"
        keywords={["custom legal apps", "law firm calculators", "legal tools"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/custom-legal-apps',
          title: 'Custom Legal Apps for Law Firms — Lawyal Tech',
          description: 'Custom legal apps for law firms: build tools tailored to your legal workflows.'
        }}
      />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-white/70 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
              <span>Productized Builds</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Custom Legal Apps</h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">Turn your workflow into software.</p>
            <p className="text-gray-800 max-w-3xl mx-auto mt-2">
              We design and build secure, compliant legal applications that automate intake, streamline matter work, and deliver a smoother client experience—tailored to your practice, stack, and jurisdiction.
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
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Boutique to mid-sized law firms with unique processes that off-the-shelf tools can’t handle</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>In-house legal teams and ALSPs improving speed, visibility, and self-service</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Legal tech founders extending products with bespoke modules and integrations</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What You Get</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Product Strategy</span> — User stories, acceptance criteria, KPIs, and a practical roadmap</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">UX & UI Design</span> — Wireframes and clickable prototypes for fast validation</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Full-Stack Development</span> — Modern, scalable web apps built for reliability and ease of use</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Integrations</span> — Practice management, e-signature, calendars, storage, CRM, and billing/timekeeping</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Workflow Automation</span> — Intake, triage, document assembly, approvals, notifications, and reminders</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Security & Compliance</span> — RBAC/permissions, audit trails, encryption in transit/at rest, SSO/MFA, retention controls</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Accessibility & Performance</span> — WCAG-aligned patterns, responsive layouts, and fast load times</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">DevOps & Hosting</span> — CI/CD, monitoring, backups, and your choice of cloud or on-prem deployment</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span><span className="font-semibold">Documentation & Training</span> — Admin handbook, user guides, and rollout support</span></li>
              </ul>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Signature App Types */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.36}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Signature App Types</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Client Intake & Conflict Check portals</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Client/Matter Portals with status, messaging, and document exchange</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Document Assembly & E-Signature (engagement letters, NDAs, templates)</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Compliance Trackers (deadlines, KYC/AML, regulatory tasks)</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Legal Request/Ticketing for in-house teams (SLAs, routing, dashboards)</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Deal/Case Dashboards and Datarooms</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Discovery & Evidence Trackers (requests, productions, chain of custody)</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Knowledge Base & Clause Library with approvals and versioning</span></div>
              <div className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition md:col-span-2"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Outside Counsel/Billing Review tools with policy checks</span></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Our Process</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Discovery</span> — Goals, risks, systems, and success metrics</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Scope & Spec</span> — Detailed requirements, architecture, and integration plan</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Prototype</span> — Clickable flows to validate UX and reduce build risk</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Build</span> — Iterative sprints with frequent demos and feedback loops</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Integrations & Data</span> — Connect practice tools/CRMs; migrate or sync needed data</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">QA & Security Review</span> — Functional, accessibility, and performance testing</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Launch</span> — Deployment, monitoring, and go-live checklist</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><span><span className="font-semibold">Improve</span> — Usage analytics and a prioritized backlog for continuous enhancements</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.56}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Deliverables (per build)</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>PRD and user story backlog</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Wireframes, prototype, and UI components</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Technical architecture & integration specs</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Working application with admin panel/permissions</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Test plan & results, release notes, and training session</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5">➜</span><span>Handover package and documentation</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Outcomes */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Outcomes You Can Expect</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Faster Throughput</h4>
                <p className="text-gray-700">Faster intake and matter throughput with fewer handoffs</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">🛡️</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Better Compliance</h4>
                <p className="text-gray-700">Fewer errors and stronger compliance posture</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Visibility</h4>
                <p className="text-gray-700">Clear visibility across pipeline and workload</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">😊</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Happier Clients</h4>
                <p className="text-gray-700">Real-time status and simple self-service</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">💸</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Lower Cost</h4>
                <p className="text-gray-700">Lower cost per matter and better decision data</p>
              </div>
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
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Prototype</h4>
                  <p className="text-gray-700">4–6 weeks to a clickable prototype, feasibility review, and prioritized backlog</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#D2DE26] bg-white shadow-md hover:shadow-xl ring-2 ring-[#D2DE26]/40 transition-shadow">
                <div className="h-1.5 w-full bg-[#D2DE26] rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">MVP</h4>
                  <p className="text-gray-700">Core workflow + 1–2 integrations, ready for pilot and user adoption</p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Production+</h4>
                  <p className="text-gray-700">Multi-role app with SSO/MFA, audit trails, analytics, and 3+ integrations; ongoing roadmap</p>
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
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Do you build mobile apps?</h4><p className="text-gray-700">We deliver responsive web apps (PWA-ready). Native mobile can be scoped if required.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Where is it hosted?</h4><p className="text-gray-700">Your cloud (AWS, Azure, GCP) or on-prem—set up with environments, monitoring, and backups. Data residency requirements are supported.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Which integrations do you support?</h4><p className="text-gray-700">Commonly: Clio, Filevine, PracticePanther, iManage/NetDocuments, DocuSign/Adobe Sign, Microsoft 365/SharePoint, Google Drive, Outlook/Google Calendar, HubSpot/Salesforce, billing/timekeeping, Slack/Teams. We can evaluate others.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Who owns the IP?</h4><p className="text-gray-700">You do. Code and deliverables are assigned to your organization upon final payment, with repository access from day one.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How do you handle security and privacy?</h4><p className="text-gray-700">Least-privilege permissions, encryption in transit/at rest, audit trails, secrets management, and SSO/MFA options—aligned to your policies and jurisdiction.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl leading-6 mt-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Do you provide maintenance?</h4><p className="text-gray-700">Yes. Retainers cover enhancements, bug fixes, and roadmap delivery—optionally with SLAs.</p></div></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.72}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to turn your process into a custom legal app your team and clients will love?</h3>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] border-none cursor-pointer transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 transform shadow-lg">
              Book a Custom Legal Apps Strategy Session
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default CustomLegalApps;
