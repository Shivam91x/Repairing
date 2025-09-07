"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-slate-100 to-blue-100 relative overflow-hidden">
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div
            id="contact-header"
            data-animate
            className={`transition-all duration-1000 transform ${
              isVisible("contact-header")
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <h2 className="text-4xl font-bold text-black mb-4 ">
              Get in <span className="h-3 w-4 bg-yellow-500 rounded-sm">Touch</span> 
            </h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              For expert repair services or to buy top appliances, reach out to us below.
            </p>
          </div>

          <div
            id="contact-details"
            data-animate
            className={`grid md:grid-cols-3 gap-6 mt-10 transition-all duration-1000 transform ${
              isVisible("contact-details")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 p-6">
              <CardContent className="text-center">
                <Phone className="mx-auto mb-2 text-blue-600" />
                <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                <p className="text-sm text-gray-600">+91 6264022721</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 p-6">
              <CardContent className="text-center">
                <Mail className="mx-auto mb-2 text-blue-600" />
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <p className="text-sm text-gray-600">support@repairandsales.in</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 p-6">
              <CardContent className="text-center">
                <MapPin className="mx-auto mb-2 text-blue-600" />
                <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                <p className="text-sm text-gray-600">
                  Mahalaxmi Nagar, Indore, Madhya Pradesh
                  Bhawarkuwan, Indore, Madhya Pradesh
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.740948174786!2d75.85772577512706!3d22.703203728682846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcb59e06e75d%3A0x13a2a172222fca84!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1629044768099!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <form className="space-y-4 text-left">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Your Message - Repair or Sales Inquiry"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md w-full transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}