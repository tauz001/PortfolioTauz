import React from "react"

const SkillsItem = ({skill}) => {
  return (
    <div className="skill-category glass animate-fade-in">
      <h3 className="text-purple">{skill.title}</h3>
      <div className="skills">
        {skill.skills.map((skill, idx) => (
          <span key={idx}>{skill}</span>
        ))}
      </div>{" "}
    </div>
  )
}

export default SkillsItem
