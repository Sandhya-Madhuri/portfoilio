import React, { useContext } from "react";
import { RefContext } from "./RefContext";
import "./projects.css";
import "./project.css";

import Project from "./Project";
const Projects = () => {
  const { projectRef } = useContext(RefContext);
  const academicProjects = [];

  const professionalProjects = [
    {
      title: "DMP Module Development",
      type: "professional",
      description:
        "This project focused on creating a module that enabled consumers to purchase datasets directly from providers. I have played a key role in developing this feature, which streamlined the data acquisition process and enhanced user convenience.",
      // Add more details about the project here
    },
    {
      title: "Platform Performance Optimization",
      type: "professional",
      description:
        "This project aimed to improve the overall performance of the IUDX platform. I have implemented optimization techniques like memoization and lazy loading, resulting in reduced load times and a better user experience",
    },
    {
      title: "Third-Party Library Integration",
      type: "professional",
      description:
        "This project involved integrating various third-party libraries to expand the platform's capabilities. I hav successfully integrated ECharts, Leaflet, Bootstrap, and Razorpay, enabling advanced data visualization, mapping, and payment processing features.",
    },
    {
      title: "Frontend Development and Design",
      type: "professional",
      description:
        "As a frontend developer, I was responsible for developing the user interface of the IUDX platform. This included creating dashboards, navigation, user authentication, and other essential components. I also utilized SCSS for efficient styling and created a comprehensive demo to guide users through the application.",
    },
    // {
    //   title: "Collaboration and Backend Integration",
    //   type: "professional",
    //   description:
    //     "This project involved working closely with backend developers to ensure smooth data flow between the frontend and backend systems. You played a crucial role in optimizing the overall efficiency of the platform by fostering effective collaboration and addressing integration challenges.",
    // },
  ];
  const projects = [
    {
      title: "India Urban Data Exchange",
      type: "professional",
      description: "Developed a comprehensive data exchange platform...",
      // Add more details about the project here
    },
    {
      title: "Power Usage Data Website",
      type: "academic",
      description:
        "Developed a web application to visualize power usage data...",
      // Add more details about the project here
    },
    // Add more projects as needed
  ];

  return (
    <div ref={projectRef} className="projects-container">
      <h2>Professional Projects</h2>
      <ul className="projects-list">
        {professionalProjects
          .filter((project) => project.type === "professional")
          .map((project, index) => (
            <li key={index} className="card">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
            </li>
          ))}
      </ul>
      {/* <Project /> */}
      {/* <h2>Academic Projects</h2>
      <ul>
        {projects
          .filter((project) => project.type === "academic")
          .map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
      </ul> */}

      {/* </div> */}
    </div>
  );
};

export default Projects;
