import { motion } from "framer-motion";
import { Suspense, useState, Component, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ParticleSphere } from "@/components/ui/orbit-gallery";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
  Zap,
  Bot,
  Workflow,
  Mail,
} from "lucide-react";

class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

/**
 * AI Lab Page
 * Three Sections:
 * 1. AI Fashion Models Social Media Showcase (3D Orbit Gallery)
 * 2. AI Business Automation Consulting Call (1hr educative session)
 * 3. AI Business Automation Workshop (full setup + support)
 */

// ─── Section 1: Orbit Gallery ──────────────────────────────────────────────

function FashionShowcaseSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-border">
      {/* Background label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 pt-32 pb-8 pointer-events-none"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
          AI-Generated Content
        </span>
        <h2 className="text-headline text-foreground mb-4">
          AI Fashion Models
        </h2>
        <p className="text-base text-muted-foreground max-w-xl mx-auto">
          We create stunning AI-generated fashion model content for social media
          — ready to post, on-brand, and endlessly scalable.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-3 italic">
          Drag to rotate · Scroll to zoom
        </p>
      </motion.div>

      {/* 3D Canvas */}
      <div className="w-full h-[70vh]">
        <ErrorBoundary
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground text-sm">
                3D gallery could not be loaded. Please refresh the page.
              </p>
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-muted-foreground text-sm animate-pulse">
                  Loading 3D gallery…
                </div>
              </div>
            }
          >
            <Canvas camera={{ position: [-10, 1.5, 10], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <ParticleSphere />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
              />
            </Canvas>
          </Suspense>
        </ErrorBoundary>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="relative z-10 pb-24"
      >
        <a
          href="mailto:edenbrandconsulting@gmail.com?subject=AI%20Fashion%20Content%20Inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <Mail size={16} />
          Get AI Fashion Content
        </a>
      </motion.div>
    </section>
  );
}

// ─── Section 2: Consulting Call ────────────────────────────────────────────

function ConsultingCallSection() {
  const topics = [
    {
      icon: Bot,
      label: "AI Tools Overview",
      desc: "Discover the best AI tools for your specific business type.",
    },
    {
      icon: Zap,
      label: "Quick Wins",
      desc: "Identify immediate opportunities to automate repetitive tasks.",
    },
    {
      icon: Workflow,
      label: "Process Mapping",
      desc: "Map out your key workflows and where AI can slot in.",
    },
    {
      icon: CheckCircle,
      label: "Action Plan",
      desc: "Leave with a clear, prioritised roadmap you can act on today.",
    },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-border bg-background/40 backdrop-blur-lg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Service 01
          </span>
          <h2 className="text-headline text-foreground mb-4">
            AI Automation Education Call
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            A focused, 1-hour consulting session where we walk your team through
            AI automation — what tools to use, where to start, and how to
            maximise impact without overwhelming your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* What's covered */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-foreground mb-6">
              What we cover
            </h3>
            {topics.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex gap-4 p-5 rounded-xl border border-border bg-background/60 backdrop-blur-sm hover:bg-foreground/5 transition-colors duration-300"
              >
                <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-foreground/10 flex items-center justify-center border border-border">
                  <Icon size={16} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Booking card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center border border-border">
                  <Clock size={22} className="text-foreground" />
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground">
                    1-Hour Session
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Online · Video Call
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Tailored to your specific industry",
                  "Hands-on tool demonstrations",
                  "Recorded session for your team",
                  "Post-call summary & resource list",
                ].map(item => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <CheckCircle
                      size={14}
                      className="text-foreground flex-shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/confidencenkereuwem/ai-automation-education-integration-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Book Your Call
                <ArrowRight size={16} />
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">
                We'll reply within 24 hours to confirm your slot.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Automation Workshop ───────────────────────────────────────

function WorkshopSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      desc: "We start with an in-depth call to understand your business, current workflows, pain points, and automation goals.",
      icon: Clock,
    },
    {
      number: "02",
      title: "Strategy & Proposal",
      desc: "We map your processes and design a full AI automation roadmap. You receive a proposal detailing what we'll build and timelines.",
      icon: Workflow,
    },
    {
      number: "03",
      title: "Contract & Kickoff",
      desc: "Once you're happy with the proposal, we sign contracts and officially begin building your automated systems.",
      icon: CheckCircle,
    },
    {
      number: "04",
      title: "Build & Deploy",
      desc: "We set up all automation tools, integrations, and workflows — then walk you through everything live before handover.",
      icon: Zap,
    },
    {
      number: "05",
      title: "Support & Optimise",
      desc: "After launch, we remain on hand to fine-tune, troubleshoot, and scale your systems as your business grows.",
      icon: Bot,
    },
  ];

  const deliverables = [
    "AI-powered email & communication automation",
    "Social media scheduling & content pipelines",
    "CRM & lead management automation",
    "Contract & invoicing workflows",
    "Reporting & analytics dashboards",
    "Custom integrations (Zapier, Make, n8n)",
  ];

  return (
    <section className="py-24 md:py-32 bg-background/40 backdrop-blur-lg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Service 02
          </span>
          <h2 className="text-headline text-foreground mb-4">
            AI Automation Workshop
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We don't just tell you what to do — we build it for you. From
            strategy to full deployment, we set up all your automated processes
            so your business runs on autopilot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-medium text-foreground mb-8">
              How it works
            </h3>
            <div className="space-y-3">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = activeStep === i;
                return (
                  <motion.button
                    key={step.number}
                    onClick={() => setActiveStep(i)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "border-foreground bg-foreground/10"
                        : "border-border bg-background/60 hover:bg-foreground/5"
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-muted-foreground w-6 flex-shrink-0">
                        {step.number}
                      </span>
                      <Icon
                        size={16}
                        className={
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }
                      />
                      <span
                        className={`text-sm font-medium ${isActive ? "text-foreground" : "text-foreground/70"}`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-sm text-muted-foreground mt-3 ml-10 leading-relaxed"
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Deliverables + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-8">
              <h3 className="text-lg font-medium text-foreground mb-6">
                What we build for you
              </h3>
              <ul className="space-y-3">
                {deliverables.map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                  >
                    <CheckCircle
                      size={14}
                      className="text-foreground flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background/60 backdrop-blur-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-foreground" />
                <p className="text-base font-medium text-foreground">
                  Ready to automate your business?
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Send us an email to start the conversation. We'll schedule a
                free discovery call and put together a custom proposal for your
                business.
              </p>
              <a
                href="https://calendly.com/confidencenkereuwem/ai-automation-education-integration-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Start the Conversation
                <ArrowRight size={16} />
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">
                No obligation. Just a conversation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function AILab() {
  return (
    <div className="min-h-screen bg-background/40 backdrop-blur-lg text-foreground">
      <Navbar />
      <main>
        <FashionShowcaseSection />
        <ConsultingCallSection />
        <WorkshopSection />
      </main>
      <Footer />
    </div>
  );
}
