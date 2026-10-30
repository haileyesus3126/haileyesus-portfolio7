
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
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
        Selected Projects
      </h2>

      <div className="featured-projects-list">
        {featuredProjects.map((project, index) => {
          const isReversed = index % 2 !== 0;
          const hasImage = Boolean(project.image);
          const hasLive = Boolean(project.live);
          const hasGithub = Boolean(project.github);

          const projectVisual = hasImage ? (
            <img
              src={project.image}
              alt={`${project.title} project interface`}
              className="featured-project-image"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              className="featured-project-placeholder"
              role="img"
              aria-label={`${project.title} project preview unavailable`}
            >
              <FaCode aria-hidden="true" />
              <span>{project.title}</span>
            </div>
          );

          return (
            <article
              className={`featured-project ${
                isReversed ? "reverse" : ""
              }`}
              key={project.title}
            >
              {/* Project image */}
              {hasLive ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-project-image-wrapper"
                  aria-label={`Open ${project.title} live project`}
                >
                  {projectVisual}

                  <div
                    className="featured-project-image-overlay"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <div className="featured-project-image-wrapper">
                  {projectVisual}

                  <div
                    className="featured-project-image-overlay"
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Project information */}
              <div className="featured-project-content">
                <p className="featured-project-label">
                  {project.featuredLabel || "Featured Project"}
                </p>

                <h3 className="featured-project-title">
                  {hasLive ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
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

                {/* Technologies */}
                <ul
                  className="featured-project-tech"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>

                {/* Project links */}
                {(hasGithub || hasLive) && (
                  <div className="featured-project-links">
                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        title="View source code"
                      >
                        <FaGithub aria-hidden="true" />
                      </a>
                    )}

                    {hasLive && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live`}
                        title="View live project"
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
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
