import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhoneSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <h1>CONTACT ME</h1>
      <div
        className="container social-con"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        id="contact"
      >
        <div className="social">
          <a
            href="https://www.linkedin.com/in/nupur-singh-165b39251/"
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/nupur-singh-165b39251/"
            target="_blank"
            className="items"
          >
            <FaFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/nupur-singh-165b39251/"
            target="_blank"
            className="items"
          >
            <FaLinkedin className="icons" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/nupur-singh-165b39251/"
            target="_blank"
            className="items"
          >
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/nupur1404"
            target="_blank"
            className="items"
          >
            <FaGithub className="icons" />
          </a>
          <a
            href="mailto:singhnupur1404@gmail.com"
            target="_blank"
            className="items"
          >
            <CgMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
