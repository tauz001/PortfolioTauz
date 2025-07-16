// import React from "react"
import CurvedLoop from "../../reactbit/CurvedLoop/CurvedLoop"
import SkillsItem from "./skillsItem"

const SkillsSection = ({skillCategories}) => {
  return (
    <section id="skills" className="section-container-skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-grid" id="skills-container">
        {skillCategories.map((skill, index) => (
          <SkillsItem key={skill.id || index} skill={skill} />
        ))}
        {/* <!-- Skill categories will be added dynamically with JavaScript --> */}
      </div>
      <CurvedLoop marqueeText="Collaborative ✦ Scalable ✦ Optimized ✦ Interactive ✦ Secure ✦" speed={3} curveAmount={100} direction="right" interactive={true} className="custom-text-style" />
    </section>
  )
}

export default SkillsSection
