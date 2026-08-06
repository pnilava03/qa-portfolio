import "./EngineeringDemos.css";

const demos = [
  {
    title: "Automation Framework Overview & Structure",
    category: "Framework Architecture",
    description:
      "Walkthrough of scalable automation framework structure, reusable components, design patterns, and best practices.",
    videoUrl:
      "/videos/demoVideos/1. Automation Framework Overview & Structure (Components + Best Practices).mp4",
  },
  {
    title: "Scalable Automation Framework with Jira",
    category: "Jira Integration",
    description:
      "Demo of automation framework integration with Jira for QA workflow, defect tracking, and reporting.",
    videoUrl:
      "/videos/demoVideos/2. Building a Scalable Automation Framework with Jira Integration 🚀.mp4",
  },
  {
    title: "CI/CD GitHub Actions Integration",
    category: "CI/CD Pipeline",
    description:
      "Automated test execution using GitHub Actions workflow with test reports and CI pipeline execution.",
    videoUrl:
      "/videos/demoVideos/3. CI-CD-GitHubActions_Integration.mp4",
  },
];

function EngineeringDemos() {
  return (
    <section className="engineering-demos-section" id="demos">
      <div className="container">
        <h2 className="engineering-demos-title">
          Featured QA Engineering Demos
        </h2>

        <p className="engineering-demos-subtitle">
          Practical demo videos showing automation framework design, Jira
          integration, and CI/CD execution with GitHub Actions.
        </p>

        <div className="engineering-demos-grid">
          {demos.map((demo) => (
            <div className="engineering-demo-card" key={demo.title}>
              <div className="engineering-demo-video">
                <video controls preload="metadata">
                  <source src={demo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="engineering-demo-content">
                <span>{demo.category}</span>
                <h3>{demo.title}</h3>
                <p>{demo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngineeringDemos;