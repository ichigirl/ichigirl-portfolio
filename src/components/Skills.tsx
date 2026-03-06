const SKILLS = [
  { name: 'JavaScript',  icon: '🟨' },
  { name: 'TypeScript',  icon: '🔷' },
  { name: 'React',       icon: '⚛️' },
  { name: 'HTML5',       icon: '🧡' },
  { name: 'CSS3',        icon: '💙' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Figma',       icon: '🎨' },
  { name: 'Node.js',     icon: '🟢' },
  { name: 'Git',         icon: '🔀' },
  { name: 'VS Code',     icon: '💜' },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">🌷 Skills &amp; Tools ✨</h2>
        <p className="section-subtitle">Technologies I love working with</p>
        <div className="skills-grid">
          {SKILLS.map(skill => (
            <div key={skill.name} className="skill-pill">
              <span className="skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
