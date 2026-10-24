import { Link } from 'react-router-dom'
import { ArrowUpRight, Megaphone, Search, Bot } from 'lucide-react'
import Reveal, { SectionHead } from '../components/Reveal'
import { PageHero, ServicesGrid } from '../components/Sections'
import BusinessFlow from '../components/BusinessFlow'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Seo from '../components/Seo'

const bundles = [
  {
    t: 'Launch',
    for: 'For new businesses & startups',
    items: ['Brand website or Shopify store', 'Mobile app (iOS & Android)', 'SEO & AEO foundation', 'Meta ads launch campaign'],
  },
  {
    t: 'Operate',
    for: 'For growing businesses',
    items: ['Custom ERP & CRM', 'Supply chain & inventory flows', 'Team & field apps', 'Live business dashboards'],
    featured: true,
  },
  {
    t: 'Automate',
    for: 'For scaling businesses & enterprises',
    items: ['AI agents for sales & support', 'Custom AI on your business data', 'AI business-flow manager', 'Predictive demand & analytics'],
  },
]

export default function Services() {
  return (
    <>
      <Seo title="Software Development Services: Web, App, ERP, CRM & AI" description="Web development, mobile app development, custom ERP, CRM, AI automation, custom AI systems, supply chain software, Meta marketing, SEO and AEO from one AI-native team." path="/services" />
      <PageHero
        eyebrow="Services"
        title="Technology that grows your business"
        accent={[3, 4, 5]}
        sub="Web, mobile, ERP, CRM, AI automation, supply chain and growth marketing: one AI-native team for every step of your digital journey."
      />
      <section className="section section--flush-top">
        <div className="container"><ServicesGrid detailed /></div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead center eyebrow="Solutions by stage" title="Wherever you are, we meet you there" accent={[4, 5, 6]}
            sub="Not sure what you need? Pick your stage and we will shape the right combination for you." />
          <div className="bundles">
            {bundles.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.1} className={`bundle ${b.featured ? 'is-featured' : ''}`}>
                {b.featured && <span className="bundle__badge">Most popular</span>}
                <h3>{b.t}</h3>
                <p className="bundle__for">{b.for}</p>
                <ul>{b.items.map((x) => <li key={x}>{x}</li>)}</ul>
                <Link to="/contact" className={`btn ${b.featured ? 'btn--green' : 'btn--ghost'}`}>Talk to us <ArrowUpRight size={16} /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Growth engine" title="Built, then found. Software plus marketing." accent={[4, 5]}
            sub="Great software needs customers. Our growth team makes sure the right people find you on Google, Meta and AI assistants." />
          <div className="growth">
            {[
              { i: Megaphone, t: 'Meta Marketing', x: 'Facebook and Instagram campaigns with lead forms wired straight into your CRM, so every lead is tracked and followed up automatically.' },
              { i: Search, t: 'SEO', x: 'Technical SEO, fast pages, local SEO and content that ranks for what your customers actually search.' },
              { i: Bot, t: 'AEO', x: 'Answer Engine Optimisation so ChatGPT, Gemini, Perplexity and Google AI Overviews recommend your business by name.' },
            ].map((g, i) => (
              <Reveal key={g.t} delay={i * 0.1} className="growth__card">
                <span className="service-card__icon"><g.i size={22} /></span>
                <h3>{g.t}</h3>
                <p>{g.x}</p>
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
