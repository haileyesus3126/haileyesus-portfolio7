import {
  FaEnvelope,
  FaArrowUpRightFromSquare,
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
      <div
        className="contact-glow contact-glow-left"
        aria-hidden="true"
      ></div>

      <div
        className="contact-glow contact-glow-right"
        aria-hidden="true"
      ></div>

      <div className="contact-content">
        <p className="contact-number">
          ፬. What&apos;s Next?
        </p>

        <h2
          id="contact-heading"
          className="contact-title"
        >
          Let&apos;s Build Something
          <span> Meaningful.</span>
        </h2>

        <p className="contact-description">
          I&apos;m open to opportunities in software development,
          website development, backend development, and automation.
          If you have a role, project, collaboration, or simply want
          to connect, I&apos;d be happy to hear from you.
        </p>

        <a
          href="mailto:Haileyesus2024@gmail.com"
          className="contact-email"
          aria-label="Send an email to Haileyesus Mesfin"
        >
          <FaEnvelope aria-hidden="true" />

          <span>
            Haileyesus2024@gmail.com
          </span>
        </a>

        <div className="contact-actions">
          <a
            href="mailto:Haileyesus2024@gmail.com"
            className="contact-button contact-button-primary"
          >
            Say Hello

            <FaArrowUpRightFromSquare
              aria-hidden="true"
            />
          </a>

          <a
            href="/Haileyesus_Mesfin_CV.pdf"
            className="contact-button contact-button-secondary"
            download
          >
            Download Resume
          </a>
        </div>

        <div
          className="contact-ethiopian-line"
          aria-hidden="true"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Contact;