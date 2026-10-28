import React from 'react';
import { StillFrame } from '../types/film';
import { FincherStillGraphic } from './FincherStillGraphic';
import { X } from 'lucide-react';
import { motion } from 'motion/react';

interface LightboxModalProps {
  still: StillFrame | null;
  projectTitle: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  still,
  projectTitle,
  onClose,
}) => {
  if (!still) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-6 overflow-y-auto cursor-pointer bg-black/95 backdrop-blur-md"
    >
      {/* Top Header Bar */}
      <div
        className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-3 shrink-0 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-['Newsreader'] text-[17px] sm:text-[19px] font-normal text-white truncate">
          {projectTitle}
        </span>

        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer"
          aria-label="Close viewfinder"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Viewfinder Projection Stage */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="my-auto py-4 flex flex-col items-center justify-center w-full max-w-5xl mx-auto cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-auto max-w-full mx-auto rounded-xs overflow-hidden border border-white/[0.1] bg-black">
          {still.customImageUrl ? (
            <img
              src={still.customImageUrl}
              alt={still.title || 'Cinematic Film Still'}
              className="max-h-[82vh] w-auto max-w-full object-contain block mx-auto"
            />
          ) : (
            <FincherStillGraphic
              type={still.svgGraphicType}
              title={still.title}
              aspectRatioClass="aspect-[2.39/1]"
              className="max-h-[82vh] w-full max-w-4xl object-contain"
            />
          )}
        </div>
      </motion.div>

      <div className="shrink-0 h-2" />
    </motion.div>
  );
};
