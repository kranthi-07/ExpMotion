"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4"
    >
      <div className="glass-pill flex justify-between items-center px-6 py-3 shadow-[0_0_40px_rgba(0,0,0,0.8)] bg-black/40 backdrop-blur-2xl border border-white/10">
        <Link href="/" className="font-bold tracking-tight text-lg flex items-center gap-2 group">
          <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent-glow)] group-hover:scale-125 transition-transform duration-300" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
            EXP MOTION
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-text-secondary">
          <Link href="/#store" className="relative hover:text-white transition-colors group py-2">
            Store
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/#bundles" className="relative hover:text-white transition-colors group py-2">
            Bundles
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/#bundles" className="flex items-center gap-2 text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:scale-105 hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <ShoppingBag size={16} />
            Buy Vol. 01
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
