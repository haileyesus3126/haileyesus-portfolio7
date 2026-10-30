
import { useEffect, useState } from "react";

import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaTerminal,
  FaCircleCheck,
} from "react-icons/fa6";

import useActiveSection from "../../hooks/useActiveSection";
import "./Hero.css";

const navigation = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

const roles = [
  "Web Developer",
  "React Developer",
  "Problem Solver",
];

function Hero() {
  const activeSection = useActiveSection(
    navigation.map((item) => item.id)
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated typing effect for developer roles
  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = isDeleting ? 45 : 95;

    if (!isDeleting && typedRole === currentRole) {
      delay = 1800;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (typedRole === currentRole) {
          setIsDeleting(true);
        } else {
          setTypedRole(currentRole.slice(0, typedRole.length + 1));
        }
      } else if (typedRole.length === 0) {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setTypedRole(typedRole.slice(0, -1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <div className="sidebar-hero" id="home">
      <div className="sidebar-hero-inner">

        {/* Animated introduction */}
        <header className="sidebar-hero-top">
          <p className="sidebar-intro hero-animate-in">
            <span className="hero-status-dot" />
            HELLO, I'M
          </p>

          <h1 className="sidebar-name hero-animate-in">
            Haileyesus
            <span>Mesfin.</span>
          </h1>

          {/* Animated developer role */}
          <h2 className="sidebar-tagline hero-animate-in">
            <span className="hero-typed-role">
              {typedRole}
              <span
                className="hero-typing-cursor"
                aria-hidden="true"
              >
                |
              </span>
            </span>
          </h2>

          <p className="sidebar-description hero-animate-in">
            Turning ideas and business challenges into
            practical web applications.
          </p>

          {/* Animated developer terminal */}
         <div className="hero-terminal">
            <div className="hero-terminal-header">
              <div className="hero-terminal-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="hero-terminal-title">
                <FaTerminal aria-hidden="true" />
                developer.js
              </span>
            </div>

            <div className="hero-terminal-body">
              <div>
                <span className="hero-code-keyword">const</span>
                {" developer = {"}
              </div>

              <div>
                {"  "}
                <span className="hero-code-property">name</span>
                {": "}
                <span className="hero-code-string">
                  "Haileyesus"
                </span>
                {","}
              </div>

              <div>
                {"  "}
                <span className="hero-code-property">skills</span>
                {": ["}
                <span className="hero-code-string">
                  "React", "Next.js", "Node.js"
                </span>
                {"],"}
              </div>

              <div>
                {"  "}
                <span className="hero-code-property">goal</span>
                {": "}
                <span className="hero-code-string">
                  "Build useful solutions"
                </span>
              </div>

              <div>{"};"}</div>
            </div>

            <div className="hero-terminal-status">
             <FaCircleCheck aria-hidden="true" />
              <span>Ready to build</span>
            </div>
          </div>

          <a
            href="#projects"
            className="hero-project-button hero-animate-in"
          >
            Explore My Work
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </header>

        {/* Section navigation */}
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

        {/* Social links */}
        <div className="sidebar-socials">
          <a
            href="https://github.com/haileyesus3126"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" />
          </a>

          <a
            href="mailto:haileyesus2024@gmail.com"
            aria-label="Send an email"
            title="Email me"
          >
            <span className="hero-email-icon">@</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
