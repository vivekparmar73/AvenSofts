import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowUpRight, Sparkles, Zap, Rocket, ShieldCheck, Bot, CheckCircle2, CalendarDays,
  Gauge, Handshake, PauseCircle, BadgeCheck,
} from 'lucide-react'
import Reveal, { BlurText, Counter, SectionHead } from '../components/Reveal'
import { ServicesGrid, TechTabs, Marquee } from '../components/Sections'
import { LaunchSpeedChart, GrowthChart, DNARadar } from '../components/Charts'
import BusinessFlow from '../components/BusinessFlow'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import CaseCards from '../components/CaseCards'
import Seo, { faqLd } from '../components/Seo'
import { processSteps, faqs } from '../data/content'
import { caseStudies } from '../data/caseStudies'

const ease = [0.22, 1, 0.36, 1]

function HeroVisual() {
  const bars = [
    { label: 'CRM & lead capture', v: 100 },
    { label: 'AI follow-up agent', v: 86 },
    { label: 'ERP billing module', v: 64 },
    { label: 'Mobile sales app', v: 38 },
  ]
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, y: 60, filter: 'blur(16px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
      transition={{ duration: 1, delay: 0.5, ease }}
    >
      <div className="dash">
        <div className="dash__bar">
          <span /><span /><span />
          <div className="dash__url">app.yourbusiness.com / sprint-04</div>
        </div>
        <div className="dash__body">
          <div className="dash__head">
            <div>
              <small>Sprint 04 · Week of delivery</small>
              <h4>Shipping your business OS</h4>
            </div>
            <span className="pill pill--green"><span className="pulse" /> Live</span>
          </div>
          <div className="dash__rows">
            {bars.map((b, i) => (
              <div key={b.label} className="dash__row">
                <div className="dash__row-top"><span>{b.label}</span><b>{b.v}%</b></div>
                <div className="dash__track">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: `${b.v}%` }}
                    transition={{ duration: 1.6, delay: 1.2 + i * 0.18, ease }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="dash__kpis">
            <div><small>Features shipped</small><b><Counter to={42} /></b></div>
            <div><small>Hours automated / mo</small><b><Counter to={310} /></b></div>
            <div><small>Lead response</small><b>&lt;<Counter to={2} /> min</b></div>
          </div>
        </div>
      </div>

      <motion.div className="float-chip float-chip--a"
        animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <CheckCircle2 size={18} /> <div><b>Deployed to production</b><small>Friday · 6:42 PM</small></div>
      </motion.div>
      <motion.div className="float-chip float-chip--b"
        animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <Bot size={18} /> <div><b>AI agent replied to 128 leads</b><small>while you slept</small></div>
      </motion.div>
    </motion.div>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // Parallax only the background glow; the content itself stays crisp while scrolling.
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section className="hero" ref={ref}>
      <div className="hero__grid-bg" />
      <motion.div className="hero__orb hero__orb--1" style={{ y: orbY }} />
      <motion.div className="hero__orb hero__orb--2" style={{ y: orbY }} />
      <div className="container hero__inner">
        <motion.span
          className="pill"
          initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          <Sparkles size={14} /> AI-powered era of software delivery
        </motion.span>
        <BlurText as="h1" className="h1 hero__title" delay={0.2}
          text="Software delivery at light speed." accent={[3, 4]} />
        <Reveal as="p" delay={0.55} className="hero__sub">
          AvenSofts builds the websites, apps, ERP, CRM and custom AI systems that run and grow your business,
          shipped in one-week sprints by AI-native engineers. No tech knowledge needed. Just ambition.
        </Reveal>
        <Reveal delay={0.7} className="hero__actions">
          <Link to="/contact" className="btn btn--dark btn--lg">Start your first sprint <ArrowUpRight size={18} /></Link>
          <Link to="/process" className="btn btn--ghost btn--lg">See how we work</Link>
        </Reveal>
        <Reveal delay={0.85} className="hero__trust">
          <span><Zap size={15} /> Live demo every week</span>
          <span><ShieldCheck size={15} /> First-sprint guarantee</span>
          <span><Rocket size={15} /> Start in 48 hours</span>
        </Reveal>
        <HeroVisual />
      </div>
    </section>
  )
}

const stats = [
  { to: 3, suffix: 'x', label: 'Faster delivery than traditional agencies' },
  { to: 1, suffix: ' week', label: 'Sprint cycle with a live demo every Friday' },
  { to: 40, suffix: '%', label: 'Average reduction in build cost with AI-assisted engineering' },
  { to: 100, suffix: '%', label: 'Code & IP ownership transferred to you' },
]

function Stats() {
  return (
    <section className="section section--tight">
      <div className="container stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="stat">
            <div className="stat__num"><Counter to={s.to} suffix={s.suffix} /></div>
            <p>{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function WhyFaster() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Why AvenSofts"
          title="AI-native engineering means you launch in weeks, not months"
          accent={[5, 6]}
          sub="Our engineers pair with AI on every line of code, test and document. You get senior-quality software at startup speed, and your business starts earning sooner."
        />
        <div className="chart-grid">
          <Reveal className="chart-card">
            <div className="chart-card__head">
              <div><h3>Time to launch</h3><p>Weeks from kickoff to go-live</p></div>
              <span className="pill pill--green">Up to 4x faster</span>
            </div>
            <LaunchSpeedChart />
            <small className="chart-note">Indicative comparison based on typical project scopes.</small>
          </Reveal>
          <Reveal delay={0.12} className="chart-card">
            <div className="chart-card__head">
              <div><h3>Operational capacity</h3><p>Orders handled per month, indexed to 100</p></div>
              <span className="pill pill--green">Compounding growth</span>
            </div>
            <GrowthChart />
            <small className="chart-note">Illustrative impact of connected systems and AI automation.</small>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ProcessPreview() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="split-head">
          <SectionHead
            eyebrow="How we work"
            title="A clear process from first call to scale"
            accent={[3]}
            sub="Six simple stages. You always know what is being built, why it matters and when it ships."
          />
          <Reveal delay={0.2}><Link to="/process" className="btn btn--ghost-light">Full process <ArrowUpRight size={16} /></Link></Reveal>
        </div>
        <div className="steps">
          {processSteps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08} className="step">
              <div className="step__top"><span className="step__no">{s.no}</span><span className="step__time">{s.time}</span></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <motion.span className="step__bar"
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.12, ease }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const week = [
  { d: 'Mon', t: 'Plan', x: 'We agree the outcomes for the week with you.' },
  { d: 'Tue', t: 'Build', x: 'AI-native engineers design and code the features.' },
  { d: 'Wed', t: 'Build', x: 'Daily progress updates on WhatsApp or Slack.' },
  { d: 'Thu', t: 'Test', x: 'Automated QA, security and speed checks.' },
  { d: 'Fri', t: 'Demo', x: 'Live demo of working software. You give feedback.' },
]

function SprintModel() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          center
          eyebrow="The sprint model"
          title="One week. Real progress. Every single time."
          accent={[3, 4]}
          sub="No long contracts or invisible progress. Each week ends with working software you can click, test and use."
        />
        <div className="week">
          {week.map((w, i) => (
            <Reveal key={w.d} delay={i * 0.08} className={`week__day ${w.t === 'Demo' ? 'is-demo' : ''}`}>
              <span className="week__d">{w.d}</span>
              <h4>{w.t}</h4>
              <p>{w.x}</p>
            </Reveal>
          ))}
        </div>
        <div className="perks">
          {[
            { i: Handshake, t: 'Outcome-based billing', x: 'Billed after each sprint, for outcomes delivered.' },
            { i: PauseCircle, t: 'Pause anytime', x: 'Flexible pause options. No lock-in contracts.' },
            { i: BadgeCheck, t: 'First-sprint guarantee', x: 'Not satisfied with sprint one? You do not pay.' },
            { i: CalendarDays, t: 'Weekly demos', x: 'See and test real software every Friday.' },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08} className="perk">
              <span className="perk__icon"><p.i size={20} /></span>
              <div><h4>{p.t}</h4><p>{p.x}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function DeliveryDNA() {
  const points = [
    { i: Gauge, t: 'Built for urgency', x: 'We understand that in business, every week of delay costs revenue.' },
    { i: Sparkles, t: 'AI in every step', x: 'From planning to testing, AI multiplies what each engineer delivers.' },
    { i: ShieldCheck, t: 'Enterprise-grade quality', x: 'Secure, scalable architecture reviewed by senior industry experts.' },
  ]
  return (
    <section className="section section--tint">
      <div className="container dna">
        <div>
          <SectionHead
            eyebrow="Our delivery DNA"
            title="Speed without cutting corners"
            accent={[2, 3, 4]}
            sub="Fast is useless if it breaks. We combine experienced industry experts with sharp young engineers to deliver software that is fast to build and built to last."
          />
          <div className="dna__points">
            {points.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.1} className="dna__point">
                <span className="perk__icon"><p.i size={18} /></span>
                <div><h4>{p.t}</h4><p>{p.x}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.15} className="chart-card">
          <div className="chart-card__head"><div><h3>How we compare</h3><p>AvenSofts vs typical agency delivery</p></div></div>
          <DNARadar />
        </Reveal>
      </div>
    </section>
  )
}

function CasesPreview() {
  return (
    <section className="section section--tint">
      <div className="container">
        <div className="split-head">
          <SectionHead
            eyebrow="Case studies"
            title="See how real businesses run on our systems"
            accent={[3, 4]}
            sub="From a pest control technician's van to a factory floor: step-by-step stories of ERP, CRM and AI in action."
          />
          <Reveal delay={0.2}><Link to="/case-studies" className="btn btn--ghost">All case studies <ArrowUpRight size={16} /></Link></Reveal>
        </div>
        <CaseCards items={caseStudies.slice(0, 3)} />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo
        description="AvenSofts is an AI-native software development company. Web development, mobile apps, custom ERP, CRM, AI automation, supply chain systems, Meta marketing, SEO and AEO delivered in one-week sprints."
        path="/"
        jsonLd={faqLd(faqs)}
      />
      <Hero />
      <div className="marquee-wrap">
        <p className="marquee-label">Building digital systems for every industry</p>
        <Marquee />
      </div>
      <Stats />
      <section className="section" id="services">
        <div className="container">
          <div className="split-head">
            <SectionHead
              eyebrow="What we do"
              title="Everything your business needs to go digital and grow"
              accent={[6, 7]}
              sub="From your first website to a fully automated business run by AI, one partner and one team."
            />
            <Reveal delay={0.2}><Link to="/services" className="btn btn--ghost">All services <ArrowUpRight size={16} /></Link></Reveal>
          </div>
          <ServicesGrid />
        </div>
      </section>
      <WhyFaster />
      <BusinessFlow />
      <CasesPreview />
      <ProcessPreview />
      <SprintModel />
      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="Tech stack"
            title="Expert in every stack that matters"
            accent={[4, 5]}
            sub="We excel in React/Next, Python and React Native, and we have deep expertise across all major technologies."
          />
          <TechTabs />
        </div>
      </section>
      <DeliveryDNA />
      <FAQ />
      <CTA />
    </>
  )
}
