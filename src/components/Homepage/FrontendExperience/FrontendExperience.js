import { useEffect } from "react";
import Experience from "../../Experience/Experience";
import "./FrontendExperience.css";
import { useRef } from "react";
import { useState } from "react";
export default function FrontendExperience() {
  const h1Ref = useRef()
  
  const [h1Visible, setH1Visible] = useState(false)
  
  useEffect(function(){
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
      if(entry.isIntersecting){
        setH1Visible(true)
      }
    },{
      threshold:[0.9, 1]
    })
    observer.observe(h1Ref.current)
  },[])
 
  return (
    <div className="frontend-experience">
      <h1 className={h1Visible ? "visible" : ""} ref={h1Ref}>Frontend Development</h1>
      <div className="front-exp-container">
        <Experience name="HTML" level="Advanced" image="html-icon.png" />
        <Experience name="CSS" level="Advanced" image="css-icon.png" />
        <Experience name="React" level="Advanced" image="react-icon.png" />
      </div>
    </div>
  );
}
