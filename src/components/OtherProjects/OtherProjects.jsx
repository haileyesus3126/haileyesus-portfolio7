import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { otherProjects } from "../../data/projects";
import useScrollReveal from "../../hooks/useScrollReveal";

import "./OtherProjects.css";

function OtherProjects() {
  const revealRef = useScrollReveal();

  // Ge'ez / Ethiopic project numbers
  const geezNumbers = [
    "፩",
    "፪",
    "፫",
    "፬",
    "፭",
    "፮",
    "፯",
    "፰",
    "፱",
    "፲",
  ];

  return (
    <section
      className="section other-projects"
      ref={revealRef}
      data-reveal
      aria-labelledby="other-projects-heading"
    >
      {/* =========================================
          SECTION HEADER
      ========================================== */}

      <div className="other-projects-header">
        <div>
          <p className="other-projects-kicker">
            MORE THINGS I&apos;VE BUILT
          </p>

          <h2
            id="other-projects-heading"
            className="other-projects-title"
          >
            Other Noteworthy Projects
          </h2>
        </div>

        <p className="other-projects-subtitle">
          Practical systems, automation, and experiments.
        </p>
      </div>

      {/* =========================================
          PROJECT GRID
      ========================================== */}

      <div className="other-projects-grid">
        {otherProjects.map((project, index) => {
          const hasLiveLink = Boolean(project.live);
          const hasGithubLink = Boolean(project.github);
          const hasAnyLink = hasLiveLink || hasGithubLink;

          return (
            <article
              className="project-card"
              key={project.title}
            >
              {/* Ethiopian flag accent */}

              <div
                className="project-card-accent"
                aria-hidden="true"
              ></div>

              {/* Ge'ez project number */}

              <div
                className="project-card-number"
                aria-hidden="true"
              >
                {geezNumbers[index] || index + 1}
              </div>

              {/* Project label */}

              <div className="project-card-meta">
                <span>PROJECT</span>

                {hasAnyLink && (
                  <FaArrowUpRightFromSquare
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* =========================================
                  PROJECT TITLE
              ========================================== */}

              <h3 className="project-card-title">
                {hasLiveLink ? (
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

              {/* =========================================
                  DESCRIPTION
              ========================================== */}

              <p className="project-card-description">
                {project.description}
              </p>

              {/* =========================================
                  TECHNOLOGIES
              ========================================== */}

              <ul
                className="project-card-tech"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>

              {/* =========================================
                  PROJECT LINKS
              ========================================== */}

              {hasAnyLink && (
                <div className="project-card-links">
                  {/* GitHub */}

                  {hasGithubLink && (
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

                  {/* Live project */}

                  {hasLiveLink && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live project`}
                      title="View live project"
                    >
                      <FaArrowUpRightFromSquare
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default OtherProjects;