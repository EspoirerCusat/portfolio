import React from "react";
import pdf from "../pdf/resume.pdf";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
// import heroImg from ''
import hero from "./data/hero.json";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My is name Noopur Singh",
        "I'm Web Developer Full Stack Developer",
      ], // Array of strings to display
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true, // Whether to loop the animation
    };

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      {/* <div data-aos="fade-up" data-aos-duration="1000"> */}
      <div className="main_section p-3" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="resume.pdf"
            className="btn btn-outline-warning btn-lg my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
          <div className="img d-flex justify-content-center align-items-center">
            <img
              // src="https://cdn.pixabay.com/photo/2019/02/19/08/43/milky-way-4006343_1280.jpg"
              // src="https://img.freepik.com/free-photo/3d-rendering-cartoon-like-man-working-computer_23-2150797572.jpg?size=626&ext=jpg&ga=GA1.1.904538521.1701264444&semt=sph"
              src={`/assets/${hero.imgSrc}`}
              // src="/assets/hero/hero.avif"
              alt="alt"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;
