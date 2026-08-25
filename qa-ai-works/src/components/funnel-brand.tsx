import Image from "next/image";
import Link from "next/link";

export function FunnelBrand({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" aria-label="QA AI Works home" className="inline-flex shrink-0 items-center">
      <Image
        src={tone === "light" ? "/qa-ai-works-logo.png" : "/qa-ai-works-logo-clear.png"}
        alt="QA AI Works"
        width={tone === "light" ? 2068 : 2108}
        height={tone === "light" ? 760 : 746}
        className={`h-auto w-[158px] md:w-[184px] ${tone === "dark" ? "brightness-0 invert" : ""}`}
        priority
      />
    </Link>
  );
}
