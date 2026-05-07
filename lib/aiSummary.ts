export function generateSummary(result: any) {
  if (!result) return "";

  const yearlySavings =
    result.totalSavings * 12;

  // HIGH SAVINGS
  if (result.totalSavings > 500) {
    return `
Your organization has significant AI spend inefficiencies with potential savings of approximately $${result.totalSavings}/month ($${yearlySavings}/year).

The audit identified opportunities to downgrade underutilized premium plans, consolidate overlapping AI tooling, and optimize seat allocation across teams.

Implementing these recommendations could materially reduce recurring software spend while maintaining similar productivity levels.
    `;
  }

  // MEDIUM SAVINGS
  if (result.totalSavings > 100) {
    return `
Several optimization opportunities were identified across your AI tooling stack.

Based on your current usage patterns, you could potentially save around $${result.totalSavings}/month ($${yearlySavings}/year) by selecting more cost-efficient plans and removing unnecessary premium subscriptions.

The current setup appears functional, but there are meaningful opportunities to improve ROI.
    `;
  }

  // LOW SAVINGS
  return `
Your current AI tooling setup appears relatively optimized based on the provided inputs.

The audit did not identify major pricing inefficiencies or unnecessary enterprise-level subscriptions. Estimated additional savings opportunities are currently limited.

We recommend periodically re-evaluating vendor pricing and available startup/student credits as the AI tooling market evolves.
  `;
}