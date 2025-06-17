import { useState } from "react";
import { Search, Filter, Package, Shirt, Coffee, Gift, Monitor, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const productCategories = [
  {
    id: "apparel",
    name: "Apparel & Accessories",
    icon: Shirt,
    description: "Premium branded clothing and accessories",
    products: [
      { name: "Custom T-Shirts", description: "100% cotton, various colors", minPrice: "$8.50", brands: ["Nike", "Under Armour", "Hanes"] },
      { name: "Polo Shirts", description: "Professional embroidered polos", minPrice: "$18.95", brands: ["Nike", "Adidas", "Port Authority"] },
      { name: "Hoodies & Sweatshirts", description: "Cozy branded hoodies", minPrice: "$28.50", brands: ["Champion", "Nike", "Gildan"] },
      { name: "Caps & Hats", description: "Structured and unstructured caps", minPrice: "$9.95", brands: ["New Era", "Nike", "Flexfit"] },
      { name: "Business Attire", description: "Dress shirts, ties, blazers", minPrice: "$35.00", brands: ["Calvin Klein", "Hugo Boss"] }
    ]
  },
  {
    id: "drinkware",
    name: "Drinkware",
    icon: Coffee,
    description: "Branded mugs, bottles, and tumblers",
    products: [
      { name: "Yeti Tumblers", description: "Vacuum insulated stainless steel", minPrice: "$24.95", brands: ["Yeti"] },
      { name: "Custom Water Bottles", description: "BPA-free sports bottles", minPrice: "$6.50", brands: ["Hydro Flask", "Contigo", "CamelBak"] },
      { name: "Coffee Mugs", description: "Ceramic and stainless steel mugs", minPrice: "$4.95", brands: ["Yeti", "Contigo", "Ember"] },
      { name: "Wine Glasses", description: "Elegant branded glassware", minPrice: "$8.95", brands: ["Riedel", "Waterford"] },
      { name: "Travel Tumblers", description: "Spill-proof commuter cups", minPrice: "$12.95", brands: ["Yeti", "Starbucks", "Contigo"] }
    ]
  },
  {
    id: "tech",
    name: "Tech Accessories",
    icon: Monitor,
    description: "Modern tech gadgets and accessories",
    products: [
      { name: "Wireless Chargers", description: "Qi-enabled charging pads", minPrice: "$15.95", brands: ["Anker", "Belkin", "Mophie"] },
      { name: "Power Banks", description: "Portable phone chargers", minPrice: "$18.50", brands: ["Anker", "RAVPower", "Mophie"] },
      { name: "Bluetooth Speakers", description: "Portable wireless speakers", minPrice: "$25.95", brands: ["JBL", "Bose", "Sony"] },
      { name: "USB Drives", description: "Custom branded flash drives", minPrice: "$8.95", brands: ["SanDisk", "Kingston"] },
      { name: "Phone Accessories", description: "Cases, stands, and holders", minPrice: "$6.95", brands: ["OtterBox", "PopSocket", "Spigen"] }
    ]
  },
  {
    id: "office",
    name: "Office & Stationery",
    icon: Briefcase,
    description: "Professional office supplies and stationery",
    products: [
      { name: "Moleskine Notebooks", description: "Premium hardcover notebooks", minPrice: "$16.95", brands: ["Moleskine"] },
      { name: "Custom Pens", description: "Executive writing instruments", minPrice: "$2.95", brands: ["Parker", "Cross", "Bic"] },
      { name: "Portfolios & Folders", description: "Professional document holders", minPrice: "$12.95", brands: ["Samsonite", "Targus"] },
      { name: "Desk Accessories", description: "Organizers, stands, and planners", minPrice: "$8.95", brands: ["Moleskine", "Leuchtturm"] },
      { name: "Sticky Notes & Pads", description: "Custom branded note pads", minPrice: "$3.95", brands: ["Post-it", "3M"] }
    ]
  },
  {
    id: "bags",
    name: "Bags & Totes",
    icon: Package,
    description: "Functional and stylish branded bags",
    products: [
      { name: "Laptop Bags", description: "Protective computer cases", minPrice: "$28.95", brands: ["Samsonite", "Targus", "Incase"] },
      { name: "Tote Bags", description: "Canvas and eco-friendly totes", minPrice: "$6.95", brands: ["LL Bean", "Patagonia"] },
      { name: "Backpacks", description: "Casual and business backpacks", minPrice: "$35.00", brands: ["Nike", "Under Armour", "Patagonia"] },
      { name: "Duffel Bags", description: "Sports and travel duffels", minPrice: "$24.95", brands: ["Nike", "Adidas", "Under Armour"] },
      { name: "Messenger Bags", description: "Professional crossbody bags", minPrice: "$32.95", brands: ["Timbuk2", "Chrome"] }
    ]
  },
  {
    id: "promotional",
    name: "Promotional Items",
    icon: Gift,
    description: "Creative giveaways and marketing items",
    products: [
      { name: "Stress Balls", description: "Custom shaped stress relievers", minPrice: "$1.95", brands: [""] },
      { name: "Keychains", description: "Metal, plastic, and leather keychains", minPrice: "$2.50", brands: [""] },
      { name: "Magnets", description: "Custom refrigerator magnets", minPrice: "$0.95", brands: [""] },
      { name: "Lanyards", description: "Branded neck straps and badge holders", minPrice: "$1.25", brands: [""] },
      { name: "Phone Grips", description: "Collapsible phone stands", minPrice: "$3.95", brands: ["PopSocket"] }
    ]
  }
];

export default function ProductCatalogDetailed() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");

  const filteredCategories = productCategories.filter(category => {
    if (selectedCategory !== "all" && category.id !== selectedCategory) return false;
    
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.products.some(product => 
                           product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    
    const matchesBrand = selectedBrand === "all" || category.products.some(product =>
      product.brands.some(brand => brand.toLowerCase().includes(selectedBrand.toLowerCase()))
    );
    
    return matchesSearch && matchesBrand;
  });

  const allBrands = Array.from(new Set(productCategories.flatMap(cat => 
    cat.products.flatMap(prod => prod.brands)
  ).filter(brand => brand !== ""))).sort();

  return (
    <section id="catalog" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold brand-navy mb-6">
            Product Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive selection of promotional products from premium brands. 
            No minimums, local production in 70+ countries, and lightning-fast delivery.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {productCategories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {allBrands.map(brand => (
                <SelectItem key={brand} value={brand.toLowerCase()}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Product Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            
            const filteredProducts = category.products.filter(product => {
              const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  product.description.toLowerCase().includes(searchTerm.toLowerCase());
              const matchesBrand = selectedBrand === "all" || 
                                 product.brands.some(brand => brand.toLowerCase().includes(selectedBrand.toLowerCase()));
              return matchesSearch && matchesBrand;
            });

            if (filteredProducts.length === 0) return null;

            return (
              <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <p className="text-blue-100">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-gray-900 mb-2">{product.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-green-600">{product.minPrice}</span>
                          <div className="flex flex-wrap gap-1">
                            {product.brands.filter(brand => brand !== "").slice(0, 2).map((brand, brandIndex) => (
                              <span key={brandIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold brand-navy mb-4">Need Something Specific?</h3>
            <p className="text-gray-600 mb-6">
              Our catalog includes thousands more products. Contact us for custom sourcing, 
              premium brand partnerships, or unique promotional items.
            </p>
            <a 
              href="mailto:rohitd@globalprintco.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}