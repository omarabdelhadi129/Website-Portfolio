import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
const logo = require("../../assets/logo.png");
const contacting = require("../../assets/contact.png");

const Navbar: React.FC<{}> = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link to="home" className='desktopMenuListItem'>Home</Link>
                <Link to="about" className='desktopMenuListItem'>About</Link>
                <Link to="skills" className='desktopMenuListItem'>Skills</Link>
                <Link to="projects" className='desktopMenuListItem'>Projects</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contacting} alt="" className="desktopMenuImg" />
                Contact Me
            </button>
        </nav>
    );
}

export default Navbar;
