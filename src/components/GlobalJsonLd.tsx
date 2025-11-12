import JsonLd from './JsonLd';
import SITE_META from '../config/seo';

const GlobalJsonLd = () => {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_META.name,
    url: SITE_META.url,
    logo: SITE_META.logo,
    sameAs: SITE_META.sameAs,
    contactPoint: SITE_META.contactPoint
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_META.name,
    url: SITE_META.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_META.url}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  // Navigation / Services structured data
  const siteNavigation = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SITE_META.services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: s.url
    }))
  };

  // Services as OfferCatalog/Service entries to help AI and search understand offerings
  const serviceCatalog = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${SITE_META.name} Services`,
    itemListElement: SITE_META.services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        url: s.url,
        provider: {
          '@type': 'Organization',
          name: SITE_META.name,
          url: SITE_META.url
        }
      }
    }))
  };

  return (
    <>
      <JsonLd data={org} />
      <JsonLd data={website} />
      <JsonLd data={siteNavigation} />
      <JsonLd data={serviceCatalog} />
    </>
  );
};

export default GlobalJsonLd;
