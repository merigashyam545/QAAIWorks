import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

const navigation = [["About", "/about"], ["Services", "/services"], ["AI & Quality Engineering", "/ai-quality-engineering"], ["How We Work", "/how-we-work"], ["Insights", "/insights"]] as const;

export function Header() {
  return <header className="site-header"><div className="shell header-inner">
    <Link href="/" className="brand" aria-label="QA AI Works home"><BrandMark /><span>QA <strong>AI</strong> Works</span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <Link href="/contact" className="button button-small">Talk to Us <span aria-hidden="true">↗</span></Link>
    <details className="mobile-menu"><summary aria-label="Open navigation"><span /><span /></summary><nav aria-label="Mobile navigation">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/contact">Contact</Link></nav></details>
  </div></header>;
}
