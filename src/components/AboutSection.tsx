
export const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-800/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Your Trusted <span className="text-blue-400">Home Appliance</span> Partner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group">
              <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                5000+
              </div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Built on a foundation of <span className="text-blue-400 font-semibold">trust</span>, 
            powered by <span className="text-blue-400 font-semibold">experience</span>, 
            and driven by our unwavering <span className="text-blue-400 font-semibold">commitment</span> 
            to excellence in every repair and sale.
          </p>
        </div>
      </div>
    </section>
  );
};
