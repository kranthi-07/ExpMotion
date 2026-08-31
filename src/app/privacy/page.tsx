import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full relative pt-32">
      <div className="bg-grid" />
      <PageTransition className="w-full max-w-3xl mx-auto px-4 pb-24 flex flex-col gap-8">
        <div className="glass-panel p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="flex flex-col gap-6 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
              <p>We collect minimal information necessary to process your transactions and provide customer support. When you make a purchase, payment processing is handled securely by Razorpay. We do not store or have access to your raw credit card numbers or bank details.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Information</h2>
              <p>Your email address (if provided during checkout) is used strictly for sending purchase receipts, download links, and responding to your customer support inquiries. We do not sell your data to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Cookies and Tracking</h2>
              <p>We use essential cookies to maintain your session during the checkout process. We may also use basic analytics to understand website traffic, but this data is anonymized and not linked to your personal identity.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or the data we hold, please contact us at expstudio26@gmail.com.</p>
            </section>
          </div>
        </div>
      </PageTransition>
      <Footer />
    </main>
  );
}
