import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string[];
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

const SEO = ({ title, description, canonical, keywords = [], openGraph }: SEOProps) => {
  const pageTitle = title ? `${title} | Lawyal Tech Services` : DEFAULT_TITLE;
  const pageDesc = description || DEFAULT_DESC;
  const og = openGraph || {};

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
      {og.image && <meta property="og:image" content={og.image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={og.title || pageTitle} />
      <meta name="twitter:description" content={og.description || pageDesc} />
      {og.image && <meta name="twitter:image" content={og.image} />}
    </Helmet>
  );
};

export default SEO;


