import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-txt">
        <h3>Hey, there</h3>
        <h1>I'm Yishak Hailu</h1>
        <h4>Full Stack Developer</h4>
        <div className="hero-links">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <img src="./assets/Linked-in-icon.png" alt="" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <img src="./assets/Instagram-icon.png" alt="" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <img src="./assets/Telegram-icon.png" alt="" />
          </a>
        </div>
        <div className="hero-ctas">
            <button>HIRE ME</button>
            <button>MY PROJECTS</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="./assets/hero-image.png" alt="" />
      </div>
    </div>
  );
}
