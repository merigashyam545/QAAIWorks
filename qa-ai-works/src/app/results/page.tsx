import { ResultsView } from "@/components/results-view";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Your AI QA Readiness Results", robots: { index: false, follow: true } };

export default function ResultsPage() {
  return <ResultsView />;
}
