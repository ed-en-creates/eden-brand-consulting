import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * Services Page
 * Design Philosophy: Cinematic Tech Noir
 * - Detailed service packages
 * - Smooth animations and transitions
 */

export default function Services() {
  const services = [
    {
      title: "Brand Foundation",
      description:
        "Complete brand identity system for new and established businesses",
      price: "Custom",
      items: [
        "Brand identity design",
        "Logo system & variations",
        "Brand guidelines & standards",
        "Color palette & typography",
        "Launch website design",
        "Brand strategy consultation",
      ],
      icon: "✦",
    },
    {
      title: "Product & Growth Design",
      description: "Digital product design and growth-focused UX/UI solutions",
      price: "Custom",
      items: [
        "UX/UI design & prototyping",
        "SaaS interface design",
        "Landing page design",
        "Design systems & components",
        "User research & testing",
        "Growth optimization",
      ],
      icon: "◆",
    },
    {
      title: "AI Growth Package",
      description: "AI-powered solutions for business automation and growth",
      price: "Custom",
      items: [
        "AI consulting & strategy",
        "AI automation workflows",
        "AI marketing tools",
        "AI content generation",
        "Implementation & training",
        "Ongoing optimization",
      ],
      icon: "●",
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
    <div className="min-h-screen bg-background/40 backdrop-blur-lg text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-display mb-4">Our Services</h1>
            <p className="text-subheading text-muted-foreground">
              Comprehensive solutions for modern brands and businesses
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          >
            {services.map(service => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="hover-lift group"
              >
                <div className="h-full p-8 rounded-lg border border-border bg-gradient-to-br from-foreground/5 to-transparent hover:from-foreground/10 hover:to-foreground/5 transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-5xl text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-medium mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Price */}
                  <p className="text-lg font-medium mb-8">{service.price}</p>

                  {/* Items List */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.items.map(item => (
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
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/contact">
                    <motion.a
                      whileHover={{ x: 4 }}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      Get Started <ArrowRight size={16} />
                    </motion.a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-border pt-24"
          >
            <h2 className="text-headline mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Understanding your vision and goals",
                },
                {
                  step: "02",
                  title: "Strategy",
                  desc: "Developing comprehensive solutions",
                },
                {
                  step: "03",
                  title: "Execution",
                  desc: "Building and implementing designs",
                },
                {
                  step: "04",
                  title: "Optimization",
                  desc: "Testing and refining for success",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-5xl font-medium text-muted-foreground opacity-50 mb-4">
                    {item.step}
                  </p>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-24 text-center"
          >
            <p className="text-subheading text-muted-foreground mb-8">
              Ready to start your project?
            </p>
            <Link href="/contact">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary cursor-pointer inline-flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={18} />
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
