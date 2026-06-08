import React from 'react';
import { Terminal, Heart, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface FooterProps {
  onOpenAdmin: () => void;
}

export default function Footer({ onOpenAdmin }: FooterProps) {
  const { profile, t } = useApp();
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
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
    <footer
      id="main-footer"
      className="bg-[#050505] border-t border-white/5 py-16 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decors thin line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-sky-450/20 via-purple-400/10 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col items-start gap-4 text-left">
          <a href="#hero" onClick={(e) => handleScrollTo(e, 'hero')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-650 flex items-center justify-center font-extrabold text-sm text-white shadow-[0_0_15px_rgba(34,211,238,0.25)] transition-transform duration-300 group-hover:scale-105 p-[1px] overflow-hidden">
              {profile.logoUrl ? (
                <div className="w-full h-full bg-black rounded-[0.6rem] flex items-center justify-center overflow-hidden">
                  <img src={profile.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                </div>
              ) : (
                <span>{profile.websiteName ? profile.websiteName.charAt(0).toUpperCase() : 'R'}</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-widest text-white font-sans uppercase">
                {profile.websiteName || 'Rahmatullo.com'}
              </span>
              <span className="text-[9px] text-gray-600 font-mono tracking-wider uppercase">
                {t('footerPremiumDeveloper')}
              </span>
            </div>
          </a>

          <p className="text-xs text-gray-500 font-mono">
            &copy; {currentYear} {profile.websiteName || 'Rahmatullo.com'}. {t('footerRightsReserved')}
          </p>
        </div>

        {/* Middle Side: Quick shortcuts links list */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, 'hero')}
            className="text-xs text-gray-400 hover:text-white font-medium uppercase tracking-wider transition-colors"
          >
            {t('navHome')}
          </a>
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="text-xs text-gray-400 hover:text-white font-medium uppercase tracking-wider transition-colors"
          >
            {t('navAbout')}
          </a>
          <a
            href="#services"
            onClick={(e) => handleScrollTo(e, 'services')}
            className="text-xs text-gray-400 hover:text-white font-medium uppercase tracking-wider transition-colors"
          >
            {t('navServices')}
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleScrollTo(e, 'portfolio')}
            className="text-xs text-gray-400 hover:text-white font-medium uppercase tracking-wider transition-colors"
          >
            {t('navPortfolio')}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="text-xs text-gray-400 hover:text-white font-medium uppercase tracking-wider transition-colors"
          >
            {t('navContact')}
          </a>
          <button
            onClick={onOpenAdmin}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
          >
            <Lock className="w-3 h-3" />
            {t('navAdmin')}
          </button>
        </div>

        {/* Right Side: Patrotic branding tag */}
        <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
          <span>{t('footerMadeWith')}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" />
          <span>{t('footerInDushanbe')}</span>
        </div>

      </div>
    </footer>
  );
}
