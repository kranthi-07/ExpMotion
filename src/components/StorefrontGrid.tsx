"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EFFECTS_CATALOG } from "@/lib/data";

export function StorefrontGrid() {
  return (
    <div id="store" className="w-full max-w-6xl mx-auto px-4 py-24 flex flex-col gap-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4">The Component Store</h2>
        <p className="text-xl text-text-secondary">Click on any component to view its interactive lab and details.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EFFECTS_CATALOG.map((effect, idx) => {
          const Icon = effect.icon;
          return (
            <Link key={effect.id} href={`/effect/${effect.id}`}>
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-panel p-8 flex flex-col gap-4 h-full cursor-pointer hover:border-accent/50 group"
              >
                <div className={`p-4 rounded-xl bg-white/5 w-fit group-hover:bg-accent/10 transition-colors ${effect.color}`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold">{effect.name}</h3>
                <p className="text-text-secondary flex-1">{effect.desc}</p>
                <div className="mt-4 text-accent font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Demo ➔
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
