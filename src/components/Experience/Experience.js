import "./Experience.css"
export default function Experience({name = 'Tech Name', level = "Beginner", image = ""}){
    return(
        <div className="experience">
            <div className="exp-image">
                <img src={`./assets/experience/${image}`} alt=""/>
            </div>
            <div className="exp-info">
                <h2>{name}</h2>
                <h3>{level}</h3>
            </div>
        </div>
    )
}