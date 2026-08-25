"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, LockKeyhole } from "lucide-react";
import { AssessmentAnswers, assessmentQuestions } from "@/lib/assessment";
import { FunnelBrand } from "@/components/funnel-brand";

type LeadDetails = { firstName: string; email: string; whatsapp: string; linkedin: string };

export function AssessmentFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [leadMode, setLeadMode] = useState(false);
  const [lead, setLead] = useState<LeadDetails>({ firstName: "", email: "", whatsapp: "", linkedin: "" });
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const question = assessmentQuestions[step];
  const selected = answers[question?.id];
  const progress = Math.round(((step + (leadMode ? 1 : 0)) / assessmentQuestions.length) * 100);
  const progressLabel = useMemo(() => `${String(Math.min(step + 1, assessmentQuestions.length)).padStart(2, "0")} / ${assessmentQuestions.length}`, [step]);

  function choose(value: string) {
    setAnswers((current) => ({ ...current, [question.id]: value }));
    setError("");
  }

  function next() {
    if (!selected) {
      setError("Choose the option that best describes you.");
      return;
    }
    if (step === assessmentQuestions.length - 1) setLeadMode(true);
    else setStep((current) => current + 1);
    setError("");
  }

  function previous() {
    if (submitting) return;
    if (leadMode) return setLeadMode(false);
    if (step === 0) return router.push("/");
    setStep((current) => current - 1);
    setError("");
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!lead.firstName.trim() || !lead.email.trim() || !lead.whatsapp.trim()) {
      setError("Add your name, email and WhatsApp number to unlock the result.");
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const attribution = {
      source: params.get("source") || undefined,
      utmSource: params.get("utm_source") || undefined,
      utmMedium: params.get("utm_medium") || undefined,
      utmCampaign: params.get("utm_campaign") || undefined,
      utmContent: params.get("utm_content") || undefined,
      utmTerm: params.get("utm_term") || undefined,
      referrer: document.referrer || undefined,
      landingPath: `${window.location.pathname}${window.location.search}`,
    };

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead, answers, consent, attribution }),
      });
      const result = (await response.json()) as { ok?: boolean; resultToken?: string; result?: { firstName: string; scores: Record<string, number>; band: { label: string; summary: string }; goal?: string }; error?: string };

      if (!response.ok || !result.resultToken || !result.result) throw new Error(result.error || "submission_failed");

      const payload = {
        id: result.resultToken,
        resultToken: result.resultToken,
        createdAt: new Date().toISOString(),
        firstName: result.result.firstName,
        scores: result.result.scores,
        band: result.result.band,
        goal: result.result.goal,
      };
      localStorage.setItem("qaai:last-result", JSON.stringify(payload));
      router.push("/results");
    } catch (submissionError) {
      console.error(submissionError);
      setError("We couldn't save your assessment. Please try again in a moment.");
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f9f8] text-[#082d25]">
      <header className="border-b border-white/15 bg-[#041c17] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <FunnelBrand />
          <button type="button" onClick={previous} className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft size={15} /> {step === 0 && !leadMode ? "Exit" : "Back"}
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
        <div className="border border-[#d8e0dc] bg-white">
          <div className="grid min-h-[640px] md:grid-cols-[1fr_300px]">
            <div className="p-6 md:p-10 lg:p-14">
              <div className="flex items-center justify-between border-b border-[#d8e0dc] pb-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#016b54]">{leadMode ? "Analysis ready" : progressLabel}</span>
                <span className="text-[10px] text-[#6b7770]">{leadMode ? 100 : progress}%</span>
              </div>
              <div className="mt-3 h-1 bg-[#e6ebe8]"><div className="h-1 bg-[#016b54] transition-all" style={{ width: `${leadMode ? 100 : progress}%` }} /></div>

              {!leadMode ? (
                <>
                  <div className="mt-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#016b54]"><span className="h-px w-6 bg-[#016b54]" /> {question.eyebrow}</div>
                  <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.05em]">{question.question}</h1>
                  {question.helper ? <p className="mt-5 max-w-2xl text-sm leading-6 text-[#68736d]">{question.helper}</p> : null}

                  <div className="mt-9 border-t border-[#d8e0dc]">
                    {question.options.map((option, index) => {
                      const active = selected === option.value;
                      return (
                        <button key={option.value} type="button" onClick={() => choose(option.value)} className={`grid min-h-[68px] w-full grid-cols-[42px_1fr_auto] items-center gap-4 border-b border-[#d8e0dc] px-2 text-left transition md:px-4 ${active ? "bg-[#eef3ef]" : "bg-white hover:bg-[#f7f9f7]"}`}>
                          <span className={`grid h-7 w-7 place-items-center text-[10px] font-semibold ${active ? "bg-[#016b54] text-white" : "border border-[#cfd9d4] text-[#6a766f]"}`}>{active ? <Check size={13} /> : String(index + 1).padStart(2, "0")}</span>
                          <span className={`text-sm leading-5 ${active ? "font-semibold text-[#082d25]" : "text-[#506059]"}`}>{option.label}</span>
                          <span className="text-sm text-[#96a19b]">→</span>
                        </button>
                      );
                    })}
                  </div>

                  <label className="mt-5 flex max-w-2xl items-start gap-3 text-xs leading-5 text-[#5f6b65]"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required className="mt-1" />I agree that QA AI Works may store my assessment and contact details to provide my result and relevant follow-up. See the <a className="font-semibold text-[#016b54] underline" href="/privacy">Privacy Policy</a>.</label>

                  <div className="mt-7 flex items-center justify-between gap-4">
                    <span className="text-xs text-rose-600">{error}</span>
                    <button type="button" onClick={next} className="inline-flex items-center bg-[#041c17] px-6 py-4 text-sm font-semibold text-white">
                      {step === assessmentQuestions.length - 1 ? "Analyse my answers" : "Continue"}<ArrowRight className="ml-3" size={15} />
                    </button>
                  </div>
                </>
              ) : (
                <form onSubmit={submitLead}>
                  <div className="mt-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#016b54]"><span className="h-px w-6 bg-[#016b54]" /> Your analysis is ready</div>
                  <h1 className="mt-6 max-w-3xl text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-[1.01] tracking-[-0.055em]">Where should we send your AI QA roadmap?</h1>
                  <p className="mt-5 max-w-2xl text-sm leading-6 text-[#68736d]">Your score is already calculated. Add your details to unlock the category breakdown, biggest gap and personalized 7-day action plan.</p>

                  <div className="mt-9 grid gap-0 border-t border-[#d8e0dc] md:grid-cols-2">
                    {[
                      ["First name", "firstName", "Your name", "text"],
                      ["Email", "email", "you@example.com", "email"],
                      ["WhatsApp number", "whatsapp", "+91 9XXXXXXXXX", "text"],
                      ["LinkedIn — optional", "linkedin", "linkedin.com/in/...", "text"],
                    ].map(([label, key, placeholder, type]) => (
                      <label key={key} className="border-b border-r border-[#d8e0dc] p-4 text-[11px] font-semibold text-[#506059]">
                        {label}
                        <input disabled={submitting} type={type} value={lead[key as keyof LeadDetails]} onChange={(event) => setLead({ ...lead, [key]: event.target.value })} placeholder={placeholder} className="mt-2 block w-full border-0 bg-transparent p-0 text-sm font-normal text-[#082d25] outline-none placeholder:text-[#a1aaa5] disabled:opacity-60" />
                      </label>
                    ))}
                  </div>

                  {error ? <p className="mt-4 text-xs text-rose-600">{error}</p> : null}
                  <button disabled={submitting || !consent} type="submit" className="mt-7 inline-flex items-center bg-[#016b54] px-7 py-4 text-sm font-semibold text-white disabled:cursor-wait disabled:opacity-70">
                    {submitting ? "Saving your assessment…" : "Show my results"} <span className="ml-4">↗</span>
                  </button>
                  <p className="mt-4 flex items-center gap-2 text-[10px] leading-4 text-[#7a857f]"><LockKeyhole size={12}/> We&apos;ll use these details for your assessment and QA AI Works program updates. No spam.</p>
                </form>
              )}
            </div>

            <aside className="hidden border-l border-[#d8e0dc] bg-[#eef3ef] p-7 md:block">
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#016b54]">Diagnostic dimensions</div>
              <div className="mt-7 border-t border-[#cfd9d4]">
                {["QA Foundations", "Automation", "AI Usage", "AI-Assisted Testing", "Agentic Workflows"].map((label, index) => (
                  <div key={label} className="grid grid-cols-[34px_1fr] items-center border-b border-[#cfd9d4] py-4 text-xs text-[#506059]"><span className="text-[10px] text-[#016b54]">0{index + 1}</span>{label}</div>
                ))}
              </div>
              <div className="mt-8 bg-[#041c17] p-5 text-white">
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b9e3d4]">How scoring works</div>
                <p className="mt-4 text-xs leading-5 text-white/65">Your score is based on practical workflow maturity, not years of experience or job title.</p>
              </div>
              {leadMode ? (
                <div className="mt-8">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#016b54]">You&apos;ll unlock</div>
                  <div className="mt-4 space-y-3 text-xs text-[#506059]">
                    {["Overall score /100", "5 category scores", "Strongest capability", "Biggest skill gap", "7-day upgrade roadmap"].map((item) => <div key={item} className="flex gap-2"><Check size={13} className="text-[#016b54]"/>{item}</div>)}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
