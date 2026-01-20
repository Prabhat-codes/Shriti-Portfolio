import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <h2 className="section-title">
        <span className="title-primary">EDUCATION</span>
      </h2>
      
      <div className="education-list">
        <div className="education-item">
          <div className="education-header">
            <div className="education-school">Manipal Institute of Technology</div>
            <div className="education-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>
          <div className="education-degree">B.Tech — Electrical, Electronics & Communication Engineering</div>
          <div className="education-period">Jul 2019 – Aug 2023 | CGPA: 8.25 / 10</div>
          <div className="education-highlights">
            <div className="highlight-badge">PPO: Microsoft, Adobe, Red Hat</div>
            <div className="highlight-badge">Adobe Women in Tech — Top 5 nationally</div>
            <div className="highlight-badge">Microsoft Engage Hackathon — Top 1% nationally</div>
            <div className="highlight-badge">Minor in Data Science</div>
          </div>
        </div>

        <div className="education-item">
          <div className="education-header">
            <div className="education-school">Notre Dame Academy</div>
            <div className="education-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </div>
          </div>
          <div className="education-degree">High School Diploma</div>
          <div className="education-period">CGPA: 10 / 10</div>
          <div className="education-highlights">
            <div className="highlight-badge">National Rank 20 — Cyber Security Olympiad</div>
            <div className="highlight-badge">International Rank 17 — English Olympiad</div>
            <div className="highlight-badge">Debate, Public Speaking & Essay Champion</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
