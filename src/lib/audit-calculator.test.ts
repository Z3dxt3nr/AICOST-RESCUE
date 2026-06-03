import { describe, expect, it } from "vitest";
import { calculateAuditEstimate } from "./audit-calculator";

describe("calculateAuditEstimate", () => {
  it("estimates waste band, savings range, and recommends team audit for medium spend", () => {
    const estimate = calculateAuditEstimate({
      monthlySpendAud: 1200,
      teamSize: 6,
      toolsUsed: ["cursor", "claude-code", "openai-api"],
      workloads: ["coding", "agents", "documents"],
      hasApiUsage: true,
    });

    expect(estimate.wasteBand).toBe("medium");
    expect(estimate.estimatedSavingsLowAud).toBe(240);
    expect(estimate.estimatedSavingsHighAud).toBe(600);
    expect(estimate.recommendedTier).toBe("Team Audit");
    expect(estimate.priorityRecommendations).toContain("Add model routing rules for repetitive/low-risk tasks");
  });

  it("recommends solo audit for low-spend solo builders", () => {
    const estimate = calculateAuditEstimate({
      monthlySpendAud: 180,
      teamSize: 1,
      toolsUsed: ["cursor"],
      workloads: ["coding"],
      hasApiUsage: false,
    });

    expect(estimate.wasteBand).toBe("low");
    expect(estimate.recommendedTier).toBe("Solo Audit");
    expect(estimate.estimatedSavingsLowAud).toBe(18);
    expect(estimate.estimatedSavingsHighAud).toBe(45);
  });

  it("flags high waste when multiple tools and agent/API workloads are present", () => {
    const estimate = calculateAuditEstimate({
      monthlySpendAud: 5000,
      teamSize: 12,
      toolsUsed: ["cursor", "copilot", "claude-code", "openai-api", "anthropic-api"],
      workloads: ["coding", "support", "agents", "documents"],
      hasApiUsage: true,
    });

    expect(estimate.wasteBand).toBe("high");
    expect(estimate.estimatedSavingsLowAud).toBe(1750);
    expect(estimate.estimatedSavingsHighAud).toBe(3500);
    expect(estimate.recommendedTier).toBe("Implementation Sprint");
  });
});
