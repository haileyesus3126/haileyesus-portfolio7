
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
    "MySQL",
    "Python",
    "Git",
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
            Hi, I'm Haileyesus, a self-taught Software
            Developer and Website Developer based in
            Addis Ababa, Ethiopia. I have a Bachelor's
            Degree in Information and Communication
            Technology.
          </p>

          <p>
            My work combines data operations, web
            development, internal business systems,
            and automation. I enjoy building practical
            software that solves real problems.
          </p>

          {/* Expandable content */}
          <div
            id="about-more-content"
            className="about-more-content"
            hidden={!showMore}
          >
            <p>
              At Yosal PLC, I've worked with business
              data, website-related tasks, and system
              analysis. I've also worked on an Order
              Issue Management System and a Rental
              Management System using Replit and
              AI-assisted development tools.
            </p>

            <p>
              I've developed automation solutions for
              invoice processing and Shopify SEO tasks
              to reduce repetitive manual work and
              improve business workflows.
            </p>

            <p>
              My personal projects include a Task
              Management System built with React.js,
              Node.js, Express.js, and MongoDB, and
              Ruth Store, an e-commerce web application.
              I use AI-assisted development tools
              while continuing to improve my independent
              programming and debugging skills.
            </p>

            <p>
              My goal is to become a stronger full-stack
              developer and build reliable software
              that makes people's work easier.
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
              <li key={technology}>{technology}</li>
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
