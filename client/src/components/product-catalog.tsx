import { useState, useEffect } from "react";
import { Search, Filter, Grid, List, ShoppingCart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  basePrice: number;
  priceBreaks: Array<{
    quantity: number;
    price: number;
  }>;
  images: {
    primary: string;
    gallery: string[];
  };
  colors: string[];
  decorationMethods: string[];
  supplier: string;
  rating: number;
  minQuantity: number;
  leadTime: string;
  features: string[];
  promoPlaceUrl: string;
}

const productCatalog: Product[] = [
  {
    id: "polo-premium-1",
    name: "Premium Cotton Polo Shirt",
    description: "100% cotton pique polo with three-button placket and side vents. Perfect for corporate uniforms and events.",
    category: "Apparel",
    subcategory: "Polos",
    basePrice: 16.75,
    priceBreaks: [
      { quantity: 12, price: 16.75 },
      { quantity: 48, price: 14.50 },
      { quantity: 144, price: 12.25 },
      { quantity: 288, price: 10.95 }
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
      ]
    },
    colors: ["White", "Black", "Navy", "Royal Blue", "Red", "Forest Green"],
    decorationMethods: ["Embroidery", "Screen Print", "Heat Transfer"],
    supplier: "Champion",
    rating: 4.8,
    minQuantity: 12,
    leadTime: "5-7 business days",
    features: ["Moisture-wicking", "Tag-free", "Pre-shrunk", "Side vents"],
    promoPlaceUrl: "https://www.promoplace.com/globalprintco/product/premium-polo"
  },
  {
    id: "tumbler-yeti-1",
    name: "20oz Insulated Tumbler",
    description: "Double-wall vacuum insulated stainless steel tumbler with leak-proof lid. Keeps drinks hot for 6 hours, cold for 24 hours.",
    category: "Drinkware",
    subcategory: "Tumblers",
    basePrice: 24.95,
    priceBreaks: [
      { quantity: 12, price: 24.95 },
      { quantity: 48, price: 22.50 },
      { quantity: 144, price: 19.95 },
      { quantity: 288, price: 17.75 }
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
      ]
    },
    colors: ["Stainless", "Black", "White", "Navy", "Red", "Green"],
    decorationMethods: ["Laser Engraving", "Screen Print", "Full Color Print"],
    supplier: "YETI",
    rating: 4.9,
    minQuantity: 12,
    leadTime: "3-5 business days",
    features: ["BPA-free", "Dishwasher safe", "No-sweat design", "Leak-proof"],
    promoPlaceUrl: "https://www.promoplace.com/globalprintco/product/yeti-tumbler"
  },
  {
    id: "notebook-moleskine-1",
    name: "Classic Hardcover Notebook",
    description: "Premium bound notebook with elastic closure, ribbon bookmark, and expandable inner pocket. 240 pages of ivory paper.",
    category: "Office",
    subcategory: "Notebooks",
    basePrice: 18.50,
    priceBreaks: [
      { quantity: 25, price: 18.50 },
      { quantity: 100, price: 16.25 },
      { quantity: 250, price: 14.75 },
      { quantity: 500, price: 13.50 }
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1563208723-ca8c5796e08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1563208723-ca8c5796e08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
      ]
    },
    colors: ["Black", "Red", "Blue", "Green", "Brown"],
    decorationMethods: ["Debossing", "Foil Stamping", "Screen Print"],
    supplier: "Moleskine",
    rating: 4.7,
    minQuantity: 25,
    leadTime: "7-10 business days",
    features: ["Elastic closure", "Ribbon bookmark", "Expandable pocket", "Ivory paper"],
    promoPlaceUrl: "https://www.promoplace.com/globalprintco/product/moleskine-notebook"
  },
  {
    id: "tote-canvas-1",
    name: "Heavy Duty Canvas Tote",
    description: "12oz cotton canvas tote bag with reinforced handles and bottom gusset. Perfect for trade shows and retail.",
    category: "Bags",
    subcategory: "Totes",
    basePrice: 8.95,
    priceBreaks: [
      { quantity: 50, price: 8.95 },
      { quantity: 150, price: 7.50 },
      { quantity: 300, price: 6.75 },
      { quantity: 500, price: 5.95 }
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
      ]
    },
    colors: ["Natural", "Black", "Navy", "Red", "Royal Blue"],
    decorationMethods: ["Screen Print", "Heat Transfer", "Embroidery"],
    supplier: "Liberty Bags",
    rating: 4.6,
    minQuantity: 50,
    leadTime: "3-5 business days",
    features: ["Reinforced handles", "Bottom gusset", "12oz canvas", "Large imprint area"],
    promoPlaceUrl: "https://www.promoplace.com/globalprintco/product/canvas-tote"
  },
  {
    id: "tech-powerbank-1",
    name: "Wireless Charging Power Bank",
    description: "10,000mAh power bank with wireless charging pad and dual USB ports. Compatible with all Qi-enabled devices.",
    category: "Technology",
    subcategory: "Power Banks",
    basePrice: 34.95,
    priceBreaks: [
      { quantity: 25, price: 34.95 },
      { quantity: 100, price: 31.50 },
      { quantity: 250, price: 28.75 },
      { quantity: 500, price: 25.95 }
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1609592309515-2f4e2f5e5e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: []
    },
    colors: ["Black", "White", "Blue", "Red"],
    decorationMethods: ["Laser Engraving", "Full Color Print", "Pad Print"],
    supplier: "Anker",
    rating: 4.8,
    minQuantity: 25,
    leadTime: "7-10 business days",
    features: ["Wireless charging", "10,000mAh", "Dual USB", "LED indicator"],
    promoPlaceUrl: "https://www.promoplace.com/globalprintco/product/wireless-powerbank"
  },
  {
    id: "cap-newera-1",
    name: "Structured Baseball Cap",
    description: "6-panel structured baseball cap with pre-curved visor and adjustable snapback closure. One size fits most.",
    category: "Headwear",
    subcategory: "Baseball Caps",
    basePrice: 12.50,
    priceBreaks: [
      { quantity: 48, price: 12.50 },
      { quantity: 144, price: 10.75 },
      { quantity: 288, price: 9.50 },
      { quantity: 576, price: 8.25 }
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1588635113995-3223e1c44513?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: []
    },
    colors: ["Black", "Navy", "White", "Red", "Khaki", "Gray"],
    decorationMethods: ["Embroidery", "Screen Print", "Heat Transfer"],
    supplier: "New Era",
    rating: 4.7,
    minQuantity: 48,
    leadTime: "5-7 business days",
    features: ["6-panel construction", "Pre-curved visor", "Snapback closure", "One size fits most"],
    promoPlaceUrl: "https://www.promoplace.com/globalprintco/product/baseball-cap"
  }
];

