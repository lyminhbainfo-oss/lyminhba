import React, { useState } from 'react';

interface FincherStillGraphicProps {
  type: 'golden_hour_room' | 'rain_cafe_night' | 'basement_fight' | 'hotel_corridor' | 'harbor_dock' | 'courtroom' | 'alley_rain';
  title?: string;
  customImageUrl?: string;
  className?: string;
  aspectRatioClass?: string;
}

export const FincherStillGraphic: React.FC<FincherStillGraphicProps> = ({
  type,
  title,
  customImageUrl,
  className = '',
  aspectRatioClass = ''
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  // If a custom image URL was provided and hasn't errored
  if (customImageUrl && !imageFailed) {
    return (
      <div className={`relative w-full overflow-hidden bg-[#16120E] ${aspectRatioClass} ${className}`}>
        <img
          src={customImageUrl}
          alt={title || 'Cinematic Film Still'}
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
          className={`w-full ${aspectRatioClass ? 'h-full object-cover' : 'h-auto block'}`}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      </div>
    );
  }

  // Poetic, Warm & Evocative Cinematic SVGs
  const renderGraphicContent = () => {
    switch (type) {
      case 'golden_hour_room':
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 502" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="warmWall" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2a1f18" />
                <stop offset="40%" stopColor="#452f20" />
                <stop offset="100%" stopColor="#1e1610" />
              </linearGradient>
              <linearGradient id="sunBeam" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#b45309" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="lampGaze" cx="70%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#fef08a" stopOpacity="0.6" />
                <stop offset="30%" stopColor="#d97706" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="502" fill="url(#warmWall)" />

            {/* Wooden Window Frame on Left */}
            <rect x="60" y="40" width="220" height="422" fill="#18110b" stroke="#332215" strokeWidth="6" />
            <line x1="170" y1="40" x2="170" y2="462" stroke="#332215" strokeWidth="4" />
            <line x1="60" y1="180" x2="280" y2="180" stroke="#332215" strokeWidth="4" />
            <line x1="60" y1="320" x2="280" y2="320" stroke="#332215" strokeWidth="4" />

            {/* Sun Rays streaming into the room diagonally */}
            <polygon points="60,40 280,40 980,502 460,502" fill="url(#sunBeam)" opacity="0.85" />
            <polygon points="170,40 280,40 1150,502 820,502" fill="url(#sunBeam)" opacity="0.6" />

            {/* Warm room lamp glow */}
            <rect width="1200" height="502" fill="url(#lampGaze)" />

            {/* Wooden Table in sunlight */}
            <polygon points="560,340 1020,340 1120,490 480,490" fill="#2e1d13" stroke="#482e1e" strokeWidth="2" />
            <rect x="520" y="480" width="24" height="22" fill="#1b1009" />
            <rect x="1080" y="480" width="24" height="22" fill="#1b1009" />

            {/* Ceramic Teacup steaming gently */}
            <ellipse cx="780" cy="385" rx="16" ry="10" fill="#fdfbf7" />
            <ellipse cx="780" cy="383" rx="13" ry="7" fill="#78350f" />
            <path d="M 776 375 Q 772 355 778 340 Q 784 325 780 310" stroke="#fed7aa" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M 784 375 Q 788 355 782 340 Q 778 325 784 310" stroke="#fed7aa" strokeWidth="1.5" fill="none" opacity="0.3" />

            {/* Silhouetted old woman seated quietly looking outside */}
            <circle cx="440" cy="275" r="22" fill="#160e09" />
            <path d="M 410 380 L 425 296 L 455 296 L 470 380 Z" fill="#160e09" />

            {/* Floating dust motes caught in the sunlight */}
            <circle cx="480" cy="180" r="2.5" fill="#fef08a" opacity="0.85" />
            <circle cx="580" cy="230" r="1.8" fill="#fef08a" opacity="0.75" />
            <circle cx="650" cy="160" r="2.2" fill="#fef08a" opacity="0.9" />
            <circle cx="720" cy="290" r="2" fill="#fef08a" opacity="0.8" />
            <circle cx="860" cy="320" r="1.5" fill="#fef08a" opacity="0.7" />
          </svg>
        );

      case 'rain_cafe_night':
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 502" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cafeBg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#151210" />
                <stop offset="100%" stopColor="#261b14" />
              </linearGradient>
              <radialGradient id="sodiumWarm" cx="30%" cy="40%" r="40%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.55" />
                <stop offset="40%" stopColor="#b45309" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="neonGlow" cx="75%" cy="35%" r="35%">
                <stop offset="0%" stopColor="#ea580c" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#9a3412" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="502" fill="url(#cafeBg)" />
            <rect width="1200" height="502" fill="url(#sodiumWarm)" />
            <rect width="1200" height="502" fill="url(#neonGlow)" />

            {/* Window Glass Sill */}
            <rect x="0" y="420" width="1200" height="82" fill="#1a130e" stroke="#2d1f16" strokeWidth="2" />
            <line x1="600" y1="0" x2="600" y2="420" stroke="#1f1610" strokeWidth="4" />

            {/* Blurred street outside through wet glass */}
            <circle cx="360" cy="220" r="70" fill="#f59e0b" opacity="0.3" />
            <circle cx="820" cy="200" r="90" fill="#ea580c" opacity="0.25" />
            <circle cx="520" cy="260" r="45" fill="#fbbf24" opacity="0.2" />

            {/* Silhouetted umbrellas passing outside */}
            <path d="M 280 340 Q 360 270 440 340 Z" fill="#0d0a08" />
            <line x1="360" y1="310" x2="360" y2="400" stroke="#0d0a08" strokeWidth="3" />

            {/* Raindrops on window pane */}
            {[...Array(45)].map((_, i) => (
              <ellipse
                key={i}
                cx={(i * 28 + 15) % 1200}
                cy={(i * 39 + 25) % 400}
                rx={1.5 + (i % 2)}
                ry={3 + (i % 3)}
                fill="#fed7aa"
                opacity={0.35 + (i % 3) * 0.15}
              />
            ))}
          </svg>
        );

      case 'hotel_corridor':
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 502" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="amberSconce" cx="240" cy="200" r="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#b45309" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="amberSconce2" cx="960" cy="200" r="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#b45309" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="502" fill="#14100c" />
            <polygon points="0,0 480,200 480,340 0,502" fill="#241912" stroke="#3b291d" strokeWidth="1" />
            <polygon points="1200,0 720,200 720,340 1200,502" fill="#241912" stroke="#3b291d" strokeWidth="1" />
            <rect x="480" y="200" width="240" height="140" fill="#19130e" stroke="#312217" strokeWidth="1.5" />
            <rect x="560" y="220" width="80" height="120" fill="#0f0c09" stroke="#483323" strokeWidth="1" />

            <circle cx="240" cy="200" r="180" fill="url(#amberSconce)" />
            <circle cx="960" cy="200" r="180" fill="url(#amberSconce2)" />
            <ellipse cx="240" cy="200" rx="9" ry="14" fill="#fef08a" />
            <ellipse cx="960" cy="200" rx="9" ry="14" fill="#fef08a" />

            <polygon points="280,502 540,340 660,340 920,502" fill="#451a1a" opacity="0.65" />

            {/* Silhouette figure at vanishing point */}
            <circle cx="600" cy="255" r="9" fill="#060504" />
            <path d="M 590 320 L 594 266 L 606 266 L 610 320 Z" fill="#060504" />
          </svg>
        );

      case 'harbor_dock':
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 502" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="dawnSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#334155" />
                <stop offset="75%" stopColor="#7c2d12" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <rect width="1200" height="502" fill="url(#dawnSky)" />

            {/* Misty sea water */}
            <rect x="0" y="360" width="1200" height="142" fill="#0f172a" />
            <ellipse cx="600" cy="385" rx="420" ry="25" fill="#f59e0b" opacity="0.3" />

            {/* Fishing boat with glowing lantern */}
            <ellipse cx="500" cy="370" rx="55" ry="12" fill="#090d16" />
            <line x1="510" y1="330" x2="510" y2="370" stroke="#090d16" strokeWidth="2.5" />
            <circle cx="515" cy="345" r="7" fill="#fef08a" />
            <circle cx="515" cy="345" r="25" fill="#f59e0b" opacity="0.45" />

            {/* Distant mountains in twilight */}
            <path d="M 0 360 Q 220 280 440 360 Z" fill="#1e293b" opacity="0.7" />
            <path d="M 400 360 Q 640 260 880 360 Z" fill="#1e293b" opacity="0.6" />
            <path d="M 800 360 Q 1000 290 1200 360 Z" fill="#1e293b" opacity="0.8" />
          </svg>
        );

      case 'basement_fight':
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 502" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="hangingBulb" cx="50%" cy="15%" r="60%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#d97706" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#78350f" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#080706" stopOpacity="1" />
              </radialGradient>
            </defs>
            <rect width="1200" height="502" fill="#110d0a" />
            <rect width="1200" height="502" fill="url(#hangingBulb)" />

            <line x1="600" y1="0" x2="600" y2="80" stroke="#443224" strokeWidth="2.5" />
            <circle cx="600" cy="95" r="10" fill="#fef08a" />
            <circle cx="600" cy="95" r="32" fill="#f59e0b" opacity="0.3" />

            {/* Soft silhouettes */}
            <circle cx="550" cy="310" r="16" fill="#0a0806" />
            <path d="M 535 326 L 565 326 L 575 420 L 525 420 Z" fill="#0a0806" />
            <circle cx="650" cy="310" r="16" fill="#0a0806" />
            <path d="M 635 326 L 665 326 L 675 420 L 625 420 Z" fill="#0a0806" />
          </svg>
        );

      case 'courtroom':
      case 'alley_rain':
      default:
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 502" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="trainSunset" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#311c14" />
                <stop offset="50%" stopColor="#7c2d12" />
                <stop offset="85%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#fef08a" />
              </linearGradient>
            </defs>
            <rect width="1200" height="502" fill="url(#trainSunset)" />

            {/* Grassland silhouette outside */}
            <path d="M 0 502 Q 300 410 600 480 T 1200 460 L 1200 502 Z" fill="#1c1109" />

            {/* Big Train Window Frame in Foreground */}
            <rect x="0" y="0" width="1200" height="502" fill="none" stroke="#22150d" strokeWidth="32" />
            <line x1="0" y1="380" x2="1200" y2="380" stroke="#22150d" strokeWidth="12" />

            {/* Curtains billowing softly */}
            <path d="M 32 32 Q 90 200 40 380 L 32 380 Z" fill="#fdfbf7" opacity="0.3" />
            <path d="M 1168 32 Q 1110 200 1160 380 L 1168 380 Z" fill="#fdfbf7" opacity="0.3" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative w-full overflow-hidden bg-[#1f1914] ${aspectRatioClass || 'aspect-[2.39/1]'} ${className}`}>
      {renderGraphicContent()}

      {/* Gentle Warm Filmic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/55 via-transparent to-black/20" />
    </div>
  );
};
