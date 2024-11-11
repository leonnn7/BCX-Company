import React from 'react';
import { HardDrive, Shield, RefreshCw, Download, Terminal, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <HardDrive className="h-8 w-8 text-blue-400" />,
      title: 'PC Support',
      description: 'Comprehensive technical support for all your computer needs'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: 'PC Backups',
      description: 'Secure data backup solutions to protect your valuable information'
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-blue-400" />,
      title: 'PC Reinstallation',
      description: 'Complete system reinstallation and optimization services'
    },
    {
      icon: <Download className="h-8 w-8 text-blue-400" />,
      title: 'Software Installation',
      description: 'Professional software installation and configuration'
    },
    {
      icon: <Terminal className="h-8 w-8 text-blue-400" />,
      title: 'Security Updates',
      description: 'Regular security updates and system maintenance'
    },
    {
      icon: <Database className="h-8 w-8 text-blue-400" />,
      title: 'Data Recovery',
      description: 'Expert data recovery services for lost or corrupted files'
    }
  ];

  return (
    <div id="services" className="bg-navy-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive IT solutions for your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-navy-900/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-navy-800 mx-auto">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-medium text-white text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;