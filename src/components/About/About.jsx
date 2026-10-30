
import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import profileImage from "../../assets/images/haileyesus.png";
import "./About.css";

function About() {
  const revealRef = useScrollReveal();
  const [showMore, setShowMore] = useState(false);

  const technologies = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Python",
    "Selenium",
    "Git & GitHub",
    "REST APIs",
  ];

  return (
    <section
      id="about"
      className="section about-section"
      ref={revealRef}
      data-reveal
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="section-heading"
      >
        <span className="section-number">፩.</span>
        About Me
      </h2>

      <div className="about-content">
        <div className="about-text">

          {/* Always visible introduction */}
          <p>
            Hi, I'm Haileyesus, a Web Developer based
            in Addis Ababa, Ethiopia. I hold a
            Bachelor's Degree in Information and
            Communication Technology from the
            University of Gondar.
          </p>

          <p>
            My experience combines web development,
            business data operations, internal
            applications, and workflow automation.
            I enjoy creating practical digital
            solutions that improve everyday
            business processes.
          </p>

          {/* Expandable content */}
          <div
            id="about-more-content"
            className="about-more-content"
            hidden={!showMore}
          >
            <p>
              At Yosal PLC, my work focuses on
              business data processing, operational
              workflows, website-related tasks,
              and identifying opportunities for
              process improvement.
            </p>

            <p>
              I have worked on internal business
              applications, including an Order Issue
              Management System for tracking
              order-related problems and a Rental
              Management System for organizing
              rental information and daily
              business operations. These projects
              were developed using Replit and
              AI-assisted development tools.
            </p>

            <p>
              My web development projects include
              a full-stack Task Management System
              built with React.js, Node.js,
              Express.js, and MongoDB, as well
              as Ruth Store, a responsive
              e-commerce web application.
            </p>

            <p>
              I have also worked with Python
              automation, including a YouTube
              Video Automation workflow for
              processing long-form videos into
              short-form content and adding
              captions.
            </p>

            <p>
              I use modern development tools,
              including AI-assisted coding,
              while continuously improving my
              programming, testing, debugging,
              and problem-solving skills.
            </p>

            <p>
              My goal is to grow as a professional
              Web Developer, strengthen my
              full-stack development skills,
              and build reliable applications
              that solve real business problems.
            </p>
          </div>

          {/* Read More button */}
          <button
            type="button"
            className="about-read-more"
            aria-expanded={showMore}
            aria-controls="about-more-content"
            onClick={() => setShowMore((prev) => !prev)}
          >
            <span>
              {showMore ? "Show Less" : "Read More"}
            </span>

            <span
              className={`about-read-more-icon ${
                showMore ? "expanded" : ""
              }`}
              aria-hidden="true"
            >
              ↓
            </span>
          </button>

          {/* Technologies */}
          <p className="about-tech-label">
            Technologies I've been working with:
          </p>

          <ul className="about-tech-list">
            {technologies.map((technology) => (
              <li key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>

        {/* Profile image */}
        <div className="about-photo-area">
          <div className="about-photo-wrapper">
            <img
              src={profileImage}
              alt="Haileyesus Mesfin"
              className="about-photo"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
