import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { campaignConfig } from "@/lib/config";
import { CohortApplyButton } from "@/components/cohort-apply-button";
import { createPageMetadata } from "@/lib/metadata";
import { FunnelBrand } from "@/components/funnel-brand";

export const metadata = createPageMetadata({ title: "AI-Enabled Quality Engineer Accelerator", description: "Explore the QA AI Works accelerator for professionals building practical AI-assisted testing, automation, debugging and quality-intelligence workflows.", path: "/accelerator" });

const modules = [
  ["01", "AI for Quality Engineering", "Build the foundation: prompting, context, validation and practical AI use inside QA work."],
  ["02", "AI-Assisted Test Design & Automation", "Move from requirements to scenarios, edge cases, test data and automation support using repeatable workflows."],
  ["03", "Debugging, Analysis & Quality Intelligence", "Use AI to investigate failures, interpret logs, summarize quality signals and support release decisions."],
  ["04", "AI Agents & the Modern QA Workflow", "Understand tool-using agents, MCP/RAG concepts and how agentic patterns can fit into Quality Engineering."],
];

const outputs = [
  "AI-Enabled QA portfolio project",
  "AI QA prompt vault",
  "Reusable workflow templates",
  "AI-assisted testing playbook",
  "Personal QA-AI workflow blueprint",
  "Certificate of completion",
];

export default function AcceleratorPage() {
  return (
    <main className="min-h-screen bg-[#f8f9f8] text-[#082d25]">
      <header className="border-b border-white/15 bg-[#041c17] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <FunnelBrand />
          <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
            <a href="#outcomes">Outcomes</a>
            <a href="#curriculum">Curriculum</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <Link href="/assessment" className="border border-white/70 px-5 py-3 text-sm font-semibold">Check Readiness <span className="ml-3">↗</span></Link>
        </div>
      </header>

      <section className="bg-[#041c17] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b9e3d4]"><span className="h-px w-6 bg-[#b9e3d4]" /> {campaignConfig.cohort}</div>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-medium leading-[.98] tracking-[-0.06em] md:text-7xl lg:text-[84px]">AI-Enabled<br />Quality Engineer.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">Move beyond casually using AI tools and learn to build repeatable AI-assisted QA workflows you can use at work and demonstrate in your career.</p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <div className="grid grid-cols-2 gap-px bg-white/15">
                {[["04","Weeks"],["08","Live sessions"],["01","Portfolio project"],["35","Founding seats"]].map(([n,l]) => (
                  <div key={l} className="bg-[#082a22] p-5"><strong className="block text-3xl font-medium text-[#b9e3d4]">{n}</strong><span className="mt-2 block text-xs text-white/60">{l}</span></div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/assessment" className="bg-white px-7 py-4 text-sm font-semibold text-[#082d25]">Check your readiness <span className="ml-4">↗</span></Link>
            <Link href="/ai-qa-lab" className="px-3 py-4 text-sm font-semibold text-white">Join the AI QA Lab <ArrowRight className="ml-2 inline" size={16}/></Link>
          </div>
        </div>
      </section>

      <section id="outcomes" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#016b54]"><span className="h-px w-6 bg-[#016b54]" /> Program outcome</div>
              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] md:text-5xl">Build a QA workflow that uses AI with purpose.</h2>
            </div>
            <div className="grid border-t border-[#d8e0dc] md:grid-cols-2">
              {["Requirement analysis","Test design","Edge-case discovery","Test-data generation","Automation development","Debugging","Failure analysis","QA reporting"].map((item) => (
                <div key={item} className="flex min-h-20 items-center gap-3 border-b border-[#d8e0dc] p-4 md:border-r"><Check size={16} className="text-[#016b54]"/><span className="text-sm text-[#46564f]">{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="bg-[#eef3ef]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#016b54]"><span className="h-px w-6 bg-[#016b54]" /> Curriculum</div>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.045em] md:text-5xl">Four modules. One connected system.</h2>
          <div className="mt-10 border-y border-[#cfd9d4]">
            {modules.map(([n,title,desc]) => (
              <div key={n} className="grid gap-5 border-b border-[#cfd9d4] py-7 md:grid-cols-[80px_.8fr_1.2fr] md:items-start">
                <span className="text-xs font-semibold text-[#016b54]">{n}</span>
                <h3 className="text-2xl font-medium tracking-[-0.035em]">{title}</h3>
                <p className="m-0 max-w-2xl text-sm leading-6 text-[#5e665d]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#016b54]"><span className="h-px w-6 bg-[#016b54]" /> What you build</div>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">Leave with evidence, not just notes.</h2>
          </div>
          <div className="grid gap-0 border-y border-[#d8e0dc]">
            {outputs.map((item) => <div key={item} className="flex items-center gap-3 border-b border-[#d8e0dc] py-4 text-sm text-[#46564f]"><Check size={16} className="text-[#016b54]"/>{item}</div>)}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#041c17] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b9e3d4]"><span className="h-px w-6 bg-[#b9e3d4]" /> Founding cohort</div>
              <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.045em] md:text-6xl">35 professionals. Built to stay interactive.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">The founding cohort is intentionally limited so live sessions can remain practical, reviewable and implementation-led.</p>
            </div>
            <div className="border border-white/20 p-7">
              <div className="text-xs uppercase tracking-[0.16em] text-[#b9e3d4]">Founding cohort</div>
              <div className="mt-3 text-4xl font-medium tracking-[-0.05em]">Applications opening soon</div>
              <div className="mt-6 border-t border-white/15 pt-5 text-sm text-white/60">{campaignConfig.capacity} seats maximum</div>
              <div className="mt-6">
                <CohortApplyButton className="flex w-full items-center justify-between bg-white px-5 py-4 text-sm font-semibold text-[#082d25] disabled:opacity-70" />
              </div>
              <p className="mt-4 text-xs leading-5 text-white/45">Program details are shared after the readiness assessment so your application is connected to your QA profile and goals.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#021610] text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs md:flex-row md:items-center md:justify-between lg:px-8"><span>QA AI Works</span><span>Quality Engineering for the AI era</span></div>
      </footer>
    </main>
  );
}
