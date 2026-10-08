
import {
  FaGithub,
  FaLinkedinIn,
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

function Hero() {
  const activeSection = useActiveSection(
    navigation.map((item) => item.id)
  );

  return (
    <div className="sidebar-hero" id="home">
      <div className="sidebar-hero-inner">

        {/* Introduction */}
        <header className="sidebar-hero-top">
          <p className="sidebar-intro">
            Hi, my name is
            <span className="intro-cursor" aria-hidden="true" />
          </p>

          <h1 className="sidebar-name">
            Haileyesus
            <span>Mesfin.</span>
          </h1>

          <h2 className="sidebar-tagline">
            I build software that
            <span> solves real problems.</span>
          </h2>

          <p className="sidebar-description">
            I'm a self-taught Software Developer
            based in Addis Ababa, Ethiopia,
            with experience in business automation,
            internal web applications, and
            full-stack development projects.
          </p>

          <a
            href="#projects"
            className="hero-project-button"
          >
            Explore My Work
            <FaArrowUpRightFromSquare
              aria-hidden="true"
            />
          </a>
        </header>

        {/* Section navigation */}
        <nav
          className="sidebar-nav"
          aria-label="Portfolio section navigation"
        >
          {navigation.map((item) => {
            const isActive =
              activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={
                  isActive ? "active" : ""
                }
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

        {/* Social links */}
        <div className="sidebar-socials">
          <a
            href="https://github.com/haileyesus-portfolio7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View portfolio source on GitHub"
            title="GitHub portfolio repository"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="mailto:haileyesus2024@gmail.com"
            aria-label="Send an email"
            title="Email me"
          >
            <span className="hero-email-icon">
              @
            </span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Hero;
