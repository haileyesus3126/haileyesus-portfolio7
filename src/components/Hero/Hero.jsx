import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import useActiveSection from "../../hooks/useActiveSection";
import "./Hero.css";

function Hero() {
  const navigation = [
    {
      id: "about",
      label: "ABOUT",
    },
    {
      id: "experience",
      label: "EXPERIENCE",
    },
    {
      id: "projects",
      label: "PROJECTS",
    },
    {
      id: "contact",
      label: "CONTACT",
    },
  ];

  const activeSection = useActiveSection(
    navigation.map((item) => item.id)
  );

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
          I'm a Junior Software Developer and Website Developer
          focused on building web applications, internal business
          tools, and automation solutions.
        </p>
      </div>

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
              ></span>

              <span className="nav-text">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>

      <div
        className="sidebar-socials"
        aria-label="Social links"
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Haileyesus Mesfin GitHub profile"
        >
          <FaGithub aria-hidden="true" />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Haileyesus Mesfin LinkedIn profile"
        >
          <FaLinkedinIn aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default Hero;