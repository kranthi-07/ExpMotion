"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import Link from "next/link";
import { Download, CheckCircle2 } from "lucide-react";

import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    if (!token) return;
    setDownloading(true);
    // Trigger download via the API
    window.location.href = `/api/download?token=${token}`;
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full px-4 text-center mt-20">
      <div className="glass-panel p-12 flex flex-col items-center max-w-lg w-full gap-6 relative overflow-hidden">
        {/* Subtle glow effect behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 blur-[100px] rounded-full pointer-events-none" />

        <CheckCircle2 size={64} className="text-green-400 mb-4 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
        
        <h1 className="text-3xl font-bold tracking-tight text-white">Payment Successful</h1>
        <p className="text-text-secondary">
          Welcome to EXP MOTION Vol. 01. Your source code is ready.
        </p>

        {!token ? (
          <div className="text-red-400 text-sm mt-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
            Missing secure download token. If you just purchased this, please check your email for the backup link.
          </div>
        ) : (
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="mt-6 w-full bg-accent text-white font-medium py-4 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_0_20px_var(--color-accent-glow)] text-lg"
          >
            <Download size={20} />
            {downloading ? "Downloading..." : "Download Assets (.zip)"}
          </button>
        )}

        <div className="mt-8 text-xs text-text-secondary border-t border-border pt-6 w-full">
          <p>A receipt has been sent to your email.</p>
          <p className="mt-1">Need help? <a href="#" className="text-accent hover:underline">Contact support</a></p>
        </div>
      </div>

      <Link href="/" className="mt-8 text-text-secondary hover:text-white transition-colors">
        Return to Storefront
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full relative">
      <Header />
      <div className="bg-grid" />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center mt-20 text-white">Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
