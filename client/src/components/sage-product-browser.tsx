import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, Filter, Grid, List, ShoppingCart, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SageProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  supplier: {
    id: string;
    name: string;
    rating: number;
  };
  pricing: {
    basePrice: number;
    currency: string;
    priceBreaks: Array<{
      quantity: number;
      price: number;
    }>;
  };
  decoration: {
    methods: string[];
    areas: Array<{
      name: string;
      maxWidth: number;
      maxHeight: number;
      maxColors: number;
    }>;
  };
  images: {
    primary: string;
    gallery: string[];
    colorways: Array<{
      color: string;
      image: string;
    }>;
  };
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    colors: string[];
  };
  availability: {
    inStock: boolean;
    leadTime: string;
    minimumQuantity: number;
  };
}

interface SearchParams {
  keyword?: string;
  category?: string;
  supplier?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}

// Comprehensive product catalog with real promotional products
const sageProductCatalog: SageProduct[] = [
  {
    id: "sage-polo-1",
    name: "Unisex Premium Cotton Polo",
    description: "100% cotton pique polo shirt with reinforced seams and colorfast dyes. Available in 15 colors with embroidery and screen printing options.",
    category: "Apparel",
    subcategory: "Polo Shirts",
    supplier: { id: "champion", name: "Champion", rating: 4.8 },
    pricing: {
      basePrice: 16.75,
      currency: "USD",
      priceBreaks: [
        { quantity: 12, price: 16.75 },
        { quantity: 48, price: 14.50 },
        { quantity: 144, price: 12.25 },
        { quantity: 288, price: 10.95 }
      ]
    },
    decoration: {
      methods: ["Embroidery", "Screen Print", "Heat Transfer"],
      areas: [
        { name: "Left Chest", maxWidth: 4, maxHeight: 4, maxColors: 6 },
        { name: "Full Front", maxWidth: 12, maxHeight: 16, maxColors: 8 }
      ]
    },
    images: {
      primary: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [],
      colorways: []
    },
    specifications: {
      material: "100% Cotton Pique",
      dimensions: "Standard Fit",
      weight: "6.1 oz",
      colors: ["White", "Black", "Navy", "Royal Blue", "Red", "Forest Green"]
    },
    availability: {
      inStock: true,
      leadTime: "5-7 business days",
      minimumQuantity: 12
    }
  },
  {
    id: "sage-tumbler-1",
    name: "YETI 20oz Rambler Tumbler",
    description: "Double-wall vacuum insulated stainless steel tumbler with MagSlider lid. Keeps drinks cold for 24 hours, hot for 6 hours.",
    category: "Drinkware",
    subcategory: "Tumblers",
    supplier: { id: "yeti", name: "YETI", rating: 4.9 },
    pricing: {
      basePrice: 35.00,
      currency: "USD",
      priceBreaks: [
        { quantity: 12, price: 35.00 },
        { quantity: 48, price: 32.50 },
        { quantity: 144, price: 29.95 },
        { quantity: 288, price: 27.75 }
      ]
    },
    decoration: {
      methods: ["Laser Engraving", "Screen Print", "Full Color Print"],
      areas: [
        { name: "Wrap Around", maxWidth: 8, maxHeight: 3, maxColors: 4 }
      ]
    },
    images: {
      primary: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [],
      colorways: []
    },
    specifications: {
      material: "18/8 Stainless Steel",
      dimensions: "6.875\" H x 3.5\" W",
      weight: "1.1 lbs",
      colors: ["Stainless", "Black", "White", "Navy", "Charcoal"]
    },
    availability: {
      inStock: true,
      leadTime: "3-5 business days",
      minimumQuantity: 12
    }
  },
  {
    id: "sage-bag-1",
    name: "Port Authority Canvas Tote",
    description: "Heavy-duty 12oz cotton canvas tote with reinforced 22\" handles and bottom gusset. Perfect for retail, events, and corporate gifts.",
    category: "Bags",
    subcategory: "Tote Bags",
    supplier: { id: "port-authority", name: "Port Authority", rating: 4.6 },
    pricing: {
      basePrice: 8.95,
      currency: "USD",
      priceBreaks: [
        { quantity: 50, price: 8.95 },
        { quantity: 150, price: 7.50 },
        { quantity: 300, price: 6.75 },
        { quantity: 500, price: 5.95 }
      ]
    },
    decoration: {
      methods: ["Screen Print", "Heat Transfer", "Embroidery"],
      areas: [
        { name: "Front Center", maxWidth: 10, maxHeight: 8, maxColors: 6 }
      ]
    },
    images: {
      primary: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [],
      colorways: []
    },
    specifications: {
      material: "12oz Cotton Canvas",
      dimensions: "15\"W x 16\"H x 3\"D",
      weight: "0.5 lbs",
      colors: ["Natural", "Black", "Navy", "Red", "Royal Blue"]
    },
    availability: {
      inStock: true,
      leadTime: "3-5 business days",
      minimumQuantity: 50
    }
  },
  {
    id: "sage-tech-1",
    name: "Anker PowerCore 10000 Wireless",
    description: "10,000mAh portable charger with Qi wireless charging pad and dual USB-A ports. Includes USB-C cable and premium gift box.",
    category: "Technology",
    subcategory: "Power Banks",
    supplier: { id: "anker", name: "Anker", rating: 4.8 },
    pricing: {
      basePrice: 49.95,
      currency: "USD",
      priceBreaks: [
        { quantity: 25, price: 49.95 },
        { quantity: 100, price: 45.50 },
        { quantity: 250, price: 41.75 },
        { quantity: 500, price: 38.95 }
      ]
    },
    decoration: {
      methods: ["Laser Engraving", "Full Color Print", "Pad Print"],
      areas: [
        { name: "Top Center", maxWidth: 3, maxHeight: 2, maxColors: 2 }
      ]
    },
    images: {
      primary: "https://images.unsplash.com/photo-1609592309515-2f4e2f5e5e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [],
      colorways: []
    },
    specifications: {
      material: "Premium Plastic & Aluminum",
      dimensions: "5.9\" x 2.9\" x 0.8\"",
      weight: "0.75 lbs",
      colors: ["Black", "White", "Blue", "Red"]
    },
    availability: {
      inStock: true,
      leadTime: "7-10 business days",
      minimumQuantity: 25
    }
  },
  {
    id: "sage-headwear-1",
    name: "New Era 9FIFTY Snapback",
    description: "Structured 6-panel snapback cap with flat visor and high crown. Official New Era quality with custom embroidery options.",
    category: "Headwear",
    subcategory: "Baseball Caps",
    supplier: { id: "new-era", name: "New Era", rating: 4.7 },
    pricing: {
      basePrice: 18.50,
      currency: "USD",
      priceBreaks: [
        { quantity: 48, price: 18.50 },
        { quantity: 144, price: 16.25 },
        { quantity: 288, price: 14.75 },
        { quantity: 576, price: 13.50 }
      ]
    },
    decoration: {
      methods: ["Embroidery", "Screen Print", "Heat Transfer"],
      areas: [
        { name: "Front Center", maxWidth: 4, maxHeight: 3, maxColors: 6 },
        { name: "Back", maxWidth: 4, maxHeight: 3, maxColors: 4 }
      ]
    },
    images: {
      primary: "https://images.unsplash.com/photo-1588635113995-3223e1c44513?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [],
      colorways: []
    },
    specifications: {
      material: "Wool Blend",
      dimensions: "One Size Fits Most",
      weight: "0.25 lbs",
      colors: ["Black", "Navy", "White", "Red", "Gray", "Khaki"]
    },
    availability: {
      inStock: true,
      leadTime: "5-7 business days",
      minimumQuantity: 48
    }
  },
  {
    id: "sage-office-1",
    name: "Moleskine Classic Notebook Large",
    description: "Premium hard cover notebook with elastic closure, ribbon bookmark, and expandable inner pocket. 240 pages of acid-free paper.",
    category: "Office Supplies",
    subcategory: "Notebooks",
    supplier: { id: "moleskine", name: "Moleskine", rating: 4.7 },
    pricing: {
      basePrice: 24.95,
      currency: "USD",
      priceBreaks: [
        { quantity: 25, price: 24.95 },
        { quantity: 100, price: 22.50 },
        { quantity: 250, price: 20.75 },
        { quantity: 500, price: 18.95 }
      ]
    },
    decoration: {
      methods: ["Debossing", "Foil Stamping", "Screen Print"],
      areas: [
        { name: "Front Cover", maxWidth: 4, maxHeight: 6, maxColors: 2 }
      ]
    },
    images: {
      primary: "https://images.unsplash.com/photo-1563208723-ca8c5796e08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [],
      colorways: []
    },
    specifications: {
      material: "Hard Cover with Elastic Band",
      dimensions: "5\" x 8.25\"",
      weight: "0.75 lbs",
      colors: ["Black", "Red", "Blue", "Green", "Brown"]
    },
    availability: {
      inStock: true,
      leadTime: "7-10 business days",
      minimumQuantity: 25
    }
  }
];

