import React, { useState } from 'react';
import { Project } from '../types/film';
import { FincherStillGraphic } from './FincherStillGraphic';
import { Film, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenAddProjectModal?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'director' | 'first_ad'>('all');

  const directedProjects = projects.filter((p) => p.roleType === 'director');
  const otherProjects = projects.filter((p) => p.roleType !== 'director');

  return (
    <section
      id="projects"
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
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10 sm:mb-14 pb-4 border-b border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="text-[11px] font-['Plus_Jakarta_Sans'] uppercase tracking-[0.2em] text-[#E89D75] mb-1 font-medium">
              Filmography
            </div>
            <h2 className="font-['Newsreader'] text-[clamp(1.75rem,2.8vw,2.35rem)] font-normal text-white">
              Selected Works
            </h2>
          </motion.div>

          {/* Minimal Plain Text Filter Tabs with Dusk Accent */}
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pt-2 sm:pt-0 font-['Plus_Jakarta_Sans'] text-[13px] tracking-wide">
            {[
              { id: 'all' as const, label: `All (${projects.length})` },
              { id: 'director' as const, label: `Directed (${directedProjects.length})` },
              { id: 'first_ad' as const, label: `Other Works (${otherProjects.length})` },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative py-1 transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    isActive ? 'text-[#E89D75] font-medium' : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="minimalTabIndicator"
                      className="absolute -bottom-1 inset-x-0 h-[1.5px] bg-[#E89D75]"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-white/10 p-8 rounded-sm">
            <Film size={28} className="mx-auto text-white/30 mb-3" />
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-white/40">
              No projects found.
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16 sm:space-y-24"
            >
              {/* SUBSECTION 1: DIRECTED WORKS (AUTEUR SHORTS) */}
              {(activeFilter === 'all' || activeFilter === 'director') && directedProjects.length > 0 && (
                <div className="space-y-8">
                  {activeFilter === 'all' && (
                    <div className="pb-2">
                      <h3 className="font-['Newsreader'] text-[19px] sm:text-[21px] font-normal text-white/90">
                        Directed Works
                      </h3>
                    </div>
                  )}

                  {/* 2-Column Showcase for the 2 Directed Films */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {directedProjects.map((project, index) => (
                      <ProjectPosterCard
                        key={project.id}
                        project={project}
                        index={index}
                        onSelectProject={onSelectProject}
                        highlightDirector
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Clean Subtle Separator */}
              {activeFilter === 'all' && directedProjects.length > 0 && otherProjects.length > 0 && (
                <div className="w-full border-t border-white/[0.08]" />
              )}

              {/* SUBSECTION 2: OTHER COLLABORATIVE & CREW FILMS */}
              {(activeFilter === 'all' || activeFilter === 'first_ad') && otherProjects.length > 0 && (
                <div className="space-y-8">
                  {activeFilter === 'all' && (
                    <div className="pb-2">
                      <h3 className="font-['Newsreader'] text-[19px] sm:text-[21px] font-normal text-white/90">
                        Other Credits
                      </h3>
                    </div>
                  )}

                  {/* 3-Column Cinema Poster Grid for Feature Films */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {otherProjects.map((project, index) => (
                      <ProjectPosterCard
                        key={project.id}
                        project={project}
                        index={index}
                        onSelectProject={onSelectProject}
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </section>
  );
};

interface ProjectPosterCardProps {
  project: Project;
  index: number;
  onSelectProject: (project: Project) => void;
  highlightDirector?: boolean;
}

const getProjectRoleBadge = (project: Project): string => {
  if (project.id === 'proj-tnrr' || project.title.includes('Tàn Ngày Rực Rỡ')) {
    return 'WRITER · DIRECTOR';
  }
  if (project.id === 'proj-rrrr' || project.title.includes('Rừng Rù Rì')) {
    return 'WRITER · DIRECTOR';
  }
  if (project.role) {
    return project.role.toUpperCase();
  }
  return '1ST ASSISTANT DIRECTOR';
};

const ProjectPosterCard: React.FC<ProjectPosterCardProps> = ({
  project,
  index,
  onSelectProject,
}) => {
  const primaryStill = project.stills[0];
  const isDirected = project.roleType === 'director';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      whileHover={{ y: -4 }}
      transition={{
        duration: 1.1,
        delay: Math.min(index * 0.08, 0.25),
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={() => onSelectProject(project)}
      className="group relative cursor-pointer flex flex-col space-y-3"
    >
      {/* Poster Image Container (Pure Cinema Frame) */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#121212] rounded-xs border border-white/[0.08] group-hover:border-[#E89D75]/40 transition-colors duration-300">
        {project.posterUrl ? (
          <img
            src={project.posterUrl}
            alt={project.title}
            className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.025] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            loading="lazy"
          />
        ) : primaryStill ? (
          <div className="w-full h-full">
            <FincherStillGraphic
              type={primaryStill.svgGraphicType}
              customImageUrl={primaryStill.customImageUrl}
              title={project.title}
              aspectRatioClass="aspect-[2/3]"
              className="w-full h-full object-cover object-[center_top] group-hover:scale-[1.025] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white/50">
            <Film size={32} className="mb-2 text-[#E89D75]/40" />
            <span className="font-['Newsreader'] text-lg text-white/70">{project.title}</span>
          </div>
        )}

        {/* Minimalist Top Tags */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[10px] font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
          <span className={`px-2 py-0.5 rounded-[2px] backdrop-blur-md border ${
            isDirected 
              ? 'bg-black/80 text-[#E89D75] border-[#E89D75]/40 font-medium'
              : 'bg-black/75 text-white/90 border-white/10'
          }`}>
            {getProjectRoleBadge(project)}
          </span>
          {project.trailerEmbedUrl && (
            <span className="bg-black/75 backdrop-blur-md px-1.5 py-0.5 rounded-[2px] text-white/90 border border-white/10 flex items-center gap-1 group-hover:text-[#E89D75] group-hover:border-[#E89D75]/30 transition-colors">
              <Play size={8} className="fill-[#E89D75] text-[#E89D75]" />
              <span>Trailer</span>
            </span>
          )}
        </div>
      </div>

      {/* Understated Editorial Caption Below Poster (Criterion Style) */}
      <div className="space-y-1">
        <div className="flex items-baseline justify-between gap-2">
          <h4 className="font-['Newsreader'] text-[18px] sm:text-[19px] font-normal text-white group-hover:text-[#E89D75] transition-colors">
            {project.title}
          </h4>
          <span className="text-[12px] font-['Plus_Jakarta_Sans'] text-white/40 tabular-nums">
            {project.year}
          </span>
        </div>
        <div className="flex items-center justify-between text-[12px] font-['Plus_Jakarta_Sans'] text-white/50">
          <span>{project.titleEn}</span>
          <span>{project.formatLabel}</span>
        </div>
      </div>
    </motion.article>
  );
};
