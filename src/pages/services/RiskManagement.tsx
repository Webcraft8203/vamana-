import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import image from "@/assets/service-risk.jpg";

const RiskManagement = () => (
  <ServiceDetailPage
    path="/services/risk-management"
    seoTitle="Risk Management Services in India | Vamana Insurance Broking"
    seoDescription="Expert risk management & advisory in India — risk identification, assessment, gap analysis and control across corporate insurance, property, marine and liability."
    seoKeywords="risk management India, insurance risk advisory, corporate risk management, risk assessment broker, IRDAI risk consultant, gap analysis insurance"
    title="Risk Management"
    cta="Talk to an Advisor"
    image={image}
    imageAlt="Risk management advisory by Vamana Insurance Broking"
    paragraphs={[
      "Risk Management becomes important since all types of risks are not fully protected by insurance. The study of systematic and critical appraisal of all potential risks involving place, plant, services, people and operations helps to identify areas of risks and severity of occurrence to find out what risk management method should be applied to avoid major calamities.",
      "After identifying and discussing a business's specific need, we offer a complete risk management service to our client. We complement our risk offer with clear gap analysis being undertaken to show our advice, actions and recommendations and how these relate to the coverage, premium and risk.",
      "Risk Solution is provided by risk identification, assessment and control.",
    ]}
  />
);
export default RiskManagement;
