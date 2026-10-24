import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, XCircle, ChevronRight, LayoutDashboard } from 'lucide-react'
import Reveal, { BlurText, Counter, SectionHead } from '../components/Reveal'
import { CompareBars, TrendArea } from '../components/Charts'
import CTA from '../components/CTA'
import Seo, { breadcrumbLd } from '../components/Seo'
import NotFound from './NotFound'
import { caseStudies, findCase } from '../data/caseStudies'
import { services, site } from '../data/content'

function DayFlow({ steps }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 22 })
  return (
    <div className="dayflow" ref={ref}>
      <div className="dayflow__rail"><motion.span style={{ scaleY: fill }} /></div>
      {steps.map((s, i) => (
        <Reveal key={s.t} className="dayflow__step">
          <span className="dayflow__no">{String(i + 1).padStart(2, '0')}</span>
          <div className="dayflow__card">
            <span className="dayflow__who">{s.who}</span>
            <h3>{s.t}</h3>
            <p>{s.x}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const c = findCase(slug)
  if (!c) return <NotFound />
  const Icon = c.icon
  const idx = caseStudies.indexOf(c)
  const next = caseStudies[(idx + 1) % caseStudies.length]
  const used = services.filter((s) => c.services.includes(s.slug))

  return (
    <>
      <Seo
        title={`${c.industry} Case Study: ${c.solution}`}
        description={c.short}
        path={`/case-studies/${c.slug}`}
        jsonLd={[
          breadcrumbLd([['Home', '/'], ['Case Studies', '/case-studies'], [c.industry, `/case-studies/${c.slug}`]]),
          {
            '@context': 'https://schema.org', '@type': 'Article', headline: c.title, description: c.short,
            author: { '@type': 'Organization', name: 'AvenSofts' },
            publisher: { '@type': 'Organization', name: 'AvenSofts', url: site.url },
          },
        ]}
      />

      <section className="cs-hero">
        <div className="hero__grid-bg" />
        <div className="hero__orb hero__orb--1" />
        <div className="container cs-hero__inner">
          <div>
            <Reveal className="crumbs">
              <Link to="/">Home</Link><ChevronRight size={14} />
              <Link to="/case-studies">Case Studies</Link><ChevronRight size={14} />
              <span>{c.industry}</span>
            </Reveal>
            <Reveal className="pill"><Icon size={14} /> {c.industry}</Reveal>
            <BlurText as="h1" className="h1 cs-hero__title" text={c.title} />
            <Reveal as="p" delay={0.2} className="lead">{c.short}</Reveal>
            <Reveal delay={0.3} className="cs-meta">
              <div><small>Solution</small><b>{c.solution}</b></div>
              <div><small>Timeline</small><b>{c.timeline}</b></div>
              <div><small>Team</small><b>{c.team}</b></div>
            </Reveal>
          </div>
          <Reveal delay={0.25} className="cs-results">
            <span className="cs-results__label">Impact</span>
            {c.results.map((r) => (
              <div key={r.l} className="cs-results__row">
                <b><Counter to={r.v} suffix={r.s} /></b>
                <span>{r.l}</span>
              </div>
            ))}
            <Icon size={180} className="cs-results__bg" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container cs-split">
          <div>
            <SectionHead eyebrow="The challenge" title="Growing fast, held back by manual work" accent={[4, 5, 6]} />
            <Reveal as="p" className="cs-text">{c.challenge}</Reveal>
          </div>
          <div className="pains">
            {c.pains.map((p, i) => (
              <Reveal key={p} delay={i * 0.06} className="pain"><XCircle size={18} />{p}</Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead center eyebrow="The solution" title={`One connected system: ${c.solution}`} accent={[1, 2]}
            sub="Each module was delivered in weekly sprints, so the team started using the system from week two." />
          <div className="modules">
            {c.modules.map((m, i) => (
              <Reveal key={m} delay={(i % 4) * 0.06} className="module">
                <span>{String(i + 1).padStart(2, '0')}</span>{m}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cs-flow">
          <div className="cs-flow__head">
            <SectionHead eyebrow="How it works" title="A day in the business, step by step" accent={[3, 4]}
              sub="Follow one job from the first customer touchpoint all the way to the owner's dashboard." />
          </div>
          <DayFlow steps={c.flow} />
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <Reveal className="cs-table">
            <h3>{c.table.title}</h3>
            <div className="cs-table__scroll">
              <table>
                <thead><tr>{c.table.cols.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {c.table.rows.map((r) => (
                    <tr key={r[0]}>{r.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Owner's view" title="Everything the owner tracks, live" accent={[4, 5]}
            sub="One screen on phone or laptop. No calls, no spreadsheets, no waiting for reports." />
          <Reveal className="owner-dash">
            <div className="owner-dash__bar"><LayoutDashboard size={16} /> Owner Dashboard <span className="pill pill--dark"><span className="pulse" /> Live</span></div>
            <div className="owner-dash__tiles">
              {c.dashboard.map((d) => <div key={d.l}><small>{d.l}</small><b>{d.v}</b></div>)}
            </div>
            <div className="owner-dash__chart">
              <small>{c.trendLabel}</small>
              <TrendArea data={c.trend} name={c.trendLabel} dark height={240} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container cs-impact">
          <Reveal className="chart-card">
            <div className="chart-card__head"><div><h3>Before vs after</h3><p>Key operating metrics</p></div></div>
            <CompareBars data={c.compare} />
            <small className="chart-note">Illustrative case study; figures are indicative of typical implementations.</small>
          </Reveal>
          <div className="cs-impact__side">
            <Reveal className="outcome">
              <span className="eyebrow"><span className="eyebrow__dot" />The outcome</span>
              <p>{c.outcome}</p>
            </Reveal>
            <Reveal delay={0.1} className="cs-stack">
              <h4>Built with</h4>
              <div className="cs-stack__chips">{c.stack.map((t) => <span key={t}>{t}</span>)}</div>
              <h4>Services involved</h4>
              <div className="cs-stack__links">
                {used.map((s) => <Link key={s.slug} to={`/services/${s.slug}`}>{s.title} <ArrowUpRight size={14} /></Link>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <Reveal>
            <Link to={`/case-studies/${next.slug}`} className="next-case">
              <small>Next case study</small>
              <h3>{next.title}</h3>
              <span className="next-case__go"><ArrowUpRight size={28} /></span>
            </Link>
          </Reveal>
          <Reveal className="center-actions">
            <Link to="/case-studies" className="btn btn--ghost"><ArrowLeft size={16} /> All case studies</Link>
          </Reveal>
        </div>
      </section>
      <CTA />
    </>
  )
}
