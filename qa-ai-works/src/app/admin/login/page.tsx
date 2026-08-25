import type { Metadata } from "next";
import Image from "next/image";
import { AdminLoginForm } from "@/components/admin-login-form";

export const metadata: Metadata = { title: "Results Login", robots: { index: false, follow: false, noarchive: true } };

export default function AdminLoginPage() {
  return <main className="grid min-h-screen place-items-center bg-[#041c17] px-5 py-12 text-[#082d25]"><section className="w-full max-w-md bg-[#f8f9f8] p-8 shadow-2xl md:p-10"><Image src="/qa-ai-works-logo-clear.png" alt="QA AI Works" width={2108} height={746} className="h-auto w-[190px]" priority /><div className="mt-9 text-[10px] font-semibold uppercase tracking-[.18em] text-[#006b54]">Private dashboard</div><h1 className="mt-4 text-4xl font-semibold tracking-[-.045em]">Assessment results</h1><p className="mt-4 text-sm leading-6 text-[#53665f]">Sign in to view assessment contacts, readiness scores and programme interest.</p><AdminLoginForm /></section></main>;
}
