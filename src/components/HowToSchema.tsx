import JsonLd from './JsonLd';

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
  totalTime?: string; // ISO 8601 duration format (e.g., "PT2M" for 2 minutes)
}

const HowToSchema = ({ name, description, steps, totalTime }: HowToSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image })
    }))
  };

  return <JsonLd data={schema} />;
};

export default HowToSchema;

// Example usage in a component:
// <HowToSchema
//   name="How to Choose a Law Firm Content Marketing Agency"
//   description="A step-by-step guide to selecting the right content marketing partner for your law firm"
//   totalTime="PT10M"
//   steps={[
//     {
//       name: "Assess Your Marketing Goals",
//       text: "Identify whether you need more visibility, better lead quality, thought leadership, or website conversion improvements."
//     },
//     {
//       name: "Verify Legal Industry Expertise",
//       text: "Ensure the agency understands bar association rules, legal compliance, and law firm business models."
//     },
//     {
//       name: "Review Their Portfolio and Case Studies",
//       text: "Look for proven results with law firms similar to yours in size and practice area."
//     },
//     {
//       name: "Discuss Compliance and Processes",
//       text: "Ask how they handle bar association advertising rules and ensure all content is audit-ready."
//     },
//     {
//       name: "Evaluate Their Service Model",
//       text: "Determine if they offer full-service support or just piecemeal deliverables."
//     }
//   ]}
// />
