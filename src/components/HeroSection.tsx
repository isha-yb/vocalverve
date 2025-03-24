import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 mt-[80px] bg-cover bg-center"
      style={{ backgroundImage: "url('/lovable-uploads/background.jpg')" }}
    >
      <div className="container mx-auto px-4 py-20 md:pt-32 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg"
        >
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold tracking-wide">
            WELCOME TO VOCALVERVE
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Speak with{" "}
            <span className="relative">
              confidence
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-brand-200 -z-10"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Unlock your voice's true potential and captivate any audience with our
            revolutionary voice training platform designed for speakers of all levels.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              aria-label="Get Started with VocalVerve"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#features"
              className="px-8 py-3 rounded-lg bg-brand-500 text-white font-medium shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300"
            >
              Get Started
            </motion.a>
            <motion.button
              aria-label="Learn More About VocalVerve"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-brand-200 text-brand-700 font-medium hover:bg-brand-50 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#features" 
            className="flex flex-col items-center text-gray-400 hover:text-brand-500 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Discover more</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
