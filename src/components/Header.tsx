"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="glass-pill flex justify-between items-center px-6 py-3 shadow-2xl">
        <Link href="/" className="font-bold tracking-tight text-lg flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent-glow)]" />
          EXP MOTION
        </Link>
        
        <nav className="hidden md:flex gap-6 text-sm font-medium text-text-secondary">
          <Link href="/#store" className="hover:text-text-primary transition-colors">Store</Link>
          <Link href="/#bundles" className="hover:text-text-primary transition-colors">Bundles</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/#bundles" className="flex items-center gap-2 text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            <ShoppingBag size={16} />
            Buy Vol. 01
          </Link>
        </div>
      </div>
    </header>
  );
}
