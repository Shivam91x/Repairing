
export const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years of experience",
      icon: "👨‍🔧"
    },
    {
      title: "Quality Parts",
      description: "Genuine spare parts with manufacturer warranty",
      icon: "⚙️"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer service and emergency repairs",
      icon: "📞"
    },
    {
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to providing exceptional service and quality products for your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in glass p-6 rounded-lg hover:glow-blue transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl shadow-xl p-8 max-w-4xl mx-auto glow-blue">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 glow-blue">
                Call Now: +91 98765 43210
              </button>
              <button className="border-2 border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 glass">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
