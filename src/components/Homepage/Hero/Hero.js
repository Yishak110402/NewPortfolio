import { useNavigate } from "react-router-dom";
import "./Hero.css";
export default function Hero() {
  const navigate = useNavigate()
  return (
    <div className="hero">
      <div className="hero-txt">
        <h3>Hey, there</h3>
        <h1>I'm Yishak Hailu</h1>
        <h4>Full Stack Developer</h4>
        <div className="hero-links">
          <a
            href="https://www.linkedin.com/in/yishak-hailu"
            target="_blank"
            rel="noreferrer">
            <img src="./assets/Linked-in-icon.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/_y.i.s.h.a.k_"
            target="_blank"
            rel="noreferrer">
            <img src="./assets/Instagram-icon.png" alt="" />
          </a>
          <a href="https://t.me/iamyishakg" target="_blank" rel="noreferrer">
            <img src="./assets/Telegram-icon.png" alt="" />
          </a>
        </div>
        <div className="hero-ctas">
          <button onClick={()=>navigate("/contact")}>HIRE ME</button>
          <button onClick={()=>navigate("/projects")}>MY PROJECTS</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://i.postimg.cc/dVWjnj5R/20240420-163742.jpg" alt="" />
      </div>
    </div>
  );
}
