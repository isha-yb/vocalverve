
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Backdrop Image */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#e1ebfe,transparent_40%)] opacity-60"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,#f0f5ff,transparent_40%)] opacity-60"></div>
      
      <div className="container mx-auto px-4 py-20 md:pt-32 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold tracking-wide">
            WELCOME TO VOCALVERVE
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Speak with{" "}
            <span className="relative">
              confidence
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-brand-200 -z-10"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Unlock your voice's true potential and captivate any audience with our
            revolutionary voice training platform designed for speakers of all levels.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-brand-500 text-white font-medium shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transition-all duration-300"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-brand-200 bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300"
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
            className="flex flex-col items-center text-gray-200 hover:text-brand-500 transition-colors duration-300"
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
