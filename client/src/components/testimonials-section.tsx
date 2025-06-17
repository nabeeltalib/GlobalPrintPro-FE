import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Marketing Director, TechFlow Inc.",
    content: "Global Print Co. transformed our trade show presence. The quality of their promotional products and the speed of delivery exceeded our expectations. Our booth was a huge success!",
    initials: "SM",
    color: "bg-slate-800"
  },
  {
    name: "James Rodriguez",
    company: "HR Manager, Creative Solutions LLC",
    content: "The custom apparel for our company retreat came out perfect. The design team helped us create something unique that our employees absolutely love wearing.",
    initials: "JR",
    color: "bg-blue-600"
  },
  {
    name: "Amanda Lee",
    company: "Brand Manager, Fitness First",
    content: "Working with Global Print Co. has been a game-changer for our marketing campaigns. Their on-demand printing service allows us to test different designs without huge commitments.",
    initials: "AL",
    color: "bg-green-600"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold brand-navy">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses across industries say about their experience with Global Print Co.
          </p>
          
          {/* Google Reviews Link */}
          <div className="flex justify-center mt-8">
            <a 
              href="https://www.google.com/search?q=Global+Print+Co+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white border-2 border-gray-200 rounded-xl px-6 py-3 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium text-gray-700">Google Reviews</span>
                <div className="flex text-yellow-400 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">4.8/5</span>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold brand-navy">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
