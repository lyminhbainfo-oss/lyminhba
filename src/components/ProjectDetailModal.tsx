import React from 'react';
import { Project, StillFrame } from '../types/film';
import { X, Film, Play, ExternalLink, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLightbox?: (still: StillFrame, projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const isDirector = project.roleType === 'director';
  const hasTrailer = Boolean(project.trailerEmbedUrl);

  const cleanedAwards = (project.awards || []).filter(
    (aw) => !aw.toLowerCase().includes('platform busan')
  );

  return (
    <motion.div
      key={`modal-backdrop-${project.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto cursor-pointer bg-black/90 backdrop-blur-md"
    >
      <motion.div
        key={`modal-content-${project.id}`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0E0E0E] border border-white/[0.1] max-w-4xl w-full my-auto max-h-[92vh] overflow-y-auto shadow-2xl rounded-xs text-left cursor-default relative"
      >
        {/* Header */}
        <div className="relative p-6 sm:p-8 pr-16 border-b border-white/[0.08] bg-[#121212]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Clean metadata badge */}
          <div className="flex flex-wrap items-center gap-2 font-['Plus_Jakarta_Sans'] text-[11px] font-normal uppercase tracking-wider text-white/50 mb-2">
            <span className={isDirector ? "text-[#E89D75] font-medium" : "text-white/90"}>
              {project.id === 'proj-tnrr' || project.title.includes('Tàn Ngày Rực Rỡ')
                ? 'WRITER & DIRECTOR'
                : project.id === 'proj-rrrr' || project.title.includes('Rừng Rù Rì')
                ? 'WRITER & DIRECTOR'
                : (project.role || '1ST ASSISTANT DIRECTOR').toUpperCase()}
            </span>
            <span>·</span>
            <span>{project.formatLabel}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <h2 className="font-['Newsreader'] text-[24px] sm:text-[28px] font-normal text-white">
            {project.title}
          </h2>
          <div className="font-['Plus_Jakarta_Sans'] text-[13px] text-white/50 mt-0.5">
            {project.titleEn}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Official Trailer Cinema Player */}
          {hasTrailer && (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-white/70">
                  <Play size={12} className="fill-[#E89D75] text-[#E89D75]" />
                  <span>Trailer · {project.title}</span>
                </div>
                {project.trailerUrl && (
                  <a
                    href={project.trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-xs text-[#E89D75]/80 hover:text-[#E89D75] transition-colors"
                  >
                    <span>YouTube</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>

              {/* 16:9 Cinema Aspect Ratio Player */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xs bg-black border border-white/[0.08]">
                <iframe
                  src={`${project.trailerEmbedUrl}?autoplay=0&rel=0&modestbranding=1`}
                  title={project.trailerTitle || `${project.title} Official Trailer`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Quick Overview & Synopsis Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {!hasTrailer && project.posterUrl && (
              <div className="md:col-span-4 bg-[#141414] p-2 border border-white/[0.08] rounded-xs">
                <div className="aspect-[2/3] overflow-hidden rounded-[1px] bg-black">
                  <img
                    src={project.posterUrl}
                    alt={`Key art poster for ${project.title}`}
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
              </div>
            )}

            <div className={!hasTrailer && project.posterUrl ? 'md:col-span-8 space-y-6' : 'md:col-span-12 space-y-6'}>
              {/* Specs Bar */}
              {isDirector ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#141414] border border-white/[0.08] font-['Plus_Jakarta_Sans'] text-xs rounded-xs">
                  <div>
                    <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-0.5">Format</span>
                    <span className="text-white">{project.catalogueSpecs?.format || 'Digital'}</span>
                  </div>
                  <div>
                    <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-0.5">Aspect Ratio</span>
                    <span className="text-white">{project.catalogueSpecs?.aspectRatio || '1.85:1'}</span>
                  </div>
                  <div>
                    <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-0.5">Language</span>
                    <span className="text-white">{project.catalogueSpecs?.language || 'Vietnamese'}</span>
                  </div>
                  <div>
                    <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-0.5">Year</span>
                    <span className="text-white tabular-nums">{project.catalogueSpecs?.year || project.year}</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#141414] border border-white/[0.08] font-['Plus_Jakarta_Sans'] text-xs rounded-xs">
                  <div>
                    <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-0.5">Role</span>
                    <span className="text-white">{project.role || '1st Assistant Director'}</span>
                  </div>
                  <div>
                    <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-0.5">Director</span>
                    <span className="text-white">{project.director}</span>
                  </div>
                  <div>
                    <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-0.5">Format</span>
                    <span className="text-white">{project.formatLabel}</span>
                  </div>
                  <div>
                    <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-0.5">Year</span>
                    <span className="text-white tabular-nums">{project.year}</span>
                  </div>
                </div>
              )}

              {/* Synopsis */}
              <div className="space-y-3">
                <h4 className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-[#E89D75] flex items-center gap-2">
                  <Film size={13} />
                  <span>{isDirector ? "LOGLINE & DIRECTOR'S NOTE" : 'PROJECT OVERVIEW'}</span>
                </h4>
                
                <p className="font-['Plus_Jakarta_Sans'] text-[14.5px] font-normal leading-[1.74] text-white/80 text-justify">
                  {project.synopsisVi}
                </p>

                {isDirector && project.directorsNote && (
                  <div className="p-4 bg-[#141414] border-l-2 border-[#E89D75] rounded-r-xs space-y-1 mt-3">
                    <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase tracking-wider text-[#E89D75] block">
                      Director's Note
                    </span>
                    <p className="font-['Plus_Jakarta_Sans'] text-[14.5px] font-normal leading-[1.74] text-white/80 text-justify">
                      {project.directorsNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Festival Selections & Accolades */}
              {cleanedAwards.length > 0 && (
                <div className="bg-[#141414] border border-white/[0.08] p-4 rounded-xs space-y-2">
                  <div className="flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-[#E89D75]">
                    <Award size={13} />
                    <span>Festival Selections & Accolades</span>
                  </div>
                  <ul className="space-y-1 font-['Plus_Jakarta_Sans'] text-[13px] text-white/80">
                    {cleanedAwards.map((aw, awIdx) => (
                      <li key={awIdx} className="flex items-center gap-2">
                        <span className="text-[#E89D75]">·</span>
                        <span>{aw}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* KEY CREDITS (For Directorial Works) */}
          {isDirector && (
            <div className="p-5 bg-[#141414] border border-white/[0.08] rounded-xs space-y-3">
              <h5 className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-white/50 flex items-center gap-2 border-b border-white/[0.08] pb-2">
                <Users size={13} />
                <span>KEY CREDITS</span>
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 font-['Plus_Jakarta_Sans'] text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase tracking-wider">Director, Writer & Editor</span>
                  <span className="text-white font-medium text-[13.5px]">{project.keyCredits?.directorWriterEditor || 'Lý Minh Bá'}</span>
                </div>

                {project.keyCredits?.producer && (
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase tracking-wider">Producer</span>
                    <span className="text-white font-medium text-[13.5px]">{project.keyCredits.producer}</span>
                  </div>
                )}

                {project.keyCredits?.dop && (
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase tracking-wider">Director of Photography (DOP)</span>
                    <span className="text-white font-medium text-[13.5px]">{project.keyCredits.dop}</span>
                  </div>
                )}

                {project.keyCredits?.artDirector && (
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase tracking-wider">Art Director</span>
                    <span className="text-white font-medium text-[13.5px]">{project.keyCredits.artDirector}</span>
                  </div>
                )}

                {project.keyCredits?.cast && (
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase tracking-wider">Cast</span>
                    <span className="text-white font-medium text-[13.5px]">{project.keyCredits.cast}</span>
                  </div>
                )}

                {project.keyCredits?.supportedBy && (
                  <div>
                    <span className="text-white/40 block text-[10px] uppercase tracking-wider">Supported By</span>
                    <span className="text-white font-medium text-[13.5px]">{project.keyCredits.supportedBy}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
