import "./Experience.css";
import {
  FaGlobe,
  FaPlug,
  FaMobileAlt,
  FaCogs,
  FaUsers,
  FaLayerGroup,
} from "react-icons/fa";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="experience-heading">
          10.5+ Years in Software Testing
        </h2>

        <h1 className="section-title">Core Expertise</h1>

        <div className="expertise-grid">
          <div className="web-card">
            <div className="card-icon web-icon">
              <FaGlobe />
            </div>
            <h3 className="card-title">Web Automation</h3>
            <ul className="card-list">
              <li>Selenium WebDriver (Java)</li>
              <li>TestNG</li>
              <li>Cucumber BDD</li>
              <li>Page Object Model (POM)</li>
              <li>Hybrid Automation Frameworks</li>
              <li>Dockerized Selenium Grid</li>
            </ul>
          </div>

          <div className="api-card">
            <div className="card-icon api-icon">
              <FaPlug />
            </div>
            <h3 className="card-title">API Testing</h3>
            <ul className="card-list">
              <li>REST Assured</li>
              <li>Postman / Insomnia</li>
              <li>Schema Validation</li>
              <li>OAuth Validation</li>
              <li>Negative API Testing</li>
              <li>Database Validation</li>
            </ul>
          </div>

          <div className="mobile-card">
            <div className="card-icon mobile-icon">
              <FaMobileAlt />
            </div>
            <h3 className="card-title">Mobile Testing</h3>
            <ul className="card-list">
              <li>Appium (Android & iOS)</li>
              <li>Mobile Functional Testing</li>
              <li>Mobile Regression Testing</li>
              <li>Cross Device Testing</li>
            </ul>
          </div>

          <div className="framework-card">
            <div className="card-icon framework-icon">
              <FaLayerGroup />
            </div>
            <h3 className="card-title">Automation Framework Development</h3>
            <ul className="card-list">
              <li>Designed scalable automation frameworks from scratch</li>
              <li>Selenium Web Automation Framework</li>
              <li>REST Assured API Automation Framework</li>
              <li>Appium Mobile Automation Framework</li>
              <li>Hybrid Framework Design</li>
              <li>Reusable utilities and base classes</li>
              <li>CI/CD-ready framework architecture</li>
            </ul>
          </div>

          <div className="devops-card">
            <div className="card-icon devops-icon">
              <FaCogs />
            </div>
            <h3 className="card-title">CI/CD & DevOps</h3>
            <ul className="card-list">
              <li>Jenkins</li>
              <li>GitHub Actions</li>
              <li>Maven</li>
              <li>Git / GitHub / GitLab</li>
              <li>CI/CD Pipeline Integration</li>
            </ul>
          </div>

          <div className="leadership-card">
            <div className="card-icon leadership-icon">
              <FaUsers />
            </div>
            <h3 className="card-title">Leadership & Quality Strategy</h3>
            <ul className="card-list">
              <li>QA Team Leadership</li>
              <li>Test Strategy & Planning</li>
              <li>Automation Framework Design</li>
              <li>Code Reviews</li>
              <li>Agile / Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;