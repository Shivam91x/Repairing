
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Products = () => {
  const products = [
    {
      name: "Premium RO Systems",
      category: "Water Purification",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      price: "₹15,000 - ₹45,000"
    },
    {
      name: "Energy Efficient Geysers",
      category: "Water Heating",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      price: "₹8,000 - ₹25,000"
    },
    {
      name: "Auto-Clean Chimneys",
      category: "Kitchen Appliances",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      price: "₹12,000 - ₹35,000"
    },
    {
      name: "Desert Air Coolers",
      category: "Cooling Systems",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      price: "₹5,000 - ₹18,000"
    },
    {
      name: "BLDC Ceiling Fans",
      category: "Home Comfort",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      price: "₹3,000 - ₹12,000"
    },
    {
      name: "Front Load Washing Machines",
      category: "Laundry Solutions",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      price: "₹25,000 - ₹65,000"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Premium Products</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            High-quality home appliances from trusted brands with warranty and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-gray-700 shadow-lg bg-gray-800/70 backdrop-blur-sm glow-blue hover:glow-cyan"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium glow-blue">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">{product.price}</p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white group-hover:scale-105 transition-transform duration-300 glow-blue">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
