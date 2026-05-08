type Form = {
  tool: string;
  currentPlan: string;
  spend: string;
  seats: string;
  teamSize: string;
  useCase: string;
};

export function runAudit(form: Form) {
  const spend = Number(form.spend || 0);
  const seats = Number(form.seats || 1);

  let recommendedPlan = form.currentPlan;
  let monthlySavings = 0;
  let recommendation =
    "Your setup already looks optimized.";

  // CHATGPT
  if (
    form.tool === "ChatGPT" &&
    form.currentPlan === "Pro"
  ) {
    recommendedPlan = "Plus";
    monthlySavings = 25;
    recommendation =
      "Downgrade from Pro to Plus to reduce unnecessary costs.";
  }

  // TEAM
  if (
    form.currentPlan === "Team" &&
    seats <= 5
  ) {
    recommendedPlan = "Pro";
    monthlySavings = 80;
    recommendation =
      "Small teams can save money using Pro instead of Team.";
  }

  // ENTERPRISE
  if (
    form.currentPlan === "Enterprise"
  ) {
    recommendedPlan = "Team";
    monthlySavings = 300;
    recommendation =
      "Enterprise appears oversized for your current usage.";
  }

  const annualSavings =
    monthlySavings * 12;

  const summary = `
Your ${form.tool} subscription on the ${form.currentPlan} plan was analyzed.
Based on your ${form.useCase} workflow and team size of ${form.teamSize},
we identified approximately $${monthlySavings}/month in savings.
Recommended action: ${recommendation}
`;

  return {
    tool: form.tool,
    currentPlan: form.currentPlan,
    recommendedPlan,
    spend,
    seats,
    teamSize: form.teamSize,
    monthlySavings,
    annualSavings,
    recommendation,
    summary,
  };
}