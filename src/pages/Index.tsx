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
        description="Vamana Insurance Broking Pvt. Ltd. — IRDAI-licensed insurance broker in India. Transparent advisory, tailored corporate & personal cover and end-to-end claim assistance across health, motor, marine, property, liability and group insurance."
        path="/"
        keywords="Vamana Insurance, Vamana Insurance Broking, vamanainsurance.in, vamanainsurance.co.in, insurance broker India, IRDAI broker, best insurance broker India, corporate insurance, group health insurance, employee benefits, health insurance broker, motor insurance, marine insurance, property insurance, fire insurance, liability insurance, cyber liability, directors and officers insurance, construction insurance, claim assistance India, insurance portfolio management, risk management consultant"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "InsuranceAgency",
          name: "Vamana Insurance Broking Pvt. Ltd.",
          url: "https://www.vamanainsurance.in/",
          sameAs: [
            "https://www.vamanainsurance.co.in/",
            "https://www.linkedin.com/company/vamana-insurance",
            "https://www.instagram.com/vamanainsurance",
          ],
          areaServed: { "@type": "Country", name: "India" },
          description: "IRDAI-licensed insurance broker providing transparent advisory, tailored coverage and end-to-end claim support across India.",
          knowsAbout: [
            "Health Insurance", "Motor Insurance", "Marine Insurance",
            "Property Insurance", "Fire Insurance", "Liability Insurance",
            "Group Health Insurance", "Employee Benefits", "Cyber Liability",
            "Directors and Officers Insurance", "Construction Insurance",
            "Corporate Insurance", "Risk Management", "Claims Management",
            "Insurance Portfolio Management",
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
