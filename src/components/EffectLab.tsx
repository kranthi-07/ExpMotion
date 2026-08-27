"use client";

import { useState } from "react";
import { CursorSpotlightDemo } from "./effects/CursorSpotlightDemo";
import { MagneticButtonDemo } from "./effects/MagneticButtonDemo";
import { LiquidGlassDemo } from "./effects/LiquidGlassDemo";
import { PitchBlock } from "./PitchBlock";

const EFFECTS = [
  { id: "cursor", name: "Cursor Spotlight" },
  { id: "magnetic", name: "Magnetic Button" },
  { id: "glass", name: "Liquid Glass" },
];

export function EffectLab() {
  const [activeId, setActiveId] = useState(EFFECTS[0].id);

  return (
    <div className="w-full flex flex-col gap-16">
      <div className="flex flex-col md:flex-row gap-8 w-full min-h-[500px]">
        {/* Left: Selector List */}
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          {EFFECTS.map((effect) => {
            const isActive = activeId === effect.id;
            return (
              <button
                key={effect.id}
                onClick={() => setActiveId(effect.id)}
                className={`text-left px-6 py-4 transition-colors duration-300 border-l-2 focus:outline-2 focus:outline-accent focus:outline-offset-2 ${
                  isActive
                    ? "border-accent bg-surface/50 text-text-primary"
                    : "border-border text-text-secondary hover:text-text-primary hover:bg-surface/30"
                }`}
              >
                <span className="font-mono text-sm tracking-wider uppercase">
                  {effect.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Interactive Canvas */}
        <div className="w-full md:w-2/3 brutalist-panel relative overflow-hidden flex items-center justify-center bg-surface">
          {activeId === "cursor" && <CursorSpotlightDemo />}
          {activeId === "magnetic" && <MagneticButtonDemo />}
          {activeId === "glass" && <LiquidGlassDemo />}
        </div>
      </div>

      <PitchBlock />
    </div>
  );
}
