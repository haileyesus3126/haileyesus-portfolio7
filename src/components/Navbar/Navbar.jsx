import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import useActiveSection from "../../hooks/useActiveSection";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const navigation = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "contact",
  ]);

  /* Lock page scrolling while mobile menu is open */

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

  /* Close mobile menu with Escape */

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
      <header className="navbar">
        <div className="navbar-container">
          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
            aria-label="Go to the top of Haileyesus Mesfin portfolio"
          >
            HM
          </a>

          <nav
            id="main-navigation"
            ref={menuRef}
            className={`navbar-menu ${menuOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const isActive =
                item.id !== "home" &&
                activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "location" : undefined}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href="/Haileyesus_Mesfin_CV.pdf"
              className="navbar-resume"
              download
              onClick={closeMenu}
              aria-label="Download Haileyesus Mesfin resume as PDF"
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
            aria-controls="main-navigation"
          >
            {menuOpen ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
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