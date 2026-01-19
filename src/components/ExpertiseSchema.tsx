import JsonLd from './JsonLd';

interface ExpertiseSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  expertise: string[];
  yearsOfExperience?: number;
  image?: string;
  sameAs?: string[]; // Social profiles
}

const ExpertiseSchema = ({ 
  name, 
  jobTitle, 
  description, 
  expertise, 
  yearsOfExperience,
  image,
  sameAs 
}: ExpertiseSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    ...(image && { image }),
    ...(sameAs && { sameAs }),
    knowsAbout: expertise,
    ...(yearsOfExperience && {
      hasOccupation: {
        '@type': 'Occupation',
        name: jobTitle,
        experienceRequirements: `${yearsOfExperience} years`
      }
    }),
    worksFor: {
      '@type': 'Organization',
      name: 'Lawyal Tech',
      url: 'https://www.lawyaltech.org'
    }
  };

  return <JsonLd data={schema} />;
};

export default ExpertiseSchema;

// Example usage:
// <ExpertiseSchema
//   name="Nabhiha Khan"
//   jobTitle="Founder & Legal Content Strategist"
//   description="Expert in law firm content marketing, SEO, and compliance-focused digital strategy"
//   expertise={[
//     "Law Firm Content Marketing",
//     "Legal SEO",
//     "Bar Association Compliance",
//     "Thought Leadership Strategy",
//     "Legal Copywriting",
//     "Attorney Personal Branding"
//   ]}
//   yearsOfExperience={5}
//   image="https://www.lawyaltech.org/images/nabhiha-profile.png"
//   sameAs={[
//     "https://www.linkedin.com/in/nabhiha-khan",
//     "https://twitter.com/lawyaltech"
//   ]}
// />
