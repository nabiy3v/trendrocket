import Navbar from "../components/navbar";
import Brands from "../sections/brands";
import BusinessHero from "../sections/businessHero";
import Cards from "../sections/cards";
import FAQ from "../sections/faq";
import Footer from "../sections/footer";
import Hero from "../sections/hero";
import Platform from "../sections/platformComparison";
import Pricing from "../sections/pricing";
import ProductDiscovery from "../sections/reasonsSection";
import Testimonials from "../sections/testimonials";

export default function Home() {
  return (
    <div className="bg-[#0F0D16] min-h-screen text-white">
      <Navbar />
      <Hero />
      <Brands />
      <Cards />
      <ProductDiscovery />
      <Pricing />
      <Testimonials />
      <Platform />
      <FAQ />
      <BusinessHero />
      <Footer />
    </div>
  );
}
