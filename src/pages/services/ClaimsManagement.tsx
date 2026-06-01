import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import image from "@/assets/service-claims.jpg";

const ClaimsManagement = () => (
  <ServiceDetailPage
    path="/services/claims-management"
    seoTitle="Insurance Claims Management & Assistance in India | Vamana Insurance"
    seoDescription="End-to-end insurance claim assistance in India — documentation, insurer follow-ups, faster settlement and disbursal across health, motor, marine, property and liability claims."
    seoKeywords="insurance claim assistance India, claims management broker, claim settlement help, IRDAI claims support, health claim assistance, motor claim help"
    title="Claims Management"
    cta="Get Claim Assistance"
    image={image}
    imageAlt="Insurance claims management and settlement support"
    paragraphs={[
      "Claim Management Services is fundamental in our working culture. We pride ourselves in being able to ensure that our clients' claims are quickly and honestly settled.",
      "We ensure the impact of uncertain causality on client is released in smooth and with less trouble. We stand strong with our clients in their unfortunate situations and at any point of time.",
      "We get involved and assist in proper documentation which the insurer requires and expedite the process. This results in timely settlement of the claim and payment realization.",
    ]}
  />
);
export default ClaimsManagement;
