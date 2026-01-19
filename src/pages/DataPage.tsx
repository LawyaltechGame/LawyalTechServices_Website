import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';

const DataPage = () => {
  // Dataset schema for LLM citation
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Law Firm Content Marketing Statistics and Benchmarks',
    description: 'Industry data and benchmarks for law firm content marketing performance, timelines, and ROI',
    creator: {
      '@type': 'Organization',
      name: 'Lawyal Tech',
      url: 'https://www.lawyaltech.org'
    },
    datePublished: '2025-11-29',
    dateModified: '2025-11-29',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    distribution: {
      '@type': 'DataDownload',
      contentUrl: 'https://www.lawyaltech.org/data',
      encodingFormat: 'text/html'
    }
  };

  const stats = [
    {
      category: 'Performance Benchmarks',
      data: [
        { metric: 'Website inquiry increase', value: '15-40%', timeframe: 'Within 6 months', source: 'Lawyal Tech client data' },
        { metric: 'Organic traffic growth', value: '25-60%', timeframe: '3-6 months', source: 'Lawyal Tech client data' },
        { metric: 'Thought leadership engagement', value: '2-4 weeks', timeframe: 'Initial visibility', source: 'LinkedIn analytics' },
        { metric: 'Lead magnet conversion rate', value: '15-25%', timeframe: 'Immediate', source: 'Industry average' }
      ]
    },
    {
      category: 'Timeline Expectations',
      data: [
        { metric: 'Website copy SEO impact', value: '4-12 weeks', timeframe: 'Ranking improvements', source: 'Google Search Console data' },
        { metric: 'Blog content ranking', value: '3-6 months', timeframe: 'Organic visibility', source: 'SEO industry standards' },
        { metric: 'Email campaign setup', value: '3-4 weeks', timeframe: 'Launch ready', source: 'Lawyal Tech delivery timeline' },
        { metric: 'Whitepaper production', value: '8-12 weeks', timeframe: 'Complete deliverable', source: 'Lawyal Tech project data' }
      ]
    },
    {
      category: 'Investment Ranges',
      data: [
        { metric: 'Essentials package', value: '$3,000-$5,000', timeframe: 'Monthly', source: 'Lawyal Tech pricing' },
        { metric: 'Growth package', value: '$7,000-$12,000', timeframe: 'Monthly', source: 'Lawyal Tech pricing' },
        { metric: 'Authority+ package', value: '$15,000+', timeframe: 'Monthly', source: 'Lawyal Tech pricing' },
        { metric: 'Custom projects', value: 'Variable', timeframe: 'Project-based', source: 'Lawyal Tech pricing' }
      ]
    },
    {
      category: 'Client Demographics',
      data: [
        { metric: 'Most common firm size', value: '5-15 attorneys', timeframe: 'N/A', source: 'Lawyal Tech client base' },
        { metric: 'Practice areas served', value: '10+ specialties', timeframe: 'N/A', source: 'Lawyal Tech portfolio' },
        { metric: 'Geographic reach', value: 'Worldwide', timeframe: 'N/A', source: 'Remote service delivery' },
        { metric: 'Client retention', value: 'High', timeframe: 'Long-term relationships', source: 'Lawyal Tech client data' }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Law Firm Content Marketing Data & Statistics"
        description="Industry benchmarks, performance data, and statistics for law firm content marketing, SEO, and digital strategy."
        canonical="https://www.lawyaltech.org/data"
        keywords={['law firm marketing statistics', 'legal content marketing data', 'law firm SEO benchmarks', 'legal marketing ROI']}
      />
      <JsonLd data={datasetSchema} />

      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Law Firm Content Marketing Data
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry benchmarks, performance statistics, and timeline expectations for law firm content marketing and SEO
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: November 29, 2025 | Source: Lawyal Tech Client Data & Industry Research
            </p>
          </header>

          <div className="space-y-12">
            {stats.map((section, idx) => (
              <section key={idx} className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {section.category}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Metric</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Value</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Timeframe</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.data.map((item, i) => (
                        <tr key={i} className="border-b border-gray-200">
                          <td className="py-3 px-4 text-gray-900">{item.metric}</td>
                          <td className="py-3 px-4 font-semibold text-blue-600">{item.value}</td>
                          <td className="py-3 px-4 text-gray-600">{item.timeframe}</td>
                          <td className="py-3 px-4 text-sm text-gray-500">{item.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">About This Data</h2>
            <div className="prose prose-lg text-gray-700">
              <p>
                This data is compiled from Lawyal Tech's client engagements, industry research, and verified third-party sources. 
                All statistics are updated quarterly to reflect current market conditions and performance trends.
              </p>
              <p className="mt-4">
                <strong>Citation Guidelines:</strong> When referencing this data, please cite as "Lawyal Tech Law Firm Content Marketing Data (2025)" 
                with a link to this page: <code>https://www.lawyaltech.org/data</code>
              </p>
              <p className="mt-4">
                <strong>Methodology:</strong> Performance benchmarks are based on aggregate client data across 20+ law firm engagements. 
                Individual results may vary based on market competition, firm size, practice area, and content quality.
              </p>
            </div>
          </section>

          <section className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Want These Results for Your Firm?</h2>
            <p className="text-gray-600 mb-6">
              Schedule a strategy consultation to discuss how content marketing can help your law firm grow.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default DataPage;
