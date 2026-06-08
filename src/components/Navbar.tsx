import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, ChevronRight, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface NavbarProps {
  activeSection: string;
  onOpenAdmin: () => void;
}

export default function Navbar({ activeSection, onOpenAdmin }: NavbarProps) {
  const { profile, language, setLanguage, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t('navHome'), href: '#hero', id: 'hero' },
    { name: t('navAbout'), href: '#about', id: 'about' },
    { name: t('navServices'), href: '#services', id: 'services' },
    { name: t('navPortfolio'), href: '#portfolio', id: 'portfolio' },
    { name: t('navProcess'), href: '#process', id: 'process' },
    { name: t('navContact'), href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'glass-navbar py-4 shadow-[0_10px_30px_-10px_rgba(3,7,18,0.7)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Branding */}
        <motion.a
          id="navbar-logo"
          href="#hero"
          onClick={(e) => handleScrollTo(e, 'hero')}
          className="flex items-center gap-2 group cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-650 rounded-xl flex items-center justify-center font-extrabold text-xl text-white shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-transform duration-300 group-hover:scale-105 p-[2px] overflow-hidden">
            {profile.logoUrl ? (
              <div className="w-full h-full bg-black rounded-[0.6rem] flex items-center justify-center overflow-hidden">
                <img src={profile.logoUrl} alt="Logo" className="w-full h-full object-contain" />
              </div>
            ) : (
              <span>{profile.websiteName ? profile.websiteName.charAt(0).toUpperCase() : 'R'}</span>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-widest text-white font-sans group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-sky-400 transition-all uppercase">
              {profile.websiteName || 'Rahmatullo.com'}
            </span>
            <span className="text-[9px] text-gray-500 font-mono tracking-wider">
              PRIME DIGITAL DEVELOPER
            </span>
          </div>
        </motion.a>

        {/* Unified Mobile and Desktop hamburger trigger */}
        <div className="flex items-center gap-4">
          {/* Desktop/Tablet Direct Language Switcher */}
          <div className="hidden sm:flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl font-mono text-xs">
            {(['TJK', 'ENG', 'RUS'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  language === lang
                    ? 'text-cyan-400 bg-white/10 shadow-sm border border-white/5 font-extrabold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/30 active:scale-95 transition-all shadow-md cursor-pointer relative z-50"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5 text-cyan-400 animate-spin-once" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Unified Luxurious Menu Drawer Overlays */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xl z-30"
            />

            {/* Sliding Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-screen w-full sm:w-[440px] bg-black/90 border-l border-white/10 shadow-2xl z-40 overflow-y-auto"
            >
              <div className="p-8 pt-24 h-full flex flex-col justify-between">
                {/* Visual Accent Corner Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Menu List */}
                <div className="flex flex-col gap-1 z-10">
                  <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">{t('navNavigationTitle')}</span>
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleScrollTo(e, link.id)}
                        className={`group flex items-center justify-between text-xl font-bold tracking-tight py-3 px-4 rounded-xl transition-all ${
                          activeSection === link.id
                            ? 'text-[#22d3ee] bg-white/5 border-l-2 border-[#22d3ee]'
                            : 'text-gray-300 hover:text-white hover:bg-white/2 border-l-2 border-transparent'
                        }`}
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.name}
                        </span>
                        <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all ${
                          activeSection === link.id ? 'opacity-100 text-[#22d3ee]' : 'text-gray-400'
                        }`} />
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom interactive section */}
                <div className="flex flex-col gap-6 mt-12 mb-6 z-10">
                  {/* Language Selector */}
                  <div className="bg-white/3 border border-white/5 rounded-xl p-4">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-2">{t('navLanguageTitle')}</span>
                    <div className="flex items-center gap-2 font-mono text-xs w-full">
                      {(['TJK', 'ENG', 'RUS'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`flex-1 py-2 rounded-lg font-bold transition-all text-center border cursor-pointer ${
                            language === lang
                              ? 'text-cyan-400 bg-white/10 border-cyan-500/30 font-extrabold shadow-sm'
                              : 'text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/5 border-transparent'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions (Admin Panel & Contact Button) */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onOpenAdmin();
                      }}
                      className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-purple-400 border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-400/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      {t('navAdminPanelBtn')}
                    </button>

                    <a
                      href="#contact"
                      onClick={(e) => handleScrollTo(e, 'contact')}
                      className="w-full py-4 px-4 bg-white hover:bg-[#22d3ee] text-black font-extrabold text-xs font-sans text-center uppercase tracking-wider rounded-xl transition-all shadow-xl hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-1.5"
                    >
                      {t('navContactMe')}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Aesthetic Credit Line */}
                  <div className="text-center">
                    <span className="text-[9px] text-[#444] font-mono tracking-widest uppercase">
                      TAJIK DIGITAL &copy; {new Date().getFullYear()}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
