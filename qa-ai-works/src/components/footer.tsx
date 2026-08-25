import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div><Link href="/" className="brand official-brand footer-brand" aria-label="QA AI Works home"><Image src="/qa-ai-works-logo-clear.png" alt="QA AI Works" width={2108} height={746} /></Link><p>Quality Engineering transformation for the AI era.</p></div>
    <div><h3>Company</h3><Link href="/about">About</Link><Link href="/how-we-work">How We Work</Link><Link href="/insights">Insights</Link><a href="https://www.linkedin.com/company/qa-ai-works/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
    <div><h3>Expertise</h3><Link href="/services">Services</Link><Link href="/ai-quality-engineering">AI & Quality Engineering</Link></div>
    <div><h3>Start a conversation</h3><p>Ready to rethink how quality works in your engineering organization?</p><a href="tel:+919980546951">+91 99805 46951</a><a href="mailto:hello@qaaiworks.com">hello@qaaiworks.com</a><Link href="/contact" className="footer-link">Talk to Us →</Link></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} QA AI Works</span><span>Strategy · Engineering · Intelligence</span></div></footer>;
}
