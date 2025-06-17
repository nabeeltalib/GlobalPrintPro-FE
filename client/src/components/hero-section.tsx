import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Users, Zap, Truck } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-white">
      {/* Main Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Custom Swag Made Simple
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From branded apparel to corporate gifts, we make ordering custom promotional products 
            fast, easy, and affordable. No minimums. Global delivery.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands, or categories..."
                className="w-full p-4 pr-12 text-gray-800 rounded-lg text-lg border-0 shadow-lg"
              />
              <Search className="absolute right-4 top-4 w-6 h-6 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('https://www.promoplace.com/globalprintco', '_blank')}
              className="bg-yellow-400 text-black px-8 py-4 text-lg font-semibold hover:bg-yellow-300"
              size="lg"
            >
              Browse Products
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-blue-600"
              size="lg"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Apparel", icon: "👕", count: "2,500+", link: "https://www.promoplace.com/globalprintco/search?category=apparel" },
              { name: "Drinkware", icon: "☕", count: "850+", link: "https://www.promoplace.com/globalprintco/search?category=drinkware" },
              { name: "Tech", icon: "📱", count: "1,200+", link: "https://www.promoplace.com/globalprintco/search?category=technology" },
              { name: "Bags", icon: "🎒", count: "650+", link: "https://www.promoplace.com/globalprintco/search?category=bags" },
              { name: "Office", icon: "📝", count: "980+", link: "https://www.promoplace.com/globalprintco/search?category=office" },
              { name: "Outdoor", icon: "🏕️", count: "450+", link: "https://www.promoplace.com/globalprintco/search?category=outdoor" }
            ].map((category, index) => (
              <a
                key={index}
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer block"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} items</p>
                <p className="text-xs text-blue-600 mt-2">Shop Now →</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Value Props */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">No Minimums</h3>
              <p className="text-gray-600">Order as few as 1 item or as many as 10,000+</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Most orders ship within 3-5 business days</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated product specialists to help you</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Global Delivery</h3>
              <p className="text-gray-600">Ship anywhere in the world with local fulfillment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
