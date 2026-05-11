import { useState, useEffect } from "react";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About, Leadership, VisionMission, WhyVamana, Services, HowItWorks, FeatureHighlight, Insights, FinalCTA, Footer } from "@/components/site/Sections";
import { PremiumContact } from "@/components/site/PremiumContact";
import { FloatingActions } from "@/components/site/FloatingActions";


const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 1000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <Preloader isLoading={loading} />
      <div className={`min-h-screen bg-background transition-opacity duration-700 ease-out ${loading ? "opacity-0 h-screen overflow-hidden pointer-events-none" : "opacity-100"}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Leadership />
          <VisionMission />
          <WhyVamana />
          <Services />
          <HowItWorks />
          <FeatureHighlight />
          <Insights />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
};

export default Index;
