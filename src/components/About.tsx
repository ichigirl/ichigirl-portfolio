const CODE_SNIPPET = `class CherryBlossomDreamer {
  constructor() {
    this.name    = 'ichigirl';
    this.passion =
      'Creating beautiful things';
    this.style   = 'Soft & Kawaii';
    this.favorite = [
      'sakura', 'pink', 'sparkles'
    ];
  }

  myStory() {
    return 'Digital creator ' +
      'spreading joy ✨';
  }
}

const me = new CherryBlossomDreamer();`

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">✿ About Me 🌸</h2>
        <p className="section-subtitle">A little kawaii creation ✨</p>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hi! I'm Sakura, also known as <strong>ichigirl</strong> — a creative
              developer passionate about aesthetic design and building beautiful
              web experiences. 💫
            </p>
            <p>
              I'm forever in love with pastel colors and the soft, kawaii aesthetic.
              I believe beautiful things should also work beautifully — bringing
              design and code together in harmony.
            </p>
            <ul className="about-facts">
              <li>🌸 Building beautiful web experiences</li>
              <li>💫 Forever in love with pastel colors</li>
              <li>🌼 Spreading kawaii energy everywhere</li>
              <li>🎀 Passionate about aesthetic design</li>
            </ul>
          </div>
          <div className="about-card">
            <div className="code-card-header">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
              <span className="code-filename">🌼 ichigirl.js</span>
            </div>
            <pre className="code-block"><code>{CODE_SNIPPET}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}
