export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-petals" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className={`floating-petal petal-${i}`}>✿</span>
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-avatar-wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/265255942?v=4"
            alt="Sakura Ichigo"
            className="hero-avatar"
            width={160}
            height={160}
          />
        </div>
        <p className="hero-greeting">✨ Hello, I'm</p>
        <h1 className="hero-name">Sakura Ichigo</h1>
        <p className="hero-alias">🎀 ichigirl</p>
        <p className="hero-tagline">
          Digital creator spreading joy through code and creativity
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">See My Work 🌸</a>
          <a href="#contact"  className="btn btn-secondary">Get In Touch 💕</a>
        </div>
      </div>
    </section>
  )
}
