import React from 'react';

/**
 * CinematicAmbientBackground
 * Mệnh Kim Golden-Champagne Cinema Beam
 * Atmospheric golden-amber rays emerging softly through the obsidian dark canvas.
 */
export const CinematicAmbientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-0">
      {/* 1. Primary Cinematic Sunbeam (Pure Radiant Champagne Gold & Warm Earth Amber) */}
      <div
        className="absolute pointer-events-none transform -rotate-12"
        style={{
          top: '-10%',
          right: '-5%',
          width: '58vw',
          height: '78vh',
          minWidth: '380px',
          minHeight: '480px',
          borderRadius: '53% 47% 70% 30% / 40% 60% 30% 70%',
          background:
            'linear-gradient(135deg, rgba(243, 216, 154, 0.28) 0%, rgba(200, 164, 93, 0.14) 40%, rgba(140, 110, 74, 0.08) 70%, transparent 100%)',
          filter: 'blur(100px)',
          opacity: 0.9,
          mixBlendMode: 'screen',
          willChange: 'transform, opacity',
        }}
        aria-hidden="true"
      />

      {/* 1b. Delicate Secondary Shaft of Golden Window Light with warm brown warmth */}
      <div
        className="absolute pointer-events-none transform -rotate-[22deg]"
        style={{
          top: '-18%',
          right: '8%',
          width: '45vw',
          height: '85vh',
          minWidth: '320px',
          borderRadius: '60% 40% 75% 25% / 35% 65% 35% 65%',
          background:
            'linear-gradient(145deg, rgba(229, 195, 120, 0.22) 0%, rgba(181, 154, 114, 0.1) 45%, rgba(68, 55, 44, 0.06) 80%, transparent 100%)',
          filter: 'blur(115px)',
          opacity: 0.8,
          mixBlendMode: 'screen',
          willChange: 'transform, opacity',
        }}
        aria-hidden="true"
      />

      {/* 2. Complementary Earth Clay & Sand Ambient Bounce (Màu Đất Thổ Ấm) */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-12%',
          bottom: '-12%',
          width: '46vw',
          height: '46vh',
          minWidth: '320px',
          minHeight: '320px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(140, 110, 74, 0.18) 0%, rgba(181, 154, 114, 0.08) 50%, transparent 80%)',
          filter: 'blur(130px)',
          opacity: 0.85,
          mixBlendMode: 'screen',
          willChange: 'transform, opacity',
        }}
        aria-hidden="true"
      />

      {/* 3. Deep Smoked Walnut & Espresso Radial Center Depth (Màu Nâu Trầm) */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          left: '20%',
          width: '60vw',
          height: '50vh',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(62, 50, 40, 0.1) 0%, transparent 70%)',
          filter: 'blur(150px)',
          opacity: 0.6,
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      />
    </div>
  );
};
