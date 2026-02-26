import Navbar from "@/components/erp/Navbar";
import HeroSection from "@/components/erp/HeroSection";
import TrustedBrands from "@/components/erp/TrustedBrands";
import SecuritySection from "@/components/erp/SecuritySection";
import ContactSection from "@/components/erp/ContactSection";
import IndustriesSection from "@/components/erp/IndustriesSection";
import ServicesSection from "@/components/erp/ServicesSection";
import ModulesSection from "@/components/erp/ModulesSection";
import WhyChooseUs from "@/components/erp/WhyChooseUs";
import CaseStudiesSection from "@/components/erp/CaseStudiesSection";
import ClientSuccessStories from "@/components/erp/ClientSuccessStories";
import TeamSection from "@/components/erp/TeamSection";
import CTASection from "@/components/erp/CTASection";
import HaveQuestionsSection from "@/components/erp/HaveQuestionsSection";
import Footer from "@/components/erp/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBrands />
        <SecuritySection />
        <ContactSection />
        <CaseStudiesSection />
        <ClientSuccessStories />
        <IndustriesSection />
        <ServicesSection />
        <ModulesSection />
        <WhyChooseUs />
        <TeamSection />
        <CTASection />
        <HaveQuestionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
