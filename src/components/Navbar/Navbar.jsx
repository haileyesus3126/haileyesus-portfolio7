import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import useActiveSection from "../../hooks/useActiveSection";
import "./Navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const navigation = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const activeSection = useActiveSection(
    navigation.map((item) => item.id)
  );

  useEffect(() => {
    function handleScroll() {
      setShowNavbar(window.scrollY > 250);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={`navbar ${showNavbar ? "visible" : ""}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            HM
          </a>

          <nav
            ref={menuRef}
            className={`navbar-menu ${menuOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={
                  activeSection === item.id ? "active" : ""
                }
              >
                {item.label}
              </a>
            ))}

            <a
              href="/Haileyesus_Mesfin_CV.pdf"
              className="navbar-resume"
              download
              onClick={closeMenu}
            >
              Resume
            </a>
          </nav>

          <button
            className="navbar-toggle"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <div
        className={`navbar-overlay ${menuOpen ? "visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>
    </>
  );
}

export default Navbar;