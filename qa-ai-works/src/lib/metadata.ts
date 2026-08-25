import type { Metadata } from "next";

const siteName = "QA AI Works";
const socialImage = {
  url: "/qa-ai-works-social-card.jpg",
  width: 1200,
  height: 630,
  alt: "QA AI Works - Quality Engineering for the AI Era",
};

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  const canonical = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName,
      locale: "en_IN",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage.url],
    },
  };
}
