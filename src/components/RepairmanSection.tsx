
export const RepairmanSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[60vh]">
          {/* Left Side - Repair */}
          <div className="flex-1 text-center animate-fade-in">
            <div className="group cursor-pointer">
              <h3 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                REPAIR
              </h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full shadow-lg shadow-blue-400/50"></div>
              </div>
            </div>
          </div>

          {/* Center - Repairman */}
          <div className="flex-1 text-center animate-scale-in delay-300">
            <div className="relative inline-block group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl scale-150 group-hover:scale-175 transition-transform duration-700"></div>
              
              {/* Repairman Image Container */}
              <div className="relative z-10 w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-500 backdrop-blur-sm bg-gray-800/40">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                  alt="Professional Repairman"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Tools Animation */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce">
                <span className="text-2xl">🔧</span>
              </div>
              <div className="absolute -top-4 -right-12 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce delay-500">
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce delay-1000">
                <span className="text-xl">🛠️</span>
              </div>
            </div>
          </div>

          {/* Right Side - Sales */}
          <div className="flex-1 text-center animate-fade-in delay-200">
            <div className="group cursor-pointer">
              <h3 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                SALES
              </h3>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-cyan-400/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-16 animate-fade-in delay-500">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Expert repair services and premium appliance sales — 
            <span className="text-blue-400 font-semibold"> two pillars of excellence</span> under one roof
          </p>
        </div>
      </div>
    </section>
  );
};
