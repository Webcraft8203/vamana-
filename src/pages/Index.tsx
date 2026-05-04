import { useState, useEffect } from "react";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { QuoteSection } from "@/components/site/QuoteSection";
import { WhyVamana, Services, HowItWorks, FeatureHighlight, Expect, Insights, FinalCTA, Footer } from "@/components/site/Sections";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Accessibility: Skip animation if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    // Hide preloader after 1 second
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
          <QuoteSection />
          <WhyVamana />
          <Services />
          <HowItWorks />
          <FeatureHighlight />
          <Expect />
          <Insights />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
