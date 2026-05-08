"use client";

import { useEffect, useState } from "react";

import AuditResults from "@/components/AuditResults";

export default function ResultsPage() {
  const [result, setResult] =
    useState<any>(null);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "audit-result"
      );

    if (saved) {
      setResult(JSON.parse(saved));
    }
  }, []);

  if (!result) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        No audit results found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <AuditResults result={result} />
    </main>
  );
}