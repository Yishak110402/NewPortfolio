import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { GeneralContext } from "../../hooks/GeneralContext";
export default function Navbar() {
    const {navOpen, setNavOpen} = useContext(GeneralContext)
  return (
    <nav className="navbar">
      <div onClick={()=>(setNavOpen(!navOpen))} className="hamburger-icon">
        <svg style={{fill: !navOpen ? "#312e3c" : "#cbbc99"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div className="logo">Yishak.</div>
      <div className={navOpen ? "nav-links open" : "nav-links"}>
        <NavLink onClick={()=>(setNavOpen(false))} to="/">Home</NavLink>
        <NavLink onClick={()=>(setNavOpen(false))} to="/projects">Projects</NavLink>
        <NavLink onClick={()=>(setNavOpen(false))} to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
