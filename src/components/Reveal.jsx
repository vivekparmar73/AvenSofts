import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]
const viewport = { once: true, amount: 0.12, margin: '0px 0px -40px 0px' }

// Content starts blurred and transparent, then sharpens into place as it scrolls into view.
// The filter is dropped entirely once the animation ends so text never stays soft.
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div', ...rest }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' } }}
      viewport={viewport}
      transition={{ duration: 0.7, delay, ease }}
      {...rest}
    >
      {children}
    </M>
  )
}

export function BlurText({ text, className = '', delay = 0, as = 'h2', accent = [] }) {
  const M = motion[as]
  const words = text.split(' ')
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ staggerChildren: 0.045, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className={`bw ${accent.includes(i) ? 'serif-accent' : ''}`}
          variants={{
            hidden: { opacity: 0, y: '0.3em', filter: 'blur(10px)' },
            show: { opacity: 1, y: 0, filter: 'blur(0px)', transitionEnd: { filter: 'none' }, transition: { duration: 0.6, ease } },
          }}
        >
          {w}{i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </M>
  )
}

export function Counter({ to, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration, ease, onUpdate: (v) => setVal(v) })
    return () => c.stop()
  }, [inView, to, duration])
  const shown = Number.isInteger(to) ? Math.round(val) : val.toFixed(1)
  return <span ref={ref}>{prefix}{shown}{suffix}</span>
}

export function SectionHead({ eyebrow, title, accent = [], sub, center = false }) {
  return (
    <div className={`section-head ${center ? 'section-head--center' : ''}`}>
      {eyebrow && <Reveal className="eyebrow"><span className="eyebrow__dot" />{eyebrow}</Reveal>}
      <BlurText text={title} accent={accent} className="h2" />
      {sub && <Reveal delay={0.1} as="p" className="lead">{sub}</Reveal>}
    </div>
  )
}

// Mouse-follow spotlight for cards: sets --mx/--my used by .spot::before in CSS.
export function spot(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}
