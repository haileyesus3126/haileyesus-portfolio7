import useScrollReveal from "../../hooks/useScrollReveal";
import profileImage from "../../assets/images/haileyesus.png";
import "./About.css";

function About() {
  const revealRef = useScrollReveal();

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
        <span className="section-number">
          ፩.
        </span>

        About Me
      </h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Haileyesus, a Junior Software Developer and Website Developer
            based in Addis Ababa, Ethiopia.
          </p>

          <p>
            My work combines web development, internal business tools, system
            analysis, and automation. At Yosal PLC, I've worked on solutions
            for order issue management, rental workflows, invoice processing,
            Shopify SEO automation, and repetitive business tasks.
          </p>

          <p>
            I'm currently focused on strengthening my full-stack development
            skills and building practical software that solves real problems.
          </p>

          <p className="about-tech-label">
            Technologies I've been working with:
          </p>

          <ul className="about-tech-list">
            {technologies.map((technology) => (
              <li key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-photo-area">
          <div className="about-photo-wrapper">
            <img
              src={profileImage}
              alt="Haileyesus Mesfin"
              className="about-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;