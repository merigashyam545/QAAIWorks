import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Privacy Policy", description: "How QA AI Works collects and uses information submitted through its website and AI QA Readiness Assessment.", path: "/privacy" });

export default function PrivacyPage() {
  return <main>
    <section className="page-hero compact-hero"><div className="shell narrow"><p className="eyebrow">Privacy</p><h1>Privacy policy</h1><p className="page-lead">How we handle information you share with QA AI Works.</p></div></section>
    <section className="section light-section"><div className="shell narrow prose-content">
      <h2>Information we collect</h2><p>When you contact us or complete the AI QA Readiness Assessment, we may collect your name, email address, telephone number, professional profile, assessment responses, readiness result and basic website attribution information.</p>
      <h2>How we use it</h2><p>We use this information to provide your requested result, respond to enquiries, improve our assessment and services, and share relevant QA AI Works follow-up when you have consented to it.</p>
      <h2>Storage and sharing</h2><p>We use service providers to host the website and securely process submitted information. We do not sell your personal information. We retain information only for as long as reasonably necessary for these purposes and applicable obligations.</p>
      <h2>Your choices</h2><p>You may ask us to correct or delete information you submitted, or opt out of future communications, by emailing <a href="mailto:hello@qaaiworks.com">hello@qaaiworks.com</a>.</p>
      <h2>Contact</h2><p>For privacy questions, contact QA AI Works at <a href="mailto:hello@qaaiworks.com">hello@qaaiworks.com</a>.</p><p><small>Last updated: 25 August 2026.</small></p>
    </div></section>
  </main>;
}
