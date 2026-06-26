import { motion } from 'framer-motion';

const credentials = [
  { value: 'Yale School of Management', label: "MBA, Dean's Scholar", logo: '/portfolio/images/logos/yale.png' },
  { value: 'IIT Madras', label: 'B.Tech, Top 10%', logo: '/portfolio/images/logos/iitm.png' },
  { value: 'Boston Consulting Group', label: 'Consultant', logo: '/portfolio/images/logos/bcg.png' },
  { value: 'Bharat Petroleum', label: 'Manager, Operations', logo: '/portfolio/images/logos/bpcl.png' },
  { value: '8+ Years', label: 'Industry Experience', logo: null },
  { value: 'PMP', label: 'Certified', logo: '/portfolio/images/logos/pmp.png' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AnimatedStats() {
  return (
    <motion.div
      className="grid grid-cols-2 gap-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
    >
      {credentials.map((cred) => (
        <motion.div
          key={cred.value}
          variants={item}
          whileHover={{
            y: -3,
            boxShadow: '0 8px 20px -4px rgba(37, 99, 235, 0.1)',
            transition: { duration: 0.2 },
          }}
          className="flex items-center gap-3 px-5 py-4 bg-white/70 backdrop-blur-sm border border-border/50 rounded-xl cursor-default w-full shadow-sm"
        >
          {cred.logo ? (
            <img
              src={cred.logo}
              alt={cred.value}
              className="w-8 h-8 object-contain flex-shrink-0"
              loading="lazy"
            />
          ) : (
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent text-white font-display font-bold text-sm flex-shrink-0">
              {cred.value.charAt(0)}
            </span>
          )}
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold text-ink leading-tight">{cred.value}</p>
            <p className="text-xs text-muted leading-tight">{cred.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
