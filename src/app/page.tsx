import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StorefrontGrid } from "@/components/StorefrontGrid";
import { PricingTiers } from "@/components/PricingTiers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full relative">
      <Header />
      <Hero />
      <StorefrontGrid />
      <PricingTiers />
      
      <footer className="w-full text-center py-12 text-text-secondary border-t border-border mt-24 text-sm">
        &copy; {new Date().getFullYear()} EXP MOTION. All rights reserved.
      </footer>
    </main>
  );
}
