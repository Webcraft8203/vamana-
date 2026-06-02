import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import image from "@/assets/service-claims.jpg";

const ClaimsManagement = () => (
  <ServiceDetailPage
    path="/services/claims-management"
    seoTitle="Insurance Claims Management & Claim Settlement Assistance in India | Vamana Insurance"
    seoDescription="End-to-end insurance claim assistance in India — documentation, insurer follow-ups, faster settlement and disbursal across health, motor, marine, property, fire and liability claims. IRDAI-licensed broker support pan-India."
    seoKeywords="insurance claim assistance India, claims management broker, claim settlement help, IRDAI claims support, health claim assistance, motor claim help, marine claim settlement, property claim assistance, mediclaim claim help, group health claim assistance, claim consultancy India, third party administrator support"
    title="Claims Management"
    heading="Insurance Claims Management & Settlement Assistance in India"
    tagline="Faster, honest claim settlement across health, motor, marine, property & liability insurance."
    cta="Get Claim Assistance"
    image={image}
    imageAlt="Vamana Insurance Broking claims management team assisting client with insurance claim settlement documentation in India"
    paragraphs={[
      "Claim Management Services is fundamental in our working culture. We pride ourselves in being able to ensure that our clients' insurance claims are quickly and honestly settled.",
      "We ensure the impact of uncertain casualty on the client is released smoothly and with less trouble. We stand strong with our clients in their unfortunate situations and at any point of time.",
      "We get involved and assist in proper documentation which the insurer requires and expedite the process — resulting in timely settlement of health, motor, marine, property and liability claims and faster payment realization.",
    ]}
    relatedServices={[
      { title: "Risk Management", href: "/services/risk-management", desc: "Risk identification, assessment and control for corporate and personal insurance portfolios." },
      { title: "Insurance Portfolio Management", href: "/services/insurance-portfolio-management", desc: "Tailored life & non-life insurance portfolio design and product mix advisory." },
      { title: "Talk to an Insurance Broker", href: "/#contact", desc: "Get a free, no-obligation consultation with an IRDAI-licensed Vamana advisor." },
    ]}
  />
);
export default ClaimsManagement;
