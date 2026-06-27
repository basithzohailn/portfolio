import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type MouseEvent } from 'react';

interface Project {
  title: string;
  tag: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
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
    if (ref.current) {
      ref.current.style.setProperty('--mouse-x', `${mouseX}px`);
      ref.current.style.setProperty('--mouse-y', `${mouseY}px`);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const hasLinks = project.github || project.live;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
      className="glow-card spotlight-card perspective-1000"
    >
      <div className="card-inner">
        {/* Browser frame mockup */}
        <div className="bg-white border-b border-border">
          <div className="flex items-center gap-2 px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60"></div>
            </div>
            <div className="flex-1 mx-2">
              <div className="bg-gray-50 rounded-md px-3 py-1 text-xs text-muted/50 font-mono text-center truncate">
                {project.title.toLowerCase().replace(/\s+/g, '')}.app
              </div>
            </div>
          </div>
        </div>
        {/* Project image — cropped to top half */}
        <div className="aspect-[16/7.5] bg-white relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-auto object-cover object-top transition-transform duration-500 hover:scale-105"
            loading="lazy"
            decoding="async"
          />
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
          {/* Optional links */}
          {hasLinks && (
            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border/50">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Source
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
