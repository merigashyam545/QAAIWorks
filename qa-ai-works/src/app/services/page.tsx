import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { createPageMetadata } from "@/lib/metadata";
export const metadata = createPageMetadata({ title: "Services", description: "Explore Quality Engineering assessment, enterprise transformation, automation modernization, operating-model redesign, AI adoption and leadership workshops.", path: "/services" });
const items=[
 ["01","Quality Engineering Assessment","An independent, evidence-led assessment of strategy, delivery flow, capability, cost drivers and quality risk. We identify what should stay, what should change and where transformation should begin."],
 ["02","Enterprise QE Transformation","A coherent enterprise strategy that connects quality ambition to product engineering, platforms, governance and measurable change."],
 ["03","Test Automation Modernization","Redesign automation architecture and practices to reduce brittleness, maintenance effort and slow regression feedback."],
 ["04","AI Adoption in Quality Engineering","Find where teams spend effort that technology can reduce, prioritize credible use cases and create a responsible adoption roadmap."],
 ["05","QE Organization & Operating Model Transformation","Align structure, roles, decision rights, skills and ways of working to the realities of AI-enabled software engineering."],
 ["06","Release Quality & Risk Intelligence","Turn fragmented test and delivery signals into a clear, leadership-level view of release confidence and business risk."],
 ["07","AI-assisted Testing & Automation","Apply AI to analysis, test design, failure triage, automation creation and maintenance while keeping human judgment in control."],
 ["08","Quality Engineering Training & Workshops","Build leadership alignment and practitioner capability through focused workshops grounded in your organization’s context."],
];
export default function ServicesPage(){return <PageIntro eyebrow="Services" title="Change the quality system—not just the toolset." intro="We help CTOs, engineering leaders and quality leaders decide where effort is being lost, what needs redesign and how AI can create meaningful engineering value."><div className="service-list">{items.map(([n,t,b])=><article key={n}><span>{n}</span><div><h2>{t}</h2><p>{b}</p></div></article>)}</div><div className="inner-cta"><h2>Planning your QA strategy for the AI era?</h2><Link href="/contact" className="button">Let’s talk ↗</Link></div></PageIntro>}
