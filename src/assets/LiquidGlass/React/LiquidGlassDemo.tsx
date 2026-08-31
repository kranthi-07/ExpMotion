"use client";

import { motion } from "framer-motion";

export function LiquidGlassDemo() {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-background flex items-center justify-center overflow-hidden">
      {/* Background patterned/colored elements to distort */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      
      {/* Glass card */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        whileHover={{ scale: 1.02 }}
        whileDrag={{ scale: 1.05, rotate: 2 }}
        className="relative z-10 w-72 h-96 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-end cursor-grab active:cursor-grabbing shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        <h4 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">Liquid Glass</h4>
        <p className="text-text-secondary text-sm mt-2 drop-shadow-md">Drag around to see the beautiful refraction and depth.</p>
      </motion.div>
    </div>
  );
}
