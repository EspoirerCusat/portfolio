import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="nav_bar container"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="logo nav_links">Portfolio</div>
        <div className="right d-flex justify-content-center align-items-center">
          <a href="#home" className="nav_links">
            Home
          </a>
          {/* <a href="#experience" className="nav_links">
            Experience
          </a> */}
          {/* <div className="nav_links">Education</div> */}
          <a href="#skills" className="nav_links">
            Skills
          </a>
          <a href="#projects" className="nav_links">
            Projects
          </a>
          <a href="#contact" className="nav_links">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
