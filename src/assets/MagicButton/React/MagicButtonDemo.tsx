"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MagicButtonDemo() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [particles, setParticles] = useState<{id: number, tx: number, ty: number, duration: number, size: number, delay: number}[]>([]);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y });
  };

  const fireParticles = (count: number, isMini = false) => {
    const newParticles = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = isMini ? 20 + Math.random() * 45 : 55 + Math.random() * 130;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const size = 2 + Math.random() * (isMini ? 2 : 4);
      const duration = isMini ? 0.4 : 0.55 + Math.random() * 0.55;
      const delay = isMini ? 0 : Math.random() * 0.08;
      
      newParticles.push({
        id: Math.random(),
        tx, ty, size, duration, delay
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
    
    // Cleanup
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(n => n.id === p.id)));
    }, 1300);
  };

  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => fireParticles(42), 120);
    
    setTimeout(() => {
      setIsSuccess(true);
    }, 420);
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 1900);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 2200);
  };

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.13),transparent_32%),#07070c]">
      {/* Particles container */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
        <AnimatePresence>
          {particles.map(p => (
            <motion.span
              key={p.id}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{ 
                x: p.tx, 
                y: p.ty, 
                scale: 0, 
                opacity: 0 
              }}
              transition={{ 
                duration: p.duration, 
                delay: p.delay,
                ease: [0.15, 0.75, 0.3, 1]
              }}
              className="absolute rounded-full bg-purple-300 shadow-[0_0_8px_rgba(216,180,254,0.95),0_0_18px_rgba(168,85,247,0.65)]"
              style={{ width: p.size, height: p.size }}
            />
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        ref={buttonRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => {
          setIsHovered(false);
          setPointer({ x: 50, y: 50 });
        }}
        onPointerDown={() => {
          if (!isAnimating) fireParticles(8, true);
        }}
        onClick={handleClick}
        animate={{
          scale: isAnimating && !isSuccess ? 0.94 : isSuccess ? 1.04 : isHovered ? 1.02 : 1,
          y: isHovered && !isAnimating ? -3 : 0
        }}
        className="relative w-[190px] h-[58px] rounded-[18px] flex items-center justify-center border-0 bg-transparent text-white cursor-pointer isolate group"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {/* Outer Glow */}
        <motion.div 
          className="absolute inset-[-18px] -z-30 rounded-[32px] blur-[18px]"
          style={{
            background: isSuccess 
              ? 'radial-gradient(ellipse at center, rgba(103, 232, 249, 0.45), rgba(99, 102, 241, 0.2) 40%, transparent 72%)'
              : 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.42), rgba(99, 102, 241, 0.18) 35%, transparent 70%)'
          }}
          animate={{
            opacity: isAnimating ? 1 : isHovered ? 0.95 : 0.55,
            scale: isSuccess ? 1.3 : isAnimating ? 1.45 : isHovered ? 1.15 : 0.82
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Button Surface */}
        <div 
          className="absolute inset-0 -z-20 rounded-[inherit] backdrop-blur-md transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.13), rgba(255,255,255,0.035))',
            border: `1px solid ${isSuccess ? 'rgba(103, 232, 249, 0.65)' : isHovered ? 'rgba(168, 85, 247, 0.45)' : 'rgba(255,255,255,0.14)'}`,
            boxShadow: isSuccess 
              ? 'inset 0 1px 0 rgba(255,255,255,0.25), 0 0 45px rgba(103,232,249,0.25)'
              : isHovered 
                ? 'inset 0 1px 0 rgba(255,255,255,0.2), 0 15px 45px rgba(124,58,237,0.25)'
                : 'inset 0 1px 0 rgba(255,255,255,0.14), 0 12px 35px rgba(0,0,0,0.35)'
          }}
        />

        {/* Animated Border (Conic gradient spinning) */}
        {!isSuccess && (
          <div className="absolute inset-[-1px] -z-10 rounded-[inherit] p-[1px] overflow-hidden opacity-75">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute w-[180%] h-[180%] -left-[40%] -top-[40%]"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0deg, transparent 80deg, rgba(168,85,247,0.9) 120deg, rgba(103,232,249,0.95) 155deg, transparent 205deg, transparent 360deg)'
              }}
            />
            <div className="absolute inset-[1px] rounded-[17px] bg-[#0d0b15]" />
          </div>
        )}
        
        {/* If success, fill border solid */}
        {isSuccess && (
          <div className="absolute inset-[-1px] -z-10 rounded-[inherit] bg-[#0d0b15]" />
        )}

        {/* Cursor Light */}
        <div 
          className="absolute w-[90px] h-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-[4px] transition-opacity duration-300"
          style={{
            left: `${pointer.x}%`,
            top: `${pointer.y}%`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.25), rgba(168,85,247,0.12) 35%, transparent 70%)',
            opacity: isHovered ? 1 : 0
          }}
        />

        {/* Content */}
        <motion.div 
          animate={{ scale: isAnimating && !isSuccess ? 0.9 : isHovered ? 1.025 : 1 }}
          className="relative z-10 flex items-center justify-center gap-[9px] h-full text-[13px] font-bold tracking-[0.5px]"
        >
          <motion.span 
            animate={{ 
              rotate: isSuccess ? 360 : isHovered ? 180 : 0,
              scale: isSuccess ? 1.25 : isHovered ? 1.15 : 1,
              color: isSuccess ? '#67e8f9' : '#ddd6fe'
            }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-[18px] h-[18px] text-[16px] drop-shadow-[0_0_12px_rgba(216,180,254,0.9)]"
          >
            ✦
          </motion.span>
          <AnimatePresence mode="wait">
            <motion.span 
              key={isSuccess ? "success" : "magic"}
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center h-[18px] whitespace-nowrap"
            >
              {isSuccess ? "Magic Complete" : "Magic"}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      </motion.button>
    </div>
  );
}
