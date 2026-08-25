import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { campaignConfig } from "@/lib/config";
import { createPageMetadata } from "@/lib/metadata";
import { FunnelBrand } from "@/components/funnel-brand";

export const metadata = createPageMetadata({ title: "AI QA Readiness Assessment", description: "Take the free AI QA Readiness Assessment to measure your QA foundations, automation, AI-assisted testing and agentic workflow capability.", path: "/ai-qa-readiness" });

const evolution = ["Manual Testing", "Automation", "AI-Assisted Testing", "Agentic Quality Engineering"];
const capabilities = [
  ["01", "Requirement intelligence", "Analyse ambiguity, risk and dependencies before test design begins."],
  ["02", "AI-assisted test design", "Turn requirements into structured scenarios, edge cases and test data."],
  ["03", "Automation assistance", "Use AI across code generation, refactoring, debugging and investigation."],
  ["04", "Quality intelligence", "Summarise failures, logs and release signals into reviewable quality insight."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9f8] text-[#082d25]">
      <header className="border-b border-[#d8e0dc] bg-white text-[#082d25]">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-3.5 lg:px-8">
          <FunnelBrand tone="light" />
          <div className="ml-auto flex items-center gap-4 lg:gap-8">
            <nav className="hidden items-center gap-7 text-[13px] font-medium text-[#40534c] md:flex">
              <a href="#readiness">Readiness</a>
              <a href="#why-now">Why now</a>
              <Link href="/ai-qa-lab">AI QA Lab</Link>
              <Link href="/accelerator">Program</Link>
            </nav>
            <Link href="/assessment" className="bg-[#016b54] px-4 py-3 text-xs font-semibold !text-white sm:px-5 sm:text-sm">
              Check Readiness <span className="ml-3">↗</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-[#041c17] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8 lg:py-14">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b9e3d4]">
              <span className="h-px w-6 bg-[#b9e3d4]" /> AI QA Readiness
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-normal leading-[.98] tracking-[-0.06em] md:text-7xl lg:text-[76px]">
              The QA role is changing.
              <span className="block text-[#b9e3d4]">Are you ready?</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              AI is changing how requirements are analysed, tests are designed, automation is built, failures are investigated and quality decisions are made.
            </p>
            <p className="mt-2 text-base text-white/58">Find out how prepared your current QA workflow is.</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link href="/assessment" className="bg-[#018c70] px-7 py-4 text-sm font-semibold text-white">
                Check my AI QA readiness <span className="ml-4">↗</span>
              </Link>
              <Link href="/accelerator" className="px-3 py-4 text-sm font-semibold text-white">
                Explore the program <ArrowRight className="ml-2 inline" size={16} />
              </Link>
            </div>
            <div className="mt-7 border-t border-white/18 pt-4 text-[11px] text-white/55">
              3 minutes&nbsp;&nbsp;·&nbsp;&nbsp;Personalized score&nbsp;&nbsp;·&nbsp;&nbsp;Free
            </div>
          </div>

          <div className="border border-white/18 bg-[#082a22]">
            <div className="border-b border-white/15 px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b9e3d4]">
              Quality Engineering evolution
            </div>
            <div className="divide-y divide-white/12">
              {evolution.map((item, index) => (
                <div key={item} className={`grid min-h-[88px] grid-cols-[48px_1fr_auto] items-center gap-4 px-6 ${index === evolution.length - 1 ? "bg-[#016b54]" : ""}`}>
                  <span className="text-xs text-[#b9e3d4]">0{index + 1}</span>
                  <div>
                    <div className="text-lg font-medium tracking-[-0.025em]">{item}</div>
                    <div className="mt-1 text-xs text-white/50">{index === 0 ? "Repeatable manual checks" : index === 1 ? "Frameworks and reusable scripts" : index === 2 ? "AI across design and debugging" : "Connected intelligent QA workflows"}</div>
                  </div>
                  <ChevronRight size={16} className="text-white/35" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl items-center gap-6 border-t border-white/16 px-6 py-5 text-xs text-white/70 lg:px-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b9e3d4]">Our point of view</span>
          <strong className="font-medium text-white">QA must evolve when AI becomes part of the engineering workflow.</strong>
        </div>
      </section>

      <section id="why-now" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#016b54]"><span className="h-px w-6 bg-[#016b54]" /> The shift</div>
              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.05em] md:text-6xl">QA isn&apos;t disappearing. The workflow is evolving.</h2>
            </div>
            <div className="pt-2">
              <p className="max-w-2xl text-base leading-8 text-[#58665f]">
                Knowing manual testing, Selenium, Playwright, APIs and automation frameworks still matters. The change is the intelligence layer being added on top of that foundation.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#58665f]">
                The question is no longer whether you have tried ChatGPT. It is whether your QA workflow is becoming AI-enabled.
              </p>
              <Link href="/assessment" className="mt-7 inline-flex items-center text-sm font-semibold text-[#016b54]">Check your readiness <ArrowRight className="ml-2" size={16} /></Link>
            </div>
          </div>

          <div className="mt-10 grid border-y border-[#d8e0dc] md:grid-cols-4">
            {capabilities.map(([number, title, description]) => (
              <div key={number} className="min-h-[205px] border-b border-[#d8e0dc] p-6 md:border-b-0 md:border-r">
                <div className="text-[10px] font-semibold text-[#016b54]">{number}</div>
                <h3 className="mt-8 text-2xl font-medium leading-[1.08] tracking-[-0.04em]">{title}</h3>
                <p className="mt-5 text-sm leading-6 text-[#657169]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="readiness" className="bg-[#eef3ef]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#016b54]"><span className="h-px w-6 bg-[#016b54]" /> AI QA Readiness</div>
            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] md:text-6xl">Know where your workflow stands.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#5e665d]">
              A short diagnostic across five practical dimensions of modern Quality Engineering. You will see what is strong, what is missing, and what to work on next.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-[#46564f]">
              {["QA Foundations", "Automation", "AI Usage", "AI-Assisted Testing", "Agentic Workflows"].map((item) => (
                <div key={item} className="flex items-center gap-3"><Check size={16} className="text-[#016b54]" /> {item}</div>
              ))}
            </div>
            <Link href="/assessment" className="mt-9 inline-flex bg-[#041c17] px-7 py-4 text-sm font-semibold text-white">Find out my score <span className="ml-4">↗</span></Link>
          </div>

          <div className="border border-[#cfd9d4] bg-white">
            <div className="flex items-center justify-between border-b border-[#d8e0dc] px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#016b54]">
              <span>AI QA Readiness</span><span>Example diagnostic</span>
            </div>
            <div className="grid gap-8 p-7 md:grid-cols-[190px_1fr] md:p-8">
              <div className="flex flex-col justify-center border-r border-[#d8e0dc] pr-8 text-center">
                <strong className="text-6xl font-medium tracking-[-0.07em]">47</strong>
                <span className="mt-1 text-xs text-[#7b867f]">/100</span>
                <span className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#016b54]">Developing</span>
              </div>
              <div className="space-y-5">
                {[["QA Foundations",84],["Automation",72],["AI Usage",41],["AI-Assisted Testing",32],["Agentic Workflows",18]].map(([label,value]) => (
                  <div key={label as string}>
                    <div className="mb-2 flex justify-between text-xs text-[#5f6c65]"><span>{label}</span><strong>{value}</strong></div>
                    <div className="h-1 bg-[#e4eae7]"><div className="h-1 bg-[#016b54]" style={{width:`${value}%`}} /></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-[#d8e0dc] bg-[#f5f7f5] px-6 py-5 text-sm text-[#59665f]">You may already be automation-ready. The next question is whether your workflow is AI-QA ready.</div>
          </div>
        </div>
      </section>

      <section id="program" className="bg-[#041c17] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_.85fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b9e3d4]"><span className="h-px w-6 bg-[#b9e3d4]" /> After the diagnostic</div>
              <h2 className="mt-6 max-w-3xl text-5xl font-medium leading-[1] tracking-[-0.055em] md:text-7xl">AI-Enabled Quality Engineer.</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65">Move beyond casually using AI tools and learn repeatable AI-assisted QA workflows you can use at work and demonstrate in your career.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/accelerator" className="bg-white px-7 py-4 text-sm font-semibold text-[#082d25]">Explore the program <span className="ml-4">↗</span></Link>
                <Link href="/ai-qa-lab" className="px-3 py-4 text-sm font-semibold text-white">Join the AI QA Lab <ArrowRight className="ml-2 inline" size={16}/></Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/15">
              {[["04","Weeks"],["08","Live sessions"],["01","Portfolio project"],[String(campaignConfig.capacity),"Founding seats"]].map(([n,l]) => (
                <div key={l} className="bg-[#082a22] p-6"><strong className="block text-3xl font-medium text-[#b9e3d4]">{n}</strong><span className="mt-2 block text-xs text-white/58">{l}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#021610] text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs md:flex-row md:items-center md:justify-between lg:px-8">
          <span>QA AI Works</span>
          <span>Quality Engineering for the AI era</span>
        </div>
      </footer>
    </main>
  );
}
