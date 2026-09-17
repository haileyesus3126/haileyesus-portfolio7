import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Hero.css";

function Hero() {
  return (
    <div className="sidebar-hero" id="home">
      <div className="sidebar-hero-top">
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
      </div>

      <nav className="sidebar-nav" aria-label="Section navigation">
        <a href="#about">
          <span className="nav-line"></span>
          <span className="nav-text">ABOUT</span>
        </a>

        <a href="#experience">
          <span className="nav-line"></span>
          <span className="nav-text">EXPERIENCE</span>
        </a>

        <a href="#projects">
          <span className="nav-line"></span>
          <span className="nav-text">PROJECTS</span>
        </a>

        <a href="#contact">
          <span className="nav-line"></span>
          <span className="nav-text">CONTACT</span>
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