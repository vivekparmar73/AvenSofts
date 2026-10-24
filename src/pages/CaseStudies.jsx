import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { SectionHead } from '../components/Reveal'
import { PageHero } from '../components/Sections'
import CaseCards from '../components/CaseCards'
import PillTabs from '../components/PillTabs'
import CTA from '../components/CTA'
import Seo, { breadcrumbLd } from '../components/Seo'
import { caseStudies } from '../data/caseStudies'
import { services } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

export default function CaseStudies() {
  const [filter, setFilter] = useState('all')
  const used = services.filter((s) => caseStudies.some((c) => c.services.includes(s.slug)))
  const items = filter === 'all' ? caseStudies : caseStudies.filter((c) => c.services.includes(filter))

  return (
    <>
      <Seo
        title="Case Studies: ERP, CRM, AI & App Solutions by Industry"
        description="See how AvenSofts ERP, CRM, mobile apps and AI automation run real businesses: pest control, distribution, clinics, real estate, manufacturing and education."
        path="/case-studies"
        jsonLd={breadcrumbLd([['Home', '/'], ['Case Studies', '/case-studies']])}
      />
      <PageHero
        eyebrow="Case studies"
        title="Real businesses. Real systems. Real growth."
        accent={[4, 5]}
        sub="Step inside how our ERP, CRM, apps and AI run day-to-day operations, from the technician in the field to the owner's dashboard."
      />
      <section className="section section--flush-top">
        <div className="container">
          <Reveal className="filters-wrap">
            <PillTabs className="filters" value={filter} onChange={setFilter}
              items={[{ slug: 'all', title: 'All' }, ...used].map((s) => ({ key: s.slug, label: s.title }))} />
          </Reveal>
          <AnimatePresence mode="wait">
            <motion.div key={filter}
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
              exit={{ opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.35 }}>
              <CaseCards items={items} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHead center eyebrow="Your industry next" title="Don't see your business here?" accent={[3, 4]}
            sub="Hospitality, logistics, retail, facility management, legal, agriculture: if your business has a process, we can digitise and automate it." />
        </div>
      </section>
      <CTA />
    </>
  )
}
