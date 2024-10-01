import React, { useContext } from "react";
import "./contact-styles.css";
import { RefContext } from "./RefContext";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const { contactRef } = useContext(RefContext);
  return (
    <footer id="contact" className="contact-section" ref={contactRef}>
      <h2 className="contact-text">Contact Me</h2>
      <div>
        <ul className="contact-list">
          <li>
            {/* email:{" "} */}
            <a href="mailto:sandhyamadhuri789@gmail.com">
              <MdOutlineEmail size={20} />
              <span>sandhyamadhuri789@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="tel:+919390556936">
              <IoIosPhonePortrait size={20} />
              <span>+919390556936</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sandhya-madhuri-b54864111/">
              <FaLinkedin size={20} />
              <span>SandhyaMadhuri</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
