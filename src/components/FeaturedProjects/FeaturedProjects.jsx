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
          03.
        </span>

        Some Things I've Built
      </h2>

      <div className="featured-projects-list">
        {featuredProjects.map(
          (project, index) => (
            <article
              className={`featured-project ${
                index % 2 !== 0
                  ? "reverse"
                  : ""
              }`}
              key={project.title}
            >
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

              <div className="featured-project-content">
                <p className="featured-project-label">
                  {project.featuredLabel}
                </p>

                <h3 className="featured-project-title">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                <div className="featured-project-description">
                  <p>{project.description}</p>
                </div>

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

                {(project.github ||
                  project.live) && (
                  <div className="featured-project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} GitHub repository`}
                      >
                        <FaGithub aria-hidden="true" />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live website`}
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
          )
        )}
      </div>
    </section>
  );
}

export default FeaturedProjects;