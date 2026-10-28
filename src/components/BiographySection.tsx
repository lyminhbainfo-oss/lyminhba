import React from 'react';
import { BIOGRAPHY_DATA } from '../data/mockProjects';
import { motion } from 'motion/react';

export const BiographySection: React.FC = () => {
  return (
    <section
      id="bio"
      className="py-20 sm:py-28 lg:py-36 bg-[#0A0A0A] relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-5 sm:px-8"
      >
        {/* Section Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-10 sm:mb-14 pb-4 border-b border-white/[0.08]"
        >
          <div className="text-[11px] font-['Plus_Jakarta_Sans'] uppercase tracking-[0.2em] text-[#E89D75] mb-1 font-medium">
            Biography
          </div>
          <h2 className="font-['Newsreader'] text-[clamp(1.75rem,2.8vw,2.35rem)] font-normal text-white">
            About Lý Minh Bá
          </h2>
        </motion.div>

        {/* Two-Column Poetic Profile Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Minimalist Headshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="md:col-span-5 max-w-sm mx-auto md:max-w-none w-full space-y-3"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#141414] rounded-xs border border-white/[0.1] hover:border-[#E89D75]/40 transition-colors duration-500">
              <img
                src={BIOGRAPHY_DATA.headshotUrl}
                alt={BIOGRAPHY_DATA.name}
                className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-['Plus_Jakarta_Sans'] text-white/40 tracking-wider uppercase">
              <span className="text-[#E89D75]/80">Lý Minh Bá</span>
              <span>Saigon, Vietnam</span>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-7 space-y-6 sm:space-y-8 font-['Plus_Jakarta_Sans'] text-[#B8B8B8]"
          >
            {/* Story Lead Quote & Artistic Premise */}
            <div className="border-l-2 border-[#E89D75] pl-5 py-1 space-y-3 bg-white/[0.015] rounded-r-xs">
              <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[17px] font-medium leading-[1.65] text-white text-justify">
                Starting as a teenage filmmaker at 17, Bá builds his cinema around understated realism—where emotion lies in actions and silences rather than words.
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-[13.5px] sm:text-[14.5px] font-normal leading-[1.7] text-white/70 text-justify">
                His films explore the fragile boundaries between intimacy and estrangement, memory and desire, reality and the uncanny. Rooted in the textures of contemporary Vietnamese life, his work finds its stories in the silences, contradictions, and quiet violence of human relationships.
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-5 text-[14px] sm:text-[15px] font-normal leading-[1.78] text-[#B0B0B0] text-justify">
              <p>
                <strong className="font-medium text-[#E89D75]">Lý Minh Bá (b. 2001)</strong> is a filmmaker born and raised in Saigon, Vietnam. He studied Cinema Studies at Hoa Sen University, Film Directing at the Ho Chi Minh City University of Theatre and Cinema, and completed an intensive filmmaking fellowship at the Korean Academy of Film Arts (KAFA). In 2026, he was selected for Platform BUSAN at the Busan International Film Festival (BIFF).
              </p>

              <p>
                His narrative shorts include 'Humming Wood' (Rừng Rù Rì, 2022) and 'Glorious Nightfall' (Tàn Ngày Rực Rỡ, 2024)—a Top 5 winner of the CJ Short Film Project 2023 that competed at SeaShorts Film Festival and Jogja-NETPAC Asian Film Festival (JAFF), before premiering on NOWNESS ASIA.
              </p>

              <p>
                Alongside writing and directing his own works, Bá works extensively as a 1st Assistant Director (1st AD) and Line Producer on Vietnamese commercial and independent feature films, including '1982' (dir. Nguyễn Hoàng Điệp), 'Hell Trotter' (dir. Lưu Thành Luân), 'Karaoke Kill' (dir. Hoàng Lê), 'Mon's Apartment' (dir. Lê Bình Giang), and more. He also serves as a mentor and jury member for youth film programs at British University Vietnam (BUV), Arena Glocal Camp, Design ITUS, Trigger Film Academy, Red Carpet, and Outr Space.
              </p>
            </div>


          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
