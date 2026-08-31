import { MousePointer2, Magnet, Droplets, Layers, Zap, Wand2 } from "lucide-react";

export const EFFECTS_CATALOG = [
  { id: "magic", name: "Magic Button", desc: "Interactive button with continuous border tracing, cursor light tracking, and particle physics explosion on click.", icon: Wand2, color: "text-violet-400", buildTime: "Takes 6 hours to build", isFree: true },
  { id: "cursor", name: "Cursor Spotlight", desc: "A glowing radial gradient that smoothly tracks the user's cursor.", icon: MousePointer2, color: "text-blue-400", buildTime: "Takes 3 hours to build" },
  { id: "magnetic", name: "Magnetic Button", desc: "Spring-physics hover effect that pulls the button towards the cursor.", icon: Magnet, color: "text-purple-400", buildTime: "Takes 4 hours to build" },
  { id: "glass", name: "Liquid Glass", desc: "Draggable, refractive glass card with stunning background blur.", icon: Droplets, color: "text-cyan-400", buildTime: "Takes 2.5 hours to build" },
  { id: "layers", name: "3D Parallax Layers", desc: "Multi-layered depth effect driven by scroll or mouse position.", icon: Layers, color: "text-emerald-400", buildTime: "Takes 5 hours to build" },
  { id: "neon", name: "Neon Border Trace", desc: "An animated glowing beam that continuously traces element borders.", icon: Zap, color: "text-pink-400", buildTime: "Takes 2 hours to build" },
];
