import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Section Component
 * Design Philosophy: Cinematic Tech Noir
 * - Smooth reveal animations for text
 * - Primary and secondary CTA buttons
 */

export default function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container max-w-4xl text-center"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-display text-foreground mb-6"
        >
          Designing Modern Brands.{' '}
          <span
            className="font-serif-italic"
            style={{
              background: 'linear-gradient(90deg, #FFC49F, #9F9FFF, #FFC49F)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-sweep 3s linear infinite',
            }}
          >
            Building the Future with AI.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-subheading text-foreground/70 mb-12 max-w-2xl mx-auto"
        >
          Eden Brand Consulting helps businesses build powerful brands, design
          digital products, and implement AI solutions for growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              Start a Project
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.span>
          </Link>

          <Link href="/portfolio">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Work
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.span>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-foreground/50 uppercase tracking-widest">
              Scroll
            </p>
            <div className="w-0.5 h-8 bg-gradient-to-b from-foreground/50 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
