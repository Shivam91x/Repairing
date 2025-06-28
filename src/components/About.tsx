
export const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">About Our Service</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              With over a decade of experience in home appliance repair and sales, we've built our reputation on 
              <span className="text-blue-400 font-semibold"> trust, quality, and reliability</span>. Our certified technicians 
              are equipped with the latest tools and genuine spare parts to ensure your appliances work like new.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From emergency repairs to premium appliance sales, we're your one-stop solution for all home appliance needs. 
              Our commitment to excellence has earned us thousands of satisfied customers across the region.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Expert Technicians",
              description: "Certified professionals with 10+ years of hands-on experience",
              icon: "🔧"
            },
            {
              title: "Genuine Parts",
              description: "Original manufacturer parts with warranty guarantee",
              icon: "⚙️"
            },
            {
              title: "Quick Service",
              description: "Same-day repairs and 24/7 emergency support available",
              icon: "⚡"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-slate-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
