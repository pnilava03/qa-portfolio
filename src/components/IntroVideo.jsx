import "./IntroVideo.css";

function IntroVideo() {
  return (
    <section className="video-section" id="video">
      <div className="container">
        <h2 className="video-title">
          🎥 Watch My Introduction
        </h2>

        <div className="video-wrapper">
        <video controls>
          <source src="/videos/Intro_npal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </section>
  );
}

export default IntroVideo;