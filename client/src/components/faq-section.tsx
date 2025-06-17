import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "In which countries do you offer printing and delivery?",
    answer: "We print and deliver locally in over 70 countries worldwide."
  },
  {
    question: "Do you offer global shipping for swag and kits?",
    answer: "Yes — we ship globally with local fulfillment to avoid customs delays."
  },
  {
    question: "Can you handle rush orders and urgent event deadlines?",
    answer: "Absolutely — we specialize in fast-turnaround even same day print for events."
  },
  {
    question: "Is there a minimum order quantity for swag or kits?",
    answer: "No — we offer complete flexibility with no minimum order requirements."
  },
  {
    question: "Do you provide warehousing and inventory management?",
    answer: "Yes — we can stock your items and manage inventory in our warehouses."
  },
  {
    question: "Can you handle custom onboarding kits for new employees?",
    answer: "Yes — we curate, kit, and ship personalized onboarding packs globally."
  },
  {
    question: "What types of items can you customize?",
    answer: "We customize apparel, drinkware, tech items, bags, stationery, packaging, and more."
  },
  {
    question: "Do you offer name-brand products?",
    answer: "Yes — we source and customize products from premium brands like Nike, Yeti, Under Armour, and more."
  },
  {
    question: "Can you deliver directly to event venues?",
    answer: "Yes — we regularly ship print materials and swag directly to event locations worldwide."
  },
  {
    question: "Who typically uses your services?",
    answer: "Marketing teams, Event teams, HR professionals, and businesses of all sizes."
  },
  {
    question: "Can I order print and swag for different countries at once?",
    answer: "Yes — we can coordinate multi-country orders with local production and delivery."
  },
  {
    question: "How do I track my inventory and shipments?",
    answer: "We provide clear visibility and tracking for all inventory and shipments."
  },
  {
    question: "What makes Global Print Co different from other vendors?",
    answer: "We combine global reach with local speed — and manage everything from print to swag to fulfillment."
  },
  {
    question: "Do you help with product selection and ideas?",
    answer: "Yes — our team suggests trending and relevant items to match your audience and goals."
  },
  {
    question: "How do I get started?",
    answer: "Just contact us — we'll set up a quick call to understand your needs and get moving."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold brand-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get quick answers to common questions about our services, capabilities, and how we can help your business.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have more questions?</p>
          <a 
            href="mailto:rohitd@globalprintco.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}