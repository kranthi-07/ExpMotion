import { notFound } from "next/navigation";
import { EFFECTS_CATALOG } from "@/lib/data";
import { MagicButtonDemo } from "@/components/effects/MagicButtonDemo";
import { CursorSpotlightDemo } from "@/components/effects/CursorSpotlightDemo";
import { MagneticButtonDemo } from "@/components/effects/MagneticButtonDemo";
import { LiquidGlassDemo } from "@/components/effects/LiquidGlassDemo";
import { ParallaxLayersDemo } from "@/components/effects/ParallaxLayersDemo";
import { NeonBorderDemo } from "@/components/effects/NeonBorderDemo";
import { CheckoutButton } from "@/components/CheckoutButton";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Clock } from "lucide-react";

export default async function EffectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const effect = EFFECTS_CATALOG.find((e) => e.id === resolvedParams.id);

  if (!effect) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center w-full relative">
      
      {/* Background Grid */}
      <div className="bg-grid" />

      <div className="w-full max-w-6xl mx-auto px-4 pt-32 pb-24 flex flex-col gap-8">
        <Link href="/#store" className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors w-fit">
          <ArrowLeft size={16} /> Back to Store
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Immersive Canvas */}
          <div className="flex-1 min-h-[600px] glass-panel p-2 relative overflow-hidden flex items-center justify-center">
            {effect.id === "magic" && <MagicButtonDemo />}
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
              
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded text-white flex items-center gap-1">⚛️ React (Next.js)</span>
                <span className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded text-white flex items-center gap-1">⚡ HTML / CSS / JS</span>
                <span className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded text-white flex items-center gap-1">🎨 Tailwind CSS</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg mt-2">
                <Clock size={16} />
                <span className="font-semibold">{effect.buildTime}</span>
              </div>
              
              {effect.isFree ? (
                <div className="mt-8 border-t border-border pt-8 flex flex-col gap-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-text-secondary uppercase tracking-wider">Open Source</span>
                    <span className="text-2xl font-bold text-green-400">FREE</span>
                  </div>
                  <a 
                    href={`/api/download-free?id=${effect.id}`}
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center"
                  >
                    Download Source ZIP
                  </a>
                  <p className="text-xs text-center text-text-secondary mt-2">100% free for commercial use</p>
                </div>
              ) : (
                <div className="mt-8 border-t border-border pt-8 flex flex-col gap-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-text-secondary uppercase tracking-wider">Single License</span>
                    <span className="text-2xl font-bold">₹99</span>
                  </div>
                  <CheckoutButton label="Buy Component" productId="single" effectId={effect.id} />
                  <p className="text-xs text-center text-text-secondary mt-2">Included in Starter Bundle</p>
                  
                  {/* Guarantee */}
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3">
                    <ShieldCheck size={20} className="text-green-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-text-secondary leading-relaxed">
                      <strong className="text-white block mb-1">100% Refund Guarantee</strong>
                      If you can't get this working in your React project, email <a href="mailto:expstudio26@gmail.com" className="text-accent hover:underline">expstudio26@gmail.com</a> for a full refund.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
