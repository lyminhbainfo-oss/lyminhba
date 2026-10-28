import React from 'react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 lg:py-36 bg-[#0A0A0A] relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <h2
            style={{ color: '#e89d75' }}
            className="font-['Newsreader'] text-[clamp(1.75rem,2.8vw,2.35rem)] font-normal text-[#e89d75]"
          >
            Contact
          </h2>
        </motion.div>

        {/* Clean Minimal Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 font-['Plus_Jakarta_Sans'] text-[14.5px] font-normal text-white/70"
        >
          <a
            href="mailto:lyminhba.info@gmail.com"
            style={{ textDecorationLine: 'none' }}
            className="hover:text-[#E89D75] transition-colors no-underline"
          >
            lyminhba.info@gmail.com
          </a>

          <span className="hidden sm:inline text-white/20">·</span>

          <a
            href="tel:+84828997020"
            style={{ textDecorationLine: 'none' }}
            className="hover:text-[#E89D75] transition-colors no-underline"
          >
            +84 828 997 020
          </a>

          <span className="hidden sm:inline text-white/20">·</span>

          <span className="text-white/70">
            Ho Chi Minh City, Vietnam
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
