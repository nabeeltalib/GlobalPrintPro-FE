import { useState } from "react";
import { ShoppingBag, Star, Filter, Search, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Authentic products from PromoPlace Global Print Co store
const authenticProducts = [
  {
    id: "gildan-adult-tee",
    name: "Gildan Adult Ultra Cotton T-Shirt",
    category: "Apparel",
    price: 4.25,
    minPrice: 3.85,
    description: "100% cotton preshrunk jersey knit, classic fit",
    colors: ["White", "Black", "Navy", "Red", "Royal Blue", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    decoration: ["Screen Print", "Embroidery", "Heat Transfer"],
    popular: true,
    sku: "G2000"
  },
  {
    id: "port-authority-polo",
    name: "Port Authority Core Classic Pique Polo",
    category: "Apparel",
    price: 16.75,
    minPrice: 14.25,
    description: "5-ounce, 65/35 poly/cotton pique with flat knit collar",
    colors: ["White", "Black", "Navy", "Red", "Gray", "Green"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    decoration: ["Embroidery", "Screen Print"],
    sku: "K100"
  },
  {
    id: "yeti-rambler-tumbler",
    name: "YETI Rambler 20 oz Tumbler",
    category: "Drinkware",
    price: 35.00,
    minPrice: 32.50,
    description: "Double-wall vacuum insulated with MagSlider lid",
    colors: ["Stainless", "Black", "White", "Navy", "Charcoal"],
    decoration: ["Laser Engraving", "Custom Color Fill"],
    premium: true,
    sku: "YETI-20"
  },
  {
    id: "nike-dri-fit-polo",
    name: "Nike Golf Dri-FIT Micro Pique Polo",
    category: "Apparel",
    price: 58.00,
    minPrice: 52.00,
    description: "4.2-ounce, 100% polyester Dri-FIT fabric",
    colors: ["White", "Black", "Navy", "Red", "Gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    decoration: ["Embroidery", "Heat Transfer"],
    premium: true,
    sku: "NIKE-838956"
  },
  {
    id: "hydroflask-bottle",
    name: "Hydro Flask Standard Mouth 21 oz",
    category: "Drinkware",
    price: 44.95,
    minPrice: 41.00,
    description: "TempShield insulation keeps beverages cold for 24 hours",
    colors: ["Black", "White", "Blue", "Green", "Pink"],
    decoration: ["Laser Engraving", "Screen Print"],
    premium: true,
    sku: "HF-S21"
  },
  {
    id: "moleskine-notebook",
    name: "Moleskine Classic Notebook Large",
    category: "Office",
    price: 22.95,
    minPrice: 20.50,
    description: "Hard cover, ruled pages, elastic closure, ribbon bookmark",
    colors: ["Black", "Red", "Blue", "Green"],
    decoration: ["Debossing", "Screen Print", "Laser Engraving"],
    premium: true,
    sku: "MOL-QP060"
  },
  {
    id: "under-armour-hoodie",
    name: "Under Armour Hustle Fleece Hoodie",
    category: "Apparel",
    price: 65.00,
    minPrice: 58.50,
    description: "Cotton-blend fleece with front pouch pocket",
    colors: ["Black", "Gray", "Navy", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    decoration: ["Embroidery", "Heat Transfer"],
    premium: true,
    sku: "UA-1357092"
  },
  {
    id: "promotional-pen",
    name: "BIC Clic Stic Promotional Pen",
    category: "Office",
    price: 0.48,
    minPrice: 0.42,
    description: "Retractable ballpoint pen with medium point",
    colors: ["Blue", "Black", "Red", "Green", "Purple"],
    decoration: ["Screen Print", "Pad Print"],
    popular: true,
    sku: "BIC-GSCS"
  },
  {
    id: "jbl-speaker",
    name: "JBL Clip 3 Portable Bluetooth Speaker",
    category: "Tech",
    price: 59.95,
    minPrice: 54.00,
    description: "Waterproof wireless speaker with carabiner clip",
    colors: ["Black", "Blue", "Red", "Gray", "Teal"],
    decoration: ["Laser Engraving", "Full Color Print"],
    premium: true,
    sku: "JBL-CLIP3"
  },
  {
    id: "tote-bag",
    name: "Liberty Bags Cotton Canvas Tote",
    category: "Bags",
    price: 6.75,
    minPrice: 5.95,
    description: "12 oz cotton canvas with 22-inch handles",
    colors: ["Natural", "Black", "Navy", "Red", "Green"],
    decoration: ["Screen Print", "Heat Transfer", "Embroidery"],
    popular: true,
    sku: "LB-8507"
  }
];

const categories = ["All", "Apparel", "Drinkware", "Office", "Tech", "Bags"];
const decorationMethods = ["All", "Embroidery", "Screen Print", "Laser Engraving", "Heat Transfer"];

export default function AuthenticProductsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDecoration, setSelectedDecoration] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);

  const filteredProducts = authenticProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesDecoration = selectedDecoration === "All" || product.decoration.includes(selectedDecoration);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPremium = !showPremiumOnly || product.premium;
    
    return matchesCategory && matchesDecoration && matchesSearch && matchesPremium;
  });

  const openPromoPlaceStore = () => {
    window.open('https://www.promoplace.com/globalprintco', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="authentic-products" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold brand-navy mb-6">
            Authentic Product Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Browse our complete selection of premium branded products with live pricing from our PromoPlace store. 
            All products feature authentic brand partnerships and professional customization options.
          </p>
          
          <Button
            onClick={openPromoPlaceStore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mb-8"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View Complete Store
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Search className="w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <select
              value={selectedDecoration}
              onChange={(e) => setSelectedDecoration(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              {decorationMethods.map(method => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showPremiumOnly}
                onChange={(e) => setShowPremiumOnly(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">Premium Brands Only</span>
            </label>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center relative">
                {product.popular && (
                  <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                {product.premium && (
                  <Badge className="absolute top-3 right-3 bg-purple-500 text-white">
                    Premium
                  </Badge>
                )}
                <div className="text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-800 text-sm leading-tight mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">SKU: {product.sku}</p>
                  <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-green-600">${product.minPrice}</span>
                    <span className="text-sm text-gray-500">from ${product.price}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.colors.slice(0, 4).map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{
                          backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                         color.toLowerCase() === 'black' ? '#000000' :
                                         color.toLowerCase() === 'navy' ? '#001f3f' :
                                         color.toLowerCase() === 'red' ? '#dc2626' :
                                         color.toLowerCase() === 'blue' ? '#2563eb' :
                                         color.toLowerCase() === 'royal blue' ? '#1e40af' :
                                         color.toLowerCase() === 'gray' ? '#6b7280' :
                                         color.toLowerCase() === 'green' ? '#16a34a' :
                                         color.toLowerCase() === 'stainless' ? '#e5e7eb' :
                                         '#9ca3af'
                        }}
                        title={color}
                      />
                    ))}
                    {product.colors.length > 4 && (
                      <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
                    )}
                  </div>
                  
                  {product.sizes && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.sizes.slice(0, 5).map((size, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {size}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-1">
                    {product.decoration.slice(0, 2).map((method, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button
                  onClick={openPromoPlaceStore}
                  size="sm"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  View in Store
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        )}

        {/* Store Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
          <h3 className="text-3xl font-bold brand-navy mb-4">Complete Product Catalog</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This showcase displays a selection of our most popular products. Visit our complete PromoPlace store 
            for our full inventory of over 1,000 promotional products with live pricing and instant quotes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Products Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">Live</div>
              <div className="text-sm text-gray-600">Pricing & Inventory</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">Instant</div>
              <div className="text-sm text-gray-600">Quote Generation</div>
            </div>
          </div>
          <Button
            onClick={openPromoPlaceStore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Browse Complete Catalog
          </Button>
        </div>
      </div>
    </section>
  );
}