"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <div 
          className="glass-panel overflow-hidden cursor-pointer hover:border-white/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="p-8 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white pr-8">
              "I have AI. Why shouldn't I just prompt ChatGPT to build these?"
            </h3>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown className="text-text-secondary w-6 h-6 shrink-0" />
            </motion.div>
          </div>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="px-8 pb-8 pt-0 text-text-secondary leading-relaxed border-t border-white/5 mt-2 pt-6">
                  AI is incredible for logic and boilerplate, but it struggles massively with high-end, bespoke physics and complex visual mathematics (like Framer Motion springs, multi-layered parallax, or continuous math-based svg tracing). You could spend 4 hours arguing with an AI to tweak the spring damping physics, or you can spend ₹99 to instantly copy-paste a production-ready, highly polished component and move on to shipping your core product. Your time is worth more than ₹99.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
