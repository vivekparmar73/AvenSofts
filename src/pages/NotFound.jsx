import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/Sections'
import Reveal from '../components/Reveal'

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page moved at light speed" accent={[4, 5]}
      sub="The page you are looking for does not exist, but your next project can.">
      <Reveal delay={0.3} className="center-actions">
        <Link to="/" className="btn btn--dark btn--lg">Back to home <ArrowUpRight size={18} /></Link>
      </Reveal>
    </PageHero>
  )
}
