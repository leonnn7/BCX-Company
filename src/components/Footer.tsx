import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-12">
          {['Privacy Policy', 'Terms of Service', 'Imprint'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="text-gray-400 hover:text-gray-300 text-sm"
            >
              {item}
            </a>
          ))}
        </nav>
        <p className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} BCX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;