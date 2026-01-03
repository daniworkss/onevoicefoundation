"use client";

import { useState } from "react";
import { SlideUp } from "@/components/animation/MotionWrappers";

const suggestedAmounts = [25, 50, 100];

export default function StripeZellePanel() {
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const effectiveAmount = customAmount ? Number(customAmount) || 0 : amount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!effectiveAmount || effectiveAmount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: effectiveAmount }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Unable to start checkout");
      }

      const { url } = await res.json();

      if (!url) {
        throw new Error("Unable to get checkout URL from Stripe.");
      }

      // Modern approach: simply redirect the browser to the Checkout Session URL
      window.location.href = url;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong starting checkout.");
      setIsLoading(false);
    }
  };

  return (
    <SlideUp className="space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[var(--ov-border)]">
        <h3 className="text-base font-semibold text-neutral-900">Donate with Card (Stripe)</h3>
        <p className="mt-1 text-xs text-neutral-600 font-dm-sans">
          Secure card payments powered by Stripe. You can choose a suggested amount or enter your own.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 font-dm-sans">
              Suggested Amounts (USD)
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {suggestedAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setAmount(value);
                    setCustomAmount("");
                  }}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium font-dm-sans border transition-colors ${
                    !customAmount && amount === value
                      ? "border-[var(--ov-secondary-green)] bg-[var(--ov-secondary-green-soft)] text-[var(--ov-secondary-green)]"
                      : "border-neutral-200 text-neutral-700 hover:border-[var(--ov-secondary-green)] hover:text-[var(--ov-secondary-green)]"
                  }`}
                >
                  ${value}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 font-dm-sans">
              Custom Amount (USD)
            </label>
            <div className="mt-2 flex items-center gap-2">
              <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-500 font-dm-sans">
                $
              </span>
              <input
                type="number"
                min={1}
                step={1}
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="flex-1 rounded-lg border border-[var(--ov-border)] bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 focus:border-[var(--ov-secondary-green)] focus:ring-1 focus:ring-[var(--ov-secondary-green)] font-dm-sans"
                placeholder={amount.toString()}
              />
            </div>
          </div>

          {error && <p className="text-xs text-red-500 font-dm-sans">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-1 inline-flex items-center justify-center rounded-full bg-[var(--ov-secondary-green)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black transition-colors font-dm-sans disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Redirecting..." : `Donate ${effectiveAmount || amount} USD`}
          </button>
        </form>
      </div>

      {/* <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-[var(--ov-border)]">
        <h3 className="text-base font-semibold text-neutral-900">Donate via Zelle</h3>
        <p className="mt-2 text-sm text-neutral-600 font-dm-sans">
          If you prefer, you can send your donation via Zelle. Please use the details below and include
          "One Voice Donation" in the memo.
        </p>
        <div className="mt-3 rounded-xl bg-white px-4 py-3 text-sm text-neutral-800 font-dm-sans border border-[var(--ov-border)]">
          <p className="font-semibold">Zelle Number</p>
          <p className="mt-1 text-neutral-700">(555) 123-4567</p>
          <p className="mt-2 text-xs text-neutral-500">
            Replace this with your organization&apos;s actual Zelle phone number or email in production.
          </p>
        </div>
      </div> */}
    </SlideUp>
  );
}
