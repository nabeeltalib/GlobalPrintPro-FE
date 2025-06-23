import Breadcrumb from "@/components/breadcrumb";
import FilterSidebar from "@/components/filter-sidebar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductGrid from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import type { Category, SearchParams } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation, useSearch } from "wouter";

const categories: any[] = [];

// [
//   { value: "all", label: "All Categories" },
//   { value: "apparel", label: "Apparel" },
//   { value: "drinkware", label: "Drinkware" },
//   { value: "technology", label: "Technology" },
//   { value: "bags", label: "Bags" },
//   { value: "office", label: "Office Supplies" },
//   { value: "outdoor", label: "Outdoor & Sports" },
// ];

export default function Products() {
  const [, setLocation] = useLocation();
  const search = useSearch();

  // Parse URL search params
  const searchParams = new URLSearchParams(search);
  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "";
  const priceRange = searchParams.get("priceRange") || "";
  const features = searchParams.getAll("features");
  const sortBy = searchParams.get("sortBy") || "name";
  const page = parseInt(searchParams.get("page") || "1");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedFilters, setSelectedFilters] = useState({
    category,
    priceRange,
    features,
    sortBy,
  });

  const categoriesLoading = false;

  const { data: productsResult, isLoading: productsLoading } = useQuery({
    queryKey: ["/api/sage/products/search", searchTerm, category],
    queryFn: async () => {
      try {
        const params = new URLSearchParams();
        if (searchTerm) params.append("keyword", searchTerm);
        if (category !== "all") params.append("category", category);
        params.append("limit", "12");

        const response = await fetch(`/api/sage/products/search?${params}`);
        const result = await response.json();

        let products = [];

        if (result.success && result.data?.products) {
          products = result.data.products.map((product: any) => ({
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.pricing?.basePrice || 0,
            image:
              product.images?.primary ||
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
            rating: product.supplier?.rating || 4.5,
            supplier: product.supplier?.name || "Premium Supplier",
            inStock: product.availability?.inStock !== false,
            promoPlaceUrl: `https://promoplace.com/globalprintco/${product.id}`,
          }));

          return {
            products,
            totalCount: result.data.totalCount,
            totalPages: result.data.totalPages,
          };
        }
      } catch (error) {
        console.error("SAGE API error:", error);
      }
    },
  });

  const updateURL = (newParams: Partial<SearchParams>) => {
    const urlParams = new URLSearchParams();

    if (newParams.query || query)
      urlParams.set("query", newParams.query || query);
    if (newParams.category || category)
      urlParams.set("category", newParams.category || category);
    if (newParams.priceRange || priceRange)
      urlParams.set("priceRange", newParams.priceRange || priceRange);
    if (newParams.features || features.length > 0) {
      (newParams.features || features).forEach((feature) =>
        urlParams.append("features", feature)
      );
    }
    if (newParams.sortBy || sortBy)
      urlParams.set("sortBy", newParams.sortBy || sortBy);
    if (newParams.page || page)
      urlParams.set("page", String(newParams.page || page));

    setLocation(`/products?${urlParams.toString()}`);
  };

  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    updateURL({ query: newQuery, page: 1 });
  };

  const handleFilterChange = (newFilters: Partial<typeof selectedFilters>) => {
    setSelectedFilters((prev) => ({ ...prev, ...newFilters }));
    updateURL({ ...newFilters, page: 1 });
  };

  const handleSortChange = (newSort: string) => {
    handleFilterChange({ sortBy: newSort });
  };

  const handlePageChange = (newPage: number) => {
    updateURL({ page: newPage });
  };

  const products = (productsResult as any)?.products || [];
  const total = (productsResult as any)?.totalCount || 0;
  const totalPages = (productsResult as any)?.totalPages || 1;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header searchQuery={searchQuery} onSearch={handleSearch} />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: query ? `Search: ${query}` : "All Products" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            {categoriesLoading ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
              </div>
            ) : (
              <FilterSidebar
                categories={categories || []}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
              />
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {query ? `Search: ${query}` : "All Products"}
                </h1>
                <p className="text-gray-600 mt-1">
                  {productsLoading ? (
                    <Skeleton className="h-4 w-32" />
                  ) : (
                    <>
                      <span className="font-medium">{total}</span> products
                      found
                      {query && ` for "${query}"`}
                    </>
                  )}
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name: A to Z</SelectItem>
                    <SelectItem value="price-asc">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-desc">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Product Grid */}
            {productsLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
                  >
                    <Skeleton className="aspect-square w-full mb-4" />
                    <Skeleton className="h-5 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            ) : (
              <ProductGrid products={products} />
            )}

            {/* Pagination */}
            {!productsLoading && totalPages > 1 && (
              <div className="flex items-center justify-between bg-white rounded-lg shadow-sm border border-gray-200 p-4 mt-8">
                <div className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">{(page - 1) * 9 + 1}</span> to{" "}
                  <span className="font-medium">
                    {Math.min(page * 9, total)}
                  </span>{" "}
                  of <span className="font-medium">{total}</span> results
                </div>

                <nav className="flex items-center space-x-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                  >
                    Previous
                  </Button>

                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const pageNum = Math.max(
                      1,
                      Math.min(page - 2 + i, totalPages - 4 + i)
                    );
                    return (
                      <Button
                        key={pageNum}
                        variant={page === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(pageNum)}
                        className={
                          page === pageNum
                            ? "bg-promo-blue hover:bg-promo-blue"
                            : ""
                        }
                      >
                        {pageNum}
                      </Button>
                    );
                  })}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                  >
                    Next
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
