import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/arrow-icon";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";

const services = [
  ["01", "Quality Engineering Assessment", "A clear, evidence-led view of current capability, friction and transformation priorities."],
  ["02", "Enterprise QE Transformation", "A practical strategy to reshape quality across platforms, products and portfolios."],
  ["03", "Test Automation Modernization", "Modern automation architecture designed for speed, resilience and maintainability."],
  ["04", "AI Adoption in Quality Engineering", "Responsible adoption pathways that turn AI potential into measurable engineering value."],
  ["05", "QE Organization & Operating Model", "Roles, ways of working and governance aligned to modern product engineering."],
  ["06", "Release Quality & Risk Intelligence", "Decision-ready quality signals that connect technical evidence to business risk."],
  ["07", "AI-assisted Testing & Automation", "Human-led, AI-accelerated approaches to analysis, design and automation."],
  ["08", "Training & Workshops", "Focused learning experiences that build leadership alignment and hands-on capability."],
];

const outcomes = ["Faster, more confident releases", "Automation that scales with engineering", "Clearer visibility of product risk", "Teams equipped to work effectively with AI"];

const businessImpact = [
  ["10–30%", "Potential QA Cost Optimization", "Identify inefficiencies across QA processes, automation, tools, and operating models."],
  ["Higher Productivity", "AI + Automation + Process Optimization", "Reduce repetitive effort and enable faster, smarter Quality Engineering."],
  ["Existing Teams", "Upskill & Elevate — Not Replace", "Help current QA professionals adopt AI and move toward higher-value engineering work."],
] as const;

