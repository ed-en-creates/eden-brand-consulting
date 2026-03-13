import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * Navbar Component
 * Design Philosophy: Cinematic Tech Noir
 * - Sticky navigation with glass effect and blur
 * - Transparent dark background with subtle borders
 * - Smooth hover animations on menu items
 * - Responsive mobile menu
 */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'AI Lab', href: '/ai-lab' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/10"
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer inline-flex items-center"
          >
            <img
              src="/eden-icon.png"
              alt="Eden Brand Consulting"
              className="h-10 w-10 object-contain"
            />
          </motion.span>
        </Link>

        {/* Desktop Menu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item) => (
            <motion.div key={item.href} variants={itemVariants}>
              <Link href={item.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 relative group cursor-pointer inline-block"
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300"
                  />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full border border-border/20 text-foreground hover:bg-foreground/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          <Link href="/login">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full border border-border text-foreground text-sm font-medium hover:bg-foreground/10 transition-all duration-300 cursor-pointer inline-block"
            >
              Login
            </motion.span>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-foreground p-2"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t border-border/10"
      >
        <div className="container py-4 flex flex-col gap-4 border-t border-border/10">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.span
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-pointer block"
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
          <Link href="/login">
            <motion.span
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full border border-border text-foreground text-sm font-medium hover:bg-foreground/10 transition-all duration-300 cursor-pointer inline-block"
            >
              Login
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
