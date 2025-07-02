"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollAnimation from "@/components/ScrollAnimation";

export const Services = () => {
  const services = [
    {
      title: "RO Water Purifier",
      description:
        "Complete RO system installation, maintenance, and filter replacement services.",
      icon: "💧",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Water Geyser",
      description:
        "Expert geyser repair, installation, and maintenance for optimal performance.",
      icon: "🔥",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Kitchen Chimney",
      description:
        "Professional chimney cleaning, repair, and installation services.",
      icon: "🏠",
      color: "from-gray-500 to-slate-500",
    },
    {
      title: "Air Cooler",
      description:
        "Complete cooler servicing, repair, and seasonal maintenance.",
      icon: "❄️",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Ceiling Fan",
      description:
        "Fan installation, repair, and electrical maintenance services.",
      icon: "🌀",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Washing Machine",
      description:
        "Expert washing machine repair and maintenance for all brands.",
      icon: "🧺",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="relative py-16 xs:py-20 sm:py-24 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-2xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-100 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Our{" "}
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold shadow-sm inline-block transition-all duration-200">
              Repairing
            </span>{" "}
            Services
          </h2>
          <p className="text-base xs:text-lg text-gray-600 max-w-2xl mx-auto">
            Professional repair and maintenance services for all your essential
            home appliances.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md bg-white rounded-2xl">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
