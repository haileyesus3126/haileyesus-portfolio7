import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Hero.css";

function Hero() {
  return (
    <div className="sidebar-hero" id="home">
      <p className="sidebar-intro">
        Hi, my name is
      </p>

      <h1 className="sidebar-name">
        Haileyesus Mesfin.
      </h1>

      <h2 className="sidebar-tagline">
        I build practical software for real problems.
      </h2>

      <p className="sidebar-description">
        I'm a Junior Software Developer and Website Developer focused on
        building web applications, internal business tools, and automation
        solutions.
      </p>

      <nav className="sidebar-nav">
        <a href="#about">
          <span></span>
          About
        </a>

        <a href="#experience">
          <span></span>
          Experience
        </a>

        <a href="#projects">
          <span></span>
          Projects
        </a>

        <a href="#contact">
          <span></span>
          Contact
        </a>
      </nav>

      <div className="sidebar-socials">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}

export default Hero;