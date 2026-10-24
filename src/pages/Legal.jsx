import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { PageHero } from '../components/Sections'
import { site } from '../data/content'

const UPDATED = 'Oct 24, 2026'

const privacy = [
  {
    t: 'Information We Collect',
    intro: 'We collect the following types of information when you use AvenSofts services or our website:',
    defs: [
      ['Personal Information', 'Name, email address, phone number, company name and other details you share with us.'],
      ['Usage Data', 'How you interact with our website and services, including IP address, browser type, device and access times.'],
      ['Project Data', 'Any documents, data, credentials or content you share with us to deliver your project.'],
      ['Third-Party Data', 'Information received from third-party integrations, advertising platforms and analytics tools.'],
    ],
  },
  {
    t: 'How We Use Your Information',
    intro: 'We use the collected information to:',
    list: [
      'Provide, deliver and improve our software development and marketing services.',
      'Respond to enquiries and communicate project updates, support and service notifications.',
      'Personalise your experience and recommend relevant solutions.',
      'Enhance security and prevent fraudulent activity.',
      'Analyse trends and optimise website and service performance.',
    ],
  },
  {
    t: 'Data Sharing & Third-Party Services',
    list: [
      'We do not sell your personal data.',
      'We may share necessary data with trusted service providers (e.g. cloud hosting, AI processing, analytics, payment processing) only to deliver our services.',
      'We may disclose data if required by law or to protect our legal rights.',
    ],
  },
  {
    t: 'Client Project Data & Confidentiality',
    list: [
      'Data you provide for a project is used only for that project and treated as confidential.',
      'Where we use AI tools during development, we use providers and settings that do not train public models on your confidential data.',
      'On project completion, all project data and source code are handed over to you and can be deleted from our systems on request.',
    ],
  },
  {
    t: 'Data Storage & Security',
    list: [
      'Your data is stored securely using encryption and industry-standard security practices.',
      'We implement access controls so only authorised team members can access your data.',
      'While we strive to protect your data, no system is 100% secure. Please take precautions to safeguard your credentials.',
    ],
  },
  {
    t: 'Cookies & Tracking Technologies',
    list: [
      'We use cookies and similar technologies, including analytics and advertising pixels, to improve user experience and analyse website traffic.',
      'You can manage cookie preferences through your browser settings.',
    ],
  },
  {
    t: 'User Rights & Control',
    list: [
      'You have the right to access, update or delete your personal data.',
      'You can opt out of marketing communications at any time.',
      `To exercise any of these rights, contact us at ${site.email}.`,
    ],
  },
  {
    t: 'International Data Transfers',
    text: 'Your data may be processed outside your country of residence. We ensure appropriate safeguards are in place for such transfers.',
  },
  {
    t: 'Policy Updates',
    text: 'We may update this Privacy Policy periodically. Changes will be posted on this page, and continued use of our services signifies acceptance of the updated policy.',
  },
]

const terms = [
  { t: 'Acceptance of Terms', text: 'By accessing our website or engaging AvenSofts for services, you agree to these Terms of Service. If you do not agree, please do not use our services.' },
  { t: 'Our Services', text: 'AvenSofts provides software development, mobile app development, ERP and CRM systems, AI automation, custom AI systems, supply chain solutions, Meta marketing, SEO and AEO services. The specific scope of each engagement is defined in a proposal or statement of work.' },
  {
    t: 'Sprints & Payment',
    list: [
      'Work is delivered in one-week sprints with agreed outcomes.',
      'Invoices are raised after each sprint under our outcome-based model and are payable within the agreed terms.',
      'You may pause engagements between sprints as described in your agreement.',
      'Our first-sprint satisfaction guarantee applies as described in your proposal.',
    ],
  },
  { t: 'Intellectual Property', text: 'Upon full payment, all source code, designs and deliverables created specifically for you are owned by you. Pre-existing tools, libraries and open-source components remain subject to their own licences.' },
  { t: 'Client Responsibilities', text: 'You agree to provide timely feedback, access and information needed to deliver the project, and to ensure you have the rights to any content or data you share with us.' },
  { t: 'Confidentiality', text: 'Both parties agree to keep confidential any non-public business, technical or financial information shared during the engagement.' },
  { t: 'Limitation of Liability', text: 'To the maximum extent permitted by law, AvenSofts is not liable for indirect, incidental or consequential damages. Our total liability is limited to the fees paid for the services giving rise to the claim.' },
  { t: 'Changes to These Terms', text: 'We may update these Terms periodically. Continued use of our services after changes are posted constitutes acceptance of the updated Terms.' },
]

function LegalDoc({ sections, intro, outro }) {
  return (
    <section className="section section--flush-top">
      <div className="container legal">
        <Reveal className="legal__intro">
          <span className="legal__date">Last Updated: {UPDATED}</span>
          <p>{intro}</p>
        </Reveal>
        {sections.map((s, i) => (
          <Reveal key={s.t} className="legal__sec">
            <span className="legal__no">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h2>{s.t}</h2>
              {s.intro && <p>{s.intro}</p>}
              {s.text && <p>{s.text}</p>}
              {s.defs && (
                <dl>{s.defs.map(([k, v]) => <div key={k}><dt>{k}:</dt><dd>{v}</dd></div>)}</dl>
              )}
              {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
            </div>
          </Reveal>
        ))}
        <Reveal as="p" className="legal__outro">{outro}</Reveal>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description="How AvenSofts collects, uses, stores and protects your information." path="/privacy" />
      <PageHero eyebrow="Legal" title="Privacy Policy" accent={[1]}
        sub="Your privacy is important to us. Learn how we collect, use and protect your information." />
      <LegalDoc
        sections={privacy}
        intro="AvenSofts is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store and protect your information. By using our website and services, you agree to the collection and use of your data in accordance with this policy."
        outro="By using AvenSofts, you acknowledge that you have read, understood and agreed to this Privacy Policy."
      />
    </>
  )
}

export function Terms() {
  return (
    <>
      <Seo title="Terms of Service" description="The terms governing use of the AvenSofts website and services." path="/terms" />
      <PageHero eyebrow="Legal" title="Terms of Service" accent={[2]}
        sub="The ground rules for working together, written as plainly as we could." />
      <LegalDoc
        sections={terms}
        intro="These Terms of Service govern your use of the AvenSofts website and the services we provide. Specific engagements are also governed by the proposal or agreement signed for that project."
        outro={`Questions about these terms? Write to us at ${site.email}.`}
      />
    </>
  )
}
