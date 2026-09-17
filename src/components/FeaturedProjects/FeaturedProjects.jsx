import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import projects from "../../data/projects";
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
    >
      <h2 className="section-heading">
        <span className="section-number">03.</span>
        Some Things I've Built
      </h2>

      <div className="featured-projects-list">
        {projects.map((project, index) => (
          <article
            className={`featured-project ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            key={project.title}
          >
            <div className="featured-project-image-wrapper">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="featured-project-image"
              />

              <div className="featured-project-image-overlay"></div>
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

              <ul className="featured-project-tech">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="featured-project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FaGithub />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live website`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;