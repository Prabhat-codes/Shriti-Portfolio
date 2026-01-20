import React, { useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Awards from './components/Awards';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <div className="app-container">
        <div className="left-section">
          <ProfileCard />
        </div>
        <div className="right-section">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Leadership />
          <Awards />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

