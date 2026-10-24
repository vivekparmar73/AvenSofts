import { motion } from 'framer-motion'
import { Code2, Braces, LayoutTemplate, Server, Smartphone, ShoppingBag, BrainCircuit, Cloud, Database } from 'lucide-react'
import Reveal, { SectionHead } from '../components/Reveal'
import { PageHero, TechTabs } from '../components/Sections'
import { techStacks } from '../data/content'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Seo from '../components/Seo'

const categoryIcons = {
  Languages: Braces,
  Frontend: LayoutTemplate,
  Backend: Server,
  'E-commerce & CMS': ShoppingBag,
  Mobile: Smartphone,
  'AI & Data': BrainCircuit,
  'Cloud & DevOps': Cloud,
  Databases: Database,
}

const ease = [0.22, 1, 0.36, 1]

// Every category laid out as its own card; chips appear one after another as the card scrolls in.
function TechMatrix() {
  return (
    <div className="tech-matrix">
      {Object.entries(techStacks).map(([cat, items], i) => {
        const Icon = categoryIcons[cat] || Code2
        return (
          <Reveal key={cat} delay={(i % 2) * 0.08} className="tech-cat">
            <div className="tech-cat__head">
              <span className="tech-cat__icon"><Icon size={20} /></span>
              <h3>{cat}</h3>
              <span className="tech-cat__count">{items.length}</span>
            </div>
            <motion.div
              className="tech-cat__chips"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ show: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } } }}
            >
              {items.map((t) => (
                <motion.span
                  key={t}
                  className="tech-cat__chip"
                  variants={{
                    hidden: { opacity: 0, y: 10, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease } },
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </Reveal>
        )
      })}
    </div>
  )
}

const pillars = [
  { i: Code2, t: 'Frontend', x: 'Pixel-perfect, lightning-fast interfaces with React, Next.js and modern CSS.' },
  { i: Server, t: 'Backend', x: 'Scalable APIs in Node.js, Python, Java, Go and PHP, built for millions of requests.' },
  { i: Smartphone, t: 'Mobile', x: 'Native Android & iOS or cross-platform with React Native and Flutter.' },
  { i: BrainCircuit, t: 'AI & Data', x: 'LLMs, RAG, agents and ML models integrated into your daily operations.' },
  { i: Cloud, t: 'Cloud & DevOps', x: 'AWS, GCP and Azure with CI/CD, containers and 24/7 monitoring.' },
  { i: Database, t: 'Data', x: 'SQL, NoSQL and real-time databases designed for speed and safety.' },
]

export default function Tech() {
  return (
    <>
      <Seo title="Tech Stack: React, Next.js, Python, Java, Go, Flutter & More" description="AvenSofts excels in React/Next, Python and React Native with expertise in Java, Golang, PHP, Node.js, Flutter, native iOS and Android, AI/ML and cloud." path="/tech" />
      <PageHero
        eyebrow="Tech stack"
        title="The right technology for every problem"
        accent={[3]}
        sub="We excel in React/Next, Python and React Native, and we have deep expertise across all technology stacks."
      />
      <section className="section section--flush-top">
        <div className="container">
          <TechTabs />
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHead center eyebrow="Complete stack" title="Every technology, section by section" accent={[3, 4, 5]}
            sub="Languages, frameworks, platforms and tools our engineers work with every day." />
          <TechMatrix />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="Engineering pillars" title="Full-stack, end to end" accent={[2, 3, 4]}
            sub="One team covering every layer, so nothing gets lost between vendors." />
          <div className="growth growth--3">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 0.1} className="growth__card">
                <span className="service-card__icon"><p.i size={22} /></span>
                <h3>{p.t}</h3>
                <p>{p.x}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  )
}
