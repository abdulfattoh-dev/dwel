import React, { useState } from 'react'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}

export default App