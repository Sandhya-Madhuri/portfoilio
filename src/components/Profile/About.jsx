import React, { useContext } from "react";
import { RefContext } from "../RefContext";
import "./about.css";
const About = () => {
  return (
    <article id="about" className="about-section">
      <h4 className="about-head">About Me</h4>
      <p>
        I am a dedicated Software Developer with 2 years of experience in
        building scalable and user-friendly single-page web applications. My
        expertise lies in frontend development, where I excel at creating
        responsive designs and ensuring cross-browser compatibility. I am highly
        proficient in JavaScript frameworks like ReactJS and Angular, along with
        a solid foundation in HTML, CSS, and TypeScript.
      </p>
      <p>
        I hold a B.Tech in Electrical Engineering from the prestigious Indian
        Institute of Technology, Hyderabad, and have honed my skills by working
        on complex projects that require seamless integration of multiple
        resource servers and backend services. My contributions to performance
        optimization, particularly in memoization and lazy loading, have
        resulted in significantly reduced load times and an enhanced user
        experience.{" "}
      </p>
      <p>
        I have a keen eye for detail and am passionate about delivering clean,
        efficient code. Additionally, I thrive in Agile/Scrum environments and
        enjoy collaborating with cross-functional teams to achieve high-quality
        software solutions. My experience spans across various libraries and
        tools, such as ECharts, Leaflet, Bootstrap, and Razorpay, which I've
        integrated to deliver powerful and interactive user interfaces.
      </p>
    </article>
  );
};

export default About;
