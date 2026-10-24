# AvenSofts Website

Marketing site for AvenSofts: Software Delivery at Light Speed.

Built with React 18, Vite, Framer Motion, Recharts and Lenis.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview
```

## Editing content

- Company details, services, tech stack, FAQs and chart data: `src/data/content.js`
- Service page content: `src/data/serviceDetails.js`
- Case studies: `src/data/caseStudies.js`
- Domain for SEO: `site.url` in `src/data/content.js`, `index.html` and `public/sitemap.xml`

## Deploy

Works on Vercel (`vercel.json`) and Netlify (`public/_redirects`) with client-side routing.
