import Navbar from "@/components/erp/Navbar";
import HeroSection from "@/components/erp/HeroSection";
import TrustedBrands from "@/components/erp/TrustedBrands";
import IndustriesSection from "@/components/erp/IndustriesSection";
import ServicesSection from "@/components/erp/ServicesSection";
import ModulesSection from "@/components/erp/ModulesSection";
import WhyChooseUs from "@/components/erp/WhyChooseUs";
import SecuritySection from "@/components/erp/SecuritySection";
import CaseStudiesSection from "@/components/erp/CaseStudiesSection";
import TeamSection from "@/components/erp/TeamSection";
import CTASection from "@/components/erp/CTASection";
import Footer from "@/components/erp/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBrands />
        <IndustriesSection />
        <ServicesSection />
        <ModulesSection />
        <WhyChooseUs />
        <SecuritySection />
        <CaseStudiesSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
