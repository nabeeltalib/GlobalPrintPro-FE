import { useState } from "react";
import { Menu, X, MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import StoreIframeModal from "@/components/store-iframe-modal";
import TranslationSelector from "@/components/translation-selector";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl lg:text-3xl font-bold brand-navy">
              Global<span className="brand-blue">Print Co.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("locations")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium flex items-center space-x-1"
            >
              <MapPin className="w-4 h-4" />
              <span>Locations</span>
            </button>
            <button
              onClick={() => setIsStoreModalOpen(true)}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium flex items-center space-x-1"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Product Store</span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              About
            </button>
            <TranslationSelector />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-brand-blue text-white hover:bg-blue-700 font-medium"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium px-3 py-2 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium px-3 py-2 text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium px-3 py-2 text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("locations")}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium px-3 py-2 text-left flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Locations</span>
              </button>
              <button
                onClick={() => setIsStoreModalOpen(true)}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium px-3 py-2 text-left flex items-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Product Store</span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium px-3 py-2 text-left"
              >
                About
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-brand-blue text-white hover:bg-blue-700 font-medium mx-3"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Store Modal */}
      <StoreIframeModal 
        isOpen={isStoreModalOpen} 
        onClose={() => setIsStoreModalOpen(false)} 
      />
    </nav>
  );
}
