import Image from "next/image";
import Link from "next/link";

export function FunnelBrand() {
  return (
    <Link href="/" aria-label="QA AI Works home" className="inline-flex shrink-0 items-center">
      <Image
        src="/qa-ai-works-logo-clear.png"
        alt="QA AI Works"
        width={2108}
        height={746}
        className="h-auto w-[158px] brightness-0 invert md:w-[184px]"
        priority
      />
    </Link>
  );
}
