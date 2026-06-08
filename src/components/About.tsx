import { motion } from 'motion/react';
import { ShieldCheck, Award, ThumbsUp, Code, CheckCircle, Smartphone } from 'lucide-react';
import { IMAGES } from '../types';
import { useApp } from '../context/AppContext';

export default function About() {
  const { stats, profile, t } = useApp();

  const statCards = [
    {
      label: t('aboutStatProjects'),
      value: `${stats.projectsCount}+`,
      subText: t('aboutStatProjectsSub'),
      icon: Code,
      glow: 'glow-blue',
      color: 'text-sky-400',
      bgGlow: 'bg-sky-500/10'
    },
    {
      label: t('aboutStatExperience'),
      value: `${stats.experienceYears} ${t('aboutYearsSuffix')}`,
      subText: t('aboutStatExperienceSub'),
      icon: Award,
      glow: 'glow-purple',
      color: 'text-purple-400',
      bgGlow: 'bg-purple-500/10'
    },
    {
      label: t('aboutStatSatisfaction'),
      value: `${stats.clientsSatisfaction}%`,
      subText: t('aboutStatSatisfactionSub'),
      icon: ThumbsUp,
      glow: 'glow-gold',
      color: 'text-amber-400',
      bgGlow: 'bg-amber-500/10'
    },
    {
      label: t('aboutStatMiniApps'),
      value: `${stats.miniAppsCreated}+`,
      subText: t('aboutStatMiniAppsSub'),
      icon: Smartphone,
      glow: 'glow-teal',
      color: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10'
    }
  ];

  const highlights = [
    t('aboutHighlight1'),
    t('aboutHighlight2'),
    t('aboutHighlight3'),
    t('aboutHighlight4'),
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute right-1/4 top-1/3 w-96 h-96 rounded-full bg-sky-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
            {t('aboutSectionTag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            {t('aboutTitlePrefix')} <br />
            <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">{t('aboutTitleGlow')}</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mt-2" />
        </div>

        {/* Master Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Card with luxury decorations */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] p-[1.5px] bg-gradient-to-tr from-sky-500/30 to-purple-500/30 shadow-2xl overflow-hidden group"
            >
              {/* Inner glowing halo on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-sky-400/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Picture frame */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0a0f1d] relative">
                <img
                  src={profile.avatarUrl || null}
                  alt={`${profile.name} - ${profile.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 font-sans"
                  referrerPolicy="no-referrer"
                />

                {/* Fade over the picture */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

                {/* Overlying title badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-premium rounded-2xl border border-white/5">
                  <p className="text-sm font-bold text-white uppercase tracking-wider">{profile.name}</p>
                  <p className="text-[10px] font-mono text-sky-400 mt-0.5 uppercase tracking-widest">{profile.role}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio detailing philosophy & statistics */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {profile.introTitle}
            </h3>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {profile.bio}
            </p>

            {profile.quote && (
              <blockquote className="border-l-2 border-purple-500 pl-4 my-2 italic text-gray-300 text-sm">
                «{profile.quote}»
              </blockquote>
            )}

            {/* Quick checklist points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {highlights.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs text-gray-300">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Grid of Statistics and Achievements Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {statCards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`glass-card p-4 rounded-2xl flex flex-col gap-2 relative overflow-hidden interactive-card ${card.glow}`}
                >
                  {/* Subtle color spot behind the card */}
                  <div className={`absolute -right-6 -bottom-6 w-16 h-16 rounded-full blur-xl ${card.bgGlow}`} />
                  
                  <div className="flex justify-between items-center relative z-10">
                    <span className={`text-2xl md:text-3xl font-extrabold tracking-tight text-white`}>
                      {card.value}
                    </span>
                    <card.icon className={`w-5 h-5 ${card.color} opacity-85`} />
                  </div>
                  
                  <div className="relative z-10 text-left">
                    <p className="text-xs font-semibold text-gray-200">{card.label}</p>
                    <p className="text-[10px] text-gray-500 font-mono mt-0.5">{card.subText}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
