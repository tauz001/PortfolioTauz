// import React from "react"
import ProjectItem from "./projectItem"

const ProjectSection = ({projects}) => {
  return (
      <section id="projects" className="section-container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid" id="projects-container">
          {/* <!-- Project cards will be added dynamically with JavaScript --> */}
          {projects.map((project, index) => (
            <ProjectItem key={project.id || index} project={project} />
          ))}
        </div>
      </section>
  )
}

export default ProjectSection
