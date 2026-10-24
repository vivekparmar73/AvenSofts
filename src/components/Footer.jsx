import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import { services, site } from '../data/content'
import { caseStudies } from '../data/caseStudies'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light height={32} />
            <p>AI-native software studio building web, mobile, ERP, CRM and AI systems for ambitious businesses, at light speed.</p>
            <Link to="/contact" className="btn btn--green">Start your first sprint <ArrowUpRight size={16} /></Link>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            {services.map((s) => <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}
          </div>
          <div className="footer__col">
            <h4>Case Studies</h4>
            {caseStudies.map((c) => <Link key={c.slug} to={`/case-studies/${c.slug}`}>{c.industry}</Link>)}
            <h4 className="footer__h4-gap">Company</h4>
            <Link to="/about">About AvenSofts</Link>
            <Link to="/process">How We Work</Link>
            <Link to="/tech">Tech Stack</Link>
          </div>
          <div className="footer__col">
            <h4>Get in touch</h4>
            <a href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone size={15} /> {site.phone}</a>
            <span><MapPin size={15} /> {site.location}</span>
            <h4 className="footer__h4-gap">Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>

        {/* Oversized brand wordmark, from the official logo file. */}
        <motion.div
          className="footer__big"
          aria-hidden="true"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/brand/logo-light.png" alt="" className="footer__big-img" draggable="false" />
        </motion.div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} AvenSofts. All rights reserved.</span>
          <span>Software Delivery at Light Speed.</span>
        </div>
      </div>
    </footer>
  )
}
