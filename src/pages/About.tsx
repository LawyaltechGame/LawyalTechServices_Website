import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF5]">
      <div className="pt-20 px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#111] mb-8 font-poppins">About Us</h1>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#111] mb-4 font-poppins">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Lawyal Tech® is a leading technology services company dedicated to providing innovative 
              solutions for businesses worldwide. With years of experience and a team of skilled professionals, 
              we help organizations transform their digital presence and achieve their technological goals.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#111] mb-4 font-poppins mt-8">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To deliver cutting-edge technology solutions that empower businesses to thrive in the digital age, 
              while maintaining the highest standards of quality, innovation, and customer satisfaction.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#111] mb-4 font-poppins mt-8">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To be the trusted technology partner for businesses seeking innovative, reliable, and scalable 
              solutions that drive growth and success in an ever-evolving digital landscape.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#111] mb-4 font-poppins mt-8">Our Values</h2>
            <ul className="text-lg text-gray-700 mb-6 leading-relaxed list-disc pl-6">
              <li className="mb-2">Innovation and Excellence</li>
              <li className="mb-2">Customer-Centric Approach</li>
              <li className="mb-2">Integrity and Transparency</li>
              <li className="mb-2">Continuous Learning and Growth</li>
              <li className="mb-2">Collaboration and Teamwork</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About; 