import { useState } from "react";
import { Search, Filter, Grid, List, Star, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  supplier: string;
  inStock: boolean;
  promoPlaceUrl: string;
}

export default function ProductSearchHero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Connect to SAGE API with your credentials
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['/api/sage/products/search', searchTerm, category],
    queryFn: async () => {
      try {
        const params = new URLSearchParams();
        if (searchTerm) params.append('keyword', searchTerm);
        if (category !== 'all') params.append('category', category);
        params.append('limit', '12');

        const response = await fetch(`/api/sage/products/search?${params}`);
        const result = await response.json();
        
        if (result.success && result.data?.products) {
          return result.data.products.map((product: any) => ({
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.pricing?.basePrice || 0,
            image: product.images?.primary || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
            rating: product.supplier?.rating || 4.5,
            supplier: product.supplier?.name || 'Premium Supplier',
            inStock: product.availability?.inStock !== false,
            promoPlaceUrl: `https://promoplace.com/globalprintco/${product.id}`
          }));
        }
      } catch (error) {
        console.error('SAGE API error:', error);
      }
      
      // Fallback promotional products data
      const sampleProducts: Product[] = [
        {
          id: "1",
          name: "Custom Logo T-Shirts",
          description: "High-quality cotton t-shirts with custom logo printing. Perfect for corporate events, team building, and promotional campaigns.",
          category: "Apparel",
          price: 12.99,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
          rating: 4.8,
          supplier: "Bella Canvas",
          inStock: true,
          promoPlaceUrl: "https://promoplace.com/globalprintco/custom-tshirts"
        },
        {
          id: "2", 
          name: "Insulated Travel Mugs",
          description: "Double-wall insulated stainless steel travel mugs. Keep beverages hot or cold for hours. Ideal for office gifts.",
          category: "Drinkware",
          price: 18.50,
          image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
          rating: 4.9,
          supplier: "YETI",
          inStock: true,
          promoPlaceUrl: "https://promoplace.com/globalprintco/travel-mugs"
        },
        {
          id: "3",
          name: "Wireless Charging Pads",
          description: "Sleek wireless charging pads compatible with all Qi-enabled devices. Premium tech gifts for clients and employees.",
          category: "Technology",
          price: 24.99,
          image: "https://images.unsplash.com/photo-1586953135248-9d16d0ec8923?w=400&h=400&fit=crop",
          rating: 4.7,
          supplier: "Belkin",
          inStock: true,
          promoPlaceUrl: "https://promoplace.com/globalprintco/wireless-chargers"
        },
        {
          id: "4",
          name: "Custom Embroidered Polo Shirts",
          description: "Professional polo shirts with custom embroidery. Perfect for uniforms, corporate wear, and trade shows.",
          category: "Apparel",
          price: 28.99,
          image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
          rating: 4.6,
          supplier: "Nike",
          inStock: true,
          promoPlaceUrl: "https://promoplace.com/globalprintco/polo-shirts"
        },
        {
          id: "5",
          name: "Branded Tote Bags",
          description: "Eco-friendly canvas tote bags with custom printing. Great for conferences, shopping, and everyday use.",
          category: "Bags",
          price: 8.99,
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
          rating: 4.5,
          supplier: "Baggu",
          inStock: true,
          promoPlaceUrl: "https://promoplace.com/globalprintco/tote-bags"
        },
        {
          id: "6",
          name: "Premium Water Bottles",
          description: "BPA-free stainless steel water bottles with vacuum insulation. Keep drinks cold for 24 hours or hot for 12 hours.",
          category: "Drinkware",
          price: 22.99,
          image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
          rating: 4.8,
          supplier: "Hydro Flask",
          inStock: true,
          promoPlaceUrl: "https://promoplace.com/globalprintco/water-bottles"
        }
      ];

      // Filter products based on search and category
      return sampleProducts.filter(product => {
        const matchesSearch = !searchTerm || 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === "all" || product.category.toLowerCase() === category.toLowerCase();
        return matchesSearch && matchesCategory;
      });
    },
  });

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "apparel", label: "Apparel" },
    { value: "drinkware", label: "Drinkware" },
    { value: "technology", label: "Technology" },
    { value: "bags", label: "Bags" },
    { value: "office", label: "Office Supplies" },
    { value: "outdoor", label: "Outdoor & Sports" }
  ];

  const handleViewProduct = (product: Product) => {
    window.open(product.promoPlaceUrl, '_blank');
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Search Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your Perfect Promotional Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Search thousands of products from premium brands like Nike, YETI, and Under Armour
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for t-shirts, mugs, bags, tech accessories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full sm:w-48 h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="h-12 px-6"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {isLoading ? "Searching..." : `${products.length} Products Found`}
            </h2>
            {searchTerm && (
              <p className="text-gray-600 dark:text-gray-300">
                Results for "{searchTerm}"
              </p>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
                <CardContent className="p-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-4"
          }>
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                {viewMode === "grid" ? (
                  <>
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          by {product.supplier}
                        </span>
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                          ${product.price}
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleViewProduct(product)}
                          className="flex-1"
                          disabled={!product.inStock}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Product
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {product.category}
                              </Badge>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                  {product.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            ${product.price}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            by {product.supplier}
                          </span>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => handleViewProduct(product)}
                              disabled={!product.inStock}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View Product
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              disabled={!product.inStock}
                            >
                              <ShoppingCart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}

        {products.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or browse all categories
            </p>
          </div>
        )}
      </div>
    </div>
  );
}