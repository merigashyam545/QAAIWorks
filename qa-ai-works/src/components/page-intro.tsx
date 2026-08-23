import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";

export function PageIntro({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <SiteShell><section className="page-hero"><div className="shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></section><section className="section inner-content"><div className="shell">{children}</div></section></SiteShell>;
}
