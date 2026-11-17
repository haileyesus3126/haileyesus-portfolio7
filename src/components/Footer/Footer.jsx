import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-divider" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <nav className="footer-socials" aria-label="Social profiles">
        <a
          href="https://github.com/haileyesus3126"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My GitHub profile, opens in a new tab"
          title="GitHub"
        >
          <FaGithub aria-hidden="true" />
        </a>

        <a
          href="https://www.linkedin.com/in/haileyesus3126/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My LinkedIn profile, opens in a new tab"
          title="LinkedIn"
        >
          <FaLinkedinIn aria-hidden="true" />
        </a>
      </nav>

      <p>
        Designed &amp; Built by{" "}
        <a href="#home">Haileyesus Mesfin</a>
      </p>

      <span className="footer-year">
        © {currentYear}
      </span>
    </footer>
  );
}

export default Footer;