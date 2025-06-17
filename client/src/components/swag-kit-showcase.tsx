import { useState } from "react";
import { Package, Gift, Users, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const swagKitCategories = [
  {
    id: "newhire",
    title: "New Hire Kits",
    description: "Make first impressions count with professionally curated onboarding packages",
    icon: Users,
    color: "bg-blue-600",
    features: [
      "Branded welcome materials",
      "Essential office supplies",
      "Company apparel",
      "Tech accessories",
      "Personalized note from CEO"
    ],
    examples: [
      {
        name: "Tech Starter Kit",
        items: ["Laptop sleeve", "Wireless mouse", "Branded notebook", "Welcome letter", "Company t-shirt"],
        value: "$95-120"
      },
      {
        name: "Executive Welcome",
        items: ["Premium leather portfolio", "Moleskine journal", "Quality pen set", "Branded apparel", "Coffee tumbler"],
        value: "$125-150"
      },
      {
        name: "Remote Worker Kit",
        items: ["Webcam cover", "Blue light glasses", "Desk plant", "Branded hoodie", "Snack selection"],
        value: "$75-95"
      }
    ]
  },
  {
    id: "employee",
    title: "Employee Recognition Gifts",
    description: "Celebrate milestones and achievements with meaningful gift packages",
    icon: Gift,
    color: "bg-purple-600",
    features: [
      "Anniversary celebrations",
      "Performance recognition",
      "Holiday gift packages",
      "Birthday surprises",
      "Achievement awards"
    ],
    examples: [
      {
        name: "5-Year Anniversary",
        items: ["Engraved watch", "Premium jacket", "Gift card", "Commemorative plaque", "Thank you note"],
        value: "$200-250"
      },
      {
        name: "Holiday Bundle",
        items: ["Gourmet food selection", "Branded scarf", "Hot chocolate kit", "Ornament", "Holiday card"],
        value: "$65-85"
      },
      {
        name: "Top Performer",
        items: ["Premium backpack", "Wireless headphones", "Achievement certificate", "Branded water bottle", "Desk accessory"],
        value: "$150-180"
      }
    ]
  },
  {
    id: "custom",
    title: "Custom Corporate Gifts",
    description: "Tailored gift solutions for clients, events, and special occasions",
    icon: Package,
    color: "bg-green-600",
    features: [
      "Client appreciation",
      "Event giveaways",
      "Trade show bundles",
      "VIP packages",
      "Seasonal campaigns"
    ],
    examples: [
      {
        name: "VIP Client Gift",
        items: ["Luxury pen set", "Premium wine", "Branded crystal award", "Thank you card", "Elegant packaging"],
        value: "$180-220"
      },
      {
        name: "Conference Kit",
        items: ["Event t-shirt", "Branded tote bag", "Notebook & pen", "Phone charger", "Snack pack"],
        value: "$45-65"
      },
      {
        name: "Executive Meeting",
        items: ["Leather padfolio", "Premium coffee", "Branded tumbler", "Business card holder", "Welcome letter"],
        value: "$85-110"
      }
    ]
  }
];

export default function SwagKitShowcase() {
  const [activeCategory, setActiveCategory] = useState("newhire");

  const currentCategory = swagKitCategories.find(cat => cat.id === activeCategory);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="swag-kits" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold brand-navy mb-6">
            Professional Swag Kits & Gift Boxes
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Create memorable experiences with expertly curated gift packages. From new hire onboarding 
            to employee recognition and client appreciation - we handle everything from sourcing to global delivery.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {swagKitCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                  activeCategory === category.id
                    ? `${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        {currentCategory && (
          <div className="space-y-12">
            {/* Category Overview */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${currentCategory.color} text-white rounded-xl flex items-center justify-center`}>
                    <currentCategory.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold brand-navy">{currentCategory.title}</h3>
                    <p className="text-gray-600">{currentCategory.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {currentCategory.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Request Custom Kit Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Visual Kit Representation */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* Simulated Kit Box */}
                  <div className="col-span-2 bg-white rounded-lg shadow-md p-6 border-2 border-dashed border-gray-300">
                    <div className="text-center space-y-2">
                      <Package className="w-12 h-12 text-gray-400 mx-auto" />
                      <h4 className="font-semibold text-gray-800">Branded Gift Box</h4>
                      <p className="text-sm text-gray-600">Custom packaging with your logo</p>
                    </div>
                  </div>
                  
                  {/* Kit Items */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-full h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded mb-2"></div>
                    <p className="text-xs text-gray-600 text-center">Branded Apparel</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-full h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded mb-2"></div>
                    <p className="text-xs text-gray-600 text-center">Tech Accessories</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-full h-16 bg-gradient-to-r from-yellow-100 to-orange-100 rounded mb-2"></div>
                    <p className="text-xs text-gray-600 text-center">Office Supplies</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-full h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded mb-2"></div>
                    <p className="text-xs text-gray-600 text-center">Premium Items</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kit Examples */}
            <div className="grid md:grid-cols-3 gap-8">
              {currentCategory.examples.map((example, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`${currentCategory.color} text-white p-4`}>
                    <h4 className="font-bold text-lg">{example.name}</h4>
                    <p className="text-sm opacity-90">Value: {example.value}</p>
                  </div>
                  
                  <div className="p-6">
                    <h5 className="font-semibold text-gray-800 mb-3">Kit Includes:</h5>
                    <ul className="space-y-2">
                      {example.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Overview */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold brand-navy mb-4">Our Kit Creation Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to delivery, we handle every detail of your swag kit program
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold mb-2">Consultation</h4>
              <p className="text-sm text-gray-600">Understand your goals, audience, and budget</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold mb-2">Curation</h4>
              <p className="text-sm text-gray-600">Select premium items that align with your brand</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold mb-2">Assembly</h4>
              <p className="text-sm text-gray-600">Professional kitting and custom packaging</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold mb-2">Delivery</h4>
              <p className="text-sm text-gray-600">Global shipping direct to recipients</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold brand-navy mb-4">Ready to Create Your Custom Swag Kits?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need 10 kits or 10,000, we handle everything from sourcing to global delivery. 
            No minimums, premium quality, and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Get Started with Custom Kits
            </Button>
            <a 
              href="mailto:rohitd@globalprintco.com"
              className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Email for Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}