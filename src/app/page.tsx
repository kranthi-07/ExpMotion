import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StorefrontGrid } from "@/components/StorefrontGrid";
import { PricingTiers } from "@/components/PricingTiers";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full relative">
      <Header />
      <PageTransition className="w-full flex flex-col items-center">
        <Hero />
        <StorefrontGrid />
        <PricingTiers />
        <FAQ />
      </PageTransition>
      <Footer />
    </main>
  );
}
