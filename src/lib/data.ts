import { MousePointer2, Magnet, Droplets, Layers, Zap } from "lucide-react";

export const EFFECTS_CATALOG = [
  { id: "cursor", name: "Cursor Spotlight", desc: "A glowing radial gradient that smoothly tracks the user's cursor.", icon: MousePointer2, color: "text-blue-400" },
  { id: "magnetic", name: "Magnetic Button", desc: "Spring-physics hover effect that pulls the button towards the cursor.", icon: Magnet, color: "text-purple-400" },
  { id: "glass", name: "Liquid Glass", desc: "Draggable, refractive glass card with stunning background blur.", icon: Droplets, color: "text-cyan-400" },
  { id: "layers", name: "3D Parallax Layers", desc: "Multi-layered depth effect driven by scroll or mouse position.", icon: Layers, color: "text-emerald-400" },
  { id: "neon", name: "Neon Border Trace", desc: "An animated glowing beam that continuously traces element borders.", icon: Zap, color: "text-pink-400" },
];
