"use client";

import { useEffect, useState } from "react";
import AuditResults from "@/components/AuditResults";

export default function AuditPage() {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("audit-result");

    if (saved) {
      setResult(JSON.parse(saved));
    }
  }, []);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No audit data found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20">
      <AuditResults result={result} />
    </main>
  );
}