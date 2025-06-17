import { Star, Award, Shield } from "lucide-react";

const premiumBrands = [
  {
    name: "Nike",
    category: "Athletic Wear",
    description: "Official Nike branded apparel and accessories"
  },
  {
    name: "Yeti",
    category: "Drinkware",
    description: "Premium insulated drinkware and coolers"
  },
  {
    name: "Under Armour",
    category: "Performance Wear",
    description: "High-performance athletic apparel"
  },
  {
    name: "Patagonia",
    category: "Outdoor Gear",
    description: "Sustainable outdoor clothing and gear"
  },
  {
    name: "The North Face",
    category: "Outdoor Wear",
    description: "Premium outdoor and adventure gear"
  },
  {
    name: "Carhartt",
    category: "Workwear",
    description: "Durable workwear and rugged apparel"
  },
  {
    name: "Adidas",
    category: "Athletic Wear",
    description: "Performance sports apparel and accessories"
  },
  {
    name: "Champion",
    category: "Athletic Wear",
    description: "Classic athletic wear and activewear"
  },
  {
    name: "Hydro Flask",
    category: "Drinkware",
    description: "Premium insulated water bottles"
  },
  {
    name: "RTIC",
    category: "Drinkware",
    description: "High-performance coolers and drinkware"
  },
  {
    name: "New Era",
    category: "Headwear",
    description: "Premium caps and headwear"
  },
  {
    name: "Polo Ralph Lauren",
    category: "Premium Apparel",
    description: "Classic American luxury fashion"
  }
];

const brandCategories = [
  { name: "Athletic Wear", count: 4, icon: "🏃‍♂️" },
  { name: "Drinkware", count: 3, icon: "🥤" },
  { name: "Outdoor Gear", count: 2, icon: "🏔️" },
  { name: "Workwear", count: 1, icon: "👷‍♂️" },
  { name: "Headwear", count: 1, icon: "🧢" },
  { name: "Performance Wear", count: 1, icon: "💪" }
];

export default function PremiumBrands() {
  return (
    <section id="premium-brands" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Award className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold brand-navy">
              Premium Brand Partners
            </h2>
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Exclusive partnerships with the world's most trusted brands. From Nike and Yeti to 
            Under Armour and Patagonia, we offer authentic premium products you can't get elsewhere.
          </p>
        </div>

        {/* Brand Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {brandCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl mb-2">{category.icon}</div>
              <h3 className="font-semibold text-sm brand-navy">{category.name}</h3>
              <p className="text-xs text-gray-600">{category.count} brand{category.count > 1 ? 's' : ''}</p>
            </div>
          ))}
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {premiumBrands.map((brand, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-16 flex items-center justify-center mb-4">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-blue-600 font-medium mb-2">{brand.category}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Brand Benefits */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-bold brand-navy text-center mb-8">
            Why Premium Brands Matter
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Authentic Quality</h4>
              <p className="text-sm text-gray-600">
                100% authentic products directly from brand partners. No knockoffs or imitations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Brand Recognition</h4>
              <p className="text-sm text-gray-600">
                Recipients immediately recognize and value premium brands, increasing impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Exclusive Access</h4>
              <p className="text-sm text-gray-600">
                Access to limited editions and corporate-only products not available retail.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Brand?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Partner with premium brands that your team and clients will actually want to use and keep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-lg transition-colors"
              >
                Get Premium Brand Quote
              </button>
              <a 
                href="mailto:rohitd@globalprintco.com?subject=Premium Brand Partnership Inquiry"
                className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore Brand Options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}