
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import useActiveSection from "../../hooks/useActiveSection";
import "./Navbar.css";

const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "contact",
  ]);

  // Change navbar appearance based on scroll position
  useEffect(() => {
    let ticking = false;

    function updateNavbar() {
      const currentY = Math.max(window.scrollY, 0);
      const previousY = lastScrollY.current;

      setScrolled(currentY > 60);

      // Hide when scrolling down, show when scrolling up
      if (currentY < 120) {
        setHidden(false);
      } else if (Math.abs(currentY - previousY) > 5) {
        setHidden(currentY > previousY);
      }

      lastScrollY.current = currentY;
      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    }

    updateNavbar();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock page scrolling while mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  // Close menu using Escape
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
    setHidden(false);
  }

  return (
    <>
      <header
        className={[
          "navbar",
          scrolled ? "navbar-scrolled" : "",
          hidden && !menuOpen ? "navbar-hidden" : "",
          menuOpen ? "navbar-menu-active" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="navbar-container">
          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
            aria-label="Go to top of portfolio"
          >
            HM
          </a>

          <nav
            id="main-navigation"
            className={`navbar-menu ${
              menuOpen ? "open" : ""
            }`}
            aria-label="Main navigation"
          >
            {navigation.map((item, index) => {
              const isActive =
                item.id !== "home" &&
                activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={isActive ? "active" : ""}
                  aria-current={
                    isActive ? "location" : undefined
                  }
                >
                  <span className="navbar-link-number">
                    {["፩", "፪", "፫", "፬", "፭"][index]}.
                  </span>

                  {item.label}
                </a>
              );
            })}

            <a
              href="/Haileyesus_Mesfin_CV.pdf"
              className="navbar-resume"
              download
              onClick={closeMenu}
              aria-label="Download resume as PDF"
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
        className={`navbar-overlay ${
          menuOpen ? "visible" : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}

export default Navbar;
