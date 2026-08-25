import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qaaiworks.com"),
  title: { default: "QA AI Works | Quality Engineering for the AI Era", template: "%s | QA AI Works" },
  description: "QA AI Works helps engineering leaders transform Quality Engineering through modern automation, AI adoption, operating-model redesign and quality intelligence.",
  keywords: ["Quality Engineering", "AI transformation", "test automation", "QE consulting"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "QA AI Works | Quality Engineering for the AI Era",
    description: "Transform Quality Engineering through modern automation, responsible AI adoption, operating-model redesign and quality intelligence.",
    url: "/",
    siteName: "QA AI Works",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/qa-ai-works-social-card.jpg", width: 1200, height: 630, alt: "QA AI Works - Quality Engineering for the AI Era" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QA AI Works | Quality Engineering for the AI Era",
    description: "Transform Quality Engineering through modern automation, responsible AI adoption, operating-model redesign and quality intelligence.",
    images: ["/qa-ai-works-social-card.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.qaaiworks.com/#organization",
      name: "QA AI Works",
      url: "https://www.qaaiworks.com/",
      logo: "https://www.qaaiworks.com/qa-ai-works-logo-clear.png",
      email: "hello@qaaiworks.com",
      telephone: "+91-99805-46951",
      sameAs: ["https://www.linkedin.com/company/qa-ai-works/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.qaaiworks.com/#website",
      url: "https://www.qaaiworks.com/",
      name: "QA AI Works",
      publisher: { "@id": "https://www.qaaiworks.com/#organization" },
      inLanguage: "en-IN",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.qaaiworks.com/#service",
      name: "QA AI Works",
      url: "https://www.qaaiworks.com/",
      description: "Quality Engineering and AI transformation consultancy helping organizations modernize strategy, automation, operating models and AI adoption.",
      provider: { "@id": "https://www.qaaiworks.com/#organization" },
      areaServed: "Worldwide",
      serviceType: ["Quality Engineering Assessment", "Enterprise QE Transformation", "Test Automation Modernization", "AI Adoption in Quality Engineering", "Release Quality and Risk Intelligence"],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></body>
    </html>
  );
}
