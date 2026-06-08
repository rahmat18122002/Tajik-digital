import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('Оғози боркунӣ...');
  const [isDone, setIsDone] = useState(false);

  const loadingPhrases = [
    'Ҷустуҷӯи ғояҳои муосир...',
    'Тарҳрезии сохтори умумӣ...',
    'Мукаммалсозии коду алгоритмҳо...',
    'Пайвастшавӣ ба Telegram Mini App API...',
    'Омодасозии интерфейси премиум...',
    'Иҷрои пурра ва тасдиқи сифат...'
  ];

  useEffect(() => {
    // Progress counter simulation
    const duration = 1600; // 1.6s
    const start = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const calculated = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(calculated);
      
      // Rotate phrases based on progress
      const phraseIndex = Math.min(
        loadingPhrases.length - 1,
        Math.floor((calculated / 100) * loadingPhrases.length)
      );
      setCurrentText(loadingPhrases[phraseIndex]);

      if (calculated >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 600); // Wait for fade exit transition
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="global-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-[#010409] z-[9999] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Subtle Cybernetic Background grid or glow */}
          <div className="absolute inset-0 radial-glow-1 opacity-60 pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px] top-1/4 left-1/4 animate-pulse" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-sky-600/5 blur-[100px] bottom-1/4 right-1/4" />

          <div className="max-w-md w-full text-center relative z-10">
            {/* Top Logo Icon Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-sky-500 p-[1px] shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]"
            >
              <div className="w-full h-full bg-[#030712] rounded-2xl flex items-center justify-center">
                <Cpu className="w-7 h-7 text-sky-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Title / Slogan */}
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent font-sans"
            >
              TAJIK DIGITAL AGENCY
            </motion.h2>
            
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs tracking-[0.25em] text-gray-400 uppercase mt-2 font-mono"
            >
              Саҳифаи интерактивии Раҳматулло
            </motion.p>

            {/* Percentage Indicator */}
            <div className="my-12 relative">
              <motion.span
                className="text-7xl font-extrabold tracking-tighter bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent font-sans block"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {progress}%
              </motion.span>
            </div>

            {/* Status Texts with quick transitions */}
            <div className="h-6 overflow-hidden mb-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentText}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-mono text-purple-400/80"
                >
                  {currentText}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Main Luxury Progress Bar */}
            <div className="w-full h-[3px] bg-gray-900 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-purple-600 via-sky-400 to-teal-400 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Decorative bottom indicators */}
            <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-gray-600">
              <span>LOC: DUSHANBE, TJ</span>
              <span>VER 4.1.2</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
