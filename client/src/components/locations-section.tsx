import { MapPin, Globe } from "lucide-react";

const locationData = {
  "EUROPE": [
    "Vienna, Austria",
    "Brussels, Belgium", 
    "Sofia, Bulgaria",
    "Zagreb, Croatia",
    "Prague, Czech Republic",
    "Copenhagen, Denmark",
    "Helsinki, Finland",
    "Monaco, France",
    "Paris, France",
    "Düsseldorf, Germany",
    "Dresden, Germany",
    "Essen, Germany",
    "Frankfurt, Germany",
    "Munich, Germany",
    "Athens, Greece",
    "Budapest, Hungary",
    "Belfast, Ireland",
    "Tel Aviv, Israel",
    "Tel Mond, Israel",
    "Rome, Italy",
    "Amsterdam, Netherlands",
    "Oslo, Norway",
    "Krakow, Poland",
    "Lisbon, Portugal",
    "Bucharest, Romania",
    "Moscow, Russia",
    "Malmö, Sweden",
    "Barcelona, Spain",
    "Madrid, Spain",
    "Zurich, Switzerland",
    "Kyiv, Ukraine",
    "Bracknell, United Kingdom",
    "London, United Kingdom"
  ],
  "USA": [
    "Phoenix, Arizona",
    "Los Angeles, California",
    "San Francisco, California",
    "Denver, Colorado",
    "Washington, DC",
    "Miami, Florida",
    "Chicago, Illinois",
    "Kansas City, Kansas",
    "Minneapolis, Minnesota",
    "New York, New York",
    "Charlotte, North Carolina",
    "Cleveland, Ohio",
    "Dayton, Ohio",
    "Philadelphia, Pennsylvania",
    "Nashville, Tennessee",
    "Austin, Texas",
    "Dallas, Texas",
    "Seattle, Washington"
  ],
  "CANADA": [
    "Calgary, Alberta",
    "Toronto, Ontario",
    "Montreal, Quebec"
  ],
  "SOUTH AMERICA": [
    "Buenos Aires, Argentina",
    "La Paz, Bolivia",
    "Rio de Janeiro, Brazil",
    "São Paulo, Brazil",
    "Santiago, Chile",
    "Bogotá, Colombia",
    "San José, Costa Rica",
    "Quito, Ecuador",
    "San Salvador, El Salvador",
    "Mexico City, Mexico",
    "Panama City, Panama",
    "Lima, Peru",
    "Caracas, Venezuela"
  ],
  "ASIA PACIFIC": [
    "Brisbane, Australia",
    "Melbourne, Australia",
    "Perth, Australia",
    "Sydney, Australia",
    "Beijing, China",
    "Hong Kong, China",
    "Shanghai, China",
    "Bengaluru, India",
    "Mumbai, India",
    "Bali, Indonesia",
    "Jakarta, Indonesia",
    "Tokyo, Japan",
    "Kuala Lumpur, Malaysia",
    "Auckland, New Zealand",
    "Manila, Philippines",
    "Singapore, Singapore",
    "Seoul, South Korea",
    "Taipei, Taiwan",
    "Bangkok, Thailand",
    "Ho Chi Minh City, Vietnam"
  ],
  "AFRICA": [
    "Luanda, Angola",
    "Gaborone, Botswana",
    "Nairobi, Kenya",
    "Lagos, Nigeria",
    "Kigali, Rwanda",
    "Cape Town, South Africa",
    "Johannesburg, South Africa",
    "Dodoma, Tanzania",
    "Kampala, Uganda"
  ],
  "MIDDLE EAST": [
    "Riyadh, Saudi Arabia",
    "Baghdad, Iraq",
    "Amman, Jordan",
    "Almaty, Kazakhstan",
    "Abu Dhabi, United Arab Emirates",
    "Dubai, United Arab Emirates",
    "Muscat, Oman",
    "Doha, Qatar"
  ]
};

const regionColors = {
  "EUROPE": "bg-blue-100 text-blue-800",
  "USA": "bg-red-100 text-red-800",
  "CANADA": "bg-purple-100 text-purple-800",
  "SOUTH AMERICA": "bg-green-100 text-green-800",
  "ASIA PACIFIC": "bg-yellow-100 text-yellow-800",
  "AFRICA": "bg-orange-100 text-orange-800",
  "MIDDLE EAST": "bg-pink-100 text-pink-800"
};

export default function LocationsSection() {
  const totalLocations = Object.values(locationData).reduce((sum, locations) => sum + locations.length, 0);

  return (
    <section id="locations" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Globe className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold brand-navy">
              Global Locations
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            With operations in <span className="font-bold text-blue-600">{totalLocations}+ locations</span> across 
            <span className="font-bold text-blue-600"> 7 regions</span>, we provide local production and fulfillment 
            for faster delivery and reduced shipping costs worldwide.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">{totalLocations}+</div>
            <div className="text-gray-600 text-sm">Global Locations</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">70+</div>
            <div className="text-gray-600 text-sm">Countries Served</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">24-48h</div>
            <div className="text-gray-600 text-sm">Avg Delivery Time</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600 text-sm">Local Fulfillment</div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(locationData).map(([region, locations]) => (
            <div key={region} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold brand-navy">{region}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${regionColors[region as keyof typeof regionColors]}`}>
                  {locations.length} locations
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center space-x-2 py-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold brand-navy mb-4">Why Global Matters</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our worldwide presence means better service, faster delivery, and lower costs for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Local Production</h4>
              <p className="text-sm text-gray-600">Products made near your delivery location for faster turnaround</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">No Customs Delays</h4>
              <p className="text-sm text-gray-600">Local fulfillment eliminates international shipping complications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-purple-600 font-bold text-xl">$</div>
              </div>
              <h4 className="font-semibold mb-2">Lower Shipping Costs</h4>
              <p className="text-sm text-gray-600">Reduced international shipping fees with local distribution</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need products delivered to a specific location? We've got you covered.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Contact Our Global Team
            <MapPin className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}