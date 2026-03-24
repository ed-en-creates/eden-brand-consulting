import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// ─── EmailJS credentials ───────────────────────────────────────────────────
// 1. Sign up free at https://emailjs.com
// 2. Connect your Gmail account as a service → copy the Service ID below
// 3. Create an email template → copy the Template ID below
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // e.g. 'AbCdEf_GhIjKl'

/**
 * Contact Page
 * Design Philosophy: Cinematic Tech Noir
 * - Contact form with validation
 * - Contact information
 * - Smooth animations and transitions
 */

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "edenbrandconsulting@gmail.com",
      link: "mailto:edenbrandconsulting@gmail.com",
    },
    {
      icon: Phone,
      title: "Nigeria",
      value: "+234 810 044 6439",
      link: "tel:+2348100446439",
    },
    {
      icon: Phone,
      title: "Liberia",
      value: "+231 77 877 1721",
      link: "tel:+231778771721",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nigeria & Liberia",
      link: "#",
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
            <h1 className="text-display text-foreground mb-4">
              Let's Build Something Extraordinary
            </h1>
            <p className="text-subheading text-muted-foreground">
              Get in touch with our team to discuss your project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors duration-300"
                    placeholder="Your company"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-border text-foreground focus:outline-none focus:border-ring transition-colors duration-300"
                  >
                    <option value="" className="bg-background text-foreground">
                      Select a project type
                    </option>
                    <option
                      value="brand"
                      className="bg-background text-foreground"
                    >
                      Brand Design
                    </option>
                    <option
                      value="product"
                      className="bg-background text-foreground"
                    >
                      Product Design
                    </option>
                    <option
                      value="ai"
                      className="bg-background text-foreground"
                    >
                      AI Integration
                    </option>
                    <option
                      value="other"
                      className="bg-background text-foreground"
                    >
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: status === "idle" ? 1.05 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.95 : 1 }}
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "sending" && (
                    <span className="animate-pulse">Sending…</span>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle size={18} /> Message Sent!
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <AlertCircle size={18} /> Failed — try again
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </motion.button>

                {status === "error" && (
                  <p className="text-sm text-center text-muted-foreground">
                    Something went wrong. Email us directly at{" "}
                    <a
                      href="mailto:edenbrandconsulting@gmail.com"
                      className="underline"
                    >
                      edenbrandconsulting@gmail.com
                    </a>
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={containerVariants}
              className="space-y-8"
            >
              {/* Info Cards */}
              {contactInfo.map(info => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="p-3 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300">
                      <Icon size={24} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="mt-12 p-6 rounded-lg border border-border bg-gradient-to-br from-foreground/5 to-transparent"
              >
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Response Time
                </h3>
                <p className="text-muted-foreground">
                  We typically respond to inquiries within 24 hours. For urgent
                  matters, please call us directly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
