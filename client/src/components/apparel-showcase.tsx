import { useState } from "react";
import { Shirt, Zap, Palette, Clock, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const apparelServices = [
  {
    id: "embroidery",
    title: "Professional Embroidery",
    icon: Shirt,
    description: "Premium thread embroidery for lasting quality and professional appearance",
    features: [
      "Up to 15,000 stitches per design",
      "Multi-color threading",
      "3D puff embroidery",
      "Metallic thread options",
      "Logo placement anywhere",
      "Durable and wash-resistant"
    ],
    products: [
      { name: "Polo Shirts", price: "From $12", image: "bg-gradient-to-br from-blue-100 to-blue-200" },
      { name: "Hoodies", price: "From $18", image: "bg-gradient-to-br from-gray-100 to-gray-200" },
      { name: "Caps & Hats", price: "From $8", image: "bg-gradient-to-br from-red-100 to-red-200" },
      { name: "Jackets", price: "From $25", image: "bg-gradient-to-br from-green-100 to-green-200" },
      { name: "Backpacks", price: "From $15", image: "bg-gradient-to-br from-purple-100 to-purple-200" },
      { name: "Towels", price: "From $6", image: "bg-gradient-to-br from-yellow-100 to-yellow-200" }
    ],
    turnaround: "2-5 business days",
    minimum: "No minimum orders"
  },
  {
    id: "dtg",
    title: "Direct-to-Garment Printing",
    icon: Palette,
    description: "High-resolution digital printing for complex designs and unlimited colors",
    features: [
      "Unlimited colors",
      "Photo-quality prints",
      "Soft-hand feel",
      "Full-color gradients",
      "Small detail reproduction",
      "Eco-friendly water-based inks"
    ],
    products: [
      { name: "T-Shirts", price: "From $8", image: "bg-gradient-to-br from-pink-100 to-pink-200" },
      { name: "Tank Tops", price: "From $7", image: "bg-gradient-to-br from-orange-100 to-orange-200" },
      { name: "Hoodies", price: "From $16", image: "bg-gradient-to-br from-indigo-100 to-indigo-200" },
      { name: "Long Sleeves", price: "From $10", image: "bg-gradient-to-br from-teal-100 to-teal-200" },
      { name: "Sweatshirts", price: "From $14", image: "bg-gradient-to-br from-cyan-100 to-cyan-200" },
      { name: "Youth Sizes", price: "From $6", image: "bg-gradient-to-br from-lime-100 to-lime-200" }
    ],
    turnaround: "1-3 business days",
    minimum: "No minimum orders"
  }
];

const brandPartners = [
  "Nike", "Under Armour", "Adidas", "Champion", "Gildan", "Hanes", 
  "Port Authority", "Sport-Tek", "American Apparel", "Bella+Canvas"
];

export default function ApparelShowcase() {
  const [activeService, setActiveService] = useState("embroidery");
  
  const currentService = apparelServices.find(service => service.id === activeService);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="apparel" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Zap className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold brand-navy">
              On-Demand Apparel Services
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Professional embroidery and direct-to-garment printing with no minimum orders. 
            From single pieces to bulk orders, we deliver premium quality apparel customization.
          </p>
        </div>

        {/* Service Tabs */}
        <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="embroidery" className="flex items-center space-x-2">
              <Shirt className="w-4 h-4" />
              <span>Embroidery</span>
            </TabsTrigger>
            <TabsTrigger value="dtg" className="flex items-center space-x-2">
              <Palette className="w-4 h-4" />
              <span>Direct-to-Garment</span>
            </TabsTrigger>
          </TabsList>

          {apparelServices.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                {/* Service Details */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold brand-navy">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Clock className="w-6 h-6 text-green-600 mb-2" />
                      <h4 className="font-semibold mb-1">Fast Turnaround</h4>
                      <p className="text-sm text-gray-600">{service.turnaround}</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <Zap className="w-6 h-6 text-blue-600 mb-2" />
                      <h4 className="font-semibold mb-1">Order Flexibility</h4>
                      <p className="text-sm text-gray-600">{service.minimum}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Service Features:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={scrollToContact}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  >
                    Get Apparel Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* Product Grid */}
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold brand-navy text-center">Popular Products</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {service.products.map((product, index) => (
                      <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className={`h-32 ${product.image} flex items-center justify-center`}>
                          <service.icon className="w-12 h-12 text-gray-400" />
                        </div>
                        <div className="p-4">
                          <h5 className="font-semibold text-gray-800">{product.name}</h5>
                          <p className="text-blue-600 font-bold text-sm">{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Brand Partners */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold brand-navy mb-4">Premium Brand Partners</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with top apparel brands to ensure quality and authenticity in every order
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {brandPartners.map((brand, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-gray-600 text-xs">{brand}</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">{brand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Overview */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">1</span>
            </div>
            <h4 className="font-semibold mb-2">Upload Design</h4>
            <p className="text-sm text-gray-600">Send us your logo or artwork in any format</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">2</span>
            </div>
            <h4 className="font-semibold mb-2">Choose Products</h4>
            <p className="text-sm text-gray-600">Select from premium apparel brands and styles</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">3</span>
            </div>
            <h4 className="font-semibold mb-2">Professional Production</h4>
            <p className="text-sm text-gray-600">Expert embroidery or DTG printing</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">4</span>
            </div>
            <h4 className="font-semibold mb-2">Fast Delivery</h4>
            <p className="text-sm text-gray-600">Global shipping in 1-5 business days</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Apparel Order?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              No minimums. Premium quality. Fast turnaround. Get your custom apparel quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                Get Quote Now
              </Button>
              <a 
                href="mailto:rohitd@globalprintco.com"
                className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Email for Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}