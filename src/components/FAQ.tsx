export function FAQ() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <div className="glass-panel p-8">
          <h3 className="text-xl font-bold text-white mb-3">
            "I have AI. Why shouldn't I just prompt ChatGPT to build these?"
          </h3>
          <p className="text-text-secondary leading-relaxed">
            AI is incredible for logic and boilerplate, but it struggles massively with high-end, bespoke physics and complex visual mathematics (like Framer Motion springs, multi-layered parallax, or continuous math-based svg tracing). You could spend 4 hours arguing with an AI to tweak the spring damping physics, or you can spend ₹99 to instantly copy-paste a production-ready, highly polished component and move on to shipping your core product. Your time is worth more than ₹99.
          </p>
        </div>
      </div>
    </div>
  );
}
