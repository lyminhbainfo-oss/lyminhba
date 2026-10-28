import React from 'react';
import { motion } from 'motion/react';

export const InDevelopmentSection: React.FC = () => {
  return (
    <section
      id="in-development"
      className="py-20 sm:py-28 lg:py-36 bg-[#0A0A0A] relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.08 }}
        transition={{ duration: 1.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-5 sm:px-8"
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
            In Development
          </div>
          <h2 className="font-['Newsreader'] text-[clamp(1.75rem,2.8vw,2.35rem)] font-normal text-white">
            Upcoming Work
          </h2>
        </motion.div>

        {/* Project Monograph Container (Pure Minimal Cinema Monograph) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="border border-white/[0.1] bg-[#101010] p-6 sm:p-10 lg:p-12 space-y-10 sm:space-y-12 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[11px] font-['Plus_Jakarta_Sans'] uppercase tracking-[0.18em] text-[#E89D75]/80 block mb-1">
                Short Narrative Film
              </span>
              <h3 className="font-['Newsreader'] text-[28px] sm:text-[34px] font-normal text-white tracking-tight">
                <span className="text-[#E89D75]">Doping</span>
              </h3>
            </div>
            <span className="text-[11px] font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-[#E89D75] border border-[#E89D75]/40 px-3 py-1 rounded-[2px] w-fit font-medium">
              In Development
            </span>
          </div>

          {/* Clean Specs Table */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-6 py-4 border-y border-white/[0.08] font-['Plus_Jakarta_Sans'] text-xs">
            <div>
              <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-1">Format</span>
              <span className="text-white/90 font-normal">Short Film</span>
            </div>
            <div>
              <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-1">Runtime</span>
              <span className="text-white/90 font-normal">15 – 20 Mins</span>
            </div>
            <div>
              <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-1">Genre</span>
              <span className="text-white/90 font-normal">Psychological Drama</span>
            </div>
            <div>
              <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-1">Role</span>
              <span className="text-white/90 font-normal">Writer & Director</span>
            </div>
            <div>
              <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-1">Language</span>
              <span className="text-white/90 font-normal">Vietnamese</span>
            </div>
            <div>
              <span className="text-white/40 uppercase block text-[10px] tracking-wider mb-1">Country</span>
              <span className="text-white/90 font-normal">Vietnam</span>
            </div>
          </div>

          {/* Logline */}
          <div className="space-y-2">
            <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-medium uppercase tracking-[0.16em] text-[#E89D75] block">
              Logline
            </span>
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] sm:text-[16px] font-normal leading-[1.7] text-white/90 text-justify">
              To turn her son into a champion, a mother is willing to do whatever it takes, even resorting to doping. But moments before the race begins, Thủy, a shy middle-school boy, dares to defy her for the first time.
            </p>
          </div>

          {/* Director's Statement */}
          <div className="space-y-6 pt-6 border-t border-white/[0.08]">
            <span className="text-[11px] font-['Plus_Jakarta_Sans'] font-medium uppercase tracking-[0.16em] text-[#E89D75] block">
              Director's Statement
            </span>

            <div className="space-y-5 font-['Plus_Jakarta_Sans'] text-[14.5px] sm:text-[15.5px] font-normal leading-[1.8] text-[#C0C0C0] text-justify">
              <p>
                For sixteen years, I was part of the national swimming team. My childhood was shaped by the smell of chlorine and training sessions that began at five in the morning. While other children were still asleep, I was already in the water. After training, I went to school. Day after day, training and exhaustion became an ordinary part of my life.
              </p>

              <p>
                My mother was a teacher. She believed in discipline, grades, and doing well at whatever was expected of me. Growing up with her, I gradually came to believe that as long as I was good enough, she would be at ease.
              </p>

              <p>
                I remember those days at competitions, when my body was exhausted after lap after lap, my skin wrinkled from spending too long in the water, and my throat raw from swallowing pool water. But what I remember most is not the exhaustion. It is the moment I touched the wall and looked up at the stands, searching for my mother. I wanted to see her smile, or at least receive a nod. But most of the time, she would simply signal for me to prepare for the next race and remind me to swim faster.
              </p>

              <p>
                Years after leaving the pool, I still remember those moments. I am not sure how clearly I will remember the rest of my childhood as time passes, but that image of looking up at the stands from the water remains unchanged. It became the starting point for <em className="italic text-[#E89D75]">Doping</em>. That is why I pay particular attention to details rooted in the characters' physical experiences and sensations, especially in the final scene. I want the audience to feel a sense of suffocation, something concrete and immediate.
              </p>

              <p>
                In the film, Thủy's mother is afraid her son will fall behind others, while Thủy endures pain in exchange for her recognition. They stand on opposite sides of the pool, both wanting a medal, yet what each of them truly needs is recognition from the other.
              </p>

              <p>
                The pill and the red smear of blood are two images I want to emphasize throughout Thủy's journey. They are tied to the price of having to win at all costs. At the end of the film, when Thủy retrieves the bloodied pill and swallows it in the rain, he is no longer simply defying his mother. He is beginning to accept the very thing that has hurt him. When Thủy turns to look directly into the camera, it is not an accusation against his mother, but an expression of sorrow for them both.
              </p>

              <p>
                It has been many years since I swam the way I used to. Sometimes, the smell of a swimming pool still brings me back to those mornings. I made <em className="italic text-[#E89D75]">Doping</em> because I wanted to return to that period of my life, not to judge my mother. As a child, all I knew was that I had to keep trying to make her happy. Now, I want to understand why, despite trying so hard, neither of us could ever quite find a way to make the other happy.
              </p>

              <p className="font-['Newsreader'] italic text-[16px] sm:text-[17.5px] text-[#E89D75] leading-[1.65] pt-2 text-justify">
                Perhaps back then, if I had swum faster, my mother would have been a little happier. But another race would eventually come. And I would have to swim even faster.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
