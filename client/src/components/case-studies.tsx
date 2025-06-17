import { Building, Users, Calendar, Trophy, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "tech-startup",
    company: "TechFlow Solutions",
    industry: "Technology",
    challenge: "Needed 500 new hire kits for rapid expansion across 15 countries with 48-hour delivery timeline",
    solution: "Custom Shopify store with pre-approved welcome packages, local fulfillment in each region",
    results: [
      "100% on-time delivery across all locations",
      "40% cost reduction vs. traditional shipping",
      "95% employee satisfaction with welcome experience",
      "Automated ordering reduced HR workload by 60%"
    ],
    products: ["Branded hoodies", "Premium notebooks", "Wireless chargers", "Coffee tumblers"],
    timeline: "2 days",
    budget: "$45,000",
    icon: Building,
    color: "bg-blue-600"
  },
  {
    id: "finance-corp",
    company: "Global Finance Corp",
    industry: "Financial Services",
    challenge: "Annual conference for 2,000 attendees with last-minute venue change requiring new branded materials",
    solution: "Emergency 24-hour production and on-site delivery with backup inventory management",
    results: [
      "Complete event materials delivered 6 hours before event",
      "Zero brand inconsistencies across all touchpoints",
      "30% cost savings through local production",
      "Event rated 98% satisfaction by attendees"
    ],
    products: ["Event badges", "Branded notebooks", "Promotional pens", "Tote bags", "Signage"],
    timeline: "24 hours",
    budget: "$28,000",
    icon: Calendar,
    color: "bg-green-600"
  },
  {
    id: "healthcare-network",
    company: "Regional Healthcare Network",
    industry: "Healthcare",
    challenge: "Employee recognition program for 5,000 staff across 50 locations with varying budget approvals",
    solution: "Tiered company store with department-specific budgets and approval workflows",
    results: [
      "92% employee participation in recognition program",
      "50% reduction in procurement processing time",
      "100% brand compliance across all locations",
      "Automated budget tracking saved 40 hours/month"
    ],
    products: ["Embroidered scrubs", "Badge holders", "Insulated tumblers", "Desk accessories"],
    timeline: "Ongoing program",
    budget: "$180,000 annually",
    icon: Users,
    color: "bg-purple-600"
  },
  {
    id: "manufacturing-expo",
    company: "Industrial Manufacturing Expo",
    industry: "Trade Shows",
    challenge: "International trade show with 200 exhibitors needing coordinated branding across 12 countries",
    solution: "Centralized ordering platform with local production and venue delivery coordination",
    results: [
      "99.5% on-time delivery rate to venues",
      "Zero customs delays through local production",
      "35% cost reduction vs. international shipping",
      "Exhibitor satisfaction increased 45%"
    ],
    products: ["Booth graphics", "Promotional giveaways", "Branded uniforms", "Display materials"],
    timeline: "3 months coordination",
    budget: "$320,000",
    icon: Trophy,
    color: "bg-orange-600"
  }
];

const industries = [
  { name: "Technology", count: 150, growth: "+32%" },
  { name: "Healthcare", count: 89, growth: "+28%" },
  { name: "Financial Services", count: 76, growth: "+41%" },
  { name: "Manufacturing", count: 134, growth: "+22%" },
  { name: "Education", count: 67, growth: "+38%" },
  { name: "Non-Profit", count: 45, growth: "+55%" }
];

export default function CaseStudies() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="case-studies" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold brand-navy mb-6">
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Real results from real clients. See how Global Print Co. has helped organizations 
            solve complex promotional product challenges worldwide.
          </p>
        </div>

        {/* Industry Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold brand-navy text-center mb-8">
            Trusted by Leading Industries
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{industry.count}+</div>
                <div className="text-sm font-medium text-gray-800 mb-1">{industry.name}</div>
                <div className="text-xs text-green-600 font-medium">{industry.growth}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="lg:flex">
                  <div className={`lg:w-1/3 ${study.color} text-white p-8 lg:p-12`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{study.company}</h3>
                        <p className="text-sm opacity-90">{study.industry}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Challenge:</h4>
                        <p className="text-sm opacity-90 leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Solution:</h4>
                        <p className="text-sm opacity-90 leading-relaxed">{study.solution}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div>
                          <p className="text-xs opacity-75">Timeline</p>
                          <p className="font-semibold">{study.timeline}</p>
                        </div>
                        <div>
                          <p className="text-xs opacity-75">Investment</p>
                          <p className="font-semibold">{study.budget}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <h4 className="text-2xl font-bold brand-navy mb-6">Results Achieved</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{result}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-8">
                      <h5 className="font-semibold text-gray-800 mb-3">Products Delivered:</h5>
                      <div className="flex flex-wrap gap-2">
                        {study.products.map((product, productIndex) => (
                          <span key={productIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Button
                        onClick={scrollToContact}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Start Your Success Story
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <a 
                        href="mailto:rohitd@globalprintco.com?subject=Case Study Discussion"
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                      >
                        Discuss This Case
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Join hundreds of satisfied clients who have transformed their promotional product programs 
            with Global Print Co's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold"
            >
              Get Your Custom Solution
            </Button>
            <a 
              href="mailto:rohitd@globalprintco.com"
              className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Schedule Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}