"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("");
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    if (!response.ok) { setError(response.status === 401 ? "Incorrect password." : "Login is temporarily unavailable."); setLoading(false); return; }
    router.replace("/admin/results"); router.refresh();
  }

  return <form onSubmit={submit} className="mt-8 space-y-5">
    <div><label htmlFor="password" className="mb-2 block text-xs font-semibold uppercase tracking-[.14em] text-[#53665f]">Admin password</label><input id="password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="w-full border border-[#cbd8d2] bg-white px-4 py-4 outline-none focus:border-[#006b54]" /></div>
    {error ? <p role="alert" className="text-sm text-red-700">{error}</p> : null}
    <button type="submit" disabled={loading} className="w-full bg-[#006b54] px-5 py-4 text-sm font-semibold text-white disabled:opacity-60">{loading ? "Signing in…" : "View assessment results"}</button>
  </form>;
}
