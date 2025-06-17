import { useState } from "react";
import { Plus, Minus, ShoppingCart, Package, Truck, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const productCategories = [
  {
    id: "apparel",
    name: "Apparel",
    icon: "👕",
    products: [
      { id: "tshirt", name: "Premium T-Shirt", price: 12, image: "bg-gradient-to-br from-blue-100 to-blue-200", popular: true },
      { id: "hoodie", name: "Branded Hoodie", price: 28, image: "bg-gradient-to-br from-gray-100 to-gray-200", popular: true },
      { id: "polo", name: "Polo Shirt", price: 18, image: "bg-gradient-to-br from-green-100 to-green-200" },
      { id: "jacket", name: "Zip-Up Jacket", price: 45, image: "bg-gradient-to-br from-purple-100 to-purple-200" }
    ]
  },
  {
    id: "drinkware",
    name: "Drinkware",
    icon: "🥤",
    products: [
      { id: "tumbler", name: "Insulated Tumbler", price: 15, image: "bg-gradient-to-br from-blue-100 to-cyan-200", popular: true },
      { id: "waterbottle", name: "Water Bottle", price: 12, image: "bg-gradient-to-br from-green-100 to-teal-200" },
      { id: "mug", name: "Ceramic Mug", price: 8, image: "bg-gradient-to-br from-yellow-100 to-orange-200" },
      { id: "coffeecup", name: "Travel Coffee Cup", price: 18, image: "bg-gradient-to-br from-red-100 to-pink-200" }
    ]
  },
  {
    id: "tech",
    name: "Tech",
    icon: "💻",
    products: [
      { id: "powerbank", name: "Wireless Power Bank", price: 25, image: "bg-gradient-to-br from-indigo-100 to-purple-200", popular: true },
      { id: "earbuds", name: "Bluetooth Earbuds", price: 35, image: "bg-gradient-to-br from-blue-100 to-indigo-200" },
      { id: "charger", name: "USB-C Charger", price: 15, image: "bg-gradient-to-br from-gray-100 to-slate-200" },
      { id: "laptop-sleeve", name: "Laptop Sleeve", price: 22, image: "bg-gradient-to-br from-green-100 to-emerald-200" }
    ]
  },
  {
    id: "office",
    name: "Office",
    icon: "📝",
    products: [
      { id: "notebook", name: "Premium Notebook", price: 12, image: "bg-gradient-to-br from-yellow-100 to-amber-200" },
      { id: "pen-set", name: "Pen Set", price: 18, image: "bg-gradient-to-br from-blue-100 to-sky-200" },
      { id: "desk-pad", name: "Desk Pad", price: 25, image: "bg-gradient-to-br from-green-100 to-lime-200" },
      { id: "organizer", name: "Desk Organizer", price: 20, image: "bg-gradient-to-br from-purple-100 to-violet-200" }
    ]
  }
];

const kitTemplates = [
  {
    id: "welcome",
    name: "Welcome Kit",
    description: "Perfect for new hires and onboarding",
    items: ["tshirt", "notebook", "pen-set", "tumbler"],
    price: 55,
    popular: true
  },
  {
    id: "executive",
    name: "Executive Kit",
    description: "Premium selection for leadership",
    items: ["hoodie", "powerbank", "desk-pad", "coffeecup"],
    price: 96,
    premium: true
  },
  {
    id: "remote",
    name: "Remote Worker Kit",
    description: "Essential items for work-from-home",
    items: ["laptop-sleeve", "earbuds", "waterbottle", "organizer"],
    price: 89
  }
];

export default function SwagBuilder() {
  const [selectedCategory, setSelectedCategory] = useState("apparel");
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);

  const currentCategory = productCategories.find(cat => cat.id === selectedCategory);
  
  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const applyTemplate = (template: typeof kitTemplates[0]) => {
    const newCart: {[key: string]: number} = {};
    template.items.forEach(itemId => {
      newCart[itemId] = 1;
    });
    setCart(newCart);
    setActiveTemplate(template.id);
  };

  const getAllProducts = () => {
    return productCategories.flatMap(cat => cat.products);
  };

  const getCartTotal = () => {
    const allProducts = getAllProducts();
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = allProducts.find(p => p.id === productId);
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  const getCartCount = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="swag-builder" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold brand-navy mb-6">
            Build Your Perfect Swag Kit
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Create custom swag kits with our interactive builder. Choose from premium products, 
            use our templates, or build from scratch. No minimums, global delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Product Selection */}
          <div className="lg:col-span-2">
            {/* Quick Templates */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold brand-navy mb-4 flex items-center">
                <Package className="w-6 h-6 mr-2" />
                Quick Start Templates
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {kitTemplates.map((template) => (
                  <div 
                    key={template.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      activeTemplate === template.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => applyTemplate(template)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{template.name}</h4>
                      <div className="flex items-center space-x-1">
                        {template.popular && <Badge className="bg-orange-100 text-orange-800">Popular</Badge>}
                        {template.premium && <Badge className="bg-purple-100 text-purple-800">Premium</Badge>}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-green-600">${template.price}</span>
                      <span className="text-xs text-gray-500">{template.items.length} items</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Tabs */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            {currentCategory && (
              <div className="grid md:grid-cols-2 gap-6">
                {currentCategory.products.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className={`${product.image} h-32 flex items-center justify-center relative`}>
                      {product.popular && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-orange-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        </div>
                      )}
                      <div className="text-4xl opacity-50">{currentCategory.icon}</div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-800">{product.name}</h4>
                        <span className="font-bold text-green-600">${product.price}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeFromCart(product.id)}
                            disabled={!cart[product.id]}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50 hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {cart[product.id] || 0}
                          </span>
                          <button
                            onClick={() => addToCart(product.id)}
                            className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => addToCart(product.id)}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Add to Kit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold brand-navy flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Your Kit
                  </h3>
                  <Badge className="bg-blue-600 text-white">
                    {getCartCount()} items
                  </Badge>
                </div>

                {Object.keys(cart).length === 0 ? (
                  <div className="text-center py-8">
                    <Package className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500">Start building your kit by selecting products or templates</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(cart).map(([productId, quantity]) => {
                      const product = getAllProducts().find(p => p.id === productId);
                      if (!product) return null;
                      
                      return (
                        <div key={productId} className="flex items-center justify-between bg-white rounded-lg p-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${product.image} rounded flex items-center justify-center`}>
                              <span className="text-sm opacity-70">📦</span>
                            </div>
                            <div>
                              <p className="font-medium text-sm">{product.name}</p>
                              <p className="text-xs text-gray-500">Qty: {quantity}</p>
                            </div>
                          </div>
                          <span className="font-bold text-green-600">${product.price * quantity}</span>
                        </div>
                      );
                    })}

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold">Total:</span>
                        <span className="text-2xl font-bold text-green-600">${getCartTotal()}</span>
                      </div>
                      
                      <div className="space-y-3">
                        <Button
                          onClick={scrollToContact}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          Request Quote
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => setCart({})}
                        >
                          Clear Kit
                        </Button>
                      </div>

                      <div className="mt-4 text-xs text-gray-500 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Truck className="w-4 h-4" />
                          <span>Global shipping available</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4" />
                          <span>No minimum order quantity</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold brand-navy mb-4">Why Use Our Kit Builder?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional swag kits made simple with our interactive builder
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Visual Kit Building</h4>
              <p className="text-sm text-gray-600">See exactly what you're creating with our interactive builder</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Curated Templates</h4>
              <p className="text-sm text-gray-600">Start with proven combinations for different use cases</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Instant Pricing</h4>
              <p className="text-sm text-gray-600">Real-time pricing with no hidden fees or surprises</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}