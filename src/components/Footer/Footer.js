import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="links-container">
        <div className="logo">Yishak.</div>
        <div className="useful-links links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="social-links links">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="/">Linkedin</a>
            </li>
            <li>
              <a href="/">Telegram</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="send-msg">
        <form>
          <h3>Send me a message</h3>
          <div>
            <label>Email*</label>
            <input type="email" required />
          </div>
          <div>
            <label>Message*</label>
            <textarea required />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
}
