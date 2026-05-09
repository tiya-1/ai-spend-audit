export function runAudit(data: any) {

  const tool = data.tool;

  // Supports BOTH plan and currentPlan
  const currentPlan =
    data.currentPlan ||
    data.plan ||
    "N/A";

  const spend = Number(data.spend || 0);

  const seats = Number(data.seats || 1);

  const teamSize = Number(data.teamSize || 1);

  let recommendedPlan = currentPlan;
  let monthlySavings = 0;
  let annualSavings = 0;

  let reason =
    "Your current setup already looks optimized.";

  /*
    =========================================================
    CHATGPT
    Plus / Team / Enterprise / API direct
    =========================================================
  */

  if (tool === "ChatGPT") {

    if (
      currentPlan === "Enterprise" &&
      teamSize <= 5
    ) {
      recommendedPlan = "Team";
      monthlySavings = Math.max(spend - 60, 0);
    }

    else if (
      currentPlan === "Team" &&
      teamSize === 1
    ) {
      recommendedPlan = "Plus";
      monthlySavings = Math.max(spend - 20, 0);
    }
  }

  /*
    =========================================================
    GITHUB COPILOT
    Individual / Business / Enterprise
    =========================================================
  */

  if (tool === "GitHub Copilot") {

    if (
      currentPlan === "Enterprise" &&
      teamSize <= 5
    ) {
      recommendedPlan = "Business";
      monthlySavings = Math.max(spend - 38, 0);
    }

    else if (
      currentPlan === "Business" &&
      teamSize === 1
    ) {
      recommendedPlan = "Individual";
      monthlySavings = Math.max(spend - 10, 0);
    }
  }

  /*
    =========================================================
    CLAUDE
    Free / Pro / Max / Team / Enterprise / API direct
    =========================================================
  */

  if (tool === "Claude") {

    if (
      currentPlan === "Enterprise" &&
      teamSize <= 5
    ) {
      recommendedPlan = "Team";
      monthlySavings = Math.max(spend - 120, 0);
    }

    else if (
      currentPlan === "Team" &&
      teamSize === 1
    ) {
      recommendedPlan = "Pro";
      monthlySavings = Math.max(spend - 20, 0);
    }

    else if (
      currentPlan === "Max" &&
      teamSize <= 2
    ) {
      recommendedPlan = "Pro";
      monthlySavings = Math.max(spend - 20, 0);
    }
  }

  /*
    =========================================================
    GEMINI
    Pro / Ultra / API
    =========================================================
  */

  if (tool === "Gemini") {

    if (
      currentPlan === "Ultra" &&
      teamSize <= 3
    ) {
      recommendedPlan = "Pro";
      monthlySavings = Math.max(spend - 20, 0);
    }
  }

  /*
    =========================================================
    CURSOR
    Hobby / Pro / Business / Enterprise
    =========================================================
  */

  if (tool === "Cursor") {

    if (
      currentPlan === "Enterprise" &&
      teamSize <= 5
    ) {
      recommendedPlan = "Business";
      monthlySavings = Math.max(spend - 40, 0);
    }

    else if (
      currentPlan === "Business" &&
      teamSize === 1
    ) {
      recommendedPlan = "Pro";
      monthlySavings = Math.max(spend - 20, 0);
    }
  }

  /*
    =========================================================
    WINDSURF
    =========================================================
  */

  if (tool === "Windsurf") {

    if (
      currentPlan === "Enterprise" &&
      teamSize <= 5
    ) {
      recommendedPlan = "Pro";
      monthlySavings = Math.max(spend - 15, 0);
    }
  }

  /*
    =========================================================
    FINAL CALCULATIONS
    =========================================================
  */

  annualSavings = monthlySavings * 12;

  if (monthlySavings > 0) {
    reason =
      `Downgrade from ${currentPlan} to ${recommendedPlan} to reduce unnecessary costs.`;
  }

  const summary = `
Your ${tool} subscription on the ${currentPlan} plan was analyzed.
Based on your workflow and team size of ${teamSize},
we identified approximately $${monthlySavings}/month in potential savings.
Recommended action: ${reason}
  `.trim();

  return {
    tool,
    currentPlan,
    recommendedPlan,
    spend,
    seats,
    teamSize,
    monthlySavings,
    annualSavings,
    reason,
    summary,
  };
}