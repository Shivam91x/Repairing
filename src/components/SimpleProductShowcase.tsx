import { useState } from "react";

type Product = {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  type: string;
};

const roImg = "/productTop/ROSystem.png";
const chimney1Img = "/productTop/kitchen_chemney1.png";
const geyserImg = "/productTop/gyser.png";
const washingMachineImg = "/productTop/Washing_Machine_PNG.png";
const coolerImg = "/productTop/cooler.png";
const ceilingFanImg = "/productTop/ceillingFan.png";

const products: Product[] = [
  {
    id: "1",
    title: "RO System",
    category: "Water Purification",
    price: "Contact for Price",
    image: roImg,
    type: "product",
  },
  {
    id: "2",
    title: "Kitchen Chimney 1",
    category: "Kitchen Appliance",
    price: "Contact for Price",
    image: chimney1Img,
    type: "product",
  },
  
  {
    id: "3",
    title: "Energy Efficient Geyser",
    category: "Water Heating",
    price: "Contact for Price",
    image: geyserImg,
    type: "product",
  },
  {
    id: "4",
    title: "Desert Air Cooler",
    category: "Cooling Appliance",
    price: "Contact for Price",
    image: coolerImg,
    type: "product",
  },
  {
    id: "5",
    title: "BLDC Ceiling Fan",
    category: "Home Comfort",
    price: "Contact for Price",
    image: ceilingFanImg,
    type: "product",
  },
  {
    id: "6",
    title: "Washing Machine",
    category: "Laundry",
    price: "Contact for Price",
    image: washingMachineImg,
    type: "product",
  },
];

export const SimpleProductShowcase = () => {
  return (
    <section className="w-full py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-3xl font-bold text-center text-foreground mb-10">
          Top Selling Products
        </h2>

        {/* Scrollable Container with fade effect */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

          <div
            id="product-scroll"
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide flex-nowrap scroll-smooth px-2"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-56 group cursor-pointer"
              >
                <div className="bg-card/90 border border-border rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-card">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-muted/40 to-muted mb-3 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-foreground text-center leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-sm text-center text-muted-foreground">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
