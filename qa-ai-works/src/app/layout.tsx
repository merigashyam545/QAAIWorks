import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qaaiworks.com"),
  title: { default: "QA AI Works | Quality Engineering for the AI Era", template: "%s | QA AI Works" },
  description: "QA AI Works helps organizations modernize Quality Engineering strategy, automation, operating models and AI adoption.",
  keywords: ["Quality Engineering", "AI transformation", "test automation", "QE consulting"],
  openGraph: { title: "QA AI Works", description: "Quality Engineering transformation for the AI era.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
