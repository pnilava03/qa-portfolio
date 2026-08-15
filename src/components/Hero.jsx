import { useState } from "react";
import "./Hero.css";

const achievements = [
  { icon: "🏆", title: "10.5+ Years", text: "Experience" },
  { icon: "⭐", title: "100%", text: "Job Success" },
  { icon: "🌟", title: "3 × 5-Star", text: "Reviews" },
  { icon: "🚀", title: "18+", text: "GitHub Projects" },
  { icon: "👥", title: "Led QA Teams", text: "10–15 Members" },
  { icon: "⚡", title: "60%", text: "Faster Regression" },
  { icon: "📈", title: "40% → 80%", text: "Automation Coverage" },
  { icon: "⚛️", title: "React + Vite", text: "Frontend Development" },
];

const demoLinks = [
  {
    id: 1,
    icon: "🏗",
    title: "Automation Framework Overview",
    description:
      "Scalable Selenium framework architecture and best practices.",
    video:
      "/videos/demoVideos/Automation_Framework_Overview_And_Structure_Components_And_Best Practices.mp4",
  },
  {
    id: 2,
    icon: "🔗",
    title: "Jira Integration",
    description: "Automation framework integrated with Jira workflow.",
    video:
      "/videos/demoVideos/Build_Scalable_Automation_Framework_With_Jira_Integration.mp4",
  },
  {
    id: 3,
    icon: "⚙",
    title: "GitHub Actions CI/CD",
    description: "GitHub Actions pipeline with automated test execution.",
    video: "/videos/demoVideos/CI-CD-GitHubActions_Integration.mp4",
  },
];

function Hero() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <p className="hero-eyebrow">
            Senior QA Engineer • Lead SDET • Manual • Automation • API • Mobile
          </p>

          <h1>
            Hi, I'm <span>Nilava Pal</span>
          </h1>

          <h2>
            Senior QA Engineer helping teams prevent defects and ship reliable
            software.
          </h2>

          <p className="hero-description">
            I help SaaS, AI, web, and mobile teams improve software quality
            through requirement analysis, Manual & Exploratory Testing,
            Automation Testing, API Testing, Mobile Testing, and structured QA
            processes.
          </p>

          <div className="hero-buttons">
            <a
              href="https://qa-portfolio-nil.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="manual-qa-btn"
            >
              🧪 Explore Manual QA Portfolio
            </a>

            <a
              href="https://github.com/pnilava03"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.upwork.com/freelancers/~0171c0df5ee2c6f645"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Hire Me on Upwork
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="hero-media-card">
            <h3>👋 Quick Introduction</h3>

            <video controls preload="metadata">
              <source src="/videos/Intro_npal.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="hero-demo-links">
              <h3>🧪 Featured QA Demos</h3>

              {demoLinks.map((demo) => (
                <button
                  type="button"
                  className="demo-link"
                  key={demo.id}
                  onClick={() => setActiveVideo(demo.video)}
                >
                  <span>{demo.icon}</span>

                  <div>
                    <h4>{demo.title}</h4>
                    <p>{demo.description}</p>
                  </div>

                  <strong>›</strong>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="video-modal"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setActiveVideo(null)}
            >
              ×
            </button>

            <video controls autoPlay>
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;