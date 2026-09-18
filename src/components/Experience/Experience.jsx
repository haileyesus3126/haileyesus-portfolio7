import { useState } from "react";
import experience from "../../data/experience";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Experience.css";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const revealRef = useScrollReveal();

  const activeJob = experience[activeIndex];

  return (
    <section
      id="experience"
      className="section experience-section"
      ref={revealRef}
      data-reveal
    >
      <h2 className="section-heading">
        <span className="section-number">፪.</span>
        Experience
      </h2>

      <div className="experience-content">
        <div
          className="experience-tabs"
          role="tablist"
          aria-label="Work experience"
        >
          {experience.map((job, index) => (
            <button
              key={`${job.company}-${job.role}`}
              className={`experience-tab ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div className="experience-details">
          <h3 className="experience-role">
            {activeJob.role}
            <span> @ {activeJob.company}</span>
          </h3>

          <p className="experience-period">
            {activeJob.period}
          </p>

          <p className="experience-location">
            {activeJob.location}
          </p>

          <ul className="experience-list">
            {activeJob.bullets.map((bullet, index) => (
              <li key={`${activeJob.company}-${index}`}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;