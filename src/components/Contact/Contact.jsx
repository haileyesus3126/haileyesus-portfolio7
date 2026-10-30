
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
      {/* Background effects */}
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
           ፭. What's Next?
        </p>

        <h2
          id="contact-heading"
          className="contact-title"
        >
          Let's Build Something
          <span> Meaningful.</span>
        </h2>

        <p className="contact-description">
          I'm a Web Developer with experience in
          business applications, data operations,
          and workflow automation.

          I'm open to opportunities in web development,
          application support, IT operations, and
          collaborative technology projects.

          If you're looking for someone who enjoys
          solving problems, learning new technologies,
          and building practical digital solutions,
          I'd be happy to connect.
        </p>

        {/* Email address */}
        <a
          href="mailto:haileyesus2024@gmail.com"
          className="contact-email"
          aria-label="Send an email to Haileyesus Mesfin"
        >
          <FaEnvelope aria-hidden="true" />

          <span>
            haileyesus2024@gmail.com
          </span>
        </a>

        {/* Action buttons */}
        <div className="contact-actions">
          <a
            href="mailto:haileyesus2024@gmail.com"
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

        {/* Decorative Ethiopian line */}
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
