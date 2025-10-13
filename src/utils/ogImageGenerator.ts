// OG Image Generator for Lawyal Tech
// Creates dynamic social preview images for each page

export interface OGImageData {
  title: string;
  subtitle?: string;
  pageType: 'home' | 'services' | 'about' | 'contact' | 'blog' | 'service-detail';
  serviceName?: string;
  author?: string;
  date?: string;
}

export const generateOGImageUrl = (data: OGImageData): string => {
  const baseUrl = 'https://www.lawyaltech.org';
  const params = new URLSearchParams({
    title: data.title,
    subtitle: data.subtitle || '',
    type: data.pageType,
    service: data.serviceName || '',
    author: data.author || '',
    date: data.date || ''
  });
  
  return `${baseUrl}/api/og?${params.toString()}`;
};

// Predefined OG image templates for different page types
export const getOGImageData = (pageType: string, pageData?: any): OGImageData => {
  switch (pageType) {
    case 'home':
      return {
        title: 'Lawyal Tech',
        subtitle: 'Digital Content for Law Firms',
        pageType: 'home'
      };
    
    case 'services':
      return {
        title: 'Legal Marketing Services',
        subtitle: 'Build Authority. Rank Higher. Win More Clients.',
        pageType: 'services'
      };
    
    case 'about':
      return {
        title: 'About Lawyal Tech',
        subtitle: 'Legal Content Experts',
        pageType: 'about'
      };
    
    case 'contact':
      return {
        title: 'Contact Us',
        subtitle: 'Get Your Free Strategy Call',
        pageType: 'contact'
      };
    
    case 'blog-posts':
      return {
        title: 'Blog Posts & Articles',
        subtitle: 'Turn Your Expertise Into Authority',
        pageType: 'blog'
      };
    
    case 'website-copy':
      return {
        title: 'Website Copywriting',
        subtitle: 'SEO-Optimized Copy That Converts',
        pageType: 'service-detail',
        serviceName: 'Website Copy'
      };
    
    case 'email-templates':
      return {
        title: 'Email Campaigns',
        subtitle: 'Nurture Leads & Convert Clients',
        pageType: 'service-detail',
        serviceName: 'Email Marketing'
      };
    
    case 'thought-leadership':
      return {
        title: 'Thought Leadership',
        subtitle: 'Build Your Reputation as an Authority',
        pageType: 'service-detail',
        serviceName: 'Thought Leadership'
      };
    
    case 'whitepapers-guides':
      return {
        title: 'Whitepapers & Guides',
        subtitle: 'Educational Assets That Convert',
        pageType: 'service-detail',
        serviceName: 'Whitepapers'
      };
    
    case 'app-development':
      return {
        title: 'App Development',
        subtitle: 'Custom Legal Tech Solutions',
        pageType: 'service-detail',
        serviceName: 'App Development'
      };
    
    case 'lead-magnets':
      return {
        title: 'Lead Magnets',
        subtitle: 'Strategic Assets That Generate Leads',
        pageType: 'service-detail',
        serviceName: 'Lead Magnets'
      };
    
    case 'case-studies':
      return {
        title: 'Case Studies',
        subtitle: 'Showcase Your Success Stories',
        pageType: 'service-detail',
        serviceName: 'Case Studies'
      };
    
    case 'landing-pages':
      return {
        title: 'Landing Pages',
        subtitle: 'High-Converting Campaign Pages',
        pageType: 'service-detail',
        serviceName: 'Landing Pages'
      };
    
    case 'custom-legal-apps':
      return {
        title: 'Custom Legal Apps',
        subtitle: 'Streamline Your Operations',
        pageType: 'service-detail',
        serviceName: 'Custom Apps'
      };
    
    case 'news-flash':
      return {
        title: 'Legal News Flash',
        subtitle: 'Stay Updated with Legal Trends',
        pageType: 'service-detail',
        serviceName: 'News Flash'
      };
    
    default:
      return {
        title: 'Lawyal Tech',
        subtitle: 'Digital Content for Law Firms',
        pageType: 'home'
      };
  }
};

// For blog posts
export const getBlogPostOGData = (post: any): OGImageData => {
  return {
    title: post.title?.rendered?.replace(/<[^>]+>/g, '') || 'Blog Post',
    subtitle: 'Lawyal Tech Blog',
    pageType: 'blog',
    author: post.author_name || 'Lawyal Tech',
    date: post.date ? new Date(post.date).toLocaleDateString() : ''
  };
};
