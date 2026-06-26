import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MouseEvent } from 'react';

interface Project {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  image: string;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['3deg', '-3deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-3deg', '3deg']);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
      className="glow-card perspective-1000"
    >
      <div className="card-inner">
        {/* Browser frame mockup */}
        <div className="bg-canvas border-b border-border">
          <div className="flex items-center gap-2 px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60"></div>
            </div>
            <div className="flex-1 mx-2">
              <div className="bg-surface rounded-md px-3 py-1 text-xs text-muted/50 font-mono text-center truncate">
                {project.title.toLowerCase().replace(/\s+/g, '')}.app
              </div>
            </div>
          </div>
        </div>
        {/* Project image */}
        <div className="aspect-[16/10] bg-gradient-to-br from-accent-light via-accent/5 to-accent-sky/5 relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </div>
        {/* Content */}
        <div className="p-6">
          <span className="font-mono text-xs text-accent tracking-wide uppercase">{project.tag}</span>
          <h3 className="font-display text-xl font-semibold text-ink mt-2">{project.title}</h3>
          <p className="text-muted text-sm leading-relaxed mt-3">{project.description}</p>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono px-2.5 py-1 bg-accent-light text-accent rounded-md border border-accent/10">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
