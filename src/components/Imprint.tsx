import React from 'react';

const Imprint = () => {
  return (
    <div id="imprint" className="pt-20 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl font-extrabold text-white mb-8">Imprint</h1>
        
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Company Information</h2>
            <p className="text-gray-300">
              BCX<br />
              Niederwil 15<br />
              6221 Rickenbach<br />
              Switzerland
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p className="text-gray-300">
              Phone: 076 537 50 20<br />
              Email: info@bcx.lol
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Legal Responsibility</h2>
            <p className="text-gray-300">
              Responsible for content according to § 5 TMG<br />
              BCX Management<br />
              Niederwil 15<br />
              6221 Rickenbach<br />
              Switzerland
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
            <p className="text-gray-300">
              Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Imprint;