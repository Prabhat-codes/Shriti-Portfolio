import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2 className="section-title">
        <span className="title-primary">ABOUT</span>
      </h2>
      <div className="about-content">
        <p className="about-text">
          I'm a passionate software developer with experience building developer-focused and 
          customer-centric products at scale. Currently, I work at Microsoft, contributing to 
          infrastructure, networking, and developer tooling for the Edge browser ecosystem.
        </p>
        <p className="about-text">
          Beyond my core engineering role, I've been deeply involved in open source, developer 
          communities, and leadership initiatives. I enjoy working at the intersection of 
          <strong> engineering, product thinking, and community impact</strong>, and I'm always 
          excited to collaborate on meaningful ideas.
        </p>
        <div className="about-highlights">
          <div className="highlight-item">
            <span className="highlight-icon">📍</span>
            <span>Hyderabad, India</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">📧</span>
            <a href="mailto:shritichan@gmail.com">shritichan@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
