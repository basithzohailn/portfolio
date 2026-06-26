# Developer Portfolio — Plan

## Goal
Personal developer portfolio hosted on GitHub Pages at `basithzohailn.github.io/portfolio/`.

## Stack: Astro + Tailwind CSS
- **Astro** — Static site generator, zero JS shipped by default, built-in GitHub Pages deploy action
- **Tailwind CSS** — Utility-first styling
- **GitHub Pages** — Free hosting, auto-deploys via GitHub Actions on push to `main`

## Sections
1. **Hero** — Name, title, tagline, CTA links (GitHub, LinkedIn, email)
2. **About** — Brief bio and background
3. **Tech Stack** — Visual grid of technologies (Next.js, React, TypeScript, Python, Tailwind, Prisma, GCP, etc.)
4. **Projects** — Cards for open source / side projects with descriptions, tech tags, and links
5. **Blog** — Markdown-based blog posts using Astro content collections (can start empty)
6. **Contact** — Email, LinkedIn, GitHub links

## File Structure
```
portfoliowebsite/
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── tailwind.config.mjs
├── src/
│   ├── layouts/BaseLayout.astro
│   ├── pages/index.astro
│   ├── pages/blog/[...slug].astro
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── TechStack.astro
│   │   ├── Projects.astro
│   │   ├── BlogList.astro
│   │   └── Contact.astro
│   ├── content/blog/
│   └── styles/global.css
└── public/
```

## Deploy
1. GitHub Actions workflow triggers on push to `main`
2. Builds Astro site → static output in `dist/`
3. Deploys to GitHub Pages automatically
4. Enable Pages in repo settings → source: GitHub Actions
5. Live at `https://basithzohailn.github.io/portfolio/`
