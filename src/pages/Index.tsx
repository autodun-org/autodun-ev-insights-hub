import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import B2BTeaserSection from "@/components/home/B2BTeaserSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import RoadmapPreviewSection from "@/components/home/RoadmapPreviewSection";
import FinalCTASection from "@/components/home/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <B2BTeaserSection />
        <FeaturesSection />
        <RoadmapPreviewSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
