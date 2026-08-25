import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { LabRegisterButton } from "@/components/lab-register-button";
import { createPageMetadata } from "@/lib/metadata";
import { FunnelBrand } from "@/components/funnel-brand";

export const metadata = createPageMetadata({ title: "AI QA Lab", description: "Join a practical QA AI Works session demonstrating an AI-assisted Quality Engineering workflow from requirement analysis to release-quality insight.", path: "/ai-qa-lab" });

const steps = [
  "Requirement analysis",
  "Test scenario generation",
  "Edge-case discovery",
  "Test-data creation",
  "Automation assistance",
  "Debugging",
  "Failure analysis",
  "Release-quality summary",
];

export default function LabPage() {
  return (
    <main className="min-h-screen bg-[#f8f9f8] text-[#082d25]">
      <header className="border-b border-white/15 bg-[#041c17] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <FunnelBrand />
          <div className="flex items-center gap-7 text-sm">
            <Link href="/assessment" className="hidden text-white/75 hover:text-white md:inline">Readiness Assessment</Link>
            <Link href="/accelerator" className="border border-white/70 px-5 py-3 font-semibold">Explore Program <span className="ml-3">↗</span></Link>
          </div>
        </div>
      </header>

      <section className="bg-[#041c17] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b9e3d4]">
              <span className="h-px w-6 bg-[#b9e3d4]" /> Live implementation session
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-medium leading-[1.02] tracking-[-0.055em] md:text-7xl">
              Build an AI-assisted testing workflow live.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              A practical 90-minute session for QA professionals who want to see where AI actually fits into Quality Engineering work — from a raw requirement to a reviewable release-quality output.
            </p>
            <div className="mt-9 flex flex-wrap items-start gap-4">
              <LabRegisterButton className="inline-flex items-center bg-white px-6 py-4 text-sm font-semibold text-[#082d25] disabled:opacity-70" />
              <Link href="/accelerator" className="inline-flex items-center px-2 py-4 text-sm font-semibold text-white">See the full program <ArrowRight className="ml-2" size={16} /></Link>
            </div>
          </div>

          <div className="border border-white/18 bg-[#082a22] p-6 md:p-8">
            <div className="border-b border-white/15 pb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b9e3d4]">The live workflow</div>
            <div className="divide-y divide-white/12">
              {steps.map((step, i) => (
                <div className="grid grid-cols-[38px_1fr_auto] items-center gap-3 py-4" key={step}>
                  <span className="text-xs text-[#b9e3d4]">0{i + 1}</span>
                  <span className="text-sm text-white/86">{step}</span>
                  <ChevronRight size={15} className="text-white/35" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#016b54]"><span className="h-px w-6 bg-[#016b54]" /> What you will see</div>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-5xl">Not another AI webinar.</h2>
            </div>
            <div className="grid gap-0 border-y border-[#d8e0dc] md:grid-cols-2">
              {["One realistic QA requirement","Live prompt and workflow design","AI-assisted automation and debugging","A complete quality output you can inspect"].map((item) => (
                <div key={item} className="flex min-h-28 items-start gap-3 border-b border-[#d8e0dc] p-5 md:border-r">
                  <Check size={17} className="mt-0.5 text-[#016b54]" />
                  <span className="text-sm leading-6 text-[#3f514a]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="bg-[#016b54] text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <div className="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"><span className="h-px w-6 bg-white/60" /> Reserve your seat</div>
          <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-6xl">See the workflow before you learn the system.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75">If you have already completed the readiness assessment, one click reserves your AI QA Lab seat. If not, we&apos;ll take you through the diagnostic first.</p>
          <div className="mt-8 flex justify-center">
            <LabRegisterButton className="inline-flex items-center bg-white px-7 py-4 text-sm font-semibold text-[#082d25] disabled:opacity-70" label="Reserve my AI QA Lab seat" />
          </div>
        </div>
      </section>
    </main>
  );
}
