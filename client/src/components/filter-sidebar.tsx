import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { Category } from "@shared/schema";

interface FilterSidebarProps {
  categories: Category[];
  selectedFilters: {
    category: string;
    priceRange: string;  
    features: string[];
    sortBy: string;
  };
  onFilterChange: (filters: Partial<FilterSidebarProps['selectedFilters']>) => void;
}

export default function FilterSidebar({ categories, selectedFilters, onFilterChange }: FilterSidebarProps) {
  const priceRanges = [
    { value: "", label: "All Prices" },
    { value: "0-10", label: "Under $10" },
    { value: "10-25", label: "$10 - $25" },
    { value: "25-50", label: "$25 - $50" },
    { value: "50-", label: "Over $50" },
  ];

  const availableFeatures = [
    "Embroidery Available",
    "Screen Printing", 
    "Multiple Colors",
  ];

  const handleCategoryChange = (categoryName: string, checked: boolean) => {
    onFilterChange({ 
      category: checked ? categoryName : "" 
    });
  };

  const handlePriceRangeChange = (priceRange: string) => {
    onFilterChange({ priceRange });
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    const newFeatures = checked
      ? [...selectedFilters.features, feature]
      : selectedFilters.features.filter(f => f !== feature);
    onFilterChange({ features: newFeatures });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Products</h3>
      
      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={selectedFilters.category === category.name}
                  onCheckedChange={(checked) => 
                    handleCategoryChange(category.name, checked as boolean)
                  }
                />
                <Label
                  htmlFor={`category-${category.id}`}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {category.name}
                </Label>
              </div>
              <span className="text-xs text-gray-500">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
        <RadioGroup value={selectedFilters.priceRange} onValueChange={handlePriceRangeChange}>
          {priceRanges.map((range) => (
            <div key={range.value} className="flex items-center space-x-2">
              <RadioGroupItem value={range.value} id={`price-${range.value}`} />
              <Label htmlFor={`price-${range.value}`} className="text-sm text-gray-700 cursor-pointer">
                {range.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Features</h4>
        <div className="space-y-2">
          {availableFeatures.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={`feature-${feature}`}
                checked={selectedFilters.features.includes(feature)}
                onCheckedChange={(checked) => 
                  handleFeatureChange(feature, checked as boolean)
                }
              />
              <Label
                htmlFor={`feature-${feature}`}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {feature}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button 
        className="w-full bg-promo-blue hover:bg-promo-blue text-white"
        onClick={() => {
          // Filters are applied automatically on change
        }}
      >
        Apply Filters
      </Button>
    </div>
  );
}
