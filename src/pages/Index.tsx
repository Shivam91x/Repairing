import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import AboutPage from "@/components/AboutPage";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <AboutPage />
      <Products />
      <Footer />
    </div>
  );
};

export default Index;
