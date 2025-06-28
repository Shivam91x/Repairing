
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "RO Water Purifier",
      description: "Complete RO system installation, maintenance, and filter replacement services.",
      icon: "💧",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Water Geyser",
      description: "Expert geyser repair, installation, and maintenance for optimal performance.",
      icon: "🔥",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Kitchen Chimney",
      description: "Professional chimney cleaning, repair, and installation services.",
      icon: "🏠",
      color: "from-gray-400 to-slate-400"
    },
    {
      title: "Air Cooler",
      description: "Complete cooler servicing, repair, and seasonal maintenance.",
      icon: "❄️",
      color: "from-green-400 to-teal-400"
    },
    {
      title: "Ceiling Fan",
      description: "Fan installation, repair, and electrical maintenance services.",
      icon: "🌀",
      color: "from-purple-400 to-indigo-400"
    },
    {
      title: "Washing Machine",
      description: "Expert washing machine repair and maintenance for all brands.",
      icon: "🧺",
      color: "from-pink-400 to-rose-400"
    }
  ];

  return (
    <section className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional repair and maintenance services for all your home appliances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                <div className="mt-6">
                  <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors group-hover:underline">
                    Learn More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
