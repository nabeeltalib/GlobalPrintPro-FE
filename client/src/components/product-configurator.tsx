import { useState } from "react";
import { Palette, Shirt, Type, Eye, ShoppingCart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const configurableProducts = [
  {
    id: "polo-shirt",
    name: "Premium Polo Shirt",
    basePrice: 16.75,
    image: "bg-gradient-to-br from-blue-100 to-blue-200",
    colors: [
      { name: "White", hex: "#ffffff", price: 0 },
      { name: "Black", hex: "#000000", price: 0 },
      { name: "Navy", hex: "#001f3f", price: 0 },
      { name: "Red", hex: "#dc2626", price: 1.50 },
      { name: "Royal Blue", hex: "#1e40af", price: 1.00 }
    ],
    sizes: [
      { name: "S", price: 0 },
      { name: "M", price: 0 },
      { name: "L", price: 0 },
      { name: "XL", price: 2.00 },
      { name: "XXL", price: 4.00 }
    ],
    decorations: [
      { name: "Embroidery", price: 8.50, setupFee: 45.00 },
      { name: "Screen Print", price: 3.25, setupFee: 25.00 },
      { name: "Heat Transfer", price: 4.75, setupFee: 0.00 }
    ]
  },
  {
    id: "tumbler",
    name: "Insulated Tumbler 20oz",
    basePrice: 15.95,
    image: "bg-gradient-to-br from-purple-100 to-purple-200",
    colors: [
      { name: "Stainless", hex: "#e5e7eb", price: 0 },
      { name: "Black", hex: "#000000", price: 2.00 },
      { name: "Blue", hex: "#2563eb", price: 2.00 },
      { name: "Red", hex: "#dc2626", price: 2.00 }
    ],
    decorations: [
      { name: "Laser Engraving", price: 6.75, setupFee: 55.00 },
      { name: "Screen Print", price: 4.25, setupFee: 35.00 },
      { name: "Full Color Print", price: 8.95, setupFee: 65.00 }
    ]
  },
  {
    id: "notebook",
    name: "Premium Leather Notebook",
    basePrice: 22.95,
    image: "bg-gradient-to-br from-amber-100 to-amber-200",
    colors: [
      { name: "Black", hex: "#000000", price: 0 },
      { name: "Brown", hex: "#92400e", price: 0 },
      { name: "Navy", hex: "#001f3f", price: 3.00 }
    ],
    decorations: [
      { name: "Debossing", price: 5.50, setupFee: 75.00 },
      { name: "Foil Stamping", price: 7.25, setupFee: 95.00 },
      { name: "Laser Engraving", price: 6.75, setupFee: 55.00 }
    ]
  }
];

export default function ProductConfigurator() {
  const [selectedProduct, setSelectedProduct] = useState(configurableProducts[0]);
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes?.[0]);
  const [selectedDecoration, setSelectedDecoration] = useState(selectedProduct.decorations[0]);
  const [quantity, setQuantity] = useState(50);
  const [logoText, setLogoText] = useState("Your Company");

  const calculatePrice = () => {
    const basePrice = selectedProduct.basePrice;
    const colorPrice = selectedColor.price || 0;
    const sizePrice = selectedSize?.price || 0;
    const decorationPrice = selectedDecoration.price;
    const setupFee = selectedDecoration.setupFee;
    
    const unitPrice = basePrice + colorPrice + sizePrice + decorationPrice;
    const totalProductCost = unitPrice * quantity;
    const totalCost = totalProductCost + setupFee;
    
    return {
      unitPrice,
      totalProductCost,
      setupFee,
      totalCost,
      costPerUnit: totalCost / quantity
    };
  };

  const pricing = calculatePrice();

  const handleProductChange = (productId: string) => {
    const product = configurableProducts.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes?.[0]);
      setSelectedDecoration(product.decorations[0]);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="product-configurator" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Zap className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold brand-navy">
              Real-Time Product Configurator
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            See exactly what you're ordering with live pricing, color previews, and decoration options. 
            Configure your perfect promotional product in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Configuration */}
          <div className="space-y-8">
            {/* Product Selection */}
            <div>
              <h3 className="text-2xl font-bold brand-navy mb-4">Select Product</h3>
              <div className="grid grid-cols-1 gap-4">
                {configurableProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductChange(product.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedProduct.id === product.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${product.image} rounded-lg flex items-center justify-center`}>
                        <Shirt className="w-8 h-8 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-sm text-gray-600">Starting at ${product.basePrice}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Configuration Tabs */}
            <Tabs defaultValue="colors" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="colors">Colors</TabsTrigger>
                {selectedProduct.sizes && <TabsTrigger value="sizes">Sizes</TabsTrigger>}
                <TabsTrigger value="decoration">Decoration</TabsTrigger>
                <TabsTrigger value="quantity">Quantity</TabsTrigger>
              </TabsList>

              <TabsContent value="colors" className="space-y-4">
                <h4 className="font-semibold flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Choose Color
                </h4>
                <div className="grid grid-cols-5 gap-3">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative p-3 rounded-lg border-2 transition-all ${
                        selectedColor.name === color.name
                          ? 'border-blue-500 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full mx-auto border border-gray-300"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="text-xs mt-2 font-medium">{color.name}</p>
                      {color.price > 0 && (
                        <p className="text-xs text-green-600">+${color.price}</p>
                      )}
                    </button>
                  ))}
                </div>
              </TabsContent>

              {selectedProduct.sizes && (
                <TabsContent value="sizes" className="space-y-4">
                  <h4 className="font-semibold">Choose Size</h4>
                  <div className="grid grid-cols-5 gap-3">
                    {selectedProduct.sizes.map((size) => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedSize?.name === size.name
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="font-semibold">{size.name}</p>
                        {size.price > 0 && (
                          <p className="text-xs text-green-600">+${size.price}</p>
                        )}
                      </button>
                    ))}
                  </div>
                </TabsContent>
              )}

              <TabsContent value="decoration" className="space-y-4">
                <h4 className="font-semibold">Decoration Method</h4>
                <div className="space-y-3">
                  {selectedProduct.decorations.map((decoration) => (
                    <button
                      key={decoration.name}
                      onClick={() => setSelectedDecoration(decoration)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        selectedDecoration.name === decoration.name
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-semibold">{decoration.name}</h5>
                          <p className="text-sm text-gray-600">
                            ${decoration.price} per unit
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Setup: ${decoration.setupFee}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-2">
                    <Type className="w-4 h-4 inline mr-1" />
                    Logo/Text Preview
                  </label>
                  <input
                    type="text"
                    value={logoText}
                    onChange={(e) => setLogoText(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your company name or logo text"
                  />
                </div>
              </TabsContent>

              <TabsContent value="quantity" className="space-y-4">
                <h4 className="font-semibold">Quantity</h4>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-24 p-2 border border-gray-300 rounded"
                      min="1"
                    />
                    <span className="text-gray-600">units</span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2">
                    {[25, 50, 100, 250].map((qty) => (
                      <button
                        key={qty}
                        onClick={() => setQuantity(qty)}
                        className={`p-2 rounded border transition-all ${
                          quantity === qty
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Live Preview & Pricing */}
          <div className="space-y-8">
            {/* Product Preview */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold brand-navy mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-2" />
                Live Preview
              </h3>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div 
                  className="h-64 rounded-lg flex items-center justify-center relative"
                  style={{ backgroundColor: selectedColor.hex }}
                >
                  {/* Product silhouette */}
                  <div className="text-6xl opacity-30">
                    {selectedProduct.id.includes('shirt') ? '👕' : 
                     selectedProduct.id.includes('tumbler') ? '🥤' : '📓'}
                  </div>
                  
                  {/* Logo preview */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className={`px-4 py-2 rounded text-sm font-bold ${
                      selectedColor.name === 'White' ? 'bg-black text-white' : 'bg-white text-black'
                    }`}>
                      {logoText}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <h4 className="font-bold">{selectedProduct.name}</h4>
                  <p className="text-sm text-gray-600">
                    {selectedColor.name} • {selectedSize?.name} • {selectedDecoration.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold brand-navy mb-6 flex items-center">
                <ShoppingCart className="w-6 h-6 mr-2" />
                Live Pricing
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Base Price ({quantity} units)</span>
                  <span className="font-medium">${(selectedProduct.basePrice * quantity).toFixed(2)}</span>
                </div>
                
                {selectedColor.price > 0 && (
                  <div className="flex justify-between items-center">
                    <span>Color Upgrade ({selectedColor.name})</span>
                    <span className="font-medium">+${(selectedColor.price * quantity).toFixed(2)}</span>
                  </div>
                )}
                
                {selectedSize?.price && selectedSize.price > 0 && (
                  <div className="flex justify-between items-center">
                    <span>Size Upgrade ({selectedSize.name})</span>
                    <span className="font-medium">+${(selectedSize.price * quantity).toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <span>Decoration ({selectedDecoration.name})</span>
                  <span className="font-medium">${(selectedDecoration.price * quantity).toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Setup Fee (one-time)</span>
                  <span className="font-medium">${selectedDecoration.setupFee.toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Cost</span>
                    <span className="text-green-600">${pricing.totalCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Cost per unit</span>
                    <span>${pricing.costPerUnit.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Request This Quote
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://www.promoplace.com/globalprintco', '_blank')}
                >
                  Browse More Products
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-bold brand-navy text-center mb-8">
            Why Use Our Product Configurator?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">See Before You Buy</h4>
              <p className="text-sm text-gray-600">Visual preview of your exact configuration with colors and decoration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Instant Pricing</h4>
              <p className="text-sm text-gray-600">Real-time cost calculations with no hidden fees or surprises</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Easy Ordering</h4>
              <p className="text-sm text-gray-600">Save configurations and convert to orders with one click</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}