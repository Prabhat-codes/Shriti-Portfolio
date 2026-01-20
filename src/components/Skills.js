import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      items: ['Java', 'SQL', 'JavaScript', 'Python']
    },
    {
      title: 'Cloud & DevOps',
      items: ['Azure', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD']
    },
    {
      title: 'Product & Process',
      items: ['Stakeholder Management', 'Agile', 'Product Strategy', 'A/B Testing']
    },
    {
      title: 'Open Source',
      items: ['Chromium', 'CNCF', 'Layer5', 'Community Building']
    },
    {
      title: 'Tools',
      items: ['Figma', 'Git', 'Azure DevOps', 'Technical Documentation']
    }
  ];

  const tools = [
    { name: 'Framer', description: 'Website Builder', icon: 'F' },
    { name: 'Figma', description: 'Design Tool', icon: 'F' },
    { name: 'Azure', description: 'Cloud Platform', icon: 'A' },
    { name: 'Docker', description: 'Containerization', icon: 'D' },
    { name: 'Kubernetes', description: 'Orchestration', icon: 'K' },
    { name: 'Git', description: 'Version Control', icon: 'G' }
  ];

  return (
    <section className="skills">
      <h2 className="section-title">
        <span className="title-primary">SKILLS</span>
      </h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="category-items">
              {category.items.map((item, itemIndex) => (
                <span key={itemIndex} className="skill-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tools-section">
        <h3 className="tools-title">Premium Tools</h3>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">{tool.icon}</div>
              <div className="tool-info">
                <div className="tool-name">{tool.name}</div>
                <div className="tool-description">{tool.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
