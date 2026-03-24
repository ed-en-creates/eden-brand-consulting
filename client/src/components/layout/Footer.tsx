import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Instagram, Twitter, Dribbble } from "lucide-react";

/**
 * Footer Component
 * Design Philosophy: Cinematic Tech Noir
 * - Dark background with subtle borders
 * - Organized layout with links and information
 * - Smooth hover animations
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { id: "brand-design", label: "Brand Design", href: "/services" },
        { id: "product-design", label: "Product Design", href: "/services" },
        { id: "ai-integration", label: "AI Integration", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { id: "about", label: "About", href: "/about" },
        { id: "portfolio", label: "Portfolio", href: "/portfolio" },
        { id: "ai-lab", label: "AI Lab", href: "/ai-lab" },
      ],
    },
    {
      title: "Connect",
      links: [
        { id: "contact", label: "Contact", href: "/contact" },
        { id: "newsletter", label: "Newsletter", href: "/login" },
        {
          id: "email",
          label: "edenbrandconsulting@gmail.com",
          href: "mailto:edenbrandconsulting@gmail.com",
        },
      ],
    },
  ];

  const socials = [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/eden_brandconsulting/",
      icon: Instagram,
    },
    {
      id: "twitter",
      label: "X / Twitter",
      href: "https://x.com/eden_consult",
      icon: Twitter,
    },
    {
      id: "dribbble",
      label: "Dribbble",
      href: "https://dribbble.com/confidencenkereuwem",
      icon: Dribbble,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="border-t border-border bg-background/40 backdrop-blur-lg relative z-10">
      <div className="container py-16 md:py-24">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <img
              src="/eden-logo.png"
              alt="Eden Brand Consulting"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Designing modern brands and building the future with AI.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map(social => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map(section => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-sm font-medium text-foreground mb-6 uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.id}>
                    <Link href={link.href}>
                      <motion.span
                        whileHover={{ x: 4 }}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 cursor-pointer group inline-flex"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Eden Brand Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="tel:+2348100446439"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              +234 810 044 6439 (NG)
            </a>
            <a
              href="tel:+231778771721"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              +231 77 877 1721 (LR)
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
