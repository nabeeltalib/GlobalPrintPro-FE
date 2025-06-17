import { TrendingUp, Award, Zap, Shield, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const industryTrends = [
  {
    icon: TrendingUp,
    title: "Sustainability Focus",
    description: "75% of companies now prioritize eco-friendly promotional products",
    implementation: "Recycled materials, carbon-neutral shipping, sustainable packaging",
    color: "bg-green-600"
  },
  {
    icon: Award,
    title: "Premium Brand Partnerships",
    description: "Shift from generic items to authentic branded merchandise",
    implementation: "Nike, YETI, Under Armour partnerships with authentic customization",
    color: "bg-purple-600"
  },
  {
    icon: Zap,
    title: "On-Demand Everything",
    description: "86% reduction in minimum order quantities across industry",
    implementation: "Zero MOQs, same-day production, local fulfillment networks",
    color: "bg-blue-600"
  },
  {
    icon: Shield,
    title: "Supply Chain Resilience",
    description: "Diversified global production to eliminate single points of failure",
    implementation: "70+ country production network, local inventory management",
    color: "bg-orange-600"
  }
];

const competitiveDifferentiators = [
  {
    category: "Technology Integration",
    features: [
      "Custom Shopify storefronts with approval workflows",
      "Real-time inventory visibility across all locations",
      "API integrations for enterprise resource planning",
      "Mobile-first ordering platforms"
    ]
  },
  {
    category: "Service Innovation",
    features: [
      "24-hour emergency fulfillment for events",
      "Dedicated account management with industry expertise",
      "White-glove kitting and custom packaging",
      "Global brand compliance monitoring"
    ]
  },
  {
    category: "Market Positioning",
    features: [
      "Premium brand focus vs. commodity products",
      "Corporate gifting and employee experience emphasis",
      "Event and trade show specialization",
      "Remote workforce solutions"
    ]
  }
];

export default function IndustryTrendsShowcase() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="industry-leadership" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry Leadership & Innovation
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            We stay ahead of promotional product trends and technology to deliver superior results for our clients
          </p>
        </div>

        {/* Industry Trends */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-yellow-400">
            Leading Industry Trends We've Adopted
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {industryTrends.map((trend, index) => {
              const IconComponent = trend.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/15 transition-all">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 ${trend.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3">{trend.title}</h4>
                      <p className="text-blue-200 mb-4 leading-relaxed">
                        {trend.description}
                      </p>
                      <p className="text-white font-medium">
                        Our Solution: {trend.implementation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competitive Differentiators */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-yellow-400">
            Our Competitive Advantages
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {competitiveDifferentiators.map((category, index) => (
              <div key={index} className="bg-gradient-to-b from-blue-800/50 to-purple-800/50 rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">{category.category}</h4>
                <div className="space-y-4">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-blue-100 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Statistics */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">
            Industry Statistics That Drive Our Strategy
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">79%</div>
              <p className="text-blue-200">of recipients keep promotional products for more than a year</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">83%</div>
              <p className="text-blue-200">like receiving promotional products</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
              <p className="text-blue-200">remember the advertiser who gave them a promotional product</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">$24.7B</div>
              <p className="text-blue-200">promotional products industry size in 2024</p>
            </div>
          </div>
        </div>

        {/* Innovation Pipeline */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-yellow-400">
            Continuous Innovation Pipeline
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Q1 2025: AI-Powered Design</h4>
              <p className="text-blue-200 text-sm">Automated design suggestions based on brand guidelines and industry trends</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Q2 2025: AR Visualization</h4>
              <p className="text-blue-200 text-sm">Augmented reality product previews before ordering</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Q3 2025: Blockchain Tracking</h4>
              <p className="text-blue-200 text-sm">End-to-end supply chain transparency and authenticity verification</p>
            </div>
          </div>
          
          <p className="text-xl text-blue-100 mb-8">
            Stay ahead of your competition with industry-leading promotional product solutions
          </p>
          
          <Button
            onClick={scrollToContact}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3"
          >
            Partner With Industry Leaders
          </Button>
        </div>
      </div>
    </section>
  );
}