import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="container">

        <h2 className="skills-title">
          Technical Skills
        </h2>

        {/* Automation */}

        <div className="skill-category">

          <h3>🤖 Automation Testing</h3>

          <div className="skill-tags">
            <span>QA Automation</span>
            <span>Selenium WebDriver</span>
            <span>Java</span>
            <span>TestNG</span>
            <span>Cucumber BDD</span>
            <span>Page Object Model</span>
            <span>Hybrid Framework</span>
            <span>Selenium Grid</span>
            <span>Docker</span>
            <span>Maven</span>
          </div>

        </div>

        {/* API */}

        <div className="skill-category">

          <h3>🔌 API Testing</h3>

          <div className="skill-tags">
            <span>REST Assured</span>
            <span>Postman</span>
            <span>Insomnia</span>
            <span>Schema Validation</span>
            <span>OAuth</span>
            <span>Negative API Testing</span>
            <span>Database Validation</span>
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>

        </div>

        {/* Manual */}

        <div className="skill-category">

          <h3>🧪 Manual Testing</h3>

          <div className="skill-tags">
            <span>Manual Testing</span>
            <span>Functional Testing</span>
            <span>Regression Testing</span>
            <span>Smoke Testing</span>
            <span>Sanity Testing</span>
            <span>Exploratory Testing</span>
            <span>Test Case Design</span>
            <span>Bug Reporting</span>
            <span>Bug Tracking</span>
            <span>UAT</span>
          </div>

        </div>

        {/* Mobile */}

        <div className="skill-category">

          <h3>📱 Mobile Testing</h3>

          <div className="skill-tags">
            <span>Appium</span>
            <span>Android Testing</span>
            <span>iOS Testing</span>
            <span>Cross Device Testing</span>
            <span>Mobile Functional Testing</span>
            <span>Mobile Regression Testing</span>
          </div>

        </div>

        {/* DevOps */}

        <div className="skill-category">

          <h3>⚙️ DevOps & CI/CD</h3>

          <div className="skill-tags">
            <span>Jenkins</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>GitHub Actions</span>
            <span>CI/CD</span>
          </div>

        </div>

        {/* Leadership */}

        <div className="skill-category">

          <h3>👥 Leadership & QA Strategy</h3>

          <div className="skill-tags">
            <span>QA Team Leadership</span>
            <span>Test Strategy</span>
            <span>Automation Framework Design</span>
            <span>Code Reviews</span>
            <span>Agile Scrum</span>
            <span>Quality Engineering</span>
            <span>Mentoring</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;