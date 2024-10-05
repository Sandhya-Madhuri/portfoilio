import React from "react";
import "./Skills.css";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-name">
        {skill}
        <span className="percentage">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div className="filled" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

// Skills Component
const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
    { name: "React", percentage: 70 },
    { name: "Angular", percentage: 65 },
  ];

  return (
    <div className="skills-container">
      <h4>Skills</h4>
      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          skill={skill.name}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
};

export default Skills;
