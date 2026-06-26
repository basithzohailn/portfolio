# Portfolio Website

Personal portfolio for Basith Nijamudeen — a single-page site showcasing projects, experience, credentials, and tech stack.

## Stack

- **Astro 7** (static site generator, `output: 'static'`)
- **React 19** islands via `@astrojs/react` — used for animated/interactive components (`client:load`)
- **Tailwind CSS 4** (CSS-first config via `@tailwindcss/vite` plugin)
- **Framer Motion 12** for animations (3D tilt, staggered entrances, floating effects)
- **Node >= 22.12.0** required (Astro 7 hard requirement)

## Architecture

Single page at `src/pages/index.astro`. Layout in `src/layouts/BaseLayout.astro`.

### Components

| File | Type | Notes |
|------|------|-------|
| `Navbar.astro` | Astro | Apple glassmorphism nav, active section highlighting |
| `Hero.astro` | Astro | Typewriter role cycling, floating dots, CTA buttons |
| `AnimatedHeadshot.tsx` | React island | Spinning gradient ring, floating animation (Framer Motion) |
| `About.astro` | Astro | 50/50 grid: prose left, credential badges right |
| `AnimatedStats.tsx` | React island | Credential badges with real logos (Yale, IIT Madras, PMP) |
| `Experience.astro` | Astro | Timeline with pulse dots, gradient line |
| `TechStack.astro` | Astro | Section wrapper |
| `TechPills.tsx` | React island | 18 tech pills with SVG logos, staggered entrance |
| `Projects.astro` | Astro | Section wrapper |
| `ProjectGrid.tsx` | React island | 2x2 grid of project cards |
| `ProjectCard.tsx` | React island | 3D mouse-tilt, browser mockup frame, glow border on hover |
| `Contact.astro` | Astro | Dot pattern background, email/LinkedIn CTAs |
| `Footer.astro` | Astro | Copyright + social links |

### Design System (`src/styles/global.css`)

- **Fonts:** Space Grotesk (display), Source Sans 3 (body), JetBrains Mono (mono)
- **Colors:** canvas, surface, ink, muted, accent (#2563eb), accent-light, accent-hover, accent-sky, border
- **Animations:** glow-card (conic-gradient border), typewriter-cursor, hero-orb, card-hover-lift, timeline-dot pulse, press-scale, link-underline, scroll-reveal, reduced-motion support

### Assets (`public/images/`)

- `headshot.png` — real photo
- `logos/` — 18 SVG tech logos + 3 PNG institution logos (yale, iitm, pmp)
- `projects/` — 4 ChatGPT-generated app screenshots (PNG)

## Deployment

- **Target:** GitHub Pages at `https://basithzohailn.github.io/portfolio/`
- **Base path:** `/portfolio` (configured in `astro.config.mjs`)
- **Repo:** `basithzohailn/portfolio` on GitHub
- **Build:** `npm run build` outputs to `dist/`

## Development

```bash
nvm use 22        # required — Node 20 fails Astro 7
npm run dev       # http://localhost:4321/portfolio/
npm run build     # static build to dist/
```

## Key Rules

- All React components use `client:load` (not `client:visible`) — Framer Motion's IntersectionObserver misses entrance triggers with deferred hydration
- Image paths in components must include the `/portfolio` base prefix
- No employer or client names in public content (BCG branding rules)
- Project cards show app screenshots only — no GitHub repo or live demo links
