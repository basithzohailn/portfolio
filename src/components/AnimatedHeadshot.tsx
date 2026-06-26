import { motion } from 'framer-motion';

export default function AnimatedHeadshot() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Animated gradient ring */}
      <motion.div
        className="absolute w-[310px] h-[310px] xl:w-[340px] xl:h-[340px] rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #2563eb, #0ea5e9, #a5b4fc, #2563eb)',
          padding: '3px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full bg-canvas" />
      </motion.div>

      {/* Headshot */}
      <motion.div
        className="relative z-10 w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-surface shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/portfolio/images/headshot.png"
          alt="Basith Nijamudeen headshot"
          width={320}
          height={320}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </motion.div>
    </div>
  );
}
