import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'
import { faqs } from '../data/content'

// Answers expand with a CSS grid-rows transition, which animates to the content's real height smoothly.
export default function FAQ({ items = faqs, title = 'Questions business owners ask us', accent = [3, 4], eyebrow = 'FAQ' }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="container faq">
        <SectionHead eyebrow={eyebrow} title={title} accent={accent}
          sub="Straight answers, no jargon. Can't find yours? Ask us on a free call." />
        <div className="faq__list">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.03} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button className="faq__q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  <span>{f.q}</span>
                  <span className="faq__icon"><Plus size={18} /></span>
                </button>
                <div className="faq__a" role="region">
                  <div className="faq__a-inner"><p>{f.a}</p></div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
