import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';




const App = () => {
  return (
    <div className='bg-white relative'>
    <Header />
    <Hero />
    <div style={{height: '2000px'}}></div>
    </div>
  );
};

export default App;
