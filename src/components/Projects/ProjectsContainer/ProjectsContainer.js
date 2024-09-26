import { useContext, useEffect, useRef, useState } from "react";
import "./ProjectsContainer.css";
import { GeneralContext } from "../../../hooks/GeneralContext";
export default function ProjectsContainer() {
  const { projects } = useContext(GeneralContext);
  const [visible, setVisible] = useState(false);
  const projectRef = useRef();
  useEffect(function () {
    const observer = new IntersectionObserver(
      function (entries) {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: [0, 1],
      }
    );
    observer.observe(projectRef.current);
  }, []);
  return (
    <div className={`projects-container`}>
      {projects.map((project) => (
        <div ref={projectRef} className={`project ${visible ? "visible" : ""}`}>
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
