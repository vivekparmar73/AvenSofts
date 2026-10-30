import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Sparkles, Zap, Rocket, ShieldCheck, Bot, CheckCircle2, CalendarDays,
  Gauge, Handshake, PauseCircle, BadgeCheck, PlayCircle, ReceiptText, PackageCheck, GitMerge,
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

const heroWords = ['websites', 'mobile apps', 'ERP systems', 'CRMs', 'AI agents', 'Shopify stores', 'custom software']

const feed = [
  { icon: ReceiptText, text: 'Invoice #1043 sent on WhatsApp' },
  { icon: Bot, text: 'AI agent booked a demo with a new lead' },
  { icon: PackageCheck, text: 'Low stock: purchase order drafted' },
  { icon: GitMerge, text: 'Feature "Bulk billing" merged & tested' },
]

// Cycles through items on an interval, swapping them with a short blur transition.
function useCycle(length, ms) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % length), ms)
    return () => clearInterval(id)
  }, [length, ms])
  return i
}

function RotatingWord() {
  const i = useCycle(heroWords.length, 2200)
  return (
    <motion.span layout className="hero__rotator" transition={{ layout: { duration: 0.45, ease } }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={heroWords[i]}
          className="hero__rotator-word"
          initial={{ y: '60%', opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
          exit={{ y: '-60%', opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease }}
        >
          {heroWords[i]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  )
}

function LiveFeed() {
  const i = useCycle(feed.length, 2800)
  const { icon: Icon, text } = feed[i]
  return (
    <div className="dash__feed">
      <span className="dash__feed-label"><span className="pulse" /> Live activity</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={text}
          className="dash__feed-item"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.35, ease }}
        >
          <Icon size={14} /> {text}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function HeroVisual({ progress }) {
  const bars = [
    { label: 'CRM & lead capture', v: 100 },
    { label: 'AI follow-up agent', v: 86 },
    { label: 'ERP billing module', v: 64 },
    { label: 'Mobile sales app', v: 38 },
  ]
  // The dashboard starts tilted back in 3D and flattens as the visitor scrolls.
  const rotateX = useTransform(progress, [0, 0.45], [16, 0])
  const scale = useTransform(progress, [0, 0.45], [0.94, 1])

  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.6, ease }}
    >
      <div className="hero-visual__glow" />
      <motion.div className="hero-visual__tilt" style={{ rotateX, scale }}>
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
            <LiveFeed />
            <div className="dash__rows">
              {bars.map((b, i) => (
                <div key={b.label} className="dash__row">
                  <div className="dash__row-top"><span>{b.label}</span><b>{b.v}%</b></div>
                  <div className="dash__track">
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: `${b.v}%` }}
                      transition={{ duration: 1.6, delay: 1.3 + i * 0.18, ease }}
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
      </motion.div>

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

// Thin light streaks shooting across the background: the "light speed" motif.
const streaks = [
  { top: 14, w: 180, d: 5.5, delay: 0 }, { top: 26, w: 260, d: 7, delay: 2.2 },
  { top: 38, w: 140, d: 4.6, delay: 1.1 }, { top: 52, w: 220, d: 6.2, delay: 3.4 },
  { top: 64, w: 160, d: 5, delay: 0.6 }, { top: 76, w: 240, d: 7.4, delay: 4.1 },
]

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // Parallax only the background glow; the content itself stays crisp while scrolling.
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 200])

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--hx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--hy', `${e.clientY - r.top}px`)
  }

  return (
    <section className="hero" ref={ref} onMouseMove={onMove}>
      <div className="hero__grid-bg" />
      <div className="hero__spot" />
      <div className="hero__streaks" aria-hidden="true">
        {streaks.map((s, i) => (
          <span key={i} style={{ top: `${s.top}%`, width: s.w, animationDuration: `${s.d}s`, animationDelay: `${s.delay}s` }} />
        ))}
      </div>
      <motion.div className="hero__orb hero__orb--1" style={{ y: orbY }} />
      <motion.div className="hero__orb hero__orb--2" style={{ y: orbY }} />
      <div className="container hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          <Link to="/services/automation" className="hero__badge">
            <span className="hero__badge-new">New</span>
            AI-powered era of software delivery
            <ArrowRight size={14} />
          </Link>
        </motion.div>
        <BlurText as="h1" className="h1 hero__title" delay={0.2}
          text="Software delivery at light speed." accent={[3, 4]} />
        <Reveal delay={0.5} className="hero__we-build">
          We build <RotatingWord /> for your business.
        </Reveal>
        <Reveal as="p" delay={0.6} className="hero__sub">
          Websites, apps, ERP, CRM and custom AI that run and grow your business, shipped in one-week sprints
          by AI-native engineers. No tech knowledge needed. Just ambition.
        </Reveal>
        <Reveal delay={0.75} className="hero__actions">
          <Link to="/contact" className="btn btn--dark btn--lg btn--shine">Start your first sprint <ArrowUpRight size={18} /></Link>
          <Link to="/process" className="btn btn--ghost btn--lg"><PlayCircle size={18} /> See how we work</Link>
        </Reveal>
        <Reveal delay={0.9} className="hero__trust">
          <span><Zap size={15} /> Live demo every week</span>
          <i />
          <span><ShieldCheck size={15} /> First-sprint guarantee</span>
          <i />
          <span><Rocket size={15} /> Start in 48 hours</span>
        </Reveal>
        <HeroVisual progress={scrollYProgress} />
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
