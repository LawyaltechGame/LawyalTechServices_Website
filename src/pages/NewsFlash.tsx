import SEO from '../components/SEO';

const NewsFlash = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="News Flash"
        description="Latest updates and announcements from Lawyal Tech."
        canonical="https://www.lawyaltech.org/news-flash"
        keywords={["lawyal tech news", "legal marketing updates"]}
        openGraph={{
          url: 'https://www.lawyaltech.org/news-flash',
          title: 'News Flash — Lawyal Tech',
          description: 'Updates, announcements, and releases.'
        }}
      />
      {/* placeholder page */}
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h1>
        <p className="text-gray-700">Stay tuned for announcements and insights.</p>
      </div>
    </div>
  );
};

export default NewsFlash; 