import { useState } from "react";
import "./Navbar.css";
import { links } from "../data/links";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h2>Nilava Pal</h2>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>About</a>
        </li>

        <li>
          <a href="#why-hire" onClick={closeMenu}>Why Me</a>
        </li>

        <li>
          <a href="#services" onClick={closeMenu}>Services</a>
        </li>

        <li>
          <a href="#experience" onClick={closeMenu}>Experience</a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>

        <li>
          <a
            href={links.manualQAPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="manual-qa-nav-link"
            onClick={closeMenu}
          >
            Manual QA ↗
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>

        <li>
          <a href="#bugs" onClick={closeMenu}>Bugs</a>
        </li>

        <li>
          <a href="#testimonials" onClick={closeMenu}>Reviews</a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;