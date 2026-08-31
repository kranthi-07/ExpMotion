import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full relative pt-32">
      <div className="bg-grid" />
      <PageTransition className="w-full max-w-3xl mx-auto px-4 pb-24 flex flex-col gap-8">
        <div className="glass-panel p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="flex flex-col gap-6 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. License and Usage</h2>
              <p>By purchasing a component or bundle from EXP MOTION, you are granted a non-exclusive, non-transferable license to use the React source code in your personal or commercial projects. You may modify the code to fit your needs.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Restrictions</h2>
              <p>You are strictly prohibited from reselling, redistributing, or sub-licensing the raw source code of these components as your own standalone UI library or marketplace asset.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Refunds</h2>
              <p>We offer a 100% money-back guarantee if you are unable to get the code working in your React/Next.js environment. To request a refund, you must contact our support email within 14 days of purchase.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Disclaimer</h2>
              <p>The components are provided "as is" without warranty of any kind. We are not liable for any damages or issues arising from the use of our code in your production applications.</p>
            </section>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </main>
  );
}
