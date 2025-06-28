
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, ShoppingCart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Custom Section */}
        <div className="text-center mb-16">
          <div className="flex justify-start mb-8">
            <p className="text-gray-400 text-lg font-medium tracking-wide">We provide</p>
          </div>
          
          {/* Main Layout: Repair - Repairman - Sales */}
          <div className="flex items-center justify-center gap-8 lg:gap-16 mb-16">
            {/* Repair Section */}
            <div className="flex flex-col items-center group">
              <div className="p-4 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-full mb-4 backdrop-blur-sm border border-blue-500/30 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                <Wrench className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                Repair
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Repairman Illustration */}
            <div className="relative mx-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/40 group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/30">
                {/* Repairman Silhouette/Icon */}
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full flex items-center justify-center">
                  <div className="text-4xl lg:text-5xl">👨‍🔧</div>
                </div>
              </div>
              {/* Floating tools animation */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/80 rounded-full flex items-center justify-center animate-bounce delay-300">
                <span className="text-sm">🔧</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400/80 rounded-full flex items-center justify-center animate-bounce delay-700">
                <span className="text-sm">⚡</span>
              </div>
            </div>

            {/* Sales Section */}
            <div className="flex flex-col items-center group">
              <div className="p-4 bg-gradient-to-br from-green-600/20 to-emerald-500/20 rounded-full mb-4 backdrop-blur-sm border border-green-500/30 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-green-500/25">
                <ShoppingCart className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                Sales
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Description and CTA */}
          <div className="animate-fade-in delay-500 max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Expert repair services and premium appliances for your home. 
              From RO systems to washing machines, we ensure quality and reliability with 
              <span className="text-blue-400 font-semibold"> 10+ years of experience</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Schedule Repair
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-500 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                View Products
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in delay-700">
            {[
              { number: "5000+", label: "Happy Customers", color: "text-blue-400" },
              { number: "10+", label: "Years Experience", color: "text-green-400" },
              { number: "24/7", label: "Support Available", color: "text-yellow-400" },
              { number: "100%", label: "Satisfaction Rate", color: "text-cyan-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
