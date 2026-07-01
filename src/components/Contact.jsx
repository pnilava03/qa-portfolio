import "./Contact.css";
import { FaGithub, FaBriefcase, FaEnvelope } from "react-icons/fa";

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
              href="https://www.upwork.com/freelancers/~0171c0df5ee2c6f645"
              target="_blank"
              rel="noreferrer"
            >
              <FaBriefcase />
              Upwork
            </a>

            <a
              href="https://github.com/pnilava03"
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