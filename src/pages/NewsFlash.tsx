import Footer from '../components/Footer';

const NewsFlash = () => {
  const newsItems = [
    {
      title: "New AI-Powered Solutions Launch",
      date: "December 15, 2024",
      excerpt: "We're excited to announce the launch of our new AI-powered technology solutions that will revolutionize how businesses approach digital transformation.",
      category: "Technology"
    },
    {
      title: "Partnership with Global Tech Leaders",
      date: "December 10, 2024",
      excerpt: "Lawyal Tech® has formed strategic partnerships with leading global technology companies to expand our service offerings and capabilities.",
      category: "Partnerships"
    },
    {
      title: "Client Success Story: Digital Transformation",
      date: "December 5, 2024",
      excerpt: "See how we helped a Fortune 500 company achieve 300% growth through our comprehensive digital transformation strategy.",
      category: "Case Studies"
    },
    {
      title: "New Office Opening in Tech Hub",
      date: "November 30, 2024",
      excerpt: "We're expanding our presence with a new office in the heart of the technology district to better serve our growing client base.",
      category: "Company News"
    },
    {
      title: "Industry Recognition Award",
      date: "November 25, 2024",
      excerpt: "Lawyal Tech® has been recognized as one of the top technology service providers in the industry for innovation and excellence.",
      category: "Awards"
    },
    {
      title: "Upcoming Webinar: Future of Tech",
      date: "November 20, 2024",
      excerpt: "Join our experts for an insightful webinar on emerging technology trends and how they will impact businesses in 2025.",
      category: "Events"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8faf5]">
      <div className="pt-20 px-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#050706] mb-8 font-poppins text-center">News Flash</h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Stay updated with the latest news, announcements, and insights from Lawyal Tech®.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[#D2DE26] bg-[#D2DE26] bg-opacity-20 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#050706] mb-3 font-poppins">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.excerpt}</p>
                <button className="mt-4 text-[#D2DE26] font-medium hover:text-[#b8c922] transition-colors duration-300">
                  Read More →
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-[#050706] mb-6 font-poppins">Stay Connected</h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to our newsletter to receive the latest updates and insights directly in your inbox.
            </p>
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full px-6 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4d7cea] focus:border-transparent"
              />
              <button className="bg-[#D2DE26] text-[#050706] px-8 py-3 mt-5 rounded-lg font-semibold hover:bg-[#b8c922] transition-colors duration-300 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsFlash; 