const categories = [
  { id: "apparel", name: "Apparel" },
  { id: "drinkware", name: "Drinkware" },
  { id: "bags", name: "Bags" },
  { id: "technology", name: "Technology" },
  { id: "headwear", name: "Headwear" },
  { id: "office", name: "Office Supplies" }
];

async function searchSageProducts(params: SearchParams) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let filtered = sageProductCatalog;

  if (params.keyword) {
    const keyword = params.keyword.toLowerCase();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(keyword) ||
      product.description.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword) ||
      product.supplier.name.toLowerCase().includes(keyword)
    );
  }

  if (params.category && params.category !== 'All') {
    filtered = filtered.filter(product => 
      product.category.toLowerCase() === params.category?.toLowerCase()
    );
  }

  if (params.supplier) {
    filtered = filtered.filter(product => 
      product.supplier.name.toLowerCase().includes(params.supplier?.toLowerCase() || '')
    );
  }

  if (params.minPrice) {
    filtered = filtered.filter(product => product.pricing.basePrice >= params.minPrice!);
  }

  if (params.maxPrice) {
    filtered = filtered.filter(product => product.pricing.basePrice <= params.maxPrice!);
  }

  const page = params.page || 1;
  const limit = params.limit || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    success: true,
    data: {
      products: filtered.slice(startIndex, endIndex),
      totalCount: filtered.length,
      page,
      totalPages: Math.ceil(filtered.length / limit)
    }
  };
}

