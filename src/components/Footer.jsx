import "./Footer.css";
import {
  FaGithub,
  FaBriefcase,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2>Nilava Pal</h2>

        <p className="footer-role">
          Lead SDET | QA Automation Engineer <br />
          React + Vite Frontend Developer
        </p>

        <p className="footer-description">
          Helping SaaS, AI, startups, and enterprise teams deliver
          high-quality software through Manual Testing, Automation,
          API Testing, Mobile Testing, and modern React frontend
          development.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/pnilava03"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.upwork.com/freelancers/~0171c0df5ee2c6f645"
            target="_blank"
            rel="noreferrer"
          >
            <FaBriefcase />
            Upwork
          </a>

        </div>

        <div className="footer-info">

          <span>🕒 Available: 20–40 Hours / Week</span>

          <span>
            <FaMapMarkerAlt />
            Bangalore, India
          </span>

        </div>

        <hr />

        <p className="copyright">
          © 2026 Nilava Pal • Built with React + Vite • Deployed on Vercel
        </p>

      </div>

    </footer>
  );
}

export default Footer;