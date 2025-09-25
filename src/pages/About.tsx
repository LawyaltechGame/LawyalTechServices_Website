import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF5]">
      <div className="pt-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111] mb-6 md:mb-8 font-poppins text-center md:text-left">About Us</h1>
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-3 md:mb-4 font-poppins">Who We Are</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Lawyal Tech® is a leading technology services company dedicated to providing innovative 
              solutions for businesses worldwide. With years of experience and a team of skilled professionals, 
              we help organizations transform their digital presence and achieve their technological goals.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-3 md:mb-4 font-poppins mt-6 md:mt-8">Our Mission</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              To deliver cutting-edge technology solutions that empower businesses to thrive in the digital age, 
              while maintaining the highest standards of quality, innovation, and customer satisfaction.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-3 md:mb-4 font-poppins mt-6 md:mt-8">Our Vision</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              To be the trusted technology partner for businesses seeking innovative, reliable, and scalable 
              solutions that drive growth and success in an ever-evolving digital landscape.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-3 md:mb-4 font-poppins mt-6 md:mt-8">Our Values</h2>
            <ul className="text-base md:text-lg text-gray-700 mb-2 md:mb-6 leading-relaxed list-disc pl-5 md:pl-6 space-y-2">
              <li>Innovation and Excellence</li>
              <li>Customer-Centric Approach</li>
              <li>Integrity and Transparency</li>
              <li>Continuous Learning and Growth</li>
              <li>Collaboration and Teamwork</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;  