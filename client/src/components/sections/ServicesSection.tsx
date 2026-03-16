import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

/**
 * Services Section Component
 * Design Philosophy: Cinematic Tech Noir
 * - Three service packages displayed as animated cards
 * - Cards lift on hover with shadow effects
 * - Smooth reveal animations
 */

export default function ServicesSection() {
  const services = [
    {
      title: 'Brand Foundation',
      description: 'Complete brand identity system',
      items: [
        'Brand identity design',
        'Logo system',
        'Brand guidelines',
        'Launch website',
      ],
      icon: '✦',
    },
    {
      title: 'Product & Growth Design',
      description: 'Digital product excellence',
      items: [
        'UX/UI design',
        'SaaS interface design',
        'Landing page design',
        'Design systems',
      ],
      icon: '◆',
    },
    {
      title: 'AI Growth Package',
      description: 'AI-powered business solutions',
      items: [
        'AI consulting',
        'AI automation workflows',
        'AI marketing tools',
        'AI content generation',
      ],
      icon: '●',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-24 md:py-32 bg-background/40 backdrop-blur-lg border-t border-border">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-foreground mb-4">Our Services</h2>
          <p className="text-subheading text-muted-foreground">
            Comprehensive solutions for modern brands
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="hover-lift group"
            >
              <div className="h-full p-8 rounded-lg border border-border bg-gradient-to-br from-foreground/5 to-transparent hover:from-foreground/10 hover:to-foreground/5 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-4xl text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-medium text-foreground mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">{service.description}</p>

                {/* Items List */}
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-muted-foreground mt-0.5 flex-shrink-0 group-hover:text-foreground transition-colors duration-300"
                      />
                      <span className="text-sm text-foreground/70">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="mt-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
