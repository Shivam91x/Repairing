"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Products = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // detect device
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const products = [
    {
      name: "Premium RO System",
      category: "Water Purification",
      image: "/productImages/ROSystem.png",
      description: "Advanced purification with multi-stage RO + UV protection.",
      features: ["UV/UF Filter", "Smart indicators", "Wall mountable"],
      rating: 4.8,
      label: "On Sale (Offline Only)",
      mrp: "₹13,499",
    },
    {
      name: "Energy Efficient Geyser",
      category: "Water Heating",
      image: "/productImages/gyser.png",
      description: "Digital geysers with instant heating and energy-saving.",
      features: ["Auto cutoff", "Fast heating", "Remote control"],
      rating: 4.7,
      label: "Limited Stock",
      mrp: "₹9,999",
    },
    {
      name: "Auto-Clean Chimney",
      category: "Kitchen Appliances",
      image: "/productImages/kitchen_chemney1.png",
      description: "High-suction chimney with oil collector and LED lights.",
      features: ["Auto-clean", "Touch controls", "LED lighting"],
      rating: 4.9,
      label: "On Sale (Offline Only)",
      mrp: "₹14,999",
    },
    {
      name: "Desert Air Cooler",
      category: "Cooling",
      image: "/productImages/cooler.png",
      description: "High-capacity cooler perfect for hot Indian summers.",
      features: ["Remote included", "Ice chamber", "Honeycomb pads"],
      rating: 4.6,
      label: "In-Store Only",
      mrp: "₹6,499",
    },
    {
      name: "BLDC Ceiling Fan",
      category: "Home Comfort",
      image: "/productImages/ceillingFan.png",
      description: "Brushless DC fan for low noise and low electricity usage.",
      features: ["BLDC motor", "Smart remote", "Silent operation"],
      rating: 4.8,
      label: "Hot Deal",
      mrp: "₹3,499",
    },
    
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-100 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4 mr-2" />
            Shop Offline with Confidence
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">
            <span className="relative">
              Products
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-600/70 rounded-full"></span>
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              On Sale
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Available for purchase at our service center. Quality guaranteed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative backdrop-blur-xl bg-white/70 border border-white/30 shadow-lg rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500">
                {/* Product Image */}
                <div className="relative h-52 flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-44 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow">
                    {product.label}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs shadow flex items-center">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {product.rating}
                  </div>
                </div>

                {/* Product Info */}
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-gray-700 text-sm mt-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="text-xs text-gray-600 mt-3 mb-4 space-y-1">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Price + Stock */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-500 line-through block">
                        {product.mrp}
                      </span>
                      <span className="text-green-600 text-sm font-semibold">
                        Offline Only
                      </span>
                    </div>
                    <span className="text-xs text-red-600 flex items-center gap-1 animate-pulse">
                      <Zap className="w-3 h-3 stroke-red-600" /> Limited Stock
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    {/* Visit Store → Google Maps */}
                    <Button
                      asChild
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    >
                      <a
                        href="https://www.google.com/maps?q=Indore,+Madhya+Pradesh"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Store
                      </a>
                    </Button>

                    {/* Call / WhatsApp */}
                    {isMobile ? (
                      <a href="tel:6264022721" className="flex-1" tabIndex={-1}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full text-green-700 border-green-400 hover:bg-green-50 text-sm"
                        >
                          Call Now
                        </Button>
                      </a>
                    ) : (
                      <a
                        href="https://wa.me/916264022721?text=Hello%20I%20am%20interested%20in%20your%20products"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full text-green-700 border-green-400 hover:bg-green-50 text-sm"
                        >
                          WhatsApp
                        </Button>
                      </a>
                    )}
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
