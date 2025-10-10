import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';

const LeadMagnets = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Lead Magnets"
        description="Lead magnet creation for law firms: guides, checklists, and resources paired with follow-up sequences."
        canonical="https://www.lawyaltech.org/lead-magnets"
        keywords={["law firm lead magnets", "legal guides", "checklists for lawyers"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/lead-magnets',
          title: 'Lead Magnets — Lawyal Tech',
          description: 'Design strategic resources that attract qualified prospects.'
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Lead Magnet Creation</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Strategic, high-value resources that attract and qualify the right prospects
            </p>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Turn Value into Leads</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We develop guides, checklists, and reports that speak to real client needs—and support them with simple follow-up sequences for conversions.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Why It Matters Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why It Matters for Law Firms</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">🎯</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Qualified Leads</h4><p className="text-gray-700">Attract prospects who match your services</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">🧠</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Authority</h4><p className="text-gray-700">Showcase expertise with value-rich content</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">🔄</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Nurture</h4><p className="text-gray-700">Automated follow-ups keep you top of mind</p></div>
              <div className="text-center p-6 rounded-lg bg-gray-50"><div className="text-4xl mb-4">📈</div><h4 className="text-lg font-semibold text-gray-900 mb-2">Conversion</h4><p className="text-gray-700">Turn readers into consultations</p></div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* CTA Section */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Capture demand with useful resources.</h3>
            <p className="text-lg text-gray-700 mb-6">We’ll build lead magnets that generate interest and action.</p>
            <Link to="/contact" className="px-8 py-4 text-lg font-medium rounded-full bg-[#050706] text-[#D2DE26] transition-all duration-300 hover:bg-[#0a0d0a] hover:scale-105 inline-block">Get Started Today</Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default LeadMagnets;
