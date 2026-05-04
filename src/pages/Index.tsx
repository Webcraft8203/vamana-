import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { QuoteSection } from "@/components/site/QuoteSection";
import { WhyVamana, Services, HowItWorks, FeatureHighlight, Expect, Insights, FinalCTA, Footer } from "@/components/site/Sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
  );
};

export default Index;
