import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

/**
 * About Page
 * Design Philosophy: Cinematic Tech Noir
 * - Founder story and company vision
 * - Team showcase with hover interactions
 * - Smooth animations and transitions
 */

export default function About() {
  const teamMembers = [
    {
      name: 'Nkereuwem Confidence',
      role: 'Founder and Managing Director Eden BC in Nigeria',
      image: '/confidence.png',
      bio: 'Providing strategic leadership and brand direction from our Nigeria headquarters.',
    },
    {
      name: 'Joann Kennedy',
      role: 'Managing Director Eden BC in Liberia',
      image: '/joann.png',
      bio: 'Leading our operations and creative consulting efforts out of Liberia.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge design and technology',
    },
    {
      title: 'Excellence',
      description: 'Delivering premium quality in every project and interaction',
    },
    {
      title: 'Collaboration',
      description: 'Working closely with clients to achieve their vision',
    },
    {
      title: 'Impact',
      description: 'Creating solutions that drive real business growth',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            <h1 className="text-display text-foreground mb-4">About Eden</h1>
            <p className="text-subheading text-muted-foreground">
              Where design, technology, and AI converge
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-headline text-foreground mb-6">Our Story</h2>
            <div className="space-y-6 text-body text-foreground/80">
              <p>
                Eden Brand Consulting was founded with a simple vision: to help businesses
                build powerful brands and digital products in an increasingly AI-driven world.
              </p>
              <p>
                We believe that the future of design lies at the intersection of three
                disciplines: strategic brand thinking, exceptional product design, and
                intelligent automation through AI.
              </p>
              <p>
                Our team combines decades of experience in brand identity, product design,
                and artificial intelligence. We've worked with startups and Fortune 500
                companies, always maintaining our commitment to excellence and innovation.
              </p>
              <p>
                Today, Eden stands as a beacon for businesses seeking to transform their
                brands and operations through thoughtful design and cutting-edge technology.
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 border-t border-border pt-24"
          >
            <h2 className="text-headline text-foreground mb-12 text-center">Our Values</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="p-6 rounded-lg border border-border bg-gradient-to-br from-foreground/5 to-transparent hover:from-foreground/10 hover:to-foreground/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-border pt-24"
          >
            <h2 className="text-headline text-foreground mb-12 text-center">Our Team</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-square mb-4 hover-lift">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
                    >
                      <p className="text-sm text-foreground text-center px-4">{member.bio}</p>
                    </motion.div>
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
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
              Ready to work with us?
            </p>
            <Link href="/contact">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary cursor-pointer inline-flex items-center gap-2"
              >
                Start a Conversation <ArrowRight size={18} />
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
