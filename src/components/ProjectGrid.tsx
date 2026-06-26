import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'PMI Compass',
    tag: 'Full-Stack AI Platform',
    description: 'AI-powered post-merger integration platform that automates workplan generation and Day-1 activity classification across 20+ integration workstreams. Uses LLM-based document parsing, few-shot activity generation, and chain-of-thought classification.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Claude API', 'GCP'],
    image: '/portfolio/images/projects/pmi-compass.png',
  },
  {
    title: 'Org Designer',
    tag: 'Interactive Design Tool',
    description: 'Real-time organizational structure design tool enabling hierarchy modeling, span-of-control analysis, and side-by-side comparison of structural alternatives. Reduced org design iteration cycles from 2-3 days to same-day.',
    tech: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Cloud Run'],
    image: '/portfolio/images/projects/org-designer.png',
  },
  {
    title: 'Activist Defense AI',
    tag: 'Conversational AI',
    description: 'AI-powered research assistant for shareholder activism defense. Features real-time document analysis, strategic recommendation engine, and executive briefing generation with retrieval-augmented generation.',
    tech: ['React', 'FastAPI', 'Python', 'Claude API', 'PostgreSQL', 'Cloud Run'],
    image: '/portfolio/images/projects/activist-defense.png',
  },
  {
    title: 'Predictive Maintenance ML',
    tag: 'Machine Learning',
    description: 'ML-based predictive maintenance system for industrial rotating equipment. Ingests sensor data, engineers features, and classifies failure risk using XGBoost with precision-optimized thresholds. Delivered $1M+ in commercial value.',
    tech: ['Python', 'XGBoost', 'scikit-learn', 'SQL', 'pandas'],
    image: '/portfolio/images/projects/predictive-maintenance.png',
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
}
