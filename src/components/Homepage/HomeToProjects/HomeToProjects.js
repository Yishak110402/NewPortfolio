import { useEffect, useRef, useState } from "react"
import "./HomeToProjects.css"
import { useNavigate } from "react-router-dom"
export default function HomeToProjects(){
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const homeToProjectsRef = useRef()
    useEffect(function(){
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                setVisible(true)
            }
        },{
            threshold:[0.9, 1]
        })
        observer.observe(homeToProjectsRef.current)
    },[])
    return(
        <div ref={homeToProjectsRef} className={visible ? "home-to-projects visible" : "home-to-projects"}>
            <div className="shade" />
            <h1>Check Out The Projects I've Worked On</h1>
            <button onClick={()=>navigate("/projects")}>See My Projects</button>
        </div>
    )
}