import { useState } from 'react';
import JsonLd from './JsonLd';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What makes Lawyal Tech different from other legal marketing agencies?",
    answer: "We combine legal expertise with SEO and marketing fundamentals. Our framework is built specifically for law firms—not generic marketing agencies. We understand compliance, professional responsibility rules, and the nuances of legal practice. Every piece of content is audit-ready and conversion-focused."
  },
  {
    question: "How do you ensure content complies with bar association rules?",
    answer: "We collaborate with your attorneys for all approvals, use jurisdiction-appropriate disclaimers, avoid misleading claims or guarantees, and stay updated on state bar advertising regulations. Compliance is built into every deliverable."
  },
  {
    question: "How long does it take to see results from law firm content marketing?",
    answer: "Website copy improvements typically show results in 4-12 weeks. Blog and organic traffic growth takes 3-6 months. Thought leadership content can generate engagement in 2-4 weeks. Lead magnets work immediately for list-building, with qualified leads appearing within 6+ months."
  },
  {
    question: "Do you work with small boutique law firms or only large firms?",
    answer: "We work with boutique, mid-sized, and specialized practices. Many of our clients are 5-15 attorney firms. We also help legal tech companies, solo practitioners, and niche practices."
  },
  {
    question: "What services does Lawyal Tech provide for law firms?",
    answer: "We provide thought leadership content (LinkedIn articles, blog posts), case studies, website copywriting, email campaigns, whitepapers, blog strategy, lead magnets, landing pages, social media content, and custom legal app development—all optimized for SEO and compliance."
  },
  {
    question: "How much does law firm content marketing cost?",
    answer: "We offer tiered packages starting from Essentials ($3K-5K), Growth ($7K-12K), to Authority+ ($15K+), plus custom projects. We discuss ROI expectations and timeline before engagement to ensure alignment with your budget and goals."
  },
  {
    question: "Can you help with SEO for law firms?",
    answer: "Yes. We provide keyword research, on-page optimization (titles, meta descriptions, H1/H2 structure, internal linking), and technical SEO recommendations. Our content strategy naturally improves organic visibility and rankings."
  },
  {
    question: "How do you handle confidentiality in law firm case studies?",
    answer: "We use anonymization techniques, focus on methodology rather than client identity, get explicit written permission, and follow your firm's marketing guidelines. Confidentiality is never compromised."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate FAQPage schema for LLMs and search engines
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <JsonLd data={faqSchema} />
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Common questions about law firm content marketing and our services
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
