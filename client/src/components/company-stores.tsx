import { useState } from "react";
import { Store, Smartphone, ShoppingCart, Users, Globe, Zap, ArrowRight, Check, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const storeTypes = [
  {
    id: "employee",
    title: "Employee Company Stores",
    description: "Internal branded merchandise stores for your team",
    icon: Users,
    color: "bg-blue-600",
    features: [
      "Employee-only access",
      "Subsidized pricing options",
      "Approval workflows",
      "Budget controls",
      "Size/color preferences",
      "Direct shipping to employees"
    ],
    benefits: [
      "Boost team morale",
      "Consistent brand presentation",
      "Streamlined ordering",
      "Cost control",
      "Global accessibility"
    ]
  },
  {
    id: "public",
    title: "Public Brand Stores",
    description: "Customer-facing stores for merchandise sales",
    icon: Store,
    color: "bg-purple-600",
    features: [
      "Public storefront",
      "E-commerce functionality",
      "Payment processing",
      "Inventory management",
      "Customer accounts",
      "Analytics & reporting"
    ],
    benefits: [
      "Revenue generation",
      "Brand exposure",
      "Customer engagement",
      "Market expansion",
      "Professional presence"
    ]
  },
  {
    id: "event",
    title: "Event & Campaign Stores",
    description: "Temporary stores for specific events or campaigns",
    icon: Zap,
    color: "bg-green-600",
    features: [
      "Time-limited access",
      "Event-specific products",
      "Campaign tracking",
      "Promotional pricing",
      "Custom branding",
      "Quick setup"
    ],
    benefits: [
      "Event merchandise sales",
      "Limited edition items",
      "Campaign ROI tracking",
      "Attendee engagement",
      "Easy management"
    ]
  }
];

const storeExamples = [
  {
    company: "TechCorp Solutions",
    type: "Employee Store",
    description: "Internal company store with branded tech accessories, apparel, and office supplies",
    features: ["Employee discounts", "Department budgets", "Approval workflows"],
    url: "techcorp-store.myshopify.com",
    preview: "bg-gradient-to-br from-blue-100 to-cyan-100"
  },
  {
    company: "Mountain Adventures",
    type: "Public Brand Store",
    description: "Customer-facing store selling outdoor gear and branded merchandise",
    features: ["Public sales", "Customer accounts", "Inventory sync"],
    url: "mountainadventures-gear.com",
    preview: "bg-gradient-to-br from-green-100 to-emerald-100"
  },
  {
    company: "Annual Conference 2024",
    type: "Event Store",
    description: "Limited-time store for conference attendees with event-specific merchandise",
    features: ["Time-limited", "Event tickets required", "Exclusive items"],
    url: "conference2024-swag.myshopify.com",
    preview: "bg-gradient-to-br from-purple-100 to-pink-100"
  },
  {
    company: "Global Finance Corp",
    type: "Employee Store",
    description: "Multi-region employee store with localized products and pricing",
    features: ["Multi-currency", "Regional products", "Bulk ordering"],
    url: "gfc-employees.myshopify.com",
    preview: "bg-gradient-to-br from-yellow-100 to-orange-100"
  }
];

const storeFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-Optimized",
    description: "Responsive design for all devices"
  },
  {
    icon: Globe,
    title: "Global Shipping",
    description: "Worldwide fulfillment network"
  },
  {
    icon: ShoppingCart,
    title: "Easy Ordering",
    description: "Streamlined checkout process"
  },
  {
    icon: Users,
    title: "User Management",
    description: "Role-based access controls"
  }
];

