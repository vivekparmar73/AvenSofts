import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react'
import Reveal from '../components/Reveal'
import { PageHero } from '../components/Sections'
import FAQ from '../components/FAQ'
import { services, site } from '../data/content'
import Seo from '../components/Seo'

const budgets = ['< $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not sure yet']

export default function Contact() {
  const [picked, setPicked] = useState([])
  const [budget, setBudget] = useState('')
  const [sent, setSent] = useState(false)

  const toggle = (t) => setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]))

  // No backend yet: compose an email to the team with the form contents.
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Phone: ${f.get('phone')}`,
      `Company: ${f.get('company')}`,
      `Interested in: ${picked.join(', ') || '-'}`,
      `Budget: ${budget || '-'}`,
      '',
      f.get('message'),
    ].join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('New project enquiry from ' + f.get('name'))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <Seo title="Contact Us: Book a Free Strategy Call" description="Tell us about your business and book a free 30-minute strategy call with AvenSofts. We reply within one working day." path="/contact" />
      <PageHero
        eyebrow="Contact"
        title="Let's build something great together"
        accent={[4, 5]}
        sub="Tell us about your business. We reply within one working day with ideas, not a sales pitch."
      />
      <section className="section section--flush-top">
        <div className="container contact">
          <Reveal className="contact__form-wrap">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" className="contact__ok"
                  initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }}>
                  <CheckCircle2 size={48} />
                  <h3>Thank you!</h3>
                  <p>Your email app should open with your enquiry ready to send. We will get back to you within one working day.</p>
                  <button className="btn btn--ghost" onClick={() => setSent(false)}>Send another</button>
                </motion.div>
              ) : (
                <motion.form key="form" className="contact__form" onSubmit={submit} exit={{ opacity: 0, filter: 'blur(10px)' }}>
                  <div className="field-row">
                    <label className="field"><span>Your name *</span><input name="name" required placeholder="Full name" /></label>
                    <label className="field"><span>Work email *</span><input name="email" type="email" required placeholder="you@company.com" /></label>
                  </div>
                  <div className="field-row">
                    <label className="field"><span>Phone / WhatsApp</span><input name="phone" placeholder="+91 ..." /></label>
                    <label className="field"><span>Company</span><input name="company" placeholder="Company name" /></label>
                  </div>
                  <div className="field">
                    <span>What can we help with?</span>
                    <div className="chips">
                      {services.map((s) => (
                        <button type="button" key={s.slug} className={`chip ${picked.includes(s.title) ? 'is-on' : ''}`} onClick={() => toggle(s.title)}>
                          {s.title}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="field">
                    <span>Estimated budget</span>
                    <div className="chips">
                      {budgets.map((b) => (
                        <button type="button" key={b} className={`chip ${budget === b ? 'is-on' : ''}`} onClick={() => setBudget(b)}>{b}</button>
                      ))}
                    </div>
                  </div>
                  <label className="field"><span>Tell us about your business *</span>
                    <textarea name="message" required rows={5} placeholder="What does your business do, and what would you like to build or improve?" />
                  </label>
                  <button className="btn btn--dark btn--lg btn--block" type="submit">Send enquiry <Send size={17} /></button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          <div className="contact__side">
            <Reveal delay={0.1} className="contact__card contact__card--dark">
              <Clock size={22} />
              <h3>Free 30-minute strategy call</h3>
              <p>We will map your current business flow, find quick wins and outline what your first sprint could deliver.</p>
            </Reveal>
            <Reveal delay={0.2} className="contact__card">
              <a href={`mailto:${site.email}`}><Mail size={18} /><div><small>Email</small>{site.email}</div></a>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone size={18} /><div><small>Phone / WhatsApp</small>{site.phone}</div></a>
              <span><MapPin size={18} /><div><small>Location</small>{site.location}</div></span>
            </Reveal>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  )
}
