import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";

/**
 * Home Page
 * Design Philosophy: Cinematic Tech Noir
 * - Preloader with multilingual greetings
 * - Interactive hero with canvas waves
 * - Services showcase with animated cards
 * - Portfolio gallery with hover effects
 */

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preloader minimum duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}
