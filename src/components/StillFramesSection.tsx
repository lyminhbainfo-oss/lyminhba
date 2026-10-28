import React, { useMemo } from 'react';
import { StillFrame, Project } from '../types/film';
import { FincherStillGraphic } from './FincherStillGraphic';
import { Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';
import { playSlateClap } from '../utils/audio';

interface StillFramesSectionProps {
  projects: Project[];
  onOpenLightbox: (still: StillFrame, projectTitle: string) => void;
}

export const StillFramesSection: React.FC<StillFramesSectionProps> = ({
  projects,
  onOpenLightbox,
}) => {
  const shuffledStills = useMemo(() => {
    const directedProjects = projects.filter((p) => p.roleType === 'director');
    const allStills = directedProjects.flatMap((p) =>
      p.stills.map((s) => ({
        ...s,
        projectTitle: p.titleEn ? `${p.title} (${p.titleEn})` : p.title,
        filmCaption: `${p.title} (${p.year})`,
      }))
    );

    const array = [...allStills];
    let seed = 2026;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }, [projects]);

  return (
    <section
      id="stills"
      className="py-20 sm:py-28 lg:py-36 bg-[#0A0A0A] relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.08 }}
        transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-5 sm:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-10 sm:mb-14 pb-4 border-b border-white/[0.08]"
        >
          <div className="text-[11px] font-['Plus_Jakarta_Sans'] uppercase tracking-[0.2em] text-[#E89D75] mb-1 font-medium">
            Visual Archive
          </div>
          <h2 className="font-['Newsreader'] text-[clamp(1.75rem,2.8vw,2.35rem)] font-normal text-white">
            Film Stills
          </h2>
        </motion.div>

        {/* Dynamic Masonry Columns preserving authentic cinema aspect ratios */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8">
          {shuffledStills.map((still, idx) => (
            <motion.div
              key={still.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ y: -3 }}
              transition={{
                duration: 1.1,
                delay: Math.min((idx % 6) * 0.08, 0.35),
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => {
                playSlateClap();
                onOpenLightbox(still, still.projectTitle);
              }}
              className="break-inside-avoid mb-6 sm:mb-8 group relative cursor-pointer overflow-hidden rounded-xs bg-[#121212] border border-white/[0.08] hover:border-[#E89D75]/40 transition-all duration-300"
            >
              {/* Media Container */}
              <div className="w-full overflow-hidden">
                <FincherStillGraphic
                  type={still.svgGraphicType}
                  customImageUrl={still.customImageUrl}
                  title={still.title}
                  aspectRatioClass=""
                  className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 pointer-events-none">
                <div className="flex justify-end opacity-0 sm:opacity-100">
                  <span className="p-1.5 bg-black/60 backdrop-blur-md text-white/80 group-hover:text-[#E89D75] rounded-full border border-white/10 group-hover:border-[#E89D75]/30 transition-colors">
                    <Maximize2 size={12} />
                  </span>
                </div>

                <div>
                  <div className="font-['Newsreader'] text-[15px] font-normal text-white drop-shadow-sm group-hover:text-[#E89D75] transition-colors">
                    {still.filmCaption}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
