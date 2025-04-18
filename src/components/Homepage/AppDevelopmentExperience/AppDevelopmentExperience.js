import { useEffect, useRef, useState } from "react"
import Experience from "../../Experience/Experience"
import "./AppDevelopmentExperience.css"

export default function AppDevelopmentExperience(){
    const [hVisible, setHVisible] = useState(false)
    const hRef = useRef()
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setHVisible(true)
            }
        })
        observer.observe(hRef.current)
    })
    return(
        <div className="app-experience">
            <h1 className={hVisible ? "visible" : ""} ref={hRef}>App Development Experience</h1>
            <div className="app-exp-container">
                <Experience name="React Native" level="Intermediate"  image="react-native-logo.png"/>
            </div>

        </div>
    )
}