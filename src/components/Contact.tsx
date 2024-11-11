import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="bg-navy-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Get in touch with our team
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-300">
                    <a href="mailto:info@bcx.lol" className="hover:text-blue-400">
                      info@bcx.lol
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-300">
                    <a href="tel:0765375020" className="hover:text-blue-400">
                      076 537 50 20
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">Address</h3>
                  <p className="mt-1 text-gray-300">
                    Niederwil 15<br />
                    6221 Rickenbach<br />
                    Switzerland
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md bg-navy-900 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md bg-navy-900 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md bg-navy-900 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;