import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Global<span className="text-yellow-400">Print Co.</span></h3>
            <p className="text-gray-300 leading-relaxed">
              HQ in Miami. Global reach. Local production in 65+ countries with consistent quality and fast turnaround.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/globalprintco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/globalprintco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/globalprintco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/globalprintco" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">On-Demand Printing</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Custom Apparel</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Promotional Products</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Corporate Gifts</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Digital Printing</button></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">Design Services</button></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">Get a Quote</button></li>
              <li><button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">Product Catalog</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Artwork Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <span>📞</span>
                <span>334-796-0770</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>✉️</span>
                <span>rohitd@globalprintco.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <span>📍</span>
                <span>1150 Nw 72nd, Miami, FL 33126<br />Global Headquarters</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Global Giveaways. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
