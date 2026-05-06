import { ServiceDetailPage } from "@/components/site/ServiceDetailPage";
import image from "@/assets/service-portfolio.jpg";

const InsurancePortfolioManagement = () => (
  <ServiceDetailPage
    title="Insurance Portfolio Management"
    cta="Explore Solutions"
    image={image}
    imageAlt="Insurance portfolio management illustration"
    paragraphs={[
      "With the wide range of insurance products available, against various needs of the consumer, it becomes very important to manage all the products i.e. life or non-life as a portfolio.",
      "This assists and ensures us to address the insurance needs of the client with satisfaction. We ensure proper balance to bring in expertise of various insurance companies in their respective fields.",
      "We customize/suggest the product as per client's requirement and make sure the same is accepted by insurance company.",
    ]}
  />
);
export default InsurancePortfolioManagement;
