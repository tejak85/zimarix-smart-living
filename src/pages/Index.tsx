import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { OverviewSection } from "@/components/OverviewSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SecuritySection } from "@/components/SecuritySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { InstallationSection } from "@/components/InstallationSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { ColorsSection } from "@/components/ColorsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <FeaturesSection />
        <SecuritySection />
        <HowItWorksSection />
        <InstallationSection />
        <UseCasesSection />
        <ColorsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
