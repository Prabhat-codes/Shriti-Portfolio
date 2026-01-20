import React from 'react';
import './Leadership.css';

const Leadership = () => {
  const leadershipRoles = [
    {
      organization: 'Google Developer Student Clubs (MIT Manipal)',
      role: 'Lead',
      period: 'Jul 2021 – Jul 2022',
      description: 'Led campus-wide developer initiatives sponsored by Google. Managed partnerships, events, and technical workshops.'
    },
    {
      organization: 'IEEE Student Branch, MIT Manipal',
      role: 'CS Development Head',
      period: 'May 2022 – May 2023',
      description: 'Headed computer science initiatives and technical programs.'
    },
    {
      organization: 'Google Cloud Facilitator',
      role: 'Campus Representative',
      period: 'Oct 2020',
      description: 'Helped 100+ students complete Google Cloud training programs. Conducted sessions on Linux, Qwiklabs, Docker, Kubernetes. Earned 12 skill badges across Cloud Engineering & ML tracks.'
    },
    {
      organization: 'TechTatva, MIT Manipal',
      role: 'Hackathon Organizer',
      period: 'Volunteer',
      description: 'Designed problem statements and themes. Conducted Git workshops. Managed judging panels and event operations.'
    }
  ];

  return (
    <section className="leadership">
      <h2 className="section-title">
        <span className="title-primary">LEADERSHIP</span>
        <span className="title-secondary">& COMMUNITY</span>
      </h2>
      
      <div className="leadership-list">
        {leadershipRoles.map((role, index) => (
          <div key={index} className="leadership-item">
            <div className="leadership-header">
              <div className="leadership-organization">{role.organization}</div>
              <div className="leadership-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
            <div className="leadership-role">{role.role}</div>
            <div className="leadership-period">{role.period}</div>
            <p className="leadership-description">{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
