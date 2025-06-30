import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional repair and maintenance services for all your home
            appliances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                {/* <div className="mt-6">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline">
                    Learn More →
                  </button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
