import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Smartphone, ArrowUp } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function FloatingWidgets() {
  const { profile } = useApp();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 405);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const tgUrl = profile.telegram.startsWith('http')
    ? profile.telegram
    : `https://t.me/${profile.telegram.replace('@', '')}`;

  const waUrl = profile.whatsapp.startsWith('http')
    ? profile.whatsapp
    : `https://wa.me/${profile.whatsapp.replace('+', '')}`;

  return (
    <>
      {/* Action widgets: Back-to-Top floating controller */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            id="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-11 h-11 rounded-xl bg-purple-600/90 hover:bg-purple-500 text-white z-40 flex items-center justify-center border border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            title="Ба боло"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fixed Widget Side Messenger Indicators for quick conversion */}
      <div id="side-messengers" className="fixed bottom-8 left-8 z-40 hidden md:flex flex-col gap-3">
        {/* Telegram short icon button */}
        <a
          id="side-tg-link"
          href={tgUrl}
          target="_blank"
          rel="noreferrer"
          referrerPolicy="no-referrer"
          className="w-11 h-11 rounded-full bg-sky-550/90 hover:bg-sky-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.3)] border border-sky-400/20 hover:scale-110 active:scale-95 transition-all text-xs"
          title="Чат бо Telegram"
          aria-label="Chat via Telegram widget"
        >
          <Send className="w-5 h-5 translate-x-[-1px]" />
        </a>

        {/* WhatsApp direct widget icon */}
        <a
          id="side-wa-link"
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          referrerPolicy="no-referrer"
          className="w-11 h-11 rounded-full bg-emerald-650/90 hover:bg-emerald-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-emerald-400/20 hover:scale-110 active:scale-95 transition-all text-xs"
          title="Алоқа бо WhatsApp"
          aria-label="Chat via WhatsApp widget"
        >
          <Smartphone className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}
