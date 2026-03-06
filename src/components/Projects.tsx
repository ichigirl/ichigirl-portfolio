const PROJECTS = [
  {
    title: 'Blossom UI',
    desc:  'A kawaii component library with soft pastel aesthetics.',
    tag:   'Coming Soon 🌸',
  },
  {
    title: 'Cherry Web',
    desc:  'Beautiful web experiences crafted with cherry blossom magic.',
    tag:   'In Bloom 🌼',
  },
  {
    title: 'Kawaii Tools',
    desc:  'Cute utilities and helpers to brighten your workflow.',
    tag:   'Sprouting 💫',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">💕 Projects &amp; Gallery 🌺</h2>
        <p className="section-subtitle">~ Blossom Projects ~</p>
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <div key={p.title} className="project-card">
              <span className="project-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
