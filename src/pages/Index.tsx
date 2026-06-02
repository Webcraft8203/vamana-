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
        title="Vamana Insurance Broking — Best IRDAI Licensed Insurance Broker in India | Corporate, Health, Motor & Claim Assistance"
        description="Vamana Insurance Broking Pvt. Ltd. is an IRDAI-licensed insurance broker in India offering the best corporate insurance, group health, motor, marine, property, fire, liability, cyber & construction insurance with transparent advisory, lowest premium quotes and end-to-end claim settlement assistance across Mumbai, Delhi, Bangalore, Pune, Hyderabad, Chennai and pan-India."
        path="/"
        keywords="Vamana Insurance, Vamana Insurance Broking, Vamana Insurance Broking Pvt Ltd, vamanainsurance.in, vamanainsurance.co.in, insurance broker India, best insurance broker in India, top insurance broking company India, IRDAI licensed insurance broker, IRDAI registered broker, insurance advisor India, corporate insurance India, business insurance India, group health insurance, group mediclaim, employee benefits insurance, GMC policy, group personal accident, health insurance broker, mediclaim broker, motor insurance, car insurance, two wheeler insurance, commercial vehicle insurance, fleet insurance, marine cargo insurance, transit insurance, property insurance, fire insurance, industrial all risk, liability insurance, professional indemnity, cyber liability insurance, directors and officers insurance, D&O insurance, construction all risk insurance, CAR policy, workmen compensation, claim assistance India, claim settlement help, insurance portfolio management, risk management consultant India, insurance broker Mumbai, insurance broker Delhi, insurance broker Bangalore, insurance broker Pune, insurance broker Hyderabad, insurance broker Chennai, insurance for SME, insurance for startups, insurance for MSME"
        
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
