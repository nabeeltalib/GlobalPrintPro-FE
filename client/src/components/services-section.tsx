import { Printer, Shirt, Gift, Handshake, Monitor, Palette, Check } from "lucide-react";

const services = [
  {
    icon: Gift,
    title: "Branded Swag & Giveaways",
    description: "High-quality, memorable swag from premium brands like Nike, Yeti, Moleskine, and Under Armour. We source, customize, and deliver locally produced items that people actually want to keep.",
    features: ["Premium brand partnerships", "Local production in 70+ countries", "No minimum orders", "Trend-focused recommendations"],
    color: "bg-blue-600"
  },
  {
    icon: Printer,
    title: "Print & Marketing Materials",
    description: "Full-scale print services including banners, signage, brochures, catalogs, flyers, and packaging. Printed locally in 70+ countries to eliminate shipping delays.",
    features: ["Large-format printing", "Same-day delivery available", "Direct venue delivery", "Local production worldwide"],
    color: "bg-green-600"
  },
  {
    icon: Shirt,
    title: "Employee Kits & Onboarding Packs",
    description: "Curated onboarding kits and employee milestone gifts. We store items in our warehouses and handle picking, packing, and global shipping directly to employees.",
    features: ["Personalized kits", "Global warehouse storage", "Direct-to-employee shipping", "Milestone recognition programs"],
    color: "bg-purple-600"
  },
  {
    icon: Monitor,
    title: "Warehousing & On-Demand Fulfillment",
    description: "Complete inventory management and fulfillment services. We store your branded materials and ship on demand - no more swag taking up office space.",
    features: ["Secure warehouse storage", "On-demand shipping", "Real-time inventory tracking", "Flexible order quantities"],
    color: "bg-yellow-500"
  },
  {
    icon: Handshake,
    title: "Premium Brand Customization",
    description: "Elevate your swag programs with top name brands across apparel, drinkware, bags, and tech. We handle sourcing, customization, packaging, and delivery.",
    features: ["Nike, Yeti, Under Armour partnerships", "Single gift to global programs", "Local production & fulfillment", "End-to-end service"],
    color: "bg-red-600"
  },
  {
    icon: Palette,
    title: "Custom Shopify Storefronts",
    description: "Fully managed e-commerce solutions with your branded products. We create, stock, and manage custom online stores for employees, customers, or events.",
    features: ["Custom design & branding", "Inventory management", "Order fulfillment", "Budget controls & approvals"],
    color: "bg-indigo-600"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold brand-navy">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Speed, Savings, Simplicity. Global reach with local production in Europe, North America, South America, Asia-Pacific, Middle East & Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${service.color} text-white rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold brand-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
