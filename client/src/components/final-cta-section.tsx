import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function FinalCTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            We make life easier for Marketing, Event, and HR professionals
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            At Global Print Co, we combine global reach with local speed and flexibility, 
            giving your team a smarter way to manage branded materials.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="text-blue-100">A dedicated team that understands your brand</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="text-blue-100">Works as an extension of your team</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="text-blue-100">Helps you run better programs</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="text-blue-100">Delivers stronger brand experiences</span>
            </div>
          </div>

          <div className="pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-800 px-8 py-4 text-lg font-semibold"
            >
              Let's Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="mt-4 text-blue-200">
              Contact us today — we're ready to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}