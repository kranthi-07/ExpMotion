"use client";

import { motion } from "framer-motion";

export function NeonBorderDemo() {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-background flex items-center justify-center">
      
      {/* Container with the animated border */}
      <div className="relative p-[2px] rounded-2xl overflow-hidden group">
        
        {/* The rotating gradient beam */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(236,72,153,1)_360deg)] opacity-100"
        />
        
        {/* A second beam for a double-border effect */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,0.8)_360deg)] opacity-50"
        />

        {/* Inner Content Card that covers the middle of the beam */}
        <div className="relative bg-surface rounded-xl p-10 flex flex-col items-center justify-center backdrop-blur-3xl border border-white/5 z-10 w-72 h-48">
          <h4 className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            Neon Trace
          </h4>
          <p className="text-text-secondary text-sm mt-2">Continuous border beam.</p>
        </div>
      </div>
      
    </div>
  );
}
