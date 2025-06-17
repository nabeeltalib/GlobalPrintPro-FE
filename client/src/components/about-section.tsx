import { Award, Globe, Users, Zap, CheckCircle, Building } from "lucide-react";

const companyStats = [
  {
    icon: Globe,
    number: "70+",
    label: "Countries",
    description: "Local production worldwide"
  },
  {
    icon: Zap,
    number: "24hr",
    label: "Turnaround",
    description: "Same-day delivery available"
  },
  {
    icon: Building,
    number: "Global",
    label: "Warehousing",
    description: "Storage & fulfillment centers"
  },
  {
    icon: Users,
    number: "Zero",
    label: "MOQs",
    description: "No minimum order quantities"
  }
];

const coreValues = [
  {
    icon: Award,
    title: "Consistent Quality",
    description: "Same printing presses, paper, and color management techniques worldwide. No quality surprises anywhere."
  },
  {
    icon: Zap,
    title: "Speed & Efficiency", 
    description: "24-hour printing and same-day delivery in key markets. Most orders ship within 24 hours."
  },
  {
    icon: Globe,
    title: "Global Reach, Local Touch",
    description: "One contact for global reach. We handle print and promo seamlessly across continents."
  },
  {
    icon: CheckCircle,
    title: "Smart Solutions",
    description: "Tech-driven print model reduces costs by 25-35%. Easy online ordering through email or Shopify portals."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold brand-navy">About Global Print Co.</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We started Global Print Co to solve a problem most companies face: how to efficiently manage branded materials across different regions without getting stuck in endless shipping delays, customs issues, vendor miscommunication, and unpredictable costs.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold brand-navy">What We Offer</h3>
              <p className="text-gray-600 leading-relaxed">
                Marketing, HR, and Event teams today need fast, flexible solutions that adapt to the demands of their business. Traditional suppliers aren't built for this — but we are.
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Local print production in 70+ countries</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Warehousing services for your inventory</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">On-demand kitting and fulfillment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Global sourcing of premium branded merchandise</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Why Businesses Choose Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>Eliminate customs clearance issues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>Reduce shipping costs dramatically</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>Get consistent quality worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>Enjoy faster turnaround times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span>Access eco-friendly solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {companyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-gray-50 rounded-2xl p-8">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold brand-navy mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-bold brand-navy mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from our technology-driven approach to our commitment to environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold brand-navy mb-3">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Environmental Commitment */}
        <div className="mt-20 bg-green-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-4">Environmentally Responsible</h3>
              <p className="text-green-700 leading-relaxed mb-6">
                We minimize inventory waste with print and swag on demand. Our local production model reduces carbon footprint by eliminating long-distance shipping, while our eco-friendly product options help businesses meet their sustainability goals.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">On-demand printing reduces waste</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">Local production lowers carbon footprint</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">Eco-friendly material options available</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-green-600 text-white rounded-full mb-4">
                <Building className="w-16 h-16" />
              </div>
              <p className="text-green-700 font-semibold">Sustainable Business Practices</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold brand-navy mb-4">Ready to Simplify Your Marketing Operations?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who've streamlined their promotional product and printing needs with our global network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Your Free Quote
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}