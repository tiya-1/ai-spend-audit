"use client";

import { useEffect, useState } from "react";
import AISummary from "@/components/AISummary";

export default function ResultsPage() {
  const [result, setResult] =
    useState<any>(null);

  const [email, setEmail] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "audit-result"
      );

    if (saved) {
      setResult(JSON.parse(saved));
    }
  }, []);

  const handleNotify = async () => {
    if (!email) return;

    const res = await fetch(
      "/api/notify",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );

    if (res.ok) {
      setSubmitted(true);
    }
  };

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
        No audit results found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black px-6 py-16">
      <div className="mx-auto max-w-5xl space-y-8">

        {/* HERO */}
        <div className="rounded-3xl bg-black border border-white/10 p-10 shadow-2xl text-white">
          <h1 className="text-6xl font-black">
            💰 Save $
            {result.totalSavings}
            /month
          </h1>

          <p className="mt-5 text-2xl text-gray-300">
            Potential annual savings:
            <span className="font-bold text-white">
              {" "}
              $
              {result.totalSavings *
                12}
            </span>
          </p>
        </div>

        {/* AI SUMMARY */}
        <AISummary result={result} />

        {/* TOOL BREAKDOWN */}
        <div className="space-y-6">
          {result.tools?.map(
            (
              tool: any,
              i: number
            ) => (
              <div
                key={i}
                className="rounded-3xl bg-white p-8 shadow-2xl border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-black capitalize">
                    {tool.name}
                  </h2>

                  <div className="rounded-full bg-green-100 px-5 py-2 text-green-700 font-bold">
                    Save $
                    {tool.savings}
                    /mo
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-lg text-gray-700">
                  <p>
                    <span className="font-bold text-black">
                      Current Spend:
                    </span>{" "}
                    $
                    {
                      tool.currentSpend
                    }
                    /month
                  </p>

                  <p>
                    <span className="font-bold text-black">
                      Recommended Action:
                    </span>{" "}
                    {
                      tool.recommendedAction
                    }
                  </p>

                  <p>
                    <span className="font-bold text-black">
                      Reason:
                    </span>{" "}
                    {tool.reason}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* HIGH SAVINGS */}
        {result.totalSavings >
          500 && (
          <div className="rounded-3xl border border-purple-400 bg-purple-100 p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-purple-900">
              Capture More Savings 🚀
            </h2>

            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Your organization has
              significant AI spend
              inefficiencies.
              Credex can help
              consolidate vendors,
              negotiate pricing,
              and maximize
              startup/cloud
              credits.
            </p>
          </div>
        )}

        {/* LOW SAVINGS */}
        {result.totalSavings <
          100 && (
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-black">
              You're spending
              efficiently ✅
            </h2>

            <p className="mt-4 text-lg text-gray-700">
              We did not identify
              major inefficiencies
              in your current AI
              stack.
            </p>

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter work email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                className="flex-1 rounded-2xl border-4 border-purple-200 bg-white px-6 py-4 text-black placeholder:text-gray-800 outline-none focus:border-purple-500"
              />

              <button
                onClick={
                  handleNotify
                }
                className="rounded-2xl bg-purple-700 px-8 py-4 font-semibold text-white hover:bg-purple-800 transition"
              >
                {submitted
                  ? "Saved ✓"
                  : "Notify Me"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}