import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import CaseStudies from './pages/CaseStudies'
import CaseStudy from './pages/CaseStudy'
import Process from './pages/Process'
import Tech from './pages/Tech'
import About from './pages/About'
import Contact from './pages/Contact'
import { Privacy, Terms } from './pages/Legal'
import NotFound from './pages/NotFound'

let lenis

function useSmoothScroll() {
  useEffect(() => {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let id
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(pathname)
  useEffect(() => {
    const samePage = prevPath.current === pathname
    prevPath.current = pathname
    // On a new page, wait for the exit transition to swap content; same-page anchors scroll right away.
    const t = setTimeout(() => {
      const el = hash && document.querySelector(hash)
      if (el) lenis?.scrollTo(el, { offset: -100 })
      else if (!samePage) lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0)
    }, samePage ? 0 : 380)
    return () => clearTimeout(t)
  }, [pathname, hash])
  return null
}

const pageVariants = {
  initial: { opacity: 0, filter: 'blur(10px)', y: 16 },
  enter: {
    opacity: 1, filter: 'blur(0px)', y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    transitionEnd: { filter: 'none', transform: 'none' },
  },
  exit: { opacity: 0, filter: 'blur(10px)', y: -10, transition: { duration: 0.3 } },
}

export default function App() {
  useSmoothScroll()
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Navbar />
      <ScrollManager />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} variants={pageVariants} initial="initial" animate="enter" exit="exit">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudy />} />
            <Route path="/process" element={<Process />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  )
}
