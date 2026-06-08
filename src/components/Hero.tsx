import { motion } from 'motion/react';
import { ArrowRight, Send, Github, Sparkles, Code2, Cpu, CheckCircle } from 'lucide-react';
import { IMAGES } from '../types';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const { profile, stats, t } = useApp();

  const handleScrollTo = (targetId: string) => {
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 md:px-12 overflow-hidden bg-[#050505]"
    >
      {/* Cinematic Ambient Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Decorative vertical/horizontal thin line grid representing blueprints */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5 pointer-events-none" />
      <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute top-1/3 left-0 right-0 h-px bg-white/5 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column text details */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Animated agency tag line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full w-fit shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-cyan-400 font-mono">
              {t('heroAvailable')}
            </span>
          </motion.div>

          {/* Majestic Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.0] tracking-tighter text-white"
          >
            {t('heroTitlePrefix')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">{t('heroTitleGlow')}</span>{t('heroTitleSuffix')}
          </motion.h1>

          {/* Professional Paragraph Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light"
          >
            {t('heroSubtitle')}
          </motion.p>

          {/* Call to Actions buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center mt-4 w-full"
          >
            <button
              onClick={() => handleScrollTo('portfolio')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-550 via-cyan-500 to-blue-600 rounded-2xl font-bold text-sm uppercase tracking-wider text-white shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_10px_35px_rgba(6,182,212,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              {t('heroBtnPortfolio')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm uppercase tracking-wider text-white hover:bg-white/10 transition-all transform hover:-translate-y-0.5 duration-200 cursor-pointer"
            >
              {t('heroBtnContact')}
            </button>
          </motion.div>

          {/* Sleek Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex gap-8 mt-4"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-white">{stats.projectsCount}+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono">{t('heroStatProjects')}</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-white">{stats.clientsSatisfaction}%</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono">{t('heroStatSatisfaction')}</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-white">{stats.experienceYears}+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono">{t('heroStatExperience')}</span>
            </div>
          </motion.div>

          {/* Social and Messenger Direct Buttons Tajik-specific (Telegram + WhatsApp) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-6 mt-4 pt-6 border-t border-white/5 w-full"
          >
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t('heroDirectContact')}</span>
            
            <div className="flex items-center gap-4">
              <a
                href={profile.telegram.startsWith('http') ? profile.telegram : `https://t.me/${profile.telegram.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-500/30 hover:scale-110 transition-all duration-300"
                title="Telegram Алоқа"
                aria-label="Contact on Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={profile.whatsapp.startsWith('http') ? profile.whatsapp : `https://wa.me/${profile.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 hover:border-emerald-500/30 hover:scale-110 transition-all duration-300"
                title="WhatsApp Алоқа"
                aria-label="Contact on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.963 3.41 1.47 5.259 1.471 5.403.002 9.792-4.382 9.795-9.786.002-2.618-1.01-5.071-2.852-6.915C16.947 2.08 14.492 1.06 11.87 1.06 6.47 1.06 2.08 5.446 2.078 10.85c-.001 1.87.49 3.69 1.42 5.309L2.535 21.5l5.524-1.45c-1.442.87-3.08 1.34-4.8 1.34-1.72 0-3.32-.45-4.8-1.34L.057 24l6.59-4.846zm11.398-7.795c-.31-.155-1.83-.9-2.112-1.002-.282-.102-.487-.15-.69.155-.202.3-.778.983-.951 1.185-.175.202-.35.228-.66.073-1.366-.684-2.28-1.096-3.193-2.673-.243-.42.243-.39.69-.1.4.26.4.42.6.8.19.4.1.75-.05.9-.15.15-.69.83-.69.83s-.2.23-.05.4c.14.17.65 1.07 1.42 1.75.99.88 1.83 1.15 2.1 1.28.27.13.43.1.6-.1.17-.2.72-.83.9-1.12.18-.28.36-.23.67-.13.3.1 1.93.9 2.26 1.07.33.17.55.25.63.38.08.13.08.76-.22 1.59l-.02.05c-.58 1.71-2.5 2.1-4.1 1.31z"/>
                </svg>
              </a>

              <a
                href={profile.github.startsWith('http') ? profile.github : `https://github.com/${profile.github}`}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300"
                title="GitHub Панел"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right column perspective premium layout graphic */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 w-full max-w-[420px] bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl transition-all duration-500 hover:rotate-1"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="space-y-1">
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-bold font-mono">{t('heroLatestProject')}</div>
                <div className="text-2xl font-bold text-white tracking-tight">Tamosho Cinema</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e] animate-pulse"></div>
              </div>
            </div>

            {/* Premium app snapshot frame resembling standard media container */}
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-950 rounded-2xl mb-6 relative overflow-hidden group border border-white/10 shadow-inner">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-overlay pointer-events-none group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop')` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 active:scale-95 transition-all cursor-pointer">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300 font-mono border border-white/15">Next.js</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300 font-mono border border-white/15">Tailwind</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300 font-mono border border-white/15">TG API</span>
            </div>
          </motion.div>

          <div className="absolute -top-10 -right-6 w-32 h-32 bg-purple-600/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-6 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>
          
          <motion.div 
            initial={{ scale: 0.9, rotate: -6 }}
            animate={{ scale: 1, rotate: -6 }}
            className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-white/10 p-5 rounded-3xl z-20 shadow-xl pointer-events-none"
          >
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-black text-xs">POS</div>
                <div>
                   <div className="text-xs font-bold text-white font-sans">{t('heroPosTitle')}</div>
                   <div className="text-[10px] text-gray-500 font-mono">{t('heroPosSubtitle')}</div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>

      {/* Elegant scroll pointer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity" onClick={() => handleScrollTo('about')}>
        <span className="text-[9px] font-mono tracking-widest text-gray-400 uppercase">{t('heroScrollDown')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1.5 h-6 bg-gradient-to-b from-sky-400 to-purple-500 rounded-full"
        />
      </div>
    </section>
  );
}
