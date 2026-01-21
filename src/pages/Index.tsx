import HeroSection from "@/components/HeroSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FocusAreasSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
