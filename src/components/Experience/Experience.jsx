
import { useState } from "react";
import experience from "../../data/experience";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Experience.css";

const VISIBLE_BULLETS = 3;

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const revealRef = useScrollReveal();

  if (!experience.length) {
    return null;
  }

  const activeJob = experience[activeIndex];

  const visibleBullets = showMore
    ? activeJob.bullets
    : activeJob.bullets.slice(0, VISIBLE_BULLETS);

  const hasMore = activeJob.bullets.length > VISIBLE_BULLETS;

  const handleTabChange = (index) => {
    setActiveIndex(index);
    setShowMore(false);
  };

  return (
    <section
      id="experience"
      className="section experience-section"
      ref={revealRef}
      data-reveal
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="section-heading"
      >
        <span className="section-number">፪.</span>
        Experience
      </h2>

      <div className="experience-content">
        {/* Company tabs */}
        <div
          className="experience-tabs"
          role="tablist"
          aria-label="Work experience"
        >
          {experience.map((job, index) => (
            <button
              key={`${job.company}-${index}`}
              id={`experience-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls="experience-panel"
              tabIndex={activeIndex === index ? 0 : -1}
              className={`experience-tab ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleTabChange(index)}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Active company details */}
        <div
          id="experience-panel"
          className="experience-details"
          role="tabpanel"
          aria-labelledby={`experience-tab-${activeIndex}`}
          tabIndex={0}
        >
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

          {/* Responsibilities */}
          <ul
            id="experience-responsibilities"
            className="experience-list"
          >
            {visibleBullets.map((bullet, index) => (
              <li key={`${activeJob.company}-${index}`}>
                {bullet}
              </li>
            ))}
          </ul>

          {/* Show More / Show Less */}
          {hasMore && (
            <button
              type="button"
              className="experience-read-more"
              aria-expanded={showMore}
              aria-controls="experience-responsibilities"
              onClick={() => setShowMore((prev) => !prev)}
            >
              <span>
                {showMore ? "Show Less" : "Show More"}
              </span>

              <span
                className={`experience-read-more-icon ${
                  showMore ? "expanded" : ""
                }`}
                aria-hidden="true"
              >
                ↓
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;
