import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';




const App = () => {
  return (
    <div className='bg-white'>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Services />
    <Contact />
    <Footer />
    <BackToTopBtn />
    </div>
  );
};

export default App;
