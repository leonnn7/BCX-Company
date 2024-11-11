import React from 'react';
import { Monitor, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-navy-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span className="block">Professional IT Services</span>
          <span className="block text-blue-400">for Your Business</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Expert PC support, maintenance, and solutions tailored to your needs
        </p>
        
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <Monitor className="h-12 w-12 text-blue-400" />
            <h3 className="mt-4 text-xl font-medium text-white">Expert Support</h3>
            <p className="mt-2 text-gray-300">Professional IT solutions for all your needs</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 text-blue-400" />
            <h3 className="mt-4 text-xl font-medium text-white">Data Security</h3>
            <p className="mt-2 text-gray-300">Your data safety is our top priority</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-12 w-12 text-blue-400" />
            <h3 className="mt-4 text-xl font-medium text-white">Quick Response</h3>
            <p className="mt-2 text-gray-300">Fast and reliable service when you need it</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;