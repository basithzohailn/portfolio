import { motion } from 'framer-motion';

const logoMap: Record<string, string> = {
  'Python': '/portfolio/images/logos/python.svg',
  'TypeScript': '/portfolio/images/logos/typescript.svg',
  'JavaScript': '/portfolio/images/logos/javascript.svg',
  'SQL': '/portfolio/images/logos/sql.svg',
  'Next.js': '/portfolio/images/logos/nextjs.svg',
  'React': '/portfolio/images/logos/react.svg',
  'Tailwind CSS': '/portfolio/images/logos/tailwindcss.svg',
  'Prisma': '/portfolio/images/logos/prisma.svg',
  'FastAPI': '/portfolio/images/logos/fastapi.svg',
  'Astro': '/portfolio/images/logos/astro.svg',
  'PostgreSQL': '/portfolio/images/logos/postgresql.svg',
  'Docker': '/portfolio/images/logos/docker.svg',
  'GCP Cloud Run': '/portfolio/images/logos/gcp.svg',
  'Cloud SQL': '/portfolio/images/logos/gcp.svg',
  'GitHub Actions': '/portfolio/images/logos/githubactions.svg',
  'Vercel': '/portfolio/images/logos/vercel.svg',
  'pandas': '/portfolio/images/logos/pandas.svg',
  'scikit-learn': '/portfolio/images/logos/scikitlearn.svg',
};

const row1 = ['Python', 'TypeScript', 'Next.js', 'React', 'Prisma', 'FastAPI', 'PostgreSQL', 'Docker', 'Vercel'];
const row2 = ['JavaScript', 'SQL', 'Tailwind CSS', 'Astro', 'GCP Cloud Run', 'Cloud SQL', 'GitHub Actions', 'pandas', 'scikit-learn'];

function Pill({ name }: { name: string }) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        boxShadow: '0 4px 16px rgba(37, 99, 235, 0.2)',
        transition: { duration: 0.2 },
      }}
      className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#e2e8f0]/50 rounded-xl font-mono text-sm text-ink cursor-default whitespace-nowrap flex-shrink-0"
    >
      {logoMap[name] && (
        <img
          src={logoMap[name]}
          alt=""
          className="w-5 h-5 flex-shrink-0"
          loading="lazy"
        />
      )}
      {name}
    </motion.span>
  );
}

function MarqueeRow({ items, direction }: { items: string[]; direction: 'left' | 'right' }) {
  const animClass = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="marquee-track overflow-hidden">
      <div className={`flex gap-4 ${animClass}`}>
        {/* Render content 3x for seamless loop */}
        {[0, 1, 2].map((copy) => (
          <div key={copy} className="flex gap-4 flex-shrink-0" aria-hidden={copy > 0 || undefined}>
            {items.map((name) => (
              <Pill key={`${copy}-${name}`} name={name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="flex flex-col gap-4">
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </div>
  );
}
