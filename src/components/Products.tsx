import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Shield, Zap } from "lucide-react";

export const Products = () => {
  const products = [
    {
      name: "Premium RO Systems",
      category: "Water Purification",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description:
        "Advanced water purification systems with multi-stage filtration technology.",
      features: ["Multi-stage filtration", "UV protection", "Smart indicators"],
      rating: 4.8,
    },
    {
      name: "Energy Efficient Geysers",
      category: "Water Heating",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description:
        "Smart water heaters with energy-saving features and digital controls.",
      features: ["Digital display", "Energy saving", "Auto cut-off"],
      rating: 4.7,
    },
    {
      name: "Auto-Clean Chimneys",
      category: "Kitchen Appliances",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      description:
        "Modern kitchen chimneys with automatic cleaning and powerful suction.",
      features: ["Auto-clean tech", "LED lighting", "Touch controls"],
      rating: 4.9,
    },
    {
      name: "Desert Air Coolers",
      category: "Cooling Systems",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      description:
        "High-performance air coolers for effective cooling in all weather conditions.",
      features: ["Honeycomb pads", "Remote control", "Ice chamber"],
      rating: 4.6,
    },
    {
      name: "BLDC Ceiling Fans",
      category: "Home Comfort",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description:
        "Energy-efficient ceiling fans with brushless DC motors and remote control.",
      features: ["BLDC motor", "Remote control", "Reversible rotation"],
      rating: 4.8,
    },
    {
      name: "Front Load Washing Machines",
      category: "Laundry Solutions",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description:
        "Advanced washing machines with multiple wash programs and energy efficiency.",
      features: ["15 wash programs", "Quick wash", "Child lock"],
      rating: 4.7,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Premium Quality Guaranteed
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of high-quality home appliances
            designed for modern living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    {product.category}
                  </span>
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold text-gray-800">
                    {product.rating}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Features list */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Key Features
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-gray-600 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <div className="text-sm text-gray-600">
              Need help choosing the right product?
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              Get Expert Advice
            </Button>
          </div>
        </div>
        {/* Call to Action Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 right-10 w-16 h-16 border border-white/30 rounded-full animate-pulse"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div
              id="cta"
              data-animate
              className="transition-all duration-1500 transform opacity-100 translate-y-0 scale-100 rotate-0"
            >
              <h2 className="text-3xl font-bold text-white mb-4 animate-pulse">
                Need Appliance Repair?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
                Contact us today for professional repair services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-110 hover:rotate-1 hover:shadow-2xl transition-all duration-500 transform">
                  Schedule Repair
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 hover:scale-110 hover:-rotate-1 hover:shadow-2xl transition-all duration-500 transform">
                  Call Now: (555) 123-4567
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
