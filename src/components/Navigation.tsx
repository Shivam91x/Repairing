"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: "Home", href: "#top" },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "RO Repair", href: "#services" },
        { name: "Geyser Repair", href: "#services" },
        { name: "Kitchen Chimney Repair", href: "#services" },
        { name: "Ceiling Fan Repair", href: "#services" },
        { name: "Air Cooler Repair", href: "#services" },
        { name: "Washing Machine Repair", href: "#services" },
      ],
    },
    {
      name: "Products",
      href: "#products",
      dropdown: [
        { name: "RO", href: "#products" },
        { name: "Geyser", href: "#products" },
        { name: "Kitchen Chimney", href: "#products" },
        { name: "Ceiling Fan", href: "#products" },
        { name: "Air Cooler", href: "#products" },
        { name: "Washing Machine", href: "#products" },
      ],
    },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-400/60 backdrop-blur-lg border-b border-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-600">Home</span>
              <span className="text-gray-800">Appliance</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="relative group-hover:text-blue-600 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  {item.name}
                </a>

                {/* Dropdown (Desktop Only) */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-gray-400/80 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg hidden group-hover:block z-50">
                    <ul className="py-2">
                      {item.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+916264022721" tabIndex={-1}>
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

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <div
                  className="flex justify-between items-center px-4 py-3 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    item.dropdown
                      ? setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      : setIsOpen(false)
                  }
                >
                  <a href={item.href} className="text-base font-medium">
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <ChevronDown
                      className={`ml-2 h-4 w-4 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="ml-6 border-l border-gray-300 space-y-1">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 transition"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Buttons */}
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
