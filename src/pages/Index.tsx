import { useState, useEffect } from "react";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About, Leadership, VisionMission, WhyVamana, Services, HowItWorks, FeatureHighlight, Insights, Footer } from "@/components/site/Sections";
import { FloatingActions } from "@/components/site/FloatingActions";
import { SEO } from "@/components/site/SEO";



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
      <SEO
        title="Vamana Insurance Broking — IRDAI Licensed Insurance Broker in India"
        description="IRDAI-licensed insurance broker in India offering transparent advisory, tailored corporate & personal insurance and end-to-end claim support across health, motor, marine, property and liability."
        path="/"
        keywords="insurance broker India, IRDAI broker, best insurance broker, corporate insurance India, health insurance broker, motor insurance, marine insurance, property insurance, liability insurance, claim assistance India, risk management, Vamana Insurance Broking"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "InsuranceAgency",
          name: "Vamana Insurance Broking Pvt. Ltd.",
          url: "https://vamanainsurance.com/",
          areaServed: "IN",
          description: "IRDAI-licensed insurance broker providing transparent advisory, tailored coverage and end-to-end claim support across India.",
          knowsAbout: [
            "Health Insurance", "Motor Insurance", "Marine Insurance",
            "Property Insurance", "Liability Insurance", "Corporate Insurance",
            "Risk Management", "Claims Management", "Insurance Portfolio Management",
          ],
        }}
      />
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
          
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </>
  );
};

export default Index;
