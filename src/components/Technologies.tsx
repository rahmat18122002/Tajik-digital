import { motion } from 'motion/react';
import { Cpu, Atom, Sparkles } from 'lucide-react';
import { TECH_STACK_DATA } from '../types';
import { useApp } from '../context/AppContext';

export default function Technologies() {
  const { t } = useApp();

  return (
    <section
      id="technologies"
      className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden"
    >
      {/* Background visual flares */}
      <div className="absolute right-1/3 top-1/4 w-80 h-80 rounded-full bg-sky-650/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/3 bottom-1/4 w-80 h-80 rounded-full bg-purple-650/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
            {t('techSectionTag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            {t('techTitle')}
          </h2>
          <p className="text-gray-400 max-w-xl text-xs md:text-sm mt-2">
            {t('techSubtitle')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Matrix Flex/Grid of logos styled glass-card style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {TECH_STACK_DATA.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between text-left group interactive-card"
              style={{
                borderColor: `rgba(255, 255, 255, 0.05)`,
              }}
            >
              {/* Custom border glow on mouse hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" 
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${tech.glowColor} 0%, transparent 70%)`
                }}
              />

              {/* Header block within card */}
              <div className="flex justify-between items-center mb-6 relative z-10">
                {/* Tech logo representation */}
                <div 
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border font-sans font-bold text-sm text-white group-hover:scale-110 transition-transform duration-300"
                  style={{
                    borderColor: `${tech.glowColor}25`,
                    color: tech.glowColor === '#ffffff' ? '#e2e8f0' : tech.glowColor
                  }}
                >
                  {/* Dynamic clean letter abbreviation if brand logo empty */}
                  {tech.name[0]}
                </div>

                <span className="text-[10px] font-mono font-bold text-gray-500 group-hover:text-sky-350 transition-colors">
                  {tech.level}
                </span>
              </div>

              {/* Title of tool */}
              <div className="relative z-10">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {tech.name}
                </h3>

                {/* Simulated luxury progress mini-indicator */}
                <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                  <div 
                    className="absolute left-0 top-0 bottom-0 rounded-full"
                    style={{
                      width: tech.level,
                      backgroundColor: tech.glowColor || 'var(--color-accent-blue)'
                    }}
                  />
                </div>
                
                {/* Abbreviation details */}
                <span className="text-[8px] font-mono text-gray-600 block mt-1.5 uppercase tracking-widest">
                  {tech.category} MODULE LOADED
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Core summary badge banner */}
        <div className="mt-16 flex justify-center">
          <div className="glass-premium px-6 py-3 rounded-2xl border border-white/5 flex items-center gap-3">
            <Atom className="w-4 h-4 text-sky-400 animate-spin" />
            <p className="text-xs font-mono text-gray-400">
              {t('techFooterBanner')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
