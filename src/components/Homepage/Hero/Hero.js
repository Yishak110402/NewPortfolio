import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-txt">
        <h3>Hey, there</h3>
        <h1>I'm Yishak Hailu</h1>
        <h4>Full Stack Developer</h4>
        <div className="hero-links">
          <img src="./assets/Linked-in-icon.png" alt="" />
          <img src="./assets/Instagram-icon.png" alt="" />
          <img src="./assets/Telegram-icon.png" alt="" />
        </div>
      </div>
      <div className="hero-image">
        <img src="./assets/hero-image.png" alt="" />
      </div>
    </div>
  );
}
