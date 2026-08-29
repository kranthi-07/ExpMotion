"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export function MagneticButtonDemo() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Magnetic pull position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring physics for the magnetic pull
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  // 3D Tilt calculation
  const rotateX = useTransform(springY, [-50, 50], [15, -15]);
  const rotateY = useTransform(springX, [-50, 50], [-15, 15]);

  // Inner glow spotlight position
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate distance from center for magnetic pull
    const middleX = e.clientX - (left + width / 2);
    const middleY = e.clientY - (top + height / 2);
    x.set(middleX * 0.4);
    y.set(middleY * 0.4);

    // Calculate relative mouse position for inner glow
    glowX.set(e.clientX - left);
    glowY.set(e.clientY - top);
  };

  const reset = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-full h-full min-h-[400px] bg-background flex items-center justify-center perspective-[1000px]">
      <motion.button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={reset}
        style={{
          x: springX,
          y: springY,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative px-12 py-6 bg-surface text-white font-semibold rounded-2xl text-lg border border-white/10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
      >
        {/* Inner Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: "radial-gradient(100px circle at var(--x) var(--y), rgba(59,130,246,0.4), transparent 40%)",
            opacity: isHovered ? 1 : 0,
            //@ts-ignore
            "--x": useTransform(glowX, (v) => `${v}px`),
            "--y": useTransform(glowY, (v) => `${v}px`),
          }}
        />

        {/* Glossy top sheen */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

        <span className="relative z-10 flex items-center gap-3 drop-shadow-md transform translate-z-[20px]">
          Hover Me
          <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa] animate-pulse" />
        </span>
      </motion.button>
    </div>
  );
}
