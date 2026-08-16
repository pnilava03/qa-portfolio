import "./Footer.css";
import { links } from "../data/links";

import {
  FaGithub,
  FaBriefcase,
  FaMapMarkerAlt,
  FaClipboardCheck,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <h2>Nilava Pal</h2>

        <p className="footer-role">
          Senior QA Engineer | Lead SDET <br />
          Manual QA • Automation • API • Mobile
        </p>

        <p className="footer-description">
          Helping SaaS, AI, startups, and enterprise teams deliver
          high-quality software through requirement analysis, Manual &
          Exploratory Testing, Automation Testing, API Testing, Mobile
          Testing, and structured QA practices.
        </p>

        <div className="footer-links">

          <a
            href={links.manualQAPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-manual-qa"
          >
            <FaClipboardCheck />
            Manual QA Portfolio ↗
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={links.upwork}
            target="_blank"
            rel="noreferrer"
          >
            <FaBriefcase />
            Upwork
          </a>

        </div>

        <div className="footer-info">

          <span>
            🕒 Weekly Commitment: 20–40 Hours
          </span>

          <span>
            🌍 Timezone: IST (Flexible overlap with US, UK & EU)
          </span>

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