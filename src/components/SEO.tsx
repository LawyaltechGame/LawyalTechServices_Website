import { Helmet } from 'react-helmet-async';
import { generateOGImageUrl, getOGImageData, getBlogPostOGData } from '../utils/ogImageGenerator';

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string[];
  pageType?: string;
  serviceName?: string;
  blogPost?: any;
  openGraph?: {
    type?: string;
    url?: string;
    title?: string;
    description?: string;
    image?: string;
  };
};

const DEFAULT_TITLE = 'Lawyal Tech Services — Build Authority. Rank Higher. Win More Clients.';
const DEFAULT_DESC = 'Strategic, compliant digital content for law firms: thought leadership, case studies, website copy, email campaigns, whitepapers, and more.';

const SEO = ({ title, description, canonical, keywords = [], pageType, serviceName, blogPost, openGraph }: SEOProps) => {
  const pageTitle = title ? `${title} | Lawyal Tech Services` : DEFAULT_TITLE;
  const pageDesc = description || DEFAULT_DESC;
  const og = openGraph || {};

  // Generate OG image based on page type
  let ogImage: string;
  if (og.image) {
    ogImage = og.image;
  } else if (blogPost) {
    const ogData = getBlogPostOGData(blogPost);
    ogImage = generateOGImageUrl(ogData);
  } else if (pageType) {
    const ogData = getOGImageData(pageType, { serviceName });
    ogImage = generateOGImageUrl(ogData);
  } else {
    // Fallback to generic OG image
    ogImage = `https://www.lawyaltech.org/api/og?title=${encodeURIComponent(pageTitle)}&subtitle=${encodeURIComponent(pageDesc.slice(0, 100))}`;
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={og.type || 'website'} />
      {og.url && <meta property="og:url" content={og.url} />}
      <meta property="og:title" content={og.title || pageTitle} />
      <meta property="og:description" content={og.description || pageDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Lawyal Tech" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lawyaltech" />
      <meta name="twitter:creator" content="@lawyaltech" />
      <meta name="twitter:title" content={og.title || pageTitle} />
      <meta name="twitter:description" content={og.description || pageDesc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;


