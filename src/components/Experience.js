import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Microsoft',
      role: 'Software Developer',
      period: 'Jul 2023 – Sep 2025',
      location: 'Hyderabad, India',
      description: 'Part of the Microsoft Edge Browser team, working on networking, infrastructure, and developer extension workflows. Contributor to the Google Chromium open-source project. Worked with Azure DevOps on test case management in large-scale data pipelines and code coverage analysis.',
      skills: ['Networking', 'Infra Engineering', 'Azure DevOps', 'Stakeholder Management', 'SQL']
    },
    {
      company: 'Red Hat',
      role: 'Product Development Intern',
      period: 'Jan 2023 – Jul 2023',
      location: 'Bengaluru, India',
      description: 'Built a cost-efficient pipeline for commercial OpenJDK builds, reducing deployment time by 2× (to under 6 hours). Rewrote and adopted data protocols for OpenJDK binaries to comply with SSDF mandates under US open-source governance laws.',
      skills: ['OpenJDK', 'DevOps', 'Data Governance', 'Process Optimization']
    },
    {
      company: 'Microsoft',
      role: 'Software Developer Intern',
      period: 'Jun 2022 – Jul 2022',
      location: 'Hyderabad, India',
      description: 'Developed a one-step WordPress migration PoC from external servers to Azure Web Apps. Automated a previously manual, documentation-driven process, resulting in a 40% increase in customer engagement for legacy WordPress migrations.',
      skills: ['Azure', 'SQL', 'Load Testing', 'Experimentation']
    },
    {
      company: 'Layer5',
      role: "Founders' Office Intern",
      period: 'Jul 2020 – Jan 2021',
      location: 'Remote',
      description: 'First Community Manager at Layer5 (open-source cloud-native company). Managed a 5,000+ developer community across 10+ projects and channels. Onboarded 100+ contributors and coordinated 10+ project timelines with a 100% success rate.',
      skills: ['Community Building', 'Open Source', 'Product Evangelism']
    },
    {
      company: 'CNCF',
      role: 'Google Season of Docs Fellow',
      period: 'Aug 2020 – Nov 2020',
      location: 'Remote',
      description: 'Selected as a Google SOD Fellow (1 of 35 projects selected globally). Built interactive sandbox tutorials using Docker-enabled Linux environments. Enabled real-time benchmarking of service mesh architectures via Meshery.',
      skills: ['Docker', 'Cloud Native', 'Technical Documentation', 'Developer Education']
    }
  ];

  return (
    <section className="experience">
      <h2 className="section-title">
        <span className="title-primary">EXPERIENCE</span>
      </h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-company">{exp.company}</div>
              <div className="experience-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </div>
            <div className="experience-role">{exp.role}</div>
            <div className="experience-period">{exp.period} | {exp.location}</div>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-skills">
              {exp.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
