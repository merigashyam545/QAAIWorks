import { NextRequest, NextResponse } from "next/server";
import { assessmentQuestions, calculateScores, getReadinessBand } from "@/lib/assessment";
import { callSupabaseRpc } from "@/lib/supabase-rest";

type Submission = { lead?: { firstName?: string; email?: string; whatsapp?: string; linkedin?: string }; answers?: Record<string, string>; consent?: boolean; attribution?: Record<string, string | undefined> };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s()-]{7,24}$/;

function clean(value: unknown, max = 500) { if (typeof value !== "string") return null; const trimmed = value.trim(); return trimmed ? trimmed.slice(0, max) : null; }
function validAnswers(answers: Record<string, string>) { return assessmentQuestions.every((question) => question.options.some((option) => option.value === answers[question.id])); }
function leadTemperature(answers: Record<string, string>, score: number) { const experienced = !["lt1", "1-2"].includes(answers.experience || ""); const senior = ["senior", "lead", "manager"].includes(answers.role || ""); const commercialGoal = ["ai-qa", "leadership", "team-adoption"].includes(answers.goal || ""); if (score >= 50 && (experienced || senior) && commercialGoal) return "HOT"; if (score >= 30 || experienced || commercialGoal) return "WARM"; return "NURTURE"; }

export async function POST(request: NextRequest) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 50_000) return NextResponse.json({ error: "request_too_large" }, { status: 413 });
    const body = (await request.json()) as Submission;
    const lead = body.lead || {}; const answers = body.answers || {}; const attribution = body.attribution || {};
    const firstName = clean(lead.firstName, 100); const email = clean(lead.email, 250)?.toLowerCase() || null; const whatsapp = clean(lead.whatsapp, 30); const linkedin = clean(lead.linkedin, 500);
    if (!firstName || !email || !emailPattern.test(email) || !whatsapp || !phonePattern.test(whatsapp)) return NextResponse.json({ error: "invalid_contact_details" }, { status: 400 });
    if (linkedin && !/^https?:\/\/(www\.)?linkedin\.com\//i.test(linkedin)) return NextResponse.json({ error: "invalid_linkedin_url" }, { status: 400 });
    if (body.consent !== true) return NextResponse.json({ error: "consent_required" }, { status: 400 });
    if (!validAnswers(answers)) return NextResponse.json({ error: "invalid_assessment_answers" }, { status: 400 });
    const scores = calculateScores(answers); const band = getReadinessBand(scores.total); const resultToken = crypto.randomUUID();
    await callSupabaseRpc<string>("submit_assessment", { p_result_token: resultToken, p_first_name: firstName, p_email: email, p_whatsapp: whatsapp, p_linkedin_url: linkedin, p_role: clean(answers.role, 100), p_experience: clean(answers.experience, 100), p_goal: clean(answers.goal, 100), p_source: clean(attribution.source, 120) || clean(attribution.utmSource, 120) || "direct", p_utm_source: clean(attribution.utmSource, 120), p_utm_medium: clean(attribution.utmMedium, 120), p_utm_campaign: clean(attribution.utmCampaign, 180), p_utm_content: clean(attribution.utmContent, 180), p_utm_term: clean(attribution.utmTerm, 180), p_referrer: clean(attribution.referrer, 500), p_landing_path: clean(attribution.landingPath, 500), p_lead_temperature: leadTemperature(answers, scores.total), p_answers: answers, p_scores: scores, p_total_score: scores.total, p_readiness_band: band.label, p_consent_version: "2026-08-25" });
    return NextResponse.json({ ok: true, resultToken, result: { firstName, scores, band, goal: answers.goal } });
  } catch (error) { console.error("Assessment submission failed", error); return NextResponse.json({ error: "submission_failed" }, { status: 500 }); }
}
