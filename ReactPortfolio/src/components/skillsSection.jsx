// import React from "react"

import SkillsItem from "./skillsItem"

const SkillsSection = ({skillCategories}) => {
  return (
    <section id="skills" className="section-container">
      <h2 className ="section-title">My Skills</h2>

      <div className="skills-grid" id="skills-container">
        {skillCategories.map((skill, index) => (
          <SkillsItem key={skill.id || index} skill={skill} />
        ))}
        {/* <!-- Skill categories will be added dynamically with JavaScript --> */}
      </div>
    </section>
  )
}

export default SkillsSection
