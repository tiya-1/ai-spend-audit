import AISummary from "./AISummary";

export default function AuditResults({
  result,
}: {
  result: any;
}) {
  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* HERO */}
      <div className="rounded-3xl bg-gradient-to-br from-purple-700 to-black p-10 text-white shadow-2xl">
        <h1 className="text-6xl font-bold">
          Save ${result.totalSavings}/mo
        </h1>

        <p className="mt-4 text-2xl text-purple-100">
          Annual savings:
          {" "}
          <span className="font-bold">
            ${result.totalSavings * 12}
          </span>
        </p>
      </div>

      {/* AI SUMMARY */}
      <AISummary result={result} />

      {/* TOOL BREAKDOWN */}
      <div className="space-y-6">
        {result.tools?.map(
          (tool: any, i: number) => (
            <div
              key={i}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-black">
                  {tool.name}
                </h2>

                <div className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
                  Save ${tool.savings}/mo
                </div>
              </div>

              <div className="mt-6 space-y-4 text-lg">
                <p className="text-gray-700">
                  <span className="font-semibold text-black">
                    Current Spend:
                  </span>
                  {" "}
                  ${tool.currentSpend}/month
                </p>

                <p className="text-gray-700">
                  <span className="font-semibold text-black">
                    Recommended Action:
                  </span>
                  {" "}
                  {tool.recommendedAction}
                </p>

                <p className="text-gray-700">
                  <span className="font-semibold text-black">
                    Reason:
                  </span>
                  {" "}
                  {tool.reason}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {/* HIGH SAVINGS */}
      {result.totalSavings > 500 && (
        <div className="rounded-3xl border border-purple-300 bg-purple-100 p-8">
          <h2 className="text-3xl font-bold text-purple-900">
            Capture More Savings with Credex
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            Your organization has significant AI spend inefficiencies.
            Credex helps consolidate vendors, negotiate pricing,
            and maximize startup/cloud credits.
          </p>
        </div>
      )}

      {/* LOW SAVINGS */}
      {result.totalSavings < 100 && (
        <div className="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 className="text-3xl font-bold text-black">
            You're spending well ✅
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            We did not identify major inefficiencies in your AI stack.
          </p>

          <div className="mt-6 flex gap-3">
            <input
  type="email"
  placeholder="Enter work email"
  className="flex-1 rounded-2xl border-4 border-purple-200 bg-white px-6 py-4 text-black placeholder:text-black outline-none focus:border-purple-500"
/>

            <button className="rounded-xl bg-purple-700 px-6 py-4 font-semibold text-white">
              Notify Me
            </button>
          </div>
        </div>
      )}
    </div>
  );
}