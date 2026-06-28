import "./BugPortfolio.css";

const bugReports = [
  {
    title: "K5 Genie AI Platform",
    description:
      "47 reproducible bugs across Web, Android and iOS including Functional, UI, Workflow, AI Validation, OCR Validation and PDF Export.",
    file: "/bug/K5Genie_Testing_Bug_Report_Version_v2.0.pdf",
  },

  {
    title: "Loyalz Mobile Application",
    description:
      "Manual testing with OTP validation, password reset, login workflow and security-related defects.",
    file: "/bug/Mobile_App_QA_Bug_Report.pdf",
  },

  {
    title: "Health Check Web Platform",
    description:
      "Functional testing, UI validation, mandatory field validation and workflow defects.",
    file: "/bug/Athena Bug Report Sample.pdf",
  },
];

function BugPortfolio() {
  return (
    <section className="bug-section" id="bugs">

      <div className="container">

        <h2 className="bug-title">
          🐞 Bug Hunting Portfolio
        </h2>

        <p className="bug-subtitle">
          Sample bug reports from real-world QA projects.
        </p>

        <div className="bug-grid">

          {bugReports.map((bug) => (

            <div className="bug-card" key={bug.title}>

              <h3>{bug.title}</h3>

              <p>{bug.description}</p>

              <a
                href={bug.file}
                target="_blank"
                rel="noreferrer"
              >
                📄 View Bug Report
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default BugPortfolio;