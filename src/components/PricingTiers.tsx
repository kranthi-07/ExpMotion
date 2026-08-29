"use client";

import { CheckoutButton } from "./CheckoutButton";
import { Check, ShieldCheck } from "lucide-react";

export function PricingTiers() {
  return (
    <div id="bundles" className="w-full max-w-6xl mx-auto px-4 py-24 flex flex-col gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Stop building from scratch.
        </h2>
        <p className="text-xl text-text-secondary">
          Get the exact, production-tested React source code. Ensure flawless 60fps performance across devices instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Tier 1 */}
        <div className="glass-panel p-8 flex flex-col gap-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-300">
          <div>
            <h3 className="text-xl font-semibold text-text-secondary">Single Element</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold">₹99</span>
              <span className="text-text-secondary text-sm">/ component</span>
            </div>
          </div>
          <ul className="flex flex-col gap-3 text-sm text-text-secondary flex-1">
            <li className="flex items-center gap-2"><Check size={16} className="text-green-400"/> React Source Code</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-green-400"/> Tailwind Support</li>
          </ul>
          <CheckoutButton label="Buy Single" productId="single" />
        </div>

        {/* Tier 2 (Highlighted) */}
        <div className="glass-panel p-8 flex flex-col gap-6 relative border-accent shadow-[0_0_30px_rgba(59,130,246,0.15)] transform md:-translate-y-4 hover:-translate-y-6 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:border-accent/80 transition-all duration-300">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Most Popular
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Starter Bundle</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold">₹399</span>
              <span className="text-text-secondary text-sm">/ 5 elements</span>
            </div>
            <p className="text-xs text-green-400 mt-2 font-medium">Save ₹96 compared to single</p>
          </div>
          <ul className="flex flex-col gap-3 text-sm text-text-secondary flex-1">
            <li className="flex items-center gap-2 text-white"><Check size={16} className="text-accent"/> 5 Premium Components</li>
            <li className="flex items-center gap-2 text-white"><Check size={16} className="text-accent"/> React & Next.js Ready</li>
            <li className="flex items-center gap-2 text-white"><Check size={16} className="text-accent"/> Lifetime Updates</li>
          </ul>
          <CheckoutButton label="Buy Bundle" productId="bundle" />
        </div>

        {/* Tier 3 */}
        <div className="glass-panel p-8 flex flex-col gap-6 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-300">
          <div>
            <h3 className="text-xl font-semibold text-text-secondary">Pro Pass</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-bold">₹999</span>
              <span className="text-text-secondary text-sm">/ all elements</span>
            </div>
          </div>
          <ul className="flex flex-col gap-3 text-sm text-text-secondary flex-1">
            <li className="flex items-center gap-2"><Check size={16} className="text-green-400"/> All Current Components</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-green-400"/> All Future Releases</li>
            <li className="flex items-center gap-2"><Check size={16} className="text-green-400"/> Priority Support</li>
          </ul>
          <CheckoutButton label="Get Pro Pass" productId="pro" />
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-2 text-sm text-text-secondary">
        <ShieldCheck size={18} className="text-green-400" />
        <p>
          <strong className="text-white">100% Refund Guarantee:</strong> If you can't get the code working in your project, email <a href="mailto:expstudio26@gmail.com" className="text-accent hover:underline">expstudio26@gmail.com</a> for a full refund.
        </p>
      </div>
    </div>
  );
}
