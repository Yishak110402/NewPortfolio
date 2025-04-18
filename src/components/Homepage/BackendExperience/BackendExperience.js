import { useEffect, useRef, useState } from "react";
import Experience from "../../Experience/Experience";
import "./BackendExperience.css";

export default function BackendExperience() {
  const h1Ref = useRef();
  const [hVisible, setHVisible] = useState(false);

  useEffect(function () {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setHVisible(true);
      }
    });
    observer.observe(h1Ref.current);
  }, []);
  return (
    <div className="backend-experience">
      <h1 className={hVisible ? "visible" : ""} ref={h1Ref}>
        Backend Development
      </h1>
      <div className="back-exp-container">
        <Experience name="Node JS" level="Advanced" image="node-icon.png" />
        <Experience name="Express" level="Advanced" image="express-icon.png" />
        <Experience name="MongoDB" level="Advanced" image="mongodb-icon.png" />
      </div>
    </div>
  );
}
