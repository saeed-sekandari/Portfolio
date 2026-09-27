import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the menu after choosing a link.
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <a href="#home" className="logo" onClick={closeMenu}>
          Saeed Sekandari
        </a>

        {/* Mobile menu button */}
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
          </li>

          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

          <li>
            <a
              href="/Saeed-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Social links */}
        <div className="social-links">
          <a
            className="social-link"
            href="https://github.com/saeed-sekandari"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            className="social-link"
            href="https://www.linkedin.com/in/saeed-sekandari"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;