import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PremiumBrands from "@/components/premium-brands";
import ProductSearchHero from "@/components/product-search-hero";
import MockupGenerator from "@/components/mockup-generator";
import ProductConfigurator from "@/components/product-configurator";
import IndustryLandingPages from "@/components/industry-landing-pages";
import CaseStudies from "@/components/case-studies";
import LocationsSection from "@/components/locations-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Chatbot from "@/components/chatbot";
import LiveChat from "@/components/live-chat";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <PremiumBrands />
      <ProductSearchHero />
      <MockupGenerator />
      <ProductConfigurator />
      <IndustryLandingPages />
      <CaseStudies />
      <LocationsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Chatbot />
      <LiveChat />
    </div>
  );
}
