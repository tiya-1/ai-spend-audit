
import { describe, it, expect } from "vitest";

import { runAudit } from "../lib/auditEngine";

describe("AI Audit Engine", () => {

  it("calculates monthly savings correctly", () => {
    const result = runAudit({
      tool: "Cursor",
      currentPlan: "Enterprise",
      spend: 100,
      seats: 5,
      teamSize: 5,
      useCase: "Coding",
    });

    expect(result.monthlySavings).toBeGreaterThan(0);
  });

  it("calculates annual savings correctly", () => {
    const result = runAudit({
      tool: "ChatGPT",
      currentPlan: "Enterprise",
      spend: 200,
      seats: 10,
      teamSize: 5,
      useCase: "Writing",
    });

    expect(result.annualSavings).toBe(
      result.monthlySavings * 12
    );
  });

  it("returns recommendation text", () => {
    const result = runAudit({
      tool: "Claude",
      currentPlan: "Pro",
      spend: 50,
      seats: 2,
      teamSize: 2,
      useCase: "Research",
    });

    expect(result.reason).toBeTruthy();
  });

  it("returns summary text", () => {
    const result = runAudit({
      tool: "Gemini",
      currentPlan: "Ultra",
      spend: 80,
      seats: 3,
      teamSize: 3,
      useCase: "Mixed",
    });

    expect(result.summary).toBeTruthy();
  });

  it("handles zero spend safely", () => {
    const result = runAudit({
      tool: "OpenAI API",
      currentPlan: "Free",
      spend: 0,
      seats: 1,
      teamSize: 1,
      useCase: "Coding",
    });

    expect(result.monthlySavings).toBeGreaterThanOrEqual(0);
  });

});

