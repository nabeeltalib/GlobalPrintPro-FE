import { z } from "zod";

// Product data types
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  supplier: {
    id: string;
    name: string;
    rating: number;
    location: string;
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
      setupFee: number;
    }>;
  };
  images: {
    primary: string;
    gallery: string[];
    colorways: Array<{
      color: string;
      image: string;
      hex: string;
    }>;
  };
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    colors: string[];
    features: string[];
  };
  availability: {
    inStock: boolean;
    leadTime: string;
    minimumQuantity: number;
    maxQuantity: number;
  };
  seo: {
    keywords: string[];
    metaDescription: string;
  };
  promoPlaceUrl: string;
}

// Search parameters validation
export const searchParamsSchema = z.object({
  keyword: z.string().optional(),
  category: z.string().optional(),
  subcategory: z.string().optional(),
  supplier: z.string().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  decorationMethod: z.string().optional(),
  color: z.string().optional(),
  inStockOnly: z.boolean().optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(20),
  sortBy: z.enum(['name', 'price-low', 'price-high', 'rating', 'newest']).default('name')
});

export type SearchParams = z.infer<typeof searchParamsSchema>;

// Comprehensive product database
const productDatabase: Product[] = [
  {
    id: "gpc-polo-001",
    name: "Nike Dri-FIT Polo Shirt",
    description: "100% polyester moisture-wicking polo with Nike Swoosh logo. Perfect for corporate events, uniforms, and promotional giveaways.",
    category: "Apparel",
    subcategory: "Polo Shirts",
    supplier: {
      id: "nike-corporate",
      name: "Nike",
      rating: 4.9,
      location: "USA"
    },
    pricing: {
      basePrice: 28.50,
      currency: "USD",
      priceBreaks: [
        { quantity: 12, price: 28.50 },
        { quantity: 48, price: 26.75 },
        { quantity: 144, price: 24.95 },
        { quantity: 288, price: 22.50 },
        { quantity: 576, price: 20.95 }
      ]
    },
    decoration: {
      methods: ["Embroidery", "Screen Print", "Heat Transfer"],
      areas: [
        { name: "Left Chest", maxWidth: 4, maxHeight: 4, maxColors: 6, setupFee: 45.00 },
        { name: "Full Front", maxWidth: 12, maxHeight: 16, maxColors: 8, setupFee: 65.00 },
        { name: "Back Yoke", maxWidth: 6, maxHeight: 3, maxColors: 4, setupFee: 50.00 }
      ]
    },
    images: {
      primary: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
      ],
      colorways: [
        { color: "White", image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1", hex: "#FFFFFF" },
        { color: "Navy", image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2", hex: "#001F3F" }
      ]
    },
    specifications: {
      material: "100% Polyester Dri-FIT",
      dimensions: "Standard Fit",
      weight: "5.5 oz",
      colors: ["White", "Black", "Navy", "Royal Blue", "Red", "Forest Green", "Gray"],
      features: ["Moisture-wicking", "Tag-free", "UV protection", "Anti-microbial"]
    },
    availability: {
      inStock: true,
      leadTime: "5-7 business days",
      minimumQuantity: 12,
      maxQuantity: 10000
    },
    seo: {
      keywords: ["nike polo", "corporate apparel", "dri-fit", "moisture wicking", "promotional polo"],
      metaDescription: "Premium Nike Dri-FIT polo shirts for corporate events and promotional campaigns. Moisture-wicking technology with custom embroidery options."
    },
    promoPlaceUrl: "https://www.promoplace.com/globalprintco/nike-dri-fit-polo"
  },
  {
    id: "gpc-tumbler-001",
    name: "YETI Rambler 20oz Tumbler",
    description: "Double-wall vacuum insulated stainless steel tumbler with MagSlider lid. Keeps drinks cold for 24+ hours, hot for 6+ hours.",
    category: "Drinkware",
    subcategory: "Tumblers",
    supplier: {
      id: "yeti-corporate",
      name: "YETI",
      rating: 4.9,
      location: "USA"
    },
    pricing: {
      basePrice: 35.00,
      currency: "USD",
      priceBreaks: [
        { quantity: 12, price: 35.00 },
        { quantity: 48, price: 32.50 },
        { quantity: 144, price: 29.95 },
        { quantity: 288, price: 27.75 },
        { quantity: 576, price: 25.95 }
      ]
    },
    decoration: {
      methods: ["Laser Engraving", "Screen Print", "Full Color Print"],
      areas: [
        { name: "Wrap Around", maxWidth: 8, maxHeight: 3, maxColors: 4, setupFee: 65.00 },
        { name: "Logo Area", maxWidth: 3, maxHeight: 2, maxColors: 1, setupFee: 55.00 }
      ]
    },
    images: {
      primary: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [],
      colorways: [
        { color: "Stainless", image: "https://images.unsplash.com/photo-1544441893-675973e31985", hex: "#C0C0C0" },
        { color: "Black", image: "https://images.unsplash.com/photo-1544441893-675973e31985", hex: "#000000" }
      ]
    },
    specifications: {
      material: "18/8 Stainless Steel",
      dimensions: "6.875\" H x 3.5\" W",
      weight: "1.1 lbs",
      colors: ["Stainless", "Black", "White", "Navy", "Charcoal", "Seafoam"],
      features: ["BPA-free", "Dishwasher safe", "No-sweat design", "Leak-proof", "MagSlider lid"]
    },
    availability: {
      inStock: true,
      leadTime: "3-5 business days",
      minimumQuantity: 12,
      maxQuantity: 5000
    },
    seo: {
      keywords: ["yeti tumbler", "insulated drinkware", "corporate gifts", "laser engraving"],
      metaDescription: "Authentic YETI Rambler tumblers with custom laser engraving. Premium insulated drinkware for corporate gifts and promotional events."
    },
    promoPlaceUrl: "https://www.promoplace.com/globalprintco/yeti-rambler-tumbler"
  },
  {
    id: "gpc-bag-001",
    name: "Under Armour Storm Scrimmage Backpack",
    description: "Water-resistant backpack with UA Storm technology. Multiple compartments including laptop sleeve and water bottle pockets.",
    category: "Bags",
    subcategory: "Backpacks",
    supplier: {
      id: "under-armour",
      name: "Under Armour",
      rating: 4.8,
      location: "USA"
    },
    pricing: {
      basePrice: 45.00,
      currency: "USD",
      priceBreaks: [
        { quantity: 25, price: 45.00 },
        { quantity: 100, price: 42.50 },
        { quantity: 250, price: 39.95 },
        { quantity: 500, price: 37.50 }
      ]
    },
    decoration: {
      methods: ["Embroidery", "Screen Print", "Heat Transfer"],
      areas: [
        { name: "Front Panel", maxWidth: 6, maxHeight: 4, maxColors: 4, setupFee: 55.00 },
        { name: "Side Panel", maxWidth: 4, maxHeight: 6, maxColors: 3, setupFee: 50.00 }
      ]
    },
    images: {
      primary: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      gallery: [],
      colorways: [
        { color: "Black", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", hex: "#000000" },
        { color: "Navy", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", hex: "#001F3F" }
      ]
    },
    specifications: {
      material: "600D Polyester with UA Storm coating",
      dimensions: "18\" H x 13\" W x 8\" D",
      weight: "1.5 lbs",
      colors: ["Black", "Navy", "Graphite", "Red"],
      features: ["Water-resistant", "Laptop compartment", "Adjustable straps", "Multiple pockets"]
    },
    availability: {
      inStock: true,
      leadTime: "7-10 business days",
      minimumQuantity: 25,
      maxQuantity: 2500
    },
    seo: {
      keywords: ["under armour backpack", "corporate backpacks", "promotional bags", "water resistant"],
      metaDescription: "Under Armour Storm backpacks with custom embroidery. Water-resistant promotional bags perfect for corporate events and employee gifts."
    },
    promoPlaceUrl: "https://www.promoplace.com/globalprintco/under-armour-backpack"
  }
];

// Product search and filtering logic
export class ProductService {
  static async searchProducts(params: SearchParams) {
    let filtered = [...productDatabase];

    // Keyword search
    if (params.keyword) {
      const keyword = params.keyword.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        product.supplier.name.toLowerCase().includes(keyword) ||
        product.seo.keywords.some(k => k.toLowerCase().includes(keyword))
      );
    }

    // Category filter
    if (params.category && params.category !== 'All') {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === params.category?.toLowerCase()
      );
    }

    // Subcategory filter
    if (params.subcategory) {
      filtered = filtered.filter(product => 
        product.subcategory.toLowerCase() === params.subcategory?.toLowerCase()
      );
    }

    // Supplier filter
    if (params.supplier) {
      filtered = filtered.filter(product => 
        product.supplier.name.toLowerCase().includes(params.supplier?.toLowerCase() || '')
      );
    }

    // Price range filter
    if (params.minPrice) {
      filtered = filtered.filter(product => product.pricing.basePrice >= params.minPrice!);
    }
    if (params.maxPrice) {
      filtered = filtered.filter(product => product.pricing.basePrice <= params.maxPrice!);
    }

    // Decoration method filter
    if (params.decorationMethod) {
      filtered = filtered.filter(product => 
        product.decoration.methods.some(method => 
          method.toLowerCase().includes(params.decorationMethod?.toLowerCase() || '')
        )
      );
    }

    // Color filter
    if (params.color) {
      filtered = filtered.filter(product => 
        product.specifications.colors.some(color => 
          color.toLowerCase().includes(params.color?.toLowerCase() || '')
        )
      );
    }

    // In stock filter
    if (params.inStockOnly) {
      filtered = filtered.filter(product => product.availability.inStock);
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (params.sortBy) {
        case 'price-low':
          return a.pricing.basePrice - b.pricing.basePrice;
        case 'price-high':
          return b.pricing.basePrice - a.pricing.basePrice;
        case 'rating':
          return b.supplier.rating - a.supplier.rating;
        case 'newest':
          return b.id.localeCompare(a.id);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    // Pagination
    const totalCount = filtered.length;
    const totalPages = Math.ceil(totalCount / params.limit);
    const startIndex = (params.page - 1) * params.limit;
    const endIndex = startIndex + params.limit;
    const products = filtered.slice(startIndex, endIndex);

    return {
      products,
      pagination: {
        page: params.page,
        limit: params.limit,
        totalCount,
        totalPages,
        hasNextPage: params.page < totalPages,
        hasPrevPage: params.page > 1
      },
      filters: {
        categories: this.getUniqueCategories(),
        suppliers: this.getUniqueSuppliers(),
        decorationMethods: this.getUniqueDecorationMethods(),
        priceRange: this.getPriceRange()
      }
    };
  }

  static async getProductById(id: string): Promise<Product | null> {
    return productDatabase.find(product => product.id === id) || null;
  }

  static async getFeaturedProducts(limit: number = 6): Promise<Product[]> {
    return productDatabase
      .sort((a, b) => b.supplier.rating - a.supplier.rating)
      .slice(0, limit);
  }

  static async getTrendingProducts(category?: string, limit: number = 6): Promise<Product[]> {
    let products = productDatabase;
    
    if (category && category !== 'All') {
      products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    return products
      .sort((a, b) => b.supplier.rating - a.supplier.rating)
      .slice(0, limit);
  }

  static getUniqueCategories() {
    return [...new Set(productDatabase.map(p => p.category))].sort();
  }

  static getUniqueSuppliers() {
    return [...new Set(productDatabase.map(p => p.supplier.name))].sort();
  }

  static getUniqueDecorationMethods() {
    const methods = new Set<string>();
    productDatabase.forEach(p => p.decoration.methods.forEach(m => methods.add(m)));
    return [...methods].sort();
  }

  static getPriceRange() {
    const prices = productDatabase.map(p => p.pricing.basePrice);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }

  static async calculatePricing(productId: string, quantity: number, decorationMethod?: string) {
    const product = await this.getProductById(productId);
    if (!product) throw new Error('Product not found');

    // Find price break
    const priceBreak = product.pricing.priceBreaks
      .reverse()
      .find(pb => quantity >= pb.quantity) || product.pricing.priceBreaks[0];

    const unitPrice = priceBreak.price;
    const subtotal = unitPrice * quantity;

    // Find decoration setup fee
    let setupFee = 0;
    if (decorationMethod) {
      const decorationArea = product.decoration.areas.find(area => 
        product.decoration.methods.includes(decorationMethod)
      );
      setupFee = decorationArea?.setupFee || 0;
    }

    const total = subtotal + setupFee;

    return {
      unitPrice,
      subtotal,
      setupFee,
      total,
      quantity,
      decorationMethod,
      leadTime: product.availability.leadTime
    };
  }
}

export { productDatabase };