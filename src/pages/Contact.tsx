import { useEffect } from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    const existing = document.querySelector('script[data-opnform="widget"]') as HTMLScriptElement | null;
    const init = () => {
      try {
        (window as any).initEmbed && (window as any).initEmbed('customer-support-and-inquiry-form-cym1tl');
      } catch {}
    };
    if (!existing) {
      const s = document.createElement('script');
      s.src = 'https://opnform.com/widgets/iframe.min.js';
      s.async = true;
      s.dataset.opnform = 'widget';
      s.onload = init;
      document.body.appendChild(s);
    } else {
      init();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAF5]">
      <div className="pt-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111] mb-4 md:mb-8 font-poppins text-center">Contact Us</h1>
          <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with us today and let's discuss how we can help bring your vision to life.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form (OpnForm Embed) */}
            {/* <div className="bg-white rounded-lg p-0 shadow-lg overflow-hidden">
              <iframe
                id="customer-support-and-inquiry-form-cym1tl"
                src="https://opnform.com/forms/customer-support-and-inquiry-form-cym1tl"
                style={{ border: 'none', width: '100%', height: '0', minHeight: '800px', display: 'block' }}
                title="Send Us a Message"
              />
            </div> */}
            
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-4 md:mb-6 font-poppins">Get in Touch</h2>
                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#B9CEFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#111]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111]">Email</h3>
                      <p className="text-gray-700">reach@lawyaltech.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#B9CEFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#111]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111]">Phone</h3>
                      <p className="text-gray-700">+46 764428529</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#B9CEFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#111]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111]">Office</h3>
                      <p className="text-gray-700">Robert Anbergs väg 19, Södertälje, 151 51, Sweden</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-[#111] mb-4 md:mb-6 font-poppins">Business Hours</h2>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 text-sm md:text-base py-1 border-b border-gray-100">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-semibold text-[#111]">9:00 AM - 5:00 PM CET</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 text-sm md:text-base py-1 border-b border-gray-100">
                    <span className="text-gray-700">Saturday & Sunday</span>
                    <span className="font-semibold text-[#111]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 