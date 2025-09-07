"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  Award,
  Headphones,
  Wrench,
  Shield,
} from "lucide-react";

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observerRef.current?.disconnect();
    };
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-100 to-blue-100 relative overflow-hidden">
      {/* Background Icons & Design */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Wrench
          className="absolute top-32 right-1/4 w-8 h-8 text-blue-200 opacity-20 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <Shield
          className="absolute bottom-1/3 left-1/4 w-7 h-7 text-blue-100 opacity-15 animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "6s" }}
        />
        <Wrench
          className="absolute bottom-10 right-10 w-6 h-6 text-blue-300 opacity-10 animate-bounce"
          style={{ animationDuration: "7s" }}
        />
        <div className="absolute top-10 left-10 text-blue-200 text-xl font-bold opacity-10 rotate-12">
          SALES
        </div>
        <div className="absolute bottom-10 left-1/3 text-blue-300 text-xl font-bold opacity-10 -rotate-6">
          REPAIR
        </div>
        <div className="absolute top-1/2 right-1/3 text-blue-200 text-xl font-bold opacity-10 rotate-6">
          SERVICE
        </div>
      </div>

      {/* Header Section */}
      <section className="pt-16 pb-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div
            id="header"
            data-animate
            className={`transition-all duration-1500 transform ${
              isVisible("header")
                ? "opacity-100 translate-y-0 scale-100 rotate-0"
                : "opacity-0 translate-y-12 scale-95 rotate-1"
            }`}
          >
            <h2 className="text-black text-4xl font-bold mb-4 tracking-wide uppercase animate-pulse">
              About Us
            </h2>
            <h1 className="text-sm md:text-3xl font-bold text-black mb-6 bg-gradient-to-r from-black via-blue-800 to-black bg-clip-text text-transparent animate-gradient-x">
              Expert Appliance Repair & Sales
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
              Professional appliance repair and sales with reliable service and
              customer satisfaction guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div>
              <div className="relative w-96 h-96 group">
                <img
                  src="/AboutImg.png"
                  alt="Sticker image"
                  className="w-96 h-96 object-contain absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x400?text=Image+Not+Found";
                  }}
                />
                <img
                  src="/AboutImgOpen.png"
                  alt="Sticker image open"
                  className="w-96 h-96 object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x400?text=Image+Not+Found";
                  }}
                />
              </div>
            </div>

            {/* Right Column - About Text */}
            <div
              id="about-text"
              data-animate
              className={`transition-all duration-1500 transform ${
                isVisible("about-text")
                  ? "opacity-100 translate-x-0 rotate-0 scale-100"
                  : "opacity-0 translate-x-16 rotate-2 scale-95"
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6 hover:text-blue-600 transition-colors duration-300 cursor-default">
                Quality Service
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed transform hover:translate-x-2 hover:text-blue-700 transition-all duration-300 cursor-default">
                  Over 10 years of experience with certified technicians. We
                  service all major brands with genuine parts.
                </p>
                <p className="leading-relaxed transform hover:translate-x-2 hover:text-blue-700 transition-all duration-300 cursor-default">
                  From repairs to new appliance sales, we provide complete
                  solutions for your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div
            id="stats"
            data-animate
            className={`transition-all duration-1500 transform ${
              isVisible("stats")
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-90"
            }`}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "5000+", label: "Happy Customers", delay: "0s" },
                { number: "10+", label: "Years Experience", delay: "0.2s" },
                { number: "24/7", label: "Support", delay: "0.4s" },
                { number: "100%", label: "Satisfaction Rate", delay: "0.6s" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group cursor-default"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse">
                    {stat.number}
                  </div>
                  <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div
            id="why-choose-title"
            data-animate
            className={`text-center mb-12 transition-all duration-1500 transform ${
              isVisible("why-choose-title")
                ? "opacity-100 translate-y-0 scale-100 rotate-0"
                : "opacity-0 translate-y-8 scale-95 rotate-1"
            }`}
          >
            <h2 className="text-3xl font-bold text-black mb-4 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-default">
              Why Choose Us
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto animate-pulse">
              Quality service with customer-first approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Fast Repair",
                description: "Quick service without compromising quality",
                delay: "delay-100",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: CheckCircle,
                title: "Genuine Products",
                description: "Authentic parts and certified appliances",
                delay: "delay-200",
                color: "from-green-400 to-green-600",
              },
              {
                icon: Award,
                title: "Certified Technicians",
                description: "Trained and experienced professionals",
                delay: "delay-300",
                color: "from-purple-400 to-purple-600",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock customer service",
                delay: "delay-400",
                color: "from-orange-400 to-orange-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                id={`card-${index}`}
                data-animate
                className={`transition-all duration-1500 transform ${
                  item.delay
                } ${
                  isVisible(`card-${index}`)
                    ? "opacity-100 translate-y-0 rotate-0 scale-100"
                    : "opacity-0 translate-y-12 rotate-3 scale-90"
                }`}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 hover:scale-105 border-0 shadow-lg group cursor-pointer relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${
                        item.color.split(" ")[1]
                      }, ${item.color.split(" ")[3]})`,
                    }}
                  ></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-spin transition-all duration-500 shadow-lg`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}