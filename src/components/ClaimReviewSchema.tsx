import JsonLd from './JsonLd';

interface ClaimReviewSchemaProps {
  claimReviewed: string;
  rating: 'True' | 'Mostly True' | 'Mixture' | 'Mostly False' | 'False';
  explanation: string;
  author: string;
  datePublished: string;
  url: string;
}

const ClaimReviewSchema = ({
  claimReviewed,
  rating,
  explanation,
  author,
  datePublished,
  url
}: ClaimReviewSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    claimReviewed,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating === 'True' ? 5 : rating === 'Mostly True' ? 4 : 3,
      bestRating: 5,
      worstRating: 1,
      alternateName: rating
    },
    author: {
      '@type': 'Organization',
      name: author
    },
    datePublished,
    url,
    itemReviewed: {
      '@type': 'Claim',
      name: claimReviewed,
      appearance: {
        '@type': 'OpinionNewsArticle',
        headline: claimReviewed,
        url
      }
    },
    reviewBody: explanation
  };

  return <JsonLd data={schema} />;
};

export default ClaimReviewSchema;

// Example usage for establishing authority:
// <ClaimReviewSchema
//   claimReviewed="Law firm content marketing takes 6-12 months to show results"
//   rating="Mostly True"
//   explanation="While some results like thought leadership engagement can appear in 2-4 weeks, organic SEO and lead generation typically require 3-6 months for meaningful impact. Timeline varies based on competition, current visibility, and content quality."
//   author="Lawyal Tech"
//   datePublished="2025-11-29"
//   url="https://www.lawyaltech.org/blog/law-firm-content-marketing-timeline"
// />
