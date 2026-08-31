import { Hero } from "@/components/Hero";
import { StorefrontGrid } from "@/components/StorefrontGrid";
import { PricingTiers } from "@/components/PricingTiers";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full relative">
      <div className="w-full flex flex-col items-center">
        <Hero />
        <StorefrontGrid />
        <PricingTiers />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
