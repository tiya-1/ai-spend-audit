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
    <div className="rounded-3xl border border-purple-200 bg-white p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-black mb-4">
        AI Personalized Summary
      </h3>

      <p className="text-gray-700 text-lg leading-relaxed">
        {summary}
      </p>
    </div>
  );
}