"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = { className?: string; label?: string };

export function LabRegisterButton({ className = "", label = "Reserve my seat" }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function register() {
    const raw = localStorage.getItem("qaai:last-result");
    if (!raw) {
      router.push("/assessment?source=lab");
      return;
    }

    try {
      const parsed = JSON.parse(raw) as { resultToken?: string };
      if (!parsed.resultToken) {
        router.push("/assessment?source=lab");
        return;
      }

      setStatus("saving");
      const response = await fetch("/api/lab/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resultToken: parsed.resultToken }),
      });
      if (!response.ok) throw new Error("registration_failed");

      localStorage.setItem("qaai:lab-registered", "true");
      setStatus("saved");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div>
      <button type="button" onClick={register} disabled={status === "saving" || status === "saved"} className={className}>
        {status === "saving" ? "Reserving…" : status === "saved" ? "Seat reserved ✓" : label}
        {status === "idle" ? <span className="ml-4">↗</span> : null}
      </button>
      {status === "saved" ? <p className="mt-3 text-xs opacity-75">You&apos;re registered. We&apos;ll use the contact details from your assessment for session updates.</p> : null}
      {status === "error" ? <p className="mt-3 text-xs text-red-200">Couldn&apos;t register right now. Please try again.</p> : null}
    </div>
  );
}