const categories = Array.from(new Set(productCatalog.map(p => p.category)));
const suppliers = Array.from(new Set(productCatalog.map(p => p.supplier)));

export default function ProductCatalog() {
  const [products, setProducts] = useState(productCatalog);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSupplier, setSelectedSupplier] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    let filtered = productCatalog;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Supplier filter
    if (selectedSupplier !== "All") {
      filtered = filtered.filter(product => product.supplier === selectedSupplier);
    }

    // Price filter
    if (minPrice) {
      filtered = filtered.filter(product => product.basePrice >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter(product => product.basePrice <= parseFloat(maxPrice));
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.basePrice - b.basePrice;
        case "price-high":
          return b.basePrice - a.basePrice;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setProducts(filtered);
  }, [searchTerm, selectedCategory, selectedSupplier, minPrice, maxPrice, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedSupplier("All");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <section id="product-catalog" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold brand-navy mb-6">
            Professional Product Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Browse our extensive collection of premium promotional products. 
            Real products, real pricing, authentic supplier partnerships.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products, brands, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Supplier Filter */}
            <div>
              <select
                value={selectedSupplier}
                onChange={(e) => setSelectedSupplier(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Suppliers</option>
                {suppliers.map(supplier => (
                  <option key={supplier} value={supplier}>{supplier}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mt-6">
            {/* Price Range */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Clear Filters */}
            <div>
              <Button onClick={clearFilters} variant="outline" className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results and View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-600">
              Showing {products.length} of {productCatalog.length} products
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Product Grid/List */}
        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          : "space-y-6"
        }>
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <div className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}>
                <img
                  src={product.images.primary}
                  alt={product.name}
                  className={`w-full object-cover ${
                    viewMode === "list" ? "h-48" : "h-64"
                  }`}
                />
              </div>
              
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg brand-navy">{product.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">Starting at</span>
                    <span className="font-bold text-green-600">${product.basePrice}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Min Qty: {product.minQuantity} • {product.leadTime}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.decorationMethods.slice(0, 2).map((method, index) => (
                      <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        {method}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    Supplier: {product.supplier}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => window.open(product.promoPlaceUrl, '_blank')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const element = document.getElementById("mockup-generator");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No products found matching your filters.
            </p>
            <Button onClick={clearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}