import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills my-3" id="skills">
        <h1>SKILLS</h1>
        <div className="items p-3">
          {skills.map((data) => (
            <>
              <div
                className="text-center item"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img
                  src={`/assets/${data.imageSrc}`}
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                />
                <h4>{data.title}</h4>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
