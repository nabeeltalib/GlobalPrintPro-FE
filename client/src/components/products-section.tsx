import { ArrowRight } from "lucide-react";

const productCategories = [
  {
    title: "Swag & Promo Items",
    description: "From notebooks to neon socks, eco-kits to luxury hampers. Zero MOQs with global delivery.",
    price: "Zero Minimums",
    image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Custom Apparel",
    description: "T-shirts, hoodies, hats with no order minimums. Perfect for corporate events and team building.",
    price: "No MOQs",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Tech Giveaways",
    description: "Branded wireless chargers, earbuds, phone accessories, and high-tech promotional items.",
    price: "Local Production",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    title: "Event Printing",
    description: "Flyers, signage, foam boards, booklets with same-day delivery. Print minimums as low as 5 units.",
    price: "Min 5 Units",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold brand-navy">Popular Product Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From notebooks to neon socks, eco-kits to luxury hampers. Fun stuff like card games, puzzles, and picnic sets. All with zero minimums and global delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold brand-navy">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="brand-blue font-semibold">{category.price}</span>
                  <button className="brand-blue hover:text-blue-700 font-medium flex items-center">
                    View All <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
