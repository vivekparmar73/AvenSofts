import { MessageSquare, Eye, FileCheck2, Users } from 'lucide-react'
import Reveal, { SectionHead } from '../components/Reveal'
import { PageHero, ProcessTimeline } from '../components/Sections'
import { VelocityChart, LaunchSpeedChart } from '../components/Charts'
import BusinessFlow from '../components/BusinessFlow'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Seo from '../components/Seo'

const roles = [
  { who: 'You', does: ['Share your goals & business knowledge', 'Join a 30-min weekly demo', 'Give feedback & approve priorities'] },
  { who: 'AvenSofts', does: ['Plan, design, build & test', 'Handle all technical decisions', 'Deploy, train & support your team'] },
]

const transparency = [
  { i: MessageSquare, t: 'Daily updates', x: 'Short progress notes on WhatsApp, Slack or email.' },
  { i: Eye, t: 'Live staging link', x: 'Click through your product as it is being built.' },
  { i: FileCheck2, t: 'Sprint reports', x: 'What shipped, what is next, and the business impact.' },
  { i: Users, t: 'Dedicated lead', x: 'One point of contact who knows your business.' },
]

export default function Process() {
  return (
    <>
      <Seo title="How We Work: One-Week Sprints" description="Our six-stage process: discover, blueprint, weekly sprint builds with live demos, testing, launch and growth. Transparent, fast and built for business owners." path="/process" />
      <PageHero
        eyebrow="How we work"
        title="From idea to impact, one sprint at a time"
        accent={[2, 3]}
        sub="A proven six-stage process designed for business owners: simple, transparent and fast."
      />
      <section className="section section--flush-top">
        <div className="container"><ProcessTimeline /></div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead center eyebrow="Momentum" title="Velocity that compounds sprint after sprint" accent={[0]}
            sub="As our engineers and AI tooling learn your business, every sprint delivers more than the last." />
          <div className="chart-grid">
            <Reveal className="chart-card">
              <div className="chart-card__head"><div><h3>Features shipped per sprint</h3><p>Typical first six sprints</p></div></div>
              <VelocityChart />
            </Reveal>
            <Reveal delay={0.12} className="chart-card">
              <div className="chart-card__head"><div><h3>Weeks to launch</h3><p>Traditional vs AvenSofts</p></div></div>
              <LaunchSpeedChart height={260} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Who does what" title="You run the business. We run the tech." accent={[5, 6, 7]} />
          <div className="roles">
            {roles.map((r, i) => (
              <Reveal key={r.who} delay={i * 0.1} className={`role ${i ? 'role--us' : ''}`}>
                <h3>{r.who}</h3>
                <ul>{r.does.map((d) => <li key={d}>{d}</li>)}</ul>
              </Reveal>
            ))}
          </div>
          <div className="perks">
            {transparency.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08} className="perk">
                <span className="perk__icon"><p.i size={20} /></span>
                <div><h4>{p.t}</h4><p>{p.x}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BusinessFlow />
      <FAQ />
      <CTA />
    </>
  )
}
