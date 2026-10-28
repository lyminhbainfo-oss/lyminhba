import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const navLinks = [
    { label: 'About', href: '#bio', id: 'bio' },
    { label: 'Filmography', href: '#projects', id: 'projects' },
    { label: 'In Development', href: '#in-development', id: 'in-development' },
    { label: 'Stills', href: '#stills', id: 'stills' },
  ];

  // Dynamic subtle scroll elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sectionIds = ['intro', 'bio', 'projects', 'in-development', 'stills', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = (targetId: string) => {
    if (targetId === 'intro') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToTarget(targetId);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/[0.06] py-4'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Director Wordmark (Clean Minimal Grotesque like Eliška Cílková) */}
        <a
          href="#intro"
          onClick={(e) => handleLinkClick(e, 'intro')}
          className="text-white hover:text-[#E89D75] transition-colors tracking-wide text-[16px] sm:text-[18px] font-normal font-['Plus_Jakarta_Sans']"
        >
          Lý Minh Bá
        </a>

        {/* Minimalist Navigation (Pure quiet text links with dusk accent) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 font-['Plus_Jakarta_Sans'] text-[13.5px] font-normal tracking-[0.02em]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-[#E89D75] font-medium' : 'text-white/60 hover:text-[#E89D75]'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <button
            onClick={onOpenContact}
            className="text-white/60 hover:text-[#E89D75] transition-colors duration-200 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white/80 hover:text-white active:scale-95 transition-all cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Clean Minimal Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-white/[0.08] bg-[#0A0A0A]/95 backdrop-blur-xl px-6 py-6 space-y-4 font-['Plus_Jakarta_Sans'] text-[15px]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="block text-white/70 hover:text-white py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="block w-full text-left text-white/70 hover:text-white py-1.5 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
