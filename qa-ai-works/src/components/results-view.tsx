"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, RefreshCcw } from "lucide-react";
import { AssessmentScores, Category, categoryLabels, getRoadmap } from "@/lib/assessment";
import { FunnelBrand } from "@/components/funnel-brand";

type StoredResult = {
  id: string;
  resultToken: string;
  createdAt: string;
  scores: AssessmentScores;
  band: { label: string; summary: string };
  firstName: string;
  goal?: string;
};

export function ResultsView() {
  const [result, setResult] = useState<StoredResult | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const stored = localStorage.getItem("qaai:last-result");
      if (stored) {
        try { setResult(JSON.parse(stored) as StoredResult); } catch { setResult(null); }
      }
      setLoaded(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const ordered = useMemo(() => {
    if (!result) return [];
    return (Object.keys(categoryLabels) as Category[])
      .map((category) => ({ category, score: result.scores[category] }))
      .sort((a, b) => b.score - a.score);
  }, [result]);

  if (!loaded) return <main className="grid min-h-screen place-items-center bg-[#f8f9f8] text-sm text-[#66736d]">Preparing your diagnostic…</main>;

  if (!result) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f8f9f8] px-5 text-[#082d25]">
        <div className="max-w-xl border border-[#d8e0dc] bg-white p-8 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#016b54]">AI QA Readiness</div>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">No assessment result found.</h1>
          <p className="mt-4 text-sm leading-6 text-[#66736d]">Complete the readiness diagnostic first and your result will appear here.</p>
          <Link href="/assessment" className="mt-7 inline-flex bg-[#041c17] px-6 py-4 text-sm font-semibold text-white">Start assessment <ArrowRight className="ml-3" size={16}/></Link>
        </div>
      </main>
    );
  }

  const strongest = ordered[0];
  const weakest = ordered[ordered.length - 1];
  const roadmap = getRoadmap(result.scores, result.goal);

  return (
    <main className="min-h-screen bg-[#f8f9f8] text-[#082d25]">
      <header className="border-b border-white/15 bg-[#041c17] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <FunnelBrand />
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b9e3d4]">Diagnostic / {result.id.slice(0, 8).toUpperCase()}</span>
        </div>
      </header>

      <section className="bg-[#041c17] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[300px_1fr] lg:items-center lg:px-8 lg:py-20">
          <div className="border border-white/18 bg-[#082a22] p-7 text-center">
            <div className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#b9e3d4]">AI QA Readiness</div>
            <div className="mt-7 text-7xl font-medium tracking-[-0.08em]">{result.scores.total}</div>
            <div className="mt-1 text-xs text-white/45">/100</div>
            <div className="mt-7 border-t border-white/15 pt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b9e3d4]">{result.band.label}</div>
          </div>
          <div>
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b9e3d4]"><span className="h-px w-6 bg-[#b9e3d4]" /> Hello {result.firstName}</div>
            <h1 className="mt-6 max-w-4xl text-5xl font-normal leading-[1] tracking-[-0.055em] md:text-7xl">Your QA workflow is <span className="text-[#b9e3d4]">{result.band.label.toLowerCase()}.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/67">{result.band.summary}</p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/65">
              <span>Strongest: <strong className="font-medium text-white">{categoryLabels[strongest.category]}</strong></span>
              <span>Biggest gap: <strong className="font-medium text-white">{categoryLabels[weakest.category]}</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#016b54]"><span className="h-px w-6 bg-[#016b54]" /> Category breakdown</div>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Where your workflow stands today.</h2>
            </div>
            <Link href="/assessment" className="inline-flex items-center text-sm font-semibold text-[#016b54]"><RefreshCcw className="mr-2" size={14}/> Retake assessment</Link>
          </div>

          <div className="mt-12 grid border-y border-[#d8e0dc] md:grid-cols-5">
            {(Object.keys(categoryLabels) as Category[]).map((category) => {
              const score = result.scores[category];
              return (
                <div key={category} className="min-h-[200px] border-b border-[#d8e0dc] p-5 md:border-b-0 md:border-r">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#016b54]">{categoryLabels[category]}</div>
                  <div className="mt-8 text-4xl font-medium tracking-[-0.05em]">{score}</div>
                  <div className="mt-5 h-1 bg-[#e4eae7]"><div className="h-1 bg-[#016b54]" style={{ width: `${score}%` }} /></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3ef]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="border-t border-[#cfd9d4] pt-6">
            <div className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#016b54]">Your strongest area</div>
            <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{categoryLabels[strongest.category]}</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#5f6b65]">This is currently the most mature part of your QA workflow. Keep using it as the foundation for your AI transition.</p>
          </div>
          <div className="border-t border-[#cfd9d4] pt-6">
            <div className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#016b54]">Your biggest opportunity</div>
            <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">{categoryLabels[weakest.category]}</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#5f6b65]">Improving this area is likely to create the biggest change in how AI-ready your overall Quality Engineering workflow feels.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#016b54]"><span className="h-px w-6 bg-[#016b54]" /> Your 7-day upgrade plan</div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Turn the score into action.</h2>
          <div className="mt-10 border-t border-[#d8e0dc]">
            {roadmap.map((item, index) => (
              <div key={item} className="grid gap-4 border-b border-[#d8e0dc] py-5 md:grid-cols-[70px_1fr]">
                <span className="text-[11px] font-semibold text-[#016b54]">0{index + 1}</span>
                <p className="m-0 max-w-4xl text-sm leading-6 text-[#5d6963]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#016b54] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end lg:px-8 lg:py-24">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"><span className="h-px w-6 bg-white/65" /> Next step / live implementation</div>
            <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] md:text-6xl">Want to see an AI-enabled QA workflow built live?</h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/72">Join the AI QA Lab and watch a traditional testing workflow move from requirement analysis to AI-assisted design, automation, debugging and quality intelligence.</p>
          </div>
          <Link href="/ai-qa-lab" className="inline-flex bg-white px-7 py-4 text-sm font-semibold text-[#082d25]">Reserve my seat <span className="ml-4">↗</span></Link>
        </div>
      </section>

      <footer className="bg-[#021610] text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs md:flex-row md:items-center md:justify-between lg:px-8"><span>QA AI Works</span><span className="inline-flex items-center gap-2"><Check size={12}/> Diagnostic complete</span></div>
      </footer>
    </main>
  );
}
