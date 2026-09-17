import useScrollReveal from "../../hooks/useScrollReveal";
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
    >
      <h2 className="section-heading">
        <span className="section-number">01.</span>
        About Me
      </h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm Haileyesus, a Junior Software Developer and Website Developer
            based in Addis Ababa, Ethiopia.
          </p>

          <p>
            My professional work started around websites, business workflows,
            and day-to-day operational problems. Over time, I began using
            software, automation, and system analysis to make repetitive work
            easier and more organized.
          </p>

          <p>
            At Yosal PLC, I have worked on internal tools and automation
            solutions including order issue management, rental workflows,
            invoice processing, Shopify SEO automation, and other repetitive
            business processes.
          </p>

          <p>
            Today, I continue strengthening my software development skills by
            building full-stack applications and practical projects using
            modern web technologies and Python automation.
          </p>

          <p className="about-tech-label">
            Technologies I've been working with:
          </p>

          <ul className="about-tech-list">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        <div className="about-highlight">
          <span className="about-highlight-label">CURRENT FOCUS</span>

          <h3>
            Building practical software that solves real business problems.
          </h3>

          <p>
            Web development, backend development, internal tools, workflow
            automation, and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;