import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { RefContext } from "./RefContext";

const Home = () => {
  const { homeRef } = useContext(RefContext);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const roles = ["Developer", "Engineer", "Coder"]; // You can add more roles
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const isTyping = !isDeleting;

      if (isTyping) {
        setText((prevText) => currentRole.substring(0, prevText.length + 1));
        setTypingSpeed(200); // Typing speed
      } else {
        setText((prevText) => currentRole.substring(0, prevText.length - 1));
        setTypingSpeed(100); // Deleting speed
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause after fully typing
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section className="home-section" ref={homeRef}>
      <div className="home-content">
        <h1>I am Sandhya Madhuri</h1> {/* Replace with your name */}
        <h2 className="role">
          {text}
          <span className="cursor">|</span>
        </h2>
      </div>
    </section>
  );
};

export default Home;