export default function Home() {
  return <SiteShell>
    <section className="hero"><Image className="hero-image" src="/hero-engineering.png" alt="Engineering leaders mapping a quality transformation strategy" fill priority sizes="100vw" /><div className="hero-overlay" aria-hidden="true" /><div className="shell hero-grid">
      <div className="hero-copy"><span className="eyebrow">Quality Engineering · Reimagined</span><h1>Quality Engineering is changing. <em>Your organization should too.</em></h1><p>We help engineering organizations transform Quality Engineering for the AI era — modernizing automation, operating models, quality platforms and AI adoption.</p><div className="button-row"><Link href="/contact" className="button">Talk to Us <ArrowIcon /></Link><Link href="/services" className="text-link">Explore Our Services <span aria-hidden="true">→</span></Link></div></div>
      <div aria-hidden="true" />
    </div><div className="shell hero-note"><span>Our point of view</span><strong>Quality Engineering must evolve when AI becomes part of the engineering team.</strong></div></section>

    <section className="section impact-section"><div className="shell"><div className="impact-intro"><SectionHeading eyebrow="Business impact" title="Turn Quality Engineering into a Business Advantage" /><p>Improve QA productivity and identify opportunities to optimize Quality Engineering costs by 10–30% — while enabling existing teams to deliver higher-value work.</p></div><div className="impact-grid">{businessImpact.map(([value, label, body], index) => <article key={label}><span>0{index + 1}</span><strong>{value}</strong><h3>{label}</h3><p>{body}</p></article>)}</div></div></section>

    <section className="section problem-section"><div className="shell split-layout"><SectionHeading eyebrow="The shift" title="The old quality model cannot meet the next generation of engineering." /><div className="problem-copy"><p>AI is changing how software is designed, built and released. Yet many Quality Engineering functions still operate with fragmented tooling, brittle automation and processes designed for a different era.</p><p>The question is no longer whether AI will affect quality. It is whether your quality function is ready to shape what happens next.</p><div className="accent-rule" /></div></div></section>

    <section className="section work-section"><div className="shell"><div className="editorial-split"><SectionHeading eyebrow="What we do" title="We redesign Quality Engineering as an enterprise capability." body="We work at the intersection of strategy, engineering and organizational change—helping leaders turn quality into a source of speed, confidence and intelligence." /><Image src="/qe-workshop.png" width={1536} height={1024} alt="A Quality Engineering operating model workshop" sizes="(max-width: 760px) 100vw, 45vw" /></div><div className="pillars"><article><span>STRATEGY</span><h3>Set the direction</h3><p>Define the ambition, principles and roadmap for modern Quality Engineering.</p></article><article><span>ENGINEERING</span><h3>Modernize the system</h3><p>Reimagine automation, platforms and quality practices for contemporary delivery.</p></article><article><span>TRANSFORMATION</span><h3>Make change stick</h3><p>Align operating models, roles and capability building around the new direction.</p></article></div></div></section>

    <section className="section services-section"><div className="shell"><div className="section-top"><SectionHeading eyebrow="Core services" title="Focused expertise. Enterprise perspective." /><Link href="/services" className="text-link">View all services <span>→</span></Link></div><div className="services-grid">{services.map(([number, title, body]) => <article key={number} className="service-card"><span>{number}</span><h3>{title}</h3><p>{body}</p><Link href="/services" aria-label={`Learn about ${title}`}><ArrowIcon /></Link></article>)}</div></div></section>

    <section className="section ai-section"><div className="shell ai-photo-grid"><div className="ai-photo"><Image src="/quality-intelligence.png" fill alt="Engineers reviewing quality and risk intelligence" sizes="(max-width: 760px) 100vw, 46vw" /></div><div><SectionHeading light eyebrow="AI & Quality Engineering" title="Adopt AI with purpose—not as another tool in the stack." body="We help organizations make deliberate choices about where AI creates value across the quality lifecycle, how teams should use it and what controls are needed to earn trust." /><Link href="/ai-quality-engineering" className="button button-light">Explore AI & QE <ArrowIcon /></Link></div></div><div className="shell ai-framework"><div><span>01</span><h3>Augment</h3><p>Accelerate analysis, test design and engineering work.</p></div><div><span>02</span><h3>Assure</h3><p>Build confidence in AI-enabled products and systems.</p></div><div><span>03</span><h3>Adapt</h3><p>Evolve the organization, controls and skills around AI.</p></div></div></section>

    <section className="section readiness-entry"><div className="shell readiness-entry-grid"><div><SectionHeading eyebrow="Self-assessment" title="How ready is your QA workflow for AI?" body="Use our focused diagnostic to assess your current foundations, automation maturity, AI-assisted practices and readiness for agentic Quality Engineering." /><div className="button-row"><Link href="/ai-qa-readiness" className="button">Start the free assessment <ArrowIcon /></Link><Link href="/ai-qa-lab" className="text-link">Explore the AI QA Lab <span>→</span></Link></div></div><div className="readiness-entry-panel"><span>3 minutes</span><strong>Personalized AI QA readiness score</strong><p>Receive a practical readiness band and a focused development roadmap based on your responses.</p><Link href="/accelerator">Explore the Accelerator →</Link></div></div></section>

    <section className="section engagement-section"><div className="shell"><SectionHeading eyebrow="How we engage" title="Start where the transformation needs to start." body="Every organization has a different quality context. Our engagements are designed around the decisions you need to make and the change you need to deliver." /><div className="engagement-steps">{[["01","Assess","Build an honest view of today and the case for change."],["02","Design","Shape the target strategy, architecture and operating model."],["03","Enable","Build the capability, patterns and momentum to move forward."],["04","Transform","Embed new ways of working and measure meaningful progress."]].map(([n,t,b]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div></div></section>

    <section className="section outcomes-section"><div className="shell outcomes-grid"><SectionHeading eyebrow="Business outcomes" title="Quality that moves at the speed of the business." /><div>{outcomes.map((outcome, index) => <p key={outcome}><span>0{index + 1}</span>{outcome}</p>)}</div></div></section>
    <section className="efficiency-cta"><div className="shell efficiency-cta-inner"><div><span className="eyebrow">Assess the opportunity</span><h2>What could 10–30% greater QA efficiency mean for your organization?</h2><p>Start with a 30-minute QA AI Readiness conversation.</p></div><Link href="/contact" className="button button-light">Assess Your QA Organization <ArrowIcon /></Link></div></section>
    <section className="cta-section"><div className="shell cta-inner"><span className="eyebrow">Start the conversation</span><h2>Ready to evolve your Quality Engineering function?</h2><p>Let’s explore what modern quality could look like in your organization.</p><Link href="/contact" className="button button-light">Talk to Us <ArrowIcon /></Link></div></section>
  </SiteShell>;
}
