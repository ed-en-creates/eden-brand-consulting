import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ProjectModal, { type Project } from "@/components/ui/ProjectModal";

/**
 * Portfolio Section Component
 * Design Philosophy: Cinematic Tech Noir
 * - Grid gallery layout with cinematic framing
 * - Image zoom on hover with title reveal
 * - Click card to open project detail modal
 */

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Brand Identity Concept Presentation",
      category: "Brand Identity",
      image:
        "https://cdn.dribbble.com/userupload/46328984/file/d308cc3480a8a6cbd042809c64579178.png",
      description:
        "Disclaimer: This is not the official branding for Enived — this is the product of deep research and deep work into Enived's brand pathway, but was not chosen as the official brand identity for the company.",
      brief:
        "Develop a bold, conceptual brand identity for Enived that communicates prestige and clarity through research-driven design.",
      outcome:
        "A stunning visual identity concept that showcased the strategic potential of the brand direction — complete with logo system, color palette, and presentation assets.",
      tags: [
        "brand identity concepts",
        "brand presentation",
        "brand design",
        "airline branding",
        "logo",
        "branding",
      ],
      dribbbleUrl: "https://dribbble.com/confidencenkereuwem",
    },
    {
      id: 2,
      title: "Fluxa Pay Identity @ Eden",
      category: "Fintech Branding",
      image:
        "https://cdn.dribbble.com/userupload/45784443/file/6156bc93bbb44c38a07660a28be40c2c.jpg",
      description:
        "A modern fintech brand identity built at Eden BC for Fluxa Pay — a payment platform that needed to feel trustworthy, clean, and cutting-edge.",
      brief:
        "Design a complete visual identity for a fintech startup that balances credibility with modern aesthetics to appeal to a digitally-savvy audience.",
      outcome:
        "A clean, professional identity with a distinctive logo system, color palette, and brand assets that positioned Fluxa Pay for market entry.",
      tags: [
        "visual identity",
        "logo design",
        "fintech branding",
        "finance",
        "brand identity",
        "branding",
      ],
      dribbbleUrl: "https://dribbble.com/confidencenkereuwem",
    },
    {
      id: 3,
      title: "Fitness Branding for Breezifit",
      category: "Brand Identity",
      image:
        "https://cdn.dribbble.com/userupload/45114815/file/70b68fed8d3a57c66ce1c9019c2ab0f3.gif",
      description:
        "An energetic, animated brand identity system for Breezifit — a fitness and active lifestyle brand built for people who move.",
      brief:
        "Create a vibrant and dynamic brand identity for a fitness lifestyle brand targeting active, health-conscious individuals aged 18–35.",
      outcome:
        "A bold, high-energy identity featuring animated logo reveals, expressive typography, and a packaging design system that brings the brand to life.",
      tags: [
        "lifestyle branding",
        "packaging design",
        "health wellness",
        "sports branding",
        "fitness",
        "logo",
        "branding",
      ],
      dribbbleUrl: "https://dribbble.com/confidencenkereuwem",
    },
    {
      id: 4,
      title: "WeThink Full Brand Identity Design",
      category: "Brand Identity",
      image:
        "https://cdn.dribbble.com/userupload/44578918/file/6808d7b16a76ab725e5d9cbbbf81d247.png",
      description:
        "Complete brand identity design for WeThink — a modern creative company with a visionary approach to collaborative thinking and innovation.",
      brief:
        "Build a full brand identity that communicates collaborative thinking, bold vision, and creative intelligence for a growing creative company.",
      outcome:
        "A comprehensive brand playbook including logo, color system, typography, and visual identity guidelines that gave WeThink a confident, distinctive voice.",
      tags: [
        "brand launch",
        "minimal design",
        "color system",
        "visionary branding",
        "brand design",
        "visual identity",
      ],
      dribbbleUrl: "https://dribbble.com/confidencenkereuwem",
    },
    {
      id: 5,
      title: "Neurochain — Skill Passport for Web3 & AI",
      category: "UI/UX Design",
      image:
        "https://cdn.dribbble.com/userupload/44326849/file/48a5d50a6ca8761df38c29d0537df135.png",
      description:
        "UX design for a Web3 and AI-powered skill passport platform — where users build verified, tokenized digital identities based on real-world skills.",
      brief:
        "Design an intuitive, trustworthy UX for a blockchain-based platform that helps freelancers and creators build and showcase verified skill portfolios.",
      outcome:
        "A sleek dashboard UI with clear information architecture, onboarding flows, and a verified credential system that made the complex feel simple and empowering.",
      tags: [
        "web3",
        "ux design",
        "blockchain",
        "b2b saas",
        "skill passport",
        "tokenized identity",
        "freelancer tools",
        "ai design",
      ],
      dribbbleUrl:
        "https://dribbble.com/shots/26346396-Neurochain-Skill-Passport-UX-for-Web3-AI-Identity",
    },
    {
      id: 6,
      title: "WeThink Website Design",
      category: "Web Design",
      image:
        "https://cdn.dribbble.com/userupload/44285077/file/944dd4ca49cf542590a99a4a32a018c2.png",
      description:
        "Hero banner screen for the WeThink website — featuring bold visual storytelling and a design system built for scale.",
      brief:
        "Design a striking web presence for WeThink that communicates their creative philosophy and draws visitors in from the very first screen.",
      outcome:
        "A bold, typographically-driven website with an immersive hero experience, consistent design system, and seamless responsive behavior.",
      tags: [
        "responsive design",
        "design system",
        "typography",
        "web design",
        "ux design",
        "ui",
        "website design",
      ],
      dribbbleUrl: "https://dribbble.com/confidencenkereuwem",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className="py-24 md:py-32 bg-background/40 backdrop-blur-lg border-t border-border">
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between mb-16 gap-8"
          >
            <div>
              <h2 className="text-headline text-foreground mb-4">
                Featured Work
              </h2>
              <p className="text-subheading text-muted-foreground">
                Showcasing our latest projects and innovations
              </p>
            </div>
            <Link href="/portfolio">
              <motion.a
                whileHover={{ x: 4 }}
                className="hidden md:flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors duration-300 cursor-pointer"
              >
                View All <ArrowUpRight size={20} />
              </motion.a>
            </Link>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg aspect-square bg-foreground/5 border border-border hover-lift">
                  {/* Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-end justify-end p-6"
                  >
                    <div className="text-right">
                      <p className="text-xs text-white/70 mb-2 uppercase tracking-widest">
                        {project.category}
                      </p>
                      <h3 className="text-lg font-medium text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/50 font-medium uppercase tracking-wider">
                        Click to view →
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:hidden mt-12 text-center"
          >
            <Link href="/portfolio">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary cursor-pointer inline-flex items-center gap-2"
              >
                View All Projects <ArrowUpRight size={18} />
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
