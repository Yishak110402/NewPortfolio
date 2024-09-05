import Experience from "../../Experience/Experience";
import "./BackendExperience.css"

export default function BackendExperience(){
    return(
        <div className="backend-experience">
            <h1>Backend Development</h1>
            <div className="back-exp-container">
                <Experience name="Node JS" level="Advanced" image="node-icon.png" />
                <Experience name="Express" level="Advanced" image="express-icon.png" />
                <Experience name="MongoDB" level="Advanced" image="mongodb-icon.png" />
                </div>
        </div>
    )
}