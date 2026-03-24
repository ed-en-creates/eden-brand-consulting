import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/**
 * NotFound Page (404)
 * Design Philosophy: Cinematic Tech Noir
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-32 pb-24">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-9xl font-medium text-white/20 mb-4">404</h1>
            <h2 className="text-headline text-white mb-4">Page Not Found</h2>
            <p className="text-subheading text-white/60 mb-12 max-w-md mx-auto">
              The page you're looking for doesn't exist. Let's get you back on
              track.
            </p>

            <Link href="/">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft size={18} />
                Back to Home
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
