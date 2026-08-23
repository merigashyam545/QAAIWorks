import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div><Link href="/" className="brand brand-light"><BrandMark /><span>QA <strong>AI</strong> Works</span></Link><p>Quality Engineering transformation for the AI era.</p></div>
    <div><h3>Company</h3><Link href="/about">About</Link><Link href="/how-we-work">How We Work</Link><Link href="/insights">Insights</Link></div>
    <div><h3>Expertise</h3><Link href="/services">Services</Link><Link href="/ai-quality-engineering">AI & Quality Engineering</Link></div>
    <div><h3>Start a conversation</h3><p>Ready to rethink how quality works in your engineering organization?</p><a href="tel:+919980546951">+91 99805 46951</a><a href="mailto:hello@qaaiworks.com">hello@qaaiworks.com</a><Link href="/contact" className="footer-link">Talk to Us →</Link></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} QA AI Works</span><span>Strategy · Engineering · Intelligence</span></div></footer>;
}
