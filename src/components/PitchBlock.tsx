"use client";

import { CheckoutButton } from "./CheckoutButton";

export function PitchBlock() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between p-8 brutalist-panel bg-surface">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold tracking-tight mb-4 text-text-primary">
          Why pay when you can DIY?
        </h3>
        <p className="text-text-secondary leading-relaxed">
          You <em>can</em> build these effects yourself. But getting the physics right, ensuring they run flawlessly at 60fps across devices, and polishing every edge case takes hours—if not days. For ₹199, you get the exact, production-tested React source code for effects that immediately make your project feel premium. Save your time for building the actual product.
        </p>
      </div>
      
      <div className="flex-shrink-0 flex flex-col gap-4 min-w-[240px]">
        <div className="flex justify-between items-baseline border-b border-border pb-2 mb-2">
          <span className="font-mono text-text-secondary uppercase text-sm">Vol. 01</span>
          <span className="text-2xl font-bold">₹199</span>
        </div>
        <CheckoutButton />
      </div>
    </div>
  );
}
