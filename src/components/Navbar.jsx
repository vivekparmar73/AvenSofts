import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { services } from '../data/content'

const links = [
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/process', label: 'How We Work' },
  { to: '/tech', label: 'Tech Stack' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setMega(false) }, [pathname])

  return (
    <motion.header
      className={`nav ${scrolled || mega ? 'nav--scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease }}
    >
      <div className="nav__inner">
        <Link to="/" className="nav__brand" aria-label="AvenSofts home"><Logo size={28} /></Link>
        <nav className="nav__links" aria-label="Main">
          <div className="nav__drop" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
            <NavLink to="/services" className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
              Services <ChevronDown size={14} className={`nav__chev ${mega ? 'is-up' : ''}`} />
            </NavLink>
            <AnimatePresence>
              {mega && (
                <motion.div
                  className="mega"
                  initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
                  exit={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
                  transition={{ duration: 0.3, ease }}
                >
                  <div className="mega__grid">
                    {services.map((s) => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="mega__item">
                        <span className="mega__icon"><s.icon size={18} /></span>
                        <span><b>{s.title}</b><small>{s.short.split('.')[0]}.</small></span>
                      </Link>
                    ))}
                  </div>
                  <Link to="/services" className="mega__all">View all services <ArrowUpRight size={15} /></Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn--dark btn--sm nav__cta">
          Book a free call <ArrowUpRight size={16} />
        </Link>
        <button className="nav__burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
            exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
            transition={{ duration: 0.35 }}
            data-lenis-prevent
          >
            <NavLink to="/services" className="nav__mlink">Services</NavLink>
            <div className="nav__msub">
              {services.map((s) => <Link key={s.slug} to={`/services/${s.slug}`}><s.icon size={15} />{s.title}</Link>)}
            </div>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="nav__mlink">{l.label}</NavLink>
            ))}
            <Link to="/contact" className="btn btn--green">Book a free call <ArrowUpRight size={16} /></Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
