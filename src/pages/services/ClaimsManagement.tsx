import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import image from "@/assets/service-claims.jpg";

const ClaimsManagement = () => (
  <ServiceDetailPage
    title="Claims Management"
    cta="Get Claim Assistance"
    image={image}
    imageAlt="Claims management illustration"
    paragraphs={[
      "Claim Management Services is fundamental in our working culture. We pride ourselves in being able to ensure that our clients' claims are quickly and honestly settled.",
      "We ensure the impact of uncertain causality on client is released in smooth and with less trouble. We stand strong with our clients in their unfortunate situations and at any point of time.",
      "We get involved and assist in proper documentation which the insurer requires and expedite the process. This results in timely settlement of the claim and payment realization.",
    ]}
  />
);
export default ClaimsManagement;
