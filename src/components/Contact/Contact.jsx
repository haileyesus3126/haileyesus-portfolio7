import {
  FaEnvelope,
  FaArrowUpRightFromSquare,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

import useScrollReveal from "../../hooks/useScrollReveal";
import "./Contact.css";

function Contact() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="contact"
      className="section contact-section"
      ref={revealRef}
      data-reveal
      aria-labelledby="contact-heading"
    >
      <div className="contact-content">
        <p className="contact-number">
          ፬. Contact Me
        </p>

        <h2 id="contact-heading" className="contact-title">
          Let’s Work
          <span> Together.</span>
        </h2>

        <p className="contact-description">
          I’m looking for a Website Developer job.
          If you have a role or a project for me,
          I’d love to hear from you.
        </p>

        <a
          href="mailto:haileyesus2024@gmail.com"
          className="contact-email"
        >
          <FaEnvelope aria-hidden="true" />
          <span>haileyesus2024@gmail.com</span>
        </a>

        <ul
          className="contact-details"
          aria-label="Contact details"
        >
          <li>
            <a
              href="https://github.com/haileyesus3126"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My GitHub profile, opens in a new tab"
            >
              <FaGithub aria-hidden="true" />
              GitHub
              <FaArrowUpRightFromSquare
                className="contact-detail-external"
                aria-hidden="true"
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/haileyesus3126/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My LinkedIn profile, opens in a new tab"
            >
              <FaLinkedin aria-hidden="true" />
              LinkedIn
              <FaArrowUpRightFromSquare
                className="contact-detail-external"
                aria-hidden="true"
              />
            </a>
          </li>

          <li>
            <a href="tel:+251989853281">
              <FaPhone aria-hidden="true" />
              0989853281
            </a>
          </li>

          <li className="contact-detail-location">
            <FaLocationDot aria-hidden="true" />
            Addis Ababa, Ethiopia
          </li>
        </ul>

        <div className="contact-actions">
          <a
            href="mailto:haileyesus2024@gmail.com"
            className="contact-button contact-button-primary"
          >
            Email Me
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>

          <a
            href="/Haileyesus_Mesfin_CV.pdf"
            className="contact-button contact-button-secondary"
            download
          >
            Download CV
          </a>
        </div>

        <div
          className="contact-line"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default Contact;