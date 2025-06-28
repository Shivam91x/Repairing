
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Settings, Zap, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-ping delay-700"></div>
      </div>

      {/* Floating Tools and Labels */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Repair Tools */}
        <div className="absolute top-1/4 left-1/6 animate-float delay-100">
          <div className="glass p-4 rounded-lg glow-blue">
            <Wrench className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/5 animate-float delay-300">
          <div className="glass p-4 rounded-lg glow-cyan">
            <Settings className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-float delay-500">
          <div className="glass p-4 rounded-lg glow-blue">
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/6 animate-float delay-700">
          <div className="glass p-4 rounded-lg glow-cyan">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
        </div>

        {/* Service Labels */}
        <div className="absolute top-1/5 right-1/4 animate-fade-in delay-1000">
          <div className="glass px-4 py-2 rounded-full">
            <span className="text-cyan-400 font-semibold text-sm">REPAIR</span>
          </div>
        </div>
        <div className="absolute bottom-1/5 left-1/4 animate-fade-in delay-1200">
          <div className="glass px-4 py-2 rounded-full">
            <span className="text-blue-400 font-semibold text-sm">SALES</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Repair Man Visual Representation */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center glow-blue animate-scale-in">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
                <Wrench className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-shadow">
            Expert Home Appliance
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Repair & Sales
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted repair technician for all home appliances. 
            From RO systems to washing machines, we ensure quality repairs and premium products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 glow-blue"
            >
              Schedule Repair
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 glass"
            >
              View Products
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in delay-500">
          {[
            { number: "5000+", label: "Happy Customers" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
            { number: "100%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
