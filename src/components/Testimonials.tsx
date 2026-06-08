import { motion } from 'motion/react';
import { Star, Quote, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Testimonials() {
  const { testimonials, t } = useApp();

  return (
    <section
      id="testimonials"
      className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden"
    >
      {/* Background radial overlay glows */}
      <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-start gap-3 mb-16 max-w-2xl text-left">
          <span className="text-xs font-mono tracking-[0.25em] text-sky-400 uppercase">
            {t('testimonialsSectionTag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            {t('testimonialsTitle')}
          </h2>
          {t('testimonialsSubtitle') && (
            <p className="text-gray-400 text-xs md:text-sm mt-2">
              {t('testimonialsSubtitle')}
            </p>
          )}
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mt-2" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 md:p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between glow-purple interactive-card group"
            >
              {/* Absolutes Quote watermark symbol */}
              <Quote className="absolute right-6 top-6 w-16 h-16 opacity-5 text-purple-400 group-hover:scale-110 group-hover:opacity-10 transition-all pointer-events-none" />

              {/* Main quote feedback content text */}
              <div className="relative z-10 flex-grow text-left">
                {/* Visual rating stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: client.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                  « {client.feedback} »
                </p>
              </div>

              {/* Bottom bio info badge */}
              <div className="relative z-10 flex items-center gap-4 mt-8 pt-6 border-t border-white/5 text-left">
                {/* Initials-based elegant gradient image avatar */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold tracking-tighter text-sm ${
                  client.gender === 'male'
                    ? 'bg-gradient-to-tr from-sky-600 to-indigo-500 text-white'
                    : 'bg-gradient-to-tr from-fuchsia-600 to-orange-500 text-white'
                } border border-white/10 shadow-lg`}>
                  {client.name.split(' ').map((n) => n[0]).join('')}
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                    {client.name}
                    {/* Tiny verified tick */}
                    <div className="w-3.5 h-3.5 rounded-full bg-sky-500/10 border border-sky-400/30 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-sky-400" />
                    </div>
                  </span>
                  
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">
                    {client.position}, <span className="text-gray-400">{client.company}</span>
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
