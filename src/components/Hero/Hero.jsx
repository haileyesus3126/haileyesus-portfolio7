import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import useActiveSection from "../../hooks/useActiveSection";
import "./Hero.css";

const navigation = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

const sectionIds = navigation.map((item) => item.id);

function Hero() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="sidebar-hero" id="home">
      <div className="sidebar-hero-inner">
        <header className="sidebar-hero-top">
          <p className="sidebar-intro hero-animate-in">
            <span
              className="hero-status-dot"
              aria-hidden="true"
            />
            HELLO, I’M
          </p>

          <h1 className="sidebar-name hero-animate-in">
            Haileyesus
            <span>Mesfin.</span>
          </h1>

          <h2 className="sidebar-tagline hero-animate-in">
            <span className="hero-typed-role">
              Website Developer
            </span>

            <span
              className="hero-typing-cursor"
              aria-hidden="true"
            >
              |
            </span>
          </h2>

          <p className="sidebar-description hero-animate-in">
            I build websites and tools that make daily work easier.
          </p>

          <a
            href="#projects"
            className="hero-project-button hero-animate-in"
          >
            Explore My Work
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </header>

        <nav
          className="sidebar-nav"
          aria-label="Portfolio section navigation"
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={isActive ? "active" : ""}
                aria-current={
                  isActive ? "location" : undefined
                }
              >
                <span
                  className="nav-line"
                  aria-hidden="true"
                />

                <span className="nav-text">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="sidebar-socials">
          <a
            href="https://github.com/haileyesus3126"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My GitHub profile, opens in a new tab"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/haileyesus3126/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My LinkedIn profile, opens in a new tab"
            title="LinkedIn"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>

          <a
            href="mailto:haileyesus2024@gmail.com"
            aria-label="Email Haileyesus"
            title="Email me"
          >
            <FaEnvelope aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;