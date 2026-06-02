import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import image from "@/assets/service-portfolio.jpg";

const InsurancePortfolioManagement = () => (
  <ServiceDetailPage
    path="/services/insurance-portfolio-management"
    seoTitle="Insurance Portfolio Management Services in India | Life & Non-Life Advisory | Vamana Insurance"
    seoDescription="Tailored insurance portfolio management across life and non-life insurance products — balanced cover, expert advisory and the right product mix for individuals, SMEs and corporates in India."
    seoKeywords="insurance portfolio management India, life and non-life insurance advisory, corporate insurance portfolio, IRDAI broker, insurance product mix, personal insurance planning, business insurance portfolio, group insurance portfolio, employee benefits portfolio, health and motor portfolio, mediclaim portfolio, insurance planning Mumbai, insurance planning Delhi"
    title="Insurance Portfolio Management"
    heading="Insurance Portfolio Management Services in India"
    tagline="Balanced life & non-life insurance portfolios designed around your needs."
    cta="Explore Portfolio Solutions"
    image={image}
    imageAlt="Vamana Insurance Broking advisor presenting a balanced life and non-life insurance portfolio plan for an Indian corporate client"
    paragraphs={[
      "With the wide range of insurance products available against various needs of the consumer, it becomes very important to manage all the products — life or non-life — as a portfolio.",
      "This assists and ensures us to address the insurance needs of the client with satisfaction. We ensure proper balance to bring in expertise of various insurance companies in their respective fields.",
      "We customize and suggest the right product as per each client's requirement — across health, motor, marine, property, liability, group and corporate insurance — and make sure the same is accepted by the insurance company.",
    ]}
    relatedServices={[
      { title: "Risk Management", href: "/services/risk-management", desc: "Risk identification, assessment and control across corporate, property, marine and liability." },
      { title: "Claims Management", href: "/services/claims-management", desc: "End-to-end claim assistance and faster settlement across all insurance products." },
      { title: "Talk to an Insurance Broker", href: "/#contact", desc: "Get a free, no-obligation consultation with an IRDAI-licensed Vamana advisor." },
    ]}
  />
);
export default InsurancePortfolioManagement;
