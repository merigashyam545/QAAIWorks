import { Bot, Braces, CheckCircle2, FileSearch, Sparkles } from "lucide-react";

const steps = [
  {
    label: "Traditional QA",
    detail: "Manual analysis & repeatable checks",
    icon: FileSearch,
  },
  {
    label: "Automation QA",
    detail: "Frameworks, APIs & reusable scripts",
    icon: Braces,
  },
  {
    label: "AI-Assisted QA",
    detail: "Design, debug & analyse with AI",
    icon: Sparkles,
  },
  {
    label: "AI-Enabled Quality Engineer",
    detail: "Orchestrated intelligent QA workflows",
    icon: Bot,
  },
];

export function WorkflowVisual() {
  return (
    <div className="workflow-shell" aria-label="QA career evolution workflow">
      <div className="workflow-grid" aria-hidden="true" />
      <div className="workflow-status">
        <span className="status-dot" />
        QUALITY ENGINEERING EVOLUTION
      </div>

      <div className="workflow-track">
        <div className="workflow-line" aria-hidden="true" />
        {steps.map((step, index) => {
          const Icon = step.icon;
          const active = index === steps.length - 1;

          return (
            <div className="workflow-row" key={step.label}>
              <div className={`workflow-node ${active ? "workflow-node-active" : ""}`}>
                <Icon size={19} strokeWidth={1.8} />
              </div>
              <div className={`workflow-card ${active ? "workflow-card-active" : ""}`}>
                <div className="workflow-step-number">0{index + 1}</div>
                <div>
                  <div className="workflow-label">{step.label}</div>
                  <p>{step.detail}</p>
                </div>
                {active ? <CheckCircle2 className="workflow-check" size={18} /> : null}
              </div>
            </div>
          );
        })}
      </div>

      <div className="workflow-terminal">
        <span>workflow.status</span>
        <strong>UPGRADING</strong>
      </div>
    </div>
  );
}
