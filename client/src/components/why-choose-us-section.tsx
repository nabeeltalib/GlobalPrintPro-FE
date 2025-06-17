import { Rocket, Award, DollarSign, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "True Global Production Network",
    description: "Not a single-location print shop pretending to be global. Real local production in 70+ countries.",
    color: "bg-blue-600 text-white"
  },
  {
    icon: Rocket,
    title: "Speed and Reliability",
    description: "Local production reduces lead times, and we consistently meet tight deadlines.",
    color: "bg-yellow-400 text-slate-800"
  },
  {
    icon: DollarSign,
    title: "Flexibility",
    description: "No unnecessary minimums, full on-demand service, scalable solutions that adapt to your needs.",
    color: "bg-green-600 text-white"
  },
  {
    icon: Headphones,
    title: "End-to-End Service",
    description: "From sourcing and printing to warehousing, kitting, and delivery - we handle everything.",
    color: "bg-purple-600 text-white"
  }
];

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Why Companies Choose Us</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Companies come to us when they are tired of managing multiple vendors, dealing with unreliable shipping, or spending too much time coordinating swag and print orders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className={`w-20 h-20 ${benefit.color} rounded-full flex items-center justify-center mx-auto`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
