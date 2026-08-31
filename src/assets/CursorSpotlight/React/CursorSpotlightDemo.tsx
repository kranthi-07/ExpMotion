"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorSpotlightDemo() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Create motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for a fluid, organic feeling
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const container = document.getElementById("premium-spotlight-container");
      if (!container) return;
      const rect = container.getBoundingClientRect();
      // Offset by 125px (half of the 250px width/height) to center it on the cursor
      mouseX.set(e.clientX - rect.left - 125);
      mouseY.set(e.clientY - rect.top - 125);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <div 
      id="premium-spotlight-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full min-h-[400px] bg-white flex items-center justify-center overflow-hidden cursor-none"
    >
      {/* Background Text (Black) */}
      <div className="z-0 text-center pointer-events-none">
        <h4 className="text-5xl md:text-7xl font-bold text-black tracking-tighter uppercase leading-[0.8]">
          Magic <br/> Inversion
        </h4>
        <p className="text-black/60 font-semibold mt-4 tracking-widest uppercase text-sm">Find the light</p>
      </div>

      {/* The Spotlight (Inverts colors below it) */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 rounded-full flex items-center justify-center mix-blend-difference bg-white"
        style={{
          width: 250,
          height: 250,
          x: smoothX,
          y: smoothY,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.5 } }}
      >
        {/* Inner core to make the cursor center obvious */}
        <div className="w-2 h-2 bg-black rounded-full mix-blend-difference" />
      </motion.div>
    </div>
  );
}
