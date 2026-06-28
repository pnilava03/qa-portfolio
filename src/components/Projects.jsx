import "./Projects.css";
import { FaGithub, FaBug, FaMobileAlt, FaRobot } from "react-icons/fa";

const projects = [
  {
    icon: <FaRobot />,
    title: "QA Utility Bot",
    desc: "An intelligent QA utility that automates health checks, website crawling, broken link detection, smoke testing, report generation, and reusable QA tasks to improve testing efficiency.",
    link: "https://github.com/pnilava03/QAUtilityBot",
    tags: ["Java", "Selenium", "Crawler", "Smoke Testing", "Health Check", "QA Utility"],
  },
  {
    icon: <FaRobot />,
    title: "UI + API Automation Framework",
    desc: "Scalable Selenium Java + REST Assured framework with TestNG, Cucumber BDD, POM, Selenium Grid 4, Docker execution, parallel testing, cross-browser support, Jenkins, and GitHub Actions.",
    link: "https://github.com/pnilava03/AutomationUIAndAPI",
    tags: ["Selenium", "REST Assured", "Docker Grid", "TestNG", "Cucumber", "CI/CD"],
  },
  {
    icon: <FaBug />,
    title: "Manual Testing Portfolio",
    desc: "Enterprise-level QA portfolio including test strategy, test plans, test cases, bug reports, UAT checklist, QA status reports, exploratory testing, regression testing, and release documentation.",
    link: "https://github.com/pnilava03/ManualTesting",
    tags: ["Test Cases", "Bug Reports", "Regression", "Exploratory", "UAT", "QA Docs"],
  },
{
  icon: <FaRobot />,
  title: "AAA Life SDET Automation Framework",
  desc: "End-to-end SDET automation framework built for UI and API testing using Selenium Java, REST Assured, TestNG, Cucumber BDD, Maven, reusable framework utilities, and structured test execution.",
  link: "https://github.com/pnilava03/AAALifeSDETAutomationFramework",
  tags: [
    "Selenium",
    "Java",
    "REST Assured",
    "TestNG",
    "Cucumber",
    "Maven"
  ],
},

{
    icon: <FaMobileAlt />,
    title: "Mobile Testing",
    desc: "Android & iOS testing with Appium, functional testing, regression testing, and real-device validation.",
    link: "https://github.com/pnilava03/BaselineAPP",
    tags: ["Appium",
        "Android",
        "iOS",
        "Regression",
        "Real Device"

        ],
  },

];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="projects-title">GitHub Projects</h2>

        <p className="projects-subtitle">
          Selected QA repositories covering automation, manual testing, and mobile QA.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-icon">{project.icon}</div>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <ul className="project-tags">
                {project.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>

              <a href={project.link} target="_blank" rel="noreferrer">
                <FaGithub /> View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;