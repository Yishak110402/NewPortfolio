import { useEffect, useRef, useState } from "react";
import "./ProjectsHeader.css";
export default function ProjectsHeader() {
  const [visible, setVisible] = useState(false);
  const headerRef = useRef();
  useEffect(function () {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: [0.9, 1],
      }
    );
    observer.observe(headerRef.current);
  }, []);
  return (
    <div
      ref={headerRef}
      className={`projects-header ${visible ? "visible" : ""}`}>
      <h1>Projects</h1>
      <h3>Check out the projects I've worked on</h3>
    </div>
  );
}
