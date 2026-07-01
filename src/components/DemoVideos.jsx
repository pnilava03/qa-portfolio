import "./DemoVideos.css";

const demoVideos = [
  {
    title: "Jenkins CI/CD Integration Demo",
    description:
      "Automation test execution triggered through Jenkins pipeline with reports and build status.",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
  },
  {
    title: "Dockerized Selenium Grid Demo",
    description:
      "Parallel browser execution using Selenium Grid with Docker containers.",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
  },
  {
    title: "UI + API Automation Framework Demo",
    description:
      "Hybrid Selenium Java and REST Assured framework execution with reporting.",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
  },
];

function DemoVideos() {
  return (
    <div className="demo-video-card">
      <h3>QA Automation Demo Videos</h3>

      <div className="demo-video-list">
        {demoVideos.map((video) => (
          <div className="demo-video-item" key={video.title}>
            <div className="demo-video-frame">
              <iframe
                src={video.videoUrl}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <h4>{video.title}</h4>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DemoVideos;