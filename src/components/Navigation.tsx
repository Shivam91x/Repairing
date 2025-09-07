"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#top" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-400/60 backdrop-blur-lg border-b border-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-600">Home</span>
              <span className="text-gray-800">Appliance</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:1234567890" tabIndex={-1}>
              <Button
                variant="outline"
                size="sm"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Call Now
              </Button>
            </a>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get Quote
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Animation Section */}
        <div
          className={`md:hidden overflow-hidden transform-gpu transition-all duration-500 ease-in-out origin-top ${
            isOpen
              ? "max-h-[600px] opacity-100 scale-y-100 translate-y-0"
              : "max-h-0 opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
          } border-t border-gray-300`}
          style={{ willChange: "transform, opacity, max-height" }}
        >
          <div className="py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 block px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Call Now
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
