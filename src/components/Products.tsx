"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Products = () => {
  const products = [
    {
      name: "Premium RO System",
      category: "Water Purification",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "Advanced purification with multi-stage RO + UV protection.",
      features: ["UV/UF Filter", "Smart indicators", "Wall mountable"],
      rating: 4.8,
      label: "On Sale (Offline Only)",
      mrp: "\u20B913,499",
    },
    {
      name: "Energy Efficient Geyser",
      category: "Water Heating",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description: "Digital geysers with instant heating and energy-saving.",
      features: ["Auto cutoff", "Fast heating", "Remote control"],
      rating: 4.7,
      label: "Limited Stock",
      mrp: "\u20B99,999",
    },
    {
      name: "Auto-Clean Chimney",
      category: "Kitchen Appliances",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      description: "High-suction chimney with oil collector and LED lights.",
      features: ["Auto-clean", "Touch controls", "LED lighting"],
      rating: 4.9,
      label: "On Sale (Offline Only)",
      mrp: "\u20B914,999",
    },
    {
      name: "Desert Air Cooler",
      category: "Cooling",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      description: "High-capacity cooler perfect for hot Indian summers.",
      features: ["Remote included", "Ice chamber", "Honeycomb pads"],
      rating: 4.6,
      label: "In-Store Only",
      mrp: "\u20B96,499",
    },
    {
      name: "BLDC Ceiling Fan",
      category: "Home Comfort",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "Brushless DC fan for low noise and low electricity usage.",
      features: ["BLDC motor", "Smart remote", "Silent operation"],
      rating: 4.8,
      label: "Hot Deal",
      mrp: "\u20B93,499",
    },
    {
      name: "Washing Machine",
      category: "Laundry",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      description: "Fully automatic front-load with 15+ wash modes.",
      features: ["Child lock", "Quick wash", "Energy Star certified"],
      rating: 4.7,
      label: "On Sale (Offline Only)",
      mrp: "\u20B918,499",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Shop Offline with Confidence
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Products <span className="text-blue-600">On Sale</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Available for purchase at our service center. Quality guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white border border-gray-100 shadow hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow">
                    {product.label}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs shadow flex items-center">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {product.rating}
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">
                    {product.category}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    {product.description}
                  </p>

                  <p className="text-xs text-red-600 font-medium mt-1 flex items-center gap-1 animate-pulse">
                    <Zap className="w-3 h-3 stroke-red-600" /> Limited Stock
                    Available
                  </p>

                  <p className="text-sm text-gray-800 font-medium mt-2 mb-2">
                    <span className="line-through text-gray-400 mr-2">
                      {product.mrp}
                    </span>
                    <span className="text-green-600 font-semibold">
                      Offline Only
                    </span>
                  </p>

                  <ul className="text-xs text-gray-600 mb-4 space-y-1">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    >
                      Visit Store
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-green-700 border-green-400 hover:bg-green-50 text-sm"
                    >
                      Call to Buy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
