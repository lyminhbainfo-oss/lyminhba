import React from 'react';

/**
 * FilmGrainBackground
 * Authentic 35mm Celluloid Film Grain & Gentle Cinematic Sunlight
 * 
 * Features:
 * 1. Deep Matte Obsidian base.
 * 2. Subtle, poetic warm sunlight (ánh nắng nhẹ le lói) filtering into the lower sections
 *    so the dark background never feels empty, while maintaining minimalist restraint.
 * 3. Tactile 35mm silver halide micro-grain texture.
 * 4. Organic 10fps celluloid projection shimmer.
 * 5. Gentle edge vignette.
 */
export const FilmGrainBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
      {/* 1. Deep Matte Obsidian Base */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* 2. Gentle Natural Sunlight (Ánh nắng nhẹ ở các phần dưới) */}
      {/* 2a. Upper-Right to Mid Oblique Sunbeam Streak */}
      <div
        className="absolute pointer-events-none transform -rotate-[16deg]"
        style={{
          top: '28%',
          right: '-6%',
          width: '58vw',
          height: '70vh',
          minWidth: '400px',
          borderRadius: '52% 48% 68% 32% / 38% 62% 38% 62%',
          background:
            'radial-gradient(ellipse at center, rgba(240, 205, 145, 0.075) 0%, rgba(205, 160, 95, 0.035) 45%, transparent 75%)',
          filter: 'blur(120px)',
          willChange: 'transform',
        }}
      />

      {/* 2b. Lower-Left Gentle Warm Sunlight Floor Bounce */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '12%',
          left: '-8%',
          width: '48vw',
          height: '52vh',
          minWidth: '320px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(225, 180, 120, 0.06) 0%, rgba(190, 145, 90, 0.02) 50%, transparent 75%)',
          filter: 'blur(130px)',
        }}
      />

      {/* 2c. Deep Lower Section Ambient Sun Puddle */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%',
          right: '15%',
          width: '45vw',
          height: '40vh',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(235, 190, 130, 0.045) 0%, transparent 70%)',
          filter: 'blur(140px)',
        }}
      />

      {/* 3. Static Micro-Grain Emulsion Layer (Base tactile texture) */}
      <div className="film-grain-static-base" />

      {/* 4. Animated 35mm Celluloid Shimmer Layer (Living film projection) */}
      <div className="film-grain-animated-layer" />

      {/* 5. Subtle Cinema Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.45) 90%, rgba(0, 0, 0, 0.75) 100%)',
        }}
      />
    </div>
  );
};
