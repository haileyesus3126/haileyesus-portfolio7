import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-divider">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="footer-socials">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Haileyesus Mesfin GitHub profile"
        >
          <FaGithub aria-hidden="true" />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Haileyesus Mesfin LinkedIn profile"
        >
          <FaLinkedinIn aria-hidden="true" />
        </a>
      </div>

      <p>
        Designed &amp; Built by
        <a href="#home">
          {" "}Haileyesus Mesfin
        </a>
      </p>

      <span className="footer-year">
        © {currentYear}
      </span>
    </footer>
  );
}

export default Footer;