import "./FeaturedManualQA.css";
import { links } from "../data/links";

const qaHighlights = [
  {
    icon: "🔍",
    title: "Requirement & Gap Analysis",
    text: "User Story and SRS analysis, requirement gaps, business rules, risks, and clarification questions.",
  },
  {
    icon: "🧪",
    title: "Test Scenarios & Test Cases",
    text: "Structured high-level test scenarios and detailed test cases covering business workflows, edge cases, and risks.",
  },
  {
    icon: "📊",
    title: "Test Coverage & QA Reports",
    text: "Professional test coverage, QA summary, retest results, and release-readiness documentation.",
  },
  {
    icon: "🐞",
    title: "Developer-Friendly Bug Reports",
    text: "Clear reproducible steps, expected vs actual results, severity, evidence, screenshots, and recordings.",
  },
  {
    icon: "📱",
    title: "Web & Mobile Testing",
    text: "Manual and exploratory testing across web, Android, iOS, responsive layouts, and real user workflows.",
  },
  {
    icon: "🎥",
    title: "Practical QA Demonstrations",
    text: "Video demonstrations of my requirement analysis, exploratory testing, mobile testing, and bug-reporting approach.",
  },
];

function FeaturedManualQA() {
  return (
    <section className="featured-manual-qa">
      <div className="featured-manual-container">

        <div className="featured-manual-header">
          <span className="featured-manual-badge">
            PROOF OF WORK
          </span>

          <h2>
            Explore My <span>Manual QA Portfolio</span>
          </h2>

          <p>
            Go beyond the skills listed on my profile and explore practical
            examples of how I approach real-world software quality — from
            requirement analysis and test design to exploratory testing,
            defect reporting, QA documentation, and release readiness.
          </p>
        </div>

        <div className="featured-manual-grid">
          {qaHighlights.map((item) => (
            <div className="featured-manual-card" key={item.title}>
              <div className="featured-manual-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-manual-proof">
          <span>✓ Real QA Projects</span>
          <span>✓ Professional Documents</span>
          <span>✓ Practical Testing Videos</span>
          <span>✓ Real-World QA Deliverables</span>
        </div>

        <div className="featured-manual-action">
          <a
            href={links.manualQAPortfolio}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Complete Manual QA Portfolio ↗
          </a>

          <p>
            Explore real-world QA projects, professional documents, testing videos,
              bug reports, and practical evidence of my end-to-end testing approach.
          </p>
        </div>

      </div>
    </section>
  );
}

export default FeaturedManualQA;