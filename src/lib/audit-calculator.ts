export type WasteBand = "low" | "medium" | "high";
export type AuditTier = "Free Self-Check" | "Solo Audit" | "Team Audit" | "Implementation Sprint";

export interface AuditEstimateInput {
  monthlySpendAud: number;
  teamSize: number;
  toolsUsed: string[];
  workloads: string[];
  hasApiUsage: boolean;
}

export interface AuditEstimate {
  wasteBand: WasteBand;
  estimatedSavingsLowAud: number;
  estimatedSavingsHighAud: number;
  recommendedTier: AuditTier;
  priorityRecommendations: string[];
  riskScore: number;
}

const AGENT_OR_API_WORKLOADS = new Set(["agents", "support", "documents", "coding"]);

function roundAud(value: number): number {
  return Math.round(value);
}

export function calculateAuditEstimate(input: AuditEstimateInput): AuditEstimate {
  const spend = Math.max(0, input.monthlySpendAud || 0);
  const teamSize = Math.max(1, input.teamSize || 1);
  const toolsCount = new Set(input.toolsUsed).size;
  const workloadCount = new Set(input.workloads).size;
  const agentWorkloadCount = input.workloads.filter((w) => AGENT_OR_API_WORKLOADS.has(w)).length;

  let riskScore = 0;
  riskScore += spend >= 1000 ? 3 : spend >= 300 ? 2 : 1;
  riskScore += toolsCount >= 4 ? 3 : toolsCount >= 2 ? 2 : 1;
  riskScore += teamSize >= 8 ? 2 : teamSize >= 3 ? 1 : 0;
  riskScore += input.hasApiUsage ? 2 : 0;
  riskScore += agentWorkloadCount >= 3 ? 2 : agentWorkloadCount >= 1 ? 1 : 0;
  riskScore += workloadCount >= 4 ? 1 : 0;

  let wasteBand: WasteBand = "low";
  let lowRate = 0.1;
  let highRate = 0.25;

  if (riskScore >= 11) {
    wasteBand = "high";
    lowRate = 0.35;
    highRate = 0.7;
  } else if (riskScore >= 6) {
    wasteBand = "medium";
    lowRate = 0.2;
    highRate = 0.5;
  }

  let recommendedTier: AuditTier = "Free Self-Check";
  if (spend >= 2500 || riskScore >= 11) {
    recommendedTier = "Implementation Sprint";
  } else if (teamSize >= 3 || spend >= 500) {
    recommendedTier = "Team Audit";
  } else if (spend > 0) {
    recommendedTier = "Solo Audit";
  }

  const priorityRecommendations: string[] = [];

  if (input.hasApiUsage || input.workloads.includes("agents")) {
    priorityRecommendations.push("Add model routing rules for repetitive/low-risk tasks");
    priorityRecommendations.push("Use caching for repeated prompts, documents, and agent restarts");
  }

  if (toolsCount >= 3) {
    priorityRecommendations.push("Consolidate overlapping AI seats and duplicate subscriptions");
  }

  if (input.workloads.includes("coding")) {
    priorityRecommendations.push("Separate coding tasks by risk: cheap model for drafts, frontier model for final review");
  }

  if (input.workloads.includes("documents") || input.workloads.includes("support")) {
    priorityRecommendations.push("Move document/support summarisation to cheaper long-context models where quality is sufficient");
  }

  if (priorityRecommendations.length === 0) {
    priorityRecommendations.push("Track monthly AI spend before adding more tools or seats");
  }

  return {
    wasteBand,
    estimatedSavingsLowAud: roundAud(spend * lowRate),
    estimatedSavingsHighAud: roundAud(spend * highRate),
    recommendedTier,
    priorityRecommendations,
    riskScore,
  };
}
