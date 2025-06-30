import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center animate-fade-in">
          {/* Central composition: Sales | & | Repair */}
          <div className="flex items-center justify-center w-full mb-8 relative">
            {/* Ampersand Background */}
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <span className="text-[26rem] font-extrabold text-gray-500 opacity-60 select-none">&</span>
            </div>

            {/* Sales - Left */}
            <span className="text-5xl sm:text-6xl font-extrabold text-blue-700 z-30 drop-shadow-lg mr-5">
              Sales
            </span>

            {/* Image - Center */}
            <div className="relative z-30 mx-2">
              <img
                src="/Shivam_Yadav_A_colored_cartoon-style_Indian_repairman_standing_confidently_wit_4702c810-f030-4d7d-9d63-a9f1b3dc9aba.png"
                alt="Repair Expert"
                className="w-[280px] sm:w-[320px] lg:w-[360px] object-contain"
              />
            </div>

            {/* Repair - Right */}
            <span className="text-5xl sm:text-6xl font-extrabold text-blue-700 z-30 drop-shadow-lg ml-5">
              Repair
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105"
            >
              Schedule Repair
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View Products
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24 text-center">
          <div className="absolute top-6 left-6 text-sm uppercase tracking-wider text-gray-400">
            We Provide
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Expert repair services and premium appliances for your home.
              <br />
              From RO systems to washing machines, we ensure quality and reliability.
            </p>

            {(() => {
              function parseStatNumber(str: string) {
                if (str === "24/7")
                  return { value: 24, suffix: "/7", isSpecial: true };
                const match = str.match(/^(\d+)([+%]*)$/);
                if (match) {
                  return {
                    value: parseInt(match[1]),
                    suffix: match[2],
                    isSpecial: false,
                  };
                }
                return { value: 0, suffix: "", isSpecial: false };
              }

              const AnimatedStat = ({
                stat,
                duration = 1500,
              }: {
                stat: { number: string; label: string };
                duration?: number;
              }) => {
                const [display, setDisplay] = useState(stat.number);

                useEffect(() => {
                  const { value, suffix, isSpecial } = parseStatNumber(stat.number);
                  if (isSpecial) {
                    let startTimestamp: number | null = null;
                    function step(timestamp: number) {
                      if (!startTimestamp) startTimestamp = timestamp;
                      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                      const current = Math.floor(progress * (value - 0) + 0);
                      if (progress < 1) {
                        setDisplay(`${current}/7`);
                        requestAnimationFrame(step);
                      } else {
                        setDisplay(`24/7`);
                      }
                    }
                    setDisplay(`0/7`);
                    requestAnimationFrame(step);
                    return () => {};
                  } else if (!isNaN(value)) {
                    let startTimestamp: number | null = null;
                    function step(timestamp: number) {
                      if (!startTimestamp) startTimestamp = timestamp;
                      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                      const current = Math.floor(progress * (value - 0) + 0);
                      if (progress < 1) {
                        setDisplay(`${current}${suffix}`);
                        requestAnimationFrame(step);
                      } else {
                        setDisplay(`${value}${suffix}`);
                      }
                    }
                    setDisplay(`0${suffix}`);
                    requestAnimationFrame(step);
                    return () => {};
                  } else {
                    setDisplay(stat.number);
                  }
                }, [stat.number, duration]);

                return (
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                    {display}
                  </div>
                );
              };

              const stats = [
                { number: "1000+", label: "Happy Customers", duration: 1000 },
                { number: "10+", label: "Years Experience", duration: 1500 },
                { number: "24/7", label: "Support Available", duration: 1500 },
                { number: "99%", label: "Satisfaction Rate", duration: 1500 },
              ];

              return (
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center group bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
                    >
                      <AnimatedStat stat={stat} duration={stat.duration} />
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>
      </div>
    </section>
  );
};
