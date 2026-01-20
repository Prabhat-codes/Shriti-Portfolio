import React from 'react';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      title: 'Google Girl Hackathon 2022',
      achievement: 'Second Position',
      details: '5,000+ teams participated'
    },
    {
      title: 'Adobe Women in Tech 2022',
      achievement: 'Top 5 nationally',
      details: 'National recognition'
    },
    {
      title: 'Bajaj Finserv Hackathon 2022',
      achievement: 'Best DevOps Team',
      details: '₹10K prize'
    },
    {
      title: 'Google Season of Docs Fellow 2020',
      achievement: 'CNCF Project',
      details: '1 of 35 projects selected globally'
    }
  ];

  return (
    <section className="awards">
      <h2 className="section-title">
        <span className="title-primary">HONORS</span>
        <span className="title-secondary">& AWARDS</span>
      </h2>
      
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <div className="award-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div className="award-content">
              <h3 className="award-title">{award.title}</h3>
              <div className="award-achievement">{award.achievement}</div>
              <div className="award-details">{award.details}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
