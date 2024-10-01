import React, { useContext } from "react";
import "./contact-styles.css";
import { RefContext } from "./RefContext";

const Contact = () => {
  const { contactRef } = useContext(RefContext);
  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <h2>Contact Me</h2>
      <div>
        <ul className="contact-list">
          <li>
            email:{" "}
            <a href="mailto:sandhyamadhuri789@gmail.com">
              sandhyamadhuri789@gmail.com
            </a>
          </li>
          <li>
            phone number: <a href="tel:+919390556936">+919390556936</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
