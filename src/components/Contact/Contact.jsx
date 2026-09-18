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
      <p className="contact-number">
        04. What&apos;s Next?
      </p>

      <h2
        id="contact-heading"
        className="contact-title"
      >
        Get In Touch
      </h2>

      <p className="contact-description">
        I&apos;m interested in software development,
        website development, backend development,
        and automation opportunities. If you have a
        role, project, or question, feel free to
        contact me.
      </p>

      <a
        href="mailto:Haileyesus2024@gmail.com"
        className="outline-button contact-button"
        aria-label="Send an email to Haileyesus Mesfin"
      >
        Say Hello
      </a>
    </section>
  );
}

export default Contact;