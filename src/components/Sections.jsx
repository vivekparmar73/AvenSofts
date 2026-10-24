import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import Reveal, { BlurText, spot } from './Reveal'
import PillTabs from './PillTabs'
import { services, techStacks, processSteps, industries } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

export function ServicesGrid({ detailed = false }) {
  return (
    <div className={`services-grid ${detailed ? 'services-grid--detailed' : ''}`}>
      {services.map((s, i) => {
        const Icon = s.icon
        return (
          <Reveal key={s.slug} delay={(i % 3) * 0.08} className="service-card spot" id={s.slug} onMouseMove={spot}>
            <div className="service-card__top">
              <span className="service-card__icon"><Icon size={22} /></span>
              <span className="service-card__no">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.short}</p>
            {detailed && (
              <ul className="checklist">
                {s.points.map((p) => <li key={p}><Check size={15} />{p}</li>)}
              </ul>
            )}
            <Link to={`/services/${s.slug}`} className="service-card__more stretched">
              {detailed ? 'View service details' : 'Explore'} <ArrowUpRight size={15} />
            </Link>
            <span className="service-card__shine" />
          </Reveal>
        )
      })}
    </div>
  )
}

export function TechTabs() {
  const tabs = Object.keys(techStacks)
  const [tab, setTab] = useState(tabs[0])
  return (
    <div className="tech">
      <Reveal className="tech__tabs-wrap">
        <PillTabs className="tech__tabs" value={tab} onChange={setTab} items={tabs.map((t) => ({ key: t, label: t }))} />
      </Reveal>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="tech__grid"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        >
          {techStacks[tab].map((t) => (
            <motion.div
              key={t}
              className="tech__chip"
              variants={{
                hidden: { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
                show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease } },
                exit: { opacity: 0, filter: 'blur(6px)', transition: { duration: 0.2 } },
              }}
            >
              <span className="tech__dot" />{t}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function ProcessTimeline() {
  return (
    <div className="timeline">
      <div className="timeline__rail"><motion.span
        className="timeline__fill"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 2.4, ease }}
      /></div>
      {processSteps.map((s, i) => (
        <Reveal key={s.no} delay={0.05} className={`timeline__item ${i % 2 ? 'is-right' : ''}`}>
          <span className="timeline__dot">{s.no}</span>
          <div className="timeline__card">
            <div className="timeline__meta"><span>{s.time}</span></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="timeline__outs">
              {s.out.map((o) => <span key={o}><Check size={13} /> {o}</span>)}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function Marquee({ items = industries, reverse = false }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee ${reverse ? 'marquee--rev' : ''}`}>
      <div className="marquee__track">
        {row.map((t, i) => <span key={i} className="marquee__item"><i />{t}</span>)}
      </div>
    </div>
  )
}

export function PageHero({ eyebrow, title, accent, sub, children }) {
  return (
    <section className="page-hero">
      <div className="hero__grid-bg" />
      <div className="container">
        <div className="section-head section-head--center">
          {eyebrow && <Reveal className="eyebrow"><span className="eyebrow__dot" />{eyebrow}</Reveal>}
          <BlurText as="h1" text={title} accent={accent} className="h1" />
          {sub && <Reveal delay={0.25} as="p" className="lead">{sub}</Reveal>}
        </div>
        {children}
      </div>
    </section>
  )
}
