import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;