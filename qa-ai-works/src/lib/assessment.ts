export type Category =
  | "foundations"
  | "automation"
  | "aiUsage"
  | "aiTesting"
  | "agentic";

export type AssessmentOption = {
  label: string;
  value: string;
  score?: number;
};

export type AssessmentQuestion = {
  id: string;
  eyebrow: string;
  question: string;
  helper?: string;
  category?: Category;
  options: AssessmentOption[];
};

export type AssessmentAnswers = Record<string, string>;

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "role",
    eyebrow: "CONTEXT",
    question: "What best describes your current QA role?",
    helper: "This helps us frame the recommendations around your day-to-day work.",
    options: [
      { label: "Manual QA / Test Engineer", value: "manual" },
      { label: "Automation QA / SDET", value: "automation" },
      { label: "Senior QA Engineer", value: "senior" },
      { label: "QA Lead / Test Lead", value: "lead" },
      { label: "QA Manager / Engineering Manager", value: "manager" },
      { label: "Student / Fresher / Career transition", value: "fresher" },
    ],
  },
  {
    id: "experience",
    eyebrow: "CONTEXT",
    question: "How many years have you worked in QA or software testing?",
    options: [
      { label: "Less than 1 year", value: "lt1" },
      { label: "1–2 years", value: "1-2" },
      { label: "3–5 years", value: "3-5" },
      { label: "6–10 years", value: "6-10" },
      { label: "10+ years", value: "10+" },
    ],
  },
  {
    id: "testDesign",
    eyebrow: "QA FOUNDATIONS",
    question: "How confidently can you turn an ambiguous requirement into structured test scenarios?",
    category: "foundations",
    options: [
      { label: "I usually need significant guidance", value: "guided", score: 20 },
      { label: "I can cover the obvious happy and negative paths", value: "basic", score: 45 },
      { label: "I systematically cover risk, boundaries and dependencies", value: "structured", score: 75 },
      { label: "I can lead requirement-risk analysis for a team", value: "lead", score: 95 },
    ],
  },
  {
    id: "automationLevel",
    eyebrow: "AUTOMATION",
    question: "Which statement best describes your automation capability today?",
    category: "automation",
    options: [
      { label: "I am primarily manual and do not write automation", value: "none", score: 15 },
      { label: "I can edit or run existing scripts", value: "edit", score: 40 },
      { label: "I can independently build test automation", value: "build", score: 72 },
      { label: "I design frameworks, CI integration or automation strategy", value: "architect", score: 95 },
    ],
  },
  {
    id: "debugging",
    eyebrow: "AUTOMATION",
    question: "When an automated test fails, how independently can you investigate the cause?",
    category: "automation",
    options: [
      { label: "I mostly rerun or escalate the failure", value: "rerun", score: 20 },
      { label: "I can isolate common script and locator failures", value: "common", score: 48 },
      { label: "I can trace application, test and environment causes", value: "trace", score: 78 },
      { label: "I routinely diagnose complex cross-system failures", value: "complex", score: 96 },
    ],
  },
  {
    id: "aiFrequency",
    eyebrow: "AI USAGE",
    question: "How often do you currently use an AI assistant in your QA work?",
    category: "aiUsage",
    options: [
      { label: "Never or almost never", value: "never", score: 5 },
      { label: "Occasionally for explanations or quick questions", value: "occasionally", score: 32 },
      { label: "Several times a week for QA tasks", value: "weekly", score: 66 },
      { label: "Daily as part of my working process", value: "daily", score: 90 },
    ],
  },
  {
    id: "prompting",
    eyebrow: "AI USAGE",
    question: "How structured are the prompts or instructions you give AI tools?",
    category: "aiUsage",
    options: [
      { label: "Mostly one-line questions", value: "simple", score: 20 },
      { label: "I add context and examples when needed", value: "context", score: 50 },
      { label: "I use repeatable prompt structures and constraints", value: "structured", score: 78 },
      { label: "I build reusable prompt/workflow systems for QA", value: "systems", score: 96 },
    ],
  },
  {
    id: "aiRequirement",
    eyebrow: "AI-ASSISTED TESTING",
    question: "How do you currently use AI for requirement analysis and test design?",
    category: "aiTesting",
    options: [
      { label: "I do not use AI for this", value: "none", score: 5 },
      { label: "I ask AI to generate basic test cases", value: "generate", score: 35 },
      { label: "I use AI to identify gaps, risks, edge cases and scenarios", value: "analyse", score: 72 },
      { label: "I have a repeatable requirement-to-test workflow", value: "workflow", score: 95 },
    ],
  },
  {
    id: "aiAutomation",
    eyebrow: "AI-ASSISTED TESTING",
    question: "How deeply is AI involved in your automation or debugging workflow?",
    category: "aiTesting",
    options: [
      { label: "Not currently involved", value: "none", score: 5 },
      { label: "I occasionally ask AI to write or fix code", value: "occasional", score: 38 },
      { label: "I use AI across generation, debugging and refactoring", value: "integrated", score: 74 },
      { label: "AI-assisted development is part of my standard automation workflow", value: "standard", score: 94 },
    ],
  },
  {
    id: "aiAnalysis",
    eyebrow: "AI-ASSISTED TESTING",
    question: "Do you use AI to analyse failures, logs, defect patterns or release-quality signals?",
    category: "aiTesting",
    options: [
      { label: "No", value: "no", score: 5 },
      { label: "Only for occasional log explanations", value: "logs", score: 35 },
      { label: "Yes, for recurring analysis and summaries", value: "recurring", score: 70 },
      { label: "Yes, as part of a repeatable quality-intelligence workflow", value: "workflow", score: 96 },
    ],
  },
  {
    id: "agenticFamiliarity",
    eyebrow: "AGENTIC WORKFLOWS",
    question: "How familiar are you with AI agents, tool use, MCP or RAG-style workflows?",
    category: "agentic",
    options: [
      { label: "These concepts are new to me", value: "new", score: 5 },
      { label: "I understand them at a high level", value: "aware", score: 35 },
      { label: "I have experimented with one or more of them", value: "experimented", score: 68 },
      { label: "I have built or deployed an agentic workflow", value: "built", score: 95 },
    ],
  },
  {
    id: "implementedWorkflow",
    eyebrow: "AGENTIC WORKFLOWS",
    question: "Have you implemented a repeatable AI-assisted QA workflow in a real project?",
    category: "agentic",
    options: [
      { label: "Not yet", value: "not-yet", score: 10 },
      { label: "I have experimented personally", value: "personal", score: 42 },
      { label: "I use one in my own professional workflow", value: "professional", score: 75 },
      { label: "I have helped a team adopt one", value: "team", score: 98 },
    ],
  },
  {
    id: "goal",
    eyebrow: "YOUR GOAL",
    question: "What would you most like AI to help you achieve next?",
    options: [
      { label: "Work faster and reduce repetitive QA work", value: "productivity" },
      { label: "Move from manual QA toward automation", value: "automation" },
      { label: "Become an AI-enabled QA engineer", value: "ai-qa" },
      { label: "Prepare for stronger interviews and career moves", value: "interviews" },
      { label: "Advance into senior or lead QA roles", value: "leadership" },
      { label: "Lead AI adoption inside my QA team", value: "team-adoption" },
    ],
  },
];