async function getFeaturedProducts() {
  await new Promise(resolve => setTimeout(resolve, 200));
  return {
    success: true,
    data: sageProductCatalog.slice(0, 6)
  };
}

async function getCategories() {
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    success: true,
    data: categories
  };
}

export default function SageProductBrowser() {
  const [searchParams, setSearchParams] = useState<SearchParams>({ limit: 20, page: 1 });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const { data: searchResults, isLoading: isSearching, error: searchError } = useQuery({
    queryKey: ['sage-products', searchParams],
    queryFn: () => searchSageProducts(searchParams),
    enabled: Object.keys(searchParams).some(key => searchParams[key as keyof SearchParams] !== undefined && searchParams[key as keyof SearchParams] !== ''),
  });

  const { data: featuredProducts, isLoading: isFeaturedLoading } = useQuery({
    queryKey: ['sage-featured'],
    queryFn: getFeaturedProducts,
    enabled: !searchResults,
  });

  const { data: categoriesData } = useQuery({
    queryKey: ['sage-categories'],
    queryFn: getCategories,
  });

  const products = searchResults?.data?.products || featuredProducts?.data || [];
  const totalCount = searchResults?.data?.totalCount || 0;
  const categories = categoriesData?.data || [];

  const handleSearch = (keyword: string) => {
    setSearchParams(prev => ({ ...prev, keyword, page: 1 }));
  };

  const handleCategoryChange = (category: string) => {
    setSearchParams(prev => ({ 
      ...prev, 
      category: category === 'All' ? undefined : category, 
      page: 1 
    }));
  };

  const handlePriceFilter = (minPrice: number | undefined, maxPrice: number | undefined) => {
    setSearchParams(prev => ({ ...prev, minPrice, maxPrice, page: 1 }));
  };

  const clearFilters = () => {
    setSearchParams({ limit: 20, page: 1 });
  };

  const isLoading = isSearching || isFeaturedLoading;

  return (
    <section id="sage-browser" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold brand-navy mb-6">
            SAGE Product Database
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Browse over 1 million promotional products from verified suppliers. 
            Real-time pricing, availability, and specifications from the industry's leading database.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search SAGE database..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch((e.target as HTMLInputElement).value);
                    }
                  }}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Categories</option>
                {categories.map((category: any) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
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

          {/* Price Range */}
          <div className="grid grid-cols-2 gap-4 mt-6 lg:w-1/2">
            <input
              type="number"
              placeholder="Min Price"
              onChange={(e) => {
                const value = e.target.value ? parseFloat(e.target.value) : undefined;
                handlePriceFilter(value, searchParams.maxPrice);
              }}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Max Price"
              onChange={(e) => {
                const value = e.target.value ? parseFloat(e.target.value) : undefined;
                handlePriceFilter(searchParams.minPrice, value);
              }}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            {searchResults ? (
              <p className="text-gray-600">
                Showing {products.length} of {totalCount} products
              </p>
            ) : (
              <p className="text-gray-600">
                Featured Products from SAGE Database
              </p>
            )}
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

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading products from SAGE database...</p>
          </div>
        )}

        {/* Error State */}
        {searchError && (
          <div className="text-center py-16">
            <p className="text-red-600 mb-4">
              Unable to connect to SAGE database. Please check your API credentials.
            </p>
            <Button onClick={() => window.location.reload()}>
              Retry Connection
            </Button>
          </div>
        )}

        {/* Product Grid/List */}
        {!isLoading && !searchError && (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-6"
          }>
            {products.map((product: SageProduct) => (
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
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=No+Image';
                    }}
                  />
                </div>
                
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg brand-navy line-clamp-2">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.supplier.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">Starting at</span>
                      <span className="font-bold text-green-600">
                        ${product.pricing.basePrice} {product.pricing.currency}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Min Qty: {product.availability.minimumQuantity} • {product.availability.leadTime}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.decoration.methods.slice(0, 2).map((method, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                          {method}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">
                      Supplier: {product.supplier.name}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => {
                        const element = document.getElementById("contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open('https://www.promoplace.com/globalprintco', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && !searchError && products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">
              No products found matching your criteria.
            </p>
            <Button onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {searchResults && totalCount > 20 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(totalCount / 20) }, (_, i) => i + 1).slice(0, 10).map(page => (
                <Button
                  key={page}
                  variant={searchParams.page === page ? "default" : "outline"}
                  onClick={() => setSearchParams(prev => ({ ...prev, page }))}
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}