import {
  Code2, ShoppingBag, Globe, Smartphone, Boxes, Users, Workflow, BrainCircuit, Truck, Megaphone, Search,
} from 'lucide-react'

// Company details used across the site. Replace with your real contact info.
export const site = {
  name: 'AvenSofts',
  tagline: 'Software Delivery at Light Speed',
  url: 'https://www.avensofts.com',
  email: 'hello@avensofts.com',
  phone: '+91 00000 00000',
  location: 'India · Serving clients worldwide',
}

export const services = [
  {
    slug: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    short: 'Software built from scratch around your exact business process, owned 100% by you.',
    points: ['Business process software', 'Internal tools & portals', 'Legacy system modernisation', 'APIs & system integrations'],
  },
  {
    slug: 'web',
    icon: Globe,
    title: 'Web Development',
    short: 'High-performance websites, portals and SaaS platforms that convert visitors into customers.',
    points: ['Business websites & landing pages', 'SaaS platforms & dashboards', 'E-commerce & booking portals', 'Next.js, React & headless CMS'],
  },
  {
    slug: 'app',
    icon: Smartphone,
    title: 'App Development',
    short: 'Native and cross-platform mobile apps your customers will love to open every day.',
    points: ['iOS & Android native apps', 'React Native & Flutter', 'Customer, field & delivery apps', 'App Store launch & ASO'],
  },
  {
    slug: 'shopify',
    icon: ShoppingBag,
    title: 'Shopify Development',
    short: 'High-converting Shopify stores, custom themes and apps that grow your online sales.',
    points: ['Custom Shopify themes', 'Shopify Plus & Hydrogen', 'Custom apps & integrations', 'Store migration & speed-up'],
  },
  {
    slug: 'erp',
    icon: Boxes,
    title: 'ERP for Your Business',
    short: 'One system for orders, inventory, billing, HR and accounts, built around how you work.',
    points: ['Inventory, purchase & sales', 'GST-ready billing & accounts', 'HR, payroll & attendance', 'Multi-branch & role access'],
  },
  {
    slug: 'crm',
    icon: Users,
    title: 'CRM Systems',
    short: 'Never lose a lead again. Capture, nurture and close with an AI-assisted sales pipeline.',
    points: ['Lead capture from every channel', 'WhatsApp & email follow-ups', 'Sales pipeline & forecasting', 'Customer 360° history'],
  },
  {
    slug: 'automation',
    icon: Workflow,
    title: 'AI Automations',
    short: 'Hand repetitive work to AI agents: data entry, replies, reports, approvals and more.',
    points: ['AI agents & chatbots', 'Document & invoice processing', 'Auto reports & alerts', 'Zapier-style workflow automation'],
  },
  {
    slug: 'custom-ai',
    icon: BrainCircuit,
    title: 'Custom AI Systems',
    short: 'AI trained on your business data that understands your process, customers and goals.',
    points: ['Private LLM assistants', 'Knowledge base & RAG search', 'Prediction & recommendation', 'AI business-flow manager'],
  },
  {
    slug: 'supply-chain',
    icon: Truck,
    title: 'Supply Chain Management',
    short: 'From vendor to doorstep. Plan, track and optimise every step of your supply chain.',
    points: ['Demand forecasting with AI', 'Vendor & procurement flows', 'Warehouse & dispatch tracking', 'Live logistics visibility'],
  },
  {
    slug: 'meta',
    icon: Megaphone,
    title: 'Meta Marketing',
    short: 'Facebook & Instagram campaigns that bring qualified leads straight into your CRM.',
    points: ['Ad strategy & creatives', 'Lead-gen funnels', 'Pixel & conversion tracking', 'Weekly performance reports'],
  },
  {
    slug: 'seo',
    icon: Search,
    title: 'SEO & AEO',
    short: 'Rank on Google and get recommended by ChatGPT, Gemini and Perplexity answers.',
    points: ['Technical & on-page SEO', 'Answer Engine Optimisation', 'Content & schema strategy', 'Local SEO & Google Business'],
  },
]