export const categoryLabels: Record<Category, string> = {
  foundations: "QA Foundations",
  automation: "Automation",
  aiUsage: "AI Usage",
  aiTesting: "AI-Assisted Testing",
  agentic: "Agentic Workflows",
};

export const categoryWeights: Record<Category, number> = {
  foundations: 0.15,
  automation: 0.2,
  aiUsage: 0.15,
  aiTesting: 0.3,
  agentic: 0.2,
};

export type AssessmentScores = Record<Category, number> & { total: number };

export function calculateScores(answers: AssessmentAnswers): AssessmentScores {
  const buckets: Record<Category, number[]> = {
    foundations: [],
    automation: [],
    aiUsage: [],
    aiTesting: [],
    agentic: [],
  };

  assessmentQuestions.forEach((question) => {
    if (!question.category) return;
    const answer = answers[question.id];
    const option = question.options.find((item) => item.value === answer);
    if (typeof option?.score === "number") buckets[question.category].push(option.score);
  });

  const categoryScores = Object.fromEntries(
    (Object.keys(buckets) as Category[]).map((category) => {
      const values = buckets[category];
      const average = values.length
        ? Math.round(values.reduce((sum, value) => sum + value, 0) / values.length)
        : 0;
      return [category, average];
    }),
  ) as Record<Category, number>;

  const total = Math.round(
    (Object.keys(categoryWeights) as Category[]).reduce(
      (sum, category) => sum + categoryScores[category] * categoryWeights[category],
      0,
    ),
  );

  return { ...categoryScores, total };
}

