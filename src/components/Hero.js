import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">
        <span className="title-line-1">SOFTWARE</span>
        <span className="title-line-2">DEVELOPER</span>
      </h1>
      <p className="hero-description">
        Passionate about creating intuitive and engaging developer experiences. 
        Specialize in transforming ideas into beautifully crafted products at scale.
      </p>
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-number">+6</div>
          <div className="stat-label">Years of Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">+10</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">+5</div>
          <div className="stat-label">Companies Worked</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
