import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Process() {
  const { processSteps, t } = useApp();
  
  // Dynamic Icon Resolver
  const renderIcon = (iconName: string, idx: number) => {
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    
    // Choose beautiful alternating gradients for icons
    let gradientClass = 'from-sky-400 to-blue-500 text-sky-400';
    if (idx % 2 !== 0) gradientClass = 'from-purple-400 to-violet-500 text-purple-400';

    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <section
      id="process"
      className="py-24 px-6 md:px-12 bg-[#050505] relative overflow-hidden"
    >
      {/* Background radial overlays */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-sky-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/5 blur-[120px] pointer-events-none" />

      {/* Structured Grid Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-purple-400 uppercase">
            {t('processSectionTag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans">
            {t('processTitle')}
          </h2>
          <p className="text-gray-400 max-w-2xl text-xs md:text-sm mt-2">
            {t('processSubtitle')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-sky-400 rounded-full mt-4" />
        </div>

        {/* Dynamic Connected Process Workflow steps list linear display */}
        <div className="relative flex flex-col gap-12 max-w-4xl mx-auto">
          {/* Inner vertical connector line */}
          <div className="absolute left-[23px] md:left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-sky-500/20 via-purple-500/20 to-teal-500/20 hidden md:block" />

          {processSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`flex flex-col md:flex-row items-stretch gap-6 relative z-10 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* 1. Empty placeholder for layout balance on opposite side */}
                <div className="flex-1 hidden md:block" />

                {/* 2. Visual node indicator timeline bullet */}
                <div className="flex items-start justify-start md:justify-center relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    idx % 2 === 0 
                      ? 'bg-[#030712] border-sky-500/40 text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.2)]' 
                      : 'bg-[#030712] border-purple-500/40 text-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
                  }`}>
                    {renderIcon(step.iconName, idx)}
                  </div>
                </div>

                {/* 3. Text details panel card */}
                <div className="flex-1 text-left glass-card p-6 md:p-8 rounded-[2rem] glow-blue relative interactive-card group">
                  {/* Step numerical header absolute tag */}
                  <span className="absolute top-4 right-6 text-3xl font-extrabold font-mono tracking-tighter opacity-10 text-white select-none">
                    {step.stepNumber}
                  </span>

                  <div className="flex flex-col gap-2">
                    {/* Tiny visual badge */}
                    <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                      {t('processStepLabel')} {step.stepNumber}
                    </span>
                    
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      {step.description}
                    </p>

                    {/* Outcome detail footer indicator */}
                    <div className="border-t border-white/5 mt-4 pt-3 flex flex-col gap-0.5">
                      <span className="text-[9px] font-mono text-cyan-400 tracking-widest uppercase">
                        {t('processPhaseResult')}
                      </span>
                      <span className="text-[11px] font-bold text-gray-200">
                        {step.phaseResult}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