export function getReadinessBand(score: number) {
  if (score <= 30) return { label: "FOUNDATIONAL", summary: "Your next advantage is building stronger AI-assisted QA habits from the ground up." };
  if (score <= 50) return { label: "DEVELOPING", summary: "You are experimenting with AI, but it is not yet a repeatable part of your QA workflow." };
  if (score <= 70) return { label: "AI-ASSISTED", summary: "AI is already supporting parts of your work. The opportunity is connecting those tasks into a system." };
  if (score <= 85) return { label: "ADVANCED", summary: "You are using AI across meaningful QA activities and are ready for more integrated workflows." };
  return { label: "AI-ENABLED", summary: "AI is already embedded deeply in how you approach Quality Engineering." };
}

export function getRoadmap(scores: AssessmentScores, goal?: string) {
  const ordered = (Object.keys(categoryLabels) as Category[])
    .map((category) => ({ category, score: scores[category] }))
    .sort((a, b) => a.score - b.score);

  const weakest = ordered[0].category;
  const secondWeakest = ordered[1].category;

  const actions: Record<Category, string[]> = {
    foundations: [
      "Take one real requirement and map happy paths, negative paths, boundaries, risks and dependencies before writing cases.",
      "Create a reusable test-design checklist that forces you to examine ambiguity and business risk.",
    ],
    automation: [
      "Choose one existing automated test and trace every failure point from test code to application behaviour and environment.",
      "Use a modern automation framework to refactor one brittle test into a more maintainable pattern.",
    ],
    aiUsage: [
      "Build one reusable QA prompt template with role, context, constraints, expected output and validation rules.",
      "Compare the same QA task across two AI assistants and document where each one helps or fails.",
    ],
    aiTesting: [
      "Run one requirement through an AI-assisted flow: ambiguity analysis → risks → scenarios → edge cases → test data.",
      "Use AI to inspect a real failure or log set, then validate every conclusion manually before trusting it.",
    ],
    agentic: [
      "Learn the difference between a chatbot, tool-using agent, RAG workflow and MCP-enabled system using one QA example for each.",
      "Prototype a tiny agentic QA workflow that accepts a requirement and returns a structured, reviewable test-design artifact.",
    ],
  };

  return [
    `Day 1 — Baseline: document how you currently perform one recurring QA task from start to finish.`,
    `Day 2 — ${categoryLabels[weakest]}: ${actions[weakest][0]}`,
    `Day 3 — ${categoryLabels[secondWeakest]}: ${actions[secondWeakest][0]}`,
    `Day 4 — Practice: ${actions[weakest][1]}`,
    `Day 5 — Integration: connect two AI-assisted QA tasks into one repeatable sequence instead of using isolated prompts.`,
    `Day 6 — Evidence: save your prompts, outputs, corrections and final QA artifact as a mini portfolio case study.`,
    `Day 7 — Next move: choose one workflow to repeat for the next 30 days${goal ? ` with your goal of “${goal.replaceAll("-", " ")}” in mind` : ""}.`,
  ];
}