export default function CompanyStores() {
  const [activeType, setActiveType] = useState("employee");
  const [viewStore, setViewStore] = useState<string | null>(null);

  const currentType = storeTypes.find(type => type.id === activeType);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="company-stores" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Store className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold brand-navy">
              Custom Shopify Company Stores
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Professional branded storefronts powered by Shopify. From employee stores to public 
            merchandise sales, we create custom e-commerce solutions that integrate seamlessly with your brand.
          </p>
        </div>

        {/* Store Type Tabs */}
        <Tabs value={activeType} onValueChange={setActiveType} className="w-full mb-16">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            {storeTypes.map((type) => (
              <TabsTrigger key={type.id} value={type.id} className="flex items-center space-x-2">
                <type.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{type.title.split(' ')[0]}</span>
                <span className="sm:hidden">{type.title.split(' ')[0].slice(0, 4)}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {storeTypes.map((type) => (
            <TabsContent key={type.id} value={type.id} className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Type Details */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${type.color} text-white rounded-xl flex items-center justify-center`}>
                      <type.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold brand-navy">{type.title}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Store Features:</h4>
                      <div className="space-y-2">
                        {type.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-4">Business Benefits:</h4>
                      <div className="space-y-2">
                        {type.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={scrollToContact}
                    className={`${type.color} hover:opacity-90 text-white px-8 py-3`}
                  >
                    Get Store Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                {/* Store Preview */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Browser Bar */}
                    <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                        your-company-store.myshopify.com
                      </div>
                    </div>

                    {/* Store Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-lg">Your Company Store</h4>
                        <ShoppingCart className="w-5 h-5 text-gray-400" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 rounded p-3 text-center">
                          <div className="w-full h-16 bg-blue-200 rounded mb-2"></div>
                          <p className="text-xs font-medium">Branded Apparel</p>
                        </div>
                        <div className="bg-green-50 rounded p-3 text-center">
                          <div className="w-full h-16 bg-green-200 rounded mb-2"></div>
                          <p className="text-xs font-medium">Office Supplies</p>
                        </div>
                        <div className="bg-purple-50 rounded p-3 text-center">
                          <div className="w-full h-16 bg-purple-200 rounded mb-2"></div>
                          <p className="text-xs font-medium">Tech Accessories</p>
                        </div>
                        <div className="bg-yellow-50 rounded p-3 text-center">
                          <div className="w-full h-16 bg-yellow-200 rounded mb-2"></div>
                          <p className="text-xs font-medium">Drinkware</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded p-3 text-center">
                        <p className="text-xs text-gray-600">Powered by Shopify + Global Print Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Store Examples */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold brand-navy mb-4">Example Company Stores</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how different organizations use custom Shopify stores to manage their branded merchandise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {storeExamples.map((example, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Store Preview */}
                <div className={`${example.preview} h-32 flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/5"></div>
                  <div className="bg-white/90 rounded px-3 py-1 text-sm font-medium z-10">
                    {example.url}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-lg">{example.company}</h4>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                      {example.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {example.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => setViewStore(viewStore === example.url ? null : example.url)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    {viewStore === example.url ? 'Hide Details' : 'View Details'}
                  </Button>

                  {viewStore === example.url && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">
                        This store demonstrates the key features and functionality available 
                        for {example.type.toLowerCase()}s powered by Shopify.
                      </p>
                      <div className="text-xs text-gray-500">
                        Custom branding • Product catalog • Secure checkout • Order management
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Features */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold brand-navy mb-4">Why Choose Our Shopify Stores?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional e-commerce solutions with integrated fulfillment and global reach
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {storeFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Process */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold brand-navy mb-4">Store Setup Process</h3>
            <p className="text-gray-600">From concept to launch in 2-3 weeks</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold">1</span>
              </div>
              <h4 className="font-semibold text-sm mb-1">Discovery</h4>
              <p className="text-xs text-gray-600">Understand requirements and goals</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold">2</span>
              </div>
              <h4 className="font-semibold text-sm mb-1">Design</h4>
              <p className="text-xs text-gray-600">Custom branding and layout</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold">3</span>
              </div>
              <h4 className="font-semibold text-sm mb-1">Development</h4>
              <p className="text-xs text-gray-600">Shopify store configuration</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold">4</span>
              </div>
              <h4 className="font-semibold text-sm mb-1">Integration</h4>
              <p className="text-xs text-gray-600">Connect fulfillment systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold">5</span>
              </div>
              <h4 className="font-semibold text-sm mb-1">Launch</h4>
              <p className="text-xs text-gray-600">Go live with full support</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Launch Your Company Store?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Professional Shopify storefronts with integrated fulfillment. From employee stores to public merchandise sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                Get Store Quote
              </Button>
              <a 
                href="mailto:rohitd@globalprintco.com"
                className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}