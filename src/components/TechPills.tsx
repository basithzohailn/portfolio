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

const categories = [
  { name: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { name: 'Frameworks & Libraries', items: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'FastAPI', 'Astro'] },
  { name: 'Data & Analytics', items: ['PostgreSQL', 'Tableau', 'Alteryx', 'pandas'] },
  { name: 'Cloud & DevOps', items: ['GCP Cloud Run', 'Cloud SQL', 'Docker', 'GitHub Actions', 'Vercel'] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TechPills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {categories.map((cat) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">{cat.name}</h3>
          <motion.div
            className="flex flex-wrap gap-2.5"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {cat.items.map((item) => (
              <motion.span
                key={item}
                variants={pillVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)',
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-light text-accent font-mono text-sm font-medium rounded-lg border border-accent/10 cursor-default"
              >
                {logoMap[item] && (
                  <img
                    src={logoMap[item]}
                    alt=""
                    className="w-4 h-4 flex-shrink-0"
                    loading="lazy"
                  />
                )}
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
