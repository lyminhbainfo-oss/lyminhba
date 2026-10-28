import React from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.08] py-14 font-['Plus_Jakarta_Sans'] text-white/50 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-5 sm:px-8"
      >
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Copyright & Disclaimer Column (Moved up from bottom to replace deleted manifesto) */}
          <div className="md:col-span-5 space-y-2">
            <div>
              <span className="text-[#E89D75] font-medium text-[13.5px]">Lý Minh Bá</span>
              <span className="mx-2 text-white/20">·</span>
              <span className="text-[13px] text-white/60">© {new Date().getFullYear()} All rights reserved.</span>
            </div>
            <p className="text-[12px] leading-relaxed text-white/40 max-w-sm">
              All film materials, stills, screenplay texts, and director's statements are protected by copyright.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">
              Navigation
            </div>
            <ul className="space-y-2 text-[13px]">
              <li>
                <a
                  href="#bio"
                  onClick={(e) => handleLinkClick(e, 'bio')}
                  className="hover:text-[#E89D75] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, 'projects')}
                  className="hover:text-[#E89D75] transition-colors"
                >
                  Filmography
                </a>
              </li>
              <li>
                <a
                  href="#in-development"
                  onClick={(e) => handleLinkClick(e, 'in-development')}
                  className="hover:text-[#E89D75] transition-colors"
                >
                  In Development
                </a>
              </li>
              <li>
                <a
                  href="#stills"
                  onClick={(e) => handleLinkClick(e, 'stills')}
                  className="hover:text-[#E89D75] transition-colors"
                >
                  Visual Archive
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="hover:text-[#E89D75] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Back To Top Column */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              {/* Only 'CONTACT' as requested */}
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium">
                CONTACT
              </div>
              <div className="space-y-1.5 text-[13px]">
                <div>
                  <a
                    href="mailto:lyminhba.info@gmail.com"
                    className="hover:text-[#E89D75] transition-colors text-white/80 underline underline-offset-4 decoration-white/20 hover:decoration-[#E89D75]"
                  >
                    lyminhba.info@gmail.com
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+84828997020"
                    className="hover:text-[#E89D75] transition-colors text-white/80 underline underline-offset-4 decoration-white/20 hover:decoration-[#E89D75]"
                  >
                    +84 828 997 020
                  </a>
                </div>
                <div className="text-white/40 text-[12px] pt-1">
                  Saigon (Ho Chi Minh City), Vietnam
                </div>
              </div>
            </div>

            {/* Back To Top Button */}
            <div>
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2.5 px-4 py-2 border border-white/10 hover:border-[#E89D75]/40 bg-[#121212] hover:bg-[#161616] rounded-xs text-[12px] uppercase tracking-[0.16em] text-white/70 hover:text-[#E89D75] transition-all cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp size={13} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
