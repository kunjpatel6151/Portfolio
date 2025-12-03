export function HeroVideo() {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome Recruiter</h1>
        <p className="hero-subtitle">
          Discover My Skills, Projects & Experience
        </p>
      </div>
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        src="/videos/3-idiots.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
