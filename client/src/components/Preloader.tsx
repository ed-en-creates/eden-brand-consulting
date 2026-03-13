import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Preloader Component
 * Design Philosophy: Cinematic Tech Noir
 * - Displays multiple greeting words with smooth transitions
 * - Animated SVG wave pattern
 * - Slides up to reveal homepage
 * - Pure black background with white text
 */

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const greetings = ['Hello', 'Bonjour', 'Ciao', 'Olá', 'やあ', 'Hallå', 'Guten Tag'];

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      // Start exit animation
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        const completeTimer = setTimeout(onComplete, 800);
        return () => clearTimeout(completeTimer);
      }, 800);
      return () => clearTimeout(exitTimer);
    }
  }, [currentIndex, greetings.length, onComplete]);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const containerVariants = {
    initial: { y: 0 },
    exit: { y: '-100%' },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate={isExiting ? 'exit' : 'initial'}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Greeting Text */}
        <div className="h-20 flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            {currentIndex < greetings.length && (
              <motion.h1
                key={currentIndex}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-6xl md:text-7xl font-medium text-white text-center"
              >
                {greetings[currentIndex]}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        {/* Animated SVG Wave */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Animated wave path */}
          <motion.path
            d="M 10,60 Q 30,40 50,60 T 90,60"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M 10,75 Q 30,55 50,75 T 90,75"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.circle
            cx="60"
            cy="60"
            r="8"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.svg>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/60 text-sm tracking-widest uppercase"
        >
          Loading Experience
        </motion.p>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="w-full h-1 bg-white/10 absolute bottom-0"
        initial={{ width: 0 }}
        animate={{ width: `${((currentIndex + 1) / greetings.length) * 100}%` }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
}
