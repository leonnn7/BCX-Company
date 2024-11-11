import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-navy-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About BCX
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Your trusted partner for professional IT services in Rickenbach
          </p>
        </div>

        <div className="mt-20">
          <div className="prose prose-lg text-gray-300 max-w-none">
            <p className="mb-4">
              BCX is your local IT service provider, dedicated to delivering professional and reliable computer support services. We understand that technology should make your life easier, not more complicated.
            </p>
            <p className="mb-4">
              Our team of experienced professionals is committed to providing fast, efficient, and comprehensive IT solutions tailored to your specific needs. Whether you need help with PC maintenance, data backup, or system optimization, we're here to help.
            </p>
            <p>
              Located in Rickenbach, we serve local businesses and individuals with a focus on personal service and customer satisfaction. Our goal is to be your long-term IT partner, helping you maintain and improve your technology infrastructure.
            </p>
          </div>

          <div className="mt-10 bg-navy-800/50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-medium">Monday - Friday:</p>
                <p>9:00 - 12:00</p>
                <p>14:00 - 17:00</p>
              </div>
              <div>
                <p className="font-medium">Saturday:</p>
                <p>14:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;