// SkillsSection.jsx
import React from 'react';
import { FaReact, FaBootstrap, FaCode, FaPython, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const SkillsSection = () => {
  const skills = [
    { name: 'C++', category: 'Programming Languages', icon: <FaCode /> },
    { name: 'Python', category: 'Programming Languages', icon: <FaPython /> },
    { name: 'HTML', category: 'Web Technologies', icon: <FaHtml5 /> },
    { name: 'CSS', category: 'Web Technologies', icon: <FaCss3Alt /> },
    { name: 'JavaScript', category: 'Web Technologies', icon: <FaCode /> },
    { name: 'ReactJS', category: 'Web Frameworks/Libraries', icon: <FaReact /> },
    { name: 'Bootstrap', category: 'Web Frameworks/Libraries', icon: <FaBootstrap /> },
    { name: 'MySQL', category: 'Back-end Languages', icon: <FaDatabase /> },
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push({ name: skill.name, icon: skill.icon });
    return acc;
  }, {});

  return (
    <div className="skills main-container">
      <h1>Skills</h1>
      {Object.entries(groupedSkills).map(([category, skillList]) => (
        <div key={category} className="skill-category">
          <h4>{category}</h4>
          <ul>
            {skillList.map(({ name, icon }) => (
              <li key={name}>
                <span className="skill-icon">{icon}</span> {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;