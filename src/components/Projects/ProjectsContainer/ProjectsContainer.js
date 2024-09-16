import { useContext } from "react";
import "./ProjectsContainer.css";
import { GeneralContext } from "../../../hooks/GeneralContext";
export default function ProjectsContainer() {
  const { projects } = useContext(GeneralContext);
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="project">
          <div className="project-image">
            <img src={project.img} alt="" />
          </div>
          <div className="project-details">
            <h1>{project.name}</h1>
            {project.details.map((detail) => (
              <p>{detail}</p>
            ))}
            <a target="_blank" rel="noreferrer" href={project.link}>
              Visit Site
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
