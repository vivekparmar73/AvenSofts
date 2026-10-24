import { Timer, Lightbulb, Briefcase, HeartHandshake, Target, Eye } from 'lucide-react'
import Reveal, { SectionHead, Counter } from '../components/Reveal'
import { PageHero, Marquee } from '../components/Sections'
import { TeamPie, DNARadar } from '../components/Charts'
import { LogoMark } from '../components/Logo'
import CTA from '../components/CTA'
import Seo from '../components/Seo'

const values = [
  { i: Timer, t: 'We understand urgency', x: 'In business, time is money. Every decision we make is about getting you to results faster without compromising quality.' },
  { i: Briefcase, t: 'Entrepreneur mindset', x: 'Our engineers think like founders. We care about your revenue, customers and margins, not only the code.' },
  { i: Lightbulb, t: 'Experts + young minds', x: 'Seasoned industry experts bring judgement; young engineers bring energy and the newest AI tools. Together we move fast and right.' },
  { i: HeartHandshake, t: 'Real-life solutions', x: 'We build for the shop floor, the warehouse and the sales team: practical software people actually use every day.' },
]

export default function About() {
  return (
    <>
      <Seo title="About Us: Experts, Young Minds, Entrepreneur Engineers" description="AvenSofts builds real-life software solutions with industry experts and young minds: engineers with an entrepreneur mindset who understand business urgency." path="/about" />
      <PageHero
        eyebrow="About us"
        title="About AvenSofts"
        accent={[1]}
        sub="We build real-life solutions with industry experts and young minds, engineers with an entrepreneur mindset who understand the urgency of your business."
      />

      <section className="section section--flush-top">
        <div className="container about-intro">
          <Reveal className="about-intro__card">
            <LogoMark size={260} color="rgba(31,122,99,0.09)" className="about-intro__mark" />
            <h2 className="h3">Software is no longer just for big companies.</h2>
            <p>
              AvenSofts was founded with one belief: every ambitious business, from a family-run distributor to a
              fast-growing startup, deserves world-class technology. Yet most business owners are stuck between slow,
              expensive agencies and tools that do not fit how they work.
            </p>
            <p>
              So we built a different kind of software company. An AI-native studio where experienced industry
              experts and sharp young engineers use AI at every step to design, build and launch real-life solutions
              in weeks, not months. We speak your language, respect your deadlines and measure success by your growth.
            </p>
          </Reveal>
          <div className="about-intro__side">
            <Reveal delay={0.1} className="mv">
              <span className="perk__icon"><Target size={18} /></span>
              <div><h4>Our mission</h4><p>Help every business go digital and AI-powered, at light speed and fair cost.</p></div>
            </Reveal>
            <Reveal delay={0.2} className="mv">
              <span className="perk__icon"><Eye size={18} /></span>
              <div><h4>Our vision</h4><p>A world where business owners focus on growth while intelligent systems run the operations.</p></div>
            </Reveal>
            <Reveal delay={0.3} className="mini-stats">
              <div><b><Counter to={1} suffix=" wk" /></b><span>Sprint cycle</span></div>
              <div><b><Counter to={48} suffix=" hr" /></b><span>To kickoff</span></div>
              <div><b><Counter to={100} suffix="%" /></b><span>IP ownership</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead center eyebrow="What drives us" title="Engineers who think like entrepreneurs" accent={[3, 4]} />
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={(i % 2) * 0.1} className="value">
                <span className="service-card__icon"><v.i size={22} /></span>
                <h3>{v.t}</h3>
                <p>{v.x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container chart-grid">
          <Reveal className="chart-card">
            <div className="chart-card__head"><div><h3>Our team mix</h3><p>Balanced for speed, intelligence and business sense</p></div></div>
            <TeamPie />
          </Reveal>
          <Reveal delay={0.12} className="chart-card">
            <div className="chart-card__head"><div><h3>Our delivery DNA</h3><p>AvenSofts vs industry average</p></div></div>
            <DNARadar height={300} />
          </Reveal>
        </div>
      </section>

      <div className="marquee-wrap">
        <p className="marquee-label">Industries we understand</p>
        <Marquee />
      </div>
      <CTA />
    </>
  )
}
