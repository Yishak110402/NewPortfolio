import { NavLink } from "react-router-dom"
import "./Navbar.css"
export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                Yishak.
            </div>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}