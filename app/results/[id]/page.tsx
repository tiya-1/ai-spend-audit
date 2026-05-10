import AuditResults from "@/components/AuditResults";
import { Metadata } from "next";

async function getAudit(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/audit/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}): Promise<Metadata> {
  const { id } = await params;

  const result = await getAudit(id);

  if (!result) {
    return {
      title: "AI Spend Audit",
    };
  }

  return {
    title: `Save $${result.monthlySavings}/month with AI Spend Audit`,

    description:
      result.summary ||
      "AI cost optimization report",

    openGraph: {
      title: `Save $${result.monthlySavings}/month`,
      description:
        result.summary,
      url: `/results/${id}`,
      siteName:
        "AI Spend Audit",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `Save $${result.monthlySavings}/month`,
      description:
        result.summary,
    },
  };
}

export default async function ResultsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const result = await getAudit(id);

  return (
    <main className="min-h-screen bg-black py-10">
      <AuditResults
        result={result}
      />
    </main>
  );
}