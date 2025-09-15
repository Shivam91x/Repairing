import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { text } from "stream/consumers";

export const Footer = () => {
  const contactInfo = [
  { icon: Phone, text: "+91 6264022721", href: "tel:+916264022721" },
  {
    icon: Mail,
    text: "info@homeappliance.com",
    href: "mailto:info@homeappliance.com",
  },
  {
    icon: MapPin,
    text: "Mahalaxmi Nagar, Indore, Madhya Pradesh",
    href: "https://maps.google.com/?q=Mahalaxmi+Nagar+Indore",
  },
  {
    icon: MapPin,
    text: "Bhawarkuwan, Indore, Madhya Pradesh",
    href: "https://maps.google.com/?q=Bhawarkuwan+Indore",
  },
  { icon: Clock, text: "Monday-Sunday: 9AM-7PM" },
];


  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/homeappliance",
      color: "hover:text-blue-500",
    },
    
    {
      icon: Instagram,
      href: "https://instagram.com/homeappliance",
      color: "hover:text-pink-500",
    },
    {
      icon: SiWhatsapp,
      href: "https://wa.me/916264022721",
      color: "hover:text-green-500",
    },
  ];

  const services = [
    "AC Repair & Service",
    "RO System Repair",
    "Ceiling Fan Repair",
    "Water Purifier Service",
    "Geyser Repair",
    "Other Appliance Services",
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23374151' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    <span className="text-blue-400">Home</span>Appliance
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Your trusted partner for home appliance repair and premium
                    product sales since 2014.
                  </p>
                </div>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  Our Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a
                        href="#services"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "About", href: "#about" },
                    { name: "Contact", href: "#contact" },
                    { name: "Products", href: "#products" },
                    { name: "Services", href: "#services" },
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">
                  Contact Info
                </h4>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <Card
                        key={index}
                        className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <CardContent className="p-4">
                          <a
                            href={contact.href}
                            className="flex items-center space-x-3 text-gray-300 group-hover:text-white transition-colors"
                          >
                            <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                              <Icon size={16} className="text-blue-400" />
                            </div>
                            <span className="text-sm">{contact.text}</span>
                          </a>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; 2025 HomeAppliance. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  24/7 Emergency Service
                </span>
                <span>|</span>
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
