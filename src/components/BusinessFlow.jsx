import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangle, ArrowUpRight, Check, Sparkles, TrendingDown,
  Inbox, ClipboardCheck, PackageSearch, ReceiptText, LayoutDashboard,
  PhoneMissed, FileSpreadsheet, HelpCircle, Hourglass, EyeOff,
} from 'lucide-react'
import Reveal, { SectionHead } from './Reveal'
import PillTabs from './PillTabs'
import { flowBefore, flowAfter } from '../data/content'

const ease = [0.22, 1, 0.36, 1]
const afterIcons = [Inbox, ClipboardCheck, PackageSearch, ReceiptText, LayoutDashboard]
const beforeIcons = [PhoneMissed, FileSpreadsheet, HelpCircle, Hourglass, EyeOff]

// Toggle between how a typical business runs today and the connected flow we build.
// "After" uses running dashed borders and connectors to show work flowing between systems;
// "before" uses still, broken dashes.
export default function BusinessFlow() {
  const [mode, setMode] = useState('after')
  const after = mode === 'after'
  const items = after ? flowAfter : flowBefore
  const icons = after ? afterIcons : beforeIcons

  return (
    <section className="section section--tint" id="flow">
      <div className="container">
        <SectionHead
          center
          eyebrow="Business flow"
          title="From scattered chaos to one connected system"
          accent={[4, 5]}
          sub="Switch views to see how each everyday problem is solved when your business runs on one connected, AI-powered flow."
        />

        <Reveal className="flow-toggle-wrap">
          <PillTabs
            className="flow-toggle"
            pillClass={after ? 'is-green' : ''}
            value={mode}
            onChange={setMode}
            items={[
              { key: 'before', label: <><AlertTriangle size={15} /> Your business today</> },
              { key: 'after', label: <><Sparkles size={15} /> With AvenSofts</>, className: 'flow-toggle__aven' },
            ]}
          />
        </Reveal>

        <div className={`flow flow--${mode}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              className="flow__track"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{ show: { transition: { staggerChildren: 0.1 } }, exit: { transition: { staggerChildren: 0.03 } } }}
            >
              {items.map((it, i) => {
                const Icon = icons[i]
                return (
                  <motion.div
                    key={it.title}
                    className="flow__step"
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                      exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
                    }}
                  >
                    <div className="flow__node">
                      <svg className="flow__border" aria-hidden="true">
                        <rect x="1" y="1" rx="19" ry="19" />
                      </svg>
                      <div className="flow__node-top">
                        <span className="flow__icon"><Icon size={18} /></span>
                        <span className="flow__no">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h4>{it.title}</h4>
                      <p className="flow__text">{it.text}</p>
                      <p className="flow__result">
                        {after ? <Check size={14} /> : <TrendingDown size={14} />}
                        {after ? it.win : it.cost}
                      </p>
                    </div>
                    {i < items.length - 1 && (
                      <div className="flow__link" aria-hidden="true">
                        <span className="flow__dash" />
                        <span className="flow__head" />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            className="flow__summary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            {after ? (
              <>
                <p><b>One connected flow.</b> Leads, orders, stock and payments move automatically from step to step, with AI doing the repetitive work.</p>
                <Link to="/case-studies/pest-control-erp" className="btn btn--ghost btn--sm">See it in a real business <ArrowUpRight size={15} /></Link>
              </>
            ) : (
              <>
                <p><b>Sound familiar?</b> When tools are disconnected, work stops between every step and someone has to push it along by hand.</p>
                <button className="btn btn--dark btn--sm" onClick={() => setMode('after')}><Sparkles size={15} /> See the AvenSofts fix</button>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
