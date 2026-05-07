import { pricing } from "./pricingData";

type Form = {
  tool: string;
  plan: string;
  spend: string;
  seats: string;
  teamSize: string;
  useCase: string;
};

export function runAudit(form: Form) {
  const tool = form.tool.toLowerCase().trim();
  const plan = form.plan.toLowerCase().trim();

  const spend = Number(form.spend || 0);
  const seats = Number(form.seats || 1);
  const teamSize = Number(form.teamSize || 1);

  const useCase = form.useCase.toLowerCase();

  let totalSavings = 0;

  let recommendations: { text: string }[] = [];

  let tools: any[] = [];

  // =====================================================
  // CHATGPT
  // =====================================================

  if (tool === "chatgpt") {
    // TEAM -> PLUS
    if (plan === "team" && teamSize <= 3) {
      const currentSpend =
        pricing.chatgpt.team * seats;

      const recommendedSpend =
        pricing.chatgpt.plus * seats;

      const savings =
        currentSpend - recommendedSpend;

      if (savings > 0) {
        totalSavings += savings;

        tools.push({
          name: "ChatGPT",
          currentSpend,
          recommendedAction:
            "Switch from Team to Plus",

          savings,

          reason:
            "Small teams typically do not need shared workspace administration or enterprise collaboration features.",
        });

        recommendations.push({
          text: `ChatGPT Team costs ~$${currentSpend}/mo for ${seats} seats. ChatGPT Plus would reduce spend to ~$${recommendedSpend}/mo.`,
        });
      }
    }

    // ENTERPRISE -> TEAM
    if (plan === "enterprise" && teamSize < 20) {
      const estimatedEnterprise =
        60 * seats;

      const teamEquivalent =
        pricing.chatgpt.team * seats;

      const savings =
        estimatedEnterprise -
        teamEquivalent;

      if (savings > 0) {
        totalSavings += savings;

        tools.push({
          name: "ChatGPT",
          currentSpend:
            estimatedEnterprise,

          recommendedAction:
            "Downgrade Enterprise to Team",

          savings,

          reason:
            "Enterprise capabilities are typically unnecessary for smaller organizations.",
        });
      }
    }
  }

  // =====================================================
  // CLAUDE
  // =====================================================

  if (tool === "claude") {
    // MAX -> PRO
    if (plan === "max") {
      const currentSpend =
        pricing.claude.max * seats;

      const recommendedSpend =
        pricing.claude.pro * seats;

      const savings =
        currentSpend - recommendedSpend;

      if (savings > 0) {
        totalSavings += savings;

        tools.push({
          name: "Claude",
          currentSpend,
          recommendedAction:
            "Downgrade from Claude Max to Claude Pro",

          savings,

          reason:
            "Claude Max pricing is difficult to justify unless usage volumes are extremely high.",
        });

        recommendations.push({
          text: `Claude Max costs ~$${currentSpend}/mo. Claude Pro would reduce spend to ~$${recommendedSpend}/mo for similar everyday workflows.`,
        });
      }
    }

    // TEAM -> PRO
    if (
      plan === "team" &&
      teamSize <= 2
    ) {
      const currentSpend =
        pricing.claude.team * seats;

      const recommendedSpend =
        pricing.claude.pro * seats;

      const savings =
        currentSpend - recommendedSpend;

      if (savings > 0) {
        totalSavings += savings;

        tools.push({
          name: "Claude",
          currentSpend,
          recommendedAction:
            "Move from Team to Pro",

          savings,

          reason:
            "Shared team features are likely underutilized for small groups.",
        });
      }
    }

    // CODING USE CASE
    if (useCase === "coding") {
      recommendations.push({
        text: `For coding-heavy workflows, compare Claude against ChatGPT + Copilot integrations for better ecosystem efficiency.`,
      });
    }
  }

  // =====================================================
  // COPILOT
  // =====================================================

  if (tool === "copilot") {
    // BUSINESS -> INDIVIDUAL
    if (
      plan === "business" &&
      teamSize <= 2
    ) {
      const currentSpend =
        pricing.copilot.business * seats;

      const recommendedSpend =
        pricing.copilot.individual *
        seats;

      const savings =
        currentSpend - recommendedSpend;

      if (savings > 0) {
        totalSavings += savings;

        tools.push({
          name: "GitHub Copilot",
          currentSpend,
          recommendedAction:
            "Switch from Business to Individual",

          savings,

          reason:
            "Business governance controls may not justify additional spend for small teams.",
        });

        recommendations.push({
          text: `Copilot Business costs ~$${currentSpend}/mo. Copilot Individual reduces cost to ~$${recommendedSpend}/mo.`,
        });
      }
    }
  }

  // =====================================================
  // CURSOR
  // =====================================================

  if (tool === "cursor") {
    if (
      plan === "business" &&
      teamSize <= 2
    ) {
      const currentSpend =
        pricing.cursor.business * seats;

      const recommendedSpend =
        pricing.cursor.pro * seats;

      const savings =
        currentSpend - recommendedSpend;

      if (savings > 0) {
        totalSavings += savings;

        tools.push({
          name: "Cursor",
          currentSpend,
          recommendedAction:
            "Move from Business to Pro",

          savings,

          reason:
            "Most solo developers and small teams do not need advanced admin tooling.",
        });
      }
    }

    recommendations.push({
      text: `If your workflow mainly requires autocomplete, GitHub Copilot may provide similar value at lower cost.`,
    });
  }

  // =====================================================
  // GEMINI
  // =====================================================

  if (tool === "gemini") {
    if (plan === "ultra") {
      const currentSpend =
        pricing.gemini.ultra * seats;

      const recommendedSpend =
        pricing.gemini.pro * seats;

      const savings =
        currentSpend - recommendedSpend;

      if (savings > 0) {
        totalSavings += savings;

        tools.push({
          name: "Gemini",
          currentSpend,
          recommendedAction:
            "Switch from Ultra to Pro",

          savings,

          reason:
            "Gemini Ultra may be unnecessary for general productivity tasks.",
        });
      }
    }

    recommendations.push({
      text: `Benchmark Gemini against ChatGPT and Claude for your primary workload to validate ROI.`,
    });
  }

  // =====================================================
  // WINDSURF
  // =====================================================

  if (tool === "windsurf") {
    recommendations.push({
      text: `Compare Windsurf against Cursor and Copilot to validate whether premium IDE features are delivering measurable productivity gains.`,
    });
  }

  // =====================================================
  // API USERS
  // =====================================================

  if (
    tool.includes("api") ||
    plan.includes("api")
  ) {
    recommendations.push({
      text: `API pricing is usage-based. Consider caching, token limits, and usage monitoring to reduce unexpected spend.`,
    });
  }

  // =====================================================
  // UNDERUTILIZED TEAM PLANS
  // =====================================================

  if (
    plan === "team" &&
    teamSize <= 1 &&
    spend > 20
  ) {
    const optimizedCost = 20;

    const savings =
      spend - optimizedCost;

    if (savings > 0) {
      totalSavings += savings;

      recommendations.push({
        text: `Only one active user detected. Individual subscriptions may reduce spend by ~$${savings}/mo.`,
      });
    }
  }

  // =====================================================
  // CREDIT RECOMMENDATIONS
  // =====================================================

  if (
    useCase === "coding" ||
    useCase === "research"
  ) {
    recommendations.push({
      text: `Check GitHub Student Pack, startup programs, or cloud credits to offset AI tooling costs.`,
    });
  }

  // =====================================================
  // NO SAVINGS
  // =====================================================

  if (tools.length === 0) {
    tools.push({
      name: form.tool,
      currentSpend: spend,
      recommendedAction:
        "No major optimization required",

      savings: 0,

      reason:
        "Current setup already appears cost-efficient based on provided usage patterns.",
    });
  }

  return {
    totalSavings: Math.max(
      0,
      Math.round(totalSavings)
    ),

    recommendations,

    tools,
  };
}