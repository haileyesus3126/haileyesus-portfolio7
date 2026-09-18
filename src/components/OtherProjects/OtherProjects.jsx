import {
  FaFolder,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { otherProjects } from "../../data/projects";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./OtherProjects.css";

function OtherProjects() {
  const revealRef = useScrollReveal();

  return (
    <section
      className="section other-projects"
      ref={revealRef}
      data-reveal
      aria-labelledby="other-projects-heading"
    >
      <div className="other-projects-header">
        <h2
          id="other-projects-heading"
          className="other-projects-title"
        >
          Other Noteworthy Projects
        </h2>

        <span className="other-projects-subtitle">
          More things I've built
        </span>
      </div>

      <div className="other-projects-grid">
        {otherProjects.map((project) => (
          <article
            className="project-card"
            key={project.title}
          >
            <div className="project-card-top">
              <FaFolder
                className="project-folder-icon"
                aria-hidden="true"
              />

              {(project.github ||
                project.live) && (
                  <div className="project-card-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} GitHub repository`}
                      >
                        <FaGithub
                          aria-hidden="true"
                        />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live project`}
                      >
                        <FaExternalLinkAlt
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                )}
            </div>

            <h3 className="project-card-title">
              {project.title}
            </h3>

            <p className="project-card-description">
              {project.description}
            </p>

            <ul
              className="project-card-tech"
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
          </article>
        ))}
      </div>
    </section>
  );
}

export default OtherProjects;