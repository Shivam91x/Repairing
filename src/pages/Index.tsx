import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BrandsSection } from "@/components/BrandsSection";
import AboutPage from "@/components/AboutPage";
import { Products } from "@/components/Products";
import { ProcessSection } from "@/components/ProcessSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navigation />
      <Hero />

      <section id="services">
        <Services />
      </section>

      <section id="brands">
        <BrandsSection />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="process">
        <ProcessSection />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
