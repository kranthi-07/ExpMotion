"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function ParallaxLayersDemo() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Layer 1 (Background) - Moves opposite to mouse, slightly
  const layer1X = useTransform(smoothX, [-500, 500], [20, -20]);
  const layer1Y = useTransform(smoothY, [-500, 500], [20, -20]);

  // Layer 2 (Middle) - Moves with mouse, moderately
  const layer2X = useTransform(smoothX, [-500, 500], [-30, 30]);
  const layer2Y = useTransform(smoothY, [-500, 500], [-30, 30]);

  // Layer 3 (Foreground) - Moves with mouse, heavily
  const layer3X = useTransform(smoothX, [-500, 500], [-70, 70]);
  const layer3Y = useTransform(smoothY, [-500, 500], [-70, 70]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-full min-h-[500px] bg-background flex items-center justify-center overflow-hidden perspective-[1000px]">
      <div className="relative w-64 h-80 transform-style-3d">
        
        {/* Layer 1: Background Blur / Grid */}
        <motion.div 
          style={{ x: layer1X, y: layer1Y }}
          className="absolute inset-0 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl flex items-center justify-center"
        >
          <div className="w-32 h-32 bg-emerald-500/20 rounded-full blur-xl" />
        </motion.div>

        {/* Layer 2: Text / Content */}
        <motion.div 
          style={{ x: layer2X, y: layer2Y }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none drop-shadow-xl text-center px-4"
        >
          <h4 className="text-3xl font-bold text-white tracking-tight">Parallax</h4>
          <p className="text-emerald-400 text-sm font-medium mt-1">Multi-layered depth</p>
        </motion.div>

        {/* Layer 3: Foreground floating elements */}
        <motion.div 
          style={{ x: layer3X, y: layer3Y }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-400/80 rounded-lg blur-[2px] shadow-[0_0_30px_rgba(52,211,153,0.5)] transform rotate-12" />
          <div className="absolute bottom-8 left-[-20px] w-16 h-16 bg-white/80 rounded-full blur-[3px] shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
        </motion.div>
        
      </div>
    </div>
  );
}
