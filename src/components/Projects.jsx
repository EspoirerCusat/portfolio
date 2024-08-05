import React from "react";
import project from "./data/projects.json";
import "./Projects.css"; // Make sure to create and import this CSS file

const Projects = () => {
  return (
    <div className="container projects my-5" id="projects">
      <h1 className="text-center mb-5">PROJECTS</h1>
      <div className="row g-4">
        {project.map((data) => (
          <div className="col-md-6 col-lg-4" key={data.key}>
            <div
              className="card bg-dark text-light text-center project-section"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <img
                src={data.imageSrc}
                className="card-img-top"
                alt={data.title}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  border: "1px solid yellow",
                  borderRadius: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a
                  href={data.source}
                  className="btn btn-primary mx-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href={data.demo}
                  className="btn btn-warning mx-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
