
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { RepairmanSection } from "@/components/RepairmanSection";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <AboutSection />
      <RepairmanSection />
      <Services />
      <Products />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
