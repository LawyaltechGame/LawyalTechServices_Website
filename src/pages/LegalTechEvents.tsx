import { Link } from 'react-router-dom';

const events = [
  {
    title: 'AI in Law: Transforming Legal Practice',
    date: 'March 15, 2024',
    location: 'New York, NY',
    description: 'A deep dive into how artificial intelligence is revolutionizing legal research, document review, and client services.'
  },
  {
    title: 'Blockchain & Smart Contracts Summit',
    date: 'April 10, 2024',
    location: 'San Francisco, CA',
    description: 'Explore the impact of blockchain technology and smart contracts on legal transactions and compliance.'
  },
  {
    title: 'LegalTech Future Forum',
    date: 'May 5, 2024',
    location: 'London, UK',
    description: 'Insightful sessions on the latest legal technology trends, featuring global thought leaders and innovators.'
  },
  {
    title: 'Cybersecurity for Law Firms',
    date: 'June 2, 2024',
    location: 'Virtual Event',
    description: 'Best practices and tools for protecting sensitive legal data in a digital-first world.'
  },
  {
    title: 'Women in Legal Tech Conference',
    date: 'July 18, 2024',
    location: 'Chicago, IL',
    description: 'Celebrating and empowering women leaders driving change in legal technology.'
  }
];

const LegalTechEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#B9CEFF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Legal Tech Events & Conferences
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Insightful sessions that spotlight the future of legal technology
            </p>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to stay updated on the latest in legal tech?</p>
          <Link
            to="/contact"
            className="inline-block bg-[#B9CEFF] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#A8C0F0] transition-colors duration-300"
          >
            Contact Us for More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegalTechEvents;