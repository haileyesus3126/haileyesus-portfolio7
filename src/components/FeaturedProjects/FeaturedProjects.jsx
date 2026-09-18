import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { featuredProjects } from "../../data/projects";
import useScrollReveal from "../../hooks/useScrollReveal";

import "./FeaturedProjects.css";

function FeaturedProjects() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="projects"
      className="section featured-projects"
      ref={revealRef}
      data-reveal
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="section-heading"
      >
        <span className="section-number">
          ፫.
        </span>

        Some Things I've Built
      </h2>

      <div className="featured-projects-list">
        {featuredProjects.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <article
              className={`featured-project ${
                isReversed ? "reverse" : ""
              }`}
              key={project.title}
            >
              {/* =====================================
                  PROJECT IMAGE
              ====================================== */}

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="featured-project-image-wrapper"
                  aria-label={`Open ${project.title} live project`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project interface`}
                    className="featured-project-image"
                    loading="lazy"
                  />

                  <div
                    className="featured-project-image-overlay"
                    aria-hidden="true"
                  ></div>
                </a>
              ) : (
                <div className="featured-project-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} project interface`}
                    className="featured-project-image"
                    loading="lazy"
                  />

                  <div
                    className="featured-project-image-overlay"
                    aria-hidden="true"
                  ></div>
                </div>
              )}

              {/* =====================================
                  PROJECT CONTENT
              ====================================== */}

              <div className="featured-project-content">
                <p className="featured-project-label">
                  {project.featuredLabel}
                </p>

                {/* PROJECT TITLE */}

                <h3 className="featured-project-title">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live project`}
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                {/* PROJECT DESCRIPTION */}

                <div className="featured-project-description">
                  <p>
                    {project.description}
                  </p>
                </div>

                {/* TECHNOLOGIES */}

                <ul
                  className="featured-project-tech"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map(
                    (technology) => (
                      <li key={technology}>
                        {technology}
                      </li>
                    )
                  )}
                </ul>

                {/* LINKS */}

                {(project.github || project.live) && (
                  <div className="featured-project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} GitHub repository`}
                        title="View source code"
                      >
                        <FaGithub aria-hidden="true" />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live project`}
                        title="View live project"
                      >
                        <FaExternalLinkAlt
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedProjects;