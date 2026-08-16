import "./Contact.css";
import { FaGithub, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { links } from "../data/links";
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <h2>Let's Work Together</h2>

        <p className="contact-subtitle">
          I'm currently available for freelance projects involving
          <strong> Manual Testing</strong>,
          <strong> Automation Testing</strong>,
          <strong> API Testing</strong>,
          <strong> Mobile Testing</strong>, and
          <strong> React + Vite Frontend Development</strong>.
        </p>

        <div className="availability-box">

          <h3>✅ Available for Freelance</h3>

          <p className="availability-text">
              <strong>Weekly Commitment:</strong> 20–40 Hours <br />
              <strong>Timezone:</strong> IST (Flexible overlap with US, UK & EU)
            </p>

          <div className="availability-links">

            <a
             href={links.upwork}
              target="_blank"
              rel="noreferrer"
            >
              <FaBriefcase />
              Upwork
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;