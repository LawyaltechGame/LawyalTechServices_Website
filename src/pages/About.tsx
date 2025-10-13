import Footer from "../components/Footer";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF5]">
      <SEO 
        title="About"
        description="About Lawyal Tech — legal marketing partners for law firms and legal tech brands, focused on measurable growth and authority."
        canonical="https://www.lawyaltech.org/about"
        keywords={["about lawyal tech", "legal marketing agency", "law firm growth"]}
        pageType="about"
        openGraph={{
          url: 'https://www.lawyaltech.org/about',
          title: 'About — Lawyal Tech',
          description: 'We help law firms grow with credible, compliant, conversion-focused marketing.'
        }}
      />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lawyaltech.org/"},
          {"@type": "ListItem", "position": 2, "name": "About", "item": "https://www.lawyaltech.org/about"}
        ]
      }} />
      <div className="pt-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111] mb-6 md:mb-8 font-poppins text-center md:text-left">
            About Us
          </h1>
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-3 md:mb-4 font-poppins">
              Who We Are
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              We’re a legal marketing agency that builds high-converting
              websites and authority content for law firms and legal tech
              brands.<br /> Our team blends data-driven strategy, creative
              storytelling, and deep industry knowledge to help firms stand out
              in a competitive market.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-3 md:mb-4 font-poppins mt-6 md:mt-8">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            To help law firms grow with measurable marketing strategies that combine credibility, SEO, and conversion-focused design — so attorneys can focus on winning cases, not chasing clients.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-3 md:mb-4 font-poppins mt-6 md:mt-8">
              Our Vision
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            To be the go-to marketing partner for law firms and legal tech companies that want predictable growth, stronger authority, and scalable systems for client acquisition.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-3 md:mb-4 font-poppins mt-6 md:mt-8">
              Our Values
            </h2>
            <ul className="text-base md:text-lg text-gray-700 mb-2 md:mb-6 leading-relaxed list-disc pl-5 md:pl-6 space-y-2">
              <li>
                <span className="font-bold">Integrity and Transparency:</span>{" "}
                We believe in honest marketing that builds trust.
              </li>
              <li>
                <span className="font-bold">Client Results First:</span> Every
                campaign is designed to deliver measurable ROI.
              </li>
              <li>
                <span className="font-bold">Continuous Learning:</span> The
                legal industry evolves. We stay ahead so our clients do too.
              </li>
              <li>
                <span className="font-bold">Excellence in Execution:</span> From
                strategy to delivery, we obsess over precision and impact.
              </li>
            </ul>
            <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-3 md:mb-4 font-poppins mt-6 md:mt-8">
              What We Create for Law Firms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-[#F9FBF5] border border-[#E6EED8] rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold text-[#111] mb-2">
                  Authority Content
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We turn your expertise into influence through thought
                  leadership articles, LinkedIn posts, blog content, and op-eds
                  that attract the right clients and position you as the go-to
                  attorney in your field.
                </p>
              </div>
              <div className="bg-[#F9FBF5] border border-[#E6EED8] rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold text-[#111] mb-2">
                  Client Proof & Case Studies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We build trust by showcasing real results, client wins, and
                  success stories—crafted to demonstrate measurable outcomes and
                  reinforce your authority.
                </p>
              </div>
              <div className="bg-[#F9FBF5] border border-[#E6EED8] rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold text-[#111] mb-2">
                  Website Copy That Converts
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  From practice area pages to service overviews, we write
                  SEO-optimized copy that ranks, reads well, and drives action.
                </p>
              </div>
              <div className="bg-[#F9FBF5] border border-[#E6EED8] rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold text-[#111] mb-2">
                  Email Campaigns & Newsletters
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We help you stay top of mind with consistent communication
                  that educates, nurtures, and converts your audience into
                  clients.
                </p>
              </div>
              <div className="bg-[#F9FBF5] border border-[#E6EED8] rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold text-[#111] mb-2">
                  Guides & Whitepapers
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We create educational assets that position your firm as a
                  thought leader—like “The Business Owner’s Guide to Employment
                  Law in New York” or “How to Protect Your Firm from ADA Website
                  Lawsuits.”
                </p>
              </div>
              <div className="bg-[#F9FBF5] border border-[#E6EED8] rounded-lg p-4 md:p-5 shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold text-[#111] mb-2">
                  App & Web Development for Legal Brands
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We build user-friendly, conversion-focused websites and custom
                  legal tech tools designed to attract clients and streamline
                  your operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
