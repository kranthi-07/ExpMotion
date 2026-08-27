"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function CheckoutButton({ label = "Buy Vol. 01", productId = "bundle" }: { label?: string, productId?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleCheckout = async () => {
    setStatus("loading");
    setErrorMessage("");

    try {
      // 1. Init checkout
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId })
      });
      const order = await res.json();

      if (!res.ok) throw new Error(order.error || "Failed to create order");

      // 2. We mock the Razorpay modal interaction for local dev
      // In production, we'd inject the Razorpay script and open it here.
      console.log("Mocking Razorpay payment for order:", order.id);
      
      // Simulate user entering credit card and succeeding after 1.5s
      setTimeout(async () => {
        // 3. Verify payment on our server
        const verifyRes = await fetch("/api/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: order.id,
            razorpay_payment_id: "mock_pay_" + Date.now(),
            razorpay_signature: "mock_sig",
            isMock: order.isMock,
            productId,
          })
        });

        const verifyData = await verifyRes.json();

        if (verifyData.success) {
          setStatus("success");
          // Redirect to success page with the secure token
          router.push(`/success?token=${verifyData.token}`);
        } else {
          setStatus("error");
          setErrorMessage(verifyData.error || "Verification failed");
        }
      }, 1500);

    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <button
        onClick={handleCheckout}
        disabled={status === "loading" || status === "success"}
        className="w-full bg-accent text-white font-medium py-3 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-h-[48px] focus:outline-2 focus:outline-accent focus:outline-offset-2 shadow-[0_0_15px_var(--color-accent-glow)]"
      >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : status === "success" ? (
          "Redirecting..."
        ) : (
          label
        )}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm font-medium animate-in fade-in">
          {errorMessage || "Payment failed. Please try again."}
        </p>
      )}
    </div>
  );
}
