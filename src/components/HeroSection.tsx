import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.35, once: false });

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden bg-[#0A0A0A] flex flex-col justify-between"
    >
      {/* 1. The 35mm Twilight Still Image as Master Cover (Trang bìa) with gentle slow reveal */}
      <motion.img
        initial={{ opacity: 0, scale: 1.04 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
        transition={
          isInView
            ? { duration: 2.2, ease: [0.16, 1, 0.3, 1] }
            : { duration: 0.4, ease: 'easeOut' }
        }
        src="/assets/aistudio/5_6c73e272.png"
        alt="Glorious Nightfall cinematic still directed by Lý Minh Bá"
        className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.92]"
      />

      {/* Cinematic Vignette Overlay (Delicate contrast gradient for typography legibility) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={
          isInView
            ? { duration: 2.2, ease: [0.16, 1, 0.3, 1] }
            : { duration: 0.4, ease: 'easeOut' }
        }
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 75%, rgba(10,10,10,0.85) 100%), linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 25%, transparent 65%, rgba(10,10,10,0.95) 100%)',
        }}
      />

      {/* Top spacing spacer for fixed Navbar */}
      <div className="h-20 shrink-0" />

      {/* 2. Headline with gentle, slow blur-dissolve appearance */}
      <div className="relative z-10 my-auto text-center px-5 sm:px-8 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 16, filter: 'blur(4px)' }
          }
          transition={
            isInView
              ? { duration: 1.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }
              : { duration: 0.3, ease: 'easeOut' }
          }
          className="text-[11px] sm:text-[12px] font-['Plus_Jakarta_Sans'] uppercase tracking-[0.24em] mb-3 sm:mb-4 drop-shadow-md font-bold text-[#e89d75]"
          style={{ color: '#e89d75', fontWeight: 'bold' }}
        >
          Writer · Director
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 32, filter: 'blur(6px)' }
          }
          transition={
            isInView
              ? { duration: 2.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }
              : { duration: 0.3, ease: 'easeOut' }
          }
          className="font-['Newsreader'] text-[clamp(2.15rem,5.2vw,4.25rem)] font-normal leading-[1.12] sm:leading-[1.1] tracking-[-0.01em] drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)] uppercase text-balance mx-auto"
        >
          <span className="text-white">THE ORDINARY</span>
          <br />
          <span className="text-[#E89D75] drop-shadow-[0_0_24px_rgba(232,157,117,0.35)]">IS NEVER INNOCENT</span>
        </motion.h1>
      </div>

      {/* 3. Bottom Cover Info Bar (Minimalist Scroll Cue) with gentle fade-in */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-8 sm:pb-10 flex items-center justify-end">
        {/* Minimalist Downward Scroll Prompt */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={
            isInView
              ? { duration: 1.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }
              : { duration: 0.3, ease: 'easeOut' }
          }
          onClick={onExploreProjects}
          className="flex items-center gap-2 text-[11.5px] font-['Plus_Jakarta_Sans'] uppercase tracking-[0.16em] text-white/60 hover:text-[#E89D75] transition-colors cursor-pointer group drop-shadow-sm"
        >
          <span>Scroll</span>
          <ArrowDown size={13} className="group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};