export const techStacks = {
  Languages: ['Python', 'Java', 'Golang', 'JavaScript', 'TypeScript', 'PHP', 'C#', 'C++', 'Ruby', 'Rust', 'Kotlin', 'Swift', 'Dart', 'Scala', 'R', 'SQL', 'Liquid', 'Bash'],
  Frontend: ['React.js', 'Next.js', 'Vue.js', 'Nuxt', 'Angular', 'Svelte', 'Tailwind CSS', 'Redux', 'Three.js'],
  Backend: ['Node.js', 'Express.js', 'NestJS', 'Django', 'FastAPI', 'Flask', 'Spring Boot', 'Laravel', '.NET Core', 'Ruby on Rails', 'Gin (Go)', 'GraphQL'],
  'E-commerce & CMS': ['Shopify', 'Shopify Plus', 'Shopify Hydrogen', 'WooCommerce', 'Magento', 'WordPress', 'Strapi', 'Sanity', 'Webflow'],
  Mobile: ['Native Android', 'iOS (Swift)', 'React Native', 'Flutter', 'Kotlin Multiplatform', 'Expo'],
  'AI & Data': ['OpenAI & Claude APIs', 'LangChain', 'LlamaIndex', 'PyTorch', 'TensorFlow', 'Vector DBs', 'Pandas'],
  'Cloud & DevOps': ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Vercel'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase', 'Elasticsearch'],
}

export const processSteps = [
  {
    no: '01',
    title: 'Discover',
    time: 'Day 1–2',
    text: 'A free business consultation. We map how your business runs today, where time and money leak, and what success looks like for you.',
    out: ['Business flow audit', 'Goals & KPIs', 'Opportunity map'],
  },
  {
    no: '02',
    title: 'Blueprint',
    time: 'Day 3–5',
    text: 'Our AI-assisted architects turn your goals into a clickable prototype, a technical plan and a sprint-by-sprint roadmap with clear outcomes.',
    out: ['Clickable prototype', 'Architecture plan', 'Sprint roadmap'],
  },
  {
    no: '03',
    title: 'Sprint Build',
    time: 'Every week',
    text: 'One-week focused sprints. AI-native engineers ship prioritised features and you see a live demo every Friday — no waiting months in the dark.',
    out: ['Weekly live demo', 'Working software', 'Progress report'],
  },
  {
    no: '04',
    title: 'Test & Harden',
    time: 'Continuous',
    text: 'Automated tests, security checks and performance tuning run on every change, so quality is built in rather than bolted on.',
    out: ['Automated QA', 'Security review', 'Speed optimisation'],
  },
  {
    no: '05',
    title: 'Launch',
    time: 'Go-live',
    text: 'We deploy to production, migrate your data, train your team and stay on call through launch week so nothing breaks your business.',
    out: ['Production deploy', 'Data migration', 'Team training'],
  },
  {
    no: '06',
    title: 'Grow & Automate',
    time: 'Ongoing',
    text: 'After launch we keep compounding: AI automations, SEO & AEO, Meta campaigns and new features driven by real usage data.',
    out: ['Monitoring & support', 'Growth marketing', 'New automations'],
  },
]

export const flowBefore = [
  { title: 'Leads lost in calls & WhatsApp', text: 'Enquiries scattered across phones, chats and diaries. Many never get a reply.', cost: 'Lost sales every week' },
  { title: 'Orders on Excel & paper', text: 'The same order is typed again and again by sales, store and accounts.', cost: 'Errors, rework & delays' },
  { title: 'Inventory guesswork', text: 'Purchases based on gut feeling, not real demand.', cost: 'Stock-outs or dead stock' },
  { title: 'Late invoices & follow-ups', text: 'Bills made days later and payments chased by phone.', cost: 'Cash stuck for weeks' },
  { title: 'Owner decides blind', text: 'Numbers arrive late, in different sheets, if at all.', cost: 'Slow, risky decisions' },
]

