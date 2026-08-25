import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested QA AI Works page could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <SiteShell><section className="not-found-page"><div className="shell not-found-inner"><span className="eyebrow">404 · Page not found</span><h1>This page is no longer on the quality roadmap.</h1><p>The address may have changed, or the page may have moved. Continue exploring QA AI Works or start a conversation about your Quality Engineering priorities.</p><div className="button-row"><Link href="/" className="button button-light">Return Home →</Link><Link href="/services" className="text-link">Explore Our Services →</Link><Link href="/contact" className="text-link">Talk to Us →</Link></div></div></section></SiteShell>;
}
