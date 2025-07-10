import {FaGithub} from "react-icons/fa6"
import {VscLinkExternal} from "react-icons/vsc"
import {Link} from "react-router-dom" // Add this import
import SpotlightCard from '../../reactbit/SpotlightCard/SpotlightCard';

const ProjectItem = ({project}) => {
  // Helper to check if the URL is external
  const isExternal = url => url.startsWith("http://") || url.startsWith("https://")

  return (
    <SpotlightCard className="custom-spotlight-card project-card" spotlightColor="#8b5cf6">
      {/* <div className="project-card animate-fade-in"> */}
        <div className="project-image">
          <img src={project.image} alt={project.title}></img>
          <div className="project-image-overlay">
            {project.githubUrl ? (
              <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="View source code on GitHub">
                <FaGithub />
              </a>
            ) : (
              ""
            )}

            {project.liveUrl ? (
              isExternal(project.liveUrl) ? (
                <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Visit live website">
                  <VscLinkExternal />
                </a>
              ) : (
                <Link to={project.liveUrl} className="project-link" aria-label="Visit live website">
                  <VscLinkExternal />
                </Link>
              )
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags &&
              project.tags.map((tag, idx) => (
                <span className="project-tag" key={idx}>
                  {tag}
                </span>
              ))}
          </div>{" "}
        </div>
      {/* </div> */}
    </SpotlightCard>
  )
}

export default ProjectItem
