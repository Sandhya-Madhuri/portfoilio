import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Data Visualization Dashboard",
      description:
        "Developed an interactive data visualization dashboard using React and ECharts to display real-time data.",
      link: "#",
    },
    {
      title: "Payment Integration",
      description:
        "Integrated Razorpay payment gateway into an Angular-based e-commerce platform.",
      link: "#",
    },
    {
      title: "Website Tour Guide",
      description:
        "Built a comprehensive website tour guide using Intro.js to enhance user experience.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
