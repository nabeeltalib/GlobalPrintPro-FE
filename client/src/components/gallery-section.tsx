const galleryItems = [
  {
    title: "Promotional Notebooks & Journals",
    description: "Custom embossed leather notebooks and branded journals - perfect for executive gifts and corporate events",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    category: "Swag & Promo"
  },
  {
    title: "Event Printing & Signage",
    description: "Same-day flyers, foam boards, banners, and booklets - minimum 5 units with local production",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    category: "Event Printing"
  },
  {
    title: "Custom Corporate Apparel",
    description: "T-shirts, hoodies, polos, and hats with zero minimums - consistent quality worldwide",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    category: "Custom Apparel"
  },
  {
    title: "Tech Giveaways & Accessories",
    description: "Wireless chargers, earbuds, phone cases, and high-tech promotional items",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    category: "Tech Giveaways"
  },
  {
    title: "Branded Drinkware Collection",
    description: "Custom mugs, tumblers, water bottles with full-color printing and eco-friendly options",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    category: "Swag & Promo"
  },
  {
    title: "Trade Show & Event Kits",
    description: "Complete promotional packages including banners, giveaways, and branded materials",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    category: "Event Solutions"
  },
  {
    title: "Eco-Friendly Promotional Items",
    description: "Sustainable tote bags, bamboo products, and environmentally conscious promotional materials",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    category: "Eco-Friendly"
  },
  {
    title: "Luxury Corporate Gifts",
    description: "Premium hampers, executive gift sets, and high-end promotional items for VIP clients",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    category: "Luxury Gifts"
  },
  {
    title: "Fun & Games Collection",
    description: "Card games, puzzles, picnic sets, and novelty items including neon socks and creative swag",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    category: "Fun Stuff"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold brand-navy">Product Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From notebooks to neon socks, eco-kits to luxury hampers. Explore our comprehensive range of promotional products and printing solutions available globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold brand-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Zero MOQs • Global Delivery</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    View Details →
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
