"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = { className?: string; label?: string };

export function CohortApplyButton({ className = "", label = "Join the founding cohort" }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function apply() {
    const raw = localStorage.getItem("qaai:last-result");
    if (!raw) {
      router.push("/assessment?source=accelerator");
      return;
    }

    try {
      const parsed = JSON.parse(raw) as { resultToken?: string };
      if (!parsed.resultToken) {
        router.push("/assessment?source=accelerator");
        return;
      }

      setStatus("saving");
      const response = await fetch("/api/cohort/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resultToken: parsed.resultToken }),
      });
      if (!response.ok) throw new Error("application_failed");

      localStorage.setItem("qaai:cohort-applied", "true");
      setStatus("saved");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div>
      <button type="button" onClick={apply} disabled={status === "saving" || status === "saved"} className={className}>
        {status === "saving" ? "Saving your seat…" : status === "saved" ? "Application received ✓" : label}
        {status === "idle" ? <span className="ml-4">↗</span> : null}
      </button>
      {status === "saved" ? <p className="mt-3 text-xs text-white/60">Your interest is recorded. We&apos;ll send the payment step to the WhatsApp number from your assessment.</p> : null}
      {status === "error" ? <p className="mt-3 text-xs text-red-200">Couldn&apos;t save your application. Please try again.</p> : null}
    </div>
  );
}
