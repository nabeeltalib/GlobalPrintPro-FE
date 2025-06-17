import { Clock, Truck, Users, Calendar, Check } from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "Urgent Deadlines?",
    problem: "Your boss needs swag for the event tomorrow, and nothing has arrived yet. You're juggling vendors, chasing approvals, and stuck with outdated catalogs...",
    solution: "24-hour printing and same-day delivery in key markets",
    color: "bg-red-600"
  },
  {
    icon: Truck,
    title: "High Shipping Costs?",
    problem: "Your event is overseas, and shipping costs are skyrocketing. Local print quality isn't up to standard, and you're worried about your event's success.",
    solution: "Local printing in 65+ countries eliminates customs delays",
    color: "bg-orange-600"
  },
  {
    icon: Users,
    title: "HR Team Struggles?",
    problem: "Need to send new hire kits to multiple locations? Struggling with inconsistent branding, delayed deliveries, and clunky approval processes for employee gifting?",
    solution: "Custom Shopify storefronts with budget controls and approvals",
    color: "bg-purple-600"
  },
  {
    icon: Calendar,
    title: "Event Headaches?",
    problem: "Managing last-minute collateral changes, unexpected shipping delays, sourcing reliable vendors, and ensuring consistent brand presentation across booths and displays?",
    solution: "One contact for global reach with consistent quality worldwide",
    color: "bg-blue-600"
  }
];

export default function ChallengesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Your Challenges</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We understand the pain points that keep marketing and event professionals up at night. Here's how we solve them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/15 transition-all">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 ${challenge.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-yellow-400">{challenge.title}</h3>
                    <p className="text-gray-300 leading-relaxed italic">
                      "{challenge.problem}"
                    </p>
                    <div className="flex items-start space-x-3 pt-2">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-white font-medium">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-300">
            Let's declutter your marketing ops. No more overflowing promo closets. 
            No more "Where's our signage?" drama. Just smart systems that work like clockwork.
          </p>
        </div>
      </div>
    </section>
  );
}