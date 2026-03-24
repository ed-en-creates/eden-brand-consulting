import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Tag } from "lucide-react";
import { useEffect } from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  brief?: string;
  outcome?: string;
  tags?: string[];
  dribbbleUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors duration-200 border border-border"
            >
              <X size={18} className="text-foreground" />
            </button>

            {/* Hero Image */}
            <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              {/* Category badge */}
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-widest bg-foreground/20 backdrop-blur-sm border border-border text-white">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Title + Dribbble Link */}
              <div className="flex items-start justify-between gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-tight">
                  {project.title}
                </h2>
                {project.dribbbleUrl && (
                  <a
                    href={project.dribbbleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 border border-border px-3 py-2 rounded-lg hover:bg-foreground/5"
                  >
                    <ExternalLink size={14} />
                    Dribbble
                  </a>
                )}
              </div>

              {/* 3-column info grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Brief */}
                <div className="md:col-span-1 p-5 rounded-xl border border-border bg-foreground/5">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    The Brief
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.brief ||
                      "A full brand identity project delivered through strategic research, creative direction, and meticulous visual execution."}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-1 p-5 rounded-xl border border-border bg-foreground/5">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    About This Work
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.description ||
                      "This project explores visual identity design at its finest — blending strategic thinking with bold creative execution."}
                  </p>
                </div>

                {/* Outcome */}
                <div className="md:col-span-1 p-5 rounded-xl border border-border bg-foreground/5">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    The Outcome
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.outcome ||
                      "A cohesive and distinctive visual identity that communicates brand values clearly and positions the client for long-term recognition."}
                  </p>
                </div>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={14} className="text-muted-foreground" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Tags
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs text-muted-foreground border border-border bg-foreground/5 hover:text-foreground transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
