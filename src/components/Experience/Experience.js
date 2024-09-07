import { useEffect, useRef, useState } from "react";
import "./Experience.css";
export default function Experience({
  name = "Tech Name",
  level = "Beginner",
  image = "",
}) {
  const [expVisible, setExpVisible] = useState(false);
  const expRef = useRef();

  useEffect(function () {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setExpVisible(true);
        }
      },
      {
        threshold: [0.7, 1],
      }
    );
    observer.observe(expRef.current);
  }, []);

  return (
    <div
      ref={expRef}
      className={`experience ${name} ${expVisible ? "visible" : ""}`}>
      <div className="exp-image">
        <img src={`./assets/experience/${image}`} alt="" />
      </div>
      <div className="exp-info">
        <h2>{name}</h2>
        <h3>{level}</h3>
      </div>
    </div>
  );
}
