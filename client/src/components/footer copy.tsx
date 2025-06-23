import { Store, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <Store className="mr-2 h-8 w-8" />
              PromoPlace
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for promotional products and business merchandise since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">All Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Printing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Bulk Orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Design Services</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                1-800-PROMO-01
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                orders@promoplace.com
              </p>
              <p className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 mt-0.5" />
                <span>
                  123 Business Blvd, Suite 100<br />
                  Commerce City, NY 10001
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PromoPlace. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
