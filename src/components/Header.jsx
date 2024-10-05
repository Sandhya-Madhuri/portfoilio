import React, { useContext } from "react";
import "./Header.css";
import { RefContext } from "./RefContext";

function Header() {
  const { homeRef, projectRef, aboutRef, servicesRef } = useContext(RefContext);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="header fixed-header">
      <div className="logo">
        {/* <h1>DevFolio</h1> */}
        <img src="assets/sm-logo.jpg" alt="logo" width={"50px"} />
      </div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <a href="#home" onClick={() => scrollToSection(homeRef)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection(aboutRef)}>
              About
            </a>
          </li>
          {/* <li>
            <a href="#services" onClick={() => scrollToSection(servicesRef)}>
              Services
            </a>
          </li> */}
          <li>
            <a href="#projects" onClick={() => scrollToSection(projectRef)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection(contactRef)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
