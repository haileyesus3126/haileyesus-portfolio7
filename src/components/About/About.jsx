import useScrollReveal from "../../hooks/useScrollReveal";
import profileImage from "../../assets/images/haileyesus.png";
import "./About.css";

const technologies = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Python",
  "Git & GitHub",
  "REST APIs",
];

function About() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="about"
      className="section about-section"
      ref={revealRef}
      data-reveal
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="section-heading">
        <span className="section-number">፩.</span>
        About Me
      </h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I’m Haileyesus, a Website Developer from
            Addis Ababa, Ethiopia. I have a degree in ICT
            from the University of Gondar.
          </p>

          <p>
            I build websites and tools that make daily work
            easier. I have worked with business data and
            built tools to track tasks, order issues, and Inventory Management System.
          </p>

          <p>
            I’m looking for a Website Developer job where
            I can help, learn, and grow.
          </p>

          <p className="about-tech-label">
            Tools I work with:
          </p>

          <ul className="about-tech-list">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

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