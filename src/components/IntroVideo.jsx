import "./IntroVideo.css";

function IntroVideo() {
  return (
    <section className="video-section" id="video">
      <div className="container">
        <h2 className="video-title">
          🎥 Watch My Introduction
        </h2>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Intro Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default IntroVideo;