// Each step below is the fix for the flowBefore step at the same position.
export const flowAfter = [
  { title: 'Smart lead capture + AI follow-up', text: 'Website, Meta ads and WhatsApp feed one CRM. An AI agent replies instantly, 24/7.', tag: 'CRM + AI', win: 'Every enquiry answered in minutes' },
  { title: 'One-click order management', text: 'Orders are entered once from the app or portal and flow to store and accounts.', tag: 'ERP', win: 'Zero re-typing, zero errors' },
  { title: 'AI-powered supply chain', text: 'AI forecasts demand from your sales history and drafts purchase orders.', tag: 'Supply Chain', win: 'Right stock at the right time' },
  { title: 'Auto billing & collections', text: 'GST invoice and UPI payment link sent instantly, with automatic reminders.', tag: 'ERP + Automation', win: 'Get paid days faster' },
  { title: 'Live business dashboard', text: 'Sales, stock, cash and team performance live on your phone.', tag: 'Analytics', win: 'Decide with real-time numbers' },
]

export const faqs = [
  {
    q: 'What tech stack do you support?',
    a: 'We excel in React/Next, Python, and React Native but have expertise across all technology stacks, including Java, Golang, PHP, Node.js, Flutter and native iOS/Android.',
  },
  {
    q: 'How do you define a "Sprint"?',
    a: 'A Sprint is a one-week focused delivery cycle where our AI-native engineers build prioritised features aligned with your business goals. You get a live demo at the end of every sprint.',
  },
  {
    q: 'How does payment work?',
    a: 'We use an outcome-based model billed after each sprint, with flexible pause options and a satisfaction guarantee on your first sprint.',
  },
  {
    q: "I'm not a technical person. Can I still work with you?",
    a: 'Absolutely — most of our clients are business owners, not engineers. We speak in business outcomes, explain every decision in plain language and handle all the technology for you.',
  },
  {
    q: 'How quickly can you start?',
    a: 'Usually within 48 hours of the discovery call. Your blueprint is ready in the first week and working software follows from the first sprint.',
  },
  {
    q: 'Who owns the code and data?',
    a: 'You do, 100%. All source code, designs, data and intellectual property are transferred to you. No lock-in.',
  },
  {
    q: 'What is AEO?',
    a: 'Answer Engine Optimisation makes your business the one that AI assistants like ChatGPT, Gemini, Perplexity and Google AI Overviews recommend when customers ask questions.',
  },
  {
    q: 'Do you support the product after launch?',
    a: 'Yes. We offer monitoring, maintenance, feature sprints and growth retainers so your software keeps getting better as your business grows.',
  },
]

export const industries = [
  'Manufacturing', 'Retail & D2C', 'Healthcare', 'Logistics', 'Real Estate', 'Education',
  'FinTech', 'Hospitality', 'Distribution', 'Professional Services', 'Startups', 'E-commerce',
]

// Chart datasets. Values are indicative; replace with your own delivery metrics.
export const launchSpeed = [
  { name: 'Prototype', traditional: 6, aven: 1 },
  { name: 'MVP', traditional: 16, aven: 4 },
  { name: 'Full ERP / CRM', traditional: 36, aven: 12 },
  { name: 'AI Automation', traditional: 12, aven: 2 },
]

export const growthCurve = [
  { m: 'M1', manual: 100, automated: 100 },
  { m: 'M2', manual: 104, automated: 118 },
  { m: 'M3', manual: 107, automated: 139 },
  { m: 'M4', manual: 111, automated: 162 },
  { m: 'M5', manual: 114, automated: 188 },
  { m: 'M6', manual: 118, automated: 221 },
  { m: 'M7', manual: 121, automated: 254 },
  { m: 'M8', manual: 125, automated: 292 },
]

export const deliveryDNA = [
  { k: 'Speed', aven: 95, avg: 55 },
  { k: 'Quality', aven: 90, avg: 70 },
  { k: 'Transparency', aven: 96, avg: 50 },
  { k: 'Cost efficiency', aven: 88, avg: 52 },
  { k: 'Scalability', aven: 92, avg: 65 },
  { k: 'AI leverage', aven: 97, avg: 35 },
]

export const sprintVelocity = [
  { s: 'S1', features: 6 }, { s: 'S2', features: 9 }, { s: 'S3', features: 11 },
  { s: 'S4', features: 12 }, { s: 'S5', features: 14 }, { s: 'S6', features: 15 },
]

export const teamMix = [
  { name: 'AI-native engineers', value: 45 },
  { name: 'AI & data specialists', value: 18 },
  { name: 'Product designers', value: 14 },
  { name: 'Growth marketers', value: 11 },
  { name: 'Industry experts', value: 12 },
]
