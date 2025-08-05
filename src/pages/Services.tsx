import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "Node.js/Express", "Database Design", "API Development"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      features: ["AWS/Azure/GCP", "DevOps", "CI/CD", "Containerization"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates engaging digital experiences.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business.",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting to help your business thrive.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Technology Audits"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#c3d0ff]">
      <div className="pt-20 px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#111] mb-8 font-poppins text-center">Our Services</h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business grow and succeed in the digital world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#111] mb-4 font-poppins">{service.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-[#B9CEFF] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-[#111] mb-6 font-poppins">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <button className="bg-[#B9CEFF] text-[#111] px-8 py-3 rounded-lg font-semibold hover:bg-[#A8BDFF] transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services; 