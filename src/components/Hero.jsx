import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Hi, I am Nilava Pal</h1>

          <h2>
            Lead SDET | Selenium Java | API Testing | Manual QA | Mobile Testing
          </h2>

          <p>
            I have 10.5+ years of experience in Manual Testing, Automation Testing,
            API Testing, Mobile Testing, CI/CD integration and QA team leadership.
          </p>

          <div className="hero-highlights">

           <span>🏆 10.5+ Years Experience</span>

               <span>⭐ 100% Job Success</span>

               <span>🌟 3 × 5-Star Reviews</span>

               <span>👨‍💼 Led QA Teams (10–15)</span>

          </div>

          <div className="buttons">
            <a
              href="https://github.com/pnilava03"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.upwork.com/freelancers/~0171c0df5ee2c6f645"
              target="_blank"
              rel="noreferrer"
              className="outline-btn"
            >
              Hire Me on Upwork
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-video">
            <video controls>
                  <source src="/videos/Intro_npal.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;