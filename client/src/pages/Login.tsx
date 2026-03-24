import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Lock, ArrowLeft } from "lucide-react";

/**
 * Login Page — Coming Soon placeholder
 * Client portal is planned for a future release.
 */

export default function Login() {
  return (
    <div className="min-h-screen bg-background/40 backdrop-blur-lg text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-24 pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-md"
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-foreground/10 border border-border flex items-center justify-center mx-auto mb-8">
            <Lock size={32} className="text-foreground" />
          </div>

          {/* Badge */}
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            Coming Soon
          </span>

          <h1 className="text-headline text-foreground mb-4">Client Portal</h1>

          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            We're building a dedicated space where you'll be able to track your
            projects, access deliverables, and communicate with our team — all
            in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-foreground hover:bg-foreground/5 transition-colors duration-300 text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
