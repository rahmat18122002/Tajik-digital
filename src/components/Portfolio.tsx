import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Filter, Sparkles, Layers, Check, X, Lock, Clock } from 'lucide-react';
import { Project } from '../types';
import { useApp } from '../context/AppContext';

export default function Portfolio() {
  const { projects, t } = useApp();
  const [activeFilter, setActiveFilter] = useState<'all' | 'websites' | 'miniapps' | 'erp' | 'pos' | 'bots'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { name: t('portfolioCatAll'), id: 'all' },
    { name: t('portfolioCatWebsites'), id: 'websites' },
    { name: t('portfolioCatMiniapps'), id: 'miniapps' },
    { name: t('portfolioCatErp'), id: 'erp' },
    { name: t('portfolioCatPos'), id: 'pos' },
    { name: t('portfolioCatBots'), id: 'bots' },
  ] as const;

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.categoryId === activeFilter;
  });

  return (
    <section
      id="portfolio"
      className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden"
    >
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start gap-3">
            <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
              {t('portfolioSectionTag')}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
              {t('portfolioTitle')}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mt-2" />
          </div>
          <p className="text-gray-400 max-w-md text-xs md:text-sm text-left">
            {t('portfolioSubtitle')}
          </p>
        </div>

        {/* Filter Navigation layout */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-white/5 justify-start text-left">
          <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>{t('portfolioFilterLabel')}</span>
          </div>

          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 pointer-events-auto cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-sky-400 to-purple-500 text-black font-semibold shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative flex flex-col rounded-3xl overflow-hidden glass-card p-4 interactive-card ${
                  project.isComingSoon 
                    ? 'border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.05)] bg-[#0c0d16]/80' 
                    : 'glow-blue'
                }`}
              >
                {/* Visual Thumbnail Image frame with fallback */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#0a0f1d] border border-white/5">
                  <img
                    src={project.image || null}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      // Fallback dynamically on error
                      const target = e.target as HTMLImageElement;
                      if (target.src !== project.fallbackImage) {
                        target.src = project.fallbackImage;
                      }
                    }}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category overlay */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase text-sky-400">
                    {project.category}
                  </div>

                  {/* Coming Soon absolute badge */}
                  {project.isComingSoon && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-extrabold font-mono tracking-wider text-[9px] px-2.5 py-1 rounded-full uppercase shadow-[0_0_15px_rgba(34,211,238,0.45)] animate-pulse">
                      {t('portfolioComingSoon').toUpperCase()}
                    </div>
                  )}

                  {/* Frosted interactive lock overlay for coming soon item */}
                  {project.isComingSoon && (
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-white font-mono text-[10px] uppercase font-bold tracking-widest bg-cyan-400/10 border border-cyan-400/30 px-3 py-1.5 rounded-xl text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] flex items-center gap-1.5 leading-none">
                        <Lock className="w-3.5 h-3.5" />
                        {t('portfolioInDevLabel')}
                      </div>
                      <span className="text-[10px] text-gray-400 font-sans tracking-wide">{t('portfolioInDevSub')}</span>
                    </div>
                  )}
                </div>

                {/* Info Text */}
                <div className="flex flex-col gap-3 text-left flex-grow px-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 h-10">
                    {project.description}
                  </p>

                  {/* Tech Stack Horizontal tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono bg-white/[0.03] border border-white/5 rounded-md px-2 py-0.5 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[9px] font-mono bg-white/[0.03] border border-white/5 rounded-md px-2 py-0.5 text-sky-400">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Link Actions */}
                <div className="flex items-center justify-between gap-4 border-t border-white/5 mt-6 pt-4 px-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold uppercase tracking-wider text-sky-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {t('portfolioMoreDetails')}
                  </button>

                  <div className="flex items-center gap-3">
                    {project.isComingSoon ? (
                      <div className="flex items-center gap-1 bg-white/2 border border-white/5 text-gray-500 rounded-lg px-2 py-1 text-[10px] font-mono select-none">
                        <Clock className="w-3 h-3 text-cyan-400/70" />
                        <span>SOON</span>
                      </div>
                    ) : (
                      <>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            referrerPolicy="no-referrer"
                            className="w-8.5 h-8.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/15 transition-all"
                            title="GitHub Репозиторий"
                            aria-label="View Github link"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            referrerPolicy="no-referrer"
                            className="w-8.5 h-8.5 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 hover:text-white hover:bg-sky-500/25 transition-all"
                            title="Намоиши Лоиҳа"
                            aria-label="View live demo link"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty placeholder state if nothing exists */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border border-dashed border-white/5 rounded-3xl mt-6 bg-white/[0.01]"
          >
            <Layers className="w-10 h-10 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-sm font-mono uppercase tracking-widest">{t('portfolioEmptyTitle')}</p>
            <p className="text-xs text-gray-600 mt-2">{t('portfolioEmptySub')}</p>
          </motion.div>
        )}

      </div>

      {/* Details Modular Slide-out/Overlay popup screen */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 md:px-12 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, cubicBezier: [0.25, 0.8, 0.25, 1] }}
              className="w-full max-w-4xl max-h-[85vh] rounded-3xl glass-premium overflow-y-auto p-6 md:p-10 border border-white/10 shadow-2xl relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/5 border border-white/10 hover:bg-white/15 rounded-xl flex items-center justify-center text-white transition-all cursor-pointer"
                aria-label="Close modal dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
                
                {/* Left side column: Details and media */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  {/* Aspect image layout with absolute tag */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/50 border border-white/5">
                    <img
                      src={selectedProject.image || null}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== selectedProject.fallbackImage) {
                          target.src = selectedProject.fallbackImage;
                        }
                      }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-sky-500 text-black px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest">
                      {selectedProject.category}
                    </div>
                  </div>

                  {/* Actions buttons directly under */}
                  <div className="flex gap-4">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        referrerPolicy="no-referrer"
                        className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 to-purple-500 text-black font-semibold text-center text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all transform hover:-translate-y-0.5"
                      >
                        {t('portfolioViewLive').toUpperCase()}
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        referrerPolicy="no-referrer"
                        className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-center text-xs flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        GITHUB
                      </a>
                    )}
                  </div>
                </div>

                {/* Right side column: Detailed info text */}
                <div className="lg:col-span-6 flex flex-col gap-4 justify-between">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-purple-400">{t('portfolioModalFullDetails')}</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed mt-2">{selectedProject.longDescription}</p>
                    
                    {/* Key features of the project */}
                    <div className="flex flex-col gap-2 mt-4">
                      <p className="text-[11px] uppercase tracking-widest font-mono text-gray-400">{t('portfolioModalFeatures')}</p>
                      {selectedProject.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-emerald-400" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology tags stack */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500">{t('portfolioModalTechUsed')}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono bg-sky-500/5 hover:bg-sky-500/10 border border-sky-500/20 rounded-md px-2.5 py-1 text-sky-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
