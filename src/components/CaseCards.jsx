import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal, { Counter, spot } from './Reveal'
import { caseStudies } from '../data/caseStudies'

export default function CaseCards({ items = caseStudies, compact = false }) {
  return (
    <div className={`case-grid ${compact ? 'case-grid--compact' : ''}`}>
      {items.map((c, i) => {
        const Icon = c.icon
        const r = c.results[0]
        return (
          <Reveal key={c.slug} delay={(i % 3) * 0.08} className="case-card-wrap">
            <Link to={`/case-studies/${c.slug}`} className="case-card spot" onMouseMove={spot}>
              <div className="case-card__cover">
                <div className="case-card__grid" />
                <span className="case-card__icon"><Icon size={26} /></span>
                <div className="case-card__metric">
                  <b><Counter to={r.v} suffix={r.s} /></b>
                  <span>{r.l}</span>
                </div>
              </div>
              <div className="case-card__body">
                <span className="case-card__industry">{c.industry}</span>
                <h3>{c.title}</h3>
                {!compact && <p>{c.short}</p>}
                <div className="case-card__foot">
                  <span>{c.solution}</span>
                  <span className="case-card__go"><ArrowUpRight size={18} /></span>
                </div>
              </div>
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}
