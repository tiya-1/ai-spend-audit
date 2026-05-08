"use client";

export default function AuditResults({
  result,
}: {
  result: any;
}) {
  if (!result) {
    return (
      <div className="text-white">
        No audit results found.
      </div>
    );
  }

  const monthlySavings = Number(
    result?.monthlySavings || 0
  );

  const annualSavings = Number(
    result?.annualSavings || 0
  );

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20">

      {/* HERO */}
      <div className="rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-[#180028] to-[#220033] p-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 text-5xl">
            💰
          </div>

          <div>
            <h1 className="text-4xl font-black text-white md:text-6xl">
              Save $
              {monthlySavings}
              /month
            </h1>

            <p className="mt-3 text-xl text-gray-300 md:text-2xl">
              Potential annual savings: $
              {annualSavings}
            </p>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-[#160024] to-[#220033] p-8">

        <div className="mb-6 flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-3xl">
            ✨
          </div>

          <div>
            <h2 className="text-3xl font-black text-white md:text-5xl">
              AI Personalized Summary
            </h2>

            <p className="mt-1 text-sm text-purple-200 md:text-base">
              Generated using live LLM analysis
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
          {result.summary}
        </p>
      </div>

      {/* TOOL INFO */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-[#14001f] p-6">
          <p className="text-gray-400">
            Current Tool
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            {result.tool || "N/A"}
          </h3>
        </div>

        <div className="rounded-3xl bg-[#14001f] p-6">
          <p className="text-gray-400">
            Current Plan
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            {result.currentPlan || "N/A"}
          </h3>
        </div>

        <div className="rounded-3xl bg-[#14001f] p-6">
          <p className="text-gray-400">
            Recommended Plan
          </p>

          <h3 className="mt-3 text-3xl font-bold text-green-400">
            {result.recommendedPlan || result.currentPlan}
          </h3>
        </div>
      </div>

      {/* SPEND */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-[#14001f] p-6">
          <p className="text-gray-400">
            Monthly Spend
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            ${result.spend || 0}
          </h3>
        </div>

        <div className="rounded-3xl bg-[#14001f] p-6">
          <p className="text-gray-400">
            Seats
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            {result.seats || 1}
          </h3>
        </div>

        <div className="rounded-3xl bg-[#14001f] p-6">
          <p className="text-gray-400">
            Team Size
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            {result.teamSize || 1}
          </h3>
        </div>
      </div>

      {/* RECOMMENDATION */}
      <div className="rounded-[32px] border border-green-500/20 bg-gradient-to-br from-[#05210f] to-[#08140d] p-8">

        <h2 className="text-3xl font-black text-white md:text-5xl">
          Recommended Action
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-green-100 md:text-2xl">
          {result.recommendation ||
            "Your setup already looks optimized."}
        </p>
      </div>

      {/* EMAIL CTA */}
      <div className="rounded-[32px] border border-pink-500/20 bg-gradient-to-br from-[#220014] to-[#2a0018] p-8">

        <h2 className="text-3xl font-black text-white md:text-5xl">
          Get Full Savings Report
        </h2>

        <p className="mt-4 text-lg text-pink-100 md:text-xl">
          Receive a detailed AI optimization report and future saving recommendations.
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">

          <input
            type="email"
            placeholder="Enter your email"
            className="h-14 flex-1 rounded-2xl bg-black/30 px-5 text-white outline-none"
          />

          <button
            className="h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-8 text-lg font-bold text-white"
          >
            Send Report
          </button>
        </div>
      </div>

    </div>
  );
}