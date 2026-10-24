import { Code2, Server, Smartphone, BrainCircuit, Cloud, Database } from 'lucide-react'
import Reveal, { SectionHead } from '../components/Reveal'
import { PageHero, TechTabs, Marquee } from '../components/Sections'
import { techStacks } from '../data/content'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Seo from '../components/Seo'

const pillars = [
  { i: Code2, t: 'Frontend', x: 'Pixel-perfect, lightning-fast interfaces with React, Next.js and modern CSS.' },
  { i: Server, t: 'Backend', x: 'Scalable APIs in Node.js, Python, Java, Go and PHP, built for millions of requests.' },
  { i: Smartphone, t: 'Mobile', x: 'Native Android & iOS or cross-platform with React Native and Flutter.' },
  { i: BrainCircuit, t: 'AI & Data', x: 'LLMs, RAG, agents and ML models integrated into your daily operations.' },
  { i: Cloud, t: 'Cloud & DevOps', x: 'AWS, GCP and Azure with CI/CD, containers and 24/7 monitoring.' },
  { i: Database, t: 'Data', x: 'SQL, NoSQL and real-time databases designed for speed and safety.' },
]

export default function Tech() {
  const all = Object.values(techStacks).flat()
  return (
    <>
      <Seo title="Tech Stack: React, Next.js, Python, Java, Go, Flutter & More" description="AvenSofts excels in React/Next, Python and React Native with expertise in Java, Golang, PHP, Node.js, Flutter, native iOS and Android, AI/ML and cloud." path="/tech" />
      <PageHero
        eyebrow="Tech stack"
        title="The right technology for every problem"
        accent={[3]}
        sub="We excel in React/Next, Python and React Native, and we have deep expertise across all technology stacks."
      />
      <div className="marquee-wrap marquee-wrap--plain">
        <Marquee items={all.slice(0, 24)} />
        <Marquee items={all.slice(24)} reverse />
      </div>
      <section className="section">
        <div className="container">
          <TechTabs />
        </div>
      </section>
      <section className="section section--tint">
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
