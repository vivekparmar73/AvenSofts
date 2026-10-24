import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarCheck } from 'lucide-react'
import Reveal, { BlurText } from './Reveal'
import { LogoMark } from './Logo'

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta">
          <div className="cta__glow" />
          <LogoMark light className="cta__mark" />
          <span className="pill pill--dark"><span className="pulse" /> Taking new projects this month</span>
          <BlurText as="h2" className="h2 cta__title" text="Your next big leap starts with one week." accent={[6]} />
          <p className="cta__sub">Book a free 30-minute call. We will map your business flow and show you what can be built, automated and launched in your first sprint, with no obligation.</p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--green btn--lg"><CalendarCheck size={18} /> Book a free strategy call</Link>
            <Link to="/process" className="btn btn--ghost-light btn--lg">See how we work <ArrowUpRight size={18} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
