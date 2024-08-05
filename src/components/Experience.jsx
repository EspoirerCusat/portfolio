import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex my-3" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => (
          <div
            className="experience my-5"
            key={data.id}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="img">
              <img src={`/assets/${data.imageSrc}`} alt="img" />
            </div>
            <div className="right text-center">
              <h2>{data.role}</h2>
              <h3 style={{ color: "yellowgreen" }}>
                {data.startDate} {data.endDate}
                {", "}
                <span style={{ color: "yellow" }}>{data.location}</span>
              </h3>
              <div style={{ color: "yellow" }}>
                <h6>{data.experiences[0]}</h6>
                <h6>{data.experiences[1]}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
