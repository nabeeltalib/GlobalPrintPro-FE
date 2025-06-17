import { useState } from "react";
import { Building2, Stethoscope, GraduationCap, Factory, Heart, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    color: "bg-blue-600",
    description: "Medical facilities, hospitals, and healthcare networks",
    challenges: [
      "Compliance with healthcare regulations",
      "Multi-location coordination",
      "Professional brand standards",
      "Employee recognition programs"
    ],
    solutions: [
      "Medical-grade branded apparel",
      "ID badge holders and lanyards", 
      "Recognition awards and gifts",
      "Patient comfort items"
    ],
    caseStudy: "Regional Healthcare Network automated their employee recognition program across 50 locations, achieving 92% participation and 50% reduction in processing time.",
    stats: { clients: "89+", satisfaction: "98%", savings: "35%" }
  },
  {
    id: "technology",
    name: "Technology",
    icon: Building2,
    color: "bg-purple-600",
    description: "Software companies, startups, and tech enterprises",
    challenges: [
      "Rapid scaling and hiring",
      "Remote workforce integration",
      "Tech conference presence",
      "Developer community engagement"
    ],
    solutions: [
      "New hire tech kits",
      "Conference swag and giveaways",
      "Remote worker care packages",
      "Developer community merchandise"
    ],
    caseStudy: "TechFlow Solutions successfully onboarded 500 new hires across 15 countries with 100% on-time delivery and 95% employee satisfaction.",
    stats: { clients: "150+", satisfaction: "96%", savings: "40%" }
  },
  {
    id: "finance",
    name: "Financial Services",
    icon: Briefcase,
    color: "bg-green-600",
    description: "Banks, investment firms, and financial institutions",
    challenges: [
      "Professional image requirements",
      "Client relationship building",
      "Regulatory compliance",
      "Executive gifting protocols"
    ],
    solutions: [
      "Executive gift programs",
      "Client appreciation packages",
      "Professional branded materials",
      "Conference and event supplies"
    ],
    caseStudy: "Global Finance Corp delivered complete conference materials for 2,000 attendees with 6-hour emergency timeline, achieving 98% satisfaction rating.",
    stats: { clients: "76+", satisfaction: "99%", savings: "30%" }
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    color: "bg-yellow-600",
    description: "Universities, schools, and educational institutions",
    challenges: [
      "Student engagement programs",
      "Alumni relations",
      "Fundraising events",
      "Campus bookstore management"
    ],
    solutions: [
      "Student orientation packages",
      "Alumni recognition items",
      "Fundraising event materials",
      "Campus store merchandise"
    ],
    caseStudy: "Major university streamlined their campus store operations with custom Shopify integration, reducing inventory costs by 45% while improving student satisfaction.",
    stats: { clients: "67+", satisfaction: "94%", savings: "45%" }
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    color: "bg-orange-600",
    description: "Industrial companies and manufacturing enterprises",
    challenges: [
      "Safety compliance requirements",
      "Workforce recognition",
      "Trade show presence",
      "Global operations coordination"
    ],
    solutions: [
      "Safety-compliant workwear",
      "Employee milestone awards",
      "Trade show displays",
      "Industrial promotional items"
    ],
    caseStudy: "Industrial Manufacturing Expo coordinated branding for 200 exhibitors across 12 countries with 99.5% on-time delivery and 35% cost reduction.",
    stats: { clients: "134+", satisfaction: "97%", savings: "35%" }
  },
  {
    id: "nonprofit",
    name: "Non-Profit",
    icon: Heart,
    color: "bg-red-600",
    description: "Charitable organizations and non-profit institutions",
    challenges: [
      "Limited budget constraints",
      "Donor engagement",
      "Volunteer coordination",
      "Community outreach programs"
    ],
    solutions: [
      "Cost-effective fundraising materials",
      "Volunteer appreciation gifts",
      "Community event supplies",
      "Donor recognition programs"
    ],
    caseStudy: "National charity organization reduced promotional costs by 50% while doubling volunteer engagement through strategic product selection and local fulfillment.",
    stats: { clients: "45+", satisfaction: "96%", savings: "50%" }
  }
];

export default function IndustryLandingPages() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="industry-solutions" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold brand-navy mb-6">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Tailored promotional product strategies designed for the unique needs and challenges 
            of your industry. Expert solutions backed by proven results.
          </p>
        </div>

        {/* Industry Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                  selectedIndustry.id === industry.id
                    ? `${industry.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Industry Overview */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${selectedIndustry.color} text-white rounded-xl flex items-center justify-center`}>
                  <selectedIndustry.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold brand-navy">{selectedIndustry.name} Solutions</h3>
                  <p className="text-gray-600">{selectedIndustry.description}</p>
                </div>
              </div>
            </div>

            {/* Industry Challenges */}
            <div className="bg-red-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-red-800 mb-4">Common Industry Challenges</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedIndustry.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-700 text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Solutions */}
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-green-800 mb-4">Our Specialized Solutions</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedIndustry.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-green-700 text-sm">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-blue-800 mb-4">Success Story</h4>
              <p className="text-blue-700 leading-relaxed">{selectedIndustry.caseStudy}</p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className={`${selectedIndustry.color} hover:opacity-90 px-8 py-3`}
              >
                Get Industry-Specific Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a 
                href={`mailto:rohitd@globalprintco.com?subject=${selectedIndustry.name} Solutions Inquiry`}
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Schedule Industry Consultation
              </a>
            </div>
          </div>

          {/* Statistics & Quick Info */}
          <div className="space-y-8">
            {/* Industry Stats */}
            <div className={`${selectedIndustry.color} text-white rounded-xl p-6`}>
              <h4 className="text-xl font-bold mb-6">Industry Performance</h4>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{selectedIndustry.stats.clients}</div>
                  <div className="text-sm opacity-90">Active Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{selectedIndustry.stats.satisfaction}</div>
                  <div className="text-sm opacity-90">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{selectedIndustry.stats.savings}</div>
                  <div className="text-sm opacity-90">Average Cost Savings</div>
                </div>
              </div>
            </div>

            {/* Industry Benefits */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold brand-navy mb-4">Why Choose Us for {selectedIndustry.name}?</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Industry-specific expertise and compliance knowledge</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Dedicated account management with sector experience</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Proven track record with industry leaders</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">Scalable solutions for organizations of all sizes</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h4 className="text-lg font-bold brand-navy mb-3">Ready to Get Started?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Speak with an industry specialist about your specific {selectedIndustry.name.toLowerCase()} needs.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium">334-796-0770</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium">rohitd@globalprintco.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response:</span>
                  <span className="font-medium text-green-600">Within 2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}