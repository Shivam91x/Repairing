"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export const Hero = () => {
  const statsSectionRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const section = statsSectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* 👇 Scroll animation wrapper for main content */}
        <ScrollAnimation>
          <div className="flex flex-col items-center w-full">
            <div className="w-full mb-8 relative">
              <div className="flex flex-col md:flex-row items-center justify-center w-full relative">
                <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
                  <span
                    className="
                      text-[8rem]
                      xs:text-[15rem]
                      sm:text-[20rem]
                      md:text-[28rem]
                      lg:text-[35rem]
                      font-extrabold text-gray-900 opacity-90 select-none
                      leading-none
                    "
                  >
                    &
                  </span>
                </div>

                <span
                  className="
                    text-4xl
                    xs:text-6xl
                    sm:text-7xl
                    md:text-8xl
                    italic font-extrabold z-30 drop-shadow-lg
                    mb-2 md:mb-0
                    md:mr-[20px]
                  "
                >
                  <span style={{ color: "#9D4221" }}>S</span>
                  <span style={{ color: "gray" }}>a</span>
                  <span style={{ color: "gray" }}>l</span>
                  <span style={{ color: "#9D4221" }}>e</span>
                  <span style={{ color: "gray" }}>s</span>
                </span>

                <div className="relative z-30 mx-0 md:mx-2 my-2 md:my-0">
                  <img
                    src="/Shivam_Yadav_A_colored_cartoon-style_Indian_repairman_standing_confidently_wit_4702c810-f030-4d7d-9d63-a9f1b3dc9aba.png"
                    alt="Repair Expert"
                    className="
                      w-[350px]
                      xs:w-[380px]
                      sm:w-[400px]
                      md:w-[420px]
                      lg:w-[500px]
                      object-contain
                      mx-auto
                    "
                  />
                </div>

                <span
                  className="
                    text-4xl
                    xs:text-6xl
                    sm:text-7xl
                    md:text-8xl
                    italic font-extrabold z-30 drop-shadow-lg
                    mt-2 md:mt-0
                    md:ml-[20px]
                  "
                >
                  <span style={{ color: "#9D4221" }}>R</span>
                  <span style={{ color: "gray" }}>e</span>
                  <span style={{ color: "#9D4221" }}>p</span>
                  <span style={{ color: "gray" }}>a</span>
                  <span style={{ color: "gray" }}>i</span>
                  <span style={{ color: "#9D4221" }}>r</span>
                </span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* 👇 Button scroll animation */}
        <ScrollAnimation delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 w-full">
            <a
              href="https://wa.me/+916264022721"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group transition-all duration-300 hover:scale-110 shadow-lg"
              >
                Schedule Repair
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#products" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-110 shadow"
              >
                View Products
              </Button>
            </a>
          </div>
        </ScrollAnimation>

        {/* 👇 Stats section (same as before) */}
        <section
          className="relative bg-white py-12 xs:py-16 sm:py-20 px-2 xs:px-4 sm:px-6 md:px-12 lg:px-24 text-center"
          id="hero-stats-section"
          ref={statsSectionRef}
        >
          <div className="absolute top-2 left-2 xs:top-4 xs:left-4 sm:top-6 sm:left-6 text-lg font-bold xs:text-lg uppercase tracking-wider text-black">
            We Provide
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="text-base xs:text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 leading-relaxed">
              Expert repair services and premium appliances for your home.
              <br className="hidden xs:block" />
              From RO systems to Cielling fans, we ensure quality and
              reliability.
            </p>

            {/* Animated Stats */}
            <div
              className="
                mt-6
                grid
                grid-cols-1
                xs:grid-cols-2
                md:grid-cols-4
                gap-4
                sm:gap-6
                md:gap-8
              "
            >
              {[
                { number: "1000+", label: "Happy Customers", duration: 3000 },
                { number: "10+", label: "Years Experience", duration: 3500 },
                { number: "24/7", label: "Support Available", duration: 3500 },
                { number: "99%", label: "Satisfaction Rate", duration: 3200 },
              ].map((stat, index) => {
                const parseStatNumber = (str) => {
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
                };

                const AnimatedStat = ({
                  stat,
                  duration = 3000,
                  statsVisible,
                }) => {
                  const [display, setDisplay] = useState(stat.number);

                  useEffect(() => {
                    if (!statsVisible) return;
                    const { value, suffix, isSpecial } = parseStatNumber(
                      stat.number
                    );

                    if (isSpecial) {
                      let start = null;
                      const step = (timestamp) => {
                        if (!start) start = timestamp;
                        const linear = Math.min(
                          (timestamp - start) / duration,
                          1
                        );
                        const progress = 1 - Math.pow(1 - linear, 2);
                        const current = Math.floor(progress * value);
                        if (progress < 1) {
                          setDisplay(`${current}/7`);
                          requestAnimationFrame(step);
                        } else {
                          setDisplay("24/7");
                        }
                      };
                      setDisplay("0/7");
                      requestAnimationFrame(step);
                      return;
                    }

                    if (!isNaN(value)) {
                      let start = null;
                      const step = (timestamp) => {
                        if (!start) start = timestamp;
                        const linear = Math.min(
                          (timestamp - start) / duration,
                          1
                        );
                        const progress = 1 - Math.pow(1 - linear, 2);
                        const current = Math.floor(progress * value);
                        if (progress < 1) {
                          setDisplay(`${current}${suffix}`);
                          requestAnimationFrame(step);
                        } else {
                          setDisplay(`${value}${suffix}`);
                        }
                      };
                      setDisplay(`0${suffix}`);
                      requestAnimationFrame(step);
                      return;
                    }

                    setDisplay(stat.number);
                  }, [stat.number, duration, statsVisible]);

                  return (
                    <div className="text-2xl xs:text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                      {display}
                    </div>
                  );
                };

                return (
                  <div
                    key={index}
                    className="text-center group bg-gray-50 p-4 xs:p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300"
                  >
                    <AnimatedStat
                      stat={stat}
                      duration={stat.duration}
                      statsVisible={statsVisible}
                    />
                    <div className="text-gray-600 font-medium text-sm xs:text-base">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
