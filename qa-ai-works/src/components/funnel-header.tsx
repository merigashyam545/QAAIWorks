import Link from "next/link";
import { FunnelBrand } from "@/components/funnel-brand";

const funnelNavigation = [
  ["Readiness", "/ai-qa-readiness"],
  ["AI QA Lab", "/ai-qa-lab"],
  ["Accelerator", "/accelerator"],
] as const;

export function FunnelHeader({ ctaLabel = "Check Readiness", ctaHref = "/assessment" }: { ctaLabel?: string; ctaHref?: string }) {
  return (
    <header className="border-b border-white/15 bg-[#041c17] text-white">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-4 md:px-6 lg:px-8">
        <FunnelBrand />
        <div className="ml-auto flex items-center gap-4 lg:gap-8">
          <nav aria-label="AI QA resources" className="hidden items-center gap-7 text-[13px] font-medium text-white/75 md:flex">
            {funnelNavigation.map(([label, href]) => <Link key={href} href={href} className="transition hover:!text-white">{label}</Link>)}
          </nav>
          <Link href={ctaHref} className="whitespace-nowrap bg-[#016b54] px-3 py-3 text-xs font-semibold !text-white sm:px-5 sm:text-sm">
            {ctaLabel} <span className="ml-2" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
