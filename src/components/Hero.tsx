"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 w-full mt-10">
      {/* Background Grid */}
      <div className="bg-grid" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl flex flex-col items-center gap-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-white/20 text-xs font-medium text-accent mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Vol. 01 Available Now
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300 pb-2">
          Make your website <br className="hidden md:block" />
          feel alive.
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mt-4">
          Premium, interactive web components for developers. Stop building complex animations from scratch. Just copy, paste, and impress.
        </p>

        <a 
          href="#store"
          className="mt-8 flex flex-col items-center gap-2 text-text-secondary hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium uppercase tracking-widest">Explore the Store</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
