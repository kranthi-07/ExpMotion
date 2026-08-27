import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { EFFECTS_CATALOG } from "@/lib/data";
import { CursorSpotlightDemo } from "@/components/effects/CursorSpotlightDemo";
import { MagneticButtonDemo } from "@/components/effects/MagneticButtonDemo";
import { LiquidGlassDemo } from "@/components/effects/LiquidGlassDemo";
import { ParallaxLayersDemo } from "@/components/effects/ParallaxLayersDemo";
import { NeonBorderDemo } from "@/components/effects/NeonBorderDemo";
import { CheckoutButton } from "@/components/CheckoutButton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EffectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const effect = EFFECTS_CATALOG.find((e) => e.id === resolvedParams.id);

  if (!effect) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center w-full relative">
      <Header />
      
      {/* Background Grid */}
      <div className="bg-grid" />

      <div className="w-full max-w-6xl mx-auto px-4 pt-32 pb-24 flex flex-col gap-8">
        <Link href="/#store" className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors w-fit">
          <ArrowLeft size={16} /> Back to Store
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Immersive Canvas */}
          <div className="flex-1 min-h-[600px] glass-panel p-2 relative overflow-hidden flex items-center justify-center">
            {effect.id === "cursor" && <CursorSpotlightDemo />}
            {effect.id === "magnetic" && <MagneticButtonDemo />}
            {effect.id === "glass" && <LiquidGlassDemo />}
            {effect.id === "layers" && <ParallaxLayersDemo />}
            {effect.id === "neon" && <NeonBorderDemo />}
          </div>

          {/* Details Sidebar */}
          <div className="w-full lg:w-96 flex flex-col gap-6">
            <div className="glass-panel p-8 flex flex-col gap-4">
              <h1 className="text-3xl font-bold">{effect.name}</h1>
              <p className="text-text-secondary leading-relaxed">{effect.desc}</p>
              
              <div className="mt-8 border-t border-border pt-8 flex flex-col gap-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-text-secondary uppercase tracking-wider">Single License</span>
                  <span className="text-2xl font-bold">₹99</span>
                </div>
                <CheckoutButton label="Buy Component" productId="single" />
                <p className="text-xs text-center text-text-secondary mt-2">Included in Starter Bundle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
