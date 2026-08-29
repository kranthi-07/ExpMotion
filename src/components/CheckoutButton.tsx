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

      if (order.isMock) {
        // Fallback mock flow if no keys are found on the server
        console.log("Mocking Razorpay payment for order:", order.id);
        setTimeout(async () => {
          const verifyRes = await fetch("/api/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: order.id,
              razorpay_payment_id: "mock_pay_" + Date.now(),
              razorpay_signature: "mock_sig",
              isMock: true,
              productId,
            })
          });
          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            setStatus("success");
            router.push(`/success?token=${verifyData.token}`);
          } else {
            setStatus("error");
            setErrorMessage(verifyData.error || "Verification failed");
          }
        }, 1500);
        return;
      }

      // Real Razorpay integration
      const loadScript = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });
      };

      const isLoaded = await loadScript();
      if (!isLoaded) throw new Error("Razorpay SDK failed to load");

      const options = {
        key: order.keyId, // Fetched securely from the backend API
        amount: order.amount,
        currency: order.currency,
        name: "EXP MOTION",
        description: `Purchase ${label}`,
        order_id: order.id,
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                isMock: false,
                productId,
              })
            });
            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              setStatus("success");
              router.push(`/success?token=${verifyData.token}`);
            } else {
              setStatus("error");
              setErrorMessage(verifyData.error || "Verification failed");
            }
          } catch (err: any) {
            setStatus("error");
            setErrorMessage(err.message || "Verification failed");
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: ""
        },
        theme: {
          color: "#3b82f6" // matches accent color
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", function (response: any) {
        setStatus("error");
        setErrorMessage(response.error.description);
      });
      rzp.open();

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
        className="w-full cursor-pointer bg-accent text-white font-medium py-3 px-4 rounded-full hover:bg-blue-600 hover:shadow-[0_0_20px_var(--color-accent-glow)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-h-[48px] focus:outline-2 focus:outline-accent focus:outline-offset-2 shadow-[0_0_15px_var(--color-accent-glow)]"
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
