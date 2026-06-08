import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Service } from '../types';
import { useApp } from '../context/AppContext';

export default function Services() {
  const { services, t } = useApp();
  
  // Dynamic Icon resolver
  const renderIcon = (iconName: string, glowColor: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.Cpu;
    
    // Resolve Lucide theme coloring based on color values
    let colorClass = 'text-sky-400';
    if (glowColor === 'purple') colorClass = 'text-purple-400';
    if (glowColor === 'gold') colorClass = 'text-amber-400';
    if (glowColor === 'teal') colorClass = 'text-emerald-400';

    return <IconComponent className={`w-6 h-6 ${colorClass}`} />;
  };

  const getGlowClass = (glowColor: string) => {
    switch (glowColor) {
      case 'purple': return 'glow-purple hover:border-purple-500/30';
      case 'gold': return 'glow-gold hover:border-amber-500/30';
      case 'teal': return 'glow-teal hover:border-emerald-500/30';
      default: return 'glow-blue hover:border-sky-500/30';
    }
  };

  const getGlowTagClass = (glowColor: string) => {
    switch (glowColor) {
      case 'purple': return 'bg-purple-500/10 border-purple-500/20 text-purple-300';
      case 'gold': return 'bg-amber-500/10 border-amber-500/20 text-amber-300';
      case 'teal': return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300';
      default: return 'bg-sky-500/10 border-sky-500/20 text-sky-300';
    }
  };

  return (
    <section
      id="services"
      className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden"
    >
      {/* Background neon flares */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-purple-400 uppercase">
            {t('servicesSectionTag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            {t('servicesTitle')}
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base mt-2">
            {t('servicesSubtitle')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-sky-400 rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className={`glass-card p-8 rounded-3xl relative overflow-hidden interactive-card ${getGlowClass(service.glowColor)}`}
            >
              {/* Corner accent glow light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl" />
              
              {/* Dynamic Icon */}
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                {renderIcon(service.icon, service.glowColor)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed mb-6 h-14 overflow-hidden">
                {service.description}
              </p>

              {/* Bullet Benefits list */}
              <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
                {service.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span className="text-[11px] text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Decorative category label */}
              <div className="absolute bottom-6 right-8">
                <span className={`text-[9px] font-mono font-bold uppercase tracking-widest border rounded px-2 py-0.5 ${getGlowTagClass(service.glowColor)}`}>
                  Premium
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
