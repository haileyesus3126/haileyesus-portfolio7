import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import heroImage from "../../assets/images/haileyesus.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">HELLO, I'M</p>

          <h1 className="hero-title">
            Haileyesus
            <span> Mesfin</span>
          </h1>

          <h2 className="hero-role">
            Junior Software Developer
            <span> | Website Developer</span>
          </h2>

          <p className="hero-focus">
            Web Development <span>•</span> Business Applications{" "}
            <span>•</span> Automation
          </p>

          <p className="hero-description">
            I build practical web applications and automation solutions that
            solve real business problems. My work combines modern web
            development, system analysis, and workflow automation.
          </p>

          <div className="hero-tech">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Python</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <FaArrowRight />
            </a>

            <a
              href="/Haileyesus_Mesfin_CV.pdf"
              className="btn btn-outline"
              download
            >
              Download Resume
              <FaDownload />
            </a>
          </div>

          <div className="hero-bottom">
            <p>
              <span className="hero-status-dot"></span>
              Addis Ababa, Ethiopia
            </p>

            <div className="hero-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="hero-image-card">
            <img
              src={heroImage}
              alt="Haileyesus Mesfin"
              className="hero-image"
            />
          </div>

          <div className="tech-float tech-float-react">React</div>
          <div className="tech-float tech-float-node">Node.js</div>
          <div className="tech-float tech-float-python">Python</div>
          <div className="tech-float tech-float-mongo">MongoDB</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;