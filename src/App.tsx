import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import AdminPanel from './components/AdminPanel';
import FloatingWidgets from './components/FloatingWidgets';

// Context
import { AppContextProvider } from './context/AppContext';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Framer Motion scrolling progress bar momentum
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Section highlight tracker using IntersectionObserver
  useEffect(() => {
    if (!loadingComplete) return;

    const sections = ['hero', 'about', 'services', 'portfolio', 'process', 'contact'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-30% 0px -40% 0px', // Trigger when section fills major sweet-spot
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [loadingComplete]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AppContextProvider>
      <div className="relative min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-cyan-500/30 selection:text-white">
        {/* 1. Cinematic Loading state Screen */}
        <Loader onComplete={() => setLoadingComplete(true)} />

        {/* Render the full content only when loading complete to avoid flash of content */}
        <AnimatePresence>
          {loadingComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col"
            >
              {/* 2. Magnetic custom scroll physical progress indicator bar */}
              <motion.div
                id="global-scroll-progress"
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-650 z-50 origin-[0%]"
                style={{ scaleX }}
              />

              {/* 3. Personalized interactive Cursors */}
              <CustomCursor />

              {/* 4. Luxury Nav Header bar */}
              <Navbar activeSection={activeSection} onOpenAdmin={() => setIsAdminOpen(true)} />

              {/* 5. Master Main Sections list */}
              <main id="main-content" className="flex-grow w-full">
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Process />
                <Testimonials />
                <Technologies />
                <Contact />
              </main>

              {/* 6. Footer section */}
              <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

              {/* 7. Action widgets & messengers (dynamic) */}
              <FloatingWidgets />

              {/* Admin Panel Trigger Overlay */}
              <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppContextProvider>
  );
}
