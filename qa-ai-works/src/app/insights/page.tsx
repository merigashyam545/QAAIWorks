import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
export const metadata: Metadata={title:"Insights"};
export default function InsightsPage(){return <PageIntro eyebrow="Insights" title="Ideas for leaders reshaping quality." intro="Practical perspectives on Quality Engineering strategy, operating models, automation, risk intelligence and responsible AI adoption."><div className="insight-card"><span>Leadership perspective</span><h2>Your QA team may not have a performance problem. It may have an operating model problem.</h2><p>If you designed your QA organization from scratch today—with AI available—would you build it the same way?</p></div></PageIntro>}
