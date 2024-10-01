import React, { useContext } from "react";
import "./Header.css";
import { RefContext } from "./RefContext";

function Header() {
  const { homeRef, projectRef, aboutRef, servicesRef } = useContext(RefContext);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="navbar fixed-header">
      <div className="navbar-logo">
        <h1>DevFolio</h1>
      </div>
      <nav>
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
          <li>
            <a href="#services" onClick={() => scrollToSection(servicesRef)}>
              Services
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection(projectRef)}>
              Projects
            </a>
          </li>
          <li className="dropdown">
            <a href="#dropdown">
              Dropdown <span>&#x25BC;</span>
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="#option1">Option 1</a>
              </li>
              <li>
                <a href="#option2">Option 2</a>
              </li>
              <li>
                <a href="#option3">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
