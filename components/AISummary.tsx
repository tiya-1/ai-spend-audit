"use client";

import { useEffect, useState } from "react";

export default function AISummary({
  result,
}: {
  result: any;
}) {
  const [summary, setSummary] =
    useState(
      "Generating AI summary..."
    );

  useEffect(() => {
    const generateSummary =
      async () => {
        try {
          const response =
            await fetch(
              "/api/summary",
              {
                method: "POST",
                headers: {
                  "Content-Type":
                    "application/json",
                },
                body: JSON.stringify(
                  result
                ),
              }
            );

          const data =
            await response.json();

          setSummary(
            data.summary
          );
        } catch {
          setSummary(
            "Your AI stack has optimization opportunities through smarter vendor selection and plan optimization."
          );
        }
      };

    generateSummary();
  }, [result]);

  return (
    <div className="rounded-[32px] border border-purple-500/20 bg-gradient-to-br from-[#12061d] to-[#1a0826] p-8">
      <div className="flex items-start gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-3xl">
          ✨
        </div>

        <div className="flex-1">
          <h3 className="text-4xl font-black text-white">
            AI Personalized Summary
          </h3>

          <p className="mt-2 text-purple-300">
            Generated using live LLM analysis
          </p>

          <p className="mt-6 text-xl leading-relaxed text-gray-200">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}