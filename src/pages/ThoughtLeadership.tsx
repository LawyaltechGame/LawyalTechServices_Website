import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';

const ThoughtLeadership = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Thought Leadership Articles for Law Firms — Lawyal Tech"
        description="Thought leadership for law firms by Lawyal Tech: articles, LinkedIn posts, and op-eds that build authority and attract clients."
        canonical="https://www.lawyaltech.org/thought-leadership"
        keywords={["legal thought leadership", "law firm articles", "LinkedIn for lawyers"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/thought-leadership',
          title: 'Thought Leadership Articles for Law Firms — Lawyal Tech',
          description: 'Thought leadership for law firms: publish with consistency and grow authority.'
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lawyaltech.org/"},
          {"@type": "ListItem", "position": 2, "name": "Thought Leadership", "item": "https://www.lawyaltech.org/thought-leadership"}
        ]
      }} />
      {/* Header Section */}
      <div className="bg-[#D2DE26] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-white/70 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
              <span>Thought Leadership</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Thought Leadership Articles</h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">Turn your perspective into <span className="text-[#0b0f0b] bg-[#D2DE26]/60 px-1 rounded">market influence</span>.</p>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto mt-2">We craft bylined articles and opinion pieces that shape conversations, build authority, and open doors to referrals, media, and speaking opportunities.</p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Who This Is For */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.25}>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Who This Is For</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Boutique to mid-sized law firms ready to lead their niche</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Legal tech founders and executives building personal and brand authority</span></li>
                <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Practice leaders who want strategic commentary on cases, regulation, and industry shifts</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What You Get</h3>
              <div className="h-1 w-16 bg-[#D2DE26] rounded-full mb-4"></div>
              <ul className="pl-1 space-y-3 text-gray-700">
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Editorial Strategy</span> — Clear positioning, pillar themes, and a quarterly thought leadership calendar.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Executive Ghostwriting</span> — Bylined articles in your voice, aligned to your practice and goals.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Publication Targeting</span> — Outlet shortlists (industry sites, bar association journals, legal tech media) and submission guidance.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Research & References</span> — Tight sourcing and examples to substantiate your point of view.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">PR & Distribution Support</span> — Pitch emails, author bios, and repurposing for LinkedIn, newsletters, and your website.</span></li>
                <li className="group flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Consistency & Quality</span> — Senior editorial review for clarity, credibility, and compliance before publication.</span></li>
              </ul>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Signature Formats */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Signature Formats</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Point-of-View (POV) essays on precedents, regulation, and trends</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Executive columns for recurring publication slots</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Op-eds tied to timely news or court decisions</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Deep-dive explainers for general counsel or founders</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Collaborative pieces with partners or clients (with approvals)</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Our Process */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.35}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Our Process</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="pl-1 space-y-3 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Discovery & POV Workshop</span> — Clarify your stance, audience, and outcomes.</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Topics & Outlets</span> — Build a quarterly slate mapped to timely opportunities and target publications.</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Interviews & Research</span> — 20–30 minute SME interview (or written brief) + source gathering.</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Draft & Review</span> — First draft → two rounds of revisions to lock tone, nuance, and risk.</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Publication & Pitch</span> — Finalize per outlet guidelines; prepare bio, headshot notes, and pitch email.</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Repurpose & Amplify</span> — Create a social/posting kit (LinkedIn post + newsletter blurb + 2–3 pull-quotes).</span></li>
              <li className="group flex items-start gap-3"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span><span className="font-semibold">Measure & Iterate</span> — Track placements, engagement, and inbound leads; refine the next slate.</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Deliverables */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Deliverables (per article)</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>900–1,400 words (or per outlet spec)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Headline, standfirst/abstract, and SEO-aware subheads</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>2–3 pull-quotes and a 1-paragraph executive summary</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Outlet-ready version (with word count and style tweaks)</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 md:col-span-2 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Repurposing kit: LinkedIn post, newsletter blurb, and 3 talking points</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Outcomes */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.45}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Outcomes You Can Expect</h2>
            <div className="h-1 w-16 bg-[#D2DE26] rounded-full mx-auto mb-6"></div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-gray-700">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Stronger authority with the right peers and buyers</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Higher-quality inbound and referral velocity</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Invitations to speak on panels, webinars, and podcasts</span></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><span>Earned media and high-quality backlinks to your site</span></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* Plans */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.5}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Plans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Essentials</h4>
                  <p className="text-gray-700">1 article/month, publication targeting, repurposing kit.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#D2DE26] bg-white shadow-md hover:shadow-xl ring-2 ring-[#D2DE26]/40 transition-shadow">
                <div className="h-1.5 w-full bg-[#D2DE26] rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Growth</h4>
                  <p className="text-gray-700">2 articles/month, outlet pitching support, quarterly editorial review.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-1.5 w-full bg-gray-200 rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Authority+</h4>
                  <p className="text-gray-700">4 articles/month, recurring column development, speaker abstracts, monthly reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* FAQs */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.55}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs</h2>
            <ul className="pl-1 space-y-4 text-gray-700 max-w-4xl mx-auto">
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How are thought leadership articles different from blogs?</h4><p className="text-gray-700">Blogs build topical depth and organic traffic on your site. Thought leadership articles are bylined POV pieces designed to shape opinions and earn placements with industry audiences.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Where will these be published?</h4><p className="text-gray-700">We recommend a mix of your site (for control and SEO) and external industry outlets (for reach and credibility). We tailor the outlet list to your practice and goals.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How much time do you need from our attorneys/executives?</h4><p className="text-gray-700">Typically 20–30 minutes per article for a focused interview, plus quick feedback on drafts. We can work from briefs if live interviews aren’t feasible.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Can you match our voice?</h4><p className="text-gray-700">Yes. We build a voice guide from your past writing, talks, and markups—then use it across all drafts.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">Do you guarantee placement?</h4><p className="text-gray-700">We can’t guarantee third-party acceptance, but we improve odds with timely topics, outlet-specific formatting, and targeted pitching. When external placement isn’t optimal, we publish on your site and amplify across owned channels.</p></div></li>
              <li className="group flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"><span className="text-[#a0b31f] text-xl mt-0.5 transition-transform group-hover:translate-x-0.5">➜</span><div><h4 className="font-semibold text-gray-900">How many revisions are included?</h4><p className="text-gray-700">Two rounds per article. For the very first piece, we include a “fit check” to ensure tone and direction before we proceed with the remainder of the plan.</p></div></li>
            </ul>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to lead the conversation in your practice area?</h3>
            <p className="text-lg text-gray-700 mb-6">Book a Thought Leadership Strategy Session and get a tailored 60-day editorial plan.</p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 inline-block">Book a Strategy Session</Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ThoughtLeadership;


