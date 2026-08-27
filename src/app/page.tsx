import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EffectLab } from "@/components/EffectLab";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Header />
      
      {/* ABOVE THE FOLD */}
      <div className="w-full flex flex-col items-center justify-center flex-1 min-h-[85vh] px-6">
        <Hero />
      </div>

      {/* BELOW THE FOLD */}
      <div id="effect-lab" className="w-full max-w-6xl px-6 py-24 border-t brutalist-border flex flex-col items-center gap-16">
        <div className="w-full">
          <h2 className="text-3xl font-medium tracking-tight mb-2">The Effect Lab</h2>
          <p className="text-text-secondary text-lg">Interact with the components below.</p>
        </div>
        
        <EffectLab />
      </div>
    </main>
  );
}
