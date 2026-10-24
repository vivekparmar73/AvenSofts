import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, ChevronRight } from 'lucide-react'
import Reveal, { BlurText, Counter, SectionHead, spot } from '../components/Reveal'
import CaseCards from '../components/CaseCards'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Seo, { breadcrumbLd, faqLd } from '../components/Seo'
import NotFound from './NotFound'
import { services, site } from '../data/content'
import { serviceDetails } from '../data/serviceDetails'
import { caseStudies } from '../data/caseStudies'

const ease = [0.22, 1, 0.36, 1]

const steps = [
  { t: 'Discover', x: 'Free call to understand your business and goals.' },
  { t: 'Blueprint', x: 'Prototype, plan and sprint roadmap in week one.' },
  { t: 'Sprint', x: 'Weekly delivery with a live demo every Friday.' },
  { t: 'Launch & grow', x: 'Go-live, training, support and improvements.' },
]

// Service icon in the middle with the related technologies orbiting around it.
function Orbit({ icon: Icon, items }) {
  return (
    <motion.div className="orbit"
      initial={{ opacity: 0, scale: 0.9, filter: 'blur(16px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
      transition={{ duration: 1.1, delay: 0.3, ease }}>
      <div className="orbit__ring orbit__ring--1" />
      <div className="orbit__ring orbit__ring--2" />
      <div className="orbit__core"><Icon size={44} /></div>
      <div className="orbit__spin">
        {items.map((t, i) => (
          <span key={t} className="orbit__item" style={{ '--a': `${(360 / items.length) * i}deg` }}>
            <span>{t}</span>
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  const d = serviceDetails[slug]
  if (!s || !d) return <NotFound />
  const related = caseStudies.filter((c) => c.services.includes(slug)).slice(0, 3)
  const others = services.filter((x) => x.slug !== slug)

  return (
    <>
      <Seo
        title={`${s.title} Services`}
        description={d.seo}
        path={`/services/${slug}`}
        jsonLd={[
          breadcrumbLd([['Home', '/'], ['Services', '/services'], [s.title, `/services/${slug}`]]),
          {
            '@context': 'https://schema.org', '@type': 'Service', name: s.title, description: d.seo,
            provider: { '@type': 'Organization', name: 'AvenSofts', url: site.url }, areaServed: 'Worldwide',
          },
          faqLd(d.faqs),
        ]}
      />

      <section className="svc-hero">
        <div className="hero__grid-bg" />
        <div className="hero__orb hero__orb--2" />
        <div className="container svc-hero__inner">
          <div>
            <Reveal className="crumbs">
              <Link to="/">Home</Link><ChevronRight size={14} />
              <Link to="/services">Services</Link><ChevronRight size={14} />
              <span>{s.title}</span>
            </Reveal>
            <Reveal className="pill"><s.icon size={14} /> {s.title}</Reveal>
            <BlurText as="h1" className="h1 svc-hero__title" text={d.headline} accent={d.accent} />
            <Reveal as="p" delay={0.2} className="lead">{d.intro}</Reveal>
            <Reveal delay={0.3} className="svc-hero__actions">
              <Link to="/contact" className="btn btn--dark btn--lg">Get a free consultation <ArrowUpRight size={18} /></Link>
              <Link to={{ hash: '#build' }} className="btn btn--ghost btn--lg">What we build</Link>
            </Reveal>
          </div>
          <Orbit icon={s.icon} items={d.orbit} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container stats stats--3">
          {d.stats.map((st, i) => (
            <Reveal key={st.l} delay={i * 0.08} className="stat">
              <div className="stat__num"><Counter to={st.v} suffix={st.s} /></div>
              <p>{st.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="build">
        <div className="container">
          <SectionHead eyebrow="What we build" title={`${s.title}, done properly`} accent={[s.title.split(' ').length, s.title.split(' ').length + 1]}
            sub={s.short} />
          <div className="build-grid">
            {d.build.map((b, i) => (
              <Reveal key={b.t} delay={(i % 3) * 0.08} className="build-card spot" onMouseMove={spot}>
                <span className="build-card__no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{b.t}</h3>
                <p>{b.x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="How we deliver" title="From first call to live in weeks" accent={[5, 6]} />
          <div className="svc-steps">
            {steps.map((st, i) => (
              <Reveal key={st.t} delay={i * 0.1} className="svc-step">
                <span className="step__no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{st.t}</h3>
                <p>{st.x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container svc-split">
          <Reveal className="svc-box">
            <h3>What you get</h3>
            <ul className="checklist checklist--plain">
              {d.deliverables.map((x) => <li key={x}><Check size={15} />{x}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="svc-box svc-box--tint">
            <h3>Technologies we use</h3>
            <div className="cs-stack__chips">{d.stack.map((t) => <span key={t}>{t}</span>)}</div>
            <Link to="/tech" className="service-card__more">Full tech stack <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <div className="split-head">
              <SectionHead eyebrow="Case studies" title="See it working in real businesses" accent={[3, 4]} />
              <Reveal><Link to="/case-studies" className="btn btn--ghost">All case studies <ArrowUpRight size={16} /></Link></Reveal>
            </div>
            <CaseCards items={related} compact />
          </div>
        </section>
      )}

      <FAQ items={d.faqs} title={`${s.title} questions, answered`} accent={[s.title.split(' ').length + 1]} />

      <section className="section section--flush-top">
        <div className="container">
          <Reveal as="h2" className="others__title">Explore other services</Reveal>
          <div className="others">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 0.04}>
                <Link to={`/services/${o.slug}`} className="other">
                  <o.icon size={18} /> {o.title} <ArrowUpRight size={15} className="other__go" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
