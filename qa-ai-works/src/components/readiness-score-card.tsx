const categories = [
  { name: "QA Foundations", value: 84 },
  { name: "Automation", value: 72 },
  { name: "AI Usage", value: 41 },
  { name: "AI Testing", value: 32 },
  { name: "Agentic Workflows", value: 18 },
];

export function ReadinessScoreCard() {
  return (
    <div className="score-card">
      <div className="score-card-topline">
        <span>AI QA READINESS</span>
        <span className="score-live"><i /> DIAGNOSTIC</span>
      </div>

      <div className="score-main">
        <div className="score-orbit" aria-label="Example readiness score 47 out of 100">
          <div className="score-ring">
            <div>
              <strong>47</strong>
              <span>/100</span>
            </div>
          </div>
          <span className="score-state">DEVELOPING</span>
        </div>

        <div className="score-bars">
          {categories.map((category) => (
            <div className="score-bar-row" key={category.name}>
              <div className="score-bar-label">
                <span>{category.name}</span>
                <strong>{category.value}</strong>
              </div>
              <div className="score-bar-track">
                <div className="score-bar-fill" style={{ width: `${category.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="score-insight">
        <span>INSIGHT</span>
        <p>
          You may already be automation-ready. The next question is whether your workflow is AI-QA ready.
        </p>
      </div>
    </div>
  );
}
