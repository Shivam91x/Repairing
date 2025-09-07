import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// ✅ Yeh sab components tumhare components folder me hi hain
import AboutPage from "@/components/AboutPage";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
// import Contact from "@/components/Contact";

import { SiWhatsapp } from "react-icons/si";
import { Phone } from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* WhatsApp + Call Buttons */}
          <div className="fixed z-50 flex flex-col gap-4 bottom-6 right-6 md:bottom-8 md:right-8">
            <a
              href="https://wa.me/916264022721"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <SiWhatsapp size={32} />
            </a>
            <a
              href="tel:+916264022721"
              aria-label="Call Now"
              className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Phone size={28} />
            </a>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
