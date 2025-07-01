import {
  Phone,
  Wrench,
  Store,
  Home,
  ShoppingCart,
  MessageSquareText,
} from "lucide-react";
import { motion } from "framer-motion";

export const ProcessSection = () => {
  const Box = ({
    icon,
    text,
    delay,
  }: {
    icon: JSX.Element;
    text: string;
    delay?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center gap-2 px-3 py-4 bg-white rounded-xl shadow transition duration-300 text-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-200"
    >
      <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full animate-pulse-slow">
        {icon}
      </div>
      <p className="text-xs sm:text-sm text-gray-700 font-medium">{text}</p>
    </motion.div>
  );

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Icons - subtle visuals */}
      <div className="absolute top-4 left-4 sm:top-10 sm:left-10 text-blue-100 text-[3rem] sm:text-[5rem] rotate-12 pointer-events-none opacity-30">
        🛠️
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 text-green-100 text-[3rem] sm:text-[5rem] -rotate-12 pointer-events-none opacity-30">
        🛒
      </div>
      <div className="absolute top-[50%] left-[45%] text-yellow-100 text-[4rem] sm:text-[7rem] opacity-10 rotate-45 pointer-events-none hidden sm:block">
        ⚙️
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 md:mb-14"
        >
          How Our <span className="text-blue-600">Service Works</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Repairing Flow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-blue-100 transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-blue-200"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-4 sm:mb-6">
              🔧 Repairing Process
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <Box
                icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />}
                text="Call / WhatsApp"
                delay={0.1}
              />
              <Box
                icon={<Home className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />}
                text="We Visit Home"
                delay={0.2}
              />
              <Box
                icon={
                  <Store className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                }
                text="Or Visit Our Store"
                delay={0.3}
              />
              <Box
                icon={
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                }
                text="Repair Done"
                delay={0.4}
              />
            </div>
          </motion.div>

          {/* Selling Flow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-green-100 transition duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-green-200"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4 sm:mb-6">
              🛒 Selling Process
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <Box
                icon={
                  <MessageSquareText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                }
                text="Enquire Product"
                delay={0.1}
              />
              <Box
                icon={
                  <Store className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                }
                text="Visit Store"
                delay={0.2}
              />
              <Box
                icon={
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                }
                text="Buy & Pickup"
                delay={0.3}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Custom slow pulse animation for less blinking
// Add this to your global CSS (e.g., index.css or tailwind.css):
/*
@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
}
.animate-pulse-slow {
  animation: pulse-slow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
*/
