import Experience from "../../Experience/Experience";
import "./FrontendExperience.css";
export default function FrontendExperience() {
  return (
    <div className="frontend-experience">
      <h1>Frontend Development</h1>
      <div className="front-exp-container">
        <Experience name="HTML" level="Advanced" image="html-icon.png" />
        <Experience name="CSS" level="Advanced" image="css-icon.png" />
        <Experience name="React" level="Advanced" image="react-icon.png" />
      </div>
    </div>
  );
}
