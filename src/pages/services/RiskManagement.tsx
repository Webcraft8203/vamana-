import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import image from "@/assets/service-risk.jpg";

const RiskManagement = () => (
  <ServiceDetailPage
    path="/services/risk-management"
    seoTitle="Risk Management Services in India | IRDAI Licensed | Vamana Insurance Broking"
    seoDescription="Expert risk management & insurance risk advisory in India — risk identification, assessment, gap analysis and control across corporate, property, marine, fire and liability insurance for SMEs and large enterprises."
    seoKeywords="risk management services India, insurance risk advisory, corporate risk management India, enterprise risk management, risk assessment broker, IRDAI risk consultant, gap analysis insurance, business risk consultant, property risk management, liability risk advisory, risk management Mumbai, risk management Bangalore, risk management Delhi"
    title="Risk Management"
    heading="Risk Management Services in India"
    tagline="IRDAI-licensed risk advisory for corporates, SMEs & MSMEs across India."
    cta="Talk to a Risk Advisor"
    image={image}
    imageAlt="Vamana Insurance Broking risk management advisory team reviewing corporate insurance risk assessment in India"
    paragraphs={[
      "Risk Management becomes important since all types of risks are not fully protected by insurance. The study of systematic and critical appraisal of all potential risks involving place, plant, services, people and operations helps to identify areas of risks and severity of occurrence to find out what risk management method should be applied to avoid major calamities.",
      "After identifying and discussing a business's specific need, we offer a complete risk management service to our client. We complement our risk offer with clear gap analysis being undertaken to show our advice, actions and recommendations and how these relate to the coverage, premium and risk.",
      "Risk Solution is provided by risk identification, assessment and control — across corporate insurance, property, marine, fire, liability and cyber risk exposures.",
    ]}
    relatedServices={[
      { title: "Claims Management", href: "/services/claims-management", desc: "End-to-end insurance claim assistance and settlement support across India." },
      { title: "Insurance Portfolio Management", href: "/services/insurance-portfolio-management", desc: "Balanced life & non-life insurance portfolio advisory for individuals and corporates." },
      { title: "Talk to an Insurance Broker", href: "/#contact", desc: "Get a free, no-obligation consultation with an IRDAI-licensed Vamana advisor." },
    ]}
  />
);
export default RiskManagement;
