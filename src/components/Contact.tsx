import { useState, type FormEvent } from 'react'

const WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL as string | undefined || "https://discord-webhooks.fox3000foxy.workers.dev/timeless"

async function sendToDiscord(name: string, email: string, message: string) {
  if (!WEBHOOK_URL) throw new Error('Discord webhook URL is not configured.')

  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      embeds: [
        {
          title: '🌸 New portfolio message!',
          color: 0xff1493, // deep pink
          fields: [
            { name: '✿ Name',    value: name,    inline: true },
            { name: '💌 Email',  value: email,   inline: true },
            { name: '🌸 Message', value: message, inline: false },
          ],
          footer: { text: 'ichigirl.dev contact form' },
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  })

  if (!res.ok) throw new Error(`Webhook error: ${res.status}`)
}

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await sendToDiscord(form.name, form.email, form.message)
      setSent(true)
    } catch {
      setError('Something went wrong 🌧️ Please try via email instead.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">🌸 Get In Touch 💖</h2>
        <p className="section-subtitle">Let's create something beautiful together!</p>
        <div className="contact-layout">

          <div className="contact-info">
            <a href="mailto:sichogo@furry-femboys.com" className="contact-link">
              <span className="contact-icon">📧</span>
              <span>sichogo@furry-femboys.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sakura-ichigo-6977593b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ichigirl"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">🐙</span>
              <span>GitHub</span>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="form-success">
                <p>🌸 Thank you! Your message bloomed beautifully~</p>
                <p>It'll be read with love! 💕</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label htmlFor="name">Your Name ✿</label>
                  <input
                    id="name" type="text" placeholder="Sakura..."
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Your Email 💌</label>
                  <input
                    id="email" type="email" placeholder="hello@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="message">Message 🌸</label>
                  <textarea
                    id="message" rows={5} placeholder="Write something lovely..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                  {loading ? 'Sending... 🌸' : 'Send Message 💕'}
                </button>
                {error && <p className="form-error">{error}</p>}
              </>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}
