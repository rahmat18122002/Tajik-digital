import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [clickActive, setClickActive] = useState(false);

  // Motion Values for position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    // Detect if hovering interactive items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive-card') ||
        target.role === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => {
      setClickActive(true);
    };

    const handleMouseUp = () => {
      setClickActive(false);
    };

    // Setup listeners if not a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
      window.addEventListener('mouseover', handleMouseOver);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
        window.removeEventListener('mouseover', handleMouseOver);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer glowing halo path */}
      <motion.div
        id="custom-cursor-glow"
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-screen bg-transparent border border-purple-500/50"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: isHovered 
            ? '0 0 20px 4px rgba(139, 92, 246, 0.4)' 
            : '0 0 10px 1px rgba(14, 165, 233, 0.2)',
          scale: clickActive ? 0.75 : isHovered ? 1.8 : 1,
          borderColor: isHovered ? 'rgba(139, 92, 246, 0.8)' : 'rgba(14, 165, 233, 0.5)',
          backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.05)' : 'transparent',
          transition: 'scale 0.15s ease-out, border-color 0.2s, background-color 0.2s',
        }}
      />
      
      {/* Inner precise dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 bg-sky-400"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: clickActive ? 0.5 : isHovered ? 0.8 : 1,
          backgroundColor: isHovered ? '#8b5cf6' : '#0ea5e9',
          transition: 'transform 0.1s ease-out, background-color 0.2s',
        }}
      />
    </>
  );
}
