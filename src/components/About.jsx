import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <p>
            I help <strong>SaaS, AI, and enterprise teams</strong> release
            high-quality software faster through <strong>Manual Testing,
            Automation Testing, API Testing, Mobile Testing,</strong> and
            scalable QA practices.
          </p>

          <p>
            I'm a <strong>Lead SDET and Senior QA Automation Engineer</strong>{" "}
            with <strong>10.5+ years of experience</strong> designing automation
            frameworks from scratch, leading QA teams, and integrating testing
            into CI/CD pipelines.
          </p>

          <p>
            Throughout my career, I've helped increase{" "}
            <strong>automation coverage from 40% to 80%</strong>, reduce{" "}
            <strong>regression effort by up to 60%</strong>, and improve release
            quality through stronger test coverage, exploratory testing,
            risk-based testing, and defect prevention.
          </p>

          <p>
            My expertise includes Selenium WebDriver Java, REST Assured, Appium,
            TestNG, Cucumber BDD, Jenkins, GitHub Actions, and scalable
            automation frameworks across Web, API, and Mobile platforms.
          </p>

          <p>
            Recently, one of my QA clients awarded me a{" "}
            <strong>5-star review</strong>, described me as{" "}
            <strong>"smart & easy to work with"</strong> and{" "}
            <strong>"very good at manual testing and found good bugs"</strong>.
            I currently maintain a <strong>100% Job Success</strong> profile on
            Upwork with <strong>three 5-star reviews</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;