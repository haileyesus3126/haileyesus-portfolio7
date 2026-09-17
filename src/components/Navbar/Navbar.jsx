import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          HM<span>.</span>
        </a>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/Haileyesus_Mesfin_CV.pdf"
            className="btn btn-outline navbar-resume"
            download
          >
            Resume
            <FaDownload />
          </a>
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;