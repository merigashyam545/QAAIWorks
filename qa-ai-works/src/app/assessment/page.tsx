import { AssessmentFlow } from "@/components/assessment-flow";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "AI QA Readiness Assessment", robots: { index: false, follow: true } };

export default function AssessmentPage() {
  return <AssessmentFlow />;
